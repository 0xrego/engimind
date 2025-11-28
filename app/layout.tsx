import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// DM Sans - Modern editorial typeface with geometric precision
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ENGIMIND — Consultores em Mobilidade e Transportes",
    template: "%s — ENGIMIND",
  },
  description:
    "Consultoria especializada em mobilidade, transportes e planeamento urbano. Estudos de tráfego, projetos de infraestruturas e planos de mobilidade sustentável.",
  keywords: [
    "Mobilidade Urbana",
    "Transportes",
    "Engenharia de Tráfego",
    "Consultoria",
    "Portugal",
    "Infraestruturas",
    "PMUS",
    "BRT",
    "Microssimulação",
  ],
  authors: [{ name: "ENGIMIND" }],
  creator: "ENGIMIND",
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://engimind.com",
    title: "ENGIMIND — Consultores em Mobilidade e Transportes",
    description:
      "Consultoria especializada em mobilidade, transportes e planeamento urbano.",
    siteName: "ENGIMIND",
    images: [
      {
        url: "/images/hero-mobility.jpg",
        width: 1200,
        height: 630,
        alt: "ENGIMIND — Mobilidade e Transportes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ENGIMIND — Consultores em Mobilidade e Transportes",
    description:
      "Consultoria especializada em mobilidade, transportes e planeamento urbano.",
    images: ["/images/hero-mobility.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={dmSans.variable}>
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
