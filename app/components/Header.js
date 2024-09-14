"use client"

import React from 'react'

export default function Header() {

  const scrollToContactPage = () => {
    window.scrollTo(0,3300)
  }

  const scrollToProjectsPage = () => {
    window.scrollTo(0,2100)
  }

  const scrollToAboutPage = () => {
    window.scrollTo(0,1050)
  }

  const scrollToTop = () => {
    window.scrollTo(0,0)
  }

  return (
    <div className="fixed top-0 left-0 right-0 bg-transparent text-white font-mono z-10 p-2  font-normal">
      <div className="grid grid-cols-2">
        <div className="p-2 cursor-pointer">
          <a onClick={scrollToTop}className="">
            <img className="h-[40px] hover:scale-110 duration-300" src="/home-svgrepo-com.png" alt="home" />
          </a>
        </div>
        <div className="flex justify-end  align-bottom space-x-5">
          <h1 className="text-[#FCFAF9] cursor-pointer text-nowrap mt-4 hover:text-black hover:text-[17px] duration-300">
            <a onClick={scrollToAboutPage}>About Me</a>
          </h1>
          <h1 className="text-[#FCFAF9] cursor-pointer mt-4 hover:text-black hover:text-[17px] duration-300">
            <a onClick={scrollToProjectsPage}>Projects</a>
          </h1>
          <button onClick={scrollToContactPage} className="bg-transparent hover:bg-[#48E5C2] text-[#48E5C2] hover:text-black px-4 py-0 border border-[#48E5C2] hover:border-black rounded duration-300">
            Contact Me
          </button>
        </div>
      </div>
    </div>


  )
}
