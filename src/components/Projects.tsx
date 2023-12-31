import Image from 'next/image'
import React from 'react'
import { Button } from '@mui/material'


export function IndexProjects(){
    return(

        <div className='w-full flex flex-col items-center py-10'>
            <p className='text-5xl text-black font-sans font-medium'>OUR PROJECTS</p>
            <Image
                src={'/index/projects.gif'}
                alt=""
                width={500}
                height={500}
                className='mt-7'
            />
            <p className='w-[50%] text-center text-black mt-10 font-light font-sans text-xl'>
                Projects are the canvases where creativity meets strategy, and teams are the brushstrokes 
                that bring the masterpiece to life. Together, they create a symphony of innovation, turning 
                visions into reality and challenges into opportunities.
            </p>

            <Button variant="contained" href="#contained-buttons" className='mt-10 px-10 py-2.5'>
                see more
            </Button>
        </div>

    );
}