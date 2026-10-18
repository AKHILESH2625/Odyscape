import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Explore from './components/Explore';
import MyTrip from './components/MyTrip';
import Footer from './components/Footer';
import AboutModal from './components/AboutModal';
import { 
  loadEnrichedDestinations, 
  searchWorldDestinations,
  CURATED_DESTINATIONS 
} from './services/travelApi';
import { 
  getSavedItinerary, 
  addToItinerary, 
  removeFromItinerary, 
  updateItineraryItem, 
  clearAllItinerary 
} from './services/storage';

export default function App() {
  const [activeTab, setActiveTab] = useState('explore'); // 'explore' | 'mytrip'
  const [destinations, setDestinations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [itinerary, setItinerary] = useState([]);
  const [isSearchingApi, setIsSearchingApi] = useState(false);
  const [hasLiveApiResults, setHasLiveApiResults] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  // 1. Initial Load: Itinerary from LocalStorage + Destinations from Real External APIs
  useEffect(() => {
    // Load local storage itinerary
    const saved = getSavedItinerary();
    setItinerary(saved);

    // Load and enrich destinations from Wikipedia & Open-Meteo APIs
    fetchDestinations();

    // Listen for storage events (e.g. cross-tab sync)
    const handleStorageUpdate = () => {
      setItinerary(getSavedItinerary());
    };
    window.addEventListener('odyscape_itinerary_updated', handleStorageUpdate);
    window.addEventListener('storage', handleStorageUpdate);

    return () => {
      window.removeEventListener('odyscape_itinerary_updated', handleStorageUpdate);
      window.removeEventListener('storage', handleStorageUpdate);
    };
  }, []);

  const fetchDestinations = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const enriched = await loadEnrichedDestinations();
      setDestinations(enriched);
      setHasLiveApiResults(false);
    } catch (err) {
      console.error('Failed to load enriched destinations:', err);
      setError('Could not connect to external APIs. Showing verified fallback catalog.');
      // Fallback to base curated catalog
      const fallbackList = CURATED_DESTINATIONS.map(d => ({
        ...d,
        description: `Explore the breathtaking sights of ${d.name}, ${d.country}. Known worldwide for ${d.highlights.join(', ')}.`,
        subtitle: `${d.category} in ${d.country}`,
        image: d.fallbackImage,
        isLiveApiData: false
      }));
      setDestinations(fallbackList);
    } finally {
      setIsLoading(false);
    }
  };

  // 2. Add / Toggle Save to Itinerary
  const handleToggleSave = useCallback((destination) => {
    const isAlreadySaved = itinerary.some(item => item.id === destination.id);
    if (isAlreadySaved) {
      const updated = removeFromItinerary(destination.id);
      setItinerary(updated);
    } else {
      const result = addToItinerary(destination);
      setItinerary(result.items);
    }
  }, [itinerary]);

  // 3. Save Custom Itinerary Details (from Modal)
  const handleSaveToTrip = useCallback((destination, customDetails) => {
    const result = addToItinerary(destination, customDetails);
    setItinerary(result.items);
  }, []);

  // 4. Remove Item from Itinerary
  const handleRemoveFromTrip = useCallback((destinationId) => {
    const updated = removeFromItinerary(destinationId);
    setItinerary(updated);
  }, []);

  // 5. Update Item in Itinerary (Days / Notes / Date)
  const handleUpdateItem = useCallback((destinationId, updates) => {
    const updated = updateItineraryItem(destinationId, updates);
    setItinerary(updated);
  }, []);

  // 6. Clear Entire Itinerary
  const handleClearAll = useCallback(() => {
    const updated = clearAllItinerary();
    setItinerary(updated);
  }, []);

  // 7. Global Wikipedia Deep Search
  const handleSearchGlobal = useCallback(async (query) => {
    if (!query || query.trim().length < 2) return;
    setIsSearchingApi(true);
    try {
      const liveResults = await searchWorldDestinations(query);
      if (liveResults.length > 0) {
        // Prepend live API results to top of catalog
        setDestinations(prev => {
          const existingIds = new Set(prev.map(p => p.id));
          const newItems = liveResults.filter(item => !existingIds.has(item.id));
          return [...newItems, ...prev];
        });
        setHasLiveApiResults(true);
      }
    } catch (e) {
      console.error('Deep search failed:', e);
    } finally {
      setIsSearchingApi(false);
    }
  }, []);

  const handleHeroExplore = () => {
    setActiveTab('explore');
    const el = document.getElementById('explore-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-ivory-50 text-navy-950 font-sans selection:bg-gold-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        itineraryCount={itinerary.length}
        onOpenAbout={() => setIsAboutOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'explore' ? (
          <>
            {/* Editorial Hero */}
            <Hero 
              onExploreClick={handleHeroExplore}
              totalDestinations={destinations.length}
            />

            {/* Destination Explorer Section */}
            <Explore
              destinations={destinations}
              isLoading={isLoading}
              error={error}
              onRetry={fetchDestinations}
              itinerary={itinerary}
              onToggleSave={handleToggleSave}
              onSaveToTrip={handleSaveToTrip}
              onRemoveFromTrip={handleRemoveFromTrip}
              onSearchGlobal={handleSearchGlobal}
              isSearchingApi={isSearchingApi}
              hasLiveApiResults={hasLiveApiResults}
            />
          </>
        ) : (
          /* My Trip Itinerary Planner View */
          <MyTrip
            itinerary={itinerary}
            onRemoveItem={handleRemoveFromTrip}
            onUpdateItem={handleUpdateItem}
            onClearAll={handleClearAll}
            onNavigateExplore={() => setActiveTab('explore')}
            onSelectDestination={(dest) => {
              // Could open modal or inspect
            }}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onOpenAbout={() => setIsAboutOpen(true)} />

      {/* About & Technical Details Modal */}
      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />
    </div>
  );
}
