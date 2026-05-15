import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PopularInvitations from "@/components/PopularInvitations";
import PlanningTools from "@/components/PlanningTools";
import TrendingGames from "@/components/TrendingGames";
import BlogSection from "@/components/BlogSection";
import FreebiesSection from "@/components/FreebiesSection";
import ThemeSpotlight from "@/components/ThemeSpotlight";
import PlaylistSection from "@/components/PlaylistSection";
import ShopTeaser from "@/components/ShopTeaser";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import CartDrawer from "@/components/CartDrawer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PopularInvitations />
        <PlanningTools />
        <TrendingGames />
        <BlogSection />
        <FreebiesSection />
        <ThemeSpotlight />
        <PlaylistSection />
        <ShopTeaser />
        <Testimonials />
      </main>
      <Footer />
      <MobileCTA />
      <CartDrawer />
    </>
  );
}
