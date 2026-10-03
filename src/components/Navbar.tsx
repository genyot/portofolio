"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#music", label: "Music" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Jasa" },
  { href: "#sosial", label: "Sosial" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="glass-navbar sticky top-0 z-50 w-full px-5 py-4 md:px-12">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <a href="#" className="animate-fade-up font-serif text-2xl font-bold text-white md:text-3xl">
            MR<span className="text-cyan-400">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="animate-fade-up animation-delay-100 hidden gap-8 text-sm font-medium text-gray-300 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-cyan-400 transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile: Hamburger & Contact */}
          <div className="flex items-center gap-3 md:hidden">
            <a href="#contact" className="glass-button rounded-lg px-4 py-2 text-xs font-medium text-white">
              Contact
            </a>
            <button 
              onClick={() => setIsOpen(true)}
              className="text-gray-300 hover:text-cyan-400 focus:outline-none"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div 
        className={`fixed inset-y-0 right-0 z-50 w-64 glass-navbar border-l border-white/10 bg-[#05050a]/90 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 h-full">
          <div className="flex justify-between items-center mb-10 border-b border-white/10 pb-4">
            <span className="font-serif text-xl font-bold text-white">Menu</span>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-cyan-400 focus:outline-none"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-gray-300 hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}