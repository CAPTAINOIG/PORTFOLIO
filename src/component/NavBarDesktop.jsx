import React from 'react'
import { options } from './NavList'
import { Link } from 'react-scroll'

const NavBarDesktop = () => {
  return (
    <div className='hidden lg:block bg-slate-950 p-5'>
    <ul className='flex items-center justify-center gap-[2rem] '>
    {options.map((item, index) => (
      <li key={index}>
      <Link
      smooth
          to = {item.link}
          key={item.name} className=' text-white cursor-pointer hover:bg-btn hover:text-lightBg text-[16px] hover:text-lime-400  p-1
          w-[100px] text-center rounded-md'>{item.name}
          </Link>
          </li>
          ))}
          </ul>
          </div>
          )
        }
        

export default NavBarDesktop