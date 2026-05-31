export default function RoadmapSection() {
  const steps = [
    {
      phase: "Phase 1 (Now)",
      label: "Live foundation",
      accent: "bg-[#0A74DA]",
      surface: "bg-zinc-900 text-white border-zinc-800",
      muted: "text-zinc-400",
      size: "lg:col-span-7 lg:row-span-2",
      content:
        "Healthcare Overwatch - public data, voice hotline, dashboard deployment in Port Harcourt.",
    },
    {
      phase: "Phase 2 (Months 4-6)",
      label: "Partner network",
      accent: "bg-[#F3C969]",
      surface: "bg-zinc-50 text-zinc-950 border-zinc-200",
      muted: "text-zinc-500",
      size: "lg:col-span-5",
      content:
        "Hospital partnerships, direct data feeds, and volunteer driver network integration.",
    },
    {
      phase: "Phase 3 (Months 7-9)",
      label: "Dispatch intelligence",
      accent: "bg-[#E63946]",
      surface: "bg-white text-zinc-950 border-zinc-200",
      muted: "text-zinc-500",
      size: "lg:col-span-5",
      content:
        "FairTriage, SmartScheduler, and GRID Control for unified dispatch.",
    },
    {
      phase: "Phase 4 (Months 10-12+)",
      label: "National scale",
      accent: "bg-zinc-700",
      surface: "bg-zinc-50 text-zinc-950 border-zinc-200",
      muted: "text-zinc-500",
      size: "lg:col-span-12",
      content: "National expansion across major Nigerian metropolitan hubs.",
    },
  ];

  return (
    <section id="roadmap" className="px-5 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-primary">
            Roadmap
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            The path to national coverage
          </h2>
          <p className="mt-3 text-base leading-7 text-zinc-600">
            A phased rollout that starts with visible emergency capacity data,
            then layers in direct hospital feeds, coordinated dispatch, and
            nationwide scale.
          </p>
        </div>

        <div className="mt-10">
          <ol className="grid gap-4 sm:gap-5 lg:grid-cols-12">
            {steps.map((step, i) => (
              <li
                key={step.phase}
                className={`group relative overflow-hidden rounded-[calc(1.5rem-1px)] border p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-200/70 sm:rounded-[calc(2rem-1px)] sm:p-6 ${
                  i === 0 ? "min-h-[300px] lg:min-h-[430px] lg:p-8" : "min-h-[190px]"
                } ${step.surface} ${step.size}`}
              >
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className={`text-xs font-bold uppercase tracking-widest ${step.muted}`}>
                        {step.phase}
                      </p>
                      <h3
                        className={`mt-3 font-bold tracking-tight ${
                          i === 0 ? "text-3xl sm:text-4xl lg:text-5xl" : "text-2xl"
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
                    className={`mt-6 max-w-md leading-7 sm:mt-8 ${
                      i === 0 ? "text-base text-zinc-300 sm:text-lg" : "text-sm text-zinc-600"
                    }`}
                  >
                    {step.content}
                  </p>
                </div>

                {i === 0 && (
                  <>
                    <div className="absolute -bottom-20 -right-16 h-56 w-56 rounded-full bg-[#0A74DA]/30 blur-3xl transition-colors group-hover:bg-[#0A74DA]/40" />
                    <div className="absolute bottom-8 right-8 hidden h-28 w-28 rounded-full border border-white/10 bg-white/5 sm:block" />
                  </>
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
