import {
  Award,
  Clock,
  Code2,
  Globe,
  Mail,
  MapPin,
  Smartphone,
  Users,
} from "lucide-react";

export const projects = [
  {
    title: "E-commerce Platform",
    category: "Web",
    image:
      "https://media.licdn.com/dms/image/v2/C4E12AQEU7wL9bjrlKw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1626498811833?e=2147483647&v=beta&t=57caCCV5XwUM0ycZdB9rAy0AELV-ToSj-oiCdwSPJNA",
    description: "A full-featured e-commerce platform with advanced features.",
    technologies: ["React", "Express", "MongoDB"],
  },
  {
    title: "Portfolio Website",
    category: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "A modern portfolio website with a clean design.",
    technologies: ["Figma"],
  },
  {
    title: "Fitness Tracking App",
    category: "Mobile",
    image:
      "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Mobile app for tracking workouts and nutrition.",
    technologies: ["Flutter", "Firebase"],
  },
  {
    title: "Social Media Platform",
    category: "Web",
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Social platform for connecting professionals.",
    technologies: ["React", "Express", "PostgreSQL"],
  },
  {
    title: "Food Delivery App",
    category: "Mobile",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Food delivery app with real-time tracking.",
    technologies: ["Flutter", "Firebase"],
  },
  {
    title: "Travel Website",
    category: "UI/UX",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Travel booking website with modern design.",
    technologies: ["Figma"],
  },
];

export const stats = [
  { number: "13+", label: "Projects Completed" },
  { number: "4+", label: "Happy Clients" },
  { number: "10+", label: "Team Members" },
  { number: "3+", label: "Years Experience" },
];

export const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies like React, Node.js, and Python.",
    features: [
      "Responsive Design",
      "API Integration",
      "Performance Optimization",
      "SEO-friendly",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android platforms.",
    features: [
      "Native Apps",
      "Cross-platform Solutions",
      "UI/UX Design",
      "App Store Optimization",
    ],
  },
];

export const milestones = [
  {
    year: "2021",
    title: "Company Founded",
    description: "Started with a team of 3 passionate developers",
  },
  {
    year: "2022",
    title: "First Major Project",
    description: "Successfully delivered enterprise-level solutions",
  },
  {
    year: "2024",
    title: "Working on Major Project",
    description: "Providing delivered Full stack client Satisfied solutions",
  },
];

export const companyValues = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled professionals dedicated to excellence",
  },
  {
    icon: Award,
    title: "Quality First",
    description: "Committed to delivering the best results",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Meeting deadlines without compromising quality",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving clients worldwide with dedication",
  },
];

export const contactDetails = [
  {
    Icon: Mail,
    title: "Email",
    content: ["itcraftsolution1@gmail.com"],
  },
  {
    Icon: MapPin,
    title: "Location",
    content: [
      "Near by Jaddu's hotel,",
      "Kalavad Road, Rajkot,",
      "Gujarat, India",
    ],
  },
  {
    Icon: Clock,
    title: "Business Hours",
    content: [
      "Monday - Friday: 9:00 AM - 6:00 PM",
      "Saturday: 10:00 AM - 4:00 PM",
      "Sunday: Closed",
    ],
  },
];
