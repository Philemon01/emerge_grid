import SectionHeader from "./section-header";

export default function TrustSection() {
  return (
    <section id="trust" className="px-5 py-12">
      <div className="max-w-5xl mx-auto text-center">
        <SectionHeader 
          title="Trust & ethics" 
          subtitle="Reliability by design"
          description="Built on calibrated uncertainty: every data point shows its source and age. No fabrication, ever. Equity first — works on feature phones and supports Pidgin English."
          centered
        />
        <div className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-3 text-zinc-400 text-[11px] font-bold uppercase tracking-widest sm:gap-x-8 sm:gap-y-4 sm:text-xs">
          <span>WHO Emergency Care Framework</span>
          <span>HL7 FHIR</span>
          <span>Nigeria Health Act 2014</span>
        </div>
      </div>
    </section>
  );
}
