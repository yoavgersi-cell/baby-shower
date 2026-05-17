import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import BestSellers from "@/components/BestSellers";
import FreebiesSection from "@/components/FreebiesSection";
import BlogSection from "@/components/BlogSection";
import BundlePromo from "@/components/BundlePromo";
import PlanningGuides from "@/components/PlanningGuides";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import CartDrawer from "@/components/CartDrawer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CategoryGrid />
        <BestSellers />
        <FreebiesSection />
        <BlogSection />
        <BundlePromo />
        <PlanningGuides />
      </main>
      <Footer />
      <MobileCTA />
      <CartDrawer />
    </>
  );
}
