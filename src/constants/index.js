import {
  python,
  incident,
  operations,
  agile,
  fullstack,
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
  threejs,
  karma,
  unssung,
  itinera,
  battleships,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
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
    icon: fullstack,
  },
  {
    title: "Agile Coach",
    icon: agile,
  },
  {
    title: "Operations Specialist",
    icon: operations,
  },
  {
    title: "Incident Manager",
    icon: incident,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
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
    name: "CSS 3",
    icon: css,
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
      "Coordinated international offsites, established and led OKR planning.",
      "Automated on and offboarding operatons with Bash scripts, enhancing stakeholder Jira ticket resolution fourfold."
    ],
  },
  {
    title: "Customer Operations Manager",
    company_name: "Spotify",
    icon: spotify,
    iconBg: "#383E56",
    date: "Dec 2020 - Nov 2021",
    points: [
      "Implemented a bug reporting framework, enhancing user sentiment and product health.",
      "Managed small team and led incident management, fraud prevention and product support.",
      "Project managed the transfer of subsidary 'SoundBetter' from Javascript to Ruby on Rails, with minimal downtime.",
    ],
  },
  {
    title: "Customer Operations Senior Associate",
    company_name: "Spotify",
    icon: spotify,
    iconBg: "#383E56",
    date: "Dec 2018 - Dec 2020",
    points: [
      "Employed Scrum, and coached the team and management to increase output sixfold.",
      "Managed Spotify's elite customer support tier, across 7 locations and multiple lanaguages.",
      "Traveled internationally to train and onboard new teams around the world."
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
      "Collaborated with C-suite on business strategy and maintained site SEO.",
      "Built and deployed web pages, email, social and PPC campaigns.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "",
//     name: "",
//     designation: "",
//     company: "",
//     image: "",
//   },
//   {
//     testimonial:
//       "",
//     name: "",
//     designation: "",
//     company: "",
//     image: "",
//   },
//   {
//     testimonial:
//       "",
//     name: "",
//     designation: "",
//     company: "",
//     image: "",
//   },
// ];
const projects = [
   {
    name: "Unssung",
    description:
      "Unssung is a dynamic music-sharing platform that gamifies the discovery of hidden gem tracks. Players challenge each other to unearth the most captivating songs yet to be heard by their circle. Built using the React framework and integrated with Spotify's API, the platform not only promotes music sharing but also automates playlist creation on users' Spotify profiles. With the challenges of deploying on Heroku and managing user states, I incorporated Redis for scalable session storage, ensuring a seamless and engaging user experience.",
    tags: [
      {
        name: "react",
        color: "white-text-gradient",
      },
      {
        name: "mongoDB",
        color: "white-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "nodeJS",
        color: "white-text-gradient",
      },
      {
        name: "bootstrap",
        color: "white-text-gradient",
      },
      {
        name: "redis",
        color: "white-text-gradient",
      },
    ],
    image: unssung,
    source_code_link: "https://github.com/SimpsonRoss/Unssung",
    live_site_link: "https://trkr8-9a9586e5bb16.herokuapp.com/",
    videoId: "875604882",
  },
  {
        name: "Karma Coffee",
        description:
          "Karma Coffee is an e-commerce platform for the sale of ethically sourced coffee beans. This was a 3 person group project, and for my contributions I worked full-stack building the landing page, about page, cart and order functionality, the account page, Stripe checkout and the add-to-cart modal. I also worked on the backend, building the models and controllers to support the previously mentioned functionality. I operated as the GitHub Manager and Scrum Master, helping to coordinate the team and ensure that we were working efficiently.",
        tags: [
          {
            name: "python",
            color: "white-text-gradient",
          },
          {
            name: "django",
            color: "white-text-gradient",
          },
          {
            name: "nodeJS",
            color: "white-text-gradient",
          },
          {
            name: "postgreSQL",
            color: "white-text-gradient",
          },
        ],
        image: karma,
        source_code_link: "https://github.com/SimpsonRoss/karma-coffee",
        live_site_link: "https://karmacoffee-0075707e53e0.herokuapp.com/",
        videoId: "875520231",
  },
  {
        name: "Itinera",
        description:
          "Itinera is a cutting-edge travel itinerary generator, designed for travelers seeking a streamlined, collaborative planning experience. Users input their trip details, including destinations, dates, and budget, and can collaboratively fine-tune their preferences with friends. The platform, powered by a combination of MongoDB, Node.js, Express, and JavaScript, instantly crafts a detailed AI-generated daily schedule. To create the itineraries I used Open AI's API, feeding user data into prompts dynamically, and parsing the return data into a cohesive, comprehensive daily itinerary.",
        tags: [
          {
            name: "javascript",
            color: "white-text-gradient",
          },
          {
            name: "mongoDB",
            color: "white-text-gradient",
          },
          {
            name: "express",
            color: "white-text-gradient",
          },
          {
            name: "nodeJS",
            color: "white-text-gradient",
          },
          {
            name: "bootstrap",
            color: "white-text-gradient",
          },
          {
            name: "mongoose",
            color: "white-text-gradient",
          },
        ],
        image: itinera,
        source_code_link: "https://github.com/SimpsonRoss/itinerary-app",
        live_site_link: "https://itinera-6ae652d21473.herokuapp.com/",
        videoId: "875514790",
  },
  {
    name: "Battleships",
    description:
      "The game is a cosmic reinvention of the classic Battleships, pitching players against an intuitive alien AI. Set in a space-themed backdrop, players employ advanced weaponry like cannons, lasers, and nukes to decimate the extraterrestrial fleet. Crafted with HTML5, CSS3, and JavaScript, this game offers all the nostalgia but with a modern gaming experience. Key features include device responsiveness, dynamic AI evolution stages, and an engaging animated alien mascot. Despite the challenges faced developing the game logic, the end product is fun and challenging.",
    tags: [
      {
        name: "javascript",
        color: "white-text-gradient",
      },
      {
        name: "html",
        color: "white-text-gradient",
      },
      {
        name: "css",
        color: "white-text-gradient",
      },
    ],
    image: battleships,
    source_code_link: "https://github.com/SimpsonRoss/battleships",
    live_site_link: "https://simpsonross.github.io/battleships/",
    videoId: "875500100",
  },
];

export { services, technologies, experiences, projects };