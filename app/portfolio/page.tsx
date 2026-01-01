// Portfolio/Projects page for Zionix
// Showcases 3 sample projects with images and descriptions
import SeoHead from "../components/SeoHead";
const projects = [
  {
    image: "/window.svg",
    title: "Business Website",
    desc: "A modern business website for a local company.",
  },
  {
    image: "/globe.svg",
    title: "Global IT Support Portal",
    desc: "A scalable portal for international IT support.",
  },
  {
    image: "/file.svg",
    title: "Document Management System",
    desc: "A secure system for managing business documents.",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* SEO meta tags for Portfolio page */}
      <SeoHead
        title="Portfolio - Zionix"
        description="See Zionix's portfolio of IT projects, websites, and business solutions."
      />
      <main className="min-h-screen py-16 px-4 bg-white dark:bg-gray-900">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">Our Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow hover:scale-105 transition-transform duration-300"
              >
                {/* Project image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-32 object-contain mb-4 rounded"
                />
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p>{project.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
