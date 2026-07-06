import Hero from "@/components/Hero";
import Presentation from "@/components/Presentation";
import Keywords from "@/components/Keywords";
import Reflexologie from "@/components/Reflexologie";
import Publics from "@/components/Publics";
import Cabinet from "@/components/Cabinet";
import FairySection from "@/components/FairySection";
import SectionDivider from "@/components/SectionDivider";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Presentation />
      <FairySection />
      <Reflexologie />
      <Keywords />
      <Publics />
      <SectionDivider />
      <Cabinet />
      <Testimonials />
    </>
  );
}
