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
  HandshakeIcon,
  HeartHandshakeIcon,
  TableIcon,

} from "lucide-react";



const icons1 = [
  { name: "<h1>Sesame seeds</h1>", image: TableIcon },
  { name: "Cocoa", image: TableIcon },
  { name: "Cashew nuts", image: TableIcon },
  { name: "Soy", image: TableIcon },
];

const icons2 = [
  { name: "Social Contribution", image: HeartHandshakeIcon },
  { name: "Inclusive Growth", image: HandshakeIcon },
];

const sectionsData = [
  {
    id: "section1",
    bgUrl: bg1.src,
    subtitle: "Premium quality",
    title: "Reliable Procurement & Export of Premium Agro Commodities",
    description: "we specialize in sourcing and supplying Africa’s finest agro commodities — sesame, cocoa, soy, and cashew — to markets across Asia and Europe. ",
  },
  {
    id: "section2",
    icons: icons1,
    bgUrl: bg2.src,
    subtitle: "What we supply",
    title: "Consistent Quality. Reliable Supply",
    description: "Farmnegy delivers high-quality, export-ready agro commodities tailored to meet the demands of manufacturers, processors, and bulk buyers across Asia and Europe. Our products are sourced with strict quality control and handled through efficient logistics for timely delivery and competitive pricing.",
  },
  {
    id: "section3",
    icons: icons2,
    bgUrl: bg3.src,
    subtitle: "Why Farmnegy?",
    title: "Why Farmnegy Is Your Trusted Agro Commodity Partner",
    description: "At FarmNegy, we go beyond supply — we build lasting trade partnerships. Our strength lies in a reliable sourcing network across Africa, rigorous quality control processes, and a deep understanding of global commodity markets. Whether you're a manufacturer, processor, or bulk trader, we provide export-ready sesame, cocoa, soy, and cashew products tailored to your requirements. "
  },
];

export default function Home() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  const mainRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = mainRef.current;
    if (!el) return;
  
    const handleScroll = () => {
      setHasScrolled(el.scrollTop > 10);
    };
  
    el.addEventListener("scroll", handleScroll);
    handleScroll(); 
  
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);
  
  
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
        threshold: 0.5, 
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
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            
            className="h-screen snap-start"
          >
            <SectionWithBg {...section} id={index + 1} />
          </section>
        ))}
        {/*<div*/}
        {/*  */}
        {/*  className="snap-start"*/}
        {/*>*/}
        {/*  <CardsSection />*/}
        {/*</div>*/}
        <section
          
          className="snap-start"
        >
          <AppFooter />
        </section>
      </main>

      
      <div className="fixed flex-col hidden md:flex gap-2 top-1/2 right-20 -translate-y-1/2 z-50 space-y-4">
        {sectionsData.map((_, i) => (
          <div key={i} className={`flex gap-2 items-center ${
            activeIndex === i ? "text-white" : "text-gray-400"
          }`}>
            <span className={`${activeIndex === i ? "text-white" : "text-transparent"}`}>{_.subtitle}</span>
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
