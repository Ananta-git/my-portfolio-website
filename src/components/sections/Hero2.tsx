import React from 'react';

const Hero2: React.FC = () => {
  return (
<section className="bg-white">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-16 px-4 sm:px-6 lg:px-8">
    <div>
      <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
        Stunning Hero with Tailwind
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Use utilities to rapidly build unique layouts.
      </p>
      <a href="#"
         className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
        Start Now
      </a>
    </div>
    <div>
        <img src="https://source.unsplash.com/random" alt="Random image"
           className="w-full rounded-lg shadow-lg"
        />
    </div>
  </div>
</section>
    );
};

export default Hero2;
