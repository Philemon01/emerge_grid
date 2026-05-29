import SectionHeader from "./section-header";

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
    <section id="features" className="py-20 px-6 lg:px-24 bg-zinc-900 text-white rounded-[3rem] mx-4 sm:mx-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h3 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-3">
            Key features
          </h3>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Built for the local reality.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {features.map((f, i) => (
            <div key={i} className="flex gap-4 items-start">
              <span className="text-2xl">{f.icon}</span>
              <p className="text-zinc-400 leading-relaxed font-medium">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
