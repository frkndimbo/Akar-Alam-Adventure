import React from 'react';
import { Star, Quote, Instagram } from 'lucide-react';

const testimonials = [
  {
    name: "Raditya Dika",
    instagram: "raditya_dika",
    image: "https://i.postimg.cc/XJpyWwWK/radityadika.jpg",
    rating: 5,
    text: "Pengalaman mendaki yang luar biasa bersama tim Akar Alam Adventure! Guide-nya sangat profesional dan sabar dalam membimbing. Peralatan yang disediakan juga lengkap dan berkualitas.",
    trip: "Pendakian Gunung Semeru"
  },
  {
    name: "Najwa Shihab",
    instagram: "najwashihab",
    image: "https://i.postimg.cc/Y9ZLCh25/Najwa-Shihab-1.jpg",
    rating: 5,
    text: "Terima kasih Akar Alam Adventure atas pengalaman pendakian yang mengesankan. Tim yang sangat terorganisir dan memperhatikan keselamatan pendaki. Sangat direkomendasikan!",
    trip: "Pendakian Gunung Rinjani"
  },
  {
    name: "Arief Muhammad",
    instagram: "ariefmuhammad",
    image: "https://i.postimg.cc/qqKhh4zz/89941-arief-muhammad.jpgg",
    rating: 5,
    text: "Pendakian pertama saya bersama Akar Alam Adventure sangat berkesan. Guide-nya ramah dan informatif, memberikan banyak pengetahuan tentang alam dan teknik pendakian yang aman.",
    trip: "Pendakian Gunung Gede"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Apa Kata Mereka?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <a
                    href={`https://instagram.com/${testimonial.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
                  >
                    <Instagram className="w-3 h-3" />
                    @{testimonial.instagram}
                  </a>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="relative">
                <Quote className="w-8 h-8 text-emerald-200 absolute -top-4 -left-2 -z-10" />
                <p className="text-gray-700 relative z-10">{testimonial.text}</p>
                <p className="text-sm text-emerald-600 mt-2 font-medium">{testimonial.trip}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}