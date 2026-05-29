export default function RoadmapSection() {
  return (
    <section id="roadmap" className="py-16 px-6 lg:px-24 bg-gradient-to-b from-black/0 to-black/5">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-sm text-brand-primary font-semibold">Roadmap</h3>
        <div className="mt-6">
          <ol className="border-l border-zinc-800">
            <li className="mb-6 ml-4">
              <div className="absolute -left-2 w-4 h-4 rounded-full bg-brand-primary" />
              <div className="pl-4">Phase 1 (Now): Healthcare Overwatch — public data, voice hotline, dashboard</div>
            </li>
            <li className="mb-6 ml-4">
              <div className="absolute -left-2 w-4 h-4 rounded-full bg-[#F3C969]" />
              <div className="pl-4">Phase 2 (Months 4–6): Hospital partnerships, direct data feeds, volunteer drivers</div>
            </li>
            <li className="mb-6 ml-4">
              <div className="absolute -left-2 w-4 h-4 rounded-full bg-[#E63946]" />
              <div className="pl-4">Phase 3 (Months 7–9): FairTriage, SmartScheduler, GRID Control</div>
            </li>
            <li className="mb-6 ml-4">
              <div className="absolute -left-2 w-4 h-4 rounded-full bg-[#7C7C7C]" />
              <div className="pl-4">Phase 4 (Months 10–12+): National expansion</div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
