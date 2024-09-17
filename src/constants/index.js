import { Texture } from "@react-three/drei";

export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myProjects = [
  {
    title: "AI Summarizer",
    desc: "AI Summarizer is an intelligent tool that effortlessly distills lengthy articles into concise summaries. It enables users to quickly grasp key insights from blogs and other online content by leveraging advanced AI-powered text analysis.",
    subdesc:
      "Utilizing technologies like React.js, Tailwind, Redux, and RapidAPI, this application delivers fast and accurate summaries, improving content consumption efficiency.",
    href: "https://ai-summarizer-beta-weld.vercel.app/",
 texture: '/textures/project/project1.mp4',
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "Real Estate Application",
    desc: "This Real Estate Application offers a complete property management solution, allowing users to explore, list, and manage properties with ease. It features secure authentication, intuitive interfaces, and powerful search functionality for finding the perfect home.",
    subdesc:
      "Built on the MERN stack, it integrates technologies like Firebase for real-time data management and MongoDB for advanced search capabilities, providing a seamless user experience across devices.",
    href: "https://property-36gz.onrender.com/",
    logo: "/assets/project-logo2.png",
texture: '/textures/project/project2.mp4',
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Evolve8 Studios",
    pos: "Full Stack Developer Intern",
    duration: "July 2024 – Present",
    title:
      "Worked on multiple large-scale deployed projects and CRM systems. Implemented various AI-based web apps and features, contributing to cutting-edge solutions.",
    icon: "/assets/Evolve8.jpeg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Temple of Learning",
    pos: "Full Stack Developer Intern",
    duration: "Mar 2024 – May 2024",
    title:
      "Worked on live projects including user account management systems and edtech platforms. Gained hands-on experience with AWS and Hostinger for deployment and hosting.",
    icon: "/assets/TOL.jpeg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "TechJM Limited",
    pos: "Full Stack Developer Intern",
    duration: "Sep 2023 – Dec 2023",
    title:
      "Innovated a web application utilizing Google Cloud Console API for seamless media and file transfers. Introduced features enabling users to effortlessly upload and download content via the web interface.",
    icon: "/assets/TechJM.jpeg",
    animation: "salute",
  },
];

