import SectionHeader from "./section-header";

export default function ProblemSection() {
  return (
    <section id="problem" className="py-20 px-6 lg:px-24 bg-zinc-50">
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          title="The problem" 
          subtitle="Every minute matters."
          description="Right now, emergency responders and hospitals are operating in the dark. No one has the full picture of capacity and demand."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="bg-white border border-zinc-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
            <div className="text-3xl font-bold text-zinc-900">1 hr 10 min</div>
            <div className="mt-2 text-zinc-500 font-medium text-sm">Average ER wait in Nigeria</div>
          </div>
          <div className="bg-white border border-zinc-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
            <div className="text-3xl font-bold text-zinc-900">Blind Spots</div>
            <div className="mt-2 text-zinc-500 font-medium text-sm">No hospital knows what's coming in until it arrives</div>
          </div>
          <div className="bg-white border border-zinc-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
            <div className="text-3xl font-bold text-zinc-900">Data Vacuum</div>
            <div className="mt-2 text-zinc-500 font-medium text-sm">Routing and capacity data are missing in real-time</div>
          </div>
        </div>
      </div>
    </section>
  );
}
