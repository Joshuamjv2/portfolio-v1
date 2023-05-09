import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from 'next/link';


export default function SingleProject({title, detail, github, live, image, stack}) {
    const slider_style = {
        'backgroundImage':`linear-gradient(to bottom, rgba(0,0,0,0) 25%, rgba(0,0,0,1)), ${image}`,
        'backgroundSize': 'cover', 
        'backgroundRepeat': 'no-repeat', 
        'backgroundPosition': 'center', 
        // 'height': '100vh',
        // "overflow": "hidden"
    }

    return (

        <div className="md:flex gap-4 relative">
            <div className="w-full md:w-10/122 h-96 relative" style={slider_style}>{/* Single project go here. */}
                <div className="lg:mx-16 xl:mx-36 -bottom-20 xl:-bottom-16 absolute bg-[#fff] shadow-md">
                    <div className="p-4 md:px-12">
                        <h4 className="text-[#3c6e71] text-base md:text-xl font-bold">{title}
                            <span className='px-6'>
                                    {github && <Link href={live}><FontAwesomeIcon icon={['fa', 'external-link']} style={{ fontSize: 18, color: "#6A040F" }}/></Link>}
                            </span>
                            <span>
                                {live &&<Link href={github}><FontAwesomeIcon icon={['fab', 'github']} style={{ fontSize: 18, color: "#6A040F" }}/></Link>}
                            </span>
                        </h4>
                        <p className='py-2 text-sm md:text-base'>{detail}</p>
                        <p className='text-[#3c6e71] font-semibold'>Stack: <span className='font-semibold text-[#000]'>{stack}</span></p>
                    </div>
                </div>
            </div>

            <div className='hidden'>
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
