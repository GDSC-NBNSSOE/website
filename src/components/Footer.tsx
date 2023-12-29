'use-client';

import { Facebook, GitHub, Instagram, LinkedIn, Twitter, YouTube } from '@mui/icons-material';
import { Footer } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';

export default function RootFooter() {

    return (
        <Footer>
            <div className='flex-col justify-center align-center'>
                <div className='flex w-full justify-center'>
                    <Image
                        src={"/gdsc-nbn-liner.png"}
                        alt="GDSC NBNSSOE LOGO"
                        width={700}
                        height={700}
                        className='sm:h-32'
                    />
                </div>
                <p className='text-5xl text-center font-semibold sm:text-3xl'>Quick Links</p>
                <div className='flex flex-wrap gap-20 justify-center align-center mt-10 sm:gap-5 md:gap-12 '>
                    <Link href='/' className='text-xl text-black hover:bg-black hover:text-white p-1 cursor-pointer w-20 text-center font-normal sm:text-lg'>HOME</Link>
                    <Link href='/events' className='text-xl text-black hover:bg-black hover:text-white p-1 cursor-pointer w-20 text-center font-normal sm:text-lg'>EVENTS</Link>
                    <Link href='/team' className='text-xl text-black hover:bg-black hover:text-white p-1 cursor-pointer w-20 text-center font-normal sm:text-lg'>TEAM</Link>
                    <Link href='/projects' className='text-xl text-black hover:bg-black hover:text-white p-1 cursor-pointer w-26 text-center font-normal sm:text-lg'>PROJECTS</Link>
                    <Link href='/alumni' className='text-xl text-black hover:bg-black hover:text-white p-1 cursor-pointer w-26 text-center font-normal sm:text-lg'>ALUMNI</Link>

                </div>
                <div className="flex justify-center gap-14 mt-10 mb-5 sm:gap-5">
                    <Link href="" className='p-2 bg-gray-300 hover:bg-black rounded-full '><Twitter className="text-3xl text-gray-500 hover:text-white sm:text-2xl"/></Link>
                    <Link href="" className='p-2 bg-gray-300 hover:bg-black rounded-full '><Instagram className="text-3xl text-gray-500 hover:text-white sm:text-2xl" /></Link>
                    <Link href="" className='p-2 bg-gray-300 hover:bg-black rounded-full '><LinkedIn className="text-3xl text-gray-500 hover:text-white sm:text-2xl" /></Link>
                    <Link href="" className='p-2 bg-gray-300 hover:bg-black rounded-full '><YouTube className="text-3xl text-gray-500 hover:text-white sm:text-2xl" /></Link>
                    <Link href="" className='p-2 bg-gray-300 hover:bg-black rounded-full '><Facebook className="text-3xl text-gray-500 hover:text-white sm:text-2xl" /></Link>
                </div>
                <hr/>
                <div className="flex justify-center sm:item m-5">
                    <Footer.Copyright href="#" by="NBNGDSC™" className="text-xl" year={2023} />
                </div>
            </div>
        </Footer>
    );
}