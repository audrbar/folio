import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
        title: "CorpComment",
        description:
            "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
        tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
        imageUrl: corpcommentImg,
    },
    {
        title: "rmtDev",
        description:
            "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
        tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
        imageUrl: rmtdevImg,
    },
    {
        title: "Word Analytics",
        description:
            "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
        tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
        imageUrl: wordanalyticsImg,
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
    "Machine Learning",
    "Data Analysis",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Scikit-learn",
    "TensorFlow",
    "Keras",
    "PyTorch",
    "Jupyter Notebooks",
    "Ollama",
    "LangChain",
    "Hugging Face",
    "Bert",
    "Antropic"
] as const;