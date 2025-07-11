'use client'

import React, { useRef, useState } from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import emailjs from 'emailjs-com';
import Image from 'next/image';

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
    <>
    <section id="statistics" className="bg-gray-100 py-4">
                    <div className="relative w-full h-[30vh] overflow-hidden font-sans">
                            <Image
                              src={'/drone-photo-1.jpg'}
                              alt={'cover-image'}
                              width={600}
                              height={400}
                              className="w-full h-auto"
                            />
                            <div className="absolute top-1/2 left-1/2 w-[90%] -translate-x-1/2 -translate-y-1/2 text-white text-center z-20 p-10 rounded-xl">
                              <h1 className="text-3xl font-semibold tracking-[2.4px] leading-[1.4] text-white uppercase tracking-wider mb-5">
                                Contact Us
                              </h1>
                            </div>
                          </div>
                </section>
    <div className="min-h-screen bg-[#f9f9f9] pt-16 px-4 md:px-6 flex flex-col items-center">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          {/* Left Panel - Contact Info */}
          <div className="bg-[#FAF3EB] px-10 py-12">
            {/* <h2 className="text-3xl font-semibold text-[#FF7300] mb-8">Contact Info</h2> */}

            <div className="space-y-6">
              {/* Address Box */}
              <div className="flex items-start gap-4 bg-white px-4 py-8 ">
                <div className="p-3 text-[#FF7300] ">
                  <FaMapMarkerAlt className="text-4xl" />
                </div>
                <div>
                  <h1 className="text-orange-500 font-bold">Office Address</h1>
                  <p className="font-semibold text-gray-600">
                    No 22 E/1, Asian Resort<br />
                    Gandhi Nagar, Srinagar Colony<br />
                    Kumbakonam - 612001
                  </p>
                </div>
              </div>
              {/* Phone Box */}
              <div className="flex items-start gap-4 bg-white px-4 py-8">
                <div className="p-3 text-[#FF7300] ">
                  <FaPhoneAlt className="text-4xl" />
                </div>
                <div>
                  <h1 className="text-orange-500 font-bold">Phone</h1>
                  <div>
                    <p className="font-bold text-gray-600">+91 99423 81376</p>
                    <p className="font-bold text-gray-600">+91 88808 88495</p>
                  </div>
                </div>
              </div>

              {/* Email Box */}
              <div className="flex items-start gap-4 bg-white px-4 py-8">
                <div className="p-3 text-[#FF7300] ">
                  <FaEnvelope className="text-4xl" />
                </div>
                <div>
                  <h1 className="text-orange-500 font-bold">Email</h1>
                  <p className="font-bold text-gray-600">admin@imayampromoters.com</p>
                </div>
              </div>


            </div>
          </div>

          {/* Contact Form */}
          <form ref={form} onSubmit={sendEmail} className="bg-white border border-gray-200 p-10 space-y-6">
            <h3 className="text-2xl font-semibold text-orange-500 border-b-2 border-orange-300 mb-4 pb-2">Get In Touch</h3>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Name</label>
              <input name="user_name" required type="text" placeholder="Your name" className="w-full border border-gray-300 text-gray-400 px-4 py-2 rounded-md font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
              <input name="user_email" required type="email" placeholder="you@example.com" className="w-full border border-gray-300 text-gray-400 px-4 py-2 rounded-md font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Phone</label>
              <input name="user_phone" required type="tel" placeholder="Your phone number" className="w-full border border-gray-300 text-gray-400 px-4 py-2 rounded-md font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Message</label>
              <textarea name="message" required rows={4} placeholder="Write your message..." className="w-full border border-gray-300 text-gray-400 px-4 py-2 rounded-md font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition" />
            </div>
            <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-md shadow transition">
              Submit
            </button>
            {status && <p className="text-sm mt-2 text-gray-600">{status}</p>}
          </form>
        </div>

        
      </div>
      <div className="mt-16 mb-0 w-[100vw] h-[450px] rounded-xl overflow-hidden shadow-md">
          <iframe
            title="Imayam Group Location"
            width="100%"
            height="600"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.0088968121017!2d79.3984159!3d10.962700100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a55330f95d3f735%3A0x3923a9fec6571a30!2sImayamPromoters!5e0!3m2!1sen!2sin!4v1751890098319!5m2!1sen!2sin"></iframe>
        </div>
    </div>
    </>
  )
}

export default Contact
