import React from 'react'
import www from '../assets/image/www.png'
import frontend from '../assets/image/frontend.png'
import backend from '../assets/image/backend.png'
import mongo from '../assets/image/mongo.png'

const Card = () => {
  return (
    <div data-aos="flip-left">
    <div className='grid lg:grid-cols-4 gap-5 my-2 lg:ms-20 mx-10  lg:me-20'>
    <div id='card' className='bg-gray-600 shadow p-2 pb-5 mt-20 rounded-lg'>
    <img className='mx-auto mt-10' src={www} alt="" width={50} />
    <p className='text-center mt-10 font-bold text-white text-2xl'>Web Developer</p>
    </div>
    <div id='card' className='bg-gray-600 shadow lg:mt-20 pb-5 rounded-lg'>
    <img className=' mx-auto mt-10' src={frontend} alt="" width={50} />
    <p className='text-center mt-10 font-bold text-white text-2xl'>Frontend Developer</p>
    </div>
    <div id='card' className='bg-gray-600 shadow lg:mt-20 pb-5 rounded-lg'>
    <img className='mx-auto mt-10' src={backend} alt="" width={50} />
    <p className='text-center mt-10 font-bold text-white text-2xl'>Backend Developer</p>
    </div>
    <div id='card' className='bg-gray-600 shadow lg:mt-20 pb-5 rounded-lg'>
    <img className='mx-auto mt-5' src={mongo} alt="" width={50} />
    <p className='text-center mt-10 font-bold text-white text-2xl'>Mongo DB</p>
    </div>
    </div>
    </div>
  )
}

export default Card