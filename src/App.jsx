import React, { useEffect, useState } from "react";
import "./App.css";

// import { Route, Routes } from "react-router-dom";
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
import NavBar from "./component/Navbar";
// {isOpen && <NavBar handleClose={toggleIsOpen}/>}
function App() {

  useEffect(() => {

    AOS.init();

  }, [])


  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);
  return (
    <>

      <div className="min-h-screen font-bodyFont">
        <div className="bg-lightBg sticky top-0 z-[100000]">
          <NavBarDesktop />
          <div className=" text-red-200 cursor-pointer text-[1rem] lg:hidden transition duration-[0.8s]">
            <NavBar isOpen={isOpen} handleClose={toggleIsOpen} />
            <FaBars onClick={toggleIsOpen} />
          </div>
        </div>
        <Middle />
        <AboutMe />
        <Card />
        <Skills />
        <Education/>
        <Cv/>
        <Project/>
        <Contact/>
      </div>
    </>


  );
}

export default App;