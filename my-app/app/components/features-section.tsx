export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-sm text-brand-primary font-semibold">Key features</h3>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 card-bg rounded">Works on any phone — no smartphone, no data needed</div>
          <div className="p-4 card-bg rounded">AI voice hotline — Nigerian English optimized</div>
          <div className="p-4 card-bg rounded">WhatsApp incident reporting + first aid</div>
          <div className="p-4 card-bg rounded">Hospital auto-alerts on incident detection</div>
          <div className="p-4 card-bg rounded">Offline dashboard — loads on poor 3G</div>
          <div className="p-4 card-bg rounded">Calibrated uncertainty — never fabricates data</div>
        </div>
      </div>
    </section>
  );
}
