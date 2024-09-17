"use client"

import Link from "next/link";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header"

import { useState, useEffect } from 'react'

export default function HomePage() {

  const [headerAlt, setHeaderAlt] = useState(false)
  const [homeAlt, setHomeAlt] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Calculate if the user is within 20% of the bottom of the page
      const threshold = documentHeight - (windowHeight * 1.1);

      if (scrollPosition >= threshold) {
        setHeaderAlt(true);
        setHomeAlt(true);
      } else {
        setHeaderAlt(false);
        setHomeAlt(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='m-0 p-0'>
      <Header 
        headerState = {headerAlt}
        homeState = {homeAlt}
      />
      <Hero />
      <About />
      <Projects />
      <Contact/>
    </div>
  );
}
