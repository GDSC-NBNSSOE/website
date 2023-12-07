import { GitHub } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'


export default function Projects() {

  const data = [
    {
      title: "Generative dog",
      tech: "Html",
      tech2:"CSS",
      author: "Arjun Rathod",
      desc: "This project generated us fake images of dogs learnt from real ones that exists using Generative Adversial Networks. Our project is based on the concept of GAN(Generative Adversarial Networks). We have trained our model to differentiate between fake and real dog images using GAN.",
      img: "https://dscakgec.org/static/media/GAN_IMG.2ffa82212d09d0c710b6.png",
      gitHub: "www.google.com"
    },
    {
      title: "Generative dog",
      tech: "Html",
      tech2:"Javascript",
      author: "Arjun Rathod",
      desc: "This project generated us fake images of dogs learnt from real ones that exists using Generative Adversial Networks. Our project is based on the concept of GAN(Generative Adversarial Networks). We have trained our model to differentiate between fake and real dog images using GAN.",
      img: "https://dscakgec.org/static/media/GAN_IMG.2ffa82212d09d0c710b6.png",
      gitHub: "www.google.com"
    },
  ]
  return (
    <div className='bg-white'>
      <div className='bg-purple-500 w-full h-60'>
        <p className='text-center p-8 text-5xl text-medium text-white'>Projects</p>
        <p className='text-2xl text-white text-medium text-center'>Our team has worked upon a lot of creative projects, turning ideas into reality.</p>
      </div>
      <div className="flex flex-wrap gap-14 justify-center mt-10">
      {
        data.map((item) => (
          <>
            <div className='flex flex-wrap justify-around w-[70%] p-5 shadow-xl rounded-xl mt-20 '>
              <div>
                <Image
                  src={'/index/main.gif'}
                  alt=""
                  width={500}
                  height={300}
                />
              </div>
              <div className='w-[50%]'>
                <p className='text-3xl text-black font-semibold text-medium mt-5'>{item.title}</p>
                <div className='flex gap-2'>
                <p className='text-sm text-black bg-red-400 font-normal text-center p-1 w-20 mt-5'>{item.tech}</p>
                <p className='text-sm text-black bg-red-400 font-normal text-center p-1 w-20 mt-5'>{item.tech2}</p>
                </div>
                <p className='text-sm text-red bg-gray-300 font-normal text-center p-1 w-24 mt-3'>{item.author}</p>
                <p className='text-xl text-sm mt-5'>{item.desc}</p>
                <div className="mt-5 px-3 py-2 text-white bg-black font-semibold cursor-pointer hover:bg-white hover:text-black rounded-xl hover:shadow-xl flex items-center justify-center w-[100px] h-10 ">
                  <Link href={item.gitHub}><GitHub className='text-xl mr-1 mb-1'/>Github</Link>
                </div>

              </div>
            </div>
          </>
        ))
      }
      </div>

    </div>
  )
}
