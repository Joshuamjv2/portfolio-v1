import Project from "./SingleProject2";

import popcorn from "../../public/images/cinema_popcorn.jpg";
import aichatbot from "../../public/images/aichatbot.jpg";
import tattoo from "../../public/images/tattoo_shop.jpg";
import payriz from "../../public/images/payriz.png";
import ashdeck from "../../public/images/ashdeck.png";
import ink from "../../public/images/ink.png";
import oletre from "../../public/images/oletre.png";
import vending_machine from "../../public/images/vending_machine.png"
import flystep from "../../public/images/flystep.png"

const projects = [
  {
    title: "Ink Gallery Tattoo Studio",
    detail:
      "Designed and built a full-stack booking platform for a tattoo studio in New Jersey. Customers can browse tattoo designs and book appointments, while a custom dashboard helps manage artists, designs, and bookings.",
    live: "https://app.inkgallerytattoostudio.com/",
    github: "https://github.com/Joshuamjv2/tattoo_gallery",
    image: ink,
    stack: "React, TypeScript, FastAPI, PostgreSQL, MongoDB, Redis, GCP",
  },
  {
    title: "Paidrole",
    detail:
      "Built a payroll platform for businesses working with independent professionals. It tracks payments, calculates shop commissions, and summarizes earnings across multiple shops.",
    live: "https://paidrole.com",
    github: "https://github.com/Joshuamjv2/tatoo_gallery_payroll",
    image: tattoo,
    stack: "FastAPI, MongoDB, Redis, React, Next.js",
  },
  {
    title: "Ashdeck",
    detail:
      "Developed a Chrome extension combining a task manager, calendar, weather, and a website-blocking Pomodoro timer in one productivity dashboard.",
    live: "https://ashdeck.com",
    image: ashdeck,
    stack: "React, JavaScript, FastAPI, MongoDB, Redis, WebSockets",
  },
  {
    title: "Flystep",
    detail:
      "A mobile application that connects to a workout device over Bluetooth Low Energy and synchronizes device data with the backend.",
    live: "https://apps.apple.com/us/app/flystep/id6812098710",
    image: flystep,
    stack: "React Native, Bluetooth LE, API integration",
  },
  {
    title: "Vending Machine Monitor",
    detail:
      "Built and maintained a Django backend communicating with more than 100 vending machines in France over a custom TCP protocol. It monitors stock levels and identifies inactive or faulty machines.",
    github: "https://github.com/Joshuamjv2/vending_machines_monitor",
    image: vending_machine,
    stack: "Python, Django, TCP, PostgreSQL",
  },
  {
    title: "Olrelaluce Lamp Controller",
    detail:
      "Developed a connected lamp control system using MQTT, timed operation, automatic shutoff at configured ozone limits, and QR-based device onboarding.",
    github: "https://github.com/Joshuamjv2/advance_lamps",
    image: oletre,
    stack: "Python, MQTT, IoT, Backend development",
  },
  {
    title: "Payriz",
    detail:
      "Built the backend for an invoicing and payments platform using Paystack. Worked in a team of three during a hackathon, where the project placed fifth.",
    live: "https://payriz.vercel.app/",
    github: "https://github.com/Joshuamjv2/payriz",
    image: payriz,
    stack: "FastAPI, MongoDB, AWS Lambda, Paystack",
  },
  {
    title: "Cinema Train",
    detail:
      "Designed and developed a movie discovery application using TMDB, combining a movie browsing experience with a custom backend.",
    live: "https://cinema-train.vercel.app",
    github: "https://github.com/Joshuamjv2/cinema_train",
    image: popcorn,
    stack: "Next.js, FastAPI, MongoDB, TMDB API",
  },
];

export default function Projects2() {
  return (
    <section id="projects" className="py-8">
      <h2 className="mb-6 text-3xl font-bold text-[#264653]">
        Projects
      </h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
