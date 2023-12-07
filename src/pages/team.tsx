import { Card } from 'flowbite-react'
import React from 'react'
import { GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'

function team() {
  const data = [
    {
      member: "Arjun Rathod",
      position: "Web Devloper",
      img: "/index/arjunrathod.png",
      github: "",
      linkedIn: "",
      twitter: ""
    },
    {
      member: "Arjun Rathod",
      position: "Web Devloper",
      img: "",
      github: "",
      linkedIn: "",
      twitter: ""
    },
    {
      member: "Arjun Rathod",
      position: "Web Devloper",
      img: "",
      github: "",
      linkedIn: "",
      twitter: ""
    },
    {
      member: "Arjun Rathod",
      position: "Web Devloper",
      img: "",
      github: "",
      linkedIn: "",
      twitter: ""
    },
    {
      member: "Arjun Rathod",
      position: "Web Devloper",
      img: "",
      github: "",
      linkedIn: "",
      twitter: ""
    },
    {
      member: "Arjun Rathod",
      position: "Web Devloper",
      img: "",
      github: "",
      linkedIn: "",
      twitter: ""
    },

  ]
  return (
    <div className='bg-white'>
      <div className='bg-purple-500 w-full p-5 flex-wrap'>
        <p className='text-center p-8 text-5xl text-medium text-white'>Meet The Team</p>
        <p className='text-2xl text-white text-medium text-center'>Every member of the society has always been passionate and hard working towards their goal, creating a positive work environment. Their support and will to help each other out in every way possible is what makes NBNSTIC a "team".</p>
      </div>
      <div>
        <p className='text-5xl text-gray-900 font-normal text-start mt-10 pl-20'>GDSC LEAD 2023</p>
        <div className="flex gap-5 justify-center mt-10">
          <Card
            className="max-w-xs mb-5 hover:shadow-red-300 shadow-xl"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="/index/profile.jpg"
          >
            <h5 className="text-2xl text-center font-bold tracking-tight text-gray-800 dark:text-white">
              Arjun Rathod
            </h5>
            <p className="font-normal text-xl  text-center text-gray-700 dark:text-gray-400 font-semibold">
              Lead(2023)
            </p>
            <div className='flex gap-2 ml-24'>
              <Link href=""><GitHub /></Link>
              <Link href=""><Instagram /></Link>
              <Link href=""><LinkedIn /></Link>
            </div>
          </Card>
        </div>
        <hr className="" />
        <div>
          <p className='text-5xl text-gray-900 font-normal text-start mt-10 pl-20'>Members from 4th Year </p>
          <div className="flex flex-wrap gap-14 justify-center mt-10 pl-20 pr-20">
            {data.map((item) => (
              <>
                <div className='flex-col shadow-2xl rounded-xl hover:shadow-red-200 mb-10'>
                  <Image
                    src={item.img}
                    alt="GDSC NBNSSOE LOGO"
                    width={250}
                    height={250}
                    className='justify-center'
                  />
                  <div className='p-5'>
                    <h5 className="text-2xl text-center font-bold tracking-tight text-gray-800 dark:text-white mb-3">
                      {item.member}
                    </h5>
                    <p className="font-normal text-center text-gray-700 dark:text-gray-400 mb-3 font-semibold">
                      {item.position}
                    </p>
                    <div className='flex gap-2 ml-14'>
                      <Link href={item.github}><GitHub /></Link>
                      <Link href={item.twitter}><Twitter /></Link>
                      <Link href={item.linkedIn}><LinkedIn /></Link>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>



        </div>
        <hr className="" />
        <div>
          <p className='text-5xl text-gray-900 font-normal text-start mt-10 pl-20'>Members from 3rd Year </p>
          <div className="flex flex-wrap gap-14 justify-center mt-10 pl-20 pr-20">
            {data.map((item) => (
              <>
                <div className='flex-col shadow-2xl rounded-xl hover:shadow-red-200 mb-5'>
                  <Image
                    src={item.img}
                    alt="GDSC NBNSSOE LOGO"
                    width={250}
                    height={250}
                    className='justify-center'
                  />
                  <div className='p-5'>
                    <h5 className="text-2xl text-center font-bold tracking-tight text-gray-800 dark:text-white mb-3">
                      {item.member}
                    </h5>
                    <p className="font-normal text-center text-gray-700 dark:text-gray-400 mb-3 font-semibold">
                      {item.position}
                    </p>
                    <div className='flex gap-2 ml-14'>
                      <Link href={item.github}><GitHub /></Link>
                      <Link href={item.twitter}><Twitter /></Link>
                      <Link href={item.linkedIn}><LinkedIn /></Link>
                    </div>
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

export default team
