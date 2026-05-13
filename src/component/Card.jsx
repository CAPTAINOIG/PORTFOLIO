import React from 'react'
import www from '../assets/image/www.png'
import frontend from '../assets/image/frontend.png'
import backend from '../assets/image/backend.png'
import mongo from '../assets/image/mongo.png'

const Card = () => {
  const cards = [
    { icon: www, title: 'Web Developer', color: 'from-blue-500 to-cyan-500' },
    { icon: frontend, title: 'Frontend Developer', color: 'from-purple-500 to-pink-500' },
    { icon: backend, title: 'Backend Developer', color: 'from-green-500 to-teal-500' },
    { icon: mongo, title: 'Mongo DB', color: 'from-orange-500 to-yellow-500' }
  ]

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="group relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl rounded-2xl" 
                   style={{ background: `linear-gradient(135deg, ${card.color.includes('blue') ? '#3b82f6' : card.color.includes('purple') ? '#a855f7' : card.color.includes('green') ? '#22c55e' : '#f97316'}, ${card.color.includes('cyan') ? '#06b6d4' : card.color.includes('pink') ? '#ec4899' : card.color.includes('teal') ? '#14b8a6' : '#eab308'})` }}>
              </div>
              <div className="relative glass rounded-2xl p-8 text-center hover:glass-hover transition-all duration-300 group-hover:-translate-y-2">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-r"
                     style={{ background: `linear-gradient(135deg, ${card.color.includes('blue') ? '#3b82f6' : card.color.includes('purple') ? '#a855f7' : card.color.includes('green') ? '#22c55e' : '#f97316'}, ${card.color.includes('cyan') ? '#06b6d4' : card.color.includes('pink') ? '#ec4899' : card.color.includes('teal') ? '#14b8a6' : '#eab308'})` }}>
                  <img src={card.icon} alt="" className="w-10 h-10" />
                </div>
                <p className="text-xl font-bold text-white">{card.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Card
