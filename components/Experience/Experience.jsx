import SingleExperience from "./SingleExperience"
import popcorn from "../../public/images/cinema_popcorn.jpg"
import aichatbot from "../../public/images/aichatbot.jpg"
import tattoo from "../../public/images/tattoo_shop.jpg"
import payriz from "../../public/images/payriz.png"

const projects = [
    {
        title: "Seere SRL",
        detail: "I build platforms integrating hardware like sports equipment, vending machines, and remote lighting systems to enhance operational efficiency. I designed and developed a multi-organization dashboard with FastAPI and React/TypeScript for managing athletes, coaches, and teams, featuring granular access control and real-time data visualization. I created a Django platform managing TCP communication with 100+ vending machines across France, automating message parsing and reporting to improve transparency. Additionally, I delivered a real-time MQTT system for remote lamp control, streamlining device onboarding, inventory management, and purchase flows. I lead backend architecture, database design, and deployments using Linux servers, Docker, and CI/CD pipelines, collaborating cross-functionally to deliver scalable, reliable solutions.",
        // github: "https://github.com/Joshuamjv2/cinema_train",
        duration: "Oct 2024 - Present"
    },
    {
        title: "Pelrio SRL",
        detail: "I developed secure, scalable backend systems consumed by thousands of users, utilizing Django, FastAPI, AWS, MongoDB, Postgres, Redis, and GraphQL. I designed and implemented microservices architectures to improve system efficiency and scalability, leveraging signals and WebSockets for real-time event handling. I built CI/CD pipelines using GitHub Actions to ensure reliable testing and smooth deployments. I integrated tools and services like Shopify, Xero, Slack, OpenAI, QuickBooks, and banking APIs to enhance product offerings. Working closely with cross-functional teams and management, I gathered feedback and aligned project goals, fostering clear communication and efficient delivery.",
        duration: "July 2021 - August 2024"
    }
]

export default function Experience(){
    return(
        <section className="py-24" id="experience">
            <h2 className="text-3xl font-bold text-[#264653] mb-4">Work Experience</h2>

            <div className="flex flex-col gap-4"> {/* All projects go here. */}
                    {projects.map(project =>
                        <SingleExperience
                            title={project.title}
                            detail={project.detail}
                            duration={project.duration}
                        />
                    )}
            </div>
        </section>
    )
}