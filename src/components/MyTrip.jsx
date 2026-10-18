import React, { useState } from 'react';
import { 
  Luggage, 
  Calendar, 
  Clock, 
  DollarSign, 
  Trash2, 
  MapPin, 
  Download, 
  Printer, 
  Plus, 
  Minus, 
  Compass, 
  Sparkles, 
  FileText,
  Check,
  AlertCircle,
  Landmark,
  Globe2,
  ChevronRight
} from 'lucide-react';
import { calculateTripSummary, updateItineraryItem } from '../services/storage';

export default function MyTrip({
  itinerary,
  onRemoveItem,
  onUpdateItem,
  onClearAll,
  onNavigateExplore,
  onSelectDestination,
  onLoadIndiaItinerary,
  onLoadMalaysiaItinerary,
  onLoadAsiaItinerary
}) {
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [saveToast, setSaveToast] = useState('');

  const summary = calculateTripSummary(itinerary);

  const handleDaysChange = (item, delta) => {
    const current = Number(item.plannedDays) || 3;
    const nextDays = Math.max(1, Math.min(30, current + delta));
    onUpdateItem(item.id, { plannedDays: nextDays });
  };

  const handleNotesChange = (item, newNotes) => {
    onUpdateItem(item.id, { notes: newNotes });
    setSaveToast('Notes updated');
    setTimeout(() => setSaveToast(''), 1500);
  };

  const handleDateChange = (item, newDate) => {
    onUpdateItem(item.id, { visitDate: newDate });
  };

  const handleExportJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(itinerary, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `odyscape-itinerary-${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handlePrint = () => {
    window.print();
  };

  // If itinerary is empty, show dedicated inspiring empty state
  if (itinerary.length === 0) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-4 text-center animate-fade-in">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-tr from-gold-500/20 via-ivory-100 to-gold-400/30 flex items-center justify-center border border-gold-500/30 shadow-luxury">
          <Luggage className="w-10 h-10 text-gold-600" />
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950 mb-3">
          Your Itinerary is a Blank Canvas
        </h2>
        <p className="max-w-md mx-auto text-sm sm:text-base text-navy-800/70 mb-8 leading-relaxed">
          No destinations saved yet. Load a pre-curated voyage or browse our world catalog of destinations with real tourist places and live weather.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onLoadIndiaItinerary}
            className="px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-gold-500 to-amber-500 text-navy-950 hover:from-gold-400 hover:to-amber-400 shadow-luxury transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Load Incredible India (8 Destinations)</span>
          </button>
          {onLoadMalaysiaItinerary && (
            <button
              onClick={onLoadMalaysiaItinerary}
              className="px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-widest bg-emerald-800 text-emerald-100 hover:bg-emerald-700 shadow-luxury transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              <Globe2 className="w-4 h-4 text-emerald-300" />
              <span>Load Malaysia Wonders (4 Destinations)</span>
            </button>
          )}
          <button
            onClick={onNavigateExplore}
            className="px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-widest bg-navy-900 text-gold-400 hover:bg-navy-800 shadow-luxury transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-2"
          >
            <Compass className="w-4 h-4" />
            <span>Explore Destinations</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 animate-fade-in space-y-8">
      
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-ivory-200">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-600 mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Personal Voyage Planner</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950">
            My Trip Itinerary
          </h2>
          <p className="text-xs sm:text-sm text-navy-700/70 mt-1">
            Persisted in browser storage &bull; {itinerary.length} destinations scheduled with tourist spots & coordinates
          </p>
        </div>

        {/* Global Itinerary Actions */}
        <div className="flex flex-wrap items-center gap-2.5 no-print">
          {/* Preset switchers */}
          <button
            onClick={onLoadIndiaItinerary}
            title="Load curated 8-destination Incredible India Tour"
            className="px-3 py-1.5 rounded-xl bg-gold-500/10 border border-gold-500/40 text-gold-950 hover:bg-gold-500/20 text-xs font-semibold transition flex items-center gap-1.5 shadow-sm"
          >
            <span>🇮🇳</span>
            <span>India Tour</span>
          </button>

          {onLoadMalaysiaItinerary && (
            <button
              onClick={onLoadMalaysiaItinerary}
              title="Load curated 4-destination Malaysia Wonders Tour"
              className="px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 hover:bg-emerald-100 text-xs font-semibold transition flex items-center gap-1.5 shadow-sm"
            >
              <span>🇲🇾</span>
              <span>Malaysia Tour</span>
            </button>
          )}

          {onLoadAsiaItinerary && (
            <button
              onClick={onLoadAsiaItinerary}
              title="Load Grand Asia Combined Tour"
              className="px-3 py-1.5 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-900 hover:bg-indigo-100 text-xs font-semibold transition flex items-center gap-1.5 shadow-sm"
            >
              <Globe2 className="w-3.5 h-3.5 text-indigo-600" />
              <span>Grand Asia</span>
            </button>
          )}

          <button
            onClick={handlePrint}
            title="Print or export to PDF via browser print"
            className="px-3 py-1.5 rounded-xl bg-white border border-ivory-200 hover:border-gold-500 text-navy-900 text-xs font-semibold transition flex items-center gap-1.5 shadow-sm"
          >
            <Printer className="w-3.5 h-3.5 text-gold-600" />
            <span>Print</span>
          </button>

          <button
            onClick={handleExportJson}
            title="Export itinerary as structured JSON file"
            className="px-3 py-1.5 rounded-xl bg-white border border-ivory-200 hover:border-gold-500 text-navy-900 text-xs font-semibold transition flex items-center gap-1.5 shadow-sm"
          >
            <Download className="w-3.5 h-3.5 text-gold-600" />
            <span>Export</span>
          </button>

          <button
            onClick={() => setShowClearConfirm(true)}
            title="Reset and clear all saved destinations"
            className="px-3 py-1.5 rounded-xl text-xs font-semibold text-rose-600 hover:bg-rose-50 border border-rose-200 transition flex items-center gap-1"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear</span>
          </button>
        </div>
      </div>

      {/* Confirmation Modal for Clearing Trip */}
      {showClearConfirm && (
        <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-fade-in no-print">
          <div className="flex items-center gap-2 text-xs font-medium">
            <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
            <span>Are you sure you want to remove all destinations from your saved itinerary?</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => { onClearAll(); setShowClearConfirm(false); }}
              className="px-3 py-1 rounded-lg bg-rose-600 text-white text-xs font-semibold hover:bg-rose-700 transition"
            >
              Confirm Clear
            </button>
            <button
              onClick={() => setShowClearConfirm(false)}
              className="px-3 py-1 rounded-lg bg-white border border-rose-300 text-rose-800 text-xs font-semibold hover:bg-rose-100 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Trip Analytics / Metrics Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-gradient-to-r from-navy-950 via-navy-900 to-navy-850 text-white shadow-luxury">
        <div className="border-r border-gold-500/20 pr-4">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-400 block mb-1">
            Destinations
          </span>
          <span className="font-serif text-2xl sm:text-3xl font-bold">
            {summary.totalDestinations}
          </span>
        </div>

        <div className="border-r border-gold-500/20 pr-4">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-400 block mb-1">
            Total Duration
          </span>
          <span className="font-serif text-2xl sm:text-3xl font-bold">
            {summary.totalDays} <span className="text-sm font-normal text-ivory-200/80">days</span>
          </span>
        </div>

        <div className="border-r border-gold-500/20 pr-4">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-400 block mb-1">
            Est. Total Cost
          </span>
          <span className="font-serif text-2xl sm:text-3xl font-bold text-gold-300">
            ${summary.totalEstimatedCost.toLocaleString()}
          </span>
        </div>

        <div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-400 block mb-1">
            Countries
          </span>
          <span className="font-serif text-2xl sm:text-3xl font-bold">
            {summary.countryCount}
          </span>
        </div>
      </div>

      {/* Itinerary List */}
      <div className="space-y-6">
        {itinerary.map((item, index) => {
          const itemTotalCost = (Number(item.plannedDays) || 3) * (item.budgetPerDay || 150);
          const touristSpots = item.touristPlaces && item.touristPlaces.length > 0 
            ? item.touristPlaces 
            : (item.highlights || []);

          return (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-ivory-200 hover:border-gold-400/60 shadow-luxury transition-all p-5 sm:p-6 space-y-4"
            >
              {/* Row 1: Destination Header, Timing, Subtotal, Notes & Delete */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                
                {/* Left Column: Image + Title + Category + Live Weather */}
                <div 
                  className="flex items-center gap-4 w-full lg:w-auto cursor-pointer group" 
                  onClick={() => onSelectDestination(item)}
                >
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-navy-900 flex-shrink-0 shadow-sm">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.src = item.fallbackImage || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=400&q=80';
                      }}
                    />
                    <div className="absolute top-1 left-1 w-5 h-5 rounded-full bg-navy-950/90 text-gold-300 text-[10px] font-bold flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-gold-600 font-semibold uppercase tracking-wider">
                      <span>{item.country}</span>
                      <span className="text-navy-300">&bull;</span>
                      <span className="text-navy-700/60 font-normal">{item.category}</span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-950 group-hover:text-gold-600 transition flex items-center gap-1.5">
                      <span>{item.name}</span>
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition text-gold-600" />
                    </h3>

                    {item.weather && (
                      <span className="text-[11px] text-navy-700/70 inline-flex items-center gap-1 mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                        <span>Live Weather: {item.weather.temp}°C, {item.weather.condition}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Middle Column: Date Picker & Duration Stepper */}
                <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
                  {/* Date Picker */}
                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-wider text-navy-700/70 mb-1">
                      Visit Date
                    </label>
                    <input
                      type="date"
                      value={item.visitDate || ''}
                      onChange={(e) => handleDateChange(item, e.target.value)}
                      className="px-2.5 py-1.5 rounded-lg bg-ivory-50 border border-ivory-200 text-xs font-medium text-navy-900 focus:outline-none focus:ring-1 focus:ring-gold-500"
                    />
                  </div>

                  {/* Duration Stepper */}
                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-wider text-navy-700/70 mb-1">
                      Stay Duration
                    </label>
                    <div className="inline-flex items-center rounded-lg border border-ivory-200 bg-ivory-50 p-0.5">
                      <button
                        onClick={() => handleDaysChange(item, -1)}
                        className="p-1 rounded hover:bg-white text-navy-800 transition"
                        aria-label="Decrease stay days"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-3 text-xs font-bold text-navy-950">
                        {item.plannedDays || 3}d
                      </span>
                      <button
                        onClick={() => handleDaysChange(item, 1)}
                        className="p-1 rounded hover:bg-white text-navy-800 transition"
                        aria-label="Increase stay days"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Subtotal Cost */}
                  <div>
                    <span className="block text-[10px] font-semibold uppercase tracking-wider text-navy-700/70 mb-1">
                      Est. Subtotal
                    </span>
                    <span className="text-xs font-bold text-navy-950">
                      ${itemTotalCost} <span className="font-normal text-[10px] text-navy-500">(${item.budgetPerDay}/d)</span>
                    </span>
                  </div>
                </div>

                {/* Right Column: Travel Notes & Remove Button */}
                <div className="flex items-center gap-3 w-full lg:w-72">
                  <div className="flex-1">
                    <textarea
                      rows="2"
                      defaultValue={item.notes || ''}
                      onBlur={(e) => handleNotesChange(item, e.target.value)}
                      placeholder="Add personal travel notes..."
                      className="w-full text-xs p-2 rounded-lg bg-ivory-50 border border-ivory-200 text-navy-900 focus:outline-none focus:ring-1 focus:ring-gold-500 resize-none leading-relaxed"
                    />
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.id)}
                    title="Remove from itinerary"
                    className="p-2.5 rounded-xl text-navy-400 hover:text-rose-600 hover:bg-rose-50 transition flex-shrink-0"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

              </div>

              {/* Row 2: Location Information */}
              <div className="p-2.5 px-3.5 rounded-xl bg-ivory-50/80 border border-ivory-200/60 flex items-start sm:items-center gap-2 text-xs">
                <MapPin className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="font-bold text-navy-900 uppercase tracking-wider text-[10px]">Exact Location:</span>
                <span className="text-navy-800 font-medium">
                  {item.exactLocation || `${item.name}, ${item.country}`}
                </span>
                {item.lat && item.lon && (
                  <span className="hidden md:inline text-[11px] text-navy-500 ml-auto">
                    GPS: [{item.lat.toFixed(3)}, {item.lon.toFixed(3)}]
                  </span>
                )}
              </div>

              {/* Row 3: Main Tourist Places & Attractions */}
              {touristSpots && touristSpots.length > 0 && (
                <div className="pt-2 border-t border-ivory-100">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-navy-900 mb-2.5">
                    <Landmark className="w-3.5 h-3.5 text-gold-600" />
                    <span>Main Tourist Places & Key Attractions:</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {touristSpots.map((spot, sIdx) => (
                      <div 
                        key={sIdx} 
                        className="flex items-start gap-2 p-2 rounded-lg bg-white border border-ivory-200 text-xs text-navy-900 shadow-2xs hover:border-gold-400/50 transition"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 flex-shrink-0" />
                        <span className="leading-snug font-medium">
                          {typeof spot === 'string' ? spot : spot.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          );
        })}
      </div>

      {/* Floating Save Toast */}
      {saveToast && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-2 rounded-full bg-navy-950 text-gold-400 text-xs font-medium shadow-modal flex items-center gap-1.5 animate-fade-in">
          <Check className="w-3.5 h-3.5" />
          <span>{saveToast}</span>
        </div>
      )}

    </div>
  );
}
