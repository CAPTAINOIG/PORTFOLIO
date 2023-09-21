import React, { useEffect } from 'react'
import team from '../assets/image/team.png'
import {AiFillGithub} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {RiTwitterXLine} from 'react-icons/ri'


import Aos from 'aos'
const Contact = () => {
  useEffect(() => {
    Aos.init({
      duration:3000
    })
  }, [])
  
  return (
    <div data-aos="flip-up" id='contact'>
    <div id='href'>
    <a href="https://github.com/CAPTAINOIG"><AiFillGithub className=' ms-10 text-white me-19' size={36}/></a>
    <a href="https://www.linkedin.com/in/samsudeen-abdullahi-645613274/"><BsLinkedin className='mt-5 ms-10 text-white me-19' size={36}/></a>
   <a href="https://twitter.com/ABDULLAHISAMSU8"><RiTwitterXLine className='ms-10 text-white mt-10' size={36}/></a>
    </div>
      <div className='grid lg:grid-cols-2'>
      <div className='lg:mt-36 mt-10 lg:ms-28 ms-8'>
      <div className='text-white'>CONTACT ME</div>
      <div className='my-2 w-80'>
          <label className='text-white' htmlFor="">Name</label> <br />
          <input className='border w-full rounded' type="text" />
          </div>
          <div className='my-2 w-80'>
          <label className='text-white' htmlFor="">Email</label> <br />
          <input className='w-full rounded' type="text" />
          </div>
          <div className='my-2 w-80'>
          <label className='text-white' htmlFor="">Organization</label> <br />
          <input className='w-full rounded' type="text" />
          </div>
          <div className='my-2 w-80'>
          <label className='text-white' htmlFor="">Message</label> <br />
          <textarea className='w-full rounded'  cols="30" rows="5"></textarea>
          </div>
          <button className='text-white w-80 rounded font-bold bg-red-500 p-2'>Send Message</button>
        </div>
        <div>
          <img src={team} alt="" width={700}  />
        </div>
      </div>
    </div>
  )
}

export default Contact