'use client'
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/netflix_logo.svg"
import { usePathname } from "next/navigation";
import { Bell, Search } from "lucide-react";
import UserNav from "./UserNav";

interface linkProps {
    name: string
    href: string
}

const links: linkProps[] = [
    {
        name: 'Główna',
        href: '/home',
    },
    {
        name: 'Seriale i programy',
        href: '/home/shows',
    },
    {
        name: 'Filmy',
        href: '/home/movies',
    },
    {
        name: 'Nowe i popularne',
        href: '/home/recently',
    },
    {
        name: 'Moja lista',
        href: '/home/user/list',
    }
]

export default function Navbar(){
    const pathName = usePathname()

    return (
        <div className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
            <div className="flex items-center">
                <Link href="/home" className="w-32">
                    <Image src={Logo} alt="netflix" priority/>
                </Link>
                <ul className="lg:flex gap-x-4 ml-14 hidden">
                    {links.map((link, idx) => (
                        <div key={idx}>
                            {pathName === link.href ? (
                                <li>
                                    <Link href={link.href} className="text-white font-semibold underline text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ) : (
                                <li>
                                    <Link href={link.href} className="text-gray-300 font-normal text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            )}
                        </div>
                    ))}
                </ul>
            </div>
            <div className="flex items-center gap-x-8">
                <Search className="w-5 h-5 text-gray-300 cursor-pointer" /> 
                <Bell className="w-5 h-5 text-gray-300 cursor-pointer"/> 
                <UserNav />
            </div>
        </div>
    )
}