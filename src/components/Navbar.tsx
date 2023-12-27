'use-client';

import Image from "next/image";
import Link from 'next/link';
import { Button, Navbar } from 'flowbite-react';
import { useRouter } from "next/router";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import Sidebar from "./Sidebar";



export default function RootNavbar() {
    const [toggle,setToggle] = useState(false)

    const router = useRouter();
    const currentRoute = router.pathname;

    return (
        <div className="w-full bg-white h-24 flex md:justify-center sm:justify-center relative">
            <div className="w-[60%] sm:w-full md:w-full h-full">
                <Image
                    src={"/gdsc-nbn-liner.png"}
                    alt="GDSC NBNSSOE LOGO"
                    width={600}
                    height={600}
                />
            </div>
            <div className="w-[40%] h-full md:hidden sm:hidden flex justify-center gap-5 items-center">
                <Link href="/" className={currentRoute === '/' ? 'text-red-700 text-xl font-bold' : 'text-black text-xl'}>Home</Link>
                <Link href="/projects" className={currentRoute === '/projects' ? 'text-red-700 text-xl font-bold' : 'text-black text-xl'}>Projects</Link>
                <Link href="/team" className={currentRoute === '/team' ? 'text-red-700 text-xl font-bold' : 'text-black text-xl'}>Team</Link>
                <Link href="/events" className={currentRoute === '/events' ? 'text-red-700 text-xl font-bold' : 'text-black text-xl'}>Events</Link>
                <Link href="/alumni" className={currentRoute === '/alumni' ? 'text-red-700 text-xl font-bold' : 'text-black text-xl'}>Alumni</Link>
            </div>
            <div className="lg:hidden xl:hidden 2xl:hidden absolute top-4 left-2" onClick={()=>setToggle(!toggle)}><MenuIcon className="text-4xl" /></div>
            {toggle && <Sidebar toggle={toggle} setToggle={setToggle} currentRoute={currentRoute}/>}

        </div>
    );
}