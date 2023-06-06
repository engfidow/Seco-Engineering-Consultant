import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  somalia,
  hormuud,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  Seco,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [

  {
    id: "about",
    title: "About",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Superior Service",
    icon: web,
  },
  {
    title: "Quick Response",
    icon: mobile,
  },
  {
    title: "Trusted Experts",
    icon: backend,
  }
  
];

const technologies = [
  {
    name: "Somalia",
    icon: somalia,
  },
  {
    name: "CSS 3",
    icon: hormuud,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "System Design",
    company_name: "Seco",
    icon: Seco,
    iconBg: "#383E56",
    date: "Seco Engineering & Consultant",
    points: [
      "Assembling manufactured parts to generate power efficiently and connect them securely to storage, transmission, and distribution systems.",
      "Designing solar energy systems involves selecting, sizing, and assembling photovoltaic or thermal components to meet performance standards within budget and time constraints.",
      "In addition to testing, evaluation, and specifying design revisions, it also includes engineering and economic analysis.",
    ],
  },
  {
    title: "Project Development",
    company_name: "Seco",
    icon: Seco,
    iconBg: "#E6DEDD",
    date: "Seco Engineering & Consultant",
    points: [
      "The goal of project development is to get systems operational on a commercial, legal, and financial level.",
      "Promoting renewable energy adoption, optimizing installation locations, ensuring safety and quality compliance, and organizing projects for both large-scale utility and residential solar initiatives.",
      "Solar energy project development involves sales and marketing, contracting and purchasing, plan review, permit acquisition, and inspections to ensure compliance with norms and standards for component and system installation.",
      
    ],
  },
  {
    title: "Installation  & Operation",
    company_name: "Seco",
    icon: Seco,
    iconBg: "#383E56",
    date: "Seco Engineering & Consultant",
    points: [
      "Installation and operations in the field involve construction, engineering, logistics, and overall management for efficient building and operation of projects.",
      "In the realm of solar energy, this entails the physical labor of site clearing, installation of photovoltaic or thermal systems, and ongoing maintenance of those systems.",
      "Solar energy work encompasses managing construction projects, optimizing system performance, and the prominent task of installing panels on roofs, both for large and small-scale projects.",
    ],
  },
  {
    title: "Training",
    company_name: "Seco",
    icon: Seco,
    iconBg: "#E6DEDD",
    date: "Seco Engineering & Consultant",
    points: [
      "SECO created this Solar PV Standardized Training to offer fundamental technical instruction in the sizing, installation, and maintenance of photovoltaic systems.",
      "It also serves as a post-training reference for system maintenance and troubleshooting.",
      "Training includes: Introduction to renewable energy in Zimbabwe, electricity basics, solar energy principles, photovoltaic technology, system sizing, and safety precautions.",
      "Covers basic maintenance, troubleshooting, and practical application of solar energy systems.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "MARINA BEACH",
    description:
      "Marina Beach : Hybrid System is constructed in 2023-2025, with a total installed capacity of 10 MW for diesel generator and 2 MW for solar with 1MW battery storage and actual available capacity 10 MW as estimated.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "JAZEERA",
    description:
      "Hybrid System is constructed in 2023-2025, with a total installed capacity of 30 MW for diesel generator and 50 MW for solar with 20 MW battery storage and actual available capacity 100 MW as estimated.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "DAYNIILE",
    description:
      "Hybrid System is constructed in 2023-2024, with a total installed capacity of 10 MW for diesel generator and 5 MW for solar and actual available capacity 12 MW as estimated.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
