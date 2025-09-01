import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiMongodb,
  SiTypescript,
  SiExpress,
  SiTailwindcss,
  SiFirebase,
  SiStripe,
  SiChartdotjs,
} from "react-icons/si";

export const projects = [
  {
    id: "65e23c09f87c1d7e5b6a7c8d",
    title: "DigiPay",
    shortDescription:
      "A secure, role-based digital wallet frontend inspired by bKash & Nagad, with interactive dashboards and guided tours.",
    broadDescription: `
DigiPay is a professional digital wallet frontend designed for Users, Agents, and Admins.  
It integrates seamlessly with a backend API to provide secure authentication, transaction handling, and responsive dashboards.

The project focuses heavily on **security, scalability, and polished UI/UX**.  
Users can deposit, withdraw, and send money. Agents handle cash-in and cash-out operations, while Admins manage users, agents, and transactions.  
The app also includes **charts, tables, role-based dashboards, pagination, guided tours, and light/dark themes**.

With a modular architecture and clean codebase, DigiPay is built to mimic real-world fintech applications like **bKash** and **Nagad**.
    `,
    techStack: [
      { name: "React.js", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Redux Toolkit", icon: SiRedux },
      { name: "RTK Query", icon: SiRedux },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Chart.js", icon: SiChartdotjs },
    ],
    features: [
      "Role-based dashboards (User, Agent, Admin)",
      "JWT authentication with persistent state",
      "Interactive charts & guided tours",
      "Responsive UI with light/dark mode",
      "Pagination, filters, and error handling",
    ],
    github: "https://github.com/Tafhim301/DigiPay_Client",
    liveDemo: "https://digi-pay-eta.vercel.app/",
    image: "/images/digipay-img.png",
  },
  {
    id: "65e23c09f87c1d7e5b6a7c9v",
    title: "Medicare",
    shortDescription:
      "A full-stack diagnostic center management system for patient appointments, test results, and admin operations.",
    broadDescription: `
Medicare Diagnostic Center Management System is a **comprehensive full-stack application** designed to streamline healthcare diagnostics.  
It allows patients to register, manage appointments, and access test results. The platform integrates **Stripe payments** for booking tests and supports coupon-based discounts.

Admins manage users, tests, reservations, and homepage banners. Doctors and staff can update test results and manage appointments.  
The system also features **JWT authentication, dynamic banners, personalized recommendations, and pagination** for scalability.

This project demonstrates **enterprise-level functionality** in healthcare management, offering an end-to-end solution for diagnostics centers.
    `,
    techStack: [
      { name: "React.js", icon: FaReact },
      { name: "Firebase Auth", icon: SiFirebase },
      { name: "Stripe", icon: SiStripe },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
    ],
    features: [
      "Patient registration & profile management",
      "Book & manage test appointments",
      "Upload/download test results",
      "Admin dashboard for users, tests, reservations, and banners",
      "Stripe payment integration with coupons",
    ],
    github: "https://github.com/Tafhim301/Medicare-client",
    liveDemo: "https://medicare-client-dcdfd.web.app/",
    image: "/images/medicare-img.png",
  },
  {
    id: "65e23c05f87c1d9e5b6a7c8e",
    title: "Jobify",
    shortDescription:
      "A modern job portal for posting, applying, and managing jobs across categories like Remote, Onsite, Hybrid, and Part-time.",
    broadDescription: `
JobSeeker is a **full-stack job portal** where users can create accounts, post jobs, and apply to available opportunities.  
It includes dynamic job categories such as On Site, Remote, Hybrid, and Part Time, making it suitable for diverse work environments.

Applicants can apply directly from job listings, while recruiters manage postings via their personal dashboards.  
It features a **secure JWT-based authentication system**, responsive design, and **PDF export of applications** for convenience.

With search filters, meaningful route/page structure, and visually appealing components, JobSeeker provides a complete **career platform** experience.
    `,
    techStack: [
      { name: "React.js", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Firebase", icon: SiFirebase },
    ],
    features: [
      "Authentication & profile management",
      "Job posting & job application workflows",
      "Applied Jobs & My Jobs dashboards",
      "Searchable and categorized job listings",
      "Export job applications as PDF",
    ],
   github: "https://github.com/Tafhim301/jobify-client",
    liveDemo: "https://jobify-4431f.web.app/",
    image: "/images/jobify.png",
  },
];
