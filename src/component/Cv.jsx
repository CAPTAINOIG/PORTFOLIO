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
    <div className='mx-auto text-center mt-10 font-bold '>
    <a className='bg-white p-2 rounded' href="https://docs.google.com/document/d/1MX5O4UrgBBlFQ5YwjrmZTX7JU4LPxXaq-VXQa_6DAA0/edit">DOWNLOAD CV</a>
    </div>
    
    </div>
  )
}

export default Cv