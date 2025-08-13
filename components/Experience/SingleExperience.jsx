import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from 'next/link';

export default function SingleExperience({title, detail, duration}){
    return(
        <div className='flex flex-col lg:flex-row md:gap-4 lg:items-center'>
            <div className='pt-4 md:pt-0'>
                <h2 className='text-[#6A040F] text-xl font-bold'>{title} - {duration}</h2>
                <p className='lg:mb-6 my-2 md:my-0 md:mb-1 xl:w-4/5'>{detail}</p>
                {/* <p className='text-[#3c6e71] font-semibold'>Stack: <span className='font-semibold text-[#000]'>{stack}</span></p> */}
            </div>
        </div>
    )
}