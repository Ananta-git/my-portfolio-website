import React from 'react';
import { siteConfig } from '../../config/site.config';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-gray-950 to-gray-900 text-gray-300">
      <div className="container-custom px-6 py-16">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold text-white tracking-tight">
              {siteConfig.name}
            </h3>
            <p className="mt-2 text-gray-400 max-w-sm">
              {siteConfig.title}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-8 text-sm font-medium">
            {[
              { name: 'GitHub', link: siteConfig.socialLinks.github },
              { name: 'LinkedIn', link: siteConfig.socialLinks.linkedin },
              { name: 'Twitter', link: siteConfig.socialLinks.twitter },
            ].map((item) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-gray-400 transition-all duration-300 hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-primary-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>
            © {currentYear} <span className="text-gray-300">{siteConfig.name}</span>. All rights reserved.
          </p>

          <p className="text-center md:text-right">
            Built with <span className="text-gray-300">React</span>,{' '}
            <span className="text-gray-300">TypeScript</span> &{' '}
            <span className="text-gray-300">Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
