"use client"

import { Header } from "@/components/layout/header";
import SectionWithBg from "@/components/sections/sectionWithBg";
import Image from "next/image";

import bg1 from "@/assets/homepage/wheat.jpg"

import bg2 from "@/assets/homepage/wheat2.jpg"

import bg3 from "@/assets/homepage/woman.jpg"
import { ForkKnife, HandshakeIcon, HeartHandshakeIcon, TableIcon } from "lucide-react";
import CardsSection from "@/components/sections/cardsSection";
import { AppFooter } from "@/components/layout/footer";

const icons1 = [
  {
    name: "Food<br /> Bussiness",
    image: TableIcon
  },
  {
    name: "Ingredient<br /> Bussiness",
    image: ForkKnife
  },
]

const icons2 = [
  {
    name: "Social Contribution",
    image: HeartHandshakeIcon
  },
  {
    name: "Inclusive Growth",
    image: HandshakeIcon
  },
]

export default function Home() {
  return (
    <>
      <Header />
      <SectionWithBg bgUrl={bg1.src} subtitle="Farm" title="The Road Of Happiness walk with you" description="this road of happiness walk with you all along you dont know" />
      <SectionWithBg icons={icons1} bgUrl={bg2.src} subtitle="Farm" title="Best Way To The Best" description="Thinking, a thought of not remaining anywhere <br />  is the best way to the best." />
      <SectionWithBg icons={icons2} bgUrl={bg3.src} subtitle="Farm" title="Shortcut to happiness is the road with a company." description="Share together, happy together, and live together. <br />  The word together is the way to the happiness." />
      <CardsSection />
      <AppFooter />
    </>
  );
}
