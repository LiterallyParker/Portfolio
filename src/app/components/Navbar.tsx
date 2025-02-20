"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    console.log(pathname)

    return (
        <nav className="fixed left-0 top-0 h-screen z-10 w-48 bg-gray-800 text-white p-6 flex flex-col justify-start space-y-6">
            <div className="text-2xl font-bold font-serif text-center">
                <Link href="/">Parker Townsend</Link>
            </div>
            <div className="flex flex-col items-center space-y-4">
                <Link href="/" className={`hover:text-gray-400 ${pathname === "/" ? "underline" : ""}`}>Home</Link>
                <Link href="/about" className={`hover:text-gray-400 ${pathname === "/about" ? "underline" : ""}`}>About</Link>
                <Link href="/projects" className={`hover:text-gray-400 ${pathname === "/projects" ? "underline" : ""}`}>Projects</Link>
                <Link href="/contact" className={`hover:text-gray-400 ${pathname === "/contact" ? "underline" : ""}`}>Contact</Link>
            </div>
        </nav>
    )
}