"use client";

import React, { useState } from 'react';
import Project from './Project.js';
import SkillsBar from './SkillsBar.js';

export default function Projects() {
  
  // Immutable state updates for hover states
  const [hoverState, setHoverState] = useState({
    hoverText1: false,
    hoverText2: false,
    hoverText3: false,
  });

  // Handlers for hover states
  const handleMouseEnter = (textNumber) => {
    setHoverState(prevState => ({
      ...prevState,
      [`hoverText${textNumber}`]: true,
    }));
  };

  const handleMouseLeave = (textNumber) => {
    setHoverState(prevState => ({
      ...prevState,
      [`hoverText${textNumber}`]: false,
    }));
  };

  const handleClick = () => {
    window.scrollTo(0, 3300);
  };

  return (
    <div className="relative">
      {/* Grid layout with responsive design */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-20 p-4 sm:pl-[65px] place-content-center text-center bg-gradient-to-br from-[#333333] to-blue-500 h-[90vh]">
        <Project
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave(1)}
          details={{
            title: "Portfolio Website",
            date: "August, 2024",
            description: "This is my Description",
            image: "/project2.png",
          }}
        />
        <Project
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave(2)}
          details={{
            title: "Portfolio Website",
            date: "August, 2024",
            description: "This is my Description",
            image: "/project1.jpg",
          }}
        />
        <Project
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={() => handleMouseLeave(3)}
          details={{
            title: "Portfolio Website",
            date: "August, 2024",
            description: "This is my Description",
            image: "/project3.jpg",
          }}
        />
      </div>

      {/* SkillsBar is hidden on mobile and visible from md (medium) screens */}
      <div className="hidden md:block">
        <SkillsBar 
          hover1={hoverState.hoverText1}
          hover2={hoverState.hoverText2}
          hover3={hoverState.hoverText3}
        />
      </div>
    </div>
  );
}
