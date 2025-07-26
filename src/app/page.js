import Image from "next/image";
import Container from "./components/Container";
import HeroCarousel from "./components/HeroCarousel";
import CurrentProperties from "./components/CurrentProperties";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import AboutUs from "./components/AboutUs";
import WhyChooseUs from "./components/WhyChooseUs";
import UpcomingProperties from "./components/UpcomingProperties";


export default function Home() {
  return (
     <Container>
      <HeroCarousel />
      <CurrentProperties />
      <UpcomingProperties />
      <Gallery />
      <AboutUs />
      <Testimonials />
      <WhyChooseUs />
    </Container>
  );
}
