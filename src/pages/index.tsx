import Image from "next/image";
import { HiCursorClick, HiX } from "react-icons/hi";
import { Accordion, Banner, Button, Card, TextInput, Label, Sidebar } from "flowbite-react";
import { Faq } from "@/components/Faq";
import { Newsletter } from "@/components/Newsletter";
import { RecentEvent } from "@/components/RecentEvent";
import { Technologies } from "@/components/Technologies";
import { About } from "@/components/About";

export default function Home() {
  return (
    <div className="">
      <div className="flex">
        <div className="flex flex-col text-black w-[50%] pt-20 pl-32 lg:p-5 lg:mt-10 md:w-full md:pl-0 md:justify-center sm:w-full sm:p-10 md:w-full md:p-10 xl:pl-20">
          <p className="text-5xl font-bold text-gray-800 md:text-center sm:text-center md:text-center lg:text-4xl xl:5xl">
            <span className="text-red-500">G</span>
            <span className="text-blue-500">D</span>
            <span className="text-green-500">S</span>
            <span className="text-yellow-300">C </span>
            NBNSSOE PUNE
          </p>
          <p className="w-[70%] mt-7 text-xl font-extrabold spacing text-gray-600 font-sans sm:text-center sm:w-full md:w-full md:text-center md:pl-10 lg:w-[100%] xl:w-[100%]">
            A community of <span className="text-green-500">Developers</span>,{" "}
            <span className="text-red-500">Designers</span> and{" "}
            <span className="text-blue-500">Programmers</span> who grow their
            knowledge in a peer-to-peer learning environment and build solutions
            for local businesses and their community.
          </p>

          <div className="mt-10 border-2 border-green-500 rounded-lg px-3 py-2 text-green-500 font-semibold cursor-pointer hover:bg-green-500 hover:text-green-200 flex items-center justify-center w-[200px] h-14 shadow-lg hover:shadow-xl sm:m-auto sm:mt-5  md:m-auto md:mt-9">
            <HiCursorClick size="25" className="mr-2 flex items-center" />
            Join Us
          </div>

        </div>
        <div className="w-70% sm:hidden lg:w-[50%] lg:mt-7 xl:w-[50%] xl:mt-8">
          <div className="w-[100%] lg:flex md:hidden">
            <Image
              src={"/index/main.gif"}
              alt="GDSC NBNSSOE LOGO"
              width={700}
              height={800}
            />
          </div>
        </div>
      </div>

      <div className="bg-white w-full p-10 flex flex-col items-center mt-20">
        <p className="text-5xl text-gray-900 font-normal">
          What does <span className="font-bold">GDSC-NBNSSOE</span> do?
        </p>
        <p className="w-[60%] mt-14 text-xl spacing text-gray-600 font-sans text-center">
          We at <span className="font-bold">DSC-NBNSSOE</span> are a passionate
          group of people who work towards bringing a change in the ecosystem of
          development around the campus. We want to create a healthy environment
          for the budding developers to exploring solutions to real life
          problems and promote the{" "}
          <span className="font-bold">developer culture</span>.
        </p>

        <Image
          src={"/index/water-wave.gif"}
          alt="GDSC NBNSSOE LOGO"
          width={700}
          height={800}
        />

      </div>
      <Technologies />
      <hr />

      <div className="flex p-7 2xl:px-20 justify-center items-center">
        <div className="flex flex-col text-black w-[45%] pt-10 sm:w-full">
          <p className="text-5xl text-gray-900 font-normal sm:text-center">Projects</p>
          <p className="mt-14 sm:text-center sm:mt-14 text-2xl w-[90%] text-gray-500 sm:w-full sm:text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
            neque fuga aliquam. Doloribus, voluptatem odit aspernatur minima
            quis?
          </p>
          <div className="mt-5 px-3 py-2 text-white bg-blue-500 font-semibold cursor-pointer hover:bg-blue-700 hover:shadow-xl flex items-center justify-center w-[100px] h-10 sm:m-auto sm:mt-6">
            SEE MORE
          </div>
        </div>
        <div className=" flex justify-center items-center sm:hidden w-[40%]">
          <Image
            src={"/index/main.gif"}
            alt="GDSC NBNSSOE LOGO"
            width={700}
            height={700}
            className="w-[100%] h-96"
          />
        </div>
      </div>
      <RecentEvent />
      <div className="flex p-10 gap-10 sm:flex-col">
        <div className="flex flex-col text-black w-[40%] 2xl:pl-40 sm:w-full sm:items-center">
          <p className="text-5xl text-gray-900 font-normal mb-10">Team</p>
          <div className="">
            <Image
              src={"/index/project-img.jpg"}
              alt="GDSC NBNSSOE LOGO"
              width={600}
              height={600}
              className="h-64 w-80 "
            />
          </div>
        </div>
        <div className="flex flex-col text-black w-[60%] sm:w-full">
          <p className="mb-2 text-gray-500 dark:text-gray-400 text-2xl mt-28 md:text-xl md:mb-0 2xl:w-[62%] sm:mt-0 sm:text-xl">
            However, we actually recommend using both Flowbite, Flowbite Pro,
            and even Tailwind UI as there is no technical reason stopping you
            from using the best of two worlds.
          </p>
          <div className="mt-10 px-3 py-2 text-white bg-blue-500 font-semibold cursor-pointer hover:bg-blue-700 hover:shadow-xl flex items-center justify-center w-[100px] h-10 ">
            SEE MORE
          </div>
        </div>
      </div>

      <Newsletter />
      <About />
      <div className="w-screen">
        <iframe className="mt-5 w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7568.926865326245!2d73.83619269983157!3d18.462655864361228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc29549639d8dbf%3A0x335143a9a3e9c68e!2sNBN%20Sinhgad%20School%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1701775066565!5m2!1sen!2sin" width="1500" height="400" loading="lazy"></iframe>
      </div>
      <Faq />


    </div>
  );
}