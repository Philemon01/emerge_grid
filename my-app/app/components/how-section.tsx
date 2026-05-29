import SectionHeader from "./section-header";

export default function HowSection() {
  return (
    <section id="how" className="py-20 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          title="How it works" 
          subtitle="Three ways to get help"
          description="Built for everyone — from feature phones to state-of-the-art command centers."
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="group p-8 border border-zinc-100 rounded-3xl bg-zinc-50/50 hover:bg-zinc-50 transition-colors">
            <div className="text-4xl mb-6">📞</div>
            <h4 className="text-xl font-bold text-zinc-900 mb-3">Call the GRID Hotline</h4>
            <p className="text-zinc-600 text-sm leading-relaxed">Speak naturally, get hospital availability in &lt;4s. Works on all feature phones.</p>
          </div>
          <div className="group p-8 border border-zinc-100 rounded-3xl bg-zinc-50/50 hover:bg-zinc-50 transition-colors">
            <div className="text-4xl mb-6">💬</div>
            <h4 className="text-xl font-bold text-zinc-900 mb-3">WhatsApp GRID</h4>
            <p className="text-zinc-600 text-sm leading-relaxed">Report incidents, receive first-aid guidance, and notify hospitals instantly.</p>
          </div>
          <div className="group p-8 border border-zinc-100 rounded-3xl bg-zinc-50/50 hover:bg-zinc-50 transition-colors">
            <div className="text-4xl mb-6">🗺</div>
            <h4 className="text-xl font-bold text-zinc-900 mb-3">Live Dashboard</h4>
            <p className="text-zinc-600 text-sm leading-relaxed">City map with real-time hospital status. Open to the public, no login required.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
