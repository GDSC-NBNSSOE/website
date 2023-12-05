import Image from 'next/image'
import React from 'react'

export function Newsletter() {
  return (
    <div className="w-full px-[200px] p-10 bg-gray-100 flex">
    <div>
      <p className="text-5xl text-gray-900 font-normal mt-10">Join Our Newsletter</p>
      <p className="italic mt-1 ml-40">Letest Information on your fingertips !</p>
          <form action="" className="p-1 h-20 w-[100%] bg-white mt-10 rounded-2xl shadow-xl flex justify-center align-center">
            <input className="border-none mr-10 " type="text" placeholder="eg. xyz@gmail.com" />
            <div className="mt-5 ml-5 text-white bg-amber-500 rounded-2xl font-semibold cursor-pointer hover:text-white hover:bg-yellow-500 flex items-center justify-center w-[100px] h-10 shadow-xl">
        Subscribe
      </div>
          </form>
    </div>
    <div className="ml-40">
      <Image
          src={"/index/cloud.png"}
          alt="GDSC NBNSSOE LOGO"
          width={350}
          height={500}
          className="h-[210px]"
        />
    </div>
  </div>
  )
}
