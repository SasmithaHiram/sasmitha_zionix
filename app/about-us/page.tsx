// About Us page for Zionix
// Shows company vision, mission, and why choose us
import SeoHead from "../components/SeoHead";
export default function AboutUsPage() {
  return (
    <>
      {/* SEO meta tags for About Us page */}
      <SeoHead
        title="About Us - Zionix"
        description="Learn about Zionix's vision, mission, and why businesses choose us for IT solutions."
      />
      <main className="min-h-screen py-16 px-4 bg-white dark:bg-gray-900">
        <section className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-4">About Zionix</h1>
          <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
          <p className="mb-6">
            Empowering businesses with reliable IT solutions and innovative
            technology.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="mb-6">
            Delivering top-notch IT services with integrity, expertise, and
            customer focus.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Experienced professionals</li>
            <li>Fast and reliable support</li>
            <li>Custom solutions for every need</li>
            <li>Transparent pricing</li>
          </ul>
        </section>
      </main>
    </>
  );
}
