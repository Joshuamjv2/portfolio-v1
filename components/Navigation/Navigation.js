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

export default function Navigation(){
    const [burgerOpen, setBurgerOpen] = useState(false)

    const handleOnClickBurger = () => setBurgerOpen(!burgerOpen)

    const handleClickLink = () => burgerOpen == true && setBurgerOpen(!burgerOpen)

    return (
    <>
        <div className="">
            {/* Navigation  */}
            <div className='flex items-center justify-between px-12 md:px-24 py-4 bg-white fixed w-full z-10'>
                <Image src={logo} height={70} className="h-12 md:h-16 w-auto z-10"/>
                {/* mobile */}
                {burgerOpen && !burgerOpen == 0 && <div className="w-screen md:hidden">
                    <ul className="flex flex-col gap-5 text-center pt-24 pb-24 border-b border-[#e6e3e3] shadow-sm left-0 absolute w-full bg-white">
                        <SingleNav title={"Home"} address={"/"} handleClick={handleClickLink} />
                        <SingleNav title={"About"} address={"#about"} handleClick={handleClickLink} />
                        <SingleNav title={"Projects"} address={"#projects"} handleClick={handleClickLink} />
                        <SingleNav title={"Contact"} address={"#contact"} handleClick={handleClickLink} />
                            <Link onClick={handleClickLink} href={"https://drive.google.com/file/d/13KfqGzpTRO9iOA2oMIjBLe5pWx7NUbwq/view?usp=sharing"} target="_blank">
                            <li className="border-2 p-2 border-[#6A040F] text-[#6A040F] font-bold hover:shadow-md hover:transition-all duration-300 text-sm md:text-base mx-24">Resume</li>
                        </Link>
                    </ul>
                </div>}
                {/* end mobile */}
                {/* large screens */}
                <ul className='hidden md:flex text-[#3c6e71] gap-6 xl:gap-16 font-medium uppercase items-center cursor-pointer'>
                    <SingleNav title={"Home"} address={"/"} />
                    <SingleNav title={"About"} address={"#about"} />
                    <SingleNav title={"Projects"} address={"#projects"} />
                    <SingleNav title={"Contact"} address={"#contact"} />
                    <Link href={"https://drive.google.com/file/d/1z9T1iUP3Nusx3pnHt2F3e8mFc5SQpKI2/view?usp=sharing"} target="_blank">
                        <li className="border-2 p-2 border-[#6A040F] text-[#6A040F] font-bold hover:shadow-md hover:transition-all duration-300 text-sm md:text-base">Resume</li>
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
            <div className="h-screen">
                <div className="container flex items-center h-full">
                    <div>
                        <h5 className="mb-2 text-[#6A040F] md:text-xl xl:text-2xl">Hello, my name is</h5>
                        <h1 className="uppercase font-bold text-[#264653] text-3xl md:text-5xl">Muwanguzi Joshua</h1>
                        <h2 className="text-[#3c6e71] py-2 text-2xl md:text-4xl xl:text-4xl font-bold mb-4 lg:mb-8">I solve problems with <br></br> <span className="text-[#264653]">Software.</span></h2>
                        {/* <p className="text-[#2b2d42] xl:w-1/2 lg:text-base">I am a versatile software engineer proficient in both frontend and backend web development, with a strong focus on backend technologies. Currently, I serve as a Python backend developer at <span className="text-[#6a040f] font-bold"><a href="https://www.pelrio.com" target="_blank">Pelrio</a></span>, an innovative Italian startup. In this capacity, I am actively involved in the creation of tools that streamline accounting processes for small businesses.</p> */}
                        <Link href={"#contact"}><button className="uppercase mt-4 text-[#6A040F] border-2 p-2 border-[#6A040F] font-bold hover:shadow-md hover:transition-all duration-300 text-base">Contact Me</button></Link>
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
                            With more than 3 years in backend and frontend development, I build solutions with an aim to solve problems and ease operations for businesses, institutions and individuals. The process of building software involves strong collaboration, creativity, learning and self motivation, and this is what always draws me to build things this way.
                            <br />
                            I am currently focussed on building multiple SaaS solutions for businesses at  <span className="text-[#6a040f] font-bold"><a href="https://www.pelrio.com" target="_blank">Pelrio SRL.</a></span>
                            <br />
                            When I am not writing code, I am either reading a book or out taking some pictures while listening to some beautiful music.
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
            <Footer />
        </main>
    </>
    )
}
