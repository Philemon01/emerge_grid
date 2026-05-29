export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 brand-square rounded flex items-center justify-center font-bold">GRID</div>
          <div>
            <div className="font-semibold">E.M.E.R.G.E. GRID</div>
            <div className="text-xs text-zinc-400">Port Harcourt, Nigeria — expanding nationally</div>
          </div>
        </div>

        <div className="flex items-center gap-6 text-sm muted">
          <a href="#dashboard">Dashboard</a>
          <a href="#voice-demo">Hotline</a>
          <a href="#about">About</a>
          <a href="#partner">Partner</a>
          <a href="https://github.com/">GitHub</a>
          <div className="ml-4 font-semibold">Emergency: 199</div>
        </div>
      </div>
    </footer>
  );
}
