
import BrandSlider from "@/components/Home/BrandSlider";
import HeroSection from "@/components/Home/HeroSection";
import Services from "@/components/Home/Services";
import Teams from "@/components/Home/Teams";
import WhyChoose from "@/components/Home/WhyChoose";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandSlider />
      <WhyChoose />
      <Services />
      <Teams />
    </>
  );
}
