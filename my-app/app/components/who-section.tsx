export default function WhoSection() {
  return (
    <section id="who" className="py-16 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-sm text-brand-primary font-semibold">Who it's for</h3>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 card-bg rounded">
            <div className="font-semibold">Amara</div>
            <div className="text-zinc-400">Family member calling from a moving car during an emergency</div>
          </div>
          <div className="p-6 card-bg rounded">
            <div className="font-semibold">Officer Chidi</div>
            <div className="text-zinc-400">Traffic officer at accident scenes needing routing for multiple casualties</div>
          </div>
          <div className="p-6 card-bg rounded">
            <div className="font-semibold">Dr. Ngozi</div>
            <div className="text-zinc-400">ED Director who needs to correct public-facing hospital data</div>
          </div>
        </div>
      </div>
    </section>
  );
}
