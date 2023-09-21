import React, { useEffect, useState } from "react";
import "./App.css";
import AboutMe from "./component/AboutMe";
import Skills from "./component/Skills";
import NavBarDesktop from "./component/NavBarDesktop";
import { FaBars } from 'react-icons/fa'
// import NavBar from "./component/Navbar";
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

    AOS.init();

  }, [])


  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);
  return (
    <>

      <div className="min-h-screen font-bodyFont  overflow-x-hidden">
        <div className="bg-lightBg fixed w-full top-0 z-[100000]">
          <NavBarDesktop />
          <div className=" text-red-200 cursor-pointer text-[1rem] lg:hidden transition duration-[0.8s]">
            <Nav isOpen={isOpen} handleClose={toggleIsOpen} />
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
        <Footer/>
      </div>
    </>


  );
}

export default App;