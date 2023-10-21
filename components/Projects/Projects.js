import SingleProject from "./SingleProject";

const projects = [
    {
        title: "Cinema Train",
        detail: "Designed and developed a comprehensive movie database application from the ground up, showcasing a strong command of both frontend and backend technologies. The project aimed to fetch and display movies from TMDB, serving as a valuable exercise to refine my frontend and design skills.",
        live: "https://cinema-train.vercel.app",
        github: "https://github.com/Joshuamjv2/cinema_train",
        image: "url('/images/cinema_popcorn.jpg')",
        stack: "NextJs, FastAPI, MongoDB"
    },
    {
        title: "AI Chatbot",
        detail: "Led the end-to-end development of the backend for AiChatbot, an AI-powered conversational application, marking my first foray into Language Model Models (LLMs). This pioneering project was designed to facilitate seamless information exchange between businesses and customers. ",
        live: "https://aichatbot.so",
        github: "https://github.com/Joshuamjv2/cinema_train",
        image: "url('/images/aichatbot.jpg')",
        stack: "FastAPI, MongoDB, AWS Lambda, Langchain, Openai, Pinecone"
    },
    // {
    //     title: "BookSalon",
    //     detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde architecto vero ad quibusdam magnam officiis mollitia? Pariatur dolorem dolore",
    //     github: "Github",
    //     live: "Live",
    //     image: "url('/images/salon.jpg')",
    //     stack: "NextJs, FastAPI, MongoDB"
    // },
    // {
    //     title: "Social App",
    //     detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde architecto vero ad quibusdam magnam officiis mollitia? Pariatur dolorem dolore",
    //     github: "Github",
    //     live: "Live",
    //     image: "url('/images/social.jpg')",
    //     stack: "NextJs, FastAPI, MongoDB"
    // }
]

export default function Projects(){
    return(
        <section className="container" id="projects">
            <h2 className="text-3xl md:text-5xl font-bold text-[#264653] mb-8"><span className="text-6xl md:text-8xl text-[#6A040F]"></span>Projects</h2>
            <div className="flex flex-col gap-40 md:gap-60 lg:gap-72"> {/* All projects go here. */}
                    {projects.map(project =>
                        <SingleProject
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
