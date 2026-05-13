import React, { useEffect, useState } from "react";
import "./App.css";
import AboutMe from "./component/AboutMe";
import Skills from "./component/Skills";
import NavBarDesktop from "./component/NavBarDesktop";
import { FaBars } from 'react-icons/fa'
import Middle from "./component/Middle";
import Card from "./component/Card";
import AOS from "aos";
import 'aos/dist/aos.css'
import Education from "./component/Education";
import './index.css'
import Cv from "./component/Cv";
import Project from "./component/Project";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Nav from "./component/Nav";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
    });
  }, [])

  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen font-sans overflow-x-hidden relative">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
      
      <div className="relative z-10">
        <div className="glass fixed w-full top-0 z-[100000]">
          <NavBarDesktop />
          <div className="text-white cursor-pointer text-[1rem] lg:hidden transition duration-[0.8s] p-4">
            <Nav isOpen={isOpen} handleClose={toggleIsOpen} />
            <FaBars className="mt-2 w-8" onClick={toggleIsOpen} />
          </div>
        </div>
        <Middle />
        <AboutMe />
        <Card />
        <Skills />
        <Education />
        <Cv />
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;