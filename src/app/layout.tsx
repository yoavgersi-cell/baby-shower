import type { Metadata } from "next";
import { Playfair_Display, Nunito } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Plan My Baby Shower | Free Baby Shower Planner, Invitations & Games",
  description:
    "Plan the perfect baby shower with free invitations, printable games, themes, and checklists. The #1 baby shower planning platform.",
  keywords:
    "baby shower, baby shower themes, baby shower games, baby shower invitations, baby shower printables, baby shower planner, baby shower ideas",
  authors: [{ name: "Plan My Baby Shower" }],
  openGraph: {
    title: "Plan My Baby Shower | Free Baby Shower Planner, Invitations & Games",
    description:
      "Plan the perfect baby shower with free invitations, printable games, themes, and checklists. The #1 baby shower planning platform.",
    url: "https://planmybabyshower.com",
    siteName: "Plan My Baby Shower",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Plan My Baby Shower - The #1 Baby Shower Planning Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plan My Baby Shower | Free Baby Shower Planner",
    description:
      "Plan the perfect baby shower with free invitations, printable games, themes, and checklists.",
    images: ["/og-image.png"],
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
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#e04880" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body
        className={`${playfair.variable} ${nunito.variable} antialiased bg-cream-50`}
        style={{ fontFamily: "var(--font-nunito), Nunito, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
