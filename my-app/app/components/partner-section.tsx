import SectionHeader from "./section-header";

export default function PartnerSection() {
  return (
    <section id="partner" className="px-6 py-12 lg:px-24 bg-zinc-50 border-t border-zinc-100">
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          title="Get Involved" 
          subtitle="Partner with GRID"
          description="Help us give every responder a full picture and save lives through better coordination."
          centered
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          <div className="p-8 bg-white border border-zinc-200 rounded-2xl flex flex-col items-start shadow-sm">
            <div className="font-bold text-zinc-900 text-xl mb-3">Hospitals</div>
            <p className="text-zinc-500 text-sm mb-6 flex-1 leading-relaxed">See what the public reads about your hospital — and ensure data accuracy in real-time.</p>
            <a className="font-bold text-sm text-[#3b24c9] hover:underline" href="#">Become a Partner &rarr;</a>
          </div>
          <div className="p-8 bg-white border border-zinc-200 rounded-2xl flex flex-col items-start shadow-sm">
            <div className="font-bold text-zinc-900 text-xl mb-3">Government</div>
            <p className="text-zinc-500 text-sm mb-6 flex-1 leading-relaxed">Give every emergency responder in your jurisdiction a clear, unified view of the healthcare sector.</p>
            <a className="font-bold text-sm text-[#3b24c9] hover:underline" href="#">Engage with us &rarr;</a>
          </div>
          <div className="p-8 bg-white border border-zinc-200 rounded-2xl flex flex-col items-start shadow-sm">
            <div className="font-bold text-zinc-900 text-xl mb-3">Developers</div>
            <p className="text-zinc-500 text-sm mb-6 flex-1 leading-relaxed">Built on open standards like HL7 FHIR. Join the build and contribute to the mission.</p>
            <a className="font-bold text-sm text-[#3b24c9] hover:underline" href="#">Contribute on GitHub &rarr;</a>
          </div>
        </div>
      </div>
    </section>
  );
}
