import Link from "next/link";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";


export default function HomePage() {
  return (
    <div className='m-0 p-0'>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
