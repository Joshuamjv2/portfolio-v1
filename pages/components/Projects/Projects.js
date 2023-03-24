import SingleProject from "./SingleProject";

const projects = [
    {
        title: "ZikiBuzz",
        detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde architecto vero ad quibusdam magnam officiis mollitia? Pariatur dolorem dolore",
        github: "Github",
        live: "Live",
        image: "url('/images/music-section.jpg')"
    },
    {
        title: "BookSalon",
        detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde architecto vero ad quibusdam magnam officiis mollitia? Pariatur dolorem dolore",
        github: "Github",
        live: "Live",
        image: "url('/images/salon.jpg')"
    },
    {
        title: "Social App",
        detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde architecto vero ad quibusdam magnam officiis mollitia? Pariatur dolorem dolore",
        github: "Github",
        live: "Live",
        image: "url('/images/social.jpg')"
    }
]

export default function Projects(){
    return(
        <section className="container py-24 md:py-36">
            <h2 className="text-3xl md:text-5xl font-bold text-[#264653] mb-8 md:mb-8"><span className="text-6xl md:text-8xl text-[#6A040F]">.</span>My Projects</h2>
            <div className="flex flex-col gap-40 md:gap-60 lg:gap-72"> {/* All projects go here. */}
                    {projects.map(project =>
                        <SingleProject
                            title={project.title}
                            detail={project.detail}
                            github={project.github}
                            live={project.live}
                            image={project.image}
                        />
                    )}
            </div>
        </section>
    )
}
