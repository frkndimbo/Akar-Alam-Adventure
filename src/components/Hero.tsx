import React from 'react';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <div id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/AkarAlam/Adventure12.png")',
        }}
       
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Temukan Petualanganmu Bersama Akar Alam Adventure!
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Jelajahi Alam Dengan Memesan Paket Tripmu!
            </p>
            <a 
              href="#adventures"
              className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
            >
              Explore
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
