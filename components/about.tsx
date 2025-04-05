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
        Driven by a <span className="font-medium">deep passion for SEO</span>, I specialize in turning 
        challenges into growth through <span className="font-medium">technical and content-driven strategies</span>. 
        I rely on data, speed, and experimentation to push performance and support team success in fast-moving environments.
      </p>

      <p className="mb-4 mt-4 block">
        Before earning my <span className="font-medium">Management</span> degree, I launched a niche watch blog that 
        evolved into a full-time SEO and web project. That experience cemented my love for problem-solving 
        in development and search, which led to roles at <a className="text-yellow-500" href="https://www.berlin-brands-group.com/en">Berlin Brands Group </a> 
        and <a className="text-amber-500" href="https://www.justwatch.com/us">JustWatch</a>. I’m currently leading SEO strategy at 
        <a className="text-green-800" href="https://www.droppe.com"> Droppe</a>, where I focus on scalable growth and user acquisition for our marketplace.
        I'm currently based in <span className="font-medium">Berlin, Germany</span>.
      </p>

      <p className="mt-5 block">
        When I'm not diving into SEO, I'm gaming, fishing, or exploring new places. I also enjoy 
        <span className="font-medium"> continuous learning</span>, especially when it sharpens my skills in search, analytics, 
        and front-end development.
      </p>
    </motion.section>
  );

}
