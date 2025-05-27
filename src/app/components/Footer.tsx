import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0">
        <div>
          <h2 className="text-lg font-semibold">Grudhra Solutions</h2>
          <p className="text-sm text-gray-400 mt-1">Innovating Future, Delivering Trust</p>
        </div>
        <div className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Grudhra Solutions. All rights reserved.
        </div>

        
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4">
        <p className="text-center text-sm text-gray-400">
          Made with <span className="text-red-500">❤️</span> by Grudhra Solutions
        </p>
      </div>
    </footer>
  );
};

export default Footer;
