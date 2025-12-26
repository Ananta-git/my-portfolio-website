import React from 'react';
import { siteConfig } from "../../config/site.config";
import mypp from "../../assets/images/pp.jpg";

const Hero: React.FC = () => {
  const roles = [
    {text: "Design Leadership" },
    {text: "Senior UX Consultant" },
    {text: "Strategic Advisor" }
  ];
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f2027] via-[#050709] to-black opacity-90" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        
        {/* Avatar */}
    <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
  <img
    src={mypp}
    alt={`${siteConfig.name} - Professional Portrait`}
    className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 
               rounded-full object-cover grayscale hover:grayscale-0 
               transition-all duration-500 border-2 border-white/20 
               shadow-lg hover:shadow-xl hover:scale-105"
  />
</div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-400 sm:text-5xl ">
        I’m <span className="text-white font-normal">{siteConfig.name}</span>,{' '}
        <span className="text-white">accelerating business</span>
        <br />
        by improving people’s lives.
      </h1>
          <p className=" text-gray-400 tracking-wide flex flex-col sm:flex-row sm:items-center sm:justify-center">
            {roles.map((role, index) => (
              <span key={role.text} className="flex items-center mt-9 text-lg text-gray-600">
                {role.text}
                {index < roles.length - 1 && (
                  <span className="hidden sm:inline mx-2 text-gray-500">|</span>
                )}
              </span>
            ))}
          </p>

        {/* Scroll Indicator */}
        <div className="m-2 sm:m-4 md:m-6 lg:m-8 xl:m-1animate-bounce">
          <div className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-gray-300"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
