export default function ProblemSection() {
  const problems = [
    {
      value: "1 hr 10 min",
      label: "Average ER wait in Nigeria",
      detail: "Delays compound quickly when families and responders cannot see capacity.",
    },
    {
      value: "Blind Spots",
      label: "No hospital knows what's coming in until it arrives",
      detail: "Incoming demand is invisible until it is already at the front door.",
    },
    {
      value: "Data Vacuum",
      label: "Routing and capacity data are missing in real-time",
      detail: "Responders need live guidance, not outdated calls and fragmented reports.",
    },
  ];

  return (
    <section id="problem" className="bg-zinc-50 px-5 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-5 sm:gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#0A74DA]">
              The problem
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
              Every minute matters.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-zinc-600 lg:justify-self-end">
            Right now, emergency responders and hospitals are operating in the
            dark. No one has the full picture of capacity and demand.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <article
              key={problem.value}
              className="group relative overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-200/70 sm:rounded-[2rem] sm:p-6"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                  0{index + 1}
                </span>
                <span className="h-2 w-2 rounded-full bg-[#0A74DA]/30 transition-colors group-hover:bg-[#0A74DA]" />
              </div>

              <h3 className="text-2xl font-black tracking-tight text-zinc-950 sm:text-3xl">
                {problem.value}
              </h3>
              <p className="mt-3 text-sm font-bold leading-6 text-zinc-700">
                {problem.label}
              </p>
              <p className="mt-5 text-sm leading-6 text-zinc-500">
                {problem.detail}
              </p>

              <div className="absolute inset-x-6 bottom-0 h-1 rounded-t-full bg-[#0A74DA]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
