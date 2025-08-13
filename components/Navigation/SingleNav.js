import Link from "next/link"

export default function SingleNav({title, address, handleClick}){
    return(
        <Link href={address}><li onClick={handleClick} className="hover:text-[#6A040F] hover:transition-colors text-lg font-semibold hover:scale-125  sm:hover:scale-100">{title}</li></Link>
    )
}
