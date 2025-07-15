"use client";

import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/layout/header";
import SectionWithBg from "@/components/sections/sectionWithBg";
import CardsSection from "@/components/sections/cardsSection";
import { AppFooter } from "@/components/layout/footer";

import bg1 from "@/assets/homepage/wheat.jpg";
import bg2 from "@/assets/homepage/wheat2.jpg";
import bg3 from "@/assets/homepage/woman.jpg";

import {
  ForkKnife,
  HandshakeIcon,
  HeartHandshakeIcon,
  TableIcon,
} from "lucide-react";

const icons1 = [
  { name: "Food<br /> Bussiness", image: TableIcon },
  { name: "Ingredient<br /> Bussiness", image: ForkKnife },
];

const icons2 = [
  { name: "Social Contribution", image: HeartHandshakeIcon },
  { name: "Inclusive Growth", image: HandshakeIcon },
];

const sectionsData = [
  {
    id: "section1",
    bgUrl: bg1.src,
    subtitle: "Farm",
    title: "The Road Of Happiness walk with you",
    description: "this road of happiness walk with you all along you dont know",
  },
  {
    id: "section2",
    icons: icons1,
    bgUrl: bg2.src,
    subtitle: "Farm",
    title: "Best Way To The Best",
    description: "Thinking, a thought of not remaining anywhere <br /> is the best way to the best.",
  },
  {
    id: "section3",
    icons: icons2,
    bgUrl: bg3.src,
    subtitle: "Farm",
    title: "Shortcut to happiness is the road with a company.",
    description: "Share together, happy together, and live together. <br /> The word together is the way to the happiness.",
  },
];

export default function Home() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  const mainRef = useRef<HTMLDivElement | null>(null);


  // Detect scroll position
  useEffect(() => {
    const el = mainRef.current;
    if (!el) return;
  
    const handleScroll = () => {
      setHasScrolled(el.scrollTop > 10);
    };
  
    el.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on mount
  
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Set up scroll spy with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex((el) => el === entry.target);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of section is visible
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <Header hasScrolled={hasScrolled} />
      <main ref={mainRef} className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth relative">
        {sectionsData.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="h-screen snap-start"
          >
            <SectionWithBg {...section} id={index + 1} />
          </section>
        ))}
        <div
          
          className="snap-start"
        >
          <CardsSection />
        </div>
        <section
          
          className="snap-start"
        >
          <AppFooter />
        </section>
      </main>

      {/* Dot navigation */}
      <div className="fixed flex-col hidden md:flex gap-2 top-1/2 right-20 -translate-y-1/2 z-50 space-y-4">
        {sectionsData.map((_, i) => (
          <div className={`flex gap-2 items-center ${
            activeIndex === i ? "text-white" : "text-gray-400"
          }`}>
            <span className={`${activeIndex === i ? "text-white" : "text-transparent"}`}>{_.subtitle as any}</span>
          <button
            key={i}
            onClick={() =>
              document.getElementById(`section${i + 1}`)?.scrollIntoView({ behavior: "smooth" })
            }
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeIndex === i ? "bg-white scale-125" : "bg-gray-400"
            }`}
          />
          </div>
        ))}
      </div>
    </>
  );
}
