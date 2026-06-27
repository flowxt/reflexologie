import Hero from "@/components/Hero";
import Presentation from "@/components/Presentation";
import Keywords from "@/components/Keywords";
import Reflexologie from "@/components/Reflexologie";
import Publics from "@/components/Publics";
import Cabinet from "@/components/Cabinet";
import FairySection from "@/components/FairySection";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Presentation />
      <Keywords />
      <FairySection />
      <Reflexologie />
      <Publics />
      <Cabinet />
      <Testimonials />
    </>
  );
}
