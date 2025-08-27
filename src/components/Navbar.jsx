export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/80 backdrop-blur-md shadow">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo + Brand */}
          <a href="#" className="flex items-center gap-3">
            <img
              src="/src/assets/logo.png"
              alt="Alaska Fin Chasers"
              className="h-16 w-16 rounded-full object-cover border-2 border-white shadow-md"
            />
            <span className="text-white font-extrabold tracking-wide text-lg md:text-xl">
              ALASKA FIN CHASERS
            </span>
          </a>

          {/* Links */}
          <ul className="hidden md:flex items-center gap-8 text-white/90 font-medium">
            <li>
              <a className="hover:text-white" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#trips">
                Plan Your Trip
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#species">
                The Fish
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#about">
                About Us
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#contact">
                Contact Us
              </a>
            </li>
          </ul>

          {/* CTA */}
          <a
            href="#booking"
            className="rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
          >
            Book Now
          </a>
        </div>
      </nav>
    </header>
  );
}
