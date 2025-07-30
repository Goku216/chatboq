'use client'

import { useState } from 'react'
import { Instagram, Youtube, Facebook, Linkedin, Twitter } from 'lucide-react'

export default function HomePage() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    setEmail('')
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Video */}
      <div className="my-11 mx-50 absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          <source src="/bg.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        {/* Video overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Main Content */}
      <div className="relative ml-20 z-20 min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Content */}
            <div className="flex flex-col justify-center space-y-4 lg:space-y-4">
              {/* Logo and Brand */}
              <div className="mt-7 flex items-center gap-4 sm:gap-5">
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex-shrink-0">
                  <img 
                    className="w-full h-full object-contain" 
                    src="/logo.svg" 
                    alt="Chatboq Logo" 
                  />
                </div>
                <h1 className="font-Geist text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold tracking-tight">
                  Chatboq
                </h1>
              </div>

              {/* Main Heading */}
              <div>
                <h2 className="mt-5 w-[760px] text-2xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold leading-tight tracking-tight">
                  The Future of <br />
                  Smart <span className="text-purple-500">Conversation</span> Is Coming.
                </h2>
              </div>

              {/* Description */}
              <p className="font-Inter font-normal text-lg sm:text-xl lg:text-xl text-gray-300 leading-relaxed max-w-2xl">
                Seamlessly switch between AI and live agents, connect with customers across WhatsApp, Messenger, and more, and manage every conversation from a unified inbox.
              </p>

              {/* Social Media Section */}
              <div className="space-y-3">
                <p className="bg-gradient-to-r from-[#E2D4F7] to-[#6D28D9] bg-clip-text text-transparent text-lg sm:text-xl font-medium">Follow us on Socials</p>
                <div className="flex gap-4 sm:gap-6">
                  {[
                    { Icon: Instagram, href: '#', label: 'Instagram' },
                    { Icon: Facebook, href: '#', label: 'Facebook' },
                    { Icon: Youtube, href: '#', label: 'YouTube' },
                    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                    { Icon: Twitter, href: '#', label: 'Twitter' },
                  ].map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                      aria-label={label}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Waitlist Form */}
              <div className="space-y-3  max-w-md">
              <p className="bg-gradient-to-r from-[#E2D4F7] to-[#6D28D9] bg-clip-text text-transparent text-lg sm:text-xl font-medium">Be the First to Try It</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <div className="w-xl relative max-w-sm p-[2px] rounded-xl bg-gradient-to-r from-[#6D28D9] to-[#C5A9F0] animate-spin-border">
            <div className="rounded-xl bg-black p-1">
           <input
            type="text"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-xl bg-black text-white placeholder-gray-400 border-none outline-none "
              />
            </div>
          

          <button
          type="submit"
          className="absolute top-1/2 -translate-y-1/2 right-2 bg-[#8A53E1] hover:bg-purple-700 text-white px-4 sm:px-5 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
          >
          Join Waitlist
          </button>
          </div>
        </form>

        <p className="text-sm text-gray-400 leading-relaxed">
          Join our waitlist and get early access when we launch.
        </p>
        </div>
        </div>

            {/* Right Column - Bot Image */}
            <div className="mt-[-50px]  lg:flex justify-center items-center">
              <div className="absolute max-w-md xl:max-w-lg -right-20">
                <video
                autoPlay
                muted
                loop
                playsInline
                className=""
                >
                <source src="/bot.mp4" type="video/webm" />
                Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  )
}