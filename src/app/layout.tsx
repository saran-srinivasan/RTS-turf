import type { Metadata } from "next";
import { Bebas_Neue, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "RT Strykon Sports Academy | Premium Turf, Swimming & Multi-Sport Facility",
  description:
    "Chennai's elite sports academy offering certified turf, swimming pool, cricket nets, basketball courts & pickleball. Book your session now.",
  keywords: [
    "sports academy Chennai",
    "turf booking Chennai",
    "swimming classes Chennai",
    "cricket coaching",
    "football turf",
    "pickleball court",
    "basketball court",
    "RT Strykon",
  ],
  openGraph: {
    title: "RT Strykon Sports Academy",
    description:
      "Premium multi-sport facility in Chennai. Certified turf, swimming pool, and world-class coaching.",
    type: "website",
    locale: "en_IN",
    siteName: "RT Strykon Sports Academy",
  },
  twitter: {
    card: "summary_large_image",
    title: "RT Strykon Sports Academy",
    description:
      "Premium multi-sport facility in Chennai. Play Hard. Train Harder. Win Together.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${plusJakartaSans.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-on-surface overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
