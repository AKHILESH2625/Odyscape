import React, { useState, useMemo } from 'react';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';
import DestinationCard from './DestinationCard';
import DestinationModal from './DestinationModal';
import LoadingSkeleton from './LoadingSkeleton';
import EmptyState from './EmptyState';
import ErrorBanner from './ErrorBanner';
import { Sparkles, Globe } from 'lucide-react';

export default function Explore({
  destinations,
  isLoading,
  error,
  onRetry,
  itinerary,
  onToggleSave,
  onSaveToTrip,
  onRemoveFromTrip,
  onSearchGlobal,
  isSearchingApi,
  hasLiveApiResults
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedDestination, setSelectedDestination] = useState(null);

  // Check if a destination is already saved in the itinerary
  const savedIdsSet = useMemo(() => new Set(itinerary.map(item => item.id)), [itinerary]);

  // Compute filtered & sorted destinations
  const filteredDestinations = useMemo(() => {
    let result = [...destinations];

    // 1. Text Search Filter (name, country, category, tags, description)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(item => 
        item.name.toLowerCase().includes(q) ||
        item.country.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        (item.exactLocation && item.exactLocation.toLowerCase().includes(q)) ||
        (item.tags && item.tags.some(t => t.toLowerCase().includes(q))) ||
        (item.touristPlaces && item.touristPlaces.some(p => (typeof p === 'string' ? p : p.name).toLowerCase().includes(q))) ||
        (item.highlights && item.highlights.some(h => h.toLowerCase().includes(q))) ||
        (item.description && item.description.toLowerCase().includes(q))
      );
    }

    // 2. Category Filter
    if (selectedCategory !== 'All') {
      result = result.filter(item => item.category === selectedCategory);
    }

    // 3. Region Filter
    if (selectedRegion !== 'All') {
      result = result.filter(item => item.region === selectedRegion);
    }

    // 4. Sorting
    switch (sortBy) {
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'budget-asc':
        result.sort((a, b) => (a.budgetPerDay || 0) - (b.budgetPerDay || 0));
        break;
      case 'budget-desc':
        result.sort((a, b) => (b.budgetPerDay || 0) - (a.budgetPerDay || 0));
        break;
      case 'rating-desc':
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'featured':
      default:
        // Curated order
        break;
    }

    return result;
  }, [destinations, searchQuery, selectedCategory, selectedRegion, sortBy]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedRegion('All');
    setSortBy('featured');
  };

  const isFiltered = searchQuery !== '' || selectedCategory !== 'All' || selectedRegion !== 'All' || sortBy !== 'featured';

  // Details modal data
  const isSelectedSaved = selectedDestination ? savedIdsSet.has(selectedDestination.id) : false;
  const savedDetails = selectedDestination ? itinerary.find(item => item.id === selectedDestination.id) : null;

  return (
    <section id="explore-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Search Bar */}
      <div className="mb-8">
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          isSearchingApi={isSearchingApi}
          onSearchGlobal={onSearchGlobal}
          hasLiveApiResults={hasLiveApiResults}
        />
      </div>

      {/* Filter and Sort Controls */}
      <FilterBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        sortBy={sortBy}
        setSortBy={setSortBy}
        totalResults={filteredDestinations.length}
        onResetFilters={handleResetFilters}
        isFiltered={isFiltered}
      />

      {/* Error Notice if API connection suffered */}
      {error && (
        <ErrorBanner message={error} onRetry={onRetry} />
      )}

      {/* Live API Results Banner */}
      {hasLiveApiResults && (
        <div className="mb-6 p-3.5 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-between gap-3 text-xs text-gold-900">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-gold-600" />
            <span>Discovered live destinations from Wikipedia & Open-Meteo APIs</span>
          </div>
          <button
            onClick={onRetry}
            className="text-[11px] underline font-semibold hover:text-gold-700"
          >
            Show Curated Only
          </button>
        </div>
      )}

      {/* Destination Grid / Loading / Empty */}
      {isLoading ? (
        <LoadingSkeleton />
      ) : filteredDestinations.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredDestinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              isSaved={savedIdsSet.has(destination.id)}
              onToggleSave={onToggleSave}
              onSelect={(d) => setSelectedDestination(d)}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          onReset={handleResetFilters}
          onSearchGlobal={onSearchGlobal}
        />
      )}

      {/* Detailed Destination Modal */}
      {selectedDestination && (
        <DestinationModal
          destination={selectedDestination}
          isSaved={isSelectedSaved}
          savedDetails={savedDetails}
          onClose={() => setSelectedDestination(null)}
          onSaveToTrip={onSaveToTrip}
          onRemoveFromTrip={onRemoveFromTrip}
        />
      )}

    </section>
  );
}
