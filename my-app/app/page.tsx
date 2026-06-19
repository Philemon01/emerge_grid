"use client";

import Header from "./components/header";
import HeroSection from "./components/hero-section";
import ProblemSection from "./components/problem-section";
import HowSection from "./components/how-section";
import FeaturesSection from "./components/features-section";
import RoadmapSection from "./components/roadmap-section";
import WhoSection from "./components/who-section";
import TrustSection from "./components/trust-section";
import PartnerSection from "./components/partner-section";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <HowSection />
        <FeaturesSection />
        <RoadmapSection />
        <WhoSection />
        <TrustSection />
        <PartnerSection />
      </main>
      <Footer />
    </div>
  );
}
