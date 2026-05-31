export default function Header() {
  return (
    <header className="w-full py-8">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo to the left */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="px-4 py-1.5 rounded-full border border-zinc-200 text-sm font-bold tracking-tight group-hover:border-zinc-800 transition-colors">
            EMERGE.GRID
          </div>
        </a>

        {/* CTA buttons to the extreme right */}
        <div className="hidden md:flex items-center gap-3">
          {/* Secondary CTA */}
          <a className="px-6 py-2.5 rounded-full border-2 border-[#3b24c9] text-[#3b24c9] text-sm font-bold hover:bg-[#3b24c9]/5 transition-colors" href="#">Call - 0800 EMERGE</a>
          
          {/* Primary CTA */}
          <a className="px-6 py-2.5 rounded-full bg-[#3b24c9] text-white text-sm font-bold hover:bg-[#2f1aa7] shadow-sm transition-colors" href="#">Message via WhatsApp</a>
        </div>
      </div>
    </header>
  );
}
