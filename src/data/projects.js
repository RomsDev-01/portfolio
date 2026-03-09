import img1 from "../images/image-1.png";
import img2 from "../images/image-2.png";
import img3 from "../images/image-3.png";
import img4 from "../images/image-4.png";
import img5 from "../images/image-5.png";

export const projects = [
  {
    id: 1,
    number: "01",
    title: "WeatherNow",
    subtitle: "Real-time weather dashboard",
    description:
      "A clean, responsive weather app that fetches live data from the OpenWeatherMap API. Features a 5-day forecast, dynamic background gradients based on weather conditions, and location-based auto-detection.",
    tech: ["React", "OpenWeatherMap API", "CSS Modules", "Geolocation API"],
    category: "Web App",
    year: "2024",
    liveUrl: "https://weathernow-blue.vercel.app/",
    codeUrl: "https://github.com/RomsDev-01/weathernow",
    color: "#4a9eff",
    gradient: "linear-gradient(135deg, #0a2a4a 0%, #1a3a5c 100%)",
    screenshot: img1,
  },
  {
    id: 2,
    number: "02",
    title: "TaskFlow",
    subtitle: "Kanban productivity board",
    description:
      "A drag-and-drop task management application inspired by Trello. Built with React and local storage persistence. Features column management, card creation, priority labels, and due dates.",
    tech: ["React", "React DnD", "localStorage", "Tailwind CSS"],
    category: "Productivity",
    year: "2024",
    liveUrl: "https://taskflow-one-gamma.vercel.app/",
    codeUrl: "https://github.com/RomsDev-01/taskflow",
    color: "#c8ff00",
    gradient: "linear-gradient(135deg, #1a2a00 0%, #2a3d00 100%)",
    screenshot: img2,
  },
  {
    id: 3,
    number: "03",
    title: "CineSearch",
    subtitle: "Movie discovery platform",
    description:
      "A movie discovery web app powered by The Movie Database (TMDB) API. Users can search for films, view detailed info, browse by genre, and save favorites to a personal watchlist.",
    tech: ["React", "TMDB API", "React Router", "Styled Components"],
    category: "Entertainment",
    year: "2024",
    liveUrl: "https://cinesearch-gray.vercel.app/",
    codeUrl: "https://github.com/RomsDev-01/cinesearch",
    color: "#ff6b6b",
    gradient: "linear-gradient(135deg, #2a0a0a 0%, #3d1a1a 100%)",
    screenshot: img3,
  },
  {
    id: 4,
    number: "04",
    title: "DevBlog",
    subtitle: "Markdown-powered blog engine",
    description:
      "A personal blogging platform where posts are written in Markdown and rendered into beautiful HTML. Features a custom syntax highlighter, reading time estimates, and a responsive layout.",
    tech: ["React", "Marked.js", "Highlight.js", "CSS Grid"],
    category: "Content",
    year: "2023",
    liveUrl: "https://devblog-iota-wine.vercel.app/",
    codeUrl: "https://github.com/RomsDev-01/devblog",
    color: "#a78bfa",
    gradient: "linear-gradient(135deg, #1a0a2e 0%, #2d1b5e 100%)",
    screenshot: img4,
  },
  {
    id: 5,
    number: "05",
    title: "ShopCart",
    subtitle: "E-commerce storefront UI",
    description:
      "A fully functional e-commerce front-end with product listing, filtering, cart management, and a checkout flow. Built as a capstone project to demonstrate end-to-end frontend architecture skills.",
    tech: ["React", "Context API", "React Hook Form", "JSON Server"],
    category: "E-Commerce",
    year: "2023",
    liveUrl: "https://shopcart-tau-eosin.vercel.app/",
    codeUrl: "https://github.com/RomsDev-01/shopcart",
    color: "#fbbf24",
    gradient: "linear-gradient(135deg, #2a1a00 0%, #3d2a00 100%)",
    screenshot: img5,
  },
];

export const skills = {
  "Languages": ["JavaScript (ES6+)", "HTML5", "CSS3", "TypeScript (learning)"],
  "Frameworks": ["React", "Vite", "Next.js (familiar)"],
  "Styling": ["Tailwind CSS", "CSS Modules", "Styled Components", "SASS"],
  "Tools": ["Git & GitHub", "Figma", "VS Code", "Chrome DevTools"],
  "Concepts": ["REST APIs", "Responsive Design", "Web Accessibility", "Component Architecture"],
};