import React from 'react';
import { Menu, Instagram, Mountain } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center bg-emerald-600 p-1.5 rounded-lg">
              <Mountain className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800">Akar Alam Adventure</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-emerald-600">Home</a>
            <a href="#adventures" className="text-gray-600 hover:text-emerald-600">Adventures</a>
            <a href="#pricing" className="text-gray-600 hover:text-emerald-600">Harga</a>
            <a href="#contact" className="text-gray-600 hover:text-emerald-600">Kontak</a>
          </div>
          <div className="md:hidden">
            <Menu className="h-6 w-6 text-gray-600" />
          </div>
        </div>
      </div>
    </nav>
  );
}