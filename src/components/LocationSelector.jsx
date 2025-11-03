import React from 'react';

const LOCATIONS = ['Phuket', 'Krabi', 'Koh Phi Phi', 'Koh Lipe'];

export default function LocationSelector({ selected, onChange }) {
  return (
    <section className="mx-auto max-w-7xl px-6">
      <div className="flex flex-wrap items-center gap-2">
        <span className="mr-2 text-sm text-white/70">Location:</span>
        {LOCATIONS.map((loc) => {
          const active = selected === loc;
          return (
            <button
              key={loc}
              onClick={() => onChange?.(loc)}
              className={`rounded-full px-4 py-2 text-sm transition focus:outline-none focus:ring-2 focus:ring-white/20 ${
                active
                  ? 'bg-white text-black shadow'
                  : 'bg-white/10 text-white hover:bg-white/15'
              }`}
            >
              {loc}
            </button>
          );
        })}
      </div>
    </section>
  );
}
