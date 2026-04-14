import Hero from "@/components/Hero/Hero";
import AboutUs from "@/components/About/AboutUs";
import Gallery from "@/components/Gallery/Gallery";
import Loyalty from "@/components/Loyalty/Loyalty";
import StoreMap from "@/components/StoreMap/StoreMap";
import News from "@/components/News/News";

export default function Home() {
  return (
    <>
      <Hero />
	    <AboutUs />
      <Gallery />
      <Loyalty />
      <StoreMap />
      <News />
    </>
  );
}