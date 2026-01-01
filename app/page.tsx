// Home page for Zionix
// Hero section, company tagline, CTA, and About preview
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary/90 to-secondary/60 dark:from-gray-900 dark:to-primary/80 flex flex-col items-center justify-center px-4 pt-12 pb-8">
      {/* Hero Section with company name, tagline, and CTA */}
      <section className="w-full max-w-4xl flex flex-col items-center text-center py-20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-black dark:text-white drop-shadow mb-4">
          Zionix
        </h1>
        <p className="text-xl md:text-2xl text-black dark:text-white mb-6">
          Empowering Your Business with Modern IT Solutions
        </p>
        <a
          href="/contact"
          className="inline-block bg-secondary text-primary font-semibold px-8 py-3 rounded-full shadow hover:bg-primary hover:text-white transition-colors duration-300 text-lg"
        >
          Get in Touch
        </a>
      </section>
      {/* About Us preview section */}
      <section className="w-full max-w-3xl bg-white/90 dark:bg-gray-900/80 rounded-lg shadow-lg p-8 mt-8 text-center">
        <h2 className="text-2xl font-bold text-primary mb-2">About Us</h2>
        <p className="text-gray-700 dark:text-gray-200 mb-2">
          Zionix is dedicated to providing reliable, innovative, and
          customer-focused IT services. Our team of experts ensures your
          business stays ahead with the latest technology and support.
        </p>
        <a
          href="/about-us"
          className="text-secondary font-medium hover:underline"
        >
          Learn more about us →
        </a>
      </section>
    </main>
  );
}
