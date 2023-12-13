import React from 'react'
import { LinkedIn } from '@mui/icons-material'
import { Card } from 'flowbite-react'
import Image from 'next/image'
import Link from 'next/link'


function alumni() {
  const data = [
    {
      member: "Arjun Rathod",
      position: "Web Devloper",
      img:"/index/arjunrathod.png",
      linkedIn:""
    },
    {
      member: "Arjun Rathod",
      position: "Web Devloper",
      img:"",
      linkedIn:""
    },
    {
      member: "Arjun Rathod",
      position: "Web Devloper",
      img:"",
      linkedIn:""
    },
    {
      member: "Arjun Rathod",
      position: "Web Devloper",
      img:"",
      linkedIn:""
    },
    {
      member: "Arjun Rathod",
      position: "Web Devloper",
      img:"",
      linkedIn:""
    },
    {
      member: "Arjun Rathod",
      position: "Web Devloper",
      img:"",
      linkedIn:""
    },

  ]
  return (
    <div className='bg-white'>
      <div className='bg-purple-500 w-full p-5 flex-wrap'>
        <p className='text-center p-8 text-5xl text-medium text-white'>Meet The Alumni</p>
        <p className='text-2xl w-[96] text-white text-medium text-center'>Every member of the society has always been passionate and hard working towards their goal, creating a positive work environment. Their support and will to help each other out in every way possible is what makes GDSC-NBNSTIC a "team"</p>
      </div>
      <div>
        <div>
          <p className='text-4xl text-gray-900 font-semibold text-start mt-10 pl-20'>Alumni</p>
          <p className='text-2xl text-gray-500 font-semibold font-normal text-start mt-10 pl-20'>Batch (2019-2023)</p>

          <div className="flex flex-wrap gap-14 justify-center mt-10 pl-24 pr-24">
            {data.map((item) => (
              <>
                <div className='flex-col p-9 shadow-2xl rounded-xl hover:shadow-red-200'>
                  <Image
                    src={item.img}
                    alt="GDSC NBNSSOE LOGO"
                    width={140}
                    height={140}
                    className='rounded-full justify-center mb-5 mt-2 ring-blue-400 ring-2'
                  />
                <h5 className="text-2xl text-center font-bold tracking-tight text-gray-800 dark:text-white">
                  {item.member}
                </h5>
                <p className="font-normal text-center text-gray-700 dark:text-gray-400 font-semibold mt-2">
                  {item.position}
                </p>
                <div className='flex gap-2 ml-[44%] mt-2'>
                  <Link href={item.linkedIn}><LinkedIn /></Link>
                </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default alumni


