'use client'
import Header from "@/components/Header";
import HeroComponent from "@/components/hero/HeroComponent";
import AboutUs from "@/components/aboutus/AboutUs";
import Services from "@/components/services/Services";
import PricingPlans from "@/components/plans/PricingPlans";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
    <Header/>
    <HeroComponent/>
    <AboutUs/>
    <Services/>
    <PricingPlans/>
    <Contact/>
    </>
  );
}
