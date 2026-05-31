export default function Footer() {
  return (
    <footer className="w-full px-3 pb-3 pt-6 sm:px-6 sm:pb-6">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[22px] bg-[#07050d] px-6 py-10 text-white shadow-2xl sm:px-10 sm:py-12 lg:px-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_78%,rgba(10,116,218,0.42),transparent_24%),radial-gradient(circle_at_58%_88%,rgba(230,57,70,0.42),transparent_22%),radial-gradient(circle_at_77%_78%,rgba(255,255,255,0.2),transparent_20%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,5,13,0)_0%,rgba(7,5,13,0.55)_58%,rgba(7,5,13,0.05)_100%)]" />

        <div className="relative z-10">
          <div className="max-w-3xl">
            <div className="mb-3 flex items-center gap-2 text-xs font-medium text-blue-200">
              <span className="text-base leading-none">+</span>
              <span>Contact Us</span>
            </div>
            <h2 className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
              Interested in working together, trying our platform or simply
              learning more?
            </h2>
          </div>

          <div className="mt-8 flex flex-col gap-8 lg:mt-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs text-zinc-400">Contact GRID at:</p>
              <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-white">
                <a href="#voice-demo" className="transition-colors hover:text-blue-200">
                  Hotline
                </a>
                <span>Emergency: 199</span>
              </div>
            </div>

            <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-zinc-100 lg:justify-end">
              <a href="#dashboard" className="transition-colors hover:text-blue-200">
                Dashboard
              </a>
              <a href="#voice-demo" className="transition-colors hover:text-blue-200">
                Hotline
              </a>
              <a href="#about" className="transition-colors hover:text-blue-200">
                About
              </a>
              <a href="#partner" className="transition-colors hover:text-blue-200">
                Partner
              </a>
            </nav>
          </div>

          <div className="mt-10 flex flex-col gap-8 lg:mt-14">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            
              <div className="text-[clamp(3.25rem,10vw,9.5rem)] font-black leading-none tracking-tight text-white">
                E.M.E.R.G.E. GRID
              </div>
            </div>

            <div className="flex flex-col gap-4 text-xs text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
              <p>Port Harcourt, Nigeria - expanding nationally</p>
              <div className="flex items-center gap-5">
                
                <span>Emergency: 199</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
