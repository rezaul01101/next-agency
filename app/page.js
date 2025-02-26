import BrandSlider from "@/components/Home/BrandSlider";
import HeroSection from "@/components/Home/HeroSection";
import Services from "@/components/Home/Services";
import WhyChoose from "@/components/Home/WhyChoose";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <HeroSection />
      <BrandSlider />
      <WhyChoose />
      <Services />
    </>
  );
}
