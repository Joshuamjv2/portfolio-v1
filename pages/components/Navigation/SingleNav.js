import Link from "next/link"

export default function SingleNav({title, address}){
    return(
        <Link href={address}><li className="hover:text-[#6A040F] hover:transition-colors text-sm md:text-base">{title}</li></Link>
    )
}