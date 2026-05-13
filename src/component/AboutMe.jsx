import React, { useEffect } from 'react'
import { Link } from 'react-scroll'
import 'aos/dist/aos.css'
import AOS from 'aos'

const AboutMe = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, [])
  
  return (
    <section id='about' className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">About Me</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Who I <span className="gradient-text">Am</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="glass rounded-3xl p-8 md:p-12" data-aos="fade-up" data-aos-delay="200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">Overview</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I'm a skilled web developer with experience in JavaScript, and expertise in frameworks like React and Express. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold gradient-text">3+</div>
                    <div className="text-gray-400 text-sm mt-1">Years Experience</div>
                  </div>
                  <div className="glass rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold gradient-text">20+</div>
                    <div className="text-gray-400 text-sm mt-1">Projects Completed</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-lg opacity-20"></div>
                  <div className="relative glass rounded-2xl p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-primary-400 rounded-full"></div>
                        <span className="text-gray-300">Frontend Development</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-accent-400 rounded-full"></div>
                        <span className="text-gray-300">Backend Development</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-300">Full Stack Applications</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <span className="text-gray-300">UI/UX Implementation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
