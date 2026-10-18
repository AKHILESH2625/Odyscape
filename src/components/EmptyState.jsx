import React from 'react';
import { SearchX, RotateCcw, Sparkles } from 'lucide-react';

export default function EmptyState({ searchQuery, selectedCategory, onReset, onSearchGlobal }) {
  return (
    <div className="py-16 px-4 text-center max-w-lg mx-auto animate-fade-in">
      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-ivory-200/80 flex items-center justify-center text-navy-600">
        <SearchX className="w-8 h-8 text-gold-600" />
      </div>

      <h3 className="font-serif text-2xl font-bold text-navy-950 mb-2">
        No Destinations Found
      </h3>

      <p className="text-sm text-navy-800/70 mb-6 leading-relaxed">
        {searchQuery ? (
          <>
            No curated results matching <strong className="text-navy-950 font-semibold">"{searchQuery}"</strong>
            {selectedCategory !== 'All' && <span> in <strong className="text-navy-950">{selectedCategory}</strong></span>}.
          </>
        ) : (
          <>No destinations found for the selected filter combination.</>
        )}
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        {searchQuery && (
          <button
            onClick={() => onSearchGlobal(searchQuery)}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-semibold bg-navy-900 text-gold-400 hover:bg-navy-800 transition flex items-center justify-center gap-2 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Search Worldwide via Wikipedia API</span>
          </button>
        )}

        <button
          onClick={onReset}
          className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-semibold bg-white border border-ivory-300 text-navy-900 hover:bg-ivory-100 transition flex items-center justify-center gap-1.5"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset All Filters</span>
        </button>
      </div>
    </div>
  );
}
