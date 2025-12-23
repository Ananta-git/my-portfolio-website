import React from 'react';
import { siteConfig } from '../../config/site.config';

const Hero: React.FC = () => {
  return (
    <section id="home" className="section-padding bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Hi, I'm <span className="text-primary-600">{siteConfig.name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
              {siteConfig.title}
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              {siteConfig.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="animate-slide-up">
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-1 shadow-2xl">
              <div className="bg-white rounded-2xl p-8">
                <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-300 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👨‍💻</div>
                    <p className="text-primary-700 font-semibold">Developer & Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;