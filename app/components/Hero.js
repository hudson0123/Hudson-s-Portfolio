"use client";

import React, { useEffect, useState } from "react";

export default function Hero() {
  const [imageBlur, setImageBlur] = useState(true);

  useEffect(() => {
    setImageBlur(false);
  }, []);

  const blurStyle = imageBlur
    ? "blur-sm duration-700 scale-50 ease-in-out"
    : "blur-none duration-700 scale-100 ease-in-out";

  return (
    <div id="hero" className="grid grid-cols-1 md:grid-cols-2 h-[calc(100dvh)] bg-gradient-to-br from-[#333333] to-blue-500">
      <div className="flex flex-col justify-center items-center text-center p-4">
        <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
          Hello, I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r via-yellow-200 from-white to-red-400 bg-300% animate-gradient">
            Hudson.
          </span>
        </h1>
        <p className="text-lg text-white md:text-xl lg:text-2xl dark:text-white">
          Aspiring Software Engineer & Student at The University of Georgia.
        </p>
      </div>

      <div className="flex justify-center items-center p-4 md:p-0">
        <img
          className={"h-50 md:h-100 aspect-auto max-w-xs md:max-w-lg transition-all rounded-2xl " + blurStyle}
          src="https://news.uga.edu/wp-content/uploads/2021/03/arch_sun_nosign.jpg"
          alt="uga"
          loading="lazy"
        />
      </div>
    </div>
  );
}
