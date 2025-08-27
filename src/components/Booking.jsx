import { useEffect, useMemo, useRef, useState } from "react";

// Local photos
import king from "../assets/girlsalmon.jpg";
import sockeye from "../assets/sockeye.jpeg";
import silver from "../assets/bigsalmon.jpg";
import rainbow from "../assets/filet.jpeg";
import alaska from "../assets/trout3.webp";

export default function Booking() {
  const prefersReduced = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  const images = [king, sockeye, silver, rainbow, alaska].filter(Boolean);

  const [idx, setIdx] = useState(0);
  const [hovered, setHovered] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (prefersReduced || hovered) return;
    timerRef.current = setInterval(
      () => setIdx((i) => (i + 1) % images.length),
      3500
    );
    return () => clearInterval(timerRef.current);
  }, [images.length, hovered, prefersReduced]);

  const go = (dir) =>
    setIdx(
      (i) => (i + (dir === "next" ? 1 : images.length - 1)) % images.length
    );

  return (
    <section
      id="booking"
      className="relative bg-slate-50 py-20"
      aria-label="Book a Trip"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Heading + CTA */}
        <div className="text-center">
          {/* Accent line */}
          <div className="mx-auto mb-4 h-1 w-20 rounded bg-orange-500" />
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Book a Trip Today
          </h2>
          {/* Subtext */}
          <p className="mt-2 text-sm text-slate-500">
            All photos shown are from real trips on the Kenai & Kasilof.
          </p>
          <div className="mt-6">
            <a
              href="#contact"
              className="inline-block rounded-md bg-orange-500 px-6 py-3 text-white font-semibold shadow hover:bg-orange-600"
            >
              Book Online
            </a>
          </div>
        </div>

        {/* Slideshow */}
        <div
          className="relative mx-auto mt-10 max-w-2xl overflow-hidden rounded-xl bg-black/5 shadow-lg ring-1 ring-black/10"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Slides */}
          <div className="relative aspect-[4/3]">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Fishing gallery ${i + 1}`}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  i === idx ? "opacity-100" : "opacity-0"
                }`}
                loading={i === 0 ? "eager" : "lazy"}
              />
            ))}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10" />
          </div>

          {/* Controls */}
          <button
            onClick={() => go("prev")}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-2.5 py-1.5 text-white backdrop-blur-sm hover:bg-black/60"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            onClick={() => go("next")}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-2.5 py-1.5 text-white backdrop-blur-sm hover:bg-black/60"
            aria-label="Next"
          >
            ›
          </button>

          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 w-2 rounded-full transition ${
                  i === idx ? "bg-white" : "bg-white/50 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
