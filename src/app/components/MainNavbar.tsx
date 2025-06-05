"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: ' Home', path: '/' },
  { name: ' Gallery', path: '/gallery' },
  { name: ' Contact', path: '/contact' },
  { name: ' About', path: '/about' },
  { name: ' Membership', path: '/membership' },
  { name: ' Training', path: '/training' },
  
];

export default function MainNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-300 text-black p-4 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/20.jpg" // Replace with your actual logo file path
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <h1 className="text-lg font-bold">KASCOSA</h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 justify-start">
          {navLinks.map((link) => (
            <Link key={link.path} href={link.path} className="hover:underline text-lg">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="block md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (only appears in small screens) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-[70px] left-0 right-0 bg-gray-300 z-40 p-4"
          >
            <div className="flex flex-col items-center gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  href={link.path} 
                  onClick={() => setIsOpen(false)}
                  className="hover:underline text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
