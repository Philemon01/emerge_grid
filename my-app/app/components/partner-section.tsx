export default function PartnerSection() {
  const partners = [
    {
      name: "Hospitals",
      marker: "H",
      tone: "bg-blue-100 text-[#0A74DA]",
      description:
        "See what the public reads about your hospital - and ensure data accuracy in real-time.",
      action: "Become a Partner",
    },
    {
      name: "Government",
      marker: "G",
      tone: "bg-red-100 text-[#E63946]",
      description:
        "Give every emergency responder in your jurisdiction a clear, unified view of the healthcare sector.",
      action: "Engage with us",
    },
    {
      name: "Developers",
      marker: "D",
      tone: "bg-zinc-100 text-zinc-900",
      description:
        "Built on open standards like HL7 FHIR. Join the build and contribute to the mission.",
      action: "Contribute on GitHub",
    },
  ];

  return (
    <section id="partner" className="bg-[#0A74DA] py-14">
      <div className="mx-auto max-w-5xl px-5">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-100">
              Get Involved
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Partner with GRID
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-blue-50/90 lg:justify-self-end">
            Help us give every responder a full picture and save lives through
            better coordination.
          </p>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-3">
          {partners.map((partner) => (
            <article
              key={partner.name}
              className="group relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-[2rem] border border-white/20 bg-white p-6 shadow-xl shadow-blue-950/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-950/20"
            >
              <div>
                <div className="mb-8 flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${partner.tone} text-sm font-black shadow-sm`}
                  >
                    {partner.marker}
                  </div>
                  <span className="h-2 w-2 rounded-full bg-[#0A74DA]/30 transition-colors group-hover:bg-[#0A74DA]" />
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-zinc-950">
                  {partner.name}
                </h3>
                <p className="mt-4 text-sm leading-6 text-zinc-600">
                  {partner.description}
                </p>
              </div>

              <a
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#0A74DA] transition-colors hover:text-[#0757a4]"
                href="#"
              >
                {partner.action}
                <span className="transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
