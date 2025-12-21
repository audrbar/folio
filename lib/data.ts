import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import coditoryImg from "@/public/coditory.png";
import priceryImg from "@/public/pricery.png";
import promtopadaImg from "@/public/promtopiada.png";

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
        title: "Vilnius CODING School",
        location: "Vilnius, LT",
        description:
            "Junior Programmer, Data Science Course",
        icon: React.createElement(CgWorkAlt),
        date: "2024 - 2025",
    },
    {
        title: "Baltic Institute of Technology",
        location: "Vilnius, LT",
        description:
            "Junior Programmer, JavaScript Programming",
        icon: React.createElement(FaReact),
        date: "2022 - 2023",
    },
    {
        title: "Kaunas University of Technology",
        location: "Kaunas, LT",
        description:
            "Social Sciences",
        icon: React.createElement(LuGraduationCap),
        date: "2000 - 2002",
    },
    {
        title: "Kaunas University of Technology",
        location: "Kaunas, LT",
        description:
            "Chemical Engineering",
        icon: React.createElement(LuGraduationCap),
        date: "1990 - 1995",
    },
] as const;

export const projectsData = [
    {
        title: "Coditory",
        description:
            "A modern, full-stack Reddit clone built with Next.js 13, featuring communities (subreddits), posts, comments, voting, and real-time interactions.",
        tags: ["NextJS", "TypeScript", "Upstash", "GoogleAuth", "Shadcn-ui", "Prisma"],
        siteUrl: "https://coditory.vercel.app/",
        sourceUrl: "https://github.com/audrbar/codit/",
        imageUrl: coditoryImg,
    },
    {
        title: "Pricery",
        description:
            "A powerful, self-serve product and price tracking application that helps you monitor selected products, get price alerts, and make informed purchasing decisions.",
        tags: ["NextJS", "TypeScript", "Tailwind", "MongoDB", "Mongoose", "Cheerio", "Axios", "Nodemailer"],
        siteUrl: "https://pricery.vercel.app/",
        sourceUrl: "https://github.com/audrbar/pricery",
        imageUrl: priceryImg,
    },
    {
        title: "Promptopiada",
        description:
            "An open-source AI prompting tool that enables users to discover, create, and share creative prompts for use with AI chatbots like ChatGPT.",
        tags: ["ReactJS", "NextJS", "MongoDB", "Mongoose", "Tailwind", "NextAuth"],
        siteUrl: "https://promptopiada.vercel.app",
        sourceUrl: "https://github.com/audrbar/promptopia",
        imageUrl: promtopadaImg,
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "GitHub",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "PostgreSQL",
    "Redux",
    "GraphQL",
    "Apollo",
    "Express",
    "Django",
    "Framer Motion",
    "Python",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Jupyter Notebooks",
    "Machine Learning",
    "Scikit-learn",
    "TensorFlow",
    "Keras",
    "PyTorch",
    "Hugging Face",
    "Ollama",
    "LangChain",
    "Data Analysis"
] as const;