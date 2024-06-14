"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

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
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Engineering</span>, graduate turned Front-End Developer with a passion for solving complex problems through code for {" "}
        <span className="font-medium">web development</span>.{" "}
        <span className="font-medium">My journey began in a coding bootcamp, leading me to specialize in React, Next.js, Node.js, and MongoDB, </span> 
        with skills in Angular, HTML5, CSS3, and responsive design using SASS and LESS <span className="underline">With over 8 years of experience across Banking, E-commerce, and Telecommunication,</span> 
        I've focused on creating user-centric Single Page Applications that meet both user needs and business goals.{" "}
        
        
        I am currently looking for a {" "}
        <span className="font-medium">Sr.Front-End Developer </span> role
      </p>

      <p>
        <span className="font-medium">When I'm not coding</span>, I enjoy playing
        video games, watching movies, workout in the gym. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium"></span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
