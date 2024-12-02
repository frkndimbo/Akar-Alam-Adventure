import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-600 mb-8">
            Siap memulai petualanganmu? Hubungi kami melalui WhatsApp atau ikuti kami di Instagram untuk pembaruan terbaru dan foto-foto jalur yang indah!
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://wa.me/+6288216473125"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/akar.alam_adventure/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
            >
              <Instagram className="h-5 w-5 mr-2" />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}