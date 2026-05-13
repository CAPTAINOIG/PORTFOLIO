import React from 'react'
import { options } from './NavList'
import { Link } from 'react-scroll'

const NavBarDesktop = () => {
  return (
    <div className="hidden lg:block p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="font-display text-2xl font-bold">
          <span className="gradient-text">Oluwasegun</span>
        </div>
        <ul className="flex items-center gap-8">
          {options.map((item, index) => (
            <li key={index}>
              <Link 
                smooth
                spy
                offset={-100}
                to={item.link}
                activeClass="text-primary-400"
                className="text-gray-300 hover:text-primary-400 transition-colors duration-300 cursor-pointer font-medium"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <a href="#contact" className="px-6 py-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300">
          Hire Me
        </a>
      </div>
    </div>
  )
}

export default NavBarDesktop
