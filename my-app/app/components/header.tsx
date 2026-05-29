export default function Header() {
  return (
    <header className="w-full py-6 ">
      <div className="max-w-6xl mx-auto px-6 lg:px-24 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="px-3 py-1 rounded-full border border-solid border-slate-200 text-sm font-semibold">EMERGE.GRID</div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-500">
          <a href="#features" className="hover:text-foreground">Features</a>
          <a href="#partner" className="hover:text-foreground">Partner</a>
        </nav>
      </div>
    </header>
  );
}
