import React, { useState } from 'react';
import HeroSplineCover from './components/HeroSplineCover';
import TripCategoryGrid from './components/TripCategoryGrid';
import LocationSelector from './components/LocationSelector';
import FeaturedTrips from './components/FeaturedTrips';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <div className="min-h-screen w-full bg-neutral-950 text-white">
      {/* Hero with interactive Spline */}
      <HeroSplineCover />

      {/* Filters: category + location */}
      <TripCategoryGrid onSelect={(key) => setSelectedCategory(key)} />
      <div className="mb-2" />
      <LocationSelector
        selected={selectedLocation}
        onChange={(loc) => setSelectedLocation(loc)}
      />

      {/* Results */}
      <FeaturedTrips
        selectedLocation={selectedLocation}
        selectedCategory={selectedCategory}
      />

      {/* Footer */}
      <footer className="mx-auto max-w-7xl px-6 pb-12 text-sm text-white/60">
        <div className="border-t border-white/10 pt-6">
          <p>
            © {new Date().getFullYear()} I GO BOAT. Made for island lovers. Secure
            payments. Local operators.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
