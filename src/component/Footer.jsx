import React from 'react'

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="font-display text-2xl font-bold mb-4">
            <span className="gradient-text">Oluwasegun</span>
          </div>
          <p className="text-gray-400 mb-6">
            Building exceptional digital experiences with modern technologies and creative solutions.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 text-sm">
            © 2024 Dev OIG - Your Favorite Full Stack Developer
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
