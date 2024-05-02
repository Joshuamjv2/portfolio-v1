import Project from "./SingleProject2";
import popcorn from "../../public/images/cinema_popcorn.jpg"
import aichatbot from "../../public/images/aichatbot.jpg"
import tattoo from "../../public/images/tattoo_shop.jpg"
import payriz from "../../public/images/payriz.png"

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
        title: "Payroll application",
        detail: "Built payroll application for Ink Gallery Tattoo Studio in New Jersey, managing backend and frontend operations. This comprehensive tool simplifies artist payments and delivers immediate earnings insights, serving as an indispensable time-saving asset for the owner. Its able to handle multiple shops and soon will be rolled out to other shops.",
        live: "https://tattoo-gallery-payroll.vercel.app",
        // github: "https://github.com/Joshuamjv2/cinema_train",
        image: tattoo,
        stack: "FastAPI, MongoDB, Next Js, AWS Lambda"
    },
    {
        title: "AI Chatbot",
        detail: "Led the end-to-end development of the backend for AiChatbot, an AI-powered conversational application, marking my first foray into Language Model Models (LLMs). This pioneering project was designed to facilitate seamless information exchange between businesses and customers. ",
        live: "https://aichatbot.so",
        // github: "https://github.com/Joshuamjv2/cinema_train",
        image: aichatbot,
        stack: "FastAPI, MongoDB, AWS Lambda, Langchain, Openai, Pinecone"
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
        <section className="container" id="projects">
            <h2 className="text-3xl md:text-5xl font-bold text-[#264653] mb-8"><span className="text-6xl md:text-8xl text-[#6A040F]"></span>Projects</h2>

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