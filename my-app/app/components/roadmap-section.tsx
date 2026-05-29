import SectionHeader from "./section-header";

export default function RoadmapSection() {
  const steps = [
    {
      phase: "Phase 1 (Now)",
      color: "bg-[#3b24c9]",
      content: "Healthcare Overwatch — public data, voice hotline, dashboard deployment in Port Harcourt."
    },
    {
      phase: "Phase 2 (Months 4–6)",
      color: "bg-[#F3C969]",
      content: "Hospital partnerships, direct data feeds, and volunteer driver network integration."
    },
    {
      phase: "Phase 3 (Months 7–9)",
      color: "bg-[#E63946]",
      content: "FairTriage, SmartScheduler, and GRID Control for unified dispatch."
    },
    {
      phase: "Phase 4 (Months 10–12+)",
      color: "bg-[#7C7C7C]",
      content: "National expansion across major Nigerian metropolitan hubs."
    }
  ];

  return (
    <section id="roadmap" className="py-24 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          title="Roadmap" 
          subtitle="The path to national coverage"
        />
        
        <div className="mt-12">
          <ol className="relative border-l border-zinc-200 ml-3">
            {steps.map((step, i) => (
              <li key={i} className="mb-12 ml-8">
                <div className={`absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full ${step.color} border-4 border-white shadow-sm`} />
                <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
                  <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2 block">
                    {step.phase}
                  </span>
                  <p className="text-zinc-900 font-medium">
                    {step.content}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
