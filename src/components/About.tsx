import Image from 'next/image'
import React from 'react'

export function About() {
  return (
    <div className=' flex p-7 gap-10 flex-col 2xl:px-20 xl:px-20'>
      <p className='text-5xl mb-5 sm:mb-2 mt-4 sm:text-center sm:text-4xl 2xl:ml-20 '>About NBNSTIC</p>
      <div className='flex gap-10 w-full flex justify-center items-center'>
        <div className='w-[50%] flex sm:hidden 2xl:w-[35%] 2xl:ml-20'>
          <Image
            src={"/index/NBNCOLLEGE.jpg"}
            alt="GDSC NBNSSOE LOGO"
            width={600}
            height={700}
            className="h-72 w-80 md:w-[100%] lg:w-[100%]"
          />
        </div>
        <div className='flex flex-col text-black w-[65%] sm:text-center sm:w-full 2xl:w-[60%]'>
          <p className='mb-3 text-black dark:text-gray-400 text-xl sm:text-[18px] md:text-[18px] sm:mb-0 2xl:w-[80%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium aspernatur quibusdam
            doloremque animi minus nostrum facere eligendi laborum dolore esse.
          </p>
          <p className='text-black dark:text-gray-400 text-xl sm:text-[18px] md:text-[18px] 2xl:w-[80%]'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, hic! Est,
            voluptatibus! Corrupti libero ab, aut distinctio aperiam quia
            minus laboriosam repellat obcaecati! Ducimus et aliquid deserunt a vero similique?</p>
          <div className="mt-10 md:mt-5 px-3 py-2 text-white bg-blue-500 font-semibold cursor-pointer hover:bg-blue-700 hover:shadow-xl flex items-center justify-center w-[100px] h-10  sm:m-auto sm:mt-5 ">
            SEE MORE
          </div>


        </div>
      </div>
    </div>
  )
}

