import React, { useEffect } from 'react'
import { education } from './EducationList'
import {RiGraduationCapLine} from 'react-icons/ri'
import Aos from 'aos'
import { Link } from 'react-scroll'


const Education = () => {

  useEffect(() => {
  Aos.init({
    duration:3000
  })
    
  }, [])
  
  return (
    <>
<section data-aos="flip-down">
<div id='education' className='flex lg:ms-96 ms-20 gap-5 mb-10 data-aos="flip-down"'>
<div className='text-white text-4xl text-center lg:ms-36'>Education</div>
    <div className='text-white mt-1'><RiGraduationCapLine size={35}/></div>
    </div>
        <div className='text-gray-600 lg:flex my-5 text-center'>
        {
          
            education.map((item, index)=>(
                <div id='edu' className='mx-auto rounded' key={index}>
                <img className='img-fluid mx-auto lg:mt-5 mt-5 mb-2' width={50} src={item.img} alt="" />
                <h1 className='font-bold'>{item.School}</h1>
                    <p className='font-bold'>{item.Programme}</p>
                    <p className='font-bold'>{item.Year}</p>
                    </div>
                    ))
                  }
                  </div>
                  
        </section>
        </>
  )
}

export default Education