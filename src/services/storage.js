import { INCREDIBLE_INDIA_PRESET } from './travelApi';

const STORAGE_KEY = 'odyscape_itinerary_v1';

// Default initial state or seed if user has none
export function getSavedItinerary() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      // Seed with the rich Incredible India itinerary preset
      saveItinerary(INCREDIBLE_INDIA_PRESET);
      return INCREDIBLE_INDIA_PRESET;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error('Failed to parse itinerary from localStorage:', error);
    return INCREDIBLE_INDIA_PRESET;
  }
}

export function loadIndiaPresetItinerary() {
  saveItinerary(INCREDIBLE_INDIA_PRESET);
  return INCREDIBLE_INDIA_PRESET;
}

export function saveItinerary(items) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    // Trigger custom event so any listener or cross-component state stays synchronized
    window.dispatchEvent(new Event('odyscape_itinerary_updated'));
    return true;
  } catch (error) {
    console.error('Failed to save itinerary to localStorage:', error);
    return false;
  }
}

export function addToItinerary(destination, customDetails = {}) {
  const existing = getSavedItinerary();
  const alreadyIn = existing.find(item => item.id === destination.id);
  
  if (alreadyIn) {
    // If already in, we update any notes or dates
    const updated = existing.map(item => 
      item.id === destination.id 
        ? { ...item, ...customDetails, addedAt: item.addedAt || new Date().toISOString() } 
        : item
    );
    saveItinerary(updated);
    return { added: false, updated: true, items: updated };
  }

  const newItem = {
    ...destination,
    notes: customDetails.notes || 'Explore landmarks, local culture, and authentic cuisine.',
    visitDate: customDetails.visitDate || '',
    plannedDays: Number(customDetails.plannedDays) || 3,
    addedAt: new Date().toISOString()
  };

  const updated = [newItem, ...existing];
  saveItinerary(updated);
  return { added: true, updated: false, items: updated };
}

export function removeFromItinerary(destinationId) {
  const existing = getSavedItinerary();
  const updated = existing.filter(item => item.id !== destinationId);
  saveItinerary(updated);
  return updated;
}

export function updateItineraryItem(destinationId, updates) {
  const existing = getSavedItinerary();
  const updated = existing.map(item => 
    item.id === destinationId ? { ...item, ...updates } : item
  );
  saveItinerary(updated);
  return updated;
}

export function clearAllItinerary() {
  saveItinerary([]);
  return [];
}

export function calculateTripSummary(items = []) {
  const totalDestinations = items.length;
  const totalDays = items.reduce((acc, curr) => acc + (Number(curr.plannedDays) || 3), 0);
  const totalEstimatedCost = items.reduce((acc, curr) => {
    const daily = Number(curr.budgetPerDay) || 150;
    const days = Number(curr.plannedDays) || 3;
    return acc + (daily * days);
  }, 0);
  
  const uniqueCountries = Array.from(new Set(items.map(i => i.country).filter(Boolean)));

  return {
    totalDestinations,
    totalDays,
    totalEstimatedCost,
    countryCount: uniqueCountries.length,
    countries: uniqueCountries
  };
}
