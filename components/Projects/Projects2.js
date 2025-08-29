import Project from "./SingleProject2";
import popcorn from "../../public/images/cinema_popcorn.jpg"
import aichatbot from "../../public/images/aichatbot.jpg"
import tattoo from "../../public/images/tattoo_shop.jpg"
import payriz from "../../public/images/payriz.png"
import ashdeck from "../../public/images/ashdeck.png"
import ink from "../../public/images/ink.png"
import oletre from "../../public/images/oletre.png"

const projects = [
    {
        title: "Payriz",
        detail: "Payriz is an invoicing and payment application meant to ease payments for businesses. With a team of 3, I was the backend developer for this hackathon project which was ranked 5th. The payment processing in this application was built on top of the paystack API.",
        live: "https://payriz.vercel.app",
        // github: "https://github.com/Joshuamjv2/cinema_train",
        image: payriz,
        stack: "FastAPI, MongoDB, AWS Lambda"
    },
    {
        title: "Ashdeck chrome extension",
        detail: "Ashdeck is a Chrome extension that replaces the new tab with a focused dashboard. It integrates a calendar, weather, task manager, and a website-blocking Pomodoro timer to minimize distractions and boost productivity directly from the browser. I am a solo developer on this but preparing to open-source it soon.",
        live: "https://ashdeck.com",
        // github: "https://github.com/Joshuamjv2/cinema_train",
        image: ashdeck,
        stack: "FastAPI, MongoDB, AWS Lambda, React, Javascript, GCP"
    },
    {
        title: "Ink Gallery Tattoo Studio",
        detail: "I designed and built an appointment booking web application for New Jersey based ink gallery studio to ease the booking flow for their clients. I worked on both the backend and frontend and designed everything as well. The site comes with a dashboard to manage appointments, artists and tattoos that customers can book for.",
        live: "https://app.inkgallerytattoostudio.com/",
        // github: "https://github.com/Joshuamjv2/cinema_train",
        image: ink,
        stack: "React & Vite, FastAPI, Postgresql, Linux, Typescript"
    },
    {
        title: "Payroll application",
        detail: "Built payroll application for Ink Gallery Tattoo Studio in New Jersey, managing backend and frontend operations. This comprehensive tool simplifies artist payments and delivers immediate earnings insights, serving as an indispensable time-saving asset for the owner. Its able to handle multiple shops and soon will be rolled out to other shops.",
        live: "https://tattoo-gallery-payroll.vercel.app",
        // github: "https://github.com/Joshuamjv2/cinema_train",
        image: tattoo,
        stack: "FastAPI, MongoDB, Next Js, AWS Lambda"
    },
    {
        title: "Cinema Train",
        detail: "Designed and developed a comprehensive movie database application from the ground up, showcasing a strong command of both frontend and backend technologies. The project aimed to fetch and display movies from TMDB, serving as a valuable exercise to refine my frontend and design skills.",
        live: "https://cinema-train.vercel.app",
        github: "https://github.com/Joshuamjv2/cinema_train",
        image: popcorn,
        stack: "NextJs, FastAPI, MongoDB"
    }
]

export default function Projects2(){
    return(
        <section className="" id="projects">
            <h2 className="text-3xl font-bold text-[#264653] mb-4"><span className="text-6xl text-[#6A040F]"></span>Projects</h2>

            <div className="flex flex-col gap-24"> {/* All projects go here. */}
                    {projects.map(project =>
                        <Project
                            title={project.title}
                            detail={project.detail}
                            github={project.github}
                            live={project.live}
                            image={project.image}
                            stack={project.stack}
                        />
                    )}
            </div>
        </section>
    )
}