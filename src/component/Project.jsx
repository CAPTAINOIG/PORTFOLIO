import React, { useEffect } from 'react'
import { ProjectList } from './ProjectList'
import Aos from 'aos'

const Project = () => {
    useEffect(() => {
      Aos.init({
        duration: 1000
      })
    }, [])
    
  return (
    <section id='projects' className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">My Work</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Recent <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Below projects showcases my work and experience in building real world applications. Each work is briefly described with links to code repository and demo links. The projects reflect my ability to work with different technologies without compromising quality in my work.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ProjectList.map((item, index) => (
            <div 
              key={index} 
              className="group relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="glass rounded-3xl overflow-hidden hover:glass-hover transition-all duration-300 group-hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
                    src={item.image} 
                    alt={item.title} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                    {item.content}
                  </p>
                  <a 
                    href={item.gitlink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300"
                  >
                    View Project
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project
