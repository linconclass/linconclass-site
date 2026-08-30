import type { Metadata } from "next";
import "./globals.css";
import "./card-media.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://linconclass.com.br"),
  title: { default: "Lincon Class | Saxofonista para Eventos no RJ", template: "%s | Lincon Class" },
  description: "Música ao vivo para casamentos, recepções, eventos corporativos e Sax Live em São Gonçalo, Niterói, Rio de Janeiro e região.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://linconclass.com.br",
    siteName: "Lincon Class",
    title: "Lincon Class | Saxofonista para Eventos no RJ",
    description: "A música certa para cada momento do seu evento."
  },
  robots: { index: true, follow: true }
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://linconclass.com.br/#lincon-class",
      name: "Lincon Class",
      url: "https://linconclass.com.br",
      jobTitle: "Saxofonista e músico para eventos",
      sameAs: [
        "https://www.instagram.com/linconclass",
        "https://www.youtube.com/@linconclass",
        "https://www.facebook.com/linconclassoficial"
      ]
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://linconclass.com.br/#servico",
      name: "Lincon Class",
      url: "https://linconclass.com.br",
      telephone: "+5521969909037",
      areaServed: ["São Gonçalo", "Niterói", "Rio de Janeiro"]
    }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
