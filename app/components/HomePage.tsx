"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Thread,
  Twitter,
  Youtube,
} from "./Icons";
import Link from "next/link";
import Popup from "./Popup";

export default function HomePage() {
  const [openPopup, setOpenPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);
    setIsLoading(true);

    if (!email.trim()) {
      setError("Email address cannot be empty.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(data.message || "Successfully joined the waitlist!");
        setEmail("");
        setOpenPopup(true)
      } else {
        setError(data.message || "An error occurred. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError("Failed to connect to the server. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-[70px] md:pt-[64px] md:pb-[80px] relative md:min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Video */}
      <div className="my-4 sm:my-8 md:my-11 mx-4 sm:mx-8 md:mx-50 absolute inset-0 z-15">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover 
             w-full sm:w-[600px] md:w-[800px] lg:w-[1000px] max-w-none h-auto -z-1"
        >
          <source src="/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Video overlay for better text readability */}
        <div className="absolute top-0 bottom-0 left-0 w-1/1.5 bg-black/40 " />
      </div>

      {/* Main Content */}
      <div className="relative ml-0 sm:ml-8 md:ml-12 lg:ml-20 z-20  min-h-screen flex flex-col justify-center">
        <div className="mx-auto lg:mx-0 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Content */}
            <div className="flex flex-col justify-center items-center lg:items-start">
              {/* Logo and Brand */}
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex-shrink-0">
                  <Image
                    className="w-full h-full object-contain"
                    src="/logo.svg"
                    height={80}
                    width={60}
                    alt="Chatboq Logo"
                  />
                </div>
                <h1 className="font-Geist text-4xl sm:text-[64px] lg:text-[64px] xl:text-[64px] font-bold leading-[76px]">
                  Chatboq
                </h1>
              </div>

              {/* Main Heading */}
              <div className="mt-10">
                <h2 className=" lg:w-[760px] text-center md:text-start text-2xl sm:text-4xl lg:text-5xl xl:text-5xl font-semibold leading-[130%] lg:leading-16">
                  The Future of <br />
                  Smart <span className="text-purple-500">Conversation</span> Is
                  Coming.
                </h2>
              </div>

              {/* Description */}
              <p className="px-6 md:px-0 font-Inter mt-3 md:mt-5 font-normal text-base md:text-lg text-justify md:text-start  text-white w-full md:w-2xl">
                Seamlessly switch between AI and live agents, connect with
                customers across WhatsApp, Messenger, and more, and manage every
                conversation from a unified inbox.
              </p>

              {/* Social Media Section */}
              <div className="flex flex-col gap-5 mt-15 md:mt-8 mb-5 text-center md:text-start">
                <p className="bg-gradient-to-r from-[#E2D4F7] to-[#6D28D9] bg-clip-text text-transparent text-lg sm:text-xl font-medium">
                  Follow us on Socials
                </p>
                <div className="flex gap-4 sm:gap-6">
                  <Link href="">
                    <Instagram />
                  </Link>
                  <Link href="">
                    <Facebook />
                  </Link>
                  <Link href="">
                    <Youtube />
                  </Link>
                  <Link href="">
                    <Linkedin />
                  </Link>
                  <Link href="">
                    <Thread />
                  </Link>
                  <Link href="">
                    <Twitter />
                  </Link>
                </div>
              </div>

              {/* Waitlist Form */}
              <div className=" max-w-md">
                <p className="text-center md:text-start bg-gradient-to-r  mb-5 from-[#E2D4F7] to-[#6D28D9] bg-clip-text text-transparent text-lg sm:text-xl font-medium">
                  Be the First to Try It
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-2 mb-2 pb-10 sm:pb-0"
                >
                  <div className="w-full md:w-lg relative max-w-lg p-[2px] rounded-xl">
                    <div className="input-wrapper rounded-2xl bg-black p-1">
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full px-4 py-3 rounded-xl bg-black text-white placeholder-[#ACACAC] border-none outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="absolute top-1/2 -translate-y-1/2 right-2 bg-[#8A53E1] hover:bg-purple-700 text-white px-4 s py-2 rounded-lg font-normal transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap cursor-pointer"
                    >
                      {isLoading ? "Joining..." : "Join Waitlist"}
                    </button>
                  </div>
                  {error && (
                    <p className="text-red-500 text-sm mt-1">{error}</p>
                  )}
                  {successMessage && (
                    <p className="text-green-500 text-sm mt-1">
                      {successMessage}
                    </p>
                  )}
                </form>

                <p className="text-sm text-[#6D6D6D] leading-relaxed">
                  Join our waitlist and get early access when we launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Bot Image */}
      <div className="mt-[-50px]  lg:flex justify-center items-center z-0">
        <div className="absolute h-[350px] w-[350px] md:h-[1100px] md:w-[1100px] md:-right-[550px] -rotate-12 md:-bottom-60 -bottom-[100px] -right-[160px]">
          <video autoPlay muted loop playsInline className="">
            <source src="/bot.mp4" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      {openPopup && 
      <Popup />
      }
    </div>
  );
}
