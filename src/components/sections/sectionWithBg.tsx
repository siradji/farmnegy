"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { LucideIcon } from "lucide-react";
import downIcon from "@/assets/icons/btn_down.png";

interface SectionWithBgProps {
  id: number;
  bgUrl: string;
  subtitle: string;
  title: string;
  description: string;
  icons?: Array<{
    name: string;
    image: LucideIcon;
  }>;
}

function SectionWithBg({
  bgUrl,
  subtitle,
  title,
  description,
  icons,
  id,
}: SectionWithBgProps) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.4 });

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 40 });
    }
  }, [isInView, controls]);

  return (
    <section
      className="relative h-full w-full bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />
      <motion.div
        ref={ref}
        className="flex md:pt-20 pt-12 px-4 md:px-8 flex-col h-full w-full justify-center items-center relative z-10 max-w-4xl text-center text-white space-y-4"
        initial={{ opacity: 0, y: 40 }}
        animate={controls}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="flex flex-col justify-center items-center">
          <span className="uppercase md:text-3xl text-xl text-white mb-2">{subtitle}</span>
          <div className="md:w-10 w-5 h-px bg-white" />
        </div>

        <h2 className="text-white capitalize leading-[1.2em] font-light text-4xl md:text-7xl my-8 w-[90%]">
          {title}
        </h2>

        <p className="text-2xl text-white" dangerouslySetInnerHTML={{ __html: description }} />

        <a
          onClick={(e) => {
            e.preventDefault();
            document.getElementById(`section${id + 1}`)?.scrollIntoView({ behavior: "smooth" });
          }}
          className="group mt-8 flex flex-col justify-center items-center absolute top-[80%] left-1/2 -translate-x-1/2 cursor-pointer"
          href=""
        >
          <span className="uppercase text-sm text-white mb-1 group-hover:translate-y-[-2px] group-hover:opacity-90 transition-all duration-300">
            Scroll
          </span>
          <Image
            alt="Arrow Down"
            src={downIcon}
            width={15}
            height={35}
            className="animate-bounce group-hover:animate-none transition-transform duration-300"
          />
        </a>

        <div className="flex gap-20 mt-20">
          {icons?.map(({ name, image: Icon }, index) => (
            <div key={index} className="flex flex-col justify-center items-center">
              <Icon size={60} color="white" />
              <p
                className="uppercase text-xl md:text-2xl mt-8 text-white"
                dangerouslySetInnerHTML={{ __html: name }}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default SectionWithBg;
