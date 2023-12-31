import { Card } from 'flowbite-react'
import React from 'react'

export function RecentEvent() {
  return (
    <div className="bg-gray-100 p-7">
      <p className="text-5xl text-black font-sans font-medium text-center mt-10">
        RECENT EVENTS
      </p>
      <div className="flex flex-wrap gap-7 justify-center mt-20">
        <Card
          className="max-w-xs"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="/index/event-img.jpg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <div className="mt-1 rounded-lg px-3 py-2 text-blue-500 font-semibold cursor-pointer hover:bg-blue-100 flex items-center justify-center w-[80px] h-10 ">
            Read
          </div>
        </Card>
        <Card
          className="max-w-xs"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="/index/event-img.jpg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <div className="mt-1 rounded-lg px-3 py-2 text-blue-500 font-semibold cursor-pointer hover:bg-blue-100 flex items-center justify-center w-[80px] h-10 ">
            Read
          </div>
        </Card>
        <Card
          className="max-w-xs"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="/index/event-img.jpg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <div className="mt-1 rounded-lg px-3 py-2 text-blue-500 font-semibold cursor-pointer hover:bg-blue-100 flex items-center justify-center w-[80px] h-10 ">
            Read
          </div>
        </Card>
      </div>
      <p className="mt-7 px-3 py-2 m-auto text-white bg-blue-500 font-semibold cursor-pointer hover:bg-blue-700 hover:shadow-xl text-center w-[140px] h-10 sm:m-auto sm:mt-7">
        SEE MORE
      </p>
    </div>
  )
}
