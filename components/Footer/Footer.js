import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Footer(){
    return(
    <footer className="container" id="contact">
                <div className="text-center pt-32 pb-32 lg:pt-40 lg:pb-40">
                    <h2 className="font-bold text-[#264653] text-2xl md:text-4xl">Get in touch</h2>
                    <p className="my-4 md:my-8 lg:w-1/2 lg:mx-auto md:text-base text-[#2b2d42]">Please reach out to me about collaborations, opportunities, <br/>or just to say hello. I will be glad to hear from you.</p>
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
                        </div>
                </div>
            </footer>
    )
}