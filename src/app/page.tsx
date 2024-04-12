import HeroSection from "./components/HeroSection/HeroSection";
import AboutUs from "./components/AboutUs/AboutUs";
import Services from "./components/Services/Services";
import OurTeams from "./components/OurTeams/OurTeams";
import Reviews from "./components/Reviews/Reviews";

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
