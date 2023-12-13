import Image from 'next/image'
import React from 'react'

export function Technologies() {
  return (
    <div className="bg-white w-full p-10 flex flex-col items-center">
    <p className="text-5xl text-gray-900 font-normal">
      Technologies We're Excited About
    </p>
    <p className="w-[60%] mt-10 text-lg spacing text-gray-600 font-sans text-center">
      Opportunities to learn & access deep technical content.
    </p>

    <div className="w-screen flex mt-10 justify-center m-0 p-5 bg-slate-100">
      <div className="flex items-center  w-full justify-end mr-[150px]">
        <Image
          src={"/index/android.png"}
          alt="GDSC NBNSSOE LOGO"
          width={350}
          height={500}
          className="h-[210px]"
        />
      </div>
      <div className="flex flex-col text-black pt-10 w-full ml-[100px]">
        <p className="text-4xl font-bold text-red-500">
          Android Development
        </p>
        <p className="w-[100%] mt-7 text-md spacing text-gray-600 font-sans text-xl">
          Every year Google developers release exciting new updates to the
          world's most popular operating system. We always have sessions to
          keep you updated and mastering the latest trends in modern Android
          development.
        </p>

        <button
          type="button"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[150px] mt-10"
        >
          Codelabs
        </button>
      </div>

    </div>

    <div className="w-screen flex flex-row-reverse mt-0 justify-center m-0 p-5 ">
      <div className="flex w-full items-center justify-end mr-[200px]">
        <Image
          src={"/index/web.png"}
          alt="GDSC NBNSSOE LOGO"
          width={350}
          height={500}
          className="h-[210px]"
        />
      </div>
      <div className="flex flex-col text-black pt-10 pl-20 w-full ml-[100px]">
        <p className="text-4xl font-bold text-orange-600">
          Web Development
        </p>
        <p className="w-[100%] mt-7 spacing text-gray-600 font-sans text-xl">
          Learn the core foundations of a delightful web experience both for
          the user and developer. Stay up to tabs with emerging and trending
          technologies. Get access to a guided, tutorial and hands-on coding
          experience.
        </p>

        <button
          type="button"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[150px] mt-10"
        >
          Codelabs
        </button>
      </div>

    </div>
    <div className="w-screen flex mt-0 justify-center m-0 p-5 bg-slate-100">
      <div className="flex items-center  w-full justify-end mr-[200px]">
        <Image
          src={"/index/cloud.png"}
          alt="GDSC NBNSSOE LOGO"
          width={350}
          height={500}
          className="h-[210px]"
        />
      </div>
      <div className="flex flex-col text-black pt-10 w-full ml-[10x]">
        <p className="text-4xl font-bold text-green-600">Cloud Computing</p>
        <p className="w-[90%] mt-7 spacing text-gray-600 font-sans text-xl">
          For passionate developers who want to stay relevant in a cloud
          first world where businesses demand for agility and innovation and
          prompt rise of cloud-native applications to bridges gaps between
          data, insight, and action.
        </p>

        <button
          type="button"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[150px] mt-10"
        >
          Codelabs
        </button>
      </div>

    </div>
    <div className="w-screen flex flex-row-reverse mt-0 justify-center m-0 p-5 ">
      <div className="flex w-full items-center justify-end mr-[200px]">
        <Image
          src={"/index/ml.png"}
          alt="GDSC NBNSSOE LOGO"
          width={350}
          height={500}
          className="h-[250px]"
        />
      </div>
      <div className="flex flex-col text-black pt-10 pl-20 w-full ml-[100px]">
        <p className="text-4xl font-bold text-blue-600">
          Machine Intelligence
        </p>
        <p className="w-[100%] mt-7 spacing text-gray-600 font-sans text-xl">
          Learn how to drive user engagement and retention with intelligent
          apps that are able to effectively serve users what they need
          without the fuss by providing these systems with the ability to
          automatically learn and improve from experience without being
          explicitly programmed.
        </p>

        <button
          type="button"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[150px] mt-10"
        >
          Codelabs
        </button>
      </div>
    </div>
  </div>
  )
}