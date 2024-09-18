"use client";

import React, { useState, useEffect } from 'react';
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

  return (
    <div id="projects" className="relative">
      {/* Grid layout with responsive design */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-20 px-4 sm:px-[65px] place-content-center text-center bg-gradient-to-br from-[#333333] to-blue-500 min-h-[90vh]">
        <Project
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave(1)}
          details={{
            title: "Kindred Therapy Website",
            date: "July, 2024",
            description: "Collaborated with local small business Kindred Therapy over the summer to develop a\
            customer-facing website. Leveraged React, Next.js, and JavaScript to implement key\
            interactive features, including appointment scheduling, dynamic FAQs, and a contact\
            form, enhancing user engagement and functionality.",
            image: "/project2.png",
          }}
          index = {1}
        />
        <Project
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave(2)}
          details={{
            title: "JavaFX Snake Game",
            date: "December 2022",
            description: "Developed a playable snake game using JavaFX with adjustable gameplay settings. Incorporated object-oriented programming principles such as encapsulation, inheritance, polymorphism, and abstraction to enhance code modularity, reusability, and maintainability.",
            image: "/project1.jpg", // Ensure you have an appropriate image for this project
          }}
          index = {2}
        />
        <Project
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={() => handleMouseLeave(3)}
          details={{
            title: "Convolutional Classifier",
            date: "May, 2024",
            description: "Designed and evaluated both linear and convolutional classifiers \
            using Python and PyTorch on the CIFAR-10 dataset, which consists of 60,000 32x32 \
            color images categorized into 10 classes. Applied optimization techniques such as \
            batch normalization, ADAM, and dropout, achieving an accuracy rate exceeding 80%.",
            image: "/project3.jpg",
          }}
          index = {3}
        />
      </div>
      {/* SkillsBar is hidden on mobile and visible from md (medium) screens */}
      <div className="relative hidden md:block">
      <img className="h-[300px] bottom-10 right-3 absolute rotate-3 transition delay-150 duration-300 ease-in-out opacity-1" src="/Drawing.png"/>
        <SkillsBar 
          hover1={hoverState.hoverText1}
          hover2={hoverState.hoverText2}
          hover3={hoverState.hoverText3}
        />
      </div>
    </div>
  );
}
