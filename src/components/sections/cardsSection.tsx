import { motion } from "framer-motion";
import cardImage1 from "@/assets/homepage/last_img_01.jpg";
import cardImage2 from "@/assets/homepage/last_img_02.jpg";
import cardImage3 from "@/assets/homepage/last_img_03.jpg";
import cardImage5 from "@/assets/homepage/last_img_05.jpg";
import Card from "../ui/card";
import type { Variants } from "framer-motion";

// Animation variants
const containerVariants = {
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
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const cards = [
  {
    image: cardImage1,
    title: "About Company",
    content: "Company creating a happy future<br /> with healthy food culture.",
    link: "/about"
  },
  {
    image: cardImage2,
    title: "About Company",
    content: "Company creating a happy future<br /> with healthy food culture.",
    link: "/about"
  },
  {
    image: cardImage3,
    title: "About Company",
    content: "Company creating a happy future<br /> with healthy food culture.",
    link: "/about"
  },
  {
    image: cardImage5,
    title: "About Company",
    content: "Company creating a happy future<br /> with healthy food culture.",
    link: "/about"
  },
];

function CardsSection() {
  return (
    <section className="md:p-8 p-4">
      <motion.div
        className="grid lg:grid-cols-4 grid-cols-2 gap-4 md:gap-6 lg:gap-y-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {cards.map((card, index) => (
          <motion.div className="w-full" key={index} variants={cardVariants}>
            <Card linkUrl={card.link} content={card.content} image={card.image} title={card.title} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default CardsSection;