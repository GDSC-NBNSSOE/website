import Image from 'next/image'
import React from 'react'
import { Button } from '@mui/material'

export function Technologies() {
  return (
    <div className="bg-white w-full p-10 flex flex-col items-center">
      <p className="text-5xl text-gray-900 font-normal">
        Technologies We're Excited About
      </p>
      <p className="w-[60%] mt-5 text-lg spacing text-gray-600 font-sans text-center">
        Opportunities to learn & access deep technical content.
      </p>
      
      <div className='2xl:px-28 mt-10'>

        <div className='w-screen h-[400px] flex flex-row items-center justify-center p-10 bg-slate-100 lg:h-'>
          <div className='w-[35%] flex justify-start items-center pl-20'>
            <Image
              src={"/index/android.png"}
              alt="GDSC NBNSSOE LOGO"
              width={350}
              height={500}
              className="h-[210px]"
            />
          </div>
          
          <div className='w-[35%] items-center justify-center'>
            <p className="text-4xl font-bold text-red-500 sm:text-center">
              ANDROID DEVELOPMENT
            </p>
            <br/>
            <p className=" w-full mt-7 text-md spacing text-gray-600 font-sans text-xl sm:text-center sm:mt-5">{/*w-[100%] */}
              Every year Google developers release exciting new updates to the
              world's most popular operating system. We always have sessions to
              keep you updated and mastering the latest trends in modern Android
              development.
            </p>

            <Button variant="contained" href="#contained-buttons" className='mt-10 px-10 py-2.5'>
              Codelabs
            </Button>
          </div>
        </div>


        <div className='w-screen h-[400px] flex flex-row-reverse justify-center items-center p-10'>

          <div className='w-[20%] flex justify-center items-center'>
            <Image
              src={"/index/web.png"}
              alt="GDSC NBNSSOE LOGO"
              width={350}
              height={500}
              className="h-[210px]"
            />
          </div>

          <div className='w-[45%] pl-20'>
            <p className="text-4xl font-bold text-[#ea8600] sm:text-blue-500 sm:text-center md:w-[50%]">
              WEB DEVELOPMENT
            </p>
            <p className=" w-[80%] mt-7 spacing text-gray-600 font-sans text-xl sm:text-center sm:ml-9">
              Learn the core foundations of a delightful web experience both for
              the user and developer. Stay up to tabs with emerging and trending
              technologies. Get access to a guided, tutorial and hands-on coding
              experience.
            </p>

            <Button variant="contained" href="#contained-buttons" className='mt-10 px-10 py-2.5'>
              Codelabs
            </Button>
          </div>

        </div>


        <div className='w-screen h-[400px] flex flex-row justify-center items-center p-10 bg-slate-100'>
          <div className='w-[35%] flex justify-start items-center pl-20'>
            <Image
              src={"/index/cloud.png"}
              alt="GDSC NBNSSOE LOGO"
              width={350}
              height={500}
              className="h-[210px]"
            />
          </div>
          
          <div className='w-[35%] items-center justify-center'>
            <p className="text-4xl font-bold text-green-600 sm:text-center">CLOUD COMPUTING</p>
            <p className="w-full mt-7 spacing text-gray-600 font-sans text-xl sm:text-center sm:w-full">
              For passionate developers who want to stay relevant in a cloud
              first world where businesses demand for agility and innovation and
              prompt rise of cloud-native applications to bridges gaps between
              data, insight, and action.
            </p>

            <Button variant="contained" href="#contained-buttons" className='mt-10 px-10 py-2.5'>
              Codelabs
            </Button>
          </div>
        </div>


        <div className='w-screen h-[400px] flex flex-row-reverse justify-center items-center p-10'>

          <div className='w-[20%] flex justify-center items-center'>
            <Image
              src={"/index/ml.png"}
              alt="GDSC NBNSSOE LOGO"
              width={350}
              height={500}
              className="h-[250px]"
            />
          </div>

          <div className='w-[45%] pl-20'>
            <p className="text-4xl font-bold text-blue-600 sm:text-center">
              MACHINE INTELLIGENCE
            </p>
            <p className="w-[80%] mt-7 spacing text-gray-600 font-sans text-xl sm:w-full sm:text-center">{/**/}
              Learn how to drive user engagement and retention with intelligent
              apps that are able to effectively serve users what they need
              without the fuss by providing these systems with the ability to
              automatically learn and improve from experience without being
              explicitly programmed.
            </p>

            <Button variant="contained" href="#contained-buttons" className='mt-10 px-10 py-2.5'>
              Codelabs
            </Button>
          </div>

        </div>
      </div>
    </div>
  )
}