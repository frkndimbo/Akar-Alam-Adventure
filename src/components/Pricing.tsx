import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Basic Trek",
    price: "Rp749.000",
    features: 
      "Disediakan peralatan dasar",
      "Grup kecil (maksimal 8 orang)",
      "Termasuk camilan jalur"
    ]
  },
  {
    name: "Adventure Plus",
    price: "Rp1.499.000",
    features: [
      "Guide Pendakian selama 6 jam",
      "Peralatan premium",
      "Layanan fotografi",
      "Termasuk makan siang",
      "Termasuk transportasi"
    ]
  },
  {
    name: "Summit Special",
    price: "Rp2.399.000",
    features: [
      "Ekspedisi sehari penuh",
      "Paket peralatan profesional",
      "Pemandu pribadi",
      "Termasuk semua makanan",
      "Termasuk transportasi",
      "Dukungan darurat"
    ]
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Tour Packages</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="border rounded-lg p-8 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold text-emerald-600 mb-6">{plan.price}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-emerald-600 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://api.whatsapp.com/send/?phone=+6288216473125&text=Halo%20Admin%20Akar%20Alam%20Adventure%0ASaya%20mau%20memesan%20paket%20trip%20Nama%20%3A%20%0AAsal%20Daerah%20%3A%20%0ATrip%20yang%20Dipilih%20%3A&type=phone_number&app_absent=0"
                className="block w-full text-center py-2 px-4 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition"
              >
                Pesan Sekarang!
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
