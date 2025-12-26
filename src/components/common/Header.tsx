import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Resume', path: '/resume' },
    { name: 'The Right Fit', path: '/right-fit' },
    { name: 'Playbook', path: '/playbook' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center min-h-[70px]">

          {/* Center Navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm md:text-base lg:text-lg transition-colors duration-300 px-3 py-1.5 rounded-full ${
                    isActive
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-200 hover:text-primary-400'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="absolute left-0 md:hidden"> 
            {/* Mobile menu button */}
            <button
              className="relative w-6 h-6 md:hidden flex flex-col justify-center items-left"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span
                className={`absolute block h-0.5 w-6 bg-gray-200 transform transition duration-300 ease-in-out ${
                  isMenuOpen ? 'rotate-45' : '-translate-y-1.5'
                }`}
              />
              <span
                className={`absolute block h-0.5 w-6 bg-gray-200 transition-opacity duration-300 ease-in-out ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute block h-0.5 w-6 bg-gray-200 transform transition duration-300 ease-in-out ${
                  isMenuOpen ? '-rotate-45' : 'translate-y-1.5'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`
            md:hidden
            overflow-hidden
            transition-all
            duration-300
            ease-out
            ${isMenuOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'}
          `}
        >
          <div className="py-4 border-t border-white/20">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-base transition-colors duration-300 py-2 px-3 rounded-full ${
                      isActive
                        ? 'bg-gray-800 text-white'
                        : 'text-gray-300 hover:text-primary-400'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
