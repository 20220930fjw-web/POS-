import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NovaPOS - Smart POS Terminals, Payment Solutions & OEM/ODM Services",
  description: "Discover NovaPOS's comprehensive range of smart POS terminals, mobile POS devices, self-service kiosks, and payment solutions. OEM/ODM services available for global businesses.",
};

import HeroBanner from "@/components/home/HeroBanner";
import ProductSeriesShowcase from "@/components/home/ProductSeriesShowcase";
import StatsBar from "@/components/home/StatsBar";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Scenarios from "@/components/home/Scenarios";
import OEMProcess from "@/components/home/OEMProcess";
import Testimonials from "@/components/home/Testimonials";
import LatestNews from "@/components/home/LatestNews";
import BottomCTA from "@/components/home/BottomCTA";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <ProductSeriesShowcase />
      <StatsBar />
      <WhyChooseUs />
      <Scenarios />
      <OEMProcess />
      <Testimonials />
      <LatestNews />
      <BottomCTA />
    </>
  );
}
