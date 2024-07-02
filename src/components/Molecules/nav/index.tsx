"use client"
import { FC , useState} from "react";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";

interface NavPropType {
    className?: string
}


const Nav: FC<NavPropType> = (props) => {
    const {className} = props
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={clsx(" text-accent fixed z-[50] right-0 left-0", className)}>
            <div className=" flex flex-col justify-between items-center m-4 p-4 relative right-0">
                <div className="text-xl absolute left-0 ml-4 font-bold">
                    LOGO
                </div>
                <div className="hidden md:flex gap-20 mr-20 font-light items-center absolute right-0">
                    <Link href="/" className="hover:bg-accent hover:text-primary px-3 py-2 flex items-center justify-center text-center">Home</Link>
                    <Link href="/service" className="flex items-center justify-center px-3 py-2 hover:bg-accent hover:text-primary">Service</Link>
                    <Link href="/rating" className="flex items-center justify-center px-3 py-2 hover:bg-accent hover:text-primary">Rating</Link>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-accent focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden flex flex-col gap-4 items-center pb-4">
                    <Link href="/" className="hover:bg-accent hover:text-primary px-3 py-2 flex items-center justify-center text-center w-full">Home</Link>
                    <Link href="/service" className="flex items-center justify-center px-3 py-2 hover:bg-accent hover:text-primary w-full">Service</Link>
                    <Link href="/rating" className="flex items-center justify-center px-3 py-2 hover:bg-accent hover:text-primary w-full">Rating</Link>
                </div>
            )}
        </nav>



    )
}


export default Nav