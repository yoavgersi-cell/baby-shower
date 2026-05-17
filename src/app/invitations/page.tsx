import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Baby Shower Invitations | Free & Premium Templates",
  description:
    "Beautiful baby shower invitation templates — free and premium. Editable in Canva, instant PDF download.",
};

const invitations = products.filter((p) => p.category === "invitation");

export default function InvitationsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section
          className="py-16 px-4 lg:px-8"
          style={{ background: "linear-gradient(160deg, #FDF9F5 0%, #F8F0E8 100%)" }}
        >
          <div className="max-w-7xl mx-auto">
            <p
              className="text-[10px] tracking-[0.25em] uppercase text-[#C9927A] mb-3"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Invitations
            </p>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 400,
                color: "#2C2C2C",
              }}
            >
              Baby Shower Invitations
            </h1>
            <p
              className="mt-3 text-[#5A4A42]/60 max-w-lg"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Beautifully designed, instantly editable. Set the tone for your perfect shower.
            </p>
          </div>
        </section>

        {/* Products grid */}
        <section className="py-16 px-4 lg:px-8" style={{ background: "white" }}>
          <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {invitations.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
