"use client";

import { motion } from "framer-motion";
import { FADE_UP, STAGGER_ITEM } from "./animations";

export default function FeaturesSection() {
  const features = [
    { icon: "📱", text: "Works on any phone — no smartphone or data needed" },
    { icon: "🎙", text: "AI voice hotline — optimized for Nigerian English" },
    { icon: "💬", text: "WhatsApp incident reporting + first aid guidance" },
    { icon: "🚨", text: "Hospital auto-alerts on incident detection" },
    { icon: "📉", text: "Offline dashboard — loads reliably on 3G" },
    { icon: "⚖️", text: "Calibrated uncertainty — never fabricates data" },
  ];

  return (
    <section id="features" className="px-5 py-12">
      <motion.div
        {...FADE_UP(0, 30)}
        className="max-w-5xl mx-auto bg-zinc-900 text-white rounded-[calc(2rem-1px)] p-6 sm:rounded-[calc(3rem-1px)] sm:p-10 lg:p-16 xl:p-20"
      >
        <div className="mb-8 sm:mb-12">
          <h3 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-3">
            Key features
          </h3>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Built for the local reality.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-10">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              {...STAGGER_ITEM(i)}
              className="flex gap-4 items-start"
            >
              <span className="text-2xl">{f.icon}</span>
              <p className="text-zinc-400 leading-relaxed font-medium">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
