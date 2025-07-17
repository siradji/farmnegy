"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import cardImage1 from "@/assets/homepage/last_img_01.jpg";
import cardImage2 from "@/assets/homepage/last_img_02.jpg";
import cardImage3 from "@/assets/homepage/last_img_03.jpg";
import cardImage5 from "@/assets/homepage/last_img_05.jpg";
import Card from "../ui/card";
import type { Variants } from "framer-motion";

// Animation variants
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

const cards = [
  {
    image: cardImage1,
    title: "About Company",
    content: "Company creating a happy future<br /> with healthy food culture.",
  },
  {
    image: cardImage2,
    title: "About Company",
    content: "Company creating a happy future<br /> with healthy food culture.",
  },
  {
    image: cardImage3,
    title: "About Company",
    content: "Company creating a happy future<br /> with healthy food culture.",
  },
  {
    image: cardImage5,
    title: "About Company",
    content: "Company creating a happy future<br /> with healthy food culture.",
  },
];

function CardsSection() {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("show");
    } else {
      controls.start("hidden"); // reset when out of view
    }
  }, [isInView, controls]);

  return (
    <section className="p-8">
      <motion.div
        ref={ref}
        className="grid lg:gap-y-0 gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {cards.map((card, index) => (
          <motion.div className="w-full" key={index} variants={cardVariants}>
            <Card content={card.content} image={card.image} title={card.title} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default CardsSection;
