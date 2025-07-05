'use client'

import React, { useRef, useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()
  const [status, setStatus] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()
    setStatus('Sending...')

    const formData = new FormData(form.current)

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      {
      user_name: formData.get('user_name'),
      user_email: formData.get('user_email'),
      user_phone: formData.get('user_phone'),
      message: formData.get('message'),
      reply_to: formData.get('user_email'), // this enables replying to user
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setStatus('Message sent successfully!')
        form.current.reset()
      })
      .catch((error) => {
        console.error('Failed to send message:', error)
        setStatus('Failed to send message.')
      })
  }

  return (
    <div className="min-h-screen bg-[#f9f9f9] py-16 px-4 md:px-6 flex flex-col items-center">
      <div className="w-full max-w-6xl">
        <h2 className="text-4xl font-thin text-center text-orange-500 mb-14 tracking-tight">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          <div className="border-[2vw] border-orange-200 bg-white shadow-md p-10 flex flex-col items-center justify-stretch text-center">
            <h3 className="text-2xl font-semibold text-gray-600 mb-6 border-b-2 border-orange-300 pb-2 w-full">Imayam Group</h3>
            <div className="space-y-6 text-gray-700">
              <div className="flex items-center gap-3">
                <FaPhone className="text-orange-500 text-lg rotate-90" />
                <div className='flex flex-col font-bold text-gray-500'>
                  <span>+91 99999 99999</span>
                  <span>+91 88888 88888</span>
                </div>
              </div>
              {/* <div className="flex items-center gap-3">
                <FaPhone className="text-orange-500 text-lg rotate-90" />
              </div> */}
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-orange-500 text-lg" />
                <span className='font-bold text-gray-500'>info@imayampromoters.com</span>
              </div>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-orange-500 text-lg mt-1" />
                <span className='font-bold text-gray-500'>
                  P5M8+74P, MDR 581, Illalur RF, <br />
                  Illalur, Tamil Nadu 603110
                </span>
              </div>
            </div>
            </div>
            {/* Contact Form */}
            <form ref={form} onSubmit={sendEmail} className="bg-white border border-gray-200 p-10 space-y-6">
              <h3 className="text-2xl font-semibold text-gray-600 border-b-2 border-orange-300 mb-4 pb-2">Send us a message</h3>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Name</label>
                <input name="user_name" required type="text" placeholder="Your name" className="w-full border border-gray-300 text-gray-500 px-4 py-2 rounded-md font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                <input name="user_email" required type="email" placeholder="you@example.com" className="w-full border border-gray-300 text-gray-500 px-4 py-2 rounded-md font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Phone</label>
                <input name="user_phone" required type="tel" placeholder="Your phone number" className="w-full border border-gray-300 text-gray-500 px-4 py-2 rounded-md font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Message</label>
                <textarea name="message" required rows={4} placeholder="Write your message..." className="w-full border border-gray-300 text-gray-500 px-4 py-2 rounded-md font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition" />
              </div>
              <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-md shadow transition">
                Submit
              </button>
              {status && <p className="text-sm mt-2 text-gray-600">{status}</p>}
            </form>
          </div>

{/* Google Map */}
{/* <div className="mt-16 w-full h-[400px] rounded-xl overflow-hidden border-[3px] border-orange-200 shadow-md">
  <iframe
    title="Imayam Group Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.4257605476885!2d80.046681!3d12.748998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f52b88b0e2df%3A0x204a30ddf99865a1!2sImayam%20Group!5e0!3m2!1sen!2sin!4v1720122348654!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div> */}
<div className="mt-16 w-full h-[400px] rounded-xl overflow-hidden border-[3px] border-orange-200 shadow-md">
  <iframe
    title="Imayam Group Location"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    src="https://maps.google.com/maps?q=10.957574,79.382053&z=17&output=embed"
  ></iframe>
</div>  
        </div>
      </div>
      )
}

      export default Contact
