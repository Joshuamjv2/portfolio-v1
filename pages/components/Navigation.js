import Image from "next/image"
import logo from "../../public/images/josh-logo-done2.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navigation(){
    return (
    <>
        <div className="h-screen">
        {/* Navigation  */}
            <div className='flex items-center justify-between px-12 md:px-24 pt-4 md:pt-8'>
                <Image src={logo} height={60} className="md:h-20 w-auto"/>
                <ul className='md:flex text-[#3c6e71] gap-6 xl:gap-24 font-medium uppercase hidden md:visible items-center cursor-pointer'>
                    <li className="hover:text-[#6A040F] hover:transition-colors">About</li>
                    <li className="hover:text-[#6A040F] hover:transition-colors">Experience</li>
                    <li className="hover:text-[#6A040F] hover:transition-colors">Projects</li>
                    <li className="hover:text-[#6A040F] hover:transition-colors">Contact</li>
                    <li className="border-2 p-2 border-[#6A040F] text-[#6A040F] font-bold hover:shadow-md hover:transition-all duration-300">Resume</li>
                </ul>
            </div>
        {/* Hero section */}
           <div className="container hero flex items-center">
                <div>
                    <h5 className="mb-2 text-[#6A040F] md:text-xl xl:text-2xl">Hello there, my name is</h5>
                    <h1 className="uppercase font-bold text-[#264653] text-3xl md:text-5xl lg:text-6xl">Muwanguzi Joshua.</h1>
                    <h2 className="text-[#3c6e71] py-2 xl:py-4 text-2xl md:text-4xl xl:text-5xl font-bold">I build software for the web.</h2>
                    <p className="text-[#2b2d42] xl:w-1/2 lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab natus enim itaque, harum iusto eum tempora voluptate aut quia consequuntur veritatis eos corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non labore nulla natus quas illum eligendi!</p>
                    <button className="uppercase mt-4 xl:mt-8 text-[#6A040F] border-2 p-2 border-[#6A040F] font-bold hover:shadow-md hover:transition-all duration-300">Contact Me</button>
                </div>
            </div>
        </div>


        <main>
        {/* About Section */}
            <section className="container pb-24 md:pb-36">
                <h2 className="text-3xl md:text-5xl font-bold text-[#264653] mb-2 md:mb-8"><span className="text-6xl md:text-8xl text-[#6A040F]">.</span>About Me</h2>
                <div className="xl:flex justify-between">
                    <div className="xl:w-1/2">
                        <h3 className="text-[#3c6e71] text-2xl md:text-3xl font-bold pb-2 md:pb-6">My Background</h3>
                        <p className="text-[#2b2d42] xl:pr-12 md:text-xl lg:pb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati iure asperiores quisquam reprehenderit architecto iste laborum fugiat illum, vitae similique, et dignissimos vel! Atque alias, saepe libero modi omnis error?<br/><br/> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora mollitia doloribus natus possimus sed laborum assumenda commodi alias iste. Soluta, eum voluptas perspiciatis error id cupiditate hic impedit nobis nisi! <br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, vel.</p>
                    </div>
                    <div className="mt-8 xl:mt-0 xl:w-1/2">
                        <h3 className="text-[#3c6e71] text-2xl md:text-3xl font-bold pb-2 md:pb-6">My Skills</h3>
                        <ul className="md:grid md:grid-cols-3 gap-4 flex flex-col">
                            <li className="bg-[#f8f9fa] border-2 border-[#6A040F] px py-2 text-[#2b2d42] text-center text-xl  rounded bg-opacity-70 shadow-md">React</li>
                            <li className="bg-[#f8f9fa] border-2 border-[#6A040F] px py-2 text-[#2b2d42] text-center text-xl  rounded bg-opacity-70 shadow-md">Python</li>
                            <li className="bg-[#f8f9fa] border-2 border-[#6A040F] px py-2 text-[#2b2d42] text-center md:text-xl  rounded bg-opacity-70 shadow-md">Javascript</li>
                            <li className="bg-[#f8f9fa] border-2 border-[#6A040F] px py-2 text-[#2b2d42] text-center md:text-xl  rounded bg-opacity-70 shadow-md col-span-2">AWS Lambda</li>
                            <li className="bg-[#f8f9fa] border-2 border-[#6A040F] px py-2 text-[#2b2d42] text-center md:text-xl  rounded bg-opacity-70 shadow-md">Dynamodb</li>
                            <li className="bg-[#f8f9fa] border-2 border-[#6A040F] px py-2 text-[#2b2d42] text-center md:text-xl  rounded bg-opacity-70 shadow-md col-span-2">AWS AppSync</li>
                            <li className="bg-[#f8f9fa] border-2 border-[#6A040F] px py-2 text-[#2b2d42] text-center md:text-xl  rounded bg-opacity-70 shadow-md">Fast API</li>
                            <li className="bg-[#f8f9fa] border-2 border-[#6A040F] px py-2 text-[#2b2d42] text-center md:text-xl  rounded bg-opacity-70 shadow-md">Django</li>
                            <li className="bg-[#f8f9fa] border-2 border-[#6A040F] px py-2 text-[#2b2d42] text-center md:text-xl  rounded bg-opacity-70 shadow-md">SQL</li>
                            <li className="bg-[#f8f9fa] border-2 border-[#6A040F] px py-2 text-[#2b2d42] text-center md:text-xl  rounded bg-opacity-70 shadow-md">SQL</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="container pb-24 md:pb-36">
                <h2 className="text-3xl md:text-5xl font-bold text-[#264653] mb-2 md:mb-8"><span className="text-6xl md:text-8xl text-[#6A040F]">.</span>My Experience</h2>

            </section>
            <section className="container pb-24 md:pb-36">
                <h2 className="text-3xl md:text-5xl font-bold text-[#264653] mb-2 md:mb-8"><span className="text-6xl md:text-8xl text-[#6A040F]">.</span>My Projects</h2>

            </section>
            <footer className="container">
                <div className="text-center">
                    <h2 className="font-bold text-[#264653] text-4xl">Get in touch</h2>
                    <p className="my-8 md:w-1/2 md:mx-auto text-xl text-[#2b2d42]">Reach out to me about collaborations, opportunities, <br/>music, football, or anything I can help with. <br/>Enjoy your day!!</p>
                    <ul className="flex justify-center gap-12 mb-2">
                        <li className="cursor-pointer"><FontAwesomeIcon icon={['fab', 'github']} style={{ fontSize: 30, color: "#6A040F" }}/></li>
                        <li className="cursor-pointer"><FontAwesomeIcon icon={['fab', 'instagram']} style={{ fontSize: 30, color: "#6A040F" }} /></li>
                        <li className="cursor-pointer"><FontAwesomeIcon icon={['fab', 'twitter']} style={{ fontSize: 30, color: "#6A040F" }} /></li>
                        <li className="cursor-pointer"><FontAwesomeIcon icon={['fab', 'linkedin']} style={{ fontSize: 30, color: "#6A040F" }} /></li>
                    </ul>
                </div>

                <div className="border-t border-[#6A040F] mt-10 md:flex text-center justify-between items-center pb-8 md:pb-12  text-[#3c6e71]">
                        {/* <p>Made By: <span>Muwanguzi Joshua</span></p> */}
                        <p className="font-medium pt-2 md:pt-4 md:text-xl">&copy;{new Date().getFullYear()} <span className="text-[#6A040F] hover:font-medium cursor-pointer font-normal hover:transition-all">Muwanguzi Joshua</span></p>
                        <p className="font-medium pt-2 md:pt-4 md:text-xl">Inspired By: <span className="text-[#6A040F] hover:font-medium cursor-pointer font-normal hover:transition-all">Brittany Chiang</span> & <span className="text-[#6A040F] hover:font-medium cursor-pointer font-normal hover:transition-all">Ram Maheshwari</span></p>
                </div>
            </footer>
        </main>
    </>
    )
}