import Image from "next/image";
import Stat from "./stat";
import heroImage from "../asset/images/Rectangle 33 (1).png";

export default function HeroSection() {
  return (
    <section className="relative px-5 pb-6 pt-2 sm:pb-6 sm:pt-1">
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl min-h-[500px] sm:h-[600px] lg:h-[650px]">
          <Image 
            src={heroImage} 
            alt="Emergency coordination hero" 
            fill 
            className="object-cover" 
            priority 
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col justify-center p-6 sm:p-12 lg:p-20">
            {/* <div className="mb-8 text-sm font-semibold uppercase tracking-[0.3em] text-white/90">EMERGE_GRID</div> */}

            <div className="max-w-2xl">
              <p className="text-sm tracking-[0.24em] uppercase text-white/75 mb-4">Realtime Hospital</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
                Visibility for <span className="text-[#B9E0FF]">Port Harcourt</span> Sector
              </h1>
              <p className="mt-5 text-lg text-white/80 max-w-2xl">
                High-yield operational dashboard tracking triage latency, critical trauma levels, and bed availabilities across Port Harcourt's healthcare network.
              </p>

              <div className="hidden md:flex mt-5 items-center gap-3">
                {/* Secondary CTA */}
                <a className="px-3 py-2.5 rounded-sm border-2 border-[#ffffff] text-[#ffffff] text-sm font-bold hover:bg-[#0A74DA]/10 transition-colors" href="#">Call - 0800 EMERGE</a>
                
                {/* Primary CTA */}
                <a className="px-3 py-2.5 rounded-sm bg-[#0A74DA] text-white text-sm font-bold hover:bg-[#0757a4] shadow-sm transition-colors" href="#">Message via WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
