"use client"

import React from 'react'
import { useEffect, useState } from 'react'

export default function Hero() {

  const [imageBlur, setImageBlur] = useState(true)

  useEffect(() => {
    setImageBlur(false)
  }, [])

  const blurStyle = imageBlur ? "blur-sm duration-700 scale-50 ease-in-out" : "blur-none duration-700 scale-100 ease-in-out" 


  return (
    <div className="grid grid-cols-2 h-screen bg-gradient-to-br from-[#333333] to-blue-500">
      <div className="grid place-content-center text-center">
      <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">Hello, I&apos;m <span class={"text-transparent bg-clip-text bg-gradient-to-r via-yellow-200 from-white to-red-400 bg-300% animate-gradient"}>Hudson.</span></h1>
      <p class="text-4xl font-thin text-gray-500 lg:text-xl dark:text-gray-100">Aspiring Software Engineer & Student at The University of Georgia.</p>
      </div>
      <div className="grid relative place-content-center mr-20 ">
        <img className={"h-90 max-w-lg transition-all rounded-2xl " + blurStyle} src="https://news.uga.edu/wp-content/uploads/2021/03/arch_sun_nosign.jpg" alt="uga"></img>
      </div>
    </div>
  )
}
