export default function Header() {
  return (
    <header className="w-full py-6">
      <div className="max-w-6xl mx-auto px-6 lg:px-24 flex items-center justify-between">
        {/* Logo to the left */}
        <div className="flex items-center gap-3">
          <div className="px-3 py-1 rounded-full border border-solid border-slate-200 text-sm font-semibold">EMERGE.GRID</div>
        </div>

        {/* CTA buttons to the extreme right, visible on medium screens and up */}
        <div className="hidden md:flex items-center gap-3">
          {/* Adjusted colors for visibility on a light header background */}
          <a className="btn-outline text-zinc-700 border-zinc-300 hover:border-zinc-400 hover:text-zinc-900" href="#">Call - 0800 EMERGE</a>
          <a className="btn-primary bg-[#3b24c9] text-white hover:bg-[#2f1aa7]" href="#">Message via WhatsApp</a>
        </div>
      </div>
    </header>
  );
}
