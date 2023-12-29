import Image from 'next/image'
import React from 'react'

export function Newsletter() {
  return (
    <div className=" bg-gray-100 flex p-10">
      <div className=' w-[50%] 2xl:pl-40 sm:w-full md:w-full'>
        <p className="text-5xl text-gray-900 font-normal sm:text-4xl">Join Our Newsletter</p>
        <p className="italic mt-1 ml-40 sm:ml-20 ">Letest Information on your fingertips !</p>
        <div className='p-1 mt-5 h-20 w-96 bg-white rounded-2xl shadow-xl 2xl:pl-6 flex justify-center items-center sm:w-[80%]'>
        <form action="" className="flex sm:gap-5">
          <input type="text" placeholder="eg. xyz@gmail.com" className='w-[80%] border-none outline-none'/>
          <input type="submit" className="text-white bg-amber-500 rounded-2xl font-semibold cursor-pointer hover:text-white hover:bg-yellow-500 flex justify-center align-center shadow-xl w-[50%] ml-5 "/>
        </form>
        </div>
      </div>
      <div className="sm:hidden md:hidden w-[50%] flex justify-center items-center">
        <Image
          src={"/index/cloud.png"}
          alt="GDSC NBNSSOE LOGO"
          width={350}
          height={500}
          className="h-48 w-64"
        />
      </div>
    </div>
  )
}
