// =====================================================================
// All site content lives here. Edit this file to update the portfolio.
// =====================================================================

export const profile = {
  name: "Javid Rahman",
  firstName: "Javid",
  lastName: "Rahman",
  role: "Front End Engineer",
  // Typed/rotating titles shown in the hero section
  titles: [
    "JavaScript (ES6+) Expert",
    "React.js Specialist",
    "Next.js Enthusiast",
    "Tailwind CSS",
  ],
  tagline:
    "Passionate about building scalable web applications with modern technologies. Turning complex problems into elegant, user-friendly solutions.",
  location: "Karachi Gulshan Iqbal",
  email: "graphicjr409@gmail.com",
  phone: "+92 3189312180",
  resumeUrl:
    "https://drive.google.com/file/d/1wWtWdiwvglT142HltTGX60_pZF53PhUc/view?usp=sharing",
  // Use any image URL or a local path in /public
  avatar: "/me.png",
  socials: [
    { name: "GitHub", icon: "github", url: "https://github.com/javid690" },
    {
      name: "LinkedIn",
      icon: "linkedin",
      url: "linkedin.com/in/javid-rahman-dev190",
    },
    { name: "Email", icon: "mail", url: "graphicjr409@gmail.com" },
  ],
};
export const about = {
  heading: "About Me",
  intro:
    "I'm a Frontend Engineer with a deep passion for building responsive, clean, and high-performance user interfaces. With hands-on experience in modern frontend technologies, I specialize in transforming complex designs into intuitive, maintainable code.",
  body: [
    "My journey in frontend development has equipped me with expertise in modern JavaScript frameworks and a strong foundation in UI/UX principles. I thrive in collaborative environments where I can learn from experienced developers, contribute meaningfully, and deliver interfaces that make a real impact.",
    "When I'm not coding, you'll find me exploring new technologies, working on personal projects, and continuously sharpening my craft to grow as a developer.",
  ],
  stats: [
    { label: "Years Experience", value: "1+" },
    { label: "Projects Completed", value: "7+" },
    { label: "GitHub Repositories", value: "10+" },
    { label: "Technologies", value: "10+" },
  ],
};
export const services = [
  {
    icon: "code",
    title: "Frontend Development",
    desc: "Building fast, responsive, and accessible web interfaces using React, Next.js and modern tooling.",
  },
  {
    icon: "puzzle",
    title: "Custom ERP Solutions",
    desc: "Building custom widgets and integrations for Odoo and WordPress to extend functionality as per business needs.",
  },
  {
    icon: "layout",
    title: "UI Implementation",
    desc: "Converting designs into pixel-perfect, functional user interfaces with clean and maintainable code.",
  },
  {
    icon: "atom",
    title: "React Developer",
    desc: "Building dynamic, component-based web applications with React.js and modern JavaScript (ES6+).",
  },
  {
    icon: "wind",
    title: "Tailwind CSS",
    desc: "Designing modern, responsive UI's quickly using utility-first Tailwind CSS for clean and consistent styling.",
  },
  {
    icon: "smartphone",
    title: "Responsive Design",
    desc: "Pixel-perfect, mobile-first interfaces that look and feel great on every device.",
  },
  {
    icon: "gauge",
    title: "Performance",
    desc: "Optimizing load times, Core Web Vitals and runtime performance for the best user experience.",
  },
];

export const skills = [
  { name: "React JS & State Management", level: 90 },
  { name: "JavaScript (ES6+)", level: 88 },
  { name: "REST API Integration", level: 85 },
  { name: "Git, GitHub (Version Control)", level: 85 },
  { name: "Redux Toolkit, Context API", level: 82 },
  { name: "HTML5, CSS3, Tailwind CSS, Bootstrap", level: 90 },
  { name: "Next.js (Foundational Knowledge)", level: 60 },
  { name: "Odoo (Custom Code & ERP Solutions)", level: 70 },
];

export const experience = [
  {
    role: "Frontend Developer",
    company: "TABSAP",
    period: "November 1, 2025 — March 15, 2026",
    location: "Buner, KPK, Pakistan",
    points: [
      "Engineered and maintained production-grade React.js applications with a strong focus on component reusability, modular architecture, and long-term maintainability.",
      "Implemented complex user flows using React Router, nested components, and optimized state management with Redux Toolkit.",
      "Integrated multiple RESTful APIs, handling authentication, dynamic data rendering, error handling, and UI state synchronization.",
      "Built scalable UI components and shared libraries to standardize design systems and accelerate development across features.",
      "Optimized application performance through efficient rendering, memoization, and code-splitting techniques to improve load time and responsiveness.",
    ],
  },
  {
    role: "Frontend Developer (Remote)",
    company: "Contract / Part-time (Collaborating with Senior Developer)",
    period: "December 2025 — Present",
    location: "Remote",
    points: [
      "Translate Figma designs into pixel-perfect, responsive React interfaces with strict attention to detail and cross-device compatibility.",
      "Build modular, reusable, and accessible components following best practices and modern UI/UX standards.",
      "Implement advanced state management patterns using Redux Toolkit to handle complex application states and asynchronous workflows.",
      "Mobile-First Optimization: Focused on mobile-first responsiveness and cross-browser testing to deliver seamless rendering across all mobile, tablet, and desktop screens.",
      "Actively exploring Next.js for routing and basic data fetching to build modern React-based applications.",
    ],
  },
];
export const education = [
  {
    degree: "FSc (Computer Science)",
    school: "Govt Degree College Jowar, Buner",
    period: "2025",
    desc: "Completed intermediate education with a focus on Mathematics and Physics.",
  },
  {
    degree: "Diploma in Information Technology (DIT)",
    school: "World Vision College",
    period: "2025 — Ongoing",
    desc: "Currently pursuing DIT program. Completed 1st semester, 2nd semester in progress.",
  },
  {
    degree: "Frontend Engineering Certificate",
    school: "TABSAP",
    period: "2025",
    desc: "Completed hands-on training in React.js, modern JavaScript, and frontend development best practices.",
  },
];
export const projectCategories = [
  "All",
  "React",
  "JavaScript",
  "MERN Stack",
  "Odoo",
  "WordPress",
];

export const projects = [
  {
    title: "Wasera.pk",
    subtitle: "Wasera.pk — E-Commerce WordPress Website",
    category: "WordPress",
    badge: "WordPress",
    tags: ["WordPress", "WooCommerce", "Elementor"],
    url: "https://odheyati.com/",
  },

  {
    title: "Odheyati",
    subtitle: "E-Commerce Qurbani Platform",
    category: "React",
    badge: "MERN Stack",
    tags: ["Node.js", "React.js", "Express.js", "MongoDB"],
    url: "https://odheyati.com/",
  },
  {
    title: "Propertians",
    subtitle: "Real Estate Portal (UAE & Pakistan)",
    category: "React",
    badge: "Next.js",
    tags: ["Next.js", "React.js", "REST API"],
    url: "https://www.propertians.com/ae/en",
  },
  {
    title: "Tabsap",
    subtitle: "Enterprise Brand Website",
    category: "WordPress",
    badge: "WordPress",
    tags: ["WordPress", "Elementor", "JavaScript"],
    url: "https://tabsap.com/",
  },
  {
    title: "EMS Dashboard",
    subtitle: "Enterprise Management System",
    category: "React",
    badge: "React",
    tags: ["React.js", "Redux Toolkit", "Tailwind CSS"],
    url: "http://ems.tabsap.com/",
  },
  {
    title: "MERN Store",
    subtitle: "Full-Stack E-Commerce Platform",
    category: "MERN Stack",
    badge: "MERN Stack",
    tags: ["Node.js", "React.js", "Express.js", "MongoDB"],
    url: "https://github.com/javid690/mern-ecommerce-platform",
  },
  {
    title: "Eventora",
    subtitle: "Event Booking Platform",
    category: "MERN Stack",
    badge: "MERN Stack",
    tags: ["Node.js", "React.js", "Express.js", "MongoDB"],
    url: "https://github.com/javid690/event-booking",
  },
  {
    title: "Admin Dashboard",
    subtitle: "Analytics & Data Management Panel",
    category: "React",
    badge: "React",
    tags: ["React", "Tailwind", "Chart.js"],
    url: "https://product-dahboard.netlify.app/",
  },
  {
    title: "UOMO Store",
    subtitle: "Modern E-Commerce Website",
    category: "React",
    badge: "React",
    tags: ["React", "CSS", "Tailwind"],
    url: "https://uomoecommerce.netlify.app/",
  },
  {
    title: "JS Storefront",
    subtitle: "Vanilla JavaScript E-Commerce Site",
    category: "JavaScript",
    badge: "JavaScript",
    tags: ["HTML", "CSS", "JavaScript"],
    url: "https://e-commerce-project-ten-olive.vercel.app/",
  },
  {
    title: "Odoo ERP Store",
    subtitle: "Custom E-Commerce on Odoo",
    category: "Odoo",
    badge: "Odoo",
    tags: ["Odoo", "HTML", "JavaScript"],
    url: "https://erp.gumovastrecha.cz/",
  },
];

export const posts = [
  {
    title: "Building Scalable APIs with React Js",
    excerpt:
      "A practical guide to structuring Laravel applications that grow gracefully with your business.",
    date: "May 12, 2026",
    readTime: "6 min read",
    tag: "Front End",
  },
  {
    title: "React Performance Patterns in 2026",
    excerpt:
      "Memoization, suspense and the rendering tricks that keep large React apps snappy.",
    date: "Apr 28, 2026",
    readTime: "8 min read",
    tag: "React",
  },
  {
    title: "Designing with Tailwind at Scale",
    excerpt:
      "How to keep a Tailwind codebase maintainable across a growing design system.",
    date: "Apr 03, 2026",
    readTime: "5 min read",
    tag: "CSS",
  },
];

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "#", disabled: true },
  { name: "Contact", path: "/contact" },
];
