import React from 'react';
import { Filter, ArrowUpDown, Globe2, Sparkles, RotateCcw } from 'lucide-react';

export const CATEGORIES = [
  'All',
  'Cultural Heritage',
  'Island & Coastal',
  'Nature & Adventure',
  'Urban Wonders'
];

export const REGIONS = [
  'All',
  'Europe',
  'Asia',
  'Americas',
  'Africa',
  'Oceania'
];

export const SORT_OPTIONS = [
  { id: 'featured', label: 'Featured / Curated' },
  { id: 'name-asc', label: 'Name (A → Z)' },
  { id: 'name-desc', label: 'Name (Z → A)' },
  { id: 'budget-asc', label: 'Budget (Low to High)' },
  { id: 'budget-desc', label: 'Budget (High to Low)' },
  { id: 'rating-desc', label: 'Top Rated' }
];

export default function FilterBar({
  selectedCategory,
  setSelectedCategory,
  selectedRegion,
  setSelectedRegion,
  sortBy,
  setSortBy,
  totalResults,
  onResetFilters,
  isFiltered
}) {
  return (
    <div className="space-y-4 mb-8">
      {/* Category Pills (Primary) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
              selectedCategory === cat
                ? 'bg-navy-900 text-gold-400 shadow-md border border-gold-500/30'
                : 'bg-white text-navy-800 border border-ivory-200 hover:border-gold-400 hover:text-navy-950'
            }`}
          >
            {cat === 'All' ? 'All Categories' : cat}
          </button>
        ))}
      </div>

      {/* Sub-bar: Regions + Sort By + Results Count */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-ivory-200/80">
        
        {/* Left: Region Selector */}
        <div className="flex items-center gap-2">
          <Globe2 className="w-4 h-4 text-gold-600" />
          <span className="text-xs font-semibold text-navy-900 uppercase tracking-wider">Region:</span>
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="text-xs font-medium py-1.5 px-3 rounded-lg bg-white border border-ivory-200 text-navy-900 focus:outline-none focus:ring-1 focus:ring-gold-500 cursor-pointer"
          >
            {REGIONS.map((reg) => (
              <option key={reg} value={reg}>
                {reg === 'All' ? 'All Continents' : reg}
              </option>
            ))}
          </select>

          {isFiltered && (
            <button
              onClick={onResetFilters}
              className="inline-flex items-center gap-1 text-xs text-gold-700 hover:text-gold-900 font-medium ml-2 transition"
              title="Reset all filters"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}
        </div>

        {/* Right: Results Count + Sorting */}
        <div className="flex items-center gap-3 ml-auto">
          <span className="text-xs text-navy-700/70 hidden sm:inline">
            Showing <strong className="text-navy-950">{totalResults}</strong> destinations
          </span>

          <div className="flex items-center gap-1.5">
            <ArrowUpDown className="w-3.5 h-3.5 text-gold-600" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs font-medium py-1.5 px-3 rounded-lg bg-white border border-ivory-200 text-navy-900 focus:outline-none focus:ring-1 focus:ring-gold-500 cursor-pointer"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

      </div>
    </div>
  );
}
