// Services page for Zionix
// Lists IT services with icons and descriptions
import { FaLaptop, FaTools, FaCode, FaHeadset } from "react-icons/fa";
import SeoHead from "../components/SeoHead";

const services = [
  {
    icon: <FaLaptop className="text-3xl text-secondary" />,
    title: "Windows Installation",
    desc: "Professional installation and setup of Windows operating systems for your devices.",
  },
  {
    icon: <FaTools className="text-3xl text-secondary" />,
    title: "Software Installation",
    desc: "Seamless installation and configuration of essential business and productivity software.",
  },
  {
    icon: <FaCode className="text-3xl text-secondary" />,
    title: "Website Development",
    desc: "Modern, responsive websites for small businesses to help you grow online.",
  },
  {
    icon: <FaHeadset className="text-3xl text-secondary" />,
    title: "IT Support",
    desc: "Reliable IT support and consulting for your business needs.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* SEO meta tags for Services page */}
      <SeoHead
        title="Services - Zionix"
        description="Explore Zionix's IT services: Windows installation, software installation, website development for small business, and IT support."
      />
      <main className="min-h-screen py-16 px-4 bg-white dark:bg-gray-900">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow hover:scale-105 transition-transform duration-300"
              >
                {/* Service icon */}
                {service.icon}
                <h2 className="text-xl font-semibold mt-4 mb-2">
                  {service.title}
                </h2>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
