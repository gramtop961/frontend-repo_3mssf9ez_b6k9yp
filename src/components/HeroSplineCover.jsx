import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function HeroSplineCover() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden bg-black">
      {/* Interactive Spline scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for readability (doesn't block Spline) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl text-white">
          <p className="mb-3 inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs uppercase tracking-wide text-white/80 backdrop-blur">
            Island escapes • Phuket • Krabi • Phi Phi
          </p>
          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
            I GO BOAT
          </h1>
          <p className="mt-3 text-white/80 md:text-lg">
            Book private and group boat trips, charters, and transfers across
            Thailand’s most iconic islands. Seamless, secure, and unforgettable.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#trips"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 font-medium text-black shadow hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              Explore trips <ArrowRight size={18} />
            </a>
            <a
              href="https://wa.me/0000000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2 font-medium text-white hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              <MessageCircle size={18} /> WhatsApp us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
