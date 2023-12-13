'use-client';

import { Facebook, GitHub, Instagram, LinkedIn, Twitter, YouTube } from '@mui/icons-material';
import { Footer } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';

export default function RootFooter() {

    return (
        <Footer>
            <div className='flex-col justify-center align-center w-full'>
                <div className='flex w-full justify-center'>
                    <Image
                        src={"/gdsc-nbn-liner.png"}
                        alt="GDSC NBNSSOE LOGO"
                        width={700}
                        height={700}
                        className=''
                    />
                </div>
                <p className='text-5xl text-center font-semibold'>Quick Links</p>
                <div className='flex flex-wrap gap-20 justify-center mt-10'>
                    <Link href='/' className='text-xl text-black hover:bg-black hover:text-white p-1 cursor-pointer w-20 text-center font-normal'>HOME</Link>
                    <Link href='/events' className='text-xl text-black hover:bg-black hover:text-white p-1 cursor-pointer w-20 text-center font-normal'>EVENTS</Link>
                    <Link href='/team' className='text-xl text-black hover:bg-black hover:text-white p-1 cursor-pointer w-20 text-center font-normal'>TEAM</Link>
                    <Link href='/projects' className='text-xl text-black hover:bg-black hover:text-white p-1 cursor-pointer w-26 text-center font-normal'>PROJECTS</Link>
                    <Link href='/alumni' className='text-xl text-black hover:bg-black hover:text-white p-1 cursor-pointer w-26 text-center font-normal'>Alumni</Link>

                </div>
                <div className="flex justify-center gap-14 mt-10 mb-5">
                    {/* <Footer.Icon href="#" className='social text-gray-500 hover:text-black cursor-pointer' icon={BsFacebook} />
                    <Footer.Icon href="#" className='text-gray-500 hover:text-black cursor-pointer' icon={BsInstagram} />
                    <Footer.Icon href="#" className='text-gray-500 hover:text-black cursor-pointer' icon={BsTwitter} />
                    <Footer.Icon href="#" className='text-gray-500 hover:text-black cursor-pointer' icon={BsGithub} />
                    <Footer.Icon href="#" className='text-gray-500 hover:text-black cursor-pointer' icon={BsDribbble} /> */}
                    <Link href="" className='p-2 bg-gray-300 hover:bg-black rounded-full '><Twitter className="text-3xl text-gray-500 hover:text-white"/></Link>
                    <Link href="" className='p-2 bg-gray-300 hover:bg-black rounded-full '><Instagram className="text-3xl text-gray-500 hover:text-white" /></Link>
                    <Link href="" className='p-2 bg-gray-300 hover:bg-black rounded-full '><LinkedIn className="text-3xl text-gray-500 hover:text-white" /></Link>
                    <Link href="" className='p-2 bg-gray-300 hover:bg-black rounded-full '><YouTube className="text-3xl text-gray-500 hover:text-white" /></Link>
                    <Link href="" className='p-2 bg-gray-300 hover:bg-black rounded-full '><Facebook className="text-3xl text-gray-500 hover:text-white" /></Link>
                </div>
                <hr/>
                <div className="flex justify-center sm:item m-5">
                    <Footer.Copyright href="#" by="NBNGDSC™" className="text-xl" year={2023} />
                </div>
            </div>
        </Footer>
    );
}