import Image from 'next/image'
import React from 'react'

export function About() {
  return (
    <div className='flex w-full justify-around px-[200px] p-7'>
      <div className='flex flex-col text-black w-full'>
          <p className='text-5xl'>About NBNSTIC</p>
          <Image
            src={"/index/NBNCOLLEGE.jpg"}
            alt="GDSC NBNSSOE LOGO"
            width={350}
            height={500}
            className="h-[250px] mt-10"
          />

        </div>
        <div className='flex flex-col text-black w-full mt-5'>
          <p className='mb-3 text-black dark:text-gray-400 text-xl mt-20'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium aspernatur quibusdam 
          doloremque animi minus nostrum facere eligendi laborum dolore esse.
          </p>
          <p className='text-black dark:text-gray-400 text-xl'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, hic! Est, 
          voluptatibus! Corrupti libero ab, aut distinctio aperiam quia 
          minus laboriosam repellat obcaecati! Ducimus et aliquid deserunt a vero similique?</p>
          <div className="mt-10 px-3 py-2 text-white bg-blue-500 font-semibold cursor-pointer hover:bg-blue-700 hover:shadow-xl flex items-center justify-center w-[100px] h-10 ">
            SEE MORE
          </div>


        </div>
    </div>
  )
}

