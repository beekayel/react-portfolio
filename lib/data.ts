import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import mealprepplanImg from "@/public/mealpreplan.png";
import watchblogImg from "@/public/WatchBlog.png";
import savegamezImg from "@/public/SaveGamez.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "SEO Manager - Berlin Brands Group",
    location: "Berlin, Germany",
    description:
      "Manage Technical SEO for all brands and locales, including implementation, documentation, and strategy. Collaborate as part of the UI & UX Analysis team driving website redesign and Global Design System introduction. Lead the redesign of special landing pages to boost CTR and conversion rates. Oversee Metadata, Structured Data, Interlinking, Indexation, Sitemap, and Robots. Generate and optimize AI-driven content for Amazon listings across all brands and D2C content. Develop and implement comprehensive site audits across all brands, creating interactive dashboards to monitor website health and identify potential errors.",
    icon: React.createElement(CgWorkAlt),
    date: "11.2023 - Present",
  },
  {
    title: "Junior SEO Manager - JustWatch",
    location: "Berlin, Germany",
    description:
      "Amplified website traffic by 150%, increasing SEO visits from 20 to 50 million. Elevated backlinks from 6 to 10.2 million. Led research and execution of link-building campaigns (+80 RD). Verified feature testing and web releases for SEO quality and compliance. Led the launch of 12 new regions and various sports categories. Oversaw Metadata, Structured Data, and Indexation across all pages.",
    icon: React.createElement(CgWorkAlt),
    date: "10.2022 - 10.2023",
  },
  {
    title: "Entrepreneur in Residence - Resourceful Humans",
    location: "Berlin, Germany",
    description:
      "Responsible for branding across Twitch.tv, YouTube, and LinkedIn. Managed Google Ads, resulting in a 360% increase in website traffic. Oversaw the SEO team, increasing website authority, redesigning multiple pages, and handling sitemap and interlinking.",
    icon: React.createElement(CgWorkAlt),
    date: "03.2022 - 09.2022",
  },
  {
    title: "Marketing Manager - Fishing in Lappland",
    location: "Storuman, Sweden",
    description:
      "Produced and shot videos for ads, YouTube, and Facebook content. Managed all social media platforms. Edited vlogs and promotional videos and created posters, logos, and more.",
    icon: React.createElement(CgWorkAlt),
    date: "07.2020 - 08.2021",
  },
  {
    title: "Web Developer - Fishing in Lappland",
    location: "Storuman, Sweden",
    description:
      "Developed fishinginlappland.com. Used HTML, CSS, Java, and Figma, while gaining knowledge in website analytics services and SEO.",
    icon: React.createElement(CgWorkAlt),
    date: "08.2019 - 12.2020",
  },
] as const;

export const projectsData = [
  {
    title: "MealPrepPlan",
    description:
      "I led the SEO, UI, and frontend development for this app, which streamlines meal prep and grocery shopping into a waste-free experience.",
    tags: ["Technical & Content SEO", "Figma", "React", "Tailwind"],
    imageUrl: mealprepplanImg,
  },
  {
    title: "Watch Blog",
    description:
      "I am currently developing this project, a website that connects users to watch release dates tailored to their preferences and location.",
    tags: ["Technical & Content SEO", "Figma", "CMS", "CRO"],
    imageUrl: watchblogImg,
  },
  {
    title: "SaveGamez",
    description:
      "I led the SEO and UI & UX efforts for this startup project. It enabled users to easily find the lowest prices for specific video games.",
    tags: ["Technical SEO", "UI & UX", "URL Logic", "Figma"],
    imageUrl: savegamezImg,
  },
] as const;

export const skillsData = [
  "Google Search Console",
  "Google Analytics",
  "On-page Optimisation",
  "Keyword Research",
  "Content Generation",
  "CRO Optimisation",
  "CTR Optimisation",
  "Site Auditing",
  "Link Building Strategy & Implementation",
  "SEMrush",
  "UI & UX Analysis",
  "Figma",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Tailwind",
  "Framer Motion",
] as const;
