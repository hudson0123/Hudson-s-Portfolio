"use client";

import React from "react";

export default function Hero() {
  return (
    <div id="hero" className="relative h-[calc(100dvh)]">
      <div className="relative flex justify-center  items-center h-full bg-[#44CCFF] bg-opacity-50 p-8">
        <div className="text-left max-w-lg ml-20">
          <h1 className="mb-4 text-4xl font-extrabold text-black md:text-5xl lg:text-6xl">
            Hello, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r via-gray-600 from-black to-gray-400 bg-300% animate-gradient">
              Hudson.
            </span>
          </h1>
          <p className="text-lg font-thin text-[#DBDBDB] md:text-xl lg:text-2xl dark:text-white mt-2">
            Software Engineer at <a className="inline" target="_blank" href="https://www.Nymbus.com"><span className="text- bg-white font-normal hover:bg-[#dbdbdb] text-black py-1 px-3 ml-2 rounded-full transition duration-200">Nymbus <img src="/logomark-fullcolor.png" className="h-6 ml-1 mb-1 inline"></img></span></a>
          </p>
        </div>
      </div>
    </div>
  );
}
