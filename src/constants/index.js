import {
  backend,
  creator,
  mobile,
  web,
  github,

  carrent,
  jobit,
  tripguide,
  ucarlaweb,
  bolideweb,
  fivestarantennaweb,
  fivestarcctvweb,
  taskmanager,
  pizzaorder,
  boombet,

  aws,
  azure,
  bootstrap,
  css,
  django,
  docker,
  figma,
  flask,
  git,
  html,
  java,
  javascript,
  jira,
  jQuery,
  jupyter,
  kubernetes,
  mongodb,
  nextjs,
  nodejs,
  photoshop,
  postman,
  premiere,
  prisma,
  python,
  react,

  redux,
  shopifyTech, // Tool
  tailwind,
  threejs,
  typescript,
  wix,
  wordpress,
  zustand,
  ucarla,
  bolide,

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
    title: "Fontend Development",
    icon: web,
  },
  {
    title: "Backend Development",
    icon: mobile,
  },
  {
    title: "Machine Learning",
    icon: backend,
  },
  {
    title: "Data Science",
    icon: creator,
  },
];

const technologies = [

  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React",
    icon: react,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "Docker",
    icon: docker,
  },

];

const technologiesOther = [
  // 前端基础
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "Bootstrap", icon: bootstrap },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "jQuery", icon: jQuery },

  // 语言 & 补充
  { name: "Typescript", icon: typescript },

  // 前端框架/状态管理
  { name: "Next.js", icon: nextjs },
  { name: "Redux", icon: redux },
  { name: "Zustand", icon: zustand },
  { name: "Three.js", icon: threejs },

  // 后端 & 全栈框架
  { name: "Flask", icon: flask },
  { name: "Django", icon: django },
  { name: "Prisma", icon: prisma },

  // 数据库
  { name: "MongoDB", icon: mongodb },

  // DevOps & 云服务
  { name: "AWS", icon: aws },
  { name: "Azure", icon: azure },
  { name: "Kubernetes", icon: kubernetes },
  { name: "Postman", icon: postman },
  { name: "Jira", icon: jira },
  { name: "Jupyter Notebook", icon: jupyter },

  // 设计 & 原型
  { name: "Figma", icon: figma },
  { name: "Photoshop", icon: photoshop },
  { name: "Premiere", icon: premiere },

  // CMS & 电商建站
  { name: "WordPress", icon: wordpress },
  { name: "Wix", icon: wix },
  { name: "Shopify", icon: shopifyTech },

];


const experiences = [
  {
    title: "Developer",
    company_name: "UCAR LA Auto Group",
    icon: ucarla,
    iconBg: "#383E56",
    date: "Sep 2021 – Jul 2023",
    points: [
      "Developed and maintained a responsive Flask-based vehicle trading platform (HTML/CSS/JavaScript) with on-page SEO (meta tags, semantic markup, sitemap), increasing organic traffic by ~20% in six months.",
      "Designed MySQL schema and built an auction search module, enabling users to browse live used-car listings and generating ~50 qualified leads per month.",
      "Integrated CDN and optimized front-end code to reduce peak-time page load by ~30%, improving user engagement and conversion rates."
    ],
  },

  {
    title: "Full-Stack Developer",
    company_name: "Bolide Technology Group",
    icon: bolide,
    iconBg: "#E6DEDD",
    date: "Aug 2023 – Present",
    points: [
      "Built JWT-authenticated Node.js/Express APIs and integrated RTSP streaming; assisted AWS deployment to support ~50,000 users with 99% uptime and ~700 ms latency.",
      "Implemented React + Tailwind CSS UI with code-splitting and lazy loading, reducing page load times by ~20% and increasing positive user feedback by 15%.",
      "Developed a real-time Task Manager (React/Node.js) with KPI dashboards, boosting team efficiency by ~15%; redesigned eBay, Amazon, and Walmart listings using Figma prototypes and SEO best practices, increasing conversion rates by ~25%."
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "The website Trevor built for our restaurant allowed customers to check the menu via QR code during the pandemic. It's been in use ever since and has really helped us cut down on costs.",
    name: "Emma",
    designation: "Business Owner",
    company: "Darumaya Sushi",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Setting up the online booking system completely changed how we manage appointments at our tint shop. Daily scheduling has never been this easy.",
    name: "Chris",
    designation: "Manager",
    company: "X Tint",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "With the new website and the improvements to our Amazon listings, our cross-border e-commerce business has seen noticeable growth. Trevor’s work made a big difference.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "Hong Yuan Group",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];


const projects = [
  {
    name: "Online Sports Betting Platform",
    description:
      "Migrated a legacy Blazor application to React, significantly improving performance, load times, and maintainability. Focused on optimizing the user experience for betting workflows across multiple devices, ensuring smooth and intuitive interactions for users.",
    tags: [
      { name: "React", color: "text-blue-500" },
      { name: "TypeScript", color: "text-green-500" },
      { name: "Bootstrap", color: "text-pink-500" },
      { name: "Redux", color: "text-orange-500" },
      { name: "RTK Query", color: "text-purple-500" },
    ],
    image: boombet,
    source_code_link: "https://www.boombet.com.au/",
  },
  {
    name: "Bolide Website",
    description:
      "Official corporate website for Bolide Technology Group, showcasing company services, products, and solutions while providing an intuitive user experience and seamless navigation.",
    tags: [
      { name: "React", color: "text-blue-500" },
      { name: "TypeScript", color: "text-green-500" },
      { name: "Redux", color: "text-orange-500" },
      { name: "SaaS", color: "text-pink-500" },
    ],
    image: bolideweb,
    source_code_link: "https://bolideco.com/",
  },
  {
    name: "CCTV Website",
    description:
      "A professional e-commerce website for a CCTV company, allowing users to browse and purchase security products online, view detailed specifications, and access customer support with a smooth and intuitive shopping experience.",
    tags: [
      { name: "HTML", color: "text-blue-500" },
      { name: "CSS", color: "text-green-500" },
      { name: "JavaScript", color: "text-pink-500" },
    ],
    image: fivestarcctvweb,
    source_code_link: "https://fivestarcctvs.com/",
  },
  {
    name: "Antenna Website",
    description:
      "An official website for a leading US TV antenna brand, serving millions of households nationwide with annual sales in the tens of millions USD. The website showcases product features, installation videos, and guides, while directing users to purchase through Amazon, Walmart, and eBay for convenient online shopping.",
    tags: [
      { name: "WordPress", color: "text-blue-500" },
      { name: "JavaScript", color: "text-green-500" },
      { name: "WooCommerce", color: "text-pink-500" },
    ],
    image: fivestarantennaweb,
    source_code_link: "https://fivestarantenna.com/",
  },
  {
    name: "UCAR LA Website",
    description:
      "Official website for UCAR LA Auto Group, enabling users to sell their cars online with instant valuations powered by Manheim data, offering more competitive pricing than CarMax. The site also displays dealership inventory, allowing users to browse vehicles and schedule appointments directly for purchase or test drives.",
    tags: [
      { name: "JavaScript", color: "text-blue-500" },
      { name: "Flask", color: "text-green-500" },
      { name: "MySQL", color: "text-pink-500" },
      { name: "API", color: "text-orange-500" },
      { name: "jQuery", color: "text-purple-500" },
    ],
    image: ucarlaweb,
    source_code_link: "https://ucarlaautogroup.com/",
  },
  {
    name: "Task Manager",
    description:
      "A web-based task management application that allows users to create, update, and track tasks efficiently, helping individuals and teams stay organized and improve productivity.",
    tags: [
      { name: "React", color: "text-blue-500" },
      { name: "Express", color: "text-green-500" },
      { name: "MongoDB", color: "text-pink-500" },
      { name: "JWT", color: "text-orange-500" },
      { name: "Tailwind CSS", color: "text-purple-500" },
      { name: "AWS Amplify", color: "text-yellow-500" },
      { name: "AWS EC2", color: "text-emerald-500" },
    ],
    image: taskmanager,
    source_code_link: "https://nexa-tasks.vercel.app/",
  },
  {
    name: "Pizza Order Application",
    description:
      "Interactive pizza ordering system built with Python and Tkinter, enabling users to select pizza size, crust, toppings, calculate total cost with tax, and generate receipts with animated menu visuals.",
    tags: [
      { name: "Python", color: "text-yellow-500" },
      { name: "Tkinter", color: "text-emerald-500" },
      { name: "CSS", color: "text-pink-500" },
    ],
    image: pizzaorder,
    source_code_link: "https://github.com/",
  },
];


export { services, technologies, technologiesOther, experiences, testimonials, projects };