import React, { useRef, useEffect } from 'react';
import { Search, X, Sparkles, Loader2 } from 'lucide-react';

export default function SearchBar({
  searchQuery,
  setSearchQuery,
  isSearchingApi,
  onSearchGlobal,
  hasLiveApiResults
}) {
  const inputRef = useRef(null);

  // Keyboard shortcut: Press '/' to focus search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '/' && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative flex items-center">
        {/* Search Icon */}
        <div className="absolute left-4.5 pointer-events-none text-gold-500">
          {isSearchingApi ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Search className="w-5 h-5" />
          )}
        </div>

        {/* Main Input */}
        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && searchQuery.trim().length >= 2) {
              onSearchGlobal(searchQuery);
            }
          }}
          placeholder="Search by destination, country, tag, or press '/' to search..."
          className="w-full pl-12 pr-28 py-3.5 sm:py-4 rounded-2xl bg-white border border-ivory-200 text-navy-950 placeholder-navy-800/40 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 shadow-luxury transition-all"
        />

        {/* Clear & Global Search Pill */}
        <div className="absolute right-3 flex items-center gap-2">
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="p-1.5 rounded-full hover:bg-ivory-100 text-navy-600 transition"
              aria-label="Clear search query"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          {searchQuery.trim().length >= 2 && (
            <button
              onClick={() => onSearchGlobal(searchQuery)}
              title="Search worldwide destinations via Wikipedia Live API"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-navy-900 text-gold-400 text-xs font-semibold hover:bg-navy-800 transition"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Deep Search</span>
            </button>
          )}
        </div>
      </div>

      {/* Suggested Quick Searches */}
      <div className="flex flex-wrap items-center gap-2 mt-3 text-xs text-navy-700/70 px-2">
        <span className="font-medium text-navy-900">Try exploring:</span>
        {['India', 'Taj Mahal', 'Jaipur', 'Kerala', 'Ladakh', 'Kyoto', 'Santorini', 'Serengeti', 'Amalfi Coast'].map((term) => (
          <button
            key={term}
            onClick={() => setSearchQuery(term)}
            className="px-2.5 py-1 rounded-full bg-ivory-100 hover:bg-gold-500/15 hover:text-gold-700 border border-ivory-200 transition text-navy-800 text-[11px]"
          >
            {term}
          </button>
        ))}
      </div>
    </div>
  );
}
