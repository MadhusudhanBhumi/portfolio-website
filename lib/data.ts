import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";

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
    title: "Gemini Solutions Pvt Limited",
    location: "India",
    description:
      "As a Front-End Developer , I fused HTML, CSS, and JavaScript to shape user-friendly web experiences, while also diving into PHP for backend logic. Collaborated closely with teams, enhancing designs and streamlining quality-driven processes. Regular client interaction and diligent documentation, including test cases and system updates, were key aspects of my role.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2015 - Jan 2018",
  },
  {
    title: "Axians",
    location: "India",
    description:
      "I harnessed HTML5, CSS3, JavaScript, and React to develop front-end applications, specializing in login and management modules. I built Single Page Applications using React and React-Router, managed data flows with Flux, and integrated REST APIs for dynamic JSON data retrieval. My work involved AJAX for seamless UI updates, Bootstrap and Media queries for responsive design, and D3.js for behavioral data visualization. I engaged in TDD using Jasmine and Karma and utilized AWS Elastic Beanstalk for the deployment of applications, combining Java and Node.js within Apache server ecosystems.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2018 - Jun 2020",
  },
  {
    title: "Meta",
    location: "New York , USA",
    description:
      "In my role as a Senior Front-End Developer at Meta, New York, I advanced UI/UX with React.js, optimized data with GraphQL, and modernized state management using React Hooks. I implemented dynamic routing, embraced CSS-in-JS, and facilitated real-time interactions via WebSockets. My focus was on enhancing mobile experiences with PWA, ensuring codebase integrity, and promoting accessible design. I streamlined deployments with CI/CD pipelines, developed cross-platform apps with React Native, and upheld security with robust authentication practices.",
    icon: React.createElement(FaReact),
    date: "Jun 2020 - Jul 2022",
  },
  {
    title: "Wells Fargo",
    location: "San Francisco, California",
    description:
      "At Wells Fargo, I crafted high-volume financial web apps with Node.js and MongoDB, introduced responsive designs with SASS and Bootstrap, and integrated Angular Fusion Charts for real-time financial analytics. I developed SPA frameworks with Angular, bolstering security with JWT and Guards, and enhanced UX with Angular-validated forms. My role included streamlining Angular and RESTful API integrations, processing JSON for user-friendly interfaces, and creating custom Angular Pipes for data organization.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
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
"Java",
"HTML5", "CSS3", "SASS", "LESS", "Bootstrap", "jQuery",
"Angular 4/5.0/7.0", "React.js", "Node.js", "Semantic UI", "Vue.JS","D3.js", "Angular Fusion Charts", "Chart.js",
"XML", "JSON", "AJAX", "REST", "JAX-WS(SOAP)",
"MySQL", "MongoDB", "Oracle", "MS SQL Server", "PostgreSQL", "SVN",
"Jasmine", "QUnit", "Karma", "Mocha", "Chai",
"Jenkins",
"Gulp", "Grunt", "Webpack",
"Agile", "Scrum", "TDD", "BDD",

"Servlets", "JSP", "JDBC", "EJB", "Spring"
, "RDS"
] as const;
