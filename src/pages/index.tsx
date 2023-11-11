import Image from 'next/image'
import { Inter } from 'next/font/google'
import { HiCursorClick } from "react-icons/hi"
import { Carousel } from 'flowbite-react';
import { Accordion } from 'flowbite-react';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="p-0 m-0 w-screen mt-[50px] bg-white">

      <div className='flex w-full justify-around px-[200px]'>
        <div className='flex flex-col text-black w-full pt-20'>


          <p className='text-5xl font-bold text-gray-800'>
            <span className='text-red-500'>G</span><span className='text-blue-500'>D</span><span className='text-green-500'>S</span><span className='text-yellow-300'>C </span>
            NBNSSOE PUNE
          </p>
          <p className='w-[70%] mt-7 text-xl font-extrabold spacing text-gray-600 font-sans'>
            A community of <span className='text-green-500'>Developers</span>, <span className='text-red-500'>Designers</span> and <span className='text-blue-500'>Programmers</span> who grow their knowledge in a peer-to-peer
            learning environment and build solutions for local businesses and their community.
          </p>

          <div className="mt-10 border-2 border-green-500 rounded-lg px-3 py-2 text-green-500 font-semibold cursor-pointer hover:bg-green-500 hover:text-green-200 flex items-center justify-center w-[200px] h-14 shadow-lg hover:shadow-xl">
            <HiCursorClick size="25" className="mr-2 flex items-center" />
            Join Us
          </div>

        </div>

        <div className='w-full flex justify-end '>
          <Image
            src={"/index/main.gif"}
            alt="GDSC NBNSSOE LOGO"
            width={700}
            height={800}
          />
        </div>
      </div>

      <div className='bg-white w-full p-10 flex flex-col items-center mt-20'>
        <p className='text-5xl text-gray-900 font-normal'>What does <span className='font-bold'>GDSC-NBNSSOE</span> do?</p>
        <p className='w-[60%] mt-14 text-xl spacing text-gray-600 font-sans text-center'>
          We at <span className='font-bold'>DSC-NBNSSOE</span> are a passionate group of people who work towards bringing a change in the ecosystem of development
          around the campus. We want to create a healthy environment for the budding developers to exploring solutions
          to real life problems and promote the <span className='font-bold'>developer culture</span>.
        </p>

        <Image
          src={"/index/water-wave.gif"}
          alt="GDSC NBNSSOE LOGO"
          width={700}
          height={800}
        />

      </div>

      <div className='bg-white w-full p-10 flex flex-col items-center'>
        <p className='text-5xl text-gray-900 font-normal'>Technologies We're Excited About</p>
        <p className='w-[60%] mt-10 text-lg spacing text-gray-600 font-sans text-center'>Opportunities to learn & access deep technical content.</p>

        <div className='w-screen flex mt-20 justify-center m-0 p-0'>
          <div className='flex items-center  w-full justify-end mr-[150px]'>
            <Image
              src={"/index/android.png"}
              alt="GDSC NBNSSOE LOGO"
              width={350}
              height={500}
              className='h-[210px]'
            />
          </div>
          <div className='flex flex-col text-black pt-10 w-full ml-[150px]'>

            <p className='text-3xl font-bold text-gray-600'>Android Development</p>
            <p className='w-[50%] mt-7 text-md spacing text-gray-600 font-sans'>Every year Google developers release exciting new updates to the world's most popular operating system. We always have sessions to keep you updated and mastering the latest trends in modern Android development.</p>

            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[150px] mt-10">Codelabs</button>
          </div>

        </div>

        <div className='w-screen flex flex-row-reverse mt-20 justify-center m-0 p-0'>
          <div className='flex w-full items-center justify-end mr-[500px]'>
            <Image
              src={"/index/web.png"}
              alt="GDSC NBNSSOE LOGO"
              width={350}
              height={500}
              className='h-[210px]'
            />
          </div>
          <div className='flex flex-col text-black pt-10 pl-20 w-full ml-[400px]'>

            <p className='text-3xl font-bold text-gray-600'>Web Development</p>
            <p className='w-[90%] mt-7 text-md spacing text-gray-600 font-sans'>Learn the core foundations of a delightful web experience both for the user and developer. Stay up to tabs with emerging and trending technologies. Get access to a guided, tutorial and hands-on coding experience.</p>

            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[150px] mt-10">Codelabs</button>
          </div>

        </div>

        <div className='w-screen flex mt-20 justify-center m-0 p-0'>
          <div className='flex items-center  w-full justify-end mr-[150px]'>
            <Image
              src={"/index/cloud.png"}
              alt="GDSC NBNSSOE LOGO"
              width={350}
              height={500}
              className='h-[210px]'
            />
          </div>
          <div className='flex flex-col text-black pt-10 w-full ml-[150px]'>

            <p className='text-3xl font-bold text-gray-600'>Cloud Computing</p>
            <p className='w-[50%] mt-7 text-md spacing text-gray-600 font-sans'>For passionate developers who want to stay relevant in a cloud first world where businesses demand for agility and innovation and prompt rise of cloud-native applications to bridges gaps between data, insight, and action.</p>

            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[150px] mt-10">Codelabs</button>
          </div>

        </div>

        <div className='w-screen flex flex-row-reverse mt-20 justify-center m-0 p-0'>
          <div className='flex w-full items-center justify-end mr-[500px]'>
            <Image
              src={"/index/ml.png"}
              alt="GDSC NBNSSOE LOGO"
              width={350}
              height={500}
              className='h-[250px]'
            />
          </div>
          <div className='flex flex-col text-black pt-10 pl-20 w-full ml-[400px]'>

            <p className='text-3xl font-bold text-gray-600'>Machine Intelligence</p>
            <p className='w-[90%] mt-7 text-md spacing text-gray-600 font-sans'>Learn how to drive user engagement and retention with intelligent apps that are able to effectively serve users what they need without the fuss by providing these systems with the ability to automatically learn and improve from experience without being explicitly programmed.</p>

            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[150px] mt-10">Codelabs</button>
          </div>

        </div>

      </div>


      <div className='bg-white w-full p-10 flex flex-col items-center'>
        <hr className='text-black bg-black h-[1px] w-[80%] mb-10' />
        <p className='text-5xl text-gray-900 font-normal'>Frequently Asked Questions</p>

        <Accordion className='w-[60%] mt-14'>
          <Accordion.Panel>
            <Accordion.Title>What is GDSC?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                dropdowns, modals, navbars, and more.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Check out this guide to learn how to&nbsp;
                <a
                  href="https://flowbite.com/docs/getting-started/introduction/"
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  get started&nbsp;
                </a>
                and start developing websites even faster with components on top of Tailwind CSS.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>How can i join GDSC?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                has a design equivalent in our Figma file.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Check out the
                <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Figma design system
                </a>
                based on the utility classes from Tailwind CSS and components from Flowbite.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Want to learn and connect with people?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                The main difference is that the core components from Flowbite are open source under the MIT license, whereas
                Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
                components, whereas Tailwind UI offers sections of pages.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                technical reason stopping you from using the best of two worlds.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
              <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                <li>
                  <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                    Flowbite Pro
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindui.com/"
                    rel="nofollow"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Tailwind UI
                  </a>
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>

      </div>

      {/* <div className="flex justify-center h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel className='w-[90%]' pauseOnHover>
          <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
        </Carousel>
      </div> */}


    </div>
  )
}
