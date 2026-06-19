import { useCallback, useRef, useState } from "react";

interface UseWebSocketAudioOptions {
  onMessage?: (data: string) => void;
  onError?: (error: string) => void;
  onStatusChange?: (status: string) => void;
}

const DEFAULT_BACKEND_URL = "http://localhost:5000";

const getWebSocketUrl = () => {
  const backendUrl =
    process.env.NEXT_PUBLIC_BACKEND_URL?.trim() || DEFAULT_BACKEND_URL;
  const url = new URL("/browser/stream", backendUrl);

  url.protocol = url.protocol === "https:" ? "wss:" : "ws:";

  return url.toString();
};

export const useWebSocketAudio = ({
  onMessage,
  onError,
  onStatusChange,
}: UseWebSocketAudioOptions = {}) => {
  const [isConnected, setIsConnected] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const wsRef = useRef<WebSocket | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const scheduleTimeRef = useRef(0);
  const isRecordingRef = useRef(false);

  const playAudioStream = useCallback((payload: string) => {
    if (!audioContextRef.current) return;

    try {
      const buffer = Uint8Array.from(atob(payload), (c) => c.charCodeAt(0))
        .buffer;
      const int16 = new Int16Array(buffer);
      const outputBuf = audioContextRef.current.createBuffer(
        1,
        int16.length,
        24000
      );
      const channels = outputBuf.getChannelData(0);

      for (let i = 0; i < int16.length; i++) {
        channels[i] = int16[i] / 0x7fff;
      }

      const srcNode = audioContextRef.current.createBufferSource();
      srcNode.buffer = outputBuf;
      srcNode.connect(audioContextRef.current.destination);

      const now = audioContextRef.current.currentTime;
      if (scheduleTimeRef.current < now) {
        scheduleTimeRef.current = now;
      }

      srcNode.start(scheduleTimeRef.current);
      scheduleTimeRef.current += outputBuf.duration;
    } catch (error) {
      console.error("Error playing audio:", error);
    }
  }, []);

  const startCall = useCallback(async () => {
    try {
      const ws = new WebSocket(getWebSocketUrl());

      ws.onopen = async () => {
        setIsConnected(true);
        onStatusChange?.("Connected - Initializing microphone...");

        try {
          // Initialize audio context
          audioContextRef.current = new (window.AudioContext ||
            (window as any).webkitAudioContext)({
            sampleRate: 16000,
          });

          // Get microphone access
          const mediaStream =
            await navigator.mediaDevices.getUserMedia({ audio: true });
          mediaStreamRef.current = mediaStream;

          const src =
            audioContextRef.current.createMediaStreamSource(mediaStream);
          const processor =
            audioContextRef.current.createScriptProcessor(2048, 1, 1);
          processorRef.current = processor;

          src.connect(processor);
          processor.connect(audioContextRef.current.destination);

          processor.onaudioprocess = (e) => {
            if (!isRecordingRef.current) return;

            const incoming = e.inputBuffer.getChannelData(0);
            const pcm16 = new Int16Array(incoming.length);

            for (let i = 0; i < incoming.length; i++) {
              pcm16[i] = Math.max(-1, Math.min(1, incoming[i])) * 0x7fff;
            }

            const uint8Array = new Uint8Array(pcm16.buffer);
            let binaryString = "";
            for (let i = 0; i < uint8Array.length; i++) {
              binaryString += String.fromCharCode(uint8Array[i]);
            }
            const base64Str = btoa(binaryString);

            if (ws.readyState === WebSocket.OPEN) {
              ws.send(
                JSON.stringify({
                  event: "media",
                  media: { payload: base64Str },
                })
              );
            }
          };

          setIsRecording(true);
          isRecordingRef.current = true;
          onStatusChange?.("System Live - Speak Now");
        } catch (err) {
          const errorMsg = `Microphone access denied: ${err}`;
          onError?.(errorMsg);
          onStatusChange?.(errorMsg);
          ws.close();
        }
      };

      ws.onmessage = (e) => {
        const data = JSON.parse(e.data);
        if (data.event === "media") {
          playAudioStream(data.media.payload);
        }
        onMessage?.(JSON.stringify(data));
      };

      ws.onerror = (error) => {
        const errorMsg = `WebSocket error: ${error}`;
        onError?.(errorMsg);
        onStatusChange?.(errorMsg);
      };

      ws.onclose = () => {
        setIsConnected(false);
        setIsRecording(false);
        isRecordingRef.current = false;
        onStatusChange?.("Disconnected");
      };

      wsRef.current = ws;
    } catch (err) {
      const errorMsg = `Failed to start call: ${err}`;
      onError?.(errorMsg);
      onStatusChange?.(errorMsg);
    }
  }, [onError, onMessage, onStatusChange, playAudioStream]);

  const endCall = useCallback(() => {
    isRecordingRef.current = false;
    setIsRecording(false);

    if (processorRef.current) {
      processorRef.current.disconnect();
    }

    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
    }

    if (audioContextRef.current) {
      audioContextRef.current.close();
    }

    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.close();
    }

    setIsConnected(false);
    onStatusChange?.("Offline");
  }, [onStatusChange]);

  return {
    isConnected,
    isRecording,
    startCall,
    endCall,
  };
};
