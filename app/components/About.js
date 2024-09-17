"use client"

import React from 'react'

export default function About() {
  return (
    <div id="aboutme" className="grid px-4 md:px-20 place-content-center text-center bg-gradient-to-bl to-[#333333] from-blue-500 h-[calc(100dvh)]">
      <div>
        <p className='text-xl md:text-4xl font-thin text-gray-500 lg:text-xl dark:text-gray-100 px-4 md:px-40'>
        I am a Computer Science student at The University of Georgia, graduating in December 2024, and currently work part-time as a Software Engineer Intern at Nymbus,
         where I gain hands-on experience with technologies such as Kubernetes, Java, and Python. While I am proficient in Python, Java, and JavaScript, I am deeply committed
        to continuous learning and professional growth. I am eager to seek out opportunities in Software Engineering and Development where I can apply my skills, embrace new 
        challenges, and further my understanding of the tech industry.
        </p>
      </div>
      <div className='m-5 md:m-10 flex flex-col md:flex-row justify-center'>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="mt-4 md:mr-5 px-6 py-3 bg-[#48E5C2] text-black rounded-lg hover:bg-gray-300 hover:text-black transition-colors w-full md:w-auto duration-300">
          View My Resume
        </a>
      </div>
    </div>
  )
}

