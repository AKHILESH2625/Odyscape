import React from 'react';
import { Compass, Heart, ExternalLink, ShieldCheck } from 'lucide-react';

export default function Footer({ onOpenAbout }) {
  return (
    <footer className="bg-navy-950 text-ivory-200 border-t border-gold-500/20 pt-16 pb-12 mt-20 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-navy-800">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-gold-600 via-gold-500 to-amber-200 p-[1px]">
                <div className="w-full h-full rounded-full bg-navy-950 flex items-center justify-center">
                  <Compass className="w-5 h-5 text-gold-400" />
                </div>
              </div>
              <span className="font-serif text-2xl font-bold tracking-wider text-white">
                ODYSCAPE
              </span>
            </div>
            <p className="text-xs sm:text-sm text-ivory-200/70 max-w-md leading-relaxed">
              Odyscape is a luxury travel-planning platform engineered for the AWS Student Builder Group recruitment evaluation. Discover destinations with real-time meteorological conditions and encyclopedic summaries.
            </p>
            <div className="pt-2 text-xs text-gold-400 font-medium">
              <span>Candidate: S Akhilesh &bull; Reg No: 25BCE5345 &bull; Frontend Track</span>
            </div>
          </div>

          {/* Real API Integrations */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-400 mb-4">
              Real External APIs
            </h4>
            <ul className="space-y-2.5 text-xs text-ivory-200/70">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <a 
                  href="https://open-meteo.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gold-300 transition flex items-center gap-1"
                >
                  <span>Open-Meteo Weather API</span>
                  <ExternalLink className="w-3 h-3 text-gold-500" />
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <a 
                  href="https://en.wikipedia.org/api/rest_v1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gold-300 transition flex items-center gap-1"
                >
                  <span>Wikipedia REST API</span>
                  <ExternalLink className="w-3 h-3 text-gold-500" />
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <a 
                  href="https://www.mediawiki.org/wiki/API:Search" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gold-300 transition flex items-center gap-1"
                >
                  <span>Wikimedia Search API</span>
                  <ExternalLink className="w-3 h-3 text-gold-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Technical Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-400 mb-4">
              Submission Details
            </h4>
            <ul className="space-y-2.5 text-xs text-ivory-200/70">
              <li>
                <button 
                  onClick={onOpenAbout}
                  className="hover:text-gold-300 transition text-left"
                >
                  Architecture & Design Choices
                </button>
              </li>
              <li>
                <span>Persistent Storage: LocalStorage API</span>
              </li>
              <li>
                <span>AWS Student Builder Group &bull; VIT Chennai</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory-200/50">
          <p>&copy; {new Date().getFullYear()} Odyscape. Built with React, Vite, and Tailwind CSS.</p>
          <p className="flex items-center gap-1">
            <span>Crafted for TripWise Recruitment Task</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
