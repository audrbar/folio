"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      ref={ref}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        My journey into programming began after graduating with a degree in{" "}
        <span className="font-medium">Chemical Engineering</span> from Kaunas University of Technology.
        With over <span className="font-medium">5 years of intensive learning</span>, I've completed
        programs at Baltic Institute of Technology and Vilnius CODING School, specializing in{" "}
        <span className="font-medium">JavaScript Programming and Data Science</span>.{" "}
        <span className="italic">What drives me in programming</span> is the intersection of
        AI and practical applications. I <span className="underline">thrive</span> on
        building intelligent systems that solve real-world problems.
      </p>

      <p className="mb-3">
        My technical expertise spans{" "}
        <span className="font-medium">
          React, Next.js, Python, and Machine Learning
        </span>
        . I work extensively with modern ML frameworks like{" "}
        <span className="font-medium">TensorFlow, PyTorch, and LangChain</span>,
        combined with full-stack technologies including TypeScript, Node.js, and databases like
        MongoDB and PostgreSQL. I'm passionate about creating{" "}
        <span className="font-medium">AI agents and intelligent applications</span> that
        bridge the gap between complex AI models and user-friendly interfaces.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I'm constantly exploring
        emerging AI technologies and experimenting with tools like{" "}
        <span className="font-medium">Ollama, Hugging Face, and Anthropic</span>.
        I believe in continuous learning and staying at the forefront of the rapidly
        evolving AI landscape.
      </p>
    </motion.section>
  );
}