export default function RoadmapSection() {
  const steps = [
    {
      phase: "Phase 1 (Now)",
      label: "Live foundation",
      accent: "bg-[#3b24c9]",
      surface: "bg-zinc-900 text-white border-zinc-800",
      muted: "text-zinc-400",
      size: "md:col-span-2 md:row-span-2",
      content:
        "Healthcare Overwatch - public data, voice hotline, dashboard deployment in Port Harcourt.",
    },
    {
      phase: "Phase 2 (Months 4-6)",
      label: "Partner network",
      accent: "bg-[#F3C969]",
      surface: "bg-zinc-50 text-zinc-950 border-zinc-200",
      muted: "text-zinc-500",
      size: "",
      content:
        "Hospital partnerships, direct data feeds, and volunteer driver network integration.",
    },
    {
      phase: "Phase 3 (Months 7-9)",
      label: "Dispatch intelligence",
      accent: "bg-[#E63946]",
      surface: "bg-white text-zinc-950 border-zinc-200",
      muted: "text-zinc-500",
      size: "",
      content:
        "FairTriage, SmartScheduler, and GRID Control for unified dispatch.",
    },
    {
      phase: "Phase 4 (Months 10-12+)",
      label: "National scale",
      accent: "bg-zinc-700",
      surface: "bg-zinc-50 text-zinc-950 border-zinc-200",
      muted: "text-zinc-500",
      size: "md:col-span-2",
      content: "National expansion across major Nigerian metropolitan hubs.",
    },
  ];

  return (
    <section id="roadmap" className="px-6 py-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-primary">
              Roadmap
            </p>
            <h2 className="max-w-xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
              The path to national coverage
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-zinc-600 lg:justify-self-end">
            A phased rollout that starts with visible emergency capacity data,
            then layers in direct hospital feeds, coordinated dispatch, and
            nationwide scale.
          </p>
        </div>

        <div className="mt-10">
          <ol className="grid auto-rows-[minmax(210px,auto)] gap-5 md:grid-cols-4">
            {steps.map((step, i) => (
              <li
                key={step.phase}
                className={`group relative overflow-hidden rounded-[2rem] border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-200/70 ${step.surface} ${step.size}`}
              >
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className={`text-xs font-bold uppercase tracking-widest ${step.muted}`}>
                        {step.phase}
                      </p>
                      <h3
                        className={`mt-3 font-bold tracking-tight ${
                          i === 0 ? "text-3xl sm:text-4xl" : "text-2xl"
                        }`}
                      >
                        {step.label}
                      </h3>
                    </div>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-sm font-black text-zinc-950 shadow-sm">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <p
                    className={`mt-8 max-w-md leading-7 ${
                      i === 0 ? "text-base text-zinc-300" : "text-sm text-zinc-600"
                    }`}
                  >
                    {step.content}
                  </p>
                </div>

                {i === 0 && (
                  <div className="absolute -bottom-20 -right-16 h-56 w-56 rounded-full bg-[#3b24c9]/30 blur-3xl transition-colors group-hover:bg-[#3b24c9]/40" />
                )}
                <div
                  className={`absolute inset-x-6 bottom-0 h-1 rounded-t-full ${step.accent}`}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
