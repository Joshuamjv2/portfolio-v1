import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";


export default function SingleProject({title, detail, github, live, image}) {
    const slider_style = {
        'backgroundImage':`linear-gradient(to bottom, rgba(0,0,0,0) 25%, rgba(0,0,0,1)), ${image}`,
        'backgroundSize': 'cover', 
        'backgroundRepeat': 'no-repeat', 
        'backgroundPosition': 'center', 
        // 'height': '100vh',
        // "overflow": "hidden"
    }

    return (

        <div className="md:flex gap-4">
            <div className="w-full md:w-10/12 h-96 relative" style={slider_style}>{/* Single project go here. */}
                <div className="lg:mx-16 xl:mx-36 -bottom-20 xl:-bottom-16 absolute bg-[#fff] shadow-md">
                    <div className="py-4 px-12">
                        <h4 className="text-[#3c6e71] text-base md:text-xl font-bold">{title}</h4>
                        <p className='py-2 text-sm md:text-base'>{detail}</p>
                        <div className='flex justify-between'>
                            <div className='lg:hidden'></div>
                            <ul className="flex justify-between gap-8">
                                {github && <li className="cursor-pointer"><FontAwesomeIcon icon={['fab', 'twitter']} style={{ fontSize: 20, color: "#6A040F" }}/></li>}
                                {live && <li className="cursor-pointer"><FontAwesomeIcon icon={['fab', 'github']} style={{ fontSize: 20, color: "#6A040F" }}/></li>}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className=''>
                <ul className='text-[#2b2d42] hidden md:flex flex-col gap-2 border-2 border-[#6A040F] py-2 px-4'>
                    <li>Javascript</li>
                    <li>Python</li>
                    <li>Fast API</li>
                    <li>Next JS</li>
                </ul>
            </div>
        </div>
    )
}