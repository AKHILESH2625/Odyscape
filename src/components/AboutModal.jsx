import React from 'react';
import { X, Sparkles, Code2, Database, Globe, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function AboutModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-modal border border-gold-500/20 my-8 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-ivory-100 hover:bg-ivory-200 text-navy-800 transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gold-500/20 flex items-center justify-center text-gold-600">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-2xl font-bold text-navy-950">
              About Odyscape (TripWise)
            </h3>
            <p className="text-xs text-gold-600 font-semibold uppercase tracking-wider">
              AWS Student Builder Group &bull; VIT Chennai Recruitment
            </p>
          </div>
        </div>

        {/* Body Sections */}
        <div className="space-y-6 text-sm text-navy-800/80 max-h-[70vh] overflow-y-auto pr-2">
          
          {/* Candidate Card */}
          <div className="p-4 rounded-2xl bg-ivory-100 border border-ivory-200 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div>
              <span className="text-navy-700/60 block uppercase font-bold">Candidate</span>
              <strong className="text-navy-950 text-sm">S Akhilesh</strong>
            </div>
            <div>
              <span className="text-navy-700/60 block uppercase font-bold">Registration No.</span>
              <strong className="text-navy-950 text-sm">25BCE5345</strong>
            </div>
            <div>
              <span className="text-navy-700/60 block uppercase font-bold">Selected Track</span>
              <strong className="text-gold-700 text-sm">Frontend Development</strong>
            </div>
          </div>

          {/* Real External APIs Breakdown */}
          <div>
            <h4 className="font-serif text-lg font-bold text-navy-950 mb-2 flex items-center gap-2">
              <Globe className="w-4 h-4 text-gold-600" />
              <span>Real External API Integrations</span>
            </h4>
            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-white border border-ivory-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-navy-950">Open-Meteo Meteorological API:</strong>
                  <p className="text-navy-700/70 mt-0.5">
                    Provides live atmospheric temperatures, WMO weather codes, and wind speeds for every destination using real GPS coordinates without requiring fragile private keys or triggering CORS blocks.
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-ivory-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-navy-950">Wikipedia REST API:</strong>
                  <p className="text-navy-700/70 mt-0.5">
                    Fetches authentic encyclopedic article extracts, high-resolution original Wikimedia photography, and verified article references.
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-ivory-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-navy-950">Wikipedia Live Search Engine:</strong>
                  <p className="text-navy-700/70 mt-0.5">
                    Allows users to search any city or place in the world dynamically, fetching live summaries and meteorology on the fly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Architecture */}
          <div>
            <h4 className="font-serif text-lg font-bold text-navy-950 mb-2 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-gold-600" />
              <span>Architecture & Implementation</span>
            </h4>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-navy-800/80">
              <li>
                <strong>Component-Based React Architecture:</strong> Modular, reusable components (`DestinationCard`, `DestinationModal`, `MyTrip`, `FilterBar`, `SearchBar`) for maintainability.
              </li>
              <li>
                <strong>Browser Persistence via LocalStorage:</strong> Itinerary items, custom dates, and personal notes are serialized under key `odyscape_itinerary_v1` and survive browser refreshes.
              </li>
              <li>
                <strong>Graceful Error Handling & Fallbacks:</strong> In the event of network disruption, the interface seamlessly falls back to pre-cached data and displays clear error feedback.
              </li>
              <li>
                <strong>Responsive Editorial Design:</strong> Tested across mobile, tablet, and desktop viewports with deep navy (`#0A1128`), warm ivory (`#FDFBF7`), and champagne gold accents.
              </li>
            </ul>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-navy-900 text-gold-400 hover:bg-navy-800 transition"
            >
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
