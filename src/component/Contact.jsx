import React, { useEffect, useState } from 'react'
import team from '../assets/image/team.png'
import { AiFillGithub } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
import { RiTwitterXLine } from 'react-icons/ri'
import axios from 'axios'
import Aos from 'aos'
import { useFormik } from 'formik'
import * as Yup from "yup"

const Contact = () => {
  const [userMessage, setUserMessage] = useState("")

  useEffect(() => {
    Aos.init({
      duration: 1000
    })
  }, [])

  let endpoint = 'https://portfolio-backend-d216.onrender.com/contact'
  
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      organization: "",
      message: "",
    },
    onSubmit: (values, { resetForm }) => {
      axios.post(endpoint, values)
        .then((response) => {
          console.log(response.data.message);
          setUserMessage(response.data.message)
        })
        .catch((err) => {
          console.log(err);
        })
      resetForm({ values: "" })
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("This field is required"),
      email: Yup.string().required("This field is required").email("You must enter an email address"),
      organization: Yup.string().required("This field is required"),
      message: Yup.string().required("This field is required"),
    })
  })

  return (
    <section id='contact' className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div data-aos="fade-right">
            <div className="glass rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-bold mb-8 text-white">Send a Message</h3>
              
              <form action="" onSubmit={formik.handleSubmit} className="space-y-6">
                <div>
                  <label className="text-gray-300 text-sm font-medium block mb-2">Fullname</label>
                  <input 
                    type="text" 
                    placeholder="Enter Your Fullname" 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    className={`w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors ${formik.touched.fullName && formik.errors.fullName ? "border-red-500" : ""}`}
                    value={formik.values.fullName} 
                    name='fullName' 
                  />
                  {formik.touched.fullName && formik.errors.fullName && (
                    <p className="text-red-400 text-sm mt-2">{formik.errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label className="text-gray-300 text-sm font-medium block mb-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="Enter Your Email" 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    className={`w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors ${formik.touched.email && formik.errors.email ? "border-red-500" : ""}`}
                    value={formik.values.email} 
                    name='email' 
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-400 text-sm mt-2">{formik.errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="text-gray-300 text-sm font-medium block mb-2">Organization</label>
                  <input 
                    type="text" 
                    placeholder="Enter Your Organization" 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    className={`w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors ${formik.touched.organization && formik.errors.organization ? "border-red-500" : ""}`}
                    value={formik.values.organization} 
                    name='organization' 
                  />
                  {formik.touched.organization && formik.errors.organization && (
                    <p className="text-red-400 text-sm mt-2">{formik.errors.organization}</p>
                  )}
                </div>
                
                <div>
                  <label className="text-gray-300 text-sm font-medium block mb-2">Message</label>
                  <textarea 
                    placeholder="Enter Your Message" 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    className={`w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors resize-none ${formik.touched.message && formik.errors.message ? "border-red-500" : ""}`}
                    value={formik.values.message} 
                    name='message' 
                    cols="30" 
                    rows="5"
                  ></textarea>
                  {formik.touched.message && formik.errors.message && (
                    <p className="text-red-400 text-sm mt-2">{formik.errors.message}</p>
                  )}
                </div>
                
                <button 
                  type='submit' 
                  className="w-full py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl font-bold text-white hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Send Message
                </button>
                
                {userMessage && (
                  <div className="text-center text-green-400 font-semibold mt-4">
                    {userMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
          
          <div data-aos="fade-left">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl blur-xl opacity-20"></div>
              <div className="relative glass rounded-3xl p-8 md:p-10">
                <img src={team} alt="" className="rounded-2xl w-full mb-8" />
                
                <div className="space-y-6">
                  <h4 className="text-xl font-bold text-white">Connect With Me</h4>
                  <p className="text-gray-400">
                    Feel free to reach out through any of these platforms. I'm always open to discussing new projects and opportunities.
                  </p>
                  
                  <div className="flex gap-4">
                    <a 
                      href="https://github.com/CAPTAINOIG" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-14 h-14 glass rounded-xl flex items-center justify-center text-gray-400 hover:text-primary-400 hover:glass-hover transition-all duration-300"
                    >
                      <AiFillGithub size={28} />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/samsudeen-abdullahi-645613274/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-14 h-14 glass rounded-xl flex items-center justify-center text-gray-400 hover:text-primary-400 hover:glass-hover transition-all duration-300"
                    >
                      <BsLinkedin size={28} />
                    </a>
                    <a 
                      href="https://twitter.com/ABDULLAHISAMSU8" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-14 h-14 glass rounded-xl flex items-center justify-center text-gray-400 hover:text-primary-400 hover:glass-hover transition-all duration-300"
                    >
                      <RiTwitterXLine size={28} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
