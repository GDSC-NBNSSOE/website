'use-client';

import Image from "next/image";
import Link from 'next/link';
import { Button, Navbar } from 'flowbite-react';
import { useRouter } from "next/router";



export default function RootNavbar() {

    const router = useRouter();
    const currentRoute = router.pathname;

    return (
        <Navbar fluid rounded className="p-0 m-0">
            <Navbar.Brand href="https://flowbite-react.com">
                <Image 
                    src={"/gdsc-nbn-liner.png"}
                    alt="GDSC NBNSSOE LOGO"
                    width={600}
                    height={600}
                />
            </Navbar.Brand>
            <Navbar.Collapse className="pr-[200px]">
                <Link href="/" className={currentRoute === '/' ? 'text-red-700 text-xl font-bold' : 'text-black text-xl'}>Home</Link>
                <Link href="/projects" className={currentRoute === '/projects' ? 'text-red-700 text-xl font-bold' : 'text-black text-xl'}>Projects</Link>
                <Link href="/team" className={currentRoute === '/team' ? 'text-red-700 text-xl font-bold' : 'text-black text-xl'}>Team</Link>
                <Link href="/events" className={currentRoute === '/events' ? 'text-red-700 text-xl font-bold' : 'text-black text-xl'}>Events</Link>
                <Link href="/alumni" className={currentRoute === '/alumni' ? 'text-red-700 text-xl font-bold' : 'text-black text-xl'}>Alumni</Link>
            </Navbar.Collapse>
        </Navbar>

    );
}