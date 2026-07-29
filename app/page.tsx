import LandingNav from "@/components/landing/LandingNav";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import Features from "@/components/landing/Features";
import Description from "@/components/landing/Description";
import Team from "@/components/landing/Team";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import FAQSection from "@/components/landing/FAQ";

export default function LandingPage() {
  return (
    <div className="bg-white">
      <LandingNav />
      <Hero />
      <Problem />
      <Features />
      <Description />
      <Team />
      <FAQSection />
      <CTA />
      <Footer />
    </div>
  );
}
