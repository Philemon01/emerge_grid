import SectionHeader from "./section-header";

export default function WhoSection() {
  const users = [
    { name: "Amara", role: "Family member", desc: "Calling from a moving car during an emergency, needing immediate hospital routing." },
    { name: "Officer Chidi", role: "Traffic Officer", desc: "At an accident scene needing to coordinate routing for multiple casualties simultaneously." },
    { name: "Dr. Ngozi", role: "ED Director", desc: "Correcting public-facing hospital data to manage incoming patient flow effectively." }
  ];

  return (
    <section id="who" className="py-20 px-6 lg:px-24 bg-zinc-50">
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          title="Who it's for" 
          subtitle="Designed for the front lines"
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {users.map((user, i) => (
            <div key={i} className="p-8 bg-white border border-zinc-200 rounded-2xl shadow-sm">
              <div className="font-bold text-zinc-900 text-lg mb-1">{user.name}</div>
              <div className="text-xs font-bold text-brand-primary uppercase tracking-wider mb-4">{user.role}</div>
              <p className="text-zinc-600 text-sm leading-relaxed">{user.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
