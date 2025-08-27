// import local assets
import king from "../assets/salmon.jpeg";
import sockeye from "../assets/sockeye.jpeg";
import silver from "../assets/silver.jpeg";
import rainbow from "../assets/rainbowtrout.jpg";
import couple from "../assets/couple.jpeg";
// If you get a 5th photo later, drop it in assets and swap this:
const moreImg = king; // temporary: reuse king photo

const trips = [
  {
    title: "King Salmon (Kenai/Kasilof)",
    desc: "Hard-charging kings in peak season with proven tactics.",
    img: king,
  },
  {
    title: "Sockeye Salmon",
    desc: "Big runs of sockeye — incredible action and great eating.",
    img: sockeye,
  },
  {
    title: "Silver Salmon",
    desc: "Aggressive coho action, perfect for action-packed days.",
    img: silver,
  },
  {
    title: "Rainbow Trout",
    desc: "Wild rainbows & char on scenic waters with light tackle.",
    img: rainbow,
  },
  {
    title: "And More!",
    desc: "Halibut, charters, and other exciting Alaska fishing options.",
    img: couple,
  },
];

export default function TripsGrid() {
  return (
    <section id="trips" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Plan Your Trip
          </h2>
          <p className="mt-2 text-slate-600">
            Target your dream species with flexible full-day and multi-day
            options.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {trips.map((t) => (
            <article
              key={t.title}
              className="group overflow-hidden rounded-xl bg-white shadow hover:shadow-lg transition"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={t.img}
                  alt={t.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-900">{t.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{t.desc}</p>
                <div className="mt-4">
                  <a
                    href="#booking"
                    className="text-orange-600 font-semibold hover:underline"
                  >
                    Check Dates →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
