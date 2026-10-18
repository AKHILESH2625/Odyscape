import React, { useState } from 'react';
import { Compass, Luggage, Menu, X, Globe, Sparkles, CloudSun } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, itineraryCount, onOpenAbout }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-navy-950/90 backdrop-blur-md border-b border-gold-500/20 text-ivory-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div 
            onClick={() => { setActiveTab('explore'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-gold-600 via-gold-500 to-amber-200 p-[1.5px] shadow-luxury">
              <div className="w-full h-full rounded-full bg-navy-950 flex items-center justify-center transition group-hover:bg-navy-900">
                <Compass className="w-6 h-6 text-gold-400 group-hover:rotate-45 transition-transform duration-500" />
              </div>
            </div>
            <div>
              <span className="font-serif text-2xl font-bold tracking-wider text-ivory-50 group-hover:text-gold-300 transition-colors">
                ODYSCAPE
              </span>
              <p className="text-[10px] tracking-widest uppercase text-gold-400 font-medium">
                Discover More. Wander Further.
              </p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => setActiveTab('explore')}
              className={`text-sm tracking-wide transition-colors font-medium flex items-center gap-2 ${
                activeTab === 'explore' 
                  ? 'text-gold-400 font-semibold border-b-2 border-gold-400 pb-1' 
                  : 'text-ivory-200/80 hover:text-ivory-50'
              }`}
            >
              <Globe className="w-4 h-4" />
              Explore
            </button>

            <button
              onClick={() => setActiveTab('mytrip')}
              className={`text-sm tracking-wide transition-colors font-medium flex items-center gap-2 relative ${
                activeTab === 'mytrip' 
                  ? 'text-gold-400 font-semibold border-b-2 border-gold-400 pb-1' 
                  : 'text-ivory-200/80 hover:text-ivory-50'
              }`}
            >
              <Luggage className="w-4 h-4" />
              My Trip
              {itineraryCount > 0 && (
                <span className="ml-1 px-2 py-0.5 text-xs font-bold rounded-full bg-gold-500 text-navy-950 animate-pulse-subtle">
                  {itineraryCount}
                </span>
              )}
            </button>

            <button
              onClick={onOpenAbout}
              className="text-sm tracking-wide transition-colors font-medium flex items-center gap-1.5 text-ivory-200/80 hover:text-ivory-50"
            >
              <Sparkles className="w-4 h-4 text-gold-400" />
              About Project
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setActiveTab('mytrip')}
              className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-gold-500 to-amber-500 text-navy-950 hover:from-gold-400 hover:to-amber-400 shadow-luxury transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Luggage className="w-4 h-4" />
              <span>Itinerary ({itineraryCount})</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setActiveTab('mytrip')}
              className="relative p-2 text-gold-400"
              aria-label="View My Trip"
            >
              <Luggage className="w-6 h-6" />
              {itineraryCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 text-[10px] flex items-center justify-center font-bold rounded-full bg-gold-500 text-navy-950">
                  {itineraryCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-ivory-100 hover:text-gold-400 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gold-500/20 bg-navy-900/95 backdrop-blur-lg px-6 py-6 space-y-4 animate-fade-in">
          <button
            onClick={() => { setActiveTab('explore'); setMobileMenuOpen(false); }}
            className={`w-full flex items-center justify-between text-left py-2.5 px-3 rounded-lg text-sm font-medium ${
              activeTab === 'explore' ? 'bg-navy-800 text-gold-400 font-bold' : 'text-ivory-100 hover:bg-navy-800/50'
            }`}
          >
            <span className="flex items-center gap-2">
              <Globe className="w-4 h-4" /> Explore Destinations
            </span>
          </button>

          <button
            onClick={() => { setActiveTab('mytrip'); setMobileMenuOpen(false); }}
            className={`w-full flex items-center justify-between text-left py-2.5 px-3 rounded-lg text-sm font-medium ${
              activeTab === 'mytrip' ? 'bg-navy-800 text-gold-400 font-bold' : 'text-ivory-100 hover:bg-navy-800/50'
            }`}
          >
            <span className="flex items-center gap-2">
              <Luggage className="w-4 h-4" /> My Trip Itinerary
            </span>
            <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-gold-500 text-navy-950">
              {itineraryCount} saved
            </span>
          </button>

          <button
            onClick={() => { onOpenAbout(); setMobileMenuOpen(false); }}
            className="w-full flex items-center gap-2 text-left py-2.5 px-3 rounded-lg text-sm font-medium text-ivory-100 hover:bg-navy-800/50"
          >
            <Sparkles className="w-4 h-4 text-gold-400" /> About TripWise & Odyscape
          </button>
        </div>
      )}
    </header>
  );
}
