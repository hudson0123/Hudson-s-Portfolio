"use client"

import React from 'react'
import { useState } from 'react'
import Project from './Project.js'
import SkillsBar from './SkillsBar.js'

export default function Projects() {
  
  // Define separate hover states for each text
  const [hoverText1, setHoverText1] = useState(false);
  const [hoverText2, setHoverText2] = useState(false);
  const [hoverText3, setHoverText3] = useState(false);

  // Define handlers for each text element
  const handleMouseEnter1 = () => setHoverText1(true);
  const handleMouseLeave1 = () => setHoverText1(false);

  const handleMouseEnter2 = () => setHoverText2(true);
  const handleMouseLeave2 = () => setHoverText2(false);

  const handleMouseEnter3 = () => setHoverText3(true);
  const handleMouseLeave3 = () => setHoverText3(false);

  const handleClick = () => {
    window.scrollTo(0,3300)
  }

  
  return (
    <div className="relative ">
        <div className="grid grid-cols-3 pb-20 pl-[65px] place-content-center text-center bg-gradient-to-br from-[#333333] to-blue-500 h-[90vh]">
        <Project
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}
          details={{
            title: "Portfolio Website",
            date: "August, 2024",
            description: "This is my Description",
            image: "/project2.png"
          }}
        />
        <Project
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
          details={{
            title: "Portfolio Website",
            date: "August, 2024",
            description: "This is my Description",
            image: "/project1.jpg"
          }}
        />
        <Project
          onMouseEnter={handleMouseEnter3}
          onMouseLeave={handleMouseLeave3}
          details={{
            title: "Portfolio Website",
            date: "August, 2024",
            description: "This is my Description",
            image: "/project3.jpg"
          }}
        />
      </div>
      <SkillsBar 
        hover1={hoverText1}
        hover2={hoverText2}
        hover3={hoverText3}
      />
    </div>
  )
}
