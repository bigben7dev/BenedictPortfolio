import Hero from "../components/home/Hero";
import Approach from "../components/home/Approach";
import Services from "../components/home/Services";
import FeaturedProjects from "../components/home/FeaturedProjects";
import Process from "../components/home/Process";
import AboutPreview from "../components/home/AboutPreview";
import Testimonials from "../components/home/Testimonials";
import FinalCTA from "../components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Approach />
        <Services />
        <FeaturedProjects />
        <Process />
        <AboutPreview />
        <Testimonials />
        <FinalCTA />
      </main>
    </>
  );
}
