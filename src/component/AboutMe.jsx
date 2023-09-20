import React, { useEffect } from 'react'
import { Link } from 'react-scroll'
import 'aos/dist/aos.css'
import AOS from 'aos'


const AboutMe = () => {

  useEffect(() => {
    AOS.init({
      duration:3000
    });
    
    
  }, [])
  
  return (
    
  <section id='about' data-aos="fade-up">
  <h1 className='lg:ms-32 ms-10 sm:mt-20 mt-20 text-white lg:text-3xl text-3xl sm:mt-5'>ABOUT ME</h1>
  <p className='lg:ms-32 ms-10 text-white lg:text-5xl text-3xl font-bold'>Overview</p>
  <p className='lg:ms-32 ms-5 text-white sm:mt-5 font-normal'>I'm a skilled web developer with experience in JavaScript, and expertise in frameworks <br /> like React and Express I'm a quick learner and collaborate closely  with clients <br /> to create efficient, scalable, and user-friendly solutions that solve real-world problems.</p>
  </section>
 
  )
}

export default AboutMe