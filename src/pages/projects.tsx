import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Projects() {
  return (
    <div className="p-0 m-0 w-screen h-screen mt-[100px]">

      <div className='flex w-full justify-between px-[200px]'>
        <div className='flex flex-col text-black'>

          <p className='text-4xl font-bold'>GDSC NBNSSOE PUNE</p>
          <p className=''>
             community.
          </p>
        </div>

        <div className=''>
          <Image 
              src={"/index/main.gif"}
              alt="GDSC NBNSSOE LOGO"
              width={800}
              height={800}
          />
        </div>
      </div>

    </div>
  )
}
