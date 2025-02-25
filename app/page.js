import BrandSlider from "@/components/Home/BrandSlider";
import HeroSection from "@/components/Home/HeroSection";
import Nav from "@/components/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Nav />
      <HeroSection />
      <BrandSlider />
    </>
  );
}
