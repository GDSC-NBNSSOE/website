import { Card } from 'flowbite-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function events() {
  const data = [
    {
      title: "Generative dog",
      tech: "Html",
      author: "Arjun Rathod",
      desc: "This project generated us fake images of dogs Adversial Networks. Our project is based on the concept of GAN(Generative Adversarial Networks). We have trained our model to differentiate between fake and real dog images using GAN.",
      img: "https://dscakgec.org/static/media/GAN_IMG.2ffa82212d09d0c710b6.png",
      url: "www.google.com"
    },
    {
      title: "Generative dog",
      desc: "This project generated us fake images of. Our project is based on the concept of GAN(Generative Adversarial Networks). We have trained our model to differentiate between fake and real dog images using GAN.",
      img: "https://dscakgec.org/static/media/GAN_IMG.2ffa82212d09d0c710b6.png",
      url: "www.google.com"
    },
  ]
  return (
    <div className='bg-white'>
      <div className='bg-purple-500 w-full p-5 flex-wrap'>
        <p className='text-center p-8 text-5xl text-medium text-white'>Events</p>
        <p className='text-2xl text-white text-medium text-center'>Our team has worked upon a lot of creative projects, turning ideas into reality.</p>
      </div>
      <div className="flex flex-wrap gap-10 justify-center mt-20">
      {
        data.map((item) => (
          <>
          <Card
          className="max-w-xs"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="/index/projects.jpg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
            {item.title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {item.desc}
          </p>
          <div className="mt-1 rounded-lg px-3 py-2 text-blue-500 font-semibold cursor-pointer hover:bg-blue-100 flex items-center justify-center w-[80px] h-10 ">
            Read
          </div>
        </Card>
          </>
        ))
      }
      </div>
      <hr className='mt-10'/>

    </div>
  )
}

export default events