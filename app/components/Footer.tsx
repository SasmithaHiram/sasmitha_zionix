// Footer with social links and copyright
// Appears on all pages, includes social icons, copyright, and quick links
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-6 mt-16 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4">
        {/* Social media icons */}
        <div className="flex items-center gap-4">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener"
            aria-label="Facebook"
          >
            <svg
              className="h-6 w-6 text-primary hover:text-secondary transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
            </svg>
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
          >
            <svg
              className="h-6 w-6 text-primary hover:text-secondary transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z" />
            </svg>
          </Link>
        </div>
          {/* Contact info */}
          <div className="flex flex-col items-center text-gray-600 dark:text-gray-300 text-sm">
            <span>Phone: <a href="tel:0714839984" className="text-primary hover:underline">071 483 9984</a></span>
            <span>WhatsApp: <a href="https://wa.me/94714839984" target="_blank" rel="noopener" className="text-primary hover:underline">071 483 9984</a></span>
            <span>Email: <a href="mailto:sasmithahiram2003@gmail.com" className="text-primary hover:underline">sasmithahiram2003@gmail.com</a></span>
            <span>© {new Date().getFullYear()} Zionix. All rights reserved.</span>
          </div>
        {/* Quick navigation links */}
        <div className="flex gap-4">
          <Link href="/" className="hover:text-secondary">
            Home
          </Link>
          <Link href="/about-us" className="hover:text-secondary">
            About
          </Link>
          <Link href="/services" className="hover:text-secondary">
            Services
          </Link>
          <Link href="/portfolio" className="hover:text-secondary">
            Portfolio
          </Link>
          <Link href="/contact" className="hover:text-secondary">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
