// SEO meta tags component for all pages
// Usage: <SeoHead title="..." description="..." />
import Head from "next/head";

export default function SeoHead({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Head>
      {/* Standard meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* Open Graph for social sharing */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Zionix" />
      {/* Twitter card meta */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
