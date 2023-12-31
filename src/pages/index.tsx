import Image from "next/image";
import { HiCursorClick, HiX } from "react-icons/hi";
import { Accordion, Banner, Card, TextInput, Label, Sidebar } from "flowbite-react";
import { Faq } from "@/components/Faq";
import { Technologies } from "@/components/Technologies";
import { IndexProjects } from "@/components/Projects";
import { Button } from '@mui/material'

export default function Home() {
  return (
    <div className="p-0 m-0 w-screen bg-white">
      <div className="flex w-full">
        <div className="flex flex-col text-black w-[60%] pt-20 pl-32 lg:p-5 lg:mt-10 md:w-full md:pl-0 md:justify-center sm:w-full sm:p-10 md:p-10 xl:pl-20">
          <p className="text-5xl font-bold text-gray-800 md:text-center sm:text-center lg:text-4xl xl:5xl">
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
      <hr/>

      <IndexProjects/>



      <div className="pb-10">
        <div className="flex flex-wrap gap-7 justify-center mt-20">
          
          <Card
            className="max-w-xs"
            imgAlt="GDSC NBNSSOE EVENTS"
            imgSrc="/index/events.avif"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
              EVENTS
            </h5>
            <p className="font-light text-black dark:text-gray-400">
              Attend Study Jams/ Hackathons/ Developer Conferences to learn more about the latest technologies.
            </p>
            <Button variant="contained" href="#contained-buttons" className='mt-10 py-2.5'>
                learn more
            </Button>
          </Card>

          <Card
            className="max-w-xs"
            imgAlt="GDSC NBNSSOE EVENTS"
            imgSrc="/index/cfp.avif"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
              CFP
            </h5>
            <p className="font-light text-black dark:text-gray-400">
              Interested in being a Speaker at one of our events? Just drop us your Proposal.
            </p>
            <Button variant="contained" href="#contained-buttons" className='mt-10 py-2.5'>
                learn more
            </Button>
          </Card>

          <Card
            className="max-w-xs"
            imgAlt="GDSC NBNSSOE EVENTS"
            imgSrc="/index/sponsorships.jpg"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
              SPONSORSHIPS
            </h5>
            <p className="font-light text-black dark:text-gray-400">
              Get Brand exposure and elevate your business identity within the Community.
            </p>
            <Button variant="contained" href="#contained-buttons" className='mt-10 py-2.5'>
                learn more
            </Button>
          </Card>
          
        </div>
      </div>
      


      <div className="w-screen">
      <iframe className="mt-5 w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7568.926865326245!2d73.83619269983157!3d18.462655864361228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc29549639d8dbf%3A0x335143a9a3e9c68e!2sNBN%20Sinhgad%20School%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1701775066565!5m2!1sen!2sin" width="1500" height="400" loading="lazy"></iframe>
      </div>
      <Faq />


    </div>
  );
}