import Project from "./SingleProject2";

import popcorn from "../../public/images/cinema_popcorn.jpg";
import aichatbot from "../../public/images/aichatbot.jpg";
import tattoo from "../../public/images/tattoo_shop.jpg";
import payriz from "../../public/images/payriz.png";
import ashdeck from "../../public/images/ashdeck.png";
import ink from "../../public/images/ink.png";
import oletre from "../../public/images/oletre.png";
// Add this import when the image is available:
// import vending_machines from "../../public/images/vending_machines.png";

const projects = [
{
title: "Ink Gallery Tattoo Studio",
detail:
"Built a tattoo booking platform with design browsing and a dashboard for managing artists, designs, and appointments.",
live: "https://app.inkgallerytattoostudio.com/",
github: "https://github.com/Joshuamjv2/tattoo_gallery",
image: ink,
stack: "React, TypeScript, FastAPI, PostgreSQL, MongoDB, Redis, GCP",
},
{
title: "Paidrole",
detail:
"Built a payroll platform that tracks payments, calculates shop commissions, and summarizes earnings across multiple shops.",
live: "https://paidrole.com",
github: "https://github.com/Joshuamjv2/tatoo_gallery_payroll",
image: tattoo,
stack: "FastAPI, MongoDB, Redis, React, Next.js",
},
{
title: "Ashdeck",
detail:
"Created a productivity Chrome extension combining tasks, calendar, weather, and a website-blocking Pomodoro timer.",
live: "https://ashdeck.com",
image: ashdeck,
stack: "React, JavaScript, FastAPI, MongoDB, Redis, WebSockets",
},
{
title: "Flystep",
detail:
"Developed a mobile app that connects to a workout device over Bluetooth LE and synchronizes device data.",
live: "https://apps.apple.com/us/app/flystep/id6812098710",
image: aichatbot,
stack: "React Native, Bluetooth LE, API integration",
},
{
title: "Vending Machine Monitor",
detail:
"Built a Django backend communicating with 100+ vending machines in France over a custom TCP protocol to monitor stock and detect faults.",
github: "https://github.com/Joshuamjv2/vending_machines_monitor",
image: ink, // Replace with vending_machines when imported.
stack: "Python, Django, TCP, PostgreSQL",
},
{
title: "Olrelaluce Lamp Controller",
detail:
"Built an MQTT-based lamp controller with timed operation, automatic shutoff at configured ozone limits, and QR-based onboarding.",
github: "https://github.com/Joshuamjv2/advance_lamps",
image: oletre,
stack: "Python, MQTT, IoT",
},
{
title: "Payriz",
detail:
"Developed the backend for an invoicing and payments platform using Paystack as part of a three-person hackathon team that placed fifth.",
live: "https://payriz.vercel.app/",
github: "https://github.com/Joshuamjv2/payriz",
image: payriz,
stack: "FastAPI, MongoDB, AWS Lambda, Paystack",
},
{
title: "Cinema Train",
detail:
"Built a movie discovery app using TMDB, with a Next.js frontend and a custom backend.",
live: "https://cinema-train.vercel.app",
github: "https://github.com/Joshuamjv2/cinema_train",
image: popcorn,
stack: "Next.js, FastAPI, MongoDB, TMDB API",
},
];

export default function Projects2() {
return ( <section id="projects" className="py-10"> <h2 className="mb-6 text-3xl font-bold text-[#264653]">
Projects </h2>

```
  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
    {projects.map((project) => (
      <Project key={project.title} {...project} />
    ))}
  </div>
</section>
```

);
}
