import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FlowSection from "@/components/FlowSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

/** holofote do fundo e dos cartões acompanha o cursor (um único listener, via rAF) */
function usePointerLight() {
  useEffect(() => {
    if (!matchMedia("(pointer: fine)").matches) return;
    const root = document.documentElement;
    let frame = 0;
    let ev: PointerEvent | null = null;
    const apply = () => {
      frame = 0;
      if (!ev) return;
      root.style.setProperty("--mx", `${ev.clientX}px`);
      root.style.setProperty("--my", `${ev.clientY}px`);
      const card = (ev.target as Element | null)?.closest?.(".spot") as HTMLElement | null;
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--x", `${ev.clientX - r.left}px`);
        card.style.setProperty("--y", `${ev.clientY - r.top}px`);
      }
    };
    const onMove = (e: PointerEvent) => {
      ev = e;
      if (!frame) frame = requestAnimationFrame(apply);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);
}

const Index = () => {
  usePointerLight();
  return (
    <>
      <div className="ambient" aria-hidden />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <FlowSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
