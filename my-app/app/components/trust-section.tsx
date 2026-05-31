import SectionHeader from "./section-header";

export default function TrustSection() {
  return (
    <section id="trust" className="px-6 py-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <SectionHeader 
          title="Trust & ethics" 
          subtitle="Reliability by design"
          description="Built on calibrated uncertainty: every data point shows its source and age. No fabrication, ever. Equity first — works on feature phones and supports Pidgin English."
          centered
        />
        <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4 text-zinc-400 text-xs font-bold uppercase tracking-widest">
          <span>WHO Emergency Care Framework</span>
          <span>HL7 FHIR</span>
          <span>Nigeria Health Act 2014</span>
        </div>
      </div>
    </section>
  );
}
