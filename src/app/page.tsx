import Aboutsection from "@/components/template/landingPage/Aboutsection";
import ContactSection from "@/components/template/landingPage/ContactSection";
import ExperienceSection from "@/components/template/landingPage/ExperienceSection";
import HeroSection from "@/components/template/landingPage/HeroSection";
import SkillSection from "@/components/template/landingPage/SkillSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Aboutsection />
      {/* <ExperienceSection /> */}
      <SkillSection />
      <ContactSection />
    </>
  );
}
