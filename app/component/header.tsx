import Link from "next/link"
export default function Header(){
 return(
    <div className="bg-[#132a13] w-[100%]">
        
        <ul className="flex place-content-center ">
            <li className="m-3 text-[#ecf39e] text-lg"><Link href="/">Home</Link></li>
            <li className="m-3 text-[#ecf39e] text-lg"><Link href="../about">About</Link></li>
            <li className="m-3 text-[#ecf39e] text-lg"><Link href="../contect-us">Contact Us</Link></li>
        </ul>
    </div>
 )
}


