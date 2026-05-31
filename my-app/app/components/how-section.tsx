import SectionHeader from "./section-header";

export default function HowSection() {
  return (
    <section id="how" className="px-6 py-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <SectionHeader 
          title="How it works" 
          subtitle="Three ways to get help"
          description="Built for everyone — from feature phones to state-of-the-art command centers."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">
          {/* Primary Feature: Hotline */}
          <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden p-8 sm:p-10 border border-zinc-200 rounded-[2rem] bg-zinc-900 text-white transition-all duration-300 hover:shadow-2xl">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="text-4xl mb-6">📞</div>
                <h4 className="text-xl sm:text-3xl font-bold mb-3 tracking-tight">Call the GRID Hotline</h4>
                <p className="text-zinc-400 text-base leading-relaxed max-w-md">
                  Speak naturally, get hospital availability in &lt;4s. Optimized for local dialects and works on any phone without data.
                </p>
              </div>
              <div className="mt-8">
                <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white font-bold text-sm group-hover:bg-white/20 transition-colors cursor-pointer">
                  Dial 0800-EMERGE <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </div>
            {/* Decorative Glow */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[#3b24c9]/20 rounded-full blur-3xl group-hover:bg-[#3b24c9]/30 transition-colors" />
          </div>

          {/* Secondary Feature: WhatsApp */}
          <div className="group p-6 border border-zinc-200 rounded-[2rem] bg-white hover:bg-zinc-50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between">
            <div className="text-4xl mb-6">💬</div>
            <h4 className="text-xl font-bold text-zinc-900 mb-2">WhatsApp GRID</h4>
            <p className="text-zinc-600 text-sm leading-relaxed">Report incidents, receive first-aid guidance, and notify hospitals instantly via a simple chat interface.</p>
          </div>

          {/* Secondary Feature: Dashboard */}
          <div className="group p-6 border border-zinc-200 rounded-[2rem] bg-white hover:bg-zinc-50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between">
            <div className="text-4xl mb-6">🗺</div>
            <h4 className="text-xl font-bold text-zinc-900 mb-2">Live Dashboard</h4>
            <p className="text-zinc-600 text-sm leading-relaxed">Real-time mapping of healthcare capacity. Open to the public with no login required for maximum accessibility.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
