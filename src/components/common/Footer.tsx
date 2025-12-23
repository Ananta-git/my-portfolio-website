import React from 'react';
import { siteConfig } from '../../config/site.config';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">{siteConfig.name}</h3>
            <p className="text-gray-400 mt-2">{siteConfig.title}</p>
          </div>
          
          <div className="flex space-x-6">
            <a href={siteConfig.socialLinks.github} className="hover:text-primary-400 transition-colors">
              GitHub
            </a>
            <a href={siteConfig.socialLinks.linkedin} className="hover:text-primary-400 transition-colors">
              LinkedIn
            </a>
            <a href={siteConfig.socialLinks.twitter} className="hover:text-primary-400 transition-colors">
              Twitter
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p className="mt-2">Built with React, TypeScript & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;