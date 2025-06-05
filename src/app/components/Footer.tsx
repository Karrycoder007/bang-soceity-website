import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-center md:text-left">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold">Grudhra Solutions</h2>
          <p className="text-sm text-gray-400 mt-2">
            Innovating Future, Delivering Trust
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-md font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-400 md:text-right">
          <p>&copy; {new Date().getFullYear()} Grudhra Solutions</p>
          <p>All rights reserved.</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-4">
        <p className="text-center text-sm text-gray-400">
          Made with <span className="text-red-500">❤️</span> by Grudhra Solutions
        </p>
      </div>
    </footer>
  );
};

export default Footer;
