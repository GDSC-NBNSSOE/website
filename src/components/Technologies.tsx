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
      <div className='2xl:px-28'>
        <div className="w-screen flex mt-10 p-10 bg-slate-100 gap-20 justify-center align-center">{/* justify-center m-0*/}
          <div className="flex w-[35%] p-10 sm:hidden md:p-0 md:mt-20 lg:p-0 lg:mt-14">{/* mr-[150px]justify-end items-center   */}
            <Image
              src={"/index/android.png"}
              alt="GDSC NBNSSOE LOGO"
              width={350}
              height={500}
              className="h-[210px]"
            />
          </div>
          <div className="flex flex-col text-black pt-10 w-[50%] sm:w-full">{/* ml-[100px] */}
            <p className="text-4xl font-bold text-red-500 sm:text-center">
              Android Development
            </p>
            <p className=" w-[80%]mt-7 text-md spacing text-gray-600 font-sans text-xl sm:text-center sm:mt-5">{/*w-[100%] */}
              Every year Google developers release exciting new updates to the
              world's most popular operating system. We always have sessions to
              keep you updated and mastering the latest trends in modern Android
              development.
            </p>

            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[150px] mt-10 sm:m-auto sm:mt-9"
            >
              Codelabs
            </button>
          </div>

        </div>

        <div className="w-screen flex flex-row-reverse p-10 justify-center ">{/*mt-0 justify-center m-0 p-5  */}
          <div className="md:flex w-[35%] p-10 sm:hidden md:p-0 md:mt-20 md:p-0 lg:p-0 lg:mt-14">{/*items-center justify-end mr-[200px] */}
            <Image
              src={"/index/web.png"}
              alt="GDSC NBNSSOE LOGO"
              width={350}
              height={500}
              className="h-[210px]"
            />
          </div>
          <div className="flex flex-col text-black pt-10  w-[60%] sm:w-[100%]">{/*ml-[100px] pl-20 */}
            <p className="text-4xl font-bold text-orange-600 sm:text-blue-500 sm:text-center md:w-[50%]">
              Web Development
            </p>
            <p className=" w-[80%] mt-7 spacing text-gray-600 font-sans text-xl sm:text-center sm:ml-9">{/*w-[100%] */}
              Learn the core foundations of a delightful web experience both for
              the user and developer. Stay up to tabs with emerging and trending
              technologies. Get access to a guided, tutorial and hands-on coding
              experience.
            </p>

            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[150px] mt-10 sm:m-auto sm:mt-9"
            >
              Codelabs
            </button>
          </div>

        </div>
        <div className="w-screen flex bg-slate-100 p-10 gap-20 ">{/*p-10 justify-center m-0 p-5*/}
          <div className="flex w-[35%] p-10  justify-center sm:hidden md:p-0 md:mt-28 lg:p-0 lg:mt-14">{/*justify-end mr-[200px] items-center*/}
            <Image
              src={"/index/cloud.png"}
              alt="GDSC NBNSSOE LOGO"
              width={350}
              height={500}
              className="h-[210px]"
            />
          </div>
          <div className="flex flex-col text-black pt-10 w-[60%] sm:w-full">{/*ml-[10x] */}
            <p className="text-4xl font-bold text-green-600 sm:text-center">Cloud Computing</p>
            <p className=" w-[80%] mt-7 spacing text-gray-600 font-sans text-xl sm:text-center sm:w-full">{/*w-[90%] */}
              For passionate developers who want to stay relevant in a cloud
              first world where businesses demand for agility and innovation and
              prompt rise of cloud-native applications to bridges gaps between
              data, insight, and action.
            </p>

            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[150px] mt-10 sm:m-auto sm:mt-9"
            >
              Codelabs
            </button>
          </div>

        </div>
        <div className="w-screen flex flex-row-reverse p-10">{/*flex-row-reverse  p-5*/}
          <div className="flex w-[35%] sm:hidden md:p-0 md:mt-20 lg:p-0 lg:mt-14">{/*mr-[200px] items-center justify-end8*/}
            <Image
              src={"/index/ml.png"}
              alt="GDSC NBNSSOE LOGO"
              width={350}
              height={500}
              className="h-[250px]"
            />
          </div>
          <div className="flex flex-col text-black w-[60%] sm:w-full">{/*ml-[100px] pl-20 pt-10*/}
            <p className="text-4xl font-bold text-blue-600 sm:text-center">
              Machine Intelligence
            </p>
            <p className="w-[80%] mt-7 spacing text-gray-600 font-sans text-xl sm:w-full sm:text-center">{/**/}
              Learn how to drive user engagement and retention with intelligent
              apps that are able to effectively serve users what they need
              without the fuss by providing these systems with the ability to
              automatically learn and improve from experience without being
              explicitly programmed.
            </p>

            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[150px] mt-10 sm:m-auto sm:mt-9"
            >
              Codelabs
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}