"use client";

import SectionHeader from "./section-header";
import { motion } from "framer-motion";

export default function HowSection() {
  return (
    <section id="how" className="px-5 py-12">
      <div className="max-w-5xl mx-auto">
        <SectionHeader 
          title="How it works" 
          subtitle="Three ways to get help"
          description="Built for everyone — from feature phones to state-of-the-art command centers."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2 lg:gap-6">
          {/* Primary Feature: Hotline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 md:row-span-2 group relative overflow-hidden p-6 sm:p-8 lg:p-10 border border-zinc-200 rounded-[calc(1.5rem-1px)] sm:rounded-[calc(2rem-1px)] bg-zinc-900 text-white transition-all duration-300 hover:shadow-2xl"
          >
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="text-4xl mb-6">📞</div>
                <h4 className="text-xl sm:text-3xl font-bold mb-3 tracking-tight">Call the GRID Hotline</h4>
                <p className="text-zinc-400 text-base leading-relaxed max-w-md">
                  Speak naturally, get hospital availability in &lt;4s. Optimized for local dialects and works on any phone without data.
                </p>
              </div>
              <div className="mt-8">
                <span className="inline-flex max-w-full items-center gap-2 rounded-full bg-white/10 px-4 py-3 text-sm font-bold text-white transition-colors group-hover:bg-white/20 sm:px-6">
                  Dial 0800-EMERGE <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </div>
            {/* Decorative Glow */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[#0A74DA]/20 rounded-full blur-3xl group-hover:bg-[#0A74DA]/30 transition-colors" />
          </motion.div>

          {/* Secondary Feature: WhatsApp */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group p-5 sm:p-6 border border-zinc-200 rounded-[calc(1.5rem-1px)] sm:rounded-[calc(2rem-1px)] bg-white hover:bg-zinc-50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
          >
            <div className="text-4xl mb-6">💬</div>
            <h4 className="text-xl font-bold text-zinc-900 mb-2">WhatsApp GRID</h4>
            <p className="text-zinc-600 text-sm leading-relaxed">Report incidents, receive first-aid guidance, and notify hospitals instantly via a simple chat interface.</p>
          </motion.div>

          {/* Secondary Feature: Dashboard */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group p-5 sm:p-6 border border-zinc-200 rounded-[calc(1.5rem-1px)] sm:rounded-[calc(2rem-1px)] bg-white hover:bg-zinc-50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
          >
            <div className="text-4xl mb-6">🗺</div>
            <h4 className="text-xl font-bold text-zinc-900 mb-2">Live Dashboard</h4>
            <p className="text-zinc-600 text-sm leading-relaxed">Real-time mapping of healthcare capacity. Open to the public with no login required for maximum accessibility.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
