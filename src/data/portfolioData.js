// Core portfolio data for Sachin Yaduwanshi
import talentiloImg from '../assets/project-talentilo.jpg';
import aurasoftImg from '../assets/project-aurasoft.jpg';
import futurebuiltImg from '../assets/project-futurebuilt.jpg';


export const personalInfo = {
  name: "Sachin Yaduwanshi",
  title: "Frontend Developer & React.js Specialist",
  roles: [
    "Frontend Developer",
    "React.js Developer",
    "UI/UX Developer"
  ],
  description: "I build scalable React.js applications, responsive user interfaces, and modern admin dashboards with a strong focus on performance, usability, and exceptional user experience.",
  resumeUrl: "https://docs.google.com/document/d/1MVkaPxj_oHmFCwn1yB1-XPchLrVKctBn27TK_9H7WVw/edit?usp=sharing",
  email: "sachinyaduwanshisy123@gmail.com",
  phone: "+91 8889291138,8305912893", // Placeholder but look-alike number, user can adjust
  location: "Indore, Madhya Pradesh, India",
  socials: {
    github: "https://github.com/sachinyadav12345",
    linkedin: "http://www.linkedin.com/in/sachin-yaduwanshi",
  }
};

export const stats = [
  { value: 1, suffix: "+", label: "Years Experience" },
  { value: 3, suffix: "+", label: "Projects Completed" },
  { value: 10, suffix: "+", label: "Technologies Mastered" },
  { value: 2, suffix: "", label: "Companies Worked" }
];

export const aboutDetails = {
  text: "I am a passionate and dedicated Frontend Developer specializing in React.js and modern web technologies. I thrive on translating complex requirements into elegant, high-performance, and responsive user experiences. My experience ranges from crafting dynamic admin portals to creating interactive academy platforms.",
  highlights: [
    "1+ Years Professional Experience",
    "React.js Specialist & React Router Integration",
    "UI/UX Focused Development with Pixel-Perfect Designs",
    "Scalable Admin Dashboard & CRUD System Development",
    "Responsive Web Design via Tailwind CSS & Bootstrap",
    "Seamless REST API & Backend Integration",
    "State Management using Redux Toolkit",
    "Modern Version Control (Git/GitHub)",
    "AI-assisted Development & Coding Excellence"
  ]
};

export const skillCategories = [
  {
    title: "Frontend Development",
    icon: "Layout",
    skills: ["React.js", "JavaScript", "HTML5", "CSS3"]
  },
  {
    title: "CSS Frameworks",
    icon: "Sliders",
    skills: ["Tailwind CSS", "Bootstrap", "Material UI", "Reactstrap"]
  },
  {
    title: "State Management",
    icon: "Cpu",
    skills: ["Redux Toolkit", "Redux Core"]
  },
  {
    title: "Backend Integration",
    icon: "Globe",
    skills: ["REST APIs", "JSON parsing", "Axios", "Fetch API"]
  },
  {
    title: "Developer Tools",
    icon: "Terminal",
    skills: ["Git", "GitHub", "VS Code", "Cursor AI", "Antigravity AI", "ChatGPT"]
  }
];

export const projects = [
  {
    id: "talentilo",
    title: "Talentilo Recruitment Platform",
    duration: "Aug 2024 – Jul 2025",
    status: "Completed",
    category: "Dashboard",
    image: talentiloImg,
    techStack: ["React.js", "Redux Toolkit", "REST APIs", "Bootstrap"],
    url: "https://talentilo.ai/",
    github: "#", // Contact details/hidden
    description: "A comprehensive recruitment dashboard platform designed to streamline talent sourcing, screening, and candidate management workflows for enterprise hiring teams.",
    responsibilities: [
      "Developed scalable admin dashboards and user profile management screens.",
      "Built highly reusable UI components including interactive data grids, cards, and modal dialogs.",
      "Integrated complex REST APIs and managed client-side state efficiently with Redux Toolkit.",
      "Implemented CRUD operations for candidates, jobs, and recruiter profiles.",
      "Engineered advanced searching, sorting, pagination, and multi-tier filter functionalities.",
      "Collaborated closely with backend developers to refine API contracts and optimize query performance."
    ]
  },
  {
    id: "aurasoft-academy",
    title: "Aurasoft Academy",
    duration: "Jul 2025 – Oct 2025",
    status: "Completed",
    category: "Web",
    image: aurasoftImg,
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5.2"],
    url: "https://academy.aurasoftdigitech.com/",
    github: "#",
    description: "An elegant educational portal designed to showcase courses, manage academy listings, and offer students an interactive visual gateway to enrollment.",
    responsibilities: [
      "Developed an extremely responsive website from wireframes to final code.",
      "Built reusable sections and landing page structures using modern Bootstrap classes.",
      "Optimized layout responsiveness across mobile, tablet, and wide desktop configurations.",
      "Assured cross-browser compatibility and optimized loading times for rich media.",
      "Translated complex UI/UX designs into pixel-perfect CSS styles and interactive JS elements."
    ]
  },
  {
    id: "futurebuilt-academy",
    title: "FutureBuilt Academy Platform",
    duration: "Ongoing",
    status: "Ongoing",
    category: "Dashboard",
    image: futurebuiltImg,
    techStack: ["React.js", "Tailwind CSS", "Redux Toolkit", "REST APIs"],
    url: "#", // Ongoing development
    github: "#",
    description: "An advanced, modern educational platform featuring course management panels, interactive lecture players, and administrator controls.",
    responsibilities: [
      "Developed and architected the primary Admin Panel for course management.",
      "Designed layouts for Course uploads, categorization, and outline structures.",
      "Implemented complex search mechanisms and multi-faceted categories filters.",
      "Created complete CRUD capabilities for courses, lectures, and enrollment management.",
      "Optimized state operations using Redux Toolkit, providing robust REST API interaction wrappers.",
      "Authored a reusable library of form elements, table paginators, and status indicators."
    ]
  }
];

export const experienceTimeline = [
  {
    company: "Aurasoft Digitech Pvt. Ltd.",
    role: "Frontend Developer | UI/UX Developer",
    duration: "July 2024 – Present",
    description: "Designing and developing production React.js dashboards, modular frontend structures, and consumer-facing responsive web assets. Spearheading transition to component-driven design systems."
  },
  {
    company: "Zeeweesoft",
    role: "Frontend Developer Intern",
    duration: "Jan 2024 – Jun 2024",
    description: "Assisted in building responsive layouts, upgrading legacy systems to modern React, resolving CSS cross-browser bugs, and integrating REST API endpoints."
  },
  {
    company: "Gowebtech Solutions",
    role: "Full Stack Developer Trainee",
    duration: "Jun 2022 – Jan 2024",
    description: "Received comprehensive training on frontend technologies (HTML, CSS, JS, Bootstrap) and fundamental backend practices. Built several school/ecommerce demo projects."
  }
];

export const whyHireMeCards = [
  {
    title: "React.js Expertise",
    description: "Advanced understanding of virtual DOM, hooks, state, React Router, and lifecycle optimizations."
  },
  {
    title: "Responsive UI",
    description: "Expert application of mobile-first grids, flexible layouts, and media queries to look stunning on all screens."
  },
  {
    title: "REST APIs Integration",
    description: "Clean data fetching, async handling, optimistic UI updates, and robust error management."
  },
  {
    title: "Redux Toolkit State",
    description: "Efficient state architectures using slices, thunks, selectors, and state persistence rules."
  },
  {
    title: "Performance Optimization",
    description: "Asset lazy loading, bundle size audits, component memoization, and DOM paint reduction."
  },
  {
    title: "Reusable Components",
    description: "Design-system focus. Building DRY codebases with highly configurable and accessible components."
  },
  {
    title: "Problem Solving",
    description: "A logical mindset dedicated to troubleshooting performance bugs and refactoring technical debt."
  },
  {
    title: "Team Collaboration",
    description: "Clear communication, Git workflows, PR reviews, and agile sprints alignment."
  },
  {
    title: "UI/UX Development",
    description: "Bridge the gap between style guides and functional mockups. An eye for animations, whitespace, and accessibility."
  },
  {
    title: "Clean Code",
    description: "Self-documenting code, strict ESLint guidelines, semantic HTML structures, and consistent spacing."
  }
];
