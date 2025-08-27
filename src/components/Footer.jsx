import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-10 mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center gap-6">
        {/* Logo */}
        <img
          src={logo}
          alt="Alaska Fin Chasers"
          className="h-16 w-16 rounded-full object-cover shadow-lg border-2 border-white"
        />

        {/* Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <li>
            <a href="#hero" className="hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#trips" className="hover:text-white">
              Plan Your Trip
            </a>
          </li>
          <li>
            <a href="#species" className="hover:text-white">
              The Fish
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-white">
              About Us
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white">
              Contact Us
            </a>
          </li>
        </ul>

        {/* Copyright + Powered By */}
        <p className="text-xs text-slate-400 mt-4">
          © {new Date().getFullYear()} Alaska Fin Chasers. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Powered by{" "}
          <a
            href="https://www.graypeakmarketing.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 font-semibold"
          >
            Gray Peak Marketing
          </a>
        </p>
      </div>
    </footer>
  );
}
