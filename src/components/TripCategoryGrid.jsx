import React from 'react';
import { Ship, Users, MapPin } from 'lucide-react';

const categories = [
  {
    key: 'private',
    title: 'Private Trip',
    desc: 'Your boat, your crew, your schedule.',
    icon: Ship,
    color: 'from-orange-500 to-yellow-400',
  },
  {
    key: 'group',
    title: 'Group Trip',
    desc: 'Meet fellow travelers and split the cost.',
    icon: Users,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    key: 'transfer',
    title: 'Island Transfer',
    desc: 'Fast, reliable routes between islands.',
    icon: MapPin,
    color: 'from-purple-500 to-pink-500',
  },
];

export default function TripCategoryGrid({ onSelect }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <h2 className="mb-6 text-2xl font-bold text-white">Choose your style</h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map(({ key, title, desc, icon: Icon, color }) => (
          <button
            key={key}
            onClick={() => onSelect?.(key)}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 text-left transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${color} opacity-20 blur-2xl`} />
            <div className="relative z-10 flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <Icon className="text-white" size={22} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-1 text-sm text-white/70">{desc}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
