import Project from "./SingleProject2";

import popcorn from "../../public/images/cinema_popcorn.jpg";
import aichatbot from "../../public/images/aichatbot.jpg";
import tattoo from "../../public/images/tattoo_shop.jpg";
import payriz from "../../public/images/payriz.png";
import ashdeck from "../../public/images/ashdeck.png";
import ink from "../../public/images/ink.png";
import oletre from "../../public/images/oletre.png";

const projects = [
  {
    title: "Ink Gallery Tattoo Studio",
    detail:
      "Designed and built a full-stack booking platform for a tattoo studio in New Jersey. The application lets customers browse tattoo designs and book appointments, while a custom dashboard helps the studio manage artists, designs, and bookings. I handled both frontend and backend development.",
    live: "https://app.inkgallerytattoostudio.com/",
    github: "https://github.com/Joshuamjv2/tattoo_gallery",
    image: ink,
    stack: "React, TypeScript, FastAPI, PostgreSQL, MongoDB, Redis, GCP",
  },
  {
    title: "Paidrole",
    detail:
      "Built a payroll platform for businesses working with independent professionals, including tattoo artists and barbers. It tracks individual payments, calculates shop commissions, and provides earnings summaries across custom date ranges. The system supports multiple shops and simplifies day-to-day payroll management.",
    live: "https://paidrole.com",
    github: "https://github.com/Joshuamjv2/tatoo_gallery_payroll",
    image: tattoo,
    stack: "FastAPI, MongoDB, Redis, React, Next.js",
  },
  {
    title: "Ashdeck",
    detail:
      "Developed a Chrome extension that turns the new tab into a productivity dashboard. It combines a task manager, calendar, weather, and a website-blocking Pomodoro timer to help users stay focused without leaving their browser. I built the product as a solo developer.",
    live: "https://ashdeck.com",
    image: ashdeck,
    stack: "React, JavaScript, FastAPI, MongoDB, Redis, WebSockets",
  },
  {
    title: "Flystep",
    detail:
      "A mobile application that connects to a workout device over Bluetooth Low Energy and synchronizes device data with the backend. The project brings together mobile development, hardware communication, and backend integration.",
    live: "https://apps.apple.com/us/app/flystep/id6812098710",
    image: aichatbot,
    stack: "React Native, Bluetooth LE, API integration",
  },
  {
    title: "Vending Machine Monitor",
    detail:
      "Built and maintained a Django backend that communicates with more than 100 vending machines in France over a custom TCP protocol. The system monitors stock levels and identifies inactive or potentially faulty machines.",
    github: "https://github.com/Joshuamjv2/vending_machines_monitor",
    image: ink,
    stack: "Python, Django, TCP, PostgreSQL",
  },
  {
    title: "Olrelaluce Lamp Controller",
    detail:
      "Developed a connected lamp control system using MQTT, with timed operation and automatic shutoff when the configured ozone limit is reached. The platform also includes QR-based device onboarding and customer-facing workflows.",
    github: "https://github.com/Joshuamjv2/advance_lamps",
    image: oletre,
    stack: "Python, MQTT, IoT, Backend development",
  },
  {
    title: "Payriz",
    detail:
      "Built the backend for an invoicing and payments platform that helps businesses send invoices, collect customer payments, and pay suppliers. I worked in a team of three during a hackathon, where the project placed fifth. Payment processing was integrated through the Paystack API.",
    live: "https://payriz.vercel.app/",
    github: "https://github.com/Joshuamjv2/payriz",
    image: payriz,
    stack: "FastAPI, MongoDB, AWS Lambda, Paystack",
  },
  {
    title: "Cinema Train",
    detail:
      "Designed and developed a movie discovery application using data from TMDB. Built to explore full-stack development and improve my frontend and interface design skills, the project combines a movie browsing experience with a custom backend.",
    live: "https://cinema-train.vercel.app",
    github: "https://github.com/Joshuamjv2/cinema_train",
    image: popcorn,
    stack: "Next.js, FastAPI, MongoDB, TMDB API",
  },
];

export default function Projects2() {
  return (
    <section id="projects">
      <h2 className="mb-4 text-3xl font-bold text-[#264653]">
        Projects
      </h2>

      <div className="flex flex-col gap-16 sm:gap-24">
        {projects.map((project) => (
          <Project
            key={project.title}
            {...project}
          />
        ))}
      </div>
    </section>
  );
}
