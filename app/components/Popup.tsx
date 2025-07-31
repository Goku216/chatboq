"use client"
import React, { useState } from 'react';
import { Confetti } from "./Confetti";


export default function Popup() {
    const [isOpen, setIsOpen] = useState(true);

    const closePopup = () => {
      setIsOpen(false);
    };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
        <Confetti />
      {/* Backdrop */}
      <div 
        className="absolute inset-0 "
        onClick={closePopup}
      />
      
      {/* Modal */}
      <div className="bg-[#251B3B]/60 border border-white/20 backdrop-blur-[23px] shadow-[0_4px_10px_0_rgba(0,0,0,0.1)] rounded-md mx-4 relative w-[327px] md:w-[746px] h-fit md:h-auto overflow-hidden">
        
        
        {/* Content */}
        <div className="relative py-8 md:py-25 text-center">
         
          
          {/* Amazing Badge */}
          <div className="font-Inter text-white inline-flex items-center text-base font-normal">
            🔥 Amazing – You’re In!
          </div>
          
          {/* Main Heading */}
          <h2 className="text-[28px] md:text-[36px] font-bold text-white mb-6 leading-12">
            You're on the list!
          </h2>
          
          {/* Description */}
          <p className="font-Inter text-gray-200 leading-relaxed mt-5 md:mt-8 mx-0 px-[16px] md:px-[118px] text-base md:text-[18px]">
            You're now part of a growing community that's getting early access to something new and exciting. We can't wait to show you what we've been building. We'll send you updates and early access invites as we get closer to launch. Thanks for trusting us early, it means a lot!
          </p>
          
          {/* Close Button */}
          <button
            onClick={closePopup}
            className="font-Geist mt-[32px] md:mt-[40px] w-[209px] h-[36px]  items-center bg-[#6D28D9] hover:from-purple-700 hover:to-purple-800 text-white font-medium rounded-md transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-purple-500/25"
          >
            Close Popup
          </button>
        </div>
        
      </div>
    </div>
  );
}