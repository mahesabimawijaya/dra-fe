"use client";

import Navbar from "@/components/navbar";
import Footer2 from "@/components/footer";
import { useUserStore } from "@/store/auth";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import PricingSection from "@/components/sections/pricing-section";
import ContactSection from "@/components/sections/contact-section";

export default function Home() {
  const { loading } = useUserStore();

  if (loading)
    return (
      <div className="flex w-full h-screen justify-center items-center">
        <div className="loader text-white"></div>
      </div>
    );

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PricingSection />
      <ContactSection />
      <Footer2 />
    </>
  );
}
