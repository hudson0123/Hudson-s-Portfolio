"use client"

import React from 'react'

export default function Hero() {

  return (
    <div className="grid grid-cols-2 h-screen bg-gradient-to-br from-[#333333] to-blue-500">
      <div className="grid place-content-center text-center">
          <h1 className="text-white">Hello, I'm Hudson</h1>
          <h3 className="text-white">University of Georgia Student | Aspiring Full Stack Developer</h3>
      </div>
      <div className="grid relative place-content-center mr-20 ">
        <img className="h-60" src="https://news.uga.edu/wp-content/uploads/2021/03/arch_sun_nosign.jpg" alt="uga"></img>
        <h1 className="absolute bottom-[300px] right-[350px] text-white border-black border-w-3 size-20 text-nowrap">Student at University of Georgia</h1>
      </div>
    </div>
  )
}
