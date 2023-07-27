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
      <p className="mb-3">
      I am an enthusiastic and accomplished {" "}
        <span className="font-medium">full-stack developer</span>, with a strong background in {" "}
        <span className="font-medium">computer science</span>, bolstered by extensive self-study to complement my formal education. I bring a wealth of hands-on experience in both{" "}
        <span className="italic">frontend and backend </span>development, along with a passion for coding and creating innovative solutions. My dedication to continuous learning and growth allows me to stay ahead of the curve and deliver exceptional results in every project. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript, Drizzle and Python. I am always looking to
        learn new technologies. I am eagerly seeking a {" "}
        <span className="font-medium">full-time position</span> as a passionate software developer. With a dedication to continuous improvement, I am excited to contribute my skills and enthusiasm to drive success in a dynamic team environment.
      </p>
    </motion.section>
  );
}
