"use client"

import React from 'react'

export default function About() {
  return (
    <div id="aboutme" className="grid px-4 md:px-20 place-content-center text-center bg-[#35FF69] min-h-[100vh]">
      <div>
        <p className='text-2xl md:text-2xl font-thin text-black lg:text-4xl px-4 md:px-20 '>
        Currently, I am a Software Engineer at Nymbus, where I contribute to internal tools and automation. I enjoy building full stack applications as personal projects, where I take ownership of the entire software engineering lifecycle — from initial design and backend logic to frontend development and deployment. I love working with Python and JavaScript, and often use frameworks like Django and Next.js/React to bring my ideas to life.
        </p>
      </div>
      {/* <div className='m-5 md:m-10 flex flex-col md:flex-row justify-center'>
        <button className='mt-4 md:mr-5 px-6 py-3 rounded-lg hover:opacity-80 font-bold bg-[#48E5C2] border text-black transition-colors w-full md:w-auto duration-300 border-black '>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="">
            View My Resume
          </a>
        </button>
      </div> */}
    </div>
  )
}

