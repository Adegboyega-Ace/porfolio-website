/* cSpell:disable */

import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Web Designer",
      icon: mobile,
    },
    {
      title: "UI/UX Designer",
      icon: backend,
    },
    {
      title: "Content Writer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
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
      title: "Mobile App Developer (Trainee)",
      company_name: "Bincom Tech",
      icon: shopify,
      iconBg: "#383E56",
      date: "April 2023",
      points: [
        "Develop cross-platform mobile apps using the Cordova framework and its plugins to access native device features and functions.",
        "Using plugins and APIs to integrate app functionality with WordPress.",
        "Utilizing Firebase as a backend for mobile and web apps using its cloud Functions to implement serverless backend logic.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Logistics Officer",
      company_name: "BSSM NG",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Nov 2021 - Oct 2022",
      points: [
        "Verified and processed orders, used Excel's advanced functions to analyze and summarize related data.",
        "Improved order processing and tracking with real-time reporting using Google Sheets/Excel for delivery status insights..",
        "Collaborated with teams using Zoho and ClickUp to ensure timely order fulfillment.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Ace proved me wrong.",
      name: "Jane Doe",
      designation: "CFO",
      company: "bruudy corp",
      image: "https://randomuser.me/api/portraits/women/40.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Ace does.",
      name: "Jin Doe",
      designation: "COO",
      company: "bebop co",
      image: "https://randomuser.me/api/portraits/men/26.jpg",
    },
    {
      testimonial:
        "After Ace optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Janet Doe",
      designation: "CTO",
      company: "Nose dive",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
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
        {
          name: "threejs",
          color: "text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-purple-50",
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
  