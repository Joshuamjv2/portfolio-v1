import Project from "./SingleProject2";
import popcorn from "../../public/images/cinema_popcorn.jpg"

const projects = [
     {
        title: "Cinema Train",
        detail: "I live in Uganda and I realized all cinemas/movie theaters don't sell tickets online. I, therefore, built a website where users can buy tickets, rate their favorite movies, and recommend them as well.",
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

            <div className="flex flex-col gap-40 md:gap-60 lg:gap-72"> {/* All projects go here. */}
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