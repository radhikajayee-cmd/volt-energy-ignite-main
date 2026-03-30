import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ProductSection from "@/components/ProductSection";
import ScienceSection from "@/components/ScienceSection";
import FlavorSection from "@/components/FlavorSection";
import ActionSection from "@/components/ActionSection";
import ComparisonSection from "@/components/ComparisonSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ProductSection />
      <ScienceSection />
      <FlavorSection />
      <ActionSection />
      <ComparisonSection />
      <TestimonialsSection />
      <CTASection />
      <NewsletterSection />
      <Footer />
    </main>
  );
};

export default Index;
