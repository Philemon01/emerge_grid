export default function PartnerSection() {
  return (
    <section id="partner" className="py-16 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-bold">Partner with GRID</h3>
        <p className="mt-2 text-zinc-300">Help us give every responder a full picture.</p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-6 card-bg rounded">
            <div className="font-semibold">Hospitals</div>
            <div className="text-zinc-400">See what the public reads about your hospital — and correct it</div>
            <a className="mt-4 inline-block text-sm text-[#00B4A0]" href="#">Partner</a>
          </div>
          <div className="p-6 card-bg rounded">
            <div className="font-semibold">Government</div>
            <div className="text-zinc-400">Give every emergency responder in Port Harcourt a full picture</div>
            <a className="mt-4 inline-block text-sm text-[#00B4A0]" href="#">Engage</a>
          </div>
          <div className="p-6 card-bg rounded">
            <div className="font-semibold">Developers</div>
            <div className="text-zinc-400">Built on open standards. Join the build.</div>
            <a className="mt-4 inline-block text-sm text-[#00B4A0]" href="#">Contribute</a>
          </div>
        </div>
      </div>
    </section>
  );
}
