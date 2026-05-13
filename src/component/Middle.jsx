import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import 'aos/dist/aos.css'
import cross from '../assets/image/cross.png'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Middle = () => {
    
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            <div className="container mx-auto px-6 py-20 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="lg:w-1/2 text-center lg:text-left" data-aos="fade-right">
                        <div className="inline-block px-4 py-2 glass rounded-full mb-6">
                            <span className="text-primary-300 text-sm font-medium">👋 Welcome to my Portfolio</span>
                        </div>
                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                            Hello!, I'm <br /> 
                            <span className="gradient-text">Oluwasegun</span>
                        </h1>
                        <div className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-8 font-medium">
                            <h2 className="">
                                A Proficient in{" "}
                                <span className="text-primary-400">
                                    <TypeAnimation
                                        sequence={[
                                            "Front-End",
                                            2000,
                                            "Back-End",
                                            2000,
                                            "React JS",
                                            2000,
                                            "Node JS",
                                            2000,
                                            "Full Stack",
                                            2000,
                                        ]}
                                        style={{ fontSize: "1em", fontWeight: "700" }}
                                        repeat={Infinity}
                                        cursor={true}
                                    />
                                </span>
                            </h2>
                        </div>
                        <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
                            Building exceptional digital experiences with modern technologies and creative solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a href="#projects" className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300 transform hover:-translate-y-1">
                                View My Work
                            </a>
                            <a href="#contact" className="px-8 py-4 glass rounded-full font-semibold text-white hover:glass-hover transition-all duration-300">
                                Get In Touch
                            </a>
                        </div>
                        <div className="flex gap-6 mt-10 justify-center lg:justify-start">
                            <a href="https://github.com/CAPTAINOIG" className="text-gray-400 hover:text-primary-400 transition-colors duration-300 transform hover:scale-110">
                                <FaGithub size={28} />
                            </a>
                            <a href="https://www.linkedin.com/in/samsudeen-abdullahi-645613274/" className="text-gray-400 hover:text-primary-400 transition-colors duration-300 transform hover:scale-110">
                                <FaLinkedin size={28} />
                            </a>
                            <a href="https://twitter.com/ABDULLAHISAMSU8" className="text-gray-400 hover:text-primary-400 transition-colors duration-300 transform hover:scale-110">
                                <FaTwitter size={28} />
                            </a>
                        </div>
                    </div>
                    <div className="lg:w-1/2" data-aos="fade-left">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl blur-xl opacity-30 animate-pulse-slow"></div>
                            <div className="relative glass rounded-3xl p-2">
                                <img 
                                    src={cross} 
                                    alt="Oluwasegun" 
                                    className="rounded-2xl w-full max-w-md mx-auto animate-float"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-gray-500 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    )
}

export default Middle
