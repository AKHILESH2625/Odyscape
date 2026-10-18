import React from 'react';
import { Compass, Sparkles, MapPin, Thermometer, ShieldCheck } from 'lucide-react';

export default function Hero({ onExploreClick, totalDestinations = 12 }) {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-ivory-50 pt-16 pb-20 md:pt-24 md:pb-28">
      {/* Editorial Background Image with Rich Navy Vignette */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity filter blur-[1px] transform scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/95 to-navy-950" />
      
      {/* Decorative Gold Accent Lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Subtle Pill Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/30 bg-navy-900/80 text-gold-300 text-xs tracking-widest uppercase mb-8 shadow-luxury">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>Curated Travel Intelligence &bull; AWS Student Builder Group</span>
        </div>

        {/* Hero Title */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-ivory-50 max-w-4xl mx-auto leading-tight mb-6">
          Discover More. <br />
          <span className="italic font-normal bg-gradient-to-r from-gold-300 via-gold-400 to-amber-200 bg-clip-text text-transparent">
            Wander Further.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-ivory-200/80 font-light leading-relaxed mb-10">
          Odyscape transforms the art of wandering into an effortless science. Explore timeless wonders, monitor live meteorological forecasts, and craft bespoke itineraries backed by real world data.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-gold-500 to-amber-500 text-navy-950 hover:from-gold-400 hover:to-amber-400 shadow-luxury transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3"
          >
            <Compass className="w-4 h-4" />
            <span>Explore Destinations</span>
          </button>
        </div>

        {/* Real-time Feature Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-gold-500/15 text-left">
          <div className="p-3.5 rounded-xl bg-navy-900/60 border border-gold-500/10">
            <div className="flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <MapPin className="w-4 h-4" />
              <span>Real Place Data</span>
            </div>
            <p className="text-xs text-ivory-200/70">
              Live Wikipedia REST API & encyclopedic imagery
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-navy-900/60 border border-gold-500/10">
            <div className="flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <Thermometer className="w-4 h-4" />
              <span>Live Meteorology</span>
            </div>
            <p className="text-xs text-ivory-200/70">
              Real-time weather & conditions via Open-Meteo API
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-navy-900/60 border border-gold-500/10">
            <div className="flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Persistent Storage</span>
            </div>
            <p className="text-xs text-ivory-200/70">
              Local browser itinerary storage surviving refresh
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-navy-900/60 border border-gold-500/10">
            <div className="flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <Compass className="w-4 h-4" />
              <span>Global Scope</span>
            </div>
            <p className="text-xs text-ivory-200/70">
              Search any place across the globe dynamically
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
