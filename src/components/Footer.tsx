import React from 'react';
import { Mountain } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="flex items-center bg-emerald-600 p-1.5 rounded-lg">
              <Mountain className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white ml-2">Akar Alam Adventure</span>
          </div>
          <div className="text-sm">
            © {new Date().getFullYear()} Akar Alam Adventure. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}