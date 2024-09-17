"use client"

import React from 'react'

export default function About() {
  
  return (
    <div id="aboutme" className="grid px-20 place-content-center text-center bg-gradient-to-bl to-[#333333] from-blue-500 h-[calc(100dvh)]">
      <div>
        <p className='text-4xl font-thin text-gray-500 lg:text-xl dark:text-gray-100 px-40'>
        Currently, I am a Computer Science student at The University of Georgia, graduating in December 2024. 
        I work part-time as a Software Engineer Intern at Nymbus, where I work with technologies like Kubernetes, Java, and Python, 
        enhancing my skills in software development and DevOps. I’m proficient in Python, PyTorch, and other programming languages, and I’m 
        seeking opportunities in Software Engineering, Development, or similar roles where I can apply my knowledge and 
        continue growing in the tech industry.
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
