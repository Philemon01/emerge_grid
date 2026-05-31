import SectionHeader from "./section-header";

export default function WhoSection() {
  const users = [
    { name: "Amara", role: "Family member", desc: "Calling from a moving car during an emergency, needing immediate hospital routing." },
    { name: "Officer Chidi", role: "Traffic Officer", desc: "At an accident scene needing to coordinate routing for multiple casualties simultaneously." },
    { name: "Dr. Ngozi", role: "ED Director", desc: "Correcting public-facing hospital data to manage incoming patient flow effectively." }
  ];

  return (
    <section id="who" className="px-6 py-12 lg:px-24 bg-white overflow-hidden">

      <div className="max-w-5xl mx-auto">
        <SectionHeader 
          title="Who it's for" 
          subtitle="Designed for the front lines"
          description="From citizens in crisis to clinical directors, GRID ensures the right data reaches the right hands at the right time."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-6 mb-20">
          {/* Citizen Card - Large Feature */}
          <div className="md:col-span-8 group p-8 sm:p-10 border border-zinc-200 rounded-[2rem] bg-zinc-50 hover:bg-white hover:shadow-xl transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="inline-flex px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-widest mb-6">Family & Public</div>
              <h4 className="text-2xl font-bold text-zinc-900 mb-4">{users[0].name}</h4>
              <p className="text-zinc-600 text-base leading-relaxed max-w-lg">{users[0].desc}</p>
            </div>
            <div className="mt-8 flex items-center gap-4 text-zinc-400">
              <span className="text-sm font-medium italic">"I need to know which hospital has space before I drive."</span>
            </div>
          </div>

          {/* First Responder - Tall Card */}
          <div className="md:col-span-4 md:row-span-2 group p-6 sm:p-8 border border-zinc-200 rounded-[2rem] bg-zinc-900 text-white hover:shadow-2xl transition-all duration-500 flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <div className="inline-flex px-3 py-1 rounded-full bg-white/10 text-white/80 text-[10px] font-bold uppercase tracking-widest mb-6">Field Operations</div>
              <h4 className="text-2xl font-bold mb-4">{users[1].name}</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">{users[1].desc}</p>
            </div>
            <div className="relative z-10 mt-8 bg-white/5 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
              <div className="text-xs text-white/40 mb-2">Protocol Active</div>
              <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#3b24c9] w-2/3" />
              </div>
            </div>
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-[#3b24c9]/20 rounded-full blur-3xl" />
          </div>

          {/* Clinical Director - Wide Card */}
          <div className="md:col-span-8 group p-6 sm:p-8 border border-zinc-200 rounded-[2rem] bg-white hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-md">
              <div className="inline-flex px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-[10px] font-bold uppercase tracking-widest mb-6">Hospital Leadership</div>
              <h4 className="text-2xl font-bold text-zinc-900 mb-2">{users[2].name}</h4>
              <p className="text-zinc-600 text-sm leading-relaxed">{users[2].desc}</p>
            </div>
            <div className="flex -space-x-3 shrink-0">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-zinc-100 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-zinc-200" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Repetitive Slider (Marquee Effect) */}
      <div className="mt-8 border-y border-zinc-100 bg-zinc-50/50 py-8 relative">
        <div className="flex gap-12 whitespace-nowrap overflow-hidden">
          <div className="flex gap-12 items-center animate-marquee shrink-0">
            {["Ambulance Drivers", "Paramedics", "Triage Nurses", "911 Dispatchers", "Civil Defense", "Volunteer Medics", "Red Cross", "Ministry of Health"].map((role, idx) => (
              <span key={idx} className="text-4xl sm:text-6xl font-black text-zinc-200 uppercase tracking-tighter hover:text-[#3b24c9]/10 transition-colors">
                {role}
              </span>
            ))}
          </div>
          <div className="flex gap-12 items-center animate-marquee shrink-0" aria-hidden="true">
            {["Ambulance Drivers", "Paramedics", "Triage Nurses", "911 Dispatchers", "Civil Defense", "Volunteer Medics", "Red Cross", "Ministry of Health"].map((role, idx) => (
              <span key={idx} className="text-4xl sm:text-6xl font-black text-zinc-200 uppercase tracking-tighter hover:text-[#3b24c9]/10 transition-colors">
                {role}
              </span>
            ))}
          </div>
        </div>
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </section>
  );
}
