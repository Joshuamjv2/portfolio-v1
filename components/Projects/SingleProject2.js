import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from 'next/link';

export default function Project({title, detail, live, image, stack,  github = null}){
    return(
        <div className='flex flex-col md:flex-row md:gap-4 lg:gap-12 lg:items-center'>
            <div className='md:w-2/4 xl:w-3/5 border'>
            <Link href={live}>
                <Image className='w-full md:h-48 lg:h-96 cursor-pointer' src={image} style={{objectFit: "cover"}} />
            </Link>
            </div>
            <div className='md:w-2/4 pt-4 md:pt-0'>
                <h2 className='text-[#3c6e71] text-xl lg:text-2xl font-bold lg:mb-6'>{title}
                    <span>
                        {github && <Link href={github}><FontAwesomeIcon icon={['fab', 'github']} className='px-4' style={{ fontSize: 18, color: "#6A040F" }}/></Link>}
                    </span>
                    <span>
                        {live &&<Link href={live}><FontAwesomeIcon icon={['fa', 'external-link']} className='px-4' style={{ fontSize: 18, color: "#6A040F" }}/></Link>}
                    </span>
                </h2>
                <p className='lg:mb-6 my-2 md:my-0 md:mb-1'>{detail}</p>
                <p className='text-[#3c6e71] font-semibold'>Stack: <span className='font-semibold text-[#000]'>{stack}</span></p>
            </div>
        </div>
    )
}