export default function ProblemSection() {
  return (
    <section id="problem" className="py-16 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-sm text-brand-primary font-semibold">The problem</h3>
        <p className="mt-4 text-xl text-zinc-200 font-medium">Every minute matters. Right now, no one has the full picture.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="card-bg p-6 rounded">
            <div className="text-2xl font-bold text-foreground">1 hr 10 min</div>
            <div className="mt-2 muted">Average ER wait in Nigeria</div>
          </div>
          <div className="card-bg p-6 rounded">
            <div className="text-2xl font-bold text-foreground">No shared view</div>
            <div className="mt-2 muted">No hospital knows what's coming in</div>
          </div>
          <div className="card-bg p-6 rounded">
            <div className="text-2xl font-bold text-foreground">Ambulances route blind</div>
            <div className="mt-2 muted">Routing and capacity data are missing</div>
          </div>
        </div>
      </div>
    </section>
  );
}
