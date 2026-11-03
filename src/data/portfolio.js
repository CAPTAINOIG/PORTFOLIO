// Single source of truth for all portfolio content.
// Edit this file to update text, links, projects and timeline entries.

export const profile = {
  name: "Oluwasegun",
  role: "Full-Stack Software Developer",
  // Rotating words in the hero headline
  focus: ["Front-End", "Back-End", "React JS", "Node JS", "Full Stack"],
  intro:
    "I build fast, accessible web applications end to end — from polished React interfaces to Node.js and Express APIs backed by MongoDB and MySQL.",
  // Add your email to show an email card in the Contact section, e.g. "you@example.com"
  email: "",
  resume: "",
};

export const socials = [
  { name: "GitHub", handle: "CAPTAINOIG", href: "https://github.com/CAPTAINOIG", icon: "github" },
  {
    name: "LinkedIn",
    handle: "Samsudeen Abdullahi",
    href: "https://www.linkedin.com/in/samsudeen-abdullahi-645613274/",
    icon: "linkedin",
  },
  { name: "X / Twitter", handle: "@ABDULLAHISAMSU8", href: "https://twitter.com/ABDULLAHISAMSU8", icon: "x" },
];

export const navLinks = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
];

export const about = {
  statement: "I turn ideas into reliable products that people genuinely enjoy using.",
  paragraphs: [
    "I'm a skilled web developer with experience in JavaScript and expertise in frameworks like React and Express. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems.",
    "I work comfortably across the whole stack — designing responsive interfaces, building and integrating REST APIs, and modelling data in MongoDB and MySQL — so features ship as one coherent piece rather than disconnected parts.",
  ],
  stats: [
    { value: "3+", label: "Years Experience" },
    { value: "20+", label: "Projects Completed" },
  ],
  principles: [
    {
      title: "Clarity over cleverness",
      text: "Readable, well-structured code that teams can maintain and extend with confidence.",
    },
    {
      title: "Performance is a feature",
      text: "Lean bundles, responsive layouts and interfaces that feel instant on any device.",
    },
    {
      title: "Built to scale",
      text: "Reusable components and clean API boundaries that grow with the product.",
    },
  ],
};

// `icon` keys map to react-icons in Skills.jsx
export const skillGroups = [
  {
    title: "Frontend",
    icon: "layout",
    description: "Responsive, accessible interfaces with a focus on detail and motion.",
    items: [
      { name: "React.js", icon: "react" },
      { name: "JavaScript", icon: "js" },
      { name: "HTML5", icon: "html" },
      { name: "CSS3", icon: "css" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "Three.js / R3F", icon: "three" },
      { name: "Responsive Design", icon: "responsive" },
    ],
  },
  {
    title: "Backend",
    icon: "server",
    description: "APIs and server logic that are secure, predictable and easy to consume.",
    items: [
      { name: "Node.js", icon: "node" },
      { name: "Express.js", icon: "express" },
      { name: "REST APIs", icon: "api" },
      { name: "API Integration", icon: "plug" },
    ],
  },
  {
    title: "Databases",
    icon: "database",
    description: "Document and relational data models designed around real access patterns.",
    items: [
      { name: "MongoDB", icon: "mongo" },
      { name: "MySQL", icon: "mysql" },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: "tools",
    description: "Version control and deployment workflows that keep shipping smooth.",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Vite", icon: "vite" },
      { name: "Netlify", icon: "netlify" },
    ],
  },
];

// Add `repo: "https://github.com/..."` to show a Code button,
// and `tech: [...]` to show technology tags on a project card.
export const projects = [
  {
    title: "Chat App",
    category: "Web App",
    image: "/image/chat_app.png",
    live: "https://captain-chat-app.netlify.app/",
    description:
      "An anonymous chat space where users share ideas, ask questions and interact with other users without revealing their identity.",
  },
  {
    title: "Shopping Sphere",
    category: "E-commerce",
    image: "/image/image1.jpg",
    live: "https://shoppingsphere.netlify.app/",
    description:
      "An online storefront for browsing products and buying goods over the internet, built around a straightforward shopping flow.",
  },
  {
    title: "Bright Future Community Network",
    category: "Community Platform",
    image: "/image/bfcn.png",
    imageFit: "contain",
    live: "https://bfcn.netlify.app",
    description:
      "A community-driven platform empowering youth through sustainable development, education, and grassroots leadership in Nigeria.",
  },
  {
    title: "Captain Track",
    category: "Fitness Tracker",
    image: "/image/run1.jpg",
    live: "https://captain-track.netlify.app",
    tech: ["React", "Node.js", "Tailwind CSS"],
    description:
      "A fitness and activity tracking app inspired by platforms like Strava. Track runs and rides, monitor performance and progress, and stay motivated through a clean, responsive interface.",
  },
  {
    title: "Shadow Strike: Last Stand",
    category: "3D Game",
    image: "/image/shadow_strike.png",
    imageFit: "contain",
    live: "https://shadow-strike-gaming.netlify.app",
    tech: ["React", "React Three Fiber", "Three.js"],
    description:
      "A tactical third-person shooter featuring urban combat environments and advanced AI systems, running entirely in the browser.",
  },
  {
    title: "Phine Collection",
    category: "E-commerce",
    image: "/image/tem.png",
    imagePosition: "top",
    live: "https://phine-collection.netlify.app",
    description:
      "A modern fashion store where users can browse, explore and purchase a wide range of clothing and fashion items through a simple, user-friendly interface.",
  },
];

// Professional roles. Add entries in the same shape as education below:
// { title, org, period, description, logo? }
export const experience = [
  {
    title: "Full-Stack Developer",
    org: "Independent Projects",
    period: "Ongoing",
    description:
      "Designing, building and deploying the applications featured in this portfolio — from React front-ends to Node.js / Express back-ends.",
  },
];

export const education = [
  {
    title: "Full Stack Development",
    org: "SQI College Of ICT",
    period: "Jan 2023 — Sep 2023",
    logo: "/sqi.png",
  },
  {
    title: "B.Sc. Public Administration",
    org: "University of Ilorin",
    period: "2015 — 2019",
    logo: "/image/ilorin.png",
  },
  {
    title: "National Diploma, Public Administration",
    org: "Kwara State Polytechnic",
    period: "2012 — 2015",
    logo: "/image/poly.png",
  },
];
