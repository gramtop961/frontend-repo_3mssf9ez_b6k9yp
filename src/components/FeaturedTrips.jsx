import React, { useMemo } from 'react';
import { MapPin, Star, Clock, Users, ArrowRight } from 'lucide-react';

const MOCK_TRIPS = [
  {
    id: 't1',
    title: 'Phi Phi Sunrise Snorkel',
    location: 'Phuket',
    duration: '7h',
    rating: 4.8,
    price: 89,
    pax: 20,
    image:
      'https://images.unsplash.com/photo-1526485797145-4f197fab87a0?q=80&w=1200&auto=format&fit=crop',
    type: 'group',
  },
  {
    id: 't2',
    title: 'Private Speedboat to Krabi 4 Islands',
    location: 'Krabi',
    duration: '8h',
    rating: 4.9,
    price: 690,
    pax: 8,
    image:
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop',
    type: 'private',
  },
  {
    id: 't3',
    title: 'Phuket ↔ Koh Phi Phi Transfer',
    location: 'Koh Phi Phi',
    duration: '2h',
    rating: 4.6,
    price: 35,
    pax: 50,
    image:
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200&auto=format&fit=crop',
    type: 'transfer',
  },
];

export default function FeaturedTrips({ selectedLocation, selectedCategory }) {
  const trips = useMemo(() => {
    return MOCK_TRIPS.filter((t) => {
      const locOk = selectedLocation ? t.location === selectedLocation : true;
      const catOk = selectedCategory ? t.type === selectedCategory : true;
      return locOk && catOk;
    });
  }, [selectedLocation, selectedCategory]);

  return (
    <section id="trips" className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-4 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Featured trips</h2>
          <p className="text-sm text-white/70">
            Curated experiences for every mood and budget
          </p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {trips.map((trip) => (
          <article
            key={trip.id}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition hover:bg-white/10"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <img
                src={trip.image}
                alt={trip.title}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 text-xs text-white backdrop-blur">
                <Star size={14} className="text-yellow-400" /> {trip.rating}
              </div>
            </div>

            <div className="space-y-3 p-4 text-white">
              <h3 className="line-clamp-1 text-lg font-semibold">{trip.title}</h3>
              <div className="flex flex-wrap items-center gap-3 text-sm text-white/70">
                <span className="inline-flex items-center gap-1"><MapPin size={16} /> {trip.location}</span>
                <span className="inline-flex items-center gap-1"><Clock size={16} /> {trip.duration}</span>
                <span className="inline-flex items-center gap-1"><Users size={16} /> up to {trip.pax}</span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-white/60">from</span>
                  <div className="text-xl font-bold">${trip.price}</div>
                </div>
                <button className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-medium text-black hover:bg-white/90">
                  View details <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {trips.length === 0 && (
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center text-white/70">
          No trips match your filters yet.
        </div>
      )}
    </section>
  );
}
