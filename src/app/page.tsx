import HeroSection from "./components/HeroSection/HeroSection";
import AboutUs from "./components/AboutUs/AboutUs";
import Services from "./components/Services/Services";
import OurTeams from "./components/OurTeams/OurTeams";
import Reviews from "./components/Reviews/Reviews";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Growoly - Home Page",
  description: `Grow your buissness with our excellence.  At grwoly we have highly qualified expert team for our services. we
  are ready to make your dream project lives and make significant
  growth in your business.`,
};

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <AboutUs />
      <Services />
      <OurTeams />
      <Reviews />
    </main>
  );
}
