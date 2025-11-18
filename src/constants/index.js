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
  fairstart,

  fastapi,
  insomnia,
  postgresql,
  langchain,
  langgraph,
  langsmith,
  pydanticai,
  raspberryPi,
  ubuntu,
  vercel,

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
  // 🧠 语言 & 类型系统
  { name: "Typescript", icon: typescript },

  // 🎨 前端基础 & UI 样式
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "Bootstrap", icon: bootstrap },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "jQuery", icon: jQuery },

  // ⚛️ 前端框架 & 状态管理 & 3D
  { name: "Next.js", icon: nextjs },
  { name: "Redux", icon: redux },
  { name: "Zustand", icon: zustand },
  { name: "Three.js", icon: threejs },

  // 🧱 后端 & API 框架
  { name: "Flask", icon: flask },
  { name: "Django", icon: django },
  { name: "FastAPI", icon: fastapi },

  // 🗄️ 数据库 & ORM
  { name: "Prisma", icon: prisma },
  { name: "MongoDB", icon: mongodb },
  { name: "PostgreSQL", icon: postgresql },

  // 🤖 AI / LLM 工作流 & 工具
  { name: "LangChain", icon: langchain },
  { name: "LangGraph", icon: langgraph },
  { name: "LangSmith", icon: langsmith },
  { name: "PydanticAI", icon: pydanticai },

  // ☁️ 云服务 & DevOps & 部署
  { name: "AWS", icon: aws },
  { name: "Azure", icon: azure },
  { name: "Kubernetes", icon: kubernetes },
  { name: "Vercel", icon: vercel },
  { name: "Raspberry Pi", icon: raspberryPi },
  { name: "Ubuntu", icon: ubuntu },

  // 🧪 开发者工具 & 调试
  { name: "Postman", icon: postman },
  { name: "Insomnia", icon: insomnia },
  { name: "Jupyter Notebook", icon: jupyter },
  { name: "Jira", icon: jira },

  // 🎨 设计 & 多媒体
  { name: "Figma", icon: figma },
  { name: "Photoshop", icon: photoshop },
  { name: "Premiere", icon: premiere },

  // 🛒 CMS & 电商建站
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
      "Used React, TypeScript, Tailwind CSS to rebuild CCTV web VMS, improved load speed ~45% and reduced rendering issues for enterprise users.",
      "Used React, JavaScript, responsive UI patterns to redesign configuration flows, reduced camera setup time ~40%.",
      "Used JWT auth and role-based access control to secure VMS portal, eliminated unauthorized access and passed penetration testing.",
      "Used Python, Django, MySQL to design high-traffic APIs for device and user management, cut peak-load error rate from ~3% to <0.5%.",
      "Used MySQL sharding and partitioning to scale data from millions to tens of billions of rows, kept P95 query latency <50 ms.",
      "Used Bloom filter and 28 GB Redis bitmap on 10B-record blacklist to deliver <5 ms screening and cut false positives ~99%.",
      "Used Redis caching and optimized indexing to speed frequent queries, reduced database load ~35% at peak.",
      "Used Java to enhance VMS backend for multi-stream recording, motion tagging, and alerts, enabling operators to monitor ~30% more cameras.",
      "Used message queues to build event-driven pipelines for camera alerts and logs, achieved 99.9% on-time delivery.",
      "Used circuit breakers and retry policies for external integrations, cut downtime ~40% and improved SLA stability.",
      "Used Docker and Docker Compose to containerize frontend, backend, and workers, reduced deployment time from hours to minutes.",
      "Used Docker-based CI/CD pipelines to unify test and prod environments, reduced environment-related bugs ~70%.",
      "Used structured logging and metrics for Django, Java, Redis, MySQL, cut MTTR ~50%.",
      "Used React, Tailwind, REST APIs to build monitoring dashboards for device status and alerts, reduced manual log checks ~80%.",
      "Used SEO improvements, metadata optimization, and performance tuning to increase organic traffic ~60% and inbound trials ~25%."
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
    name: "FairStart - AI Resume",
    description:
      "AI-driven resume optimization platform that transforms raw experience into polished, ATS-ready resumes with real-time feedback and export-ready outputs.",
    tags: [
      { name: "React", color: "text-blue-500" },
      { name: "Python", color: "text-green-500" },
      { name: "FastAPI", color: "text-pink-500" },
      { name: "AWS", color: "text-orange-500" },
      { name: "LangChain", color: "text-purple-500" },
    ],
    image: fairstart,
    source_code_link: "https://ai-resume-one-alpha.vercel.app/",
  },
  {
    name: "Online Sports Betting Platform",
    description:
      "Migrated a large-scale Blazor system to React, improving performance, responsiveness, and maintainability. Delivered an optimized multi-device betting experience with streamlined UX and faster load times.",
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
      "Corporate website for Bolide Technology Group, presenting products and security solutions with a clean, modern interface and optimized navigation.",
    tags: [
      { name: "React", color: "text-blue-500" },
      { name: "TypeScript", color: "text-green-500" },
      { name: "Shopify", color: "text-orange-500" },
      { name: "SaaS", color: "text-pink-500" },
    ],
    image: bolideweb,
    source_code_link: "https://bolideco.com/",
  },
  {
    name: "CCTV Website",
    description:
      "E-commerce platform for a CCTV brand, featuring product listings, technical specs, customer support, and a streamlined shopping flow.",
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
      "Official website for a leading U.S. antenna brand serving millions of households. Features product showcases, installation guides, tutorial videos, and direct links to Amazon, Walmart, and eBay for seamless purchasing.",
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
      "Vehicle buying-and-selling platform integrated with Manheim data for real-time valuations. Users can obtain instant pricing, browse dealership inventory, and schedule appointments directly online.",
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
      "Full-stack task management application with authentication, real-time updates, and cloud deployment. Built to improve productivity for individuals and teams.",
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
      "Desktop pizza ordering system built with Python and Tkinter, featuring customizable orders, automated cost calculation, receipt generation, and animated menu elements.",
    tags: [
      { name: "Python", color: "text-yellow-500" },
      { name: "Tkinter", color: "text-emerald-500" },
      { name: "OOP", color: "text-pink-500" },
    ],
    image: pizzaorder,
    source_code_link: "https://github.com/",
  },
];



export { services, technologies, technologiesOther, experiences, testimonials, projects };