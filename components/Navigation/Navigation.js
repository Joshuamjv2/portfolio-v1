import Image from "next/image"
import logo from "../../public/images/josh-logo-done2.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Projects from "../Projects/Projects";
import Projects2 from "../Projects/Projects2";
import Skill from "../Skill";
import Link from "next/link";
import SingleNav from "./SingleNav";

export default function Navigation(){
    return (
    <>
        <div className="">
            {/* Navigation  */}
            <div className='flex items-center justify-between px-12 md:px-24 py-4 bg-white fixed w-full z-10'>
                <Image src={logo} height={70} className="md:h-16 w-auto"/>
                <ul className='md:flex text-[#3c6e71] gap-6 xl:gap-16 font-medium uppercase hidden md:visible items-center cursor-pointer'>
                    <SingleNav title={"Home"} address={"/"} />
                    <SingleNav title={"About"} address={"#about"} />
                    <SingleNav title={"Projects"} address={"#projects"} />
                    <SingleNav title={"Contact"} address={"#contact"} />
                    <Link href={"https://www.cakeresume.com/s--h_cXTLhM08_mu45j0MERPA--/muwanguzi-joshua"} target="_blank">
                        <li className="border-2 p-2 border-[#6A040F] text-[#6A040F] font-bold hover:shadow-md hover:transition-all duration-300 text-sm md:text-base">Resume</li>
                    </Link>
                </ul>
            </div>
            {/* Hero section */}
            <div className="h-screen">
                <div className="container flex items-center h-full">
                    <div>
                        <h5 className="mb-2 text-[#6A040F] md:text-xl xl:text-2xl">Hello there, my name is</h5>
                        <h1 className="uppercase font-bold text-[#264653] text-3xl md:text-5xl lg:text-6xl">Muwanguzi Joshua.</h1>
                        <h2 className="text-[#3c6e71] py-2 xl:py-4 text-2xl md:text-4xl xl:text-5xl font-bold">I build software for the web.</h2>
                        <p className="text-[#2b2d42] xl:w-1/2 lg:text-base">I am a software engineer specialized in building for the web both on the backend and frontend, with more proficiency in the backend.
                        I am currently working as a python backend developer at a Italian based start up called <span className="text-[#6a040f] font-bold"><a href="https://www.pelrio.com" target="_blank">Pelrio</a></span>, building tools that automate accounting processes for small businesses.</p>
                        <button className="uppercase mt-4 xl:mt-8 text-[#6A040F] border-2 p-2 border-[#6A040F] font-bold hover:shadow-md hover:transition-all duration-300 text-base">Contact Me</button>
                    </div>
                </div>
            </div>
        </div>
    


        <main>
        {/* About Section */}
            <section className="container py-24 md:py-36" id="about">
                <h2 className="text-3xl md:text-5xl font-bold text-[#264653] mb-8"><span className="text-6xl md:text-8xl text-[#6A040F]"></span>About Me</h2>
                <div className="xl:flex justify-between">
                    <div className="xl:w-1/2">
                        {/* <h3 className="text-[#3c6e71] text-2xl md:text-3xl font-bold pb-2 md:pb-6">My Background</h3> */}
                        <p className="text-[#2b2d42] xl:pr-12 md:text-base lg:pb-0">
                            Hi, my name is Muwanguzi Joshua, a software Engineer based in Uganda. Back in 2019, I discovered the possibility of building things with code. I am self taught and I love the process of getting a new skill and building something meaning full with it.
                            <br />
                            I am currently focussed on building scalable, efficient and accessible software at <span className="text-[#6a040f] font-bold"><a href="https://www.pelrio.com" target="_blank">Pelrio</a></span> while I also improve my frontend skills.
                            <br /><br />
                            Besides coding, I like, learning new things, listening to music, playing football and capturing people's; moments and emotions through photography.
                        </p>
                    </div>
                    <div className="mt-8 xl:mt-0 xl:w-1/2">
                        {/* <h3 className="text-[#3c6e71] text-2xl md:text-3xl font-bold pb-2 md:pb-6">My Skills</h3> */}
                        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <Skill skill={"React"} />
                            <Skill skill={"Python"} />
                            <Skill skill={"Javascript"} />
                            <Skill skill={"AWS Lambda"}/>
                            <Skill skill={"Dynamodb"} />
                            <Skill skill={"AWS AppSync"} />
                            <Skill skill={"Fast API"} />
                            <Skill skill={"Django"} />
                            <Skill skill={"Postgresql"} />
                            <Skill skill={"MongoDB"} />
                            <Skill skill={"Next Js"} />
                            <Skill skill={"GitHub"} />
                        </ul>
                    </div>
                </div>
            </section>

            {/* <Projects /> */}
            <Projects2 />

            <footer className="container" id="contact">
                <div className="text-center pt-40 pb-40">
                    <h2 className="font-bold text-[#264653] text-2xl md:text-4xl">Get in touch</h2>
                    <p className="my-4 md:my-8 lg:w-1/2 lg:mx-auto md:text-base text-[#2b2d42]">Please reach out to me about collaborations, opportunities, <br/>or just to say hello. I will be glad to hear from you. <br/>Enjoy your day!!</p>
                    <ul className="flex justify-center gap-8 md:gap-12">
                        <li className="cursor-pointer"><a href="https://github.com/Joshuamjv2" target="_blank">
                            <FontAwesomeIcon icon={['fab', 'github']} style={{ fontSize: 30, color: "#6A040F" }} />
                        </a></li>
                        <li className="cursor-pointer"><a href="https://www.linkedin.com/in/joshua-muwanguzi-33364a164/" target="_blank">
                            <FontAwesomeIcon icon={['fab', 'linkedin']} style={{ fontSize: 30, color: "#6A040F" }}/>
                        </a></li>
                        <li className="cursor-pointer"><a href="mailto:joshuamjv22@gmail.com" target="_blank">
                            <FontAwesomeIcon icon={['fas', 'envelope']} style={{ fontSize: 30, color: "#6A040F" }} />
                        </a></li>
                        <li className="cursor-pointer"><a href="https://twitter.com/Muwangu12386789" target="_blank">
                            <FontAwesomeIcon icon={['fab', 'twitter']} style={{ fontSize: 30, color: "#6A040F" }} />
                        </a></li>
                    </ul>
                </div>

                <div className="border-t border-[#6A040F]  text-[#3c6e71]">
                        {/* <p>Made By: <span>Muwanguzi Joshua</span></p> */}
                        <div className="lg:flex text-center justify-center items-center md:px-8 py-6">
                            <p className="font-medium md:text-base">&copy;{new Date().getFullYear()} <span className="text-[#6A040F] hover:font-medium cursor-pointer font-normal hover:transition-all">Muwanguzi Joshua</span></p>
                            {/* <p className="font-medium lg:text-base">Inspired By: <span className="text-[#6A040F] hover:font-medium cursor-pointer font-normal hover:transition-all">Brittany Chiang</span> & <span className="text-[#6A040F] hover:font-medium cursor-pointer font-normal hover:transition-all">Ram Maheshwari</span></p> */}
                        </div>
                </div>
            </footer>
        </main>
    </>
    )
}