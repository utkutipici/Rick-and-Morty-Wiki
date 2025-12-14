import { useState } from "react";
import CategoryButton from "../homepage/CategoryButton";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-900 border-b border-cyan-500/30 backdrop-blur-sm">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">

          <a href="/" className="text-2xl font-bold">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-400">
              R&M
            </span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            <a
              href="/characters"
              className="text-gray-300 hover:text-cyan-400 transition font-medium uppercase text-sm tracking-wide"
            >
              Characters
            </a>
            <a
              href="/locations"
              className="text-gray-300 hover:text-green-400 transition font-medium uppercase text-sm tracking-wide"
            >
              Locations
            </a>
            <a
              href="/episodes"
              className="text-gray-300 hover:text-purple-400 transition font-medium uppercase text-sm tracking-wide"
            >
              Episodes
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-cyan-400 hover:text-cyan-300 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <a
              href="/characters"
              className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-800 rounded transition font-medium uppercase text-sm tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              Characters
            </a>
            <a
              href="/locations"
              className="block px-4 py-2 text-gray-300 hover:text-green-400 hover:bg-slate-800 rounded transition font-medium uppercase text-sm tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              Locations
            </a>
            <a
              href="/episodes"
              className="block px-4 py-2 text-gray-300 hover:text-purple-400 hover:bg-slate-800 rounded transition font-medium uppercase text-sm tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              Episodes
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
