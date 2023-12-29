import { GitHub} from '@mui/icons-material'
import LaptopIcon from '@mui/icons-material/Laptop';
import Image from 'next/image'
import Link from 'next/link'


export default function Projects() {

  const data = [
    {
      title: "Generative dog",
      tech: "Html",
      tech2: "CSS",
      author: "Arjun Rathod",
      desc: "This project generated us fake images of dogs learnt from real ones that exists using Generative Adversial Networks. Our project is based on the concept of GAN(Generative Adversarial Networks). We have trained our model to differentiate between fake and real dog images using GAN.",
      img: "https://dscakgec.org/static/media/GAN_IMG.2ffa82212d09d0c710b6.png",
      gitHub: "www.google.com"
    },
    {
      title: "Generative dog",
      tech: "Html",
      tech2: "Javascript",
      author: "Arjun Rathod",
      desc: "This project generated us fake images of dogs learnt from real ones that exists using Generative Adversial Networks. Our project is based on the concept of GAN(Generative Adversarial Networks). We have trained our model to differentiate between fake and real dog images using GAN.",
      img: "https://dscakgec.org/static/media/GAN_IMG.2ffa82212d09d0c710b6.png",
      gitHub: "www.google.com"
    },
  ]
  return (
    <div className='bg-white'>
      <div className='bg-purple-500 w-full h-60 p-5'>
        <p className='text-center p-8 text-5xl text-medium text-white'>Projects</p>
        <p className='text-2xl text-white text-medium text-center'>Our team has worked upon a lot of creative projects, turning ideas into reality.</p>
      </div>
      <div className="flex flex-wrap gap-10 justify-center mt-10">
        {
          data.map((item) => (
            <>
              <div className='flex w-[70%] sm:w-[90%] p-3 shadow-xl rounded-xl mt-20 sm:mt-5 gap-2 sm:flex-col md:flex-col md:p-5 lg:md-8 lg:flex-col'>
                <div className='w-[50%] flex justify-center items-center sm:w-full md:w-full lg:w-full'>
                  <Image
                    src={'/index/main.gif'}
                    alt=""
                    width={500}
                    height={300}
                    className='w-[80%] h-[80%]'
                  />
                </div>
                <div className='w-[50%] sm:w-full sm:p-4 md:w-full lg:w-full'>
                  <p className='text-3xl text-black font-semibold text-medium mt-5 sm:text-2xl sm:mt-0'>{item.title}</p>
                  <div className='flex gap-2'>
                    <p className='text-sm text-black bg-red-400 font-normal text-center p-1 w-20 mt-5 sm:text-xs sm:w-15'>{item.tech}</p>
                    <p className='text-sm text-black bg-red-400 font-normal text-center p-1 w-20 mt-5 sm:text-xs sm:w-15'>{item.tech2}</p>
                  </div>
                  <p className='text-sm text-red bg-gray-300 font-normal text-center p-1 w-24 mt-3 sm:text-xs sm:w-15'>{item.author}</p>
                  <p className='text-xl text-sm mt-5 sm:text-xs sm:mt-3'>{item.desc}</p>
                  <div className='flex gap-5'>
                    <div className="mt-5 px-3 py-2 sm:p-0 text-white bg-black font-semibold cursor-pointer hover:bg-white hover:text-black rounded-xl hover:shadow-xl flex items-center justify-center w-[100px] h-10">
                      <Link href={item.gitHub} className='sm:text-sm'><GitHub className='text-xl mr-1 mb-1 sm:text-sm' />Github</Link>
                    </div>
                    <div className="mt-5 px-3 py-2 sm:p-0 text-white bg-blue-800 font-semibold cursor-pointer hover:bg-blue-700 rounded-xl hover:shadow-xl flex items-center justify-center w-[100px] h-10">
                      <Link href={item.gitHub} className='sm:text-sm'><LaptopIcon className='text-xl mr-1 mb-1 sm:text-sm'/>Demo</Link>
                    </div>
                  </div>

                </div>
              </div>
            </>
          ))
        }
      </div>
      <hr className='mt-10' />

    </div>
  )
}
