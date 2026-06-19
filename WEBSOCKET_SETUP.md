# WebSocket Integration Guide - Emerge Grid

## Overview
This guide explains the WebSocket connection between the frontend and backend, enabling real-time voice communication with the Emerge agent.

## Architecture

### Backend Components
- **Main Server** (`backend/main.py`): FastAPI server with CORS enabled
- **WebSocket Endpoint** (`backend/browser.py`): `/browser/stream` handles real-time audio
- **Agent** (`backend/agent/emerge_agent.py`): Google ADK agent for emergency assistance

### Frontend Components
- **Hook** (`my-app/app/hooks/useWebSocketAudio.ts`): React hook managing WebSocket lifecycle
- **Hero Section** (`my-app/app/components/hero-section.tsx`): Call button UI

## How It Works

### 1. Call Initialization
When a user clicks the "Call - 0800 EMERGE" button:
1. `handleCallClick()` in HeroSection triggers `startCall()`
2. `useWebSocketAudio` hook initiates WebSocket connection to `ws://localhost:5000/browser/stream`
3. Browser requests microphone permissions (one-time)

### 2. Audio Flow
**Microphone → Backend → Agent → Frontend Speaker**

1. **Capture**: Browser captures audio at 16kHz PCM
2. **Encode**: Converts to base64 and sends via WebSocket
3. **Backend**: Receives audio, sends to Gemini agent
4. **Response**: Agent responds with audio at 24kHz
5. **Playback**: Frontend decodes and plays response through speaker

### 3. WebSocket Message Format

**Client → Server (Audio Input)**
```json
{
  "event": "media",
  "media": {
    "payload": "base64EncodedAudioData"
  }
}
```

**Server → Client (Audio Output)**
```json
{
  "event": "media",
  "media": {
    "payload": "base64EncodedResponseAudio"
  }
}
```

## Setup Instructions

### Backend Setup
```bash
cd backend

# Install dependencies (already in pyproject.toml)
pip install -e .

# Start the server
python main.py
```

Server runs on `http://localhost:5000`

### Frontend Setup
```bash
cd my-app

# Install dependencies
npm install

# Run development server
npm run dev
```

Frontend runs on `http://localhost:3000`

## Environment Variables

### Backend (.env)
```
GEMINI_API_KEY=your_api_key_here
```

## Testing

1. Open `http://localhost:3000` in your browser
2. Scroll to the hero section
3. Click "Call - 0800 EMERGE" button
4. Allow microphone access when prompted
5. Start speaking - you should see "🟢 System Live - Speak Now"
6. Listen for the agent's response
7. Click "Disconnect Call" to end the call

## Troubleshooting

### WebSocket Connection Fails
- Check backend is running: `http://localhost:5000/health`
- Verify frontend and backend URLs match in `useWebSocketAudio.ts`
- Check CORS settings in `backend/main.py`

### No Microphone Access
- Ensure browser has microphone permissions
- Check browser console for security errors
- Use HTTPS for production (WSS protocol)

### No Audio Playback
- Verify audio context is created with 24kHz sample rate
- Check browser audio output is not muted
- Inspect network tab for WebSocket messages

### Agent Not Responding
- Verify GEMINI_API_KEY is set in `.env`
- Check backend logs for agent errors
- Ensure Google ADK is properly installed

## Production Considerations

1. **CORS**: Update `allow_origins` in `backend/main.py` to specific domain
2. **WebSocket Security**: Use `wss://` (WebSocket Secure) for HTTPS
3. **Error Handling**: Add retry logic and timeout management
4. **Audio Compression**: Consider compressing audio for bandwidth optimization
5. **Session Management**: Add session timeouts and cleanup
6. **Monitoring**: Add logging for debugging and analytics

## File Locations
- Backend WebSocket: `backend/browser.py:@browser_router.websocket("/stream")`
- Frontend Hook: `my-app/app/hooks/useWebSocketAudio.ts`
- Hero Component: `my-app/app/components/hero-section.tsx`
