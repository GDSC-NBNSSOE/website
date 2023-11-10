import Image from 'next/image'
import { Inter } from 'next/font/google'
import { HiCursorClick } from "react-icons/hi"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="p-0 m-0 w-screen h-screen mt-[50px]">

      <div className='flex w-full justify-around px-[200px]'>
        <div className='flex flex-col text-black w-full pt-20'>

          <p className='text-5xl font-bold text-gray-800'>GDSC NBNSSOE PUNE</p>
          <p className='w-[70%] mt-7 text-xl font-extrabold spacing text-gray-600 font-sans'>
            A community of <span className='text-green-500'>Developers</span>, <span className='text-red-500'>Designers</span> and <span className='text-blue-500'>Programmers</span> who grow their knowledge in a peer-to-peer 
            learning environment and build solutions for local businesses and their community.
          </p>

          <div className="mt-10 border-2 border-green-500 rounded-lg px-3 py-2 text-green-500 font-semibold cursor-pointer hover:bg-green-500 hover:text-green-200 flex items-center justify-center w-[200px] shadow-lg hover:shadow-xl">
            <HiCursorClick size="25" className="mr-2 flex items-center"/>            
            Join Us
          </div>

        </div>

        <div className='w-full flex justify-end '>
          <Image 
              src={"/index/main.gif"}
              alt="GDSC NBNSSOE LOGO"
              width={700}
              height={800}
          />
        </div>
      </div>

    </div>
  )
}
