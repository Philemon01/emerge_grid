import Image from "next/image";
import Stat from "./stat";
import heroImage from "../asset/images/Rectangle 33 (1).png";

export default function HeroSection() {
  return (
    <section className="relative pt-[2px] pb-16 px-5">
      <div className="mx-auto w-full">
        <div className="relative overflow-hidden rounded-4xl border border-white/10 shadow-2xl min-h-155 h-[calc(100vw-40px)] sm:h-155">
          <Image src={heroImage} alt="Emergency coordination hero" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-10 lg:p-14">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="text-sm font-semibold uppercase tracking-[0.3em] text-white/90">EMERGE_GRID</div>
              <div className="flex flex-wrap items-center gap-3 justify-start sm:justify-end">
                <a className="btn-outline text-white border-white/70 hover:border-white" href="#">Call - 0800 EMERGE</a>
                <a className="btn-primary bg-[#3b24c9] text-white hover:bg-[#2f1aa7]" href="#">Message via WhatsApp</a>
              </div>
            </div>

            <div className="max-w-2xl">
              <p className="text-sm tracking-[0.24em] uppercase text-white/75 mb-4">Realtime Hospital</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
                Visibility for <span className="text-[#c6d6ff]">Port Harcourt</span> Sector
              </h1>
              <p className="mt-5 text-lg text-white/80 max-w-2xl">
                High-yield operational dashboard tracking triage latency, critical trauma levels, and bed availabilities across Port Harcourt's healthcare network.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a className="btn-outline text-white border-white/70 hover:border-white" href="#">Call - 0800 EMERGE</a>
                <a className="btn-primary bg-[#3b24c9] text-white hover:bg-[#2f1aa7]" href="#">Message via WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
