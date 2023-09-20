import React from 'react'
import {skills} from './SkillsList'
import {BsCodeSlash} from 'react-icons/bs'


const Skills = () => {

  return (
    <div  data-aos="fade-right">
    <div className='text-white bg-gray-800 text-center my-5 mt-10'>
    <div className='text-center justify-center text-3xl gap-3 flex'>
    <span className='mt-1'>
      <BsCodeSlash/>
    </span>
    <span>My Skills</span>
    </div>
        <div className='text-center mt-2'>The skills utilized to manifest the design goes beyond the technical skills but also include creativity, technical expertise, problem-solving, attention to detail, effective communication, adaptability, collaboration, and a keen understanding of user experience and aesthetics.</div>
    </div>




    <div id="skills" className='card text-white text-center grid grid-cols-5 p-10 text-xs'>
    
      {skills.map((item, index) => (
        <div className="text-center lg:p-10  mx-auto" key={index}>
          <div className='text-[40px]'>{item.icon}</div>

          <h5 className='mt-2'>{item.title}</h5>
        </div>
      ))}
    
  </div>
    </div>
  )
}

export default Skills