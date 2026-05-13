import React from 'react'
import { skills } from './SkillsList'
import { BsCodeSlash } from 'react-icons/bs'

const Skills = () => {

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">What I Do</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The skills utilized to manifest the design goes beyond the technical skills but also include creativity, technical expertise, problem-solving, attention to detail, effective communication, adaptability, collaboration, and a keen understanding of user experience and aesthetics.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((item, index) => (
            <div 
              key={index} 
              className="group relative"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="glass rounded-2xl p-6 text-center hover:glass-hover transition-all duration-300 group-hover:-translate-y-2">
                <div className="text-5xl mb-4 text-primary-400 group-hover:text-accent-400 transition-colors duration-300">
                  {item.icon}
                </div>
                <h5 className="font-semibold text-white">{item.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
