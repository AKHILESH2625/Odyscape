/**
 * Odyscape Real Travel & Meteorology API Service
 * Integrates:
 * 1. Wikimedia / Wikipedia REST API (encyclopedic summaries, real coordinates, high-res imagery)
 * 2. Open-Meteo Meteorology API (real-time live temperature, weather conditions, wind speed)
 * 3. Live Wikipedia Search API (dynamically discover any destination across the globe)
 */

// Curated master catalog with rich travel metadata & Wikipedia lookup keys
export const CURATED_DESTINATIONS = [
  {
    id: 'kyoto-japan',
    name: 'Kyoto',
    country: 'Japan',
    region: 'Asia',
    category: 'Cultural Heritage',
    wikiSlug: 'Kyoto',
    lat: 35.0116,
    lon: 135.7681,
    budgetPerDay: 130, // USD
    rating: 4.9,
    bestTimeToVisit: 'March – May & October – November',
    suggestedDuration: '4–5 Days',
    highlights: ['Fushimi Inari-taisha', 'Arashiyama Bamboo Grove', 'Kinkaku-ji Golden Pavilion', 'Gion Geisha District'],
    fallbackImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    tags: ['Temples', 'Gardens', 'Culinary', 'Autumn Foliage']
  },
  {
    id: 'santorini-greece',
    name: 'Santorini',
    country: 'Greece',
    region: 'Europe',
    category: 'Island & Coastal',
    wikiSlug: 'Santorini',
    lat: 36.3932,
    lon: 25.4615,
    budgetPerDay: 210,
    rating: 4.8,
    bestTimeToVisit: 'Late April – Early November',
    suggestedDuration: '3–4 Days',
    highlights: ['Oia Sunsets', 'Red Beach', 'Ancient Thera', 'Caldera Catamaran Cruises'],
    fallbackImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
    tags: ['Caldera', 'Cyclades', 'Beaches', 'Wine']
  },
  {
    id: 'banff-canada',
    name: 'Banff National Park',
    country: 'Canada',
    region: 'Americas',
    category: 'Nature & Adventure',
    wikiSlug: 'Banff_National_Park',
    lat: 51.4968,
    lon: -115.9281,
    budgetPerDay: 180,
    rating: 4.9,
    bestTimeToVisit: 'June – August & December – March',
    suggestedDuration: '5–6 Days',
    highlights: ['Lake Louise', 'Moraine Lake', 'Icefields Parkway', 'Banff Upper Hot Springs'],
    fallbackImage: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1200&q=80',
    tags: ['Rockies', 'Hiking', 'Glacial Lakes', 'Wildlife']
  },
  {
    id: 'paris-france',
    name: 'Paris',
    country: 'France',
    region: 'Europe',
    category: 'Urban Wonders',
    wikiSlug: 'Paris',
    lat: 48.8566,
    lon: 2.3522,
    budgetPerDay: 195,
    rating: 4.7,
    bestTimeToVisit: 'April – May & September – October',
    suggestedDuration: '4–5 Days',
    highlights: ['Eiffel Tower', 'Louvre Museum', 'Montmartre', 'Musée d\'Orsay'],
    fallbackImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
    tags: ['Art', 'Cuisine', 'Architecture', 'Fashion']
  },
  {
    id: 'serengeti-tanzania',
    name: 'Serengeti National Park',
    country: 'Tanzania',
    region: 'Africa',
    category: 'Nature & Adventure',
    wikiSlug: 'Serengeti_National_Park',
    lat: -2.3333,
    lon: 34.8333,
    budgetPerDay: 320,
    rating: 5.0,
    bestTimeToVisit: 'June – October (Great Migration)',
    suggestedDuration: '4–5 Days',
    highlights: ['Great Wildebeest Migration', 'Ngorongoro Crater', 'Seronera Valley Safari', 'Hot Air Balloon Flights'],
    fallbackImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
    tags: ['Safari', 'Big Five', 'Savannah', 'Photography']
  },
  {
    id: 'amalfi-italy',
    name: 'Amalfi Coast',
    country: 'Italy',
    region: 'Europe',
    category: 'Island & Coastal',
    wikiSlug: 'Amalfi_Coast',
    lat: 40.6340,
    lon: 14.6027,
    budgetPerDay: 240,
    rating: 4.8,
    bestTimeToVisit: 'May – September',
    suggestedDuration: '4–5 Days',
    highlights: ['Positano Cliffside', 'Path of the Gods Hike', 'Ravello Villa Rufolo', 'Capri Day Boat Trip'],
    fallbackImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    tags: ['Mediterranean', 'Cliffs', 'Limoncello', 'Scenic Drives']
  },
  {
    id: 'queenstown-newzealand',
    name: 'Queenstown',
    country: 'New Zealand',
    region: 'Oceania',
    category: 'Nature & Adventure',
    wikiSlug: 'Queenstown,_New_Zealand',
    lat: -45.0312,
    lon: 168.6626,
    budgetPerDay: 165,
    rating: 4.9,
    bestTimeToVisit: 'December – February (Summer) or July – August (Ski)',
    suggestedDuration: '4–6 Days',
    highlights: ['Milford Sound Excursion', 'Lake Wakatipu', 'Skyline Gondola', 'Shotover River Jet Boating'],
    fallbackImage: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1200&q=80',
    tags: ['Fjords', 'Adrenaline', 'Wine', 'Alpine']
  },
  {
    id: 'machu-picchu-peru',
    name: 'Machu Picchu',
    country: 'Peru',
    region: 'Americas',
    category: 'Cultural Heritage',
    wikiSlug: 'Machu_Picchu',
    lat: -13.1631,
    lon: -72.5450,
    budgetPerDay: 140,
    rating: 4.9,
    bestTimeToVisit: 'May – October (Dry Season)',
    suggestedDuration: '3–4 Days (Cusco & Sacred Valley)',
    highlights: ['Inca Sun Gate', 'Huayna Picchu Peak', 'Temple of the Sun', 'Sacred Valley of the Incas'],
    fallbackImage: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=80',
    tags: ['Inca Empire', 'Andes', 'Archaeology', 'Trekking']
  },
  {
    id: 'cairo-giza-egypt',
    name: 'Giza & Cairo',
    country: 'Egypt',
    region: 'Africa',
    category: 'Cultural Heritage',
    wikiSlug: 'Giza_pyramid_complex',
    lat: 29.9792,
    lon: 31.1342,
    budgetPerDay: 95,
    rating: 4.7,
    bestTimeToVisit: 'October – April',
    suggestedDuration: '3–4 Days',
    highlights: ['Great Pyramid of Khufu', 'Great Sphinx', 'Grand Egyptian Museum', 'Khan el-Khalili Bazaar'],
    fallbackImage: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1200&q=80',
    tags: ['Pyramids', 'Antiquities', 'Nile', 'Historic']
  },
  {
    id: 'bora-bora-polynesia',
    name: 'Bora Bora',
    country: 'French Polynesia',
    region: 'Oceania',
    category: 'Island & Coastal',
    wikiSlug: 'Bora_Bora',
    lat: -16.5004,
    lon: -151.7415,
    budgetPerDay: 450,
    rating: 4.9,
    bestTimeToVisit: 'May – October',
    suggestedDuration: '5–7 Days',
    highlights: ['Overwater Bungalows', 'Mount Otemanu', 'Lagoonarium Snorkeling', 'Matira Beach'],
    fallbackImage: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1200&q=80',
    tags: ['Overwater Villas', 'Lagoon', 'Coral Reefs', 'Luxury']
  },
  {
    id: 'reykjavik-iceland',
    name: 'Reykjavik & Golden Circle',
    country: 'Iceland',
    region: 'Europe',
    category: 'Nature & Adventure',
    wikiSlug: 'Golden_Circle_(Iceland)',
    lat: 64.1466,
    lon: -21.9426,
    budgetPerDay: 220,
    rating: 4.8,
    bestTimeToVisit: 'September – March (Northern Lights) or June – August (Midnight Sun)',
    suggestedDuration: '4–6 Days',
    highlights: ['Gullfoss Waterfall', 'Geysir Geothermal Area', 'Blue Lagoon', 'Aurora Borealis Tours'],
    fallbackImage: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80',
    tags: ['Waterfalls', 'Geothermal', 'Northern Lights', 'Volcanoes']
  },
  {
    id: 'tokyo-japan',
    name: 'Tokyo',
    country: 'Japan',
    region: 'Asia',
    category: 'Urban Wonders',
    wikiSlug: 'Tokyo',
    lat: 35.6762,
    lon: 139.6503,
    budgetPerDay: 160,
    rating: 4.9,
    bestTimeToVisit: 'March – May & September – November',
    suggestedDuration: '5–7 Days',
    highlights: ['Shinjuku Crossing', 'Senso-ji Temple', 'teamLab Planets', 'Meiji Jingu Shrine'],
    fallbackImage: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
    tags: ['Metropolis', 'Gastronomy', 'Tech', 'Tradition']
  },
  {
    id: 'jaipur-india',
    name: 'Jaipur',
    country: 'India',
    region: 'Asia',
    category: 'Cultural Heritage',
    wikiSlug: 'Jaipur',
    lat: 26.9124,
    lon: 75.7873,
    budgetPerDay: 65,
    rating: 4.9,
    bestTimeToVisit: 'October – March',
    suggestedDuration: '3–4 Days',
    highlights: ['Amber Fort & Palace', 'Hawa Mahal (Palace of Winds)', 'City Palace', 'Jantar Mantar UNESCO Observatory'],
    fallbackImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
    tags: ['Pink City', 'Palaces', 'Forts', 'Textiles & Bazaars']
  },
  {
    id: 'kerala-backwaters-india',
    name: 'Kerala Backwaters',
    country: 'India',
    region: 'Asia',
    category: 'Island & Coastal',
    wikiSlug: 'Alappuzha',
    lat: 9.4981,
    lon: 76.3388,
    budgetPerDay: 75,
    rating: 4.9,
    bestTimeToVisit: 'November – February',
    suggestedDuration: '3–5 Days',
    highlights: ['Kettuvallam Houseboat Cruise', 'Vembanad Lake Serenity', 'Ayurvedic Wellness', 'Marari Beach'],
    fallbackImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    tags: ['Backwaters', 'Houseboats', 'Palms', 'Ayurveda']
  },
  {
    id: 'agra-taj-mahal-india',
    name: 'Agra & Taj Mahal',
    country: 'India',
    region: 'Asia',
    category: 'Cultural Heritage',
    wikiSlug: 'Agra',
    lat: 27.1767,
    lon: 78.0081,
    budgetPerDay: 60,
    rating: 5.0,
    bestTimeToVisit: 'October – March',
    suggestedDuration: '2–3 Days',
    highlights: ['Taj Mahal Sunrise', 'Agra Fort Red Sandstone Citadel', 'Fatehpur Sikri', 'Mehtab Bagh Gardens'],
    fallbackImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
    tags: ['Taj Mahal', 'Mughal Architecture', 'Wonders of the World']
  },
  {
    id: 'varanasi-india',
    name: 'Varanasi (Kashi)',
    country: 'India',
    region: 'Asia',
    category: 'Cultural Heritage',
    wikiSlug: 'Varanasi',
    lat: 25.3176,
    lon: 82.9739,
    budgetPerDay: 50,
    rating: 4.8,
    bestTimeToVisit: 'October – March',
    suggestedDuration: '3–4 Days',
    highlights: ['Dashashwamedh Ghat Evening Aarti', 'Kashi Vishwanath Corridor', 'Dawn Ganges Boat Ride', 'Sarnath Deer Park'],
    fallbackImage: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80',
    tags: ['Spiritual Capital', 'Ghats', 'Ganges', 'Ancient Heritage']
  },
  {
    id: 'ladakh-india',
    name: 'Ladakh & Pangong Tso',
    country: 'India',
    region: 'Asia',
    category: 'Nature & Adventure',
    wikiSlug: 'Ladakh',
    lat: 34.1526,
    lon: 77.5771,
    budgetPerDay: 85,
    rating: 4.9,
    bestTimeToVisit: 'May – September',
    suggestedDuration: '5–7 Days',
    highlights: ['Pangong Tso Alpine Lake', 'Nubra Valley Sand Dunes', 'Khardung La Pass (5,359m)', 'Thiksey Monastery'],
    fallbackImage: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80',
    tags: ['Himalayas', 'High Altitude Lakes', 'Monasteries', 'Motorcycling']
  },
  {
    id: 'mahabalipuram-india',
    name: 'Mahabalipuram & Chennai',
    country: 'India',
    region: 'Asia',
    category: 'Cultural Heritage',
    wikiSlug: 'Mamallapuram',
    lat: 12.6269,
    lon: 80.1927,
    budgetPerDay: 55,
    rating: 4.8,
    bestTimeToVisit: 'November – February',
    suggestedDuration: '2–3 Days',
    highlights: ['UNESCO 8th-Century Shore Temple', 'Pancha Rathas Monoliths', "Arjuna's Penance Bas-Relief", 'Coromandel Coast'],
    fallbackImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    tags: ['Pallava Dynasty', 'Rock Architecture', 'Coastline', 'Tamil Nadu Heritage']
  }
];

// Pre-defined Incredible India Grand Tour Itinerary preset
export const INCREDIBLE_INDIA_PRESET = [
  {
    id: 'agra-taj-mahal-india',
    name: 'Agra & Taj Mahal',
    country: 'India',
    region: 'Asia',
    category: 'Cultural Heritage',
    wikiSlug: 'Agra',
    lat: 27.1767,
    lon: 78.0081,
    budgetPerDay: 60,
    rating: 5.0,
    plannedDays: 2,
    visitDate: '2026-11-10',
    notes: 'Witness dawn sunrise over the marble dome of the Taj Mahal. Tour Agra Fort and enjoy sunset from Mehtab Bagh.',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'jaipur-india',
    name: 'Jaipur',
    country: 'India',
    region: 'Asia',
    category: 'Cultural Heritage',
    wikiSlug: 'Jaipur',
    lat: 26.9124,
    lon: 75.7873,
    budgetPerDay: 65,
    rating: 4.9,
    plannedDays: 3,
    visitDate: '2026-11-13',
    notes: 'Explore Amber Fort Sheesh Mahal (mirror palace), photograph Hawa Mahal at golden hour, and sample Dal Baati Churma at Chokhi Dhani.',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'varanasi-india',
    name: 'Varanasi (Kashi)',
    country: 'India',
    region: 'Asia',
    category: 'Cultural Heritage',
    wikiSlug: 'Varanasi',
    lat: 25.3176,
    lon: 82.9739,
    budgetPerDay: 50,
    rating: 4.8,
    plannedDays: 3,
    visitDate: '2026-11-17',
    notes: 'Evening Ganga Aarti ceremony from a wooden boat at Dashashwamedh Ghat. Morning spiritual stroll through ancient galis and Sarnath pilgrimage.',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'kerala-backwaters-india',
    name: 'Kerala Backwaters',
    country: 'India',
    region: 'Asia',
    category: 'Island & Coastal',
    wikiSlug: 'Alappuzha',
    lat: 9.4981,
    lon: 76.3388,
    budgetPerDay: 75,
    rating: 4.9,
    plannedDays: 4,
    visitDate: '2026-11-21',
    notes: 'Overnight private kettuvallam luxury houseboat cruise through Vembanad Lake canals. Traditional Ayurvedic rejuvenation and seafood feast.',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'ladakh-india',
    name: 'Ladakh & Pangong Tso',
    country: 'India',
    region: 'Asia',
    category: 'Nature & Adventure',
    wikiSlug: 'Ladakh',
    lat: 34.1526,
    lon: 77.5771,
    budgetPerDay: 85,
    rating: 4.9,
    plannedDays: 5,
    visitDate: '2026-11-26',
    notes: 'Cross Khardung La Pass into Nubra Valley, camp beside the color-changing blue waters of Pangong Tso, and attend morning chants at Thiksey Monastery.',
    image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'mahabalipuram-india',
    name: 'Mahabalipuram & Chennai',
    country: 'India',
    region: 'Asia',
    category: 'Cultural Heritage',
    wikiSlug: 'Mamallapuram',
    lat: 12.6269,
    lon: 80.1927,
    budgetPerDay: 55,
    rating: 4.8,
    plannedDays: 2,
    visitDate: '2026-12-02',
    notes: 'Explore the 8th-century monolithic Shore Temple and rock relief of Arjuna Penance. Savor authentic Chennai filter coffee and seaside breeze.',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80'
  }
];

// Weather interpretation codes based on WMO standard used by Open-Meteo
export function interpretWeatherCode(code) {
  if (code === 0) return { label: 'Clear Sky', icon: 'Sun', color: 'text-amber-500' };
  if (code === 1 || code === 2) return { label: 'Partly Cloudy', icon: 'CloudSun', color: 'text-amber-400' };
  if (code === 3) return { label: 'Overcast', icon: 'Cloud', color: 'text-slate-400' };
  if (code >= 45 && code <= 48) return { label: 'Foggy / Haze', icon: 'CloudFog', color: 'text-slate-300' };
  if (code >= 51 && code <= 55) return { label: 'Light Drizzle', icon: 'CloudDrizzle', color: 'text-blue-400' };
  if (code >= 61 && code <= 65) return { label: 'Rain Showers', icon: 'CloudRain', color: 'text-blue-500' };
  if (code >= 71 && code <= 77) return { label: 'Snowfall', icon: 'Snowflake', color: 'text-sky-300' };
  if (code >= 80 && code <= 82) return { label: 'Heavy Showers', icon: 'CloudRainWind', color: 'text-blue-600' };
  if (code >= 95) return { label: 'Thunderstorm', icon: 'CloudLightning', color: 'text-indigo-500' };
  return { label: 'Mild Conditions', icon: 'Sun', color: 'text-amber-400' };
}

/**
 * Fetch real live weather from Open-Meteo API
 */
export async function fetchLiveWeather(lat, lon) {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat.toFixed(4)}&longitude=${lon.toFixed(4)}&current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=auto`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Open-Meteo API status: ${response.status}`);
    }
    const data = await response.json();
    const current = data.current_weather;
    const daily = data.daily;
    const weatherInfo = interpretWeatherCode(current?.weathercode ?? 0);

    return {
      success: true,
      temp: Math.round(current?.temperature ?? 22),
      windSpeed: current?.windspeed ?? 12,
      condition: weatherInfo.label,
      iconName: weatherInfo.icon,
      color: weatherInfo.color,
      maxTemp: daily?.temperature_2m_max?.[0] ? Math.round(daily.temperature_2m_max[0]) : null,
      minTemp: daily?.temperature_2m_min?.[0] ? Math.round(daily.temperature_2m_min[0]) : null,
      source: 'Open-Meteo Live API'
    };
  } catch (err) {
    console.warn(`Weather fetch failed for [${lat}, ${lon}], using contextual fallback:`, err.message);
    return {
      success: false,
      temp: 21,
      windSpeed: 10,
      condition: 'Sunny & Pleasant',
      iconName: 'Sun',
      color: 'text-amber-400',
      source: 'Contextual Forecast'
    };
  }
}

/**
 * Fetch real encyclopedic data and original photograph from Wikipedia REST API
 */
export async function fetchWikiDetails(wikiSlug) {
  try {
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(wikiSlug)}`;
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Wikipedia REST API returned status ${response.status}`);
    }

    const data = await response.json();
    const imageUrl = data.originalimage?.source || data.thumbnail?.source || null;

    return {
      success: true,
      title: data.title,
      description: data.description || 'Global Cultural & Scenic Destination',
      extract: data.extract,
      imageUrl: imageUrl,
      pageUrl: data.content_urls?.desktop?.page || `https://en.wikipedia.org/wiki/${wikiSlug}`,
      coordinates: data.coordinates ? { lat: data.coordinates.lat, lon: data.coordinates.lon } : null,
      source: 'Wikipedia REST API'
    };
  } catch (err) {
    console.warn(`Wikipedia API failed for ${wikiSlug}:`, err.message);
    return {
      success: false,
      source: 'Internal Guide'
    };
  }
}

/**
 * Enrich destinations with live data from Wikipedia and Open-Meteo
 */
export async function loadEnrichedDestinations() {
  const enrichedPromises = CURATED_DESTINATIONS.map(async (dest) => {
    // 1. Fetch Wikipedia details in parallel with Weather
    const [wikiData, weatherData] = await Promise.all([
      fetchWikiDetails(dest.wikiSlug),
      fetchLiveWeather(dest.lat, dest.lon)
    ]);

    return {
      ...dest,
      description: wikiData.success && wikiData.extract ? wikiData.extract : dest.description,
      subtitle: wikiData.success && wikiData.description ? wikiData.description : `${dest.category} in ${dest.country}`,
      image: (wikiData.success && wikiData.imageUrl) ? wikiData.imageUrl : dest.fallbackImage,
      wikipediaUrl: wikiData.pageUrl,
      weather: weatherData,
      isLiveApiData: wikiData.success || weatherData.success
    };
  });

  return Promise.all(enrichedPromises);
}

/**
 * Live search via Wikipedia API to find and explore ANY place in the world
 */
export async function searchWorldDestinations(query) {
  if (!query || query.trim().length < 2) return [];

  try {
    const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query + ' tourism travel')}&format=json&origin=*`;
    const res = await fetch(searchUrl);
    if (!res.ok) throw new Error('Search failed');
    const data = await res.json();
    const hits = data.query?.search || [];

    // Take top 3 hits and get their summaries
    const detailedHits = await Promise.all(
      hits.slice(0, 3).map(async (hit, idx) => {
        const summary = await fetchWikiDetails(hit.title);
        if (!summary.success || !summary.extract) return null;

        // Coordinates from wiki or fallback
        const lat = summary.coordinates?.lat ?? (20 + idx * 5);
        const lon = summary.coordinates?.lon ?? (10 + idx * 5);
        const weather = await fetchLiveWeather(lat, lon);

        return {
          id: `wiki-${hit.pageid || idx}-${encodeURIComponent(hit.title)}`,
          name: hit.title,
          country: 'Global Destination',
          region: 'Global Discovery',
          category: 'Cultural Heritage',
          description: summary.extract,
          subtitle: summary.description || 'Discovered via Wikipedia Live API',
          image: summary.imageUrl || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80',
          lat,
          lon,
          budgetPerDay: 150,
          rating: 4.8,
          bestTimeToVisit: 'Spring & Autumn',
          suggestedDuration: '3–5 Days',
          highlights: ['Historic Architecture', 'Local Cuisine', 'Cultural Landmarks'],
          weather,
          wikipediaUrl: summary.pageUrl,
          tags: ['Global Discovery', 'Live API Search'],
          isLiveApiData: true
        };
      })
    );

    return detailedHits.filter(Boolean);
  } catch (e) {
    console.error('Dynamic Wikipedia destination search error:', e);
    return [];
  }
}
