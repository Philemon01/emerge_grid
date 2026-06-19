"use client";

import { useState, type MouseEvent } from "react";
import Image from "next/image";
import heroImage from "../asset/images/Rectangle 33 (1).png";
import { motion } from "framer-motion";
import { useWebSocketAudio } from "../hooks/useWebSocketAudio";

export default function HeroSection() {
  const [status, setStatus] = useState("Offline");
  const { isConnected, startCall, endCall } = useWebSocketAudio({
    onStatusChange: setStatus,
  });

  const handleCallClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isConnected) {
      endCall();
    } else {
      startCall();
    }
  };

  return (
    <section className="relative px-5 pb-6 pt-1 sm:pb-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative min-h-[440px] overflow-hidden rounded-[calc(1.5rem-1px)] border border-white/10 shadow-2xl sm:h-[560px] sm:rounded-[23px] lg:h-[650px]">
          <Image 
            src={heroImage} 
            alt="Emergency coordination hero" 
            fill 
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
            className="object-cover" 
            priority 
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col justify-center p-5 sm:p-10 lg:p-20">
            {/* <div className="mb-8 text-sm font-semibold uppercase tracking-[0.3em] text-white/90">EMERGE_GRID</div> */}

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl"
            >
              <p className="text-xs tracking-[0.2em] uppercase text-white/75 mb-4 sm:text-sm sm:tracking-[0.24em]">Realtime Hospital</p>
              <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                Visibility for <span className="text-[#B9E0FF]">Port Harcourt</span> Sector
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
                High-yield operational dashboard tracking triage latency, critical trauma levels, and bed availabilities across Port Harcourt&apos;s healthcare network.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {/* Call Button - Now Interactive */}
                <button 
                  onClick={handleCallClick}
                  className={`px-3 py-2.5 rounded-[1px] border-2 text-center text-sm font-bold transition-colors ${
                    isConnected
                      ? "border-[#ff4444] bg-[#ff4444]/20 text-[#ff6666] hover:bg-[#ff4444]/30"
                      : "border-[#ffffff] text-[#ffffff] hover:bg-[#0A74DA]/10"
                  }`}
                >
                  {isConnected ? "Disconnect Call" : "Call - 0800 EMERGE"}
                </button>
                
                {/* Status Indicator */}
                {isConnected && (
                  <div className="px-3 py-2.5 rounded-[1px] bg-[#00AA00]/20 text-center text-sm font-bold text-[#00DD00]">
                    {status}
                  </div>
                )}
                
                {/* Primary CTA */}
                <a className="px-3 py-2.5 rounded-[1px] bg-[#0A74DA] text-center text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#0757a4]" href="#">Message via WhatsApp</a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
