import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaDatabase,
  FaLock,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMongoose,
  SiRedux,
  SiTailwindcss,
  SiDaisyui,
  SiShadcnui,
  SiJsonwebtokens,
  SiFirebase,
  SiPassport,
  SiRedis,
  SiGmail,
  SiPostman,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const skills = [
  {
    category: "Frontend",
    items: [
      {
        name: "HTML",
        icon: FaHtml5,
        description:
          "The foundation of web development for structuring web pages.",
      },
      {
        name: "CSS",
        icon: FaCss3Alt,
        description: "Styling language used to design and layout web pages.",
      },
      {
        name: "JavaScript",
        icon: FaJs,
        description:
          "The core scripting language for dynamic and interactive web apps.",
      },
      {
        name: "React",
        icon: FaReact,
        description: "A popular library for building dynamic user interfaces.",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        description:
          "A strongly typed superset of JavaScript that improves scalability.",
      },
      {
        name: "Redux",
        icon: SiRedux,
        description: "Predictable state management for React applications.",
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        description:
          "JavaScript runtime environment for building fast server-side applications.",
      },
      {
        name: "Express.js",
        icon: SiExpress,
        description: "Minimal and flexible Node.js web application framework.",
      },
      {
        name: "REST API",
        icon: FaDatabase,
        description:
          "Standard architecture for building scalable backend APIs.",
      },
    ],
  },
  {
    category: "Database & Caching",
    items: [
      {
        name: "MongoDB",
        icon: SiMongodb,
        description:
          "NoSQL database designed for high performance and scalability.",
      },
      {
        name: "Mongoose",
        icon: SiMongoose,
        description: "MongoDB object modeling tool for Node.js.",
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        description: "Advanced open-source relational database system.",
      },
      {
        name: "Redis",
        icon: SiRedis,
        description:
          "In-memory database for caching, sessions, and real-time applications.",
      },
    ],
  },
 
  {
    category: "Design & UI",
    items: [
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        description: "Utility-first CSS framework for rapid UI development.",
      },
      {
        name: "DaisyUI",
        icon: SiDaisyui,
        description:
          "Tailwind CSS component library with pre-built UI components.",
      },
      {
        name: "shadcn/ui",
        icon: SiShadcnui,
        description:
          "Modern, accessible, and customizable UI components built on Radix UI.",
      },
    ],
  },
  {
    category: "Auth & Security",
    items: [
      {
        name: "Passport.js",
        icon: SiPassport,
        description:
          "Authentication middleware for Node.js supporting multiple strategies.",
      },
      {
        name: "JWT",
        icon: SiJsonwebtokens,
        description: "JSON Web Token for authentication and authorization.",
      },
      {
        name: "Bcrypt",
        icon: FaLock,
        description: "Library for hashing passwords securely.",
      },
      {
        name: "Firebase",
        icon: SiFirebase,
        description:
          "Backend-as-a-Service offering authentication, database, and hosting.",
      },
      {
        name: "EmailJS",
        icon: SiGmail,
        description:
          "Email sending service directly from client-side applications.",
      },
    ],
  },

  {
    category: "Tools & Workflow",
    items: [
      {
        name: "Git",
        icon: FaGitAlt,
        description:
          "Version control system for tracking changes in source code.",
      },
      {
        name: "GitHub",
        icon: FaGithub,
        description: "Hosting platform for Git repositories and collaboration.",
      },
      {
        name: "VS Code",
        icon: VscVscode,
        description: "Popular lightweight code editor for modern development.",
      },
      {
        name: "Postman",
        icon: SiPostman,
        description: "API testing and collaboration platform for developers.",
      },
    ],
  },
];
