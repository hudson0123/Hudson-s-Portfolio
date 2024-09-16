"use client"

import React from 'react'

export default function About() {
  
  return (
    <div className="grid px-20 place-content-center text-center bg-gradient-to-bl to-[#333333] from-blue-500 h-screen">
      <div>
        <p className='text-4xl font-thin text-gray-500 lg:text-xl dark:text-gray-100 px-40'>
          Currently I am finishing up my bachelor's in Computer Science at The University of Georgia, 
          set to graduate in December 2024. I have a variety of experience 
          in technoloy but recently have been interested in building full stack web applicaitons.
        </p>
      </div>
      <div className='m-10'>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="mt-4 mr-5 px-6 py-3 bg-[#48E5C2] text-black rounded-lg hover:bg-gray-300 hover:text-black transition-colors w-1/2">
            View My Resume
        </a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="mt-4 px-6 py-3 bg-[#48E5C2] text-black rounded-lg hover:bg-gray-300 hover:text-black transition-colors w-1/2">
            View My Cover Letter
        </a>
      </div>
    </div>
  )
}
