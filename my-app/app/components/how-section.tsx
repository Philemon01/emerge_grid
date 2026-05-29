export default function HowSection() {
  return (
    <section id="how" className="py-16 px-6 lg:px-24 bg-gradient-to-b from-transparent to-black/10">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-sm text-brand-primary font-semibold">How it works</h3>
        <p className="mt-2 text-zinc-300">Three ways to get help — built for everyone.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="card-bg p-6 rounded">
            <div className="text-xl font-semibold">📞 Call the GRID Hotline</div>
            <div className="mt-2 text-zinc-400">Speak naturally, get a hospital in &lt;4s. Works on feature phones.</div>
          </div>
          <div className="card-bg p-6 rounded">
            <div className="text-xl font-semibold">💬 WhatsApp GRID</div>
            <div className="mt-2 text-zinc-400">Report incidents, receive first-aid guidance, and notify hospitals.</div>
          </div>
          <div className="card-bg p-6 rounded">
            <div className="text-xl font-semibold">🗺 Live Dashboard</div>
            <div className="mt-2 text-zinc-400">City map with real-time hospital status. Public, no login required.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
