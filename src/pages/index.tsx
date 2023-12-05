import Image from "next/image";
import { HiCursorClick, HiX } from "react-icons/hi";
import { Accordion, Banner, Button, Card, TextInput, Label } from "flowbite-react";
import { Faq } from "@/components/Faq";
import { Newsletter } from "@/components/Newsletter";
import { RecentEvent } from "@/components/RecentEvent";
import { Technologies } from "@/components/Technologies";

export default function Home() {
  return (
    <div className="p-0 m-0 w-screen mt-[0px] bg-white">
      <div className="flex w-full justify-around px-[200px]">
        <div className="flex flex-col text-black w-full pt-20">
          <p className="text-5xl font-bold text-gray-800">
            <span className="text-red-500">G</span>
            <span className="text-blue-500">D</span>
            <span className="text-green-500">S</span>
            <span className="text-yellow-300">C </span>
            NBNSSOE PUNE
          </p>
          <p className="w-[70%] mt-7 text-xl font-extrabold spacing text-gray-600 font-sans">
            A community of <span className="text-green-500">Developers</span>,{" "}
            <span className="text-red-500">Designers</span> and{" "}
            <span className="text-blue-500">Programmers</span> who grow their
            knowledge in a peer-to-peer learning environment and build solutions
            for local businesses and their community.
          </p>

          <div className="mt-10 border-2 border-green-500 rounded-lg px-3 py-2 text-green-500 font-semibold cursor-pointer hover:bg-green-500 hover:text-green-200 flex items-center justify-center w-[200px] h-14 shadow-lg hover:shadow-xl">
            <HiCursorClick size="25" className="mr-2 flex items-center" />
            Join Us
          </div>

        </div>

        <div className="w-full flex justify-end ">
          <Image
            src={"/index/main.gif"}
            alt="GDSC NBNSSOE LOGO"
            width={700}
            height={800}
          />
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

      <div className="flex w-full justify-around px-[200px] p-7">
        <div className="flex flex-col text-black w-full pt-20">
          <p className="text-5xl text-gray-900 font-normal">Projects</p>
          <p className="mt-40">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
            neque fuga aliquam. Doloribus, voluptatem odit aspernatur minima
            quis?
          </p>
          <div className="mt-5 px-3 py-2 text-white bg-blue-500 font-semibold cursor-pointer hover:text-black hover:bg-blue-100 flex items-center justify-center w-[100px] h-10 ">
            SEE MORE
          </div>
        </div>
        <div className="w-full flex justify-end ">
          <Image
            src={"/index/main.gif"}
            alt="GDSC NBNSSOE LOGO"
            width={700}
            height={800}
          />
        </div>
      </div>
      <RecentEvent />
      <div className="flex w-full justify-around px-[200px] p-7">
        <div className="flex flex-col text-black w-full">
          <p className="text-5xl text-gray-900 font-normal">Team</p>
          <Image
            src={"/index/project-img.jpg"}
            alt="GDSC NBNSSOE LOGO"
            width={350}
            height={500}
            className="h-[250px] mt-10"
          />
        </div>
        <div className="flex flex-col text-black w-full">
          <p className="mb-2 text-gray-500 dark:text-gray-400 text-xl mt-20">
            However, we actually recommend using both Flowbite, Flowbite Pro,
            and even Tailwind UI as there is no technical reason stopping you
            from using the best of two worlds.
          </p>
          <div className="mt-10 px-3 py-2 text-white bg-blue-500 font-semibold cursor-pointer hover:text-black hover:bg-blue-100 flex items-center justify-center w-[100px] h-10 ">
            SEE MORE
          </div>
        </div>
      </div>

      <Newsletter />
      <Faq />


    </div>
  );
}
