"use client";

import React, { useState } from 'react';

export default function Header({ headerState, homeState }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToContactPage = () => {
    window.scrollTo(0, 3300);
  };

  const scrollToProjectsPage = () => {
    window.scrollTo(0, 2100);
  };

  const scrollToAboutPage = () => {
    window.scrollTo(0, 1050);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const headerStyle = headerState
    ? "text-black hover:text-[#FCFAF9] duration-300"
    : "text-[#FCFAF9] hover:text-black duration-300";
  const homeIcon = homeState ? "/home.svg" : "/home-white.svg";

  return (
    <div className="fixed top-0 left-0 right-0 bg-transparent text-white font-mono z-10 p-2 font-normal">
      <div className="grid grid-cols-2">
        <div className="p-2 cursor-pointer">
          <a href="#hero">
            <img
              className={"h-[40px] hover:scale-110 duration-300 " + headerStyle}
              src={homeIcon}
              alt="home"
            />
          </a>
        </div>

        {/* Hamburger Menu Button for Mobile */}
        <div className="md:hidden flex justify-end p-2">
          <button
            onClick={toggleMobileMenu}
            className="text-xl focus:outline-none"
          >
            <img
              src={isMobileMenuOpen ? "/close.svg" : "/menu.svg"} // Replace with your icon paths
              alt="menu"
              className="h-[30px] w-[30px]"
            />
          </button>
        </div>

        {/* Navigation Links for Larger Screens */}
        <div className="hidden md:flex justify-end space-x-5">
          <h1 className={"cursor-pointer text-nowrap mt-4 hover:text-[17px] duration-300 " + headerStyle}>
            <a onClick={scrollToAboutPage}>About Me</a>
          </h1>
          <h1 className={"cursor-pointer mt-4 hover:text-[17px] duration-300 " + headerStyle}>
            <a onClick={scrollToProjectsPage}>Projects</a>
          </h1>
          <button
            onClick={scrollToContactPage}
            className="bg-transparent hover:bg-[#48E5C2] text-[#48E5C2] hover:text-black px-4 py-0 border border-[#48E5C2] hover:border-black rounded duration-300"
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-end space-y-3 p-4">
          <h1 className={"cursor-pointer text-nowrap hover:text-[17px] duration-300 " + headerStyle}>
            <a href="#aboutme">About Me</a>
          </h1>
          <h1 className={"cursor-pointer hover:text-[17px] duration-300 " + headerStyle}>
            <a href="#projects">Projects</a>
          </h1>
          <button
            className="bg-transparent hover:bg-[#48E5C2] text-[#48E5C2] hover:text-black px-4 py-0 border border-[#48E5C2] hover:border-black rounded duration-300"
          >
            <a href="#contact">
            Contact Me
            </a>
          </button>
        </div>
      )}
    </div>
  );
}