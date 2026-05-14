import type { Metadata } from "next";
import { Cormorant_Garamond, Playfair_Display, Inter, Manrope } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ui",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Plan My Baby Shower | Premium Baby Shower Planning & Inspiration",
  description:
    "Discover curated baby shower themes, invitations, printables, and planning tools. The premium platform for creating an unforgettable baby shower.",
  keywords:
    "baby shower themes, baby shower invitations, baby shower planning, baby shower printables, baby shower inspiration",
  openGraph: {
    title: "Plan My Baby Shower | Premium Baby Shower Planning & Inspiration",
    description:
      "Curated themes, invitations, and tools for the perfect baby shower.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${playfair.variable} ${inter.variable} ${manrope.variable}`}
    >
      <body>
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
