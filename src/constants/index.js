import {
  mobile,
  backend,
  creator,
  python,
  web,
  javascript,
  typescript,
  css,
  reactjs,
  swift,
  django,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  spotify,
  lenleys,
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
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Operations Specialist",
    icon: mobile,
  },
  {
    title: "Agile Coach",
    icon: backend,
  },
  {
    title: "Incident Manager",
    icon: creator,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  {
    name: "CSS 3",
    icon: css,
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
    name: "python",
    icon: python,
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
  {
    name: "django",
    icon: django,
  },
  {
    name: "swift",
    icon: swift,
  },
];

const experiences = [
  {
    title: "Technical Operations Specialist",
    company_name: "Spotify",
    icon: spotify,
    iconBg: "#383E56",
    date: "Nov 2021 - July 2023",
    points: [
      "Led global CS incident management for Spotify's 2022 Wrapped campaign, coordinating 3000+ professionals.",
      "Improved org efficiency with agile training and roadmap alignment.",
      "Wrote Bash scripts to automate operations, enhancing stakeholder Jira ticket resolution fourfold."
    ],
  },
  {
    title: "Customer Operations Manager",
    company_name: "Spotify",
    icon: spotify,
    iconBg: "#E6DEDD",
    date: "Dec 2020 - Nov 2021",
    points: [
      "Implemented a bug reporting framework, enhancing user sentiment.",
      "Managed team and led  incident management, and fraud prevention."
    ],
  },
  {
    title: "Customer Operations Senior Associate",
    company_name: "Spotify",
    icon: spotify,
    iconBg: "#383E56",
    date: "Dec 2018 - Dec 2020",
    points: [
      "Employed Scrum, and coached the team to increase output sixfold.",
      "Managed Spotify's elite customer support tier around the world."
    ],
  },
  {
    title: "Head of Digital Marketing",
    company_name: "Lenleys",
    icon: lenleys,
    iconBg: "#E6DEDD",
    date: "June 2016 - May 2018",
    points: [
      "Doubled marketing ROI via A|B testing and funnel optimization.",
      "Collaborated with C-suite on business strategy and maintained site SEO."
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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