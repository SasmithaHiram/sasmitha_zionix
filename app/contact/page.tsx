// Contact page for Zionix
// Contact form, company details, WhatsApp, and map
import Link from "next/link";
import SeoHead from "../components/SeoHead";

export default function ContactPage() {
  return (
    <>
      {/* SEO meta tags for Contact page */}
      <SeoHead
        title="Contact - Zionix"
        description="Contact Zionix for IT services, support, and business solutions. Email, phone, WhatsApp, and location info."
      />
      <main className="min-h-screen py-16 px-4 bg-white dark:bg-gray-900">
        <section className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">Contact Us</h1>
          {/* Contact form (ready for backend integration) */}
          <form className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow mb-8">
            <div className="mb-4">
              <label className="block mb-2 font-semibold" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full p-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded hover:bg-secondary transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
          {/* Company contact details */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Contact Details</h2>
            <p>
              Email:{" "}
              <a
                href="mailto:info@zionix.com"
                className="text-primary hover:underline"
              >
                info@zionix.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:+1234567890"
                className="text-primary hover:underline"
              >
                +1 234 567 890
              </a>
            </p>
            <p>
              WhatsApp:{" "}
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener"
                className="text-primary hover:underline"
              >
                Chat on WhatsApp
              </a>
            </p>
          </div>
          {/* Embedded Google Map */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Location</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537363155047!3d-37.81720974202198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f8e7fb%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </main>
    </>
  );
}
