import kenai from "../assets/kenai.webp";

function FishIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`h-5 w-5 text-emerald-600 ${className}`}
    >
      <path d="M2 12s4-5 10-5c4 0 7 2 9 3l1-2v8l-1-2c-2 1-5 3-9 3-6 0-10-5-10-5zm10-3a2 2 0 100 4 2 2 0 000-4z" />
    </svg>
  );
}

export default function KenaiHighlight() {
  return (
    <section id="kenai" className="relative overflow-hidden bg-slate-50">
      {/* soft ambient shapes */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-orange-300/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
        {/* Text */}
        <div>
          <div className="mb-6 h-[3px] w-28 rounded bg-slate-900/80" />
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-5xl">
            Experience the Kenai River
          </h2>

          <p className="mt-5 text-slate-700 leading-relaxed">
            Renowned for record-breaking salmon runs and unmatched trout
            fishing, the Kenai River offers an angling experience like no other.
            Whether you’re targeting king or silver salmon, rainbow trout, or
            Dolly Varden, you’re in for the fight of your life.
          </p>

          {/* mini highlights */}
          <ul className="mt-6 space-y-3 text-slate-700">
            <li className="flex items-start gap-3">
              <FishIcon />
              Local, licensed guides with dialed-in tactics
            </li>
            <li className="flex items-start gap-3">
              <FishIcon />
              Premium gear & comfortable boats
            </li>
            <li className="flex items-start gap-3">
              <FishIcon />
              Scenic waters • May–September prime seasons
            </li>
          </ul>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#booking"
              className="rounded-md bg-orange-500 px-5 py-3 text-white font-semibold shadow hover:bg-orange-600"
            >
              See Packages
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/10">
            <img
              src={kenai}
              alt="Kenai River trophy trout"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Kenai Peninsula • Catch & release best practices followed.
          </p>
        </div>
      </div>
    </section>
  );
}
