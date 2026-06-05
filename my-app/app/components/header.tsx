"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

function ProfileCheck() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Close dropdown if clicking outside the container
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="User Profile" 
        className="p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-700">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      </button> 

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 z-50 overflow-hidden"
          >
            <div className="px-4 py-2 bg-gray-50 border-b border-gray-100">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Sign in as</p>
            </div>
            <Link href="/login/hospital" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#0A74DA] hover:text-white transition-colors" onClick={() => setIsOpen(false)}>
              Hospital
            </Link>
            <Link href="/login/admin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#0A74DA] hover:text-white transition-colors" onClick={() => setIsOpen(false)}>
              Admin
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full py-4 sm:py-6 lg:py-8"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 flex items-center justify-between gap-4">
        {/* Logo to the left */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="px-3 py-1.5 rounded-full border border-zinc-200 text-xs font-bold tracking-tight group-hover:border-zinc-800 transition-colors sm:px-4 sm:text-sm">
            EMERGE.GRID
          </div>
        </Link>

        {/* CTA buttons to the extreme right */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3">
            {/* Secondary CTA */}
            <a className="px-6 py-2.5 rounded-[1px] border-2 border-[#0A74DA] text-[#0A74DA] text-sm font-bold hover:bg-[#0A74DA]/5 transition-colors" href="#">Call - 0800 EMERGE</a>
            
            {/* Primary CTA */}
            <a className="px-6 py-2.5 rounded-[1px] bg-[#0A74DA] text-white text-sm font-bold hover:bg-[#0757a4] shadow-sm transition-colors" href="#">Message via WhatsApp</a>
          </div>

          {/* Profile Dropdown */}
          <ProfileCheck />
        </div>
      </div>
    </motion.header>
  );
}
