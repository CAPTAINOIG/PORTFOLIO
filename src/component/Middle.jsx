import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import 'aos/dist/aos.css'
import cross from '../assets/image/cross.png'
const Middle = () => {
    
    return (
        <>
   
        <div data-aos="fade-right">
        <h1 className="lg:ms-32 font-bold mt-28 lg:mt-36 ms-10 text-white lg:text-7xl text-5xl sm:mt-5">
        <span>Hello!, 👋</span> I'm <br /> <span className='text-lime-500'>Oluwasegun</span>
                </h1>
                <div className='lg:ms-32 ms-10 mt-5 text-white lg:text-5xl text-2xl'>
                    <h2 className=''>
                        A Proficient in{" "}
                        <TypeAnimation
                            sequence={[
                                "Front-End",
                                500,
                                "Back-End",
                                500,
                                "HTML",
                                500,
                                "CSS",
                                500,
                                "Bootstrap",
                                500,
                                "Express JS",
                                500,
                                "JavaScript",
                                500,
                                "Typescript",
                                500,
                                "TailwindCSS",
                                500,
                                "React JS",
                                500,
                                "Node",
                                500,
                                "Angular",
                                500,
                                "PHP",
                                500,
                                "MySQL",
                                500,
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