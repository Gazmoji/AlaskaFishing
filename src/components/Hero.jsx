import alaskaHero from "../assets/alaska.jpg"; // ✅ import your photo

export default function Hero() {
  const heroUrl = alaskaHero; // use your local image

  return (
    <section
      className="relative isolate h-[85vh] min-h-[620px] w-full bg-black"
      style={{ backgroundImage: `url(${heroUrl})` }}
    >
      {/* Image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroUrl})` }}
      />

      {/* Dark gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-white drop-shadow-sm">
            Guided Alaska Fishing
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-white/85">
            Chase kings, silvers, and trout on the Kenai & Kasilof with local
            pros. Premium gear, scenic waters, and unforgettable days on the
            river.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <a
              href="#booking"
              className="rounded-md bg-orange-500 px-5 py-3 text-sm md:text-base font-semibold text-white shadow hover:bg-orange-600"
            >
              Check Availability
            </a>
            <a
              href="#trips"
              className="rounded-md bg-white/10 px-5 py-3 text-sm md:text-base font-semibold text-white hover:bg-white/20"
            >
              View Trips
            </a>
          </div>

          <p className="mt-4 text-xs md:text-sm text-white/60">
            Licensed • Insured • Kenai Peninsula • May–September
          </p>
        </div>
      </div>
    </section>
  );
}
