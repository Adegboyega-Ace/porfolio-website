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
    carrent,
    jobit,
    tripguide,
    threejs,
    cmg,
    bssm,
    bincom,
    nibbble,
    mumag,
    cmgenergy,
    link,
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
      title: "Web Developer",
      company_name: "CMG Energy group",
      icon: cmg,
      iconBg: "#E6DEDD",
      date: "May 2023 - Present",
      points: [
        "Developed websites using HTML, CSS, and JavaScript to create visually appealing, mobile-friendly and user-friendly interfaces.",
        "Utilized WordPress to build and customize websites, ensuring seamless content management and easy maintenance.",
        "Created e-commerce websites, implementing secure payment gateways, shopping carts, and inventory management systems.",
        "Collaborated with teams physically and online, using a full range of Google Suite tools to communicate and share data amongst ourselves.",
      ],
    },    
    {
      title: "Mobile App Developer (Trainee)",
      company_name: "Bincom Tech",
      icon: bincom,
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
      icon: bssm,
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
      name: "Mumag",
      description:
        "E-commerce products sub-division of CMG Energy group. Implementing secure payment gateways, shopping carts, and inventory management systems.",
      tags: [
        {
          name: "e-commerce",
          color: "blue-text-gradient",
        },
        {
          name: "WordPress",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: mumag,
      source_code_link: "https://mumag.cmgpgecngfuelequipmenttrade.com.ng",
    },
    {
      name: "nibbble",
      description:
        "A technology focus blog that serves to break down complex tech concepts into easily understandable concepts for readers. Using Content Management System technologies. ",
      tags: [
        {
          name: "CMS",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "SEO",
          color: "pink-text-gradient",
        },
      ],
      image: nibbble,
      source_code_link: "https://nibbble.blog/",
    },
    {
      name: "CMG Energy",
      description:
        "A simple main company website with CMS functionality. Built using modern web technologies such as HTML5, CSS3, and JavaScript.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: cmgenergy,
      source_code_link: "",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  