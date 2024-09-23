"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 block">
      Driven by a{" "}
        <span className="font-medium">deep passion for SEO</span>,  I specialize in transforming 
        challenges into opportunities through{" "}
        <span className="font-medium">innovative technical and content strategies</span>.{" "}
        I focus on data-driven analysis and fast learning to drive growth and foster 
        team success in the dynamic digital landscape.
      </p>

      <p className="mb-4 mt-4 block">
      Before earning my  <span className="font-medium">Management</span> degree, I combined my interests in watches and SEO by launching a watch blog. 
      What began as a simple project quickly became a full-time endeavor, highlighting my <span className="underline">love</span> for problem-solving 
      in web development and SEO. After university, I dedicated myself 
      to this passion, which led me to my first web development role. It deepened my focus on SEO, 
      including technical SEO and content optimization at companies like <a className="text-yellow-400" href="https://www.berlin-brands-group.com/en">Berlin Brands Group</a> and <a className="text-amber-500" href="https://www.justwatch.com/us">JustWatch</a>.
      I'm currently based in <span className="font-medium">Berlin, Germany</span>.
      </p>

      <p className="mt-5 block">
        When I'm not doing SEO, I spend my time playing
        video games, fishing, or traveling. I also enjoy{" "}
        <span className="font-medium">learning new things </span>including ways to further 
        improve my SEO skills and expand my web design and development stack.
      </p>
    </motion.section>
  );
}
