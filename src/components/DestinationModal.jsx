import React, { useState, useEffect } from 'react';
import { 
  X, 
  MapPin, 
  Calendar, 
  Clock, 
  DollarSign, 
  Sun, 
  Wind, 
  ExternalLink, 
  Bookmark, 
  BookmarkCheck, 
  Trash2, 
  Sparkles, 
  Compass, 
  Check,
  Tag,
  Landmark
} from 'lucide-react';

export default function DestinationModal({
  destination,
  isSaved,
  savedDetails,
  onClose,
  onSaveToTrip,
  onRemoveFromTrip
}) {
  if (!destination) return null;

  const [plannedDays, setPlannedDays] = useState(savedDetails?.plannedDays || 3);
  const [visitDate, setVisitDate] = useState(savedDetails?.visitDate || '');
  const [notes, setNotes] = useState(savedDetails?.notes || '');
  const [feedbackMsg, setFeedbackMsg] = useState('');

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleSave = (e) => {
    e.preventDefault();
    onSaveToTrip(destination, {
      plannedDays: Number(plannedDays) || 3,
      visitDate,
      notes
    });
    setFeedbackMsg(isSaved ? 'Itinerary details updated!' : 'Added to your itinerary!');
    setTimeout(() => setFeedbackMsg(''), 2500);
  };

  const weather = destination.weather;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-modal border border-gold-500/20 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-navy-950/70 hover:bg-navy-900 text-ivory-50 transition border border-white/20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Visual Section */}
        <div className="relative aspect-[21/9] sm:aspect-[24/10] bg-navy-900">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = destination.fallbackImage || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />

          {/* Destination Header Content */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-gold-500 text-navy-950">
                {destination.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-navy-900/80 backdrop-blur-sm border border-gold-500/30 text-gold-300">
                {destination.region}
              </span>
              {destination.isLiveApiData && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium bg-emerald-950/80 border border-emerald-500/40 text-emerald-300">
                  <Sparkles className="w-3 h-3 text-emerald-400" />
                  Live API Enriched
                </span>
              )}
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-wide text-white">
              {destination.name}
            </h2>
            <p className="flex items-center gap-1.5 text-gold-300 text-sm sm:text-base mt-1">
              <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0" />
              <span>{destination.exactLocation || `${destination.name}, ${destination.country}`}</span>
              {destination.lat && destination.lon && (
                <span className="text-white/60 text-xs hidden sm:inline">&bull; [{destination.lat.toFixed(2)}, {destination.lon.toFixed(2)}]</span>
              )}
            </p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[calc(85vh-200px)] overflow-y-auto">

          {/* Live Weather Forecast Bar */}
          {weather && (
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-navy-950 via-navy-900 to-navy-850 border border-gold-500/20 text-ivory-50 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-amber-400">
                  <Sun className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-white">{weather.temp}°C</span>
                    <span className="text-sm text-gold-300 font-medium">&bull; {weather.condition}</span>
                  </div>
                  <p className="text-xs text-ivory-200/60">
                    Source: <strong className="text-gold-400">{weather.source}</strong> (Live API)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-xs text-ivory-200/80 border-t md:border-t-0 md:border-l border-gold-500/20 pt-2 md:pt-0 md:pl-6 w-full md:w-auto">
                <div>
                  <span className="text-gold-400 block font-semibold">Wind Speed</span>
                  <span>{weather.windSpeed} km/h</span>
                </div>
                {weather.maxTemp !== null && (
                  <div>
                    <span className="text-gold-400 block font-semibold">Today Range</span>
                    <span>{weather.minTemp}°C – {weather.maxTemp}°C</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Encyclopedic Summary */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-serif text-xl font-bold text-navy-950 flex items-center gap-2">
                <span>About this Destination</span>
              </h3>
              {destination.wikipediaUrl && (
                <a
                  href={destination.wikipediaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-gold-600 hover:text-gold-700 transition"
                >
                  <span>Wikipedia Article</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
            <p className="text-sm sm:text-base text-navy-800/80 leading-relaxed font-normal">
              {destination.description || destination.subtitle}
            </p>
          </div>

          {/* Location & Sights Intel Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-ivory-100 border border-ivory-200">
              <div className="flex items-center gap-2 text-gold-600 text-xs font-bold uppercase tracking-wider mb-1">
                <Calendar className="w-4 h-4" />
                <span>Best Season</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-navy-950">
                {destination.bestTimeToVisit || 'Spring to Autumn'}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-ivory-100 border border-ivory-200">
              <div className="flex items-center gap-2 text-gold-600 text-xs font-bold uppercase tracking-wider mb-1">
                <Clock className="w-4 h-4" />
                <span>Recommended Stay</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-navy-950">
                {destination.suggestedDuration || '4–5 Days'}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-ivory-100 border border-ivory-200">
              <div className="flex items-center gap-2 text-gold-600 text-xs font-bold uppercase tracking-wider mb-1">
                <DollarSign className="w-4 h-4" />
                <span>Daily Estimate</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-navy-950">
                ${destination.budgetPerDay} USD / day
              </p>
            </div>
          </div>

          {/* Main Tourist Places & Landmarks */}
          {destination.touristPlaces && destination.touristPlaces.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-3 flex items-center gap-1.5">
                <Landmark className="w-4 h-4 text-gold-600" />
                <span>Main Tourist Places & Must-Visit Sights</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {destination.touristPlaces.map((place, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-ivory-50 border border-ivory-200 text-xs font-medium text-navy-900 shadow-2xs">
                    <span className="w-2 h-2 rounded-full bg-gold-500 mt-1 flex-shrink-0" />
                    <span className="leading-snug">{typeof place === 'string' ? place : place.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Signature Experiences & Highlights */}
          {destination.highlights && destination.highlights.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-3 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-gold-600" />
                <span>Key Highlights & Experiences</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {destination.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white border border-ivory-200 text-xs font-medium text-navy-900">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Itinerary Customization & Planning Form */}
          <div className="p-5 sm:p-6 rounded-2xl bg-ivory-50 border border-gold-500/30">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-serif text-lg font-bold text-navy-950 flex items-center gap-2">
                <Compass className="w-5 h-5 text-gold-600" />
                <span>Personalize for My Trip</span>
              </h4>
              {feedbackMsg && (
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full animate-fade-in flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  {feedbackMsg}
                </span>
              )}
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-navy-800 mb-1">
                    Planned Days to Stay
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="60"
                    value={plannedDays}
                    onChange={(e) => setPlannedDays(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-ivory-200 text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-navy-800 mb-1">
                    Target Visit Date
                  </label>
                  <input
                    type="date"
                    value={visitDate}
                    onChange={(e) => setVisitDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-ivory-200 text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-navy-800 mb-1">
                  Custom Travel Notes & Itinerary Plan
                </label>
                <textarea
                  rows="3"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g., Must photograph sunrise at main monument, visit evening food market, book skip-the-line tickets..."
                  className="w-full px-3 py-2 rounded-xl bg-white border border-ivory-200 text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                />
              </div>

              <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
                {isSaved && (
                  <button
                    type="button"
                    onClick={() => {
                      onRemoveFromTrip(destination.id);
                      onClose();
                    }}
                    className="px-4 py-2.5 rounded-xl border border-rose-300 text-rose-700 hover:bg-rose-50 text-xs font-semibold transition flex items-center gap-1.5"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>Remove from Trip</span>
                  </button>
                )}

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-navy-950 text-gold-400 hover:bg-navy-900 text-xs font-bold uppercase tracking-wider transition shadow-luxury flex items-center gap-2"
                >
                  {isSaved ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                  <span>{isSaved ? 'Update Itinerary' : 'Save to My Trip'}</span>
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
