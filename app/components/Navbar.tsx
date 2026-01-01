// Sticky Navbar with smooth scroll and light/dark mode toggle
// Appears on all pages, includes navigation links and dark mode toggle
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

// Navigation links for the main sections
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  // State for sticky effect and dark mode
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  // Add shadow/background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle dark mode by adding/removing class
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 dark:bg-gray-900/90 shadow" : "bg-transparent"
      } backdrop-blur`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Company logo/name */}
        <Link href="/" className="text-2xl font-bold text-primary">
          Zionix
        </Link>
        <div className="flex items-center gap-6">
          {/* Navigation links */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700 dark:text-gray-200 hover:text-secondary dark:hover:text-secondary transition-colors duration-200 font-medium"
            >
              {link.name}
            </Link>
          ))}
          {/* Light/Dark mode toggle button */}
          <button
            aria-label="Toggle dark mode"
            onClick={() => setDark((d) => !d)}
            className="ml-4 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            {dark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.95 7.07l-.71-.71M6.34 6.34l-.71-.71"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
