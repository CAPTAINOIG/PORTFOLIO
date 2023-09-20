import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import 'aos/dist/aos.css'
import cross from '../assets/image/cross.png'
const Middle = () => {
    
    return (
        <>
   
        <div data-aos="fade-right">
        <h1 className="lg:ms-32 font-bold sm:mt-20 mt-10 ms-10 text-white lg:text-7xl text-5xl sm:mt-5">
        <span>Hello!, 👋</span> I'm <br /> <span className='text-lime-500'>Oluwasegun</span>
                </h1>

                <div className='lg:ms-32 ms-10 mt-5 text-white text-5xl'>
                    <h2 className=''>
                        An Expert in{" "}
                        <TypeAnimation
                            sequence={[
                                "Front-End",
                                500,
                                "Back-End",
                                500,
                                "CSS",
                                500,
                                "SASS",
                                500,
                                "Bootstrap",
                                1000,
                                "MERN Stack",
                                1000,
                                "Express JS",
                                1000,
                                "JavaScript",
                                1000,
                                "React JS",
                                1000,
                                "HTML",
                                1000,
                            ]}
                            style={{ fontSize: "1em" }}
                            repeat={Infinity}
                            />
                            </h2>
                            </div>
                    
                            
                            <div className='lg:ms-52 my-5 mt-10'>
                            <img src={cross} alt="" width={500} />
                            </div>
                            </div>
       
            
        </>
    )
}

export default Middle