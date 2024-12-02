import React from 'react';
import { Instagram } from 'lucide-react';

const teamMembers = [
  {
    name: "Muhammad Muslim",
    role: "Owner",
    instagram: "m.muslliim",
    image: "AkarAlam/Muslim.jpg",
    description: "Pendiri Akar Alam Adventure dengan pengalaman lebih dari 10 tahun di dunia pendakian."
  },
  {
    name: "Faiz Ahmad Fauzan",
    role: "Manager",
    instagram: "littledimboo",
    image: "AkarAlam/Faiz.jpg",
    description: "Bertanggung jawab atas operasional dan pengembangan layanan pendakian."
  },
  {
    name: "Tri Jaka Satria",
    role: "Konsultan",
    instagram: "tri_js16",
    image: "AkarAlam/Jaka.jpg",
    description: "Ahli dalam perencanaan rute dan keselamatan pendakian."
  },
  {
    name: "Mahmud Isti Panggalih",
    role: "Porter",
    instagram: "mahmudpanggalih",
    image: "AkarAlam/mahmud.jpg",
    description: "Porter berpengalaman dengan pengetahuan mendalam tentang medan pendakian."
  },
  {
    name: "Danis Wara Whardana",
    role: "Guide",
    instagram: "danissswara",
    image: "AkarAlam/Danis.jpg",
    description: "Guide profesional dengan sertifikasi nasional dan internasional."
  }
];

export function Team() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Tim Kami</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Bertemu dengan tim profesional kami yang akan memandu perjalanan pendakian Anda dengan aman dan berkesan
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-emerald-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 mb-4 text-sm">{member.description}</p>
                <a
                  href={`https://instagram.com/${member.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-emerald-600 hover:text-emerald-700"
                >
                  <Instagram className="w-4 h-4 mr-1" />
                  @{member.instagram}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
