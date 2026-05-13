import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedTools from "@/components/FeaturedTools";
import PopularThemes from "@/components/PopularThemes";
import PrintablesGallery from "@/components/PrintablesGallery";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedTools />
      <PopularThemes />
      <PrintablesGallery />
      <HowItWorks />
      <Testimonials />
      <Footer />
      <MobileCTA />
    </main>
  );
}
