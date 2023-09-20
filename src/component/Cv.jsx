import Aos from 'aos'
import React, { useEffect } from 'react'

const Cv = () => {
    useEffect(() => {
      Aos.init({
        duration:3000
      })
    }, [])
    
  return (
    <div data-aos="fade-up">
    <div className='mx-auto text-center my-5 font-bold '>
    <a className='bg-white p-2 rounded' href="https://drive.google.com/file/d/13luPpatG_DZcLTxwSSasEV-u-DLmgTnK/view?usp=sharing">DOWNLOAD CV</a>
    </div>
    
    </div>
  )
}

export default Cv