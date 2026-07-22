import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import SkillsSection from "@/components/SkillsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ExperienceSection from "@/components/ExperienceSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary/30 selection:text-white">
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <SkillsSection />
      <WhyChooseSection />
      <ExperienceSection />
      <PortfolioSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
