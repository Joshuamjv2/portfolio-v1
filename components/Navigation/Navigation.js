import Image from "next/image"
import logo from "../../public/images/josh-logo-done2.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Projects from "../Projects/Projects";
import Projects2 from "../Projects/Projects2";
import Skill from "../Skill";
import Link from "next/link";
import SingleNav from "./SingleNav";
import { useState } from "react";
import Footer from "../Footer/Footer";
import Experience from "../Experience/Experience";

export default function Navigation(){
    const [burgerOpen, setBurgerOpen] = useState(false)

    const handleOnClickBurger = () => setBurgerOpen(!burgerOpen)

    const handleClickLink = () => burgerOpen == true && setBurgerOpen(!burgerOpen)

    return (
    <>
        <div className="">
            {/* Navigation  */}
            <div className='flex items-center justify-between px-4 sm:px-8 py-4 bg-white shadow-sm fixed w-full z-10'>
                <a href="" className="z-10">
                    <Image src={logo} height={70} className="h-8 sm:h-12 w-auto"/>
                </a>
                {/* mobile */}
                {burgerOpen && !burgerOpen == 0 && <div className="w-screen md:hidden">
                    <ul className="flex flex-col items-center gap-5 text-center py-24 border-b border-[#e6e3e3] shadow-sm bg-white left-0 absolute w-full h-screen">
                        {/* <SingleNav title={"Home"} address={"/"} handleClick={handleClickLink} /> */}
                        <SingleNav title={"About"} address={"#about"} handleClick={handleClickLink} />
                        <SingleNav title={"Experience"} address={"#experience"} handleClick={handleClickLink} />
                        <SingleNav title={"Projects"} address={"#projects"} handleClick={handleClickLink} />
                        <SingleNav title={"Contact"} address={"#contact"} handleClick={handleClickLink} />
                            <Link onClick={handleClickLink} href={"https://drive.google.com/file/d/1KrU6ds-VLRFjQd50N8qVx64f5iBcUrL7/view?usp=sharing"} target="_blank">
                            <li className="border-2 p-2 border-[#6A040F] text-[#6A040F] font-bold hover:shadow-md hover:transition-all duration-300 text-sm md:text-base sm:px-24">Resume</li>
                        </Link>
                    </ul>
                </div>}
                {/* end mobile */}
                {/* large screens */}
                <ul className='hidden md:flex text-[#3c6e71] gap-6 xl:gap-16 font-medium items-center cursor-pointer'>
                    {/* <SingleNav title={"Home"} address={"/"} /> */}
                    <SingleNav title={"About"} address={"#about"} />
                    <SingleNav title={"Experience"} address={"#experience"} />
                    <SingleNav title={"Projects"} address={"#projects"} />
                    <SingleNav title={"Contact"} address={"#contact"} />
                    <Link href={"https://drive.google.com/file/d/1KrU6ds-VLRFjQd50N8qVx64f5iBcUrL7/view?usp=sharing"} target="_blank">
                        <li className="border-2 p-2 uppercase border-[#6A040F] text-[#6A040F] font-bold hover:shadow-md hover:transition-all duration-300 text-sm ">Resume</li>
                    </Link>
                </ul>
                <div onClick={handleOnClickBurger} className="hamburger relative cursor-pointer block md:hidden">
                {/* check global.css for more styles on this */}
                    <span className="bar" style={{
                        transform: burgerOpen ? 'rotate(45deg) translate(12px': ""
                    }}></span>
                    <span className="bar" style={{
                        opacity: burgerOpen ? 0: "",
                        transition: "opacity 40ms"

                    }}></span>
                    <span className="bar" style={{
                        transform: burgerOpen ? 'rotate(-45deg) translate(12px)': "",
                        // transform: burgerOpen ? 'translateY(6px)': ""
                    }}></span>
                </div>
            </div>
            {/* Hero section */}
            <div className="h-screen max-w-[1200px] px-4 sm:px-[2rem] lg:px-[4rem] mx-auto">
                <div className="flex items-center h-full">
                    <div className="">
                        <h5 className="mb-2 text-[#6A040F] font-semibold md:text-xl xl:text-2xl">Hello, my name is</h5>
                        <h1 className="uppercase font-bold text-[#264653] text-3xl sm:text-5xl">Muwanguzi Joshua</h1>
                        <h2 className="text-[#3c6e71] hidden sm:block py-2 text-2xl md:text-4xl xl:text-4xl font-bold">I solve problems with <br></br> <span className="text-[#264653]">Software.</span></h2>

                        <p className="text-[#2b2d42] lg:text-base my-4 sm:block max-w-[800px]">
                            I’m a software engineer who thrives on solving problems through code, creativity, and collaboration. I believe great solutions come from a blend of curiosity, creativity, and hard work and I am always ready to learn whatever is required to get work done.
                        </p>

                        <Link href={"#contact"}><button className="uppercase text-[#6A040F] border-2 p-2 border-[#6A040F] font-bold hover:shadow-md hover:transition-all duration-300 text-base">Contact Me</button></Link>
                    </div>
                </div>
            </div>
        </div>


        <main className="px-4 sm:px-[2rem] max-w-[1200px] lg:px-[4rem] mx-auto">
        {/* About Section */}
            <section className="py-12" id="about">
                <h2 className="text-3xl font-bold text-[#264653] mb-4"><span className="text-6xl md:text-8xl text-[#6A040F]"></span>About Me</h2>
                <div className="xl:flex justify-between">
                    <div className="max-w-[800px]">
                        {/* <h3 className="text-[#3c6e71] text-2xl md:text-3xl font-bold pb-2 md:pb-6">My Background</h3> */}
                        <p className="text-[#2b2d42] xl:pr-12 md:text-base lg:pb-0">
                            With more than 4 years of experience, I build solutions with an aim to solve problems and ease operations for businesses, institutions and individuals. The process of building software involves strong collaboration, creativity, learning and self motivation, and this is what always draws me to build things this way.
                            <br />
                            <br />
                            I am currently focussed on building multiple solutions for hardware integrations  <span className="text-[#6a040f] font-bold"><a href="https://www.seere.cloud" target="_blank">Seere SRL</a></span> as a full stack software developer.
                            I believe in tackling problems head-on, no matter the tools required. If I don’t know something, I see it as an opportunity to learn it, master it, and get the job done.
                            <br />
                            <br />
                            When I’m not deep in code, you’ll find me lost in a good book, out taking pictures with my camera, and letting beautiful music set the mood.
                        </p>
                    </div>
                    <div className="mt-8 xl:mt-0 xl:w-1/2 hidden">
                        {/* <h3 className="text-[#3c6e71] text-2xl md:text-3xl font-bold pb-2 md:pb-6">My Skills</h3> */}
                        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <Skill skill={"React"} />
                            <Skill skill={"Python"} />
                            <Skill skill={"Javascript"} />
                            <Skill skill={"Typescript"} />
                            <Skill skill={"AWS"}/>
                            <Skill skill={"Integrations"} />
                            <Skill skill={"CI/CD"} />
                            <Skill skill={"Testing"} />
                            <Skill skill={"Linux"} />
                            <Skill skill={"Fast API"} />
                            <Skill skill={"Django"} />
                            <Skill skill={"SQL & NoSQL"} />
                            <Skill skill={"GraphQl"} />
                            <Skill skill={"Docker"} />
                            <Skill skill={"Next Js"} />
                            <Skill skill={"GitHub"} />
                        </ul>
                    </div>
                </div>
            </section>

            {/* <Projects /> */}
            <Experience />
            <Projects2 />
        </main>
        <Footer />
    </>
    )
}
