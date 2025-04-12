"use client";

import React from "react";

export default function Hero() {
  return (
    <div id="hero" className="relative h-[calc(100dvh)] bg-[linear-gradient(to_top,_#db624d,_#a25d2d,_#6f5221,_#464120,_#292d20)]">
      <div className="relative flex justify-center  items-center h-full bg-black bg-opacity-50 p-8">
        <div className="text-left max-w-lg ml-20">
          <h1 className="mb-4 text-4xl font-extrabold text-[#DBDBDB] md:text-5xl lg:text-6xl">
            Hello, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r via-[#C9B194] from-[#DBDBDB] to-[#C9B194] bg-300% animate-gradient">
              Hudson.
            </span>
          </h1>
          <p className="text-lg font-thin text-[#DBDBDB] md:text-xl lg:text-2xl dark:text-white mt-2">
            Software Engineer at <a className="inline" target="_blank" href="https://www.Nymbus.com"><span className="bg-white font-normal hover:bg-[#dbdbdb] text-black py-1 px-2 ml-2 rounded-full transition duration-200">Nymbus <img src="/logomark-fullcolor.png" className="h-6 ml-1 mb-1 inline"></img></span></a>
          </p>
        </div>
      </div>
    </div>
  );
}
