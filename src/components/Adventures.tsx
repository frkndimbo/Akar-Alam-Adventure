import React from 'react';
import { Mountain, Compass, Users } from 'lucide-react';

const adventures = [
  {
    title: "Pendakian Gunung",
    image: "https://i.postimg.cc/c4rZcXmB/rinjani.jpg",
    description: "Tantang diri Anda dengan perjalanan gunung bersama guide kami",
    difficulty: "Sedang",
    duration: "6-8 jam"
  },
  {
    title: "Penjelajahan Hutan",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    description: "Jelajahi jalur hutan yang tenang dengan guide ahli kami",
    difficulty: "Mudah",
    duration: "4-5 jam"
  },
  {
    title: "Petualangan Puncak",
    image: "https://i.postimg.cc/D03scSVq/ijen.jpg",
    description: "Raih ketinggian baru dengan pengalaman puncak bersama guide kami",
    difficulty: "Hard",
    duration: "10-12 jam"
  }
];

export function Adventures() {
  return (
    <section id="adventures" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Popular Adventures</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {adventures.map((adventure) => (
            <div key={adventure.title} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <img 
                src={adventure.image} 
                alt={adventure.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{adventure.title}</h3>
                <p className="text-gray-600 mb-4">{adventure.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="flex items-center">
                    <Mountain className="h-4 w-4 mr-1" />
                    {adventure.difficulty}
                  </span>
                  <span className="flex items-center">
                    <Compass className="h-4 w-4 mr-1" />
                    {adventure.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}