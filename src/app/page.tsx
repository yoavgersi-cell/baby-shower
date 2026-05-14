import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrendingNow from "@/components/TrendingNow";
import FeaturedThemes from "@/components/FeaturedThemes";
import MostSavedInvitations from "@/components/MostSavedInvitations";
import PlanningTools from "@/components/PlanningTools";
import GamesSection from "@/components/GamesSection";
import MoodboardGallery from "@/components/MoodboardGallery";
import PrintableBundles from "@/components/PrintableBundles";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrendingNow />
      <FeaturedThemes />
      <MostSavedInvitations />
      <PlanningTools />
      <GamesSection />
      <MoodboardGallery />
      <PrintableBundles />
      <HowItWorks />
      <Testimonials />
      <Footer />
      <MobileCTA />
    </main>
  );
}
