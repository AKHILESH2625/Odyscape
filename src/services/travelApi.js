/**
 * Odyscape Real Travel & Meteorology API Service
 * Integrates:
 * 1. Wikimedia / Wikipedia REST API (encyclopedic summaries, real coordinates, high-res imagery)
 * 2. Open-Meteo Meteorology API (real-time live temperature, weather conditions, wind speed)
 * 3. Live Wikipedia Search API (dynamically discover any destination across the globe)
 */

// Curated master catalog with rich travel metadata & Wikipedia lookup keys
export const CURATED_DESTINATIONS = [
  // ── MALAYSIA DESTINATIONS ──────────────────────────────────────
  {
    id: 'kuala-lumpur-malaysia',
    name: 'Kuala Lumpur',
    country: 'Malaysia',
    region: 'Asia',
    exactLocation: 'Kuala Lumpur Federal Territory, Klang Valley, Peninsular Malaysia',
    category: 'Urban Wonders',
    wikiSlug: 'Kuala_Lumpur',
    lat: 3.1390,
    lon: 101.6869,
    budgetPerDay: 75,
    rating: 4.9,
    bestTimeToVisit: 'May – July & December – February',
    suggestedDuration: '3–4 Days',
    highlights: ['Petronas Twin Towers & Skybridge', 'Batu Caves Rainbow Steps & Lord Murugan Statue', 'Merdeka 118 & KL Tower', 'Jalan Alor & Bukit Bintang Street Food'],
    touristPlaces: [
      'Petronas Twin Towers (452m Skybridge & Observation Deck)',
      'Batu Caves (272-Step Rainbow Staircase & Limestone Caverns)',
      'Merdeka 118 (World’s 2nd Tallest Skyscraper)',
      'Jalan Alor Famous Hawker Street & Night Food Stalls',
      'Thean Hou Six-Tiered Chinese Temple',
      'KLCC Park & Symphony Lake Musical Fountains'
    ],
    fallbackImage: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80',
    tags: ['Petronas', 'Batu Caves', 'Skyscrapers', 'Street Food', 'Shopping', 'Malaysia']
  },
  {
    id: 'penang-malaysia',
    name: 'Penang & George Town',
    country: 'Malaysia',
    region: 'Asia',
    exactLocation: 'Penang Island & Seberang Perai, Strait of Malacca, Northwest Malaysia',
    category: 'Cultural Heritage',
    wikiSlug: 'George_Town,_Penang',
    lat: 5.4164,
    lon: 100.3327,
    budgetPerDay: 60,
    rating: 4.8,
    bestTimeToVisit: 'November – April (Dry Season)',
    suggestedDuration: '3–4 Days',
    highlights: ['George Town UNESCO Street Art & Shophouses', 'Kek Lok Si Temple (Pagoda of 10,000 Buddhas)', 'Penang Hill Funicular Railway & The Habitat', 'Clan Jetties Waterfront Settlement'],
    touristPlaces: [
      'George Town UNESCO Heritage District & Ernest Zacharevic Murals',
      'Kek Lok Si Mountain Temple Complex & Bronze Guanyin Statue',
      'Penang Hill Funicular Train to Panoramic Summit',
      'Chew Jetty & Traditional Clan Waterfront Stilt Houses',
      'Gurney Drive Hawker Centre (Char Kway Teow, Assam Laksa)',
      'Batu Ferringhi Tropical Beach & Night Market'
    ],
    fallbackImage: 'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=1200&q=80',
    tags: ['UNESCO Heritage', 'Hawker Food', 'Colonial Shophouses', 'Temples', 'Street Art', 'Malaysia']
  },
  {
    id: 'langkawi-malaysia',
    name: 'Langkawi UNESCO Geopark',
    country: 'Malaysia',
    region: 'Asia',
    exactLocation: 'Langkawi 99-Island Archipelago, Andaman Sea, Kedah, Northwest Malaysia',
    category: 'Island & Coastal',
    wikiSlug: 'Langkawi',
    lat: 6.3500,
    lon: 99.8000,
    budgetPerDay: 90,
    rating: 4.9,
    bestTimeToVisit: 'November – April (Pleasant Sea Conditions)',
    suggestedDuration: '4–5 Days',
    highlights: ['Langkawi Sky Bridge & SkyCab Cable Car', 'Kilim Karst Geoforest Park & Mangrove Cruise', 'Tanjung Rhu Pristine Beach', 'Telaga Tujuh Seven Wells Waterfalls'],
    touristPlaces: [
      'Langkawi Sky Bridge (Curved 125m Cable-Stayed Bridge suspended 660m above sea level)',
      'Kilim Karst Geoforest Mangrove Safari & Eagle Feeding Sanctuary',
      'Pantai Cenang White Sand Coastline & Water Sports',
      'Dataran Lang (Eagle Square 12-meter Reddish-Brown Eagle Monument)',
      'Telaga Tujuh (Seven Wells Natural Forest Rock Pools)',
      'Underwater World Langkawi Oceanarium'
    ],
    fallbackImage: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1200&q=80',
    tags: ['Geopark', 'Sky Bridge', 'Islands', 'Beaches', 'Mangroves', 'Cable Car', 'Malaysia']
  },
  {
    id: 'melaka-malaysia',
    name: 'Melaka (Malacca Historic City)',
    country: 'Malaysia',
    region: 'Asia',
    exactLocation: 'Malacca Strait Coastline, Melaka State, Southern Peninsular Malaysia',
    category: 'Cultural Heritage',
    wikiSlug: 'Malacca',
    lat: 2.1896,
    lon: 102.2501,
    budgetPerDay: 55,
    rating: 4.8,
    bestTimeToVisit: 'Year-Round (Best on Weekends for Jonker Walk)',
    suggestedDuration: '2–3 Days',
    highlights: ['A Famosa 16th-Century Portuguese Fortress', 'Dutch Stadthuys & Red Square', 'Jonker Street Bazaars & Night Market', 'Melaka River Scenic Night Cruise'],
    touristPlaces: [
      'Dutch Red Square & Christ Church (Erected in 1753)',
      'A Famosa (Porta de Santiago Portuguese Fortress Gate)',
      'Jonker Street Night Market & Peranakan Heritage Shophouses',
      'Melaka River Walkway & Illuminated Evening River Cruise',
      "St. Paul's Hill Historic Church Ruins & St. Francis Xavier Statue",
      'Cheng Hoon Teng (Oldest Functioning Chinese Temple in Malaysia)'
    ],
    fallbackImage: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80',
    tags: ['Portuguese Fortress', 'Dutch Square', 'Jonker Walk', 'Peranakan Culture', 'UNESCO', 'Malaysia']
  },

  // ── INDIA DESTINATIONS ─────────────────────────────────────────
  {
    id: 'agra-taj-mahal-india',
    name: 'Agra & Taj Mahal',
    country: 'India',
    region: 'Asia',
    exactLocation: 'Yamuna River Basin, Agra District, Uttar Pradesh, Northern India',
    category: 'Cultural Heritage',
    wikiSlug: 'Agra',
    lat: 27.1767,
    lon: 78.0081,
    budgetPerDay: 60,
    rating: 5.0,
    bestTimeToVisit: 'October – March (Crisp & Clear Skies)',
    suggestedDuration: '2–3 Days',
    highlights: ['Taj Mahal Sunrise & White Marble Marvel', 'Agra Fort Red Sandstone Imperial Citadel', 'Fatehpur Sikri Abandoned Mughal City', 'Mehtab Bagh Moonlight Gardens'],
    touristPlaces: [
      'Taj Mahal (UNESCO World Heritage Site & 7th Wonder of the World)',
      'Agra Fort (16th-century Mughal Red Sandstone Citadel)',
      'Fatehpur Sikri (Emperor Akbar’s Preserved Royal Capital & Buland Darwaza)',
      'Mehtab Bagh (Moonlight Garden with Unobstructed River View of the Taj)',
      'Itmad-ud-Daulah (Baby Taj Marble Mosaic Mausoleum)',
      'Kinari Bazaar (Traditional Handicrafts, Zardozi Embroidery & Petha Sweets)'
    ],
    fallbackImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
    tags: ['Taj Mahal', 'Mughal Architecture', 'Wonders of the World', 'Monuments', 'India']
  },
  {
    id: 'jaipur-india',
    name: 'Jaipur (Pink City)',
    country: 'India',
    region: 'Asia',
    exactLocation: 'Aravalli Hills Corridor, Jaipur District, Rajasthan, Northwestern India',
    category: 'Cultural Heritage',
    wikiSlug: 'Jaipur',
    lat: 26.9124,
    lon: 75.7873,
    budgetPerDay: 65,
    rating: 4.9,
    bestTimeToVisit: 'October – March',
    suggestedDuration: '3–4 Days',
    highlights: ['Amber Fort & Sheesh Mahal Palace', 'Hawa Mahal Palace of Winds', 'City Palace Royal Courtyards', 'Jantar Mantar UNESCO Observatory'],
    touristPlaces: [
      'Amber Fort & Palace (Hilltop Citadel featuring Sheesh Mahal Mirror Hall)',
      'Hawa Mahal (5-Story Pink Honeycomb Facade with 953 Jharokha Windows)',
      'City Palace (Chandra Mahal & Maharaja Sawai Man Singh II Museum)',
      'Jantar Mantar (World’s Largest Stone Astronomical Sundial UNESCO)',
      'Nahargarh Fort & Jaigarh Fort (Cannon Foundry & Sunset City Vista)',
      'Johari Bazaar & Bapu Bazaar (Hand-block Printed Textiles & Gemstones)'
    ],
    fallbackImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
    tags: ['Pink City', 'Palaces', 'Forts', 'Textiles & Bazaars', 'Rajasthan', 'India']
  },
  {
    id: 'kerala-backwaters-india',
    name: 'Kerala Backwaters & Alleppey',
    country: 'India',
    region: 'Asia',
    exactLocation: 'Vembanad Estuary, Alappuzha & Kottayam Districts, Kerala, Southern India',
    category: 'Island & Coastal',
    wikiSlug: 'Alappuzha',
    lat: 9.4981,
    lon: 76.3388,
    budgetPerDay: 75,
    rating: 4.9,
    bestTimeToVisit: 'November – February (Cool & Breezy)',
    suggestedDuration: '3–5 Days',
    highlights: ['Kettuvallam Houseboat Cruise', 'Vembanad Lake Serenity', 'Ayurvedic Wellness Retreats', 'Marari Beach Relaxation'],
    touristPlaces: [
      'Vembanad Lake (India’s Longest Lake & Houseboat Canal Network)',
      'Alappuzha Lighthouse & Historic Pier Beach',
      'Kumarakom Bird Sanctuary (Herons, Egrets & Kingfishers)',
      'Marari Serene White Sand Fishing Beach',
      'Pathiramanal Island Nature Boardwalk',
      'Traditional Ayurvedic Panchakarma Centers'
    ],
    fallbackImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    tags: ['Backwaters', 'Houseboats', 'Palms', 'Ayurveda', 'Kerala', 'India']
  },
  {
    id: 'varanasi-india',
    name: 'Varanasi (Kashi)',
    country: 'India',
    region: 'Asia',
    exactLocation: 'Crescent Bank of Holy River Ganges, Varanasi District, Uttar Pradesh, Northern India',
    category: 'Cultural Heritage',
    wikiSlug: 'Varanasi',
    lat: 25.3176,
    lon: 82.9739,
    budgetPerDay: 50,
    rating: 4.8,
    bestTimeToVisit: 'October – March',
    suggestedDuration: '3–4 Days',
    highlights: ['Dashashwamedh Ghat Evening Ganga Aarti', 'Kashi Vishwanath Corridor', 'Dawn Ganges Boat Ride', 'Sarnath Deer Park Stupa'],
    touristPlaces: [
      'Dashashwamedh Ghat (World-Renowned Sunset Maha Ganga Aarti Ceremony)',
      'Kashi Vishwanath Jyotirlinga Temple & Golden Spire Corridor',
      'Assi Ghat & Manikarnika Ghat (Ancient Riverside Steps & Rituals)',
      'Sarnath (Site of Gautama Buddha’s First Sermon & Dhamek Stupa)',
      'Ramnagar Fort (18th-century Sandstone Fort on the Ganges Shore)',
      'Varanasi Silk Weaving Quarters (Banarasi Handloom Sarees & Brocades)'
    ],
    fallbackImage: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80',
    tags: ['Spiritual Capital', 'Ghats', 'Ganges', 'Ancient Heritage', 'Aarti', 'India']
  },
  {
    id: 'ladakh-india',
    name: 'Ladakh & Pangong Tso',
    country: 'India',
    region: 'Asia',
    exactLocation: 'Trans-Himalayan Tibetan Plateau, Leh District, Ladakh Union Territory, Northern India',
    category: 'Nature & Adventure',
    wikiSlug: 'Ladakh',
    lat: 34.1526,
    lon: 77.5771,
    budgetPerDay: 85,
    rating: 4.9,
    bestTimeToVisit: 'May – September (Mountain Passes Open)',
    suggestedDuration: '5–7 Days',
    highlights: ['Pangong Tso Alpine Lake', 'Nubra Valley Sand Dunes & Bactrian Camels', 'Khardung La Pass (5,359m)', 'Thiksey Buddhist Monastery'],
    touristPlaces: [
      'Pangong Tso (134km Long High-Altitude Lake Shifting from Turquoise to Deep Blue)',
      'Nubra Valley & Hunder Cold Sand Dunes (Double-Humped Bactrian Camels)',
      'Khardung La Pass (World’s Highest Motor-Accessible Mountain Pass at 5,359m)',
      'Thiksey Monastery (12-Story Complex modeled after Lhasa Potala Palace)',
      'Shanti Stupa (White-Domed Buddhist Stupa overlooking Leh Valley)',
      'Magnetic Hill & Confluence of Indus and Zanskar Rivers (Sangam)'
    ],
    fallbackImage: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80',
    tags: ['Himalayas', 'High Altitude Lakes', 'Monasteries', 'Motorcycling', 'Ladakh', 'India']
  },
  {
    id: 'goa-india',
    name: 'Goa (Beaches & Heritage)',
    country: 'India',
    region: 'Asia',
    exactLocation: 'Konkan Coastal Belt, Arabian Sea, Western India',
    category: 'Island & Coastal',
    wikiSlug: 'Goa',
    lat: 15.2993,
    lon: 74.1240,
    budgetPerDay: 65,
    rating: 4.9,
    bestTimeToVisit: 'November – February (Warm Sun & Sea Breezes)',
    suggestedDuration: '4–6 Days',
    highlights: ['Basilica of Bom Jesus & Old Goa UNESCO Churches', 'Palolem & Agonda Crescent Beaches', 'Dudhsagar Four-Tiered Waterfalls', 'Fort Aguada 17th-Century Portuguese Citadel'],
    touristPlaces: [
      'Basilica of Bom Jesus (UNESCO Site housing mortal remains of St. Francis Xavier)',
      'Palolem Beach & Butterfly Beach (Dolphin Watching & Kayaking)',
      'Dudhsagar Waterfalls (310-Meter Cascading White Mist Waterfall in Bhagwan Mahaveer Sanctuary)',
      'Fort Aguada & Lighthouse (Portuguese Clifftop Defense overlooking the Arabian Sea)',
      'Fontainhas Latin Quarter (Colourful Heritage Portuguese Villas & Cafes)',
      'Anjuna & Vagator Clifftop Beaches (Sunset Views & Flea Markets)'
    ],
    fallbackImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    tags: ['Beaches', 'Portuguese Heritage', 'Waterfalls', 'Seafood', 'Sunset Cruises', 'India']
  },
  {
    id: 'delhi-india',
    name: 'New Delhi & Old Delhi',
    country: 'India',
    region: 'Asia',
    exactLocation: 'National Capital Territory of Delhi, Yamuna River Valley, Northern India',
    category: 'Cultural Heritage',
    wikiSlug: 'Delhi',
    lat: 28.6139,
    lon: 77.2090,
    budgetPerDay: 55,
    rating: 4.8,
    bestTimeToVisit: 'October – March',
    suggestedDuration: '3–4 Days',
    highlights: ['Qutub Minar 73-meter UNESCO Minaret', "Humayun's Tomb Mughal Garden Monument", 'Red Fort & Chandni Chowk Food Odyssey', 'India Gate & Kartavya Path Memorial'],
    touristPlaces: [
      'Qutub Minar Complex (73-meter Victory Tower & 4th-Century Rustless Iron Pillar)',
      "Humayun's Tomb (UNESCO Red Sandstone Prototype for the Taj Mahal)",
      'Red Fort (Lal Qila - 17th-Century Imperial Seat of the Mughal Empire)',
      'Chandni Chowk & Paranthe Wali Gali (Historic Rickshaw Bazaar & Street Gastronomy)',
      'India Gate War Memorial & Rashtrapati Bhavan Boulevard',
      'Swaminarayan Akshardham Complex (Elaborately Carved Temple & Musical Fountain)'
    ],
    fallbackImage: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80',
    tags: ['Capital City', 'Mughal Architecture', 'Monuments', 'Street Food', 'Bazaars', 'India']
  },
  {
    id: 'mumbai-india',
    name: 'Mumbai (City of Dreams)',
    country: 'India',
    region: 'Asia',
    exactLocation: 'Salsette Island, Konkan Coast, Arabian Sea, Western India',
    category: 'Urban Wonders',
    wikiSlug: 'Mumbai',
    lat: 18.9220,
    lon: 72.8347,
    budgetPerDay: 75,
    rating: 4.8,
    bestTimeToVisit: 'October – February',
    suggestedDuration: '3–4 Days',
    highlights: ['Gateway of India Monument', "Marine Drive Queen's Necklace Promenade", 'Elephanta Caves UNESCO Rock Sculptures', 'Chhatrapati Shivaji Maharaj Terminus (Victorian Gothic UNESCO)'],
    touristPlaces: [
      'Gateway of India (1924 Basalt Arch Monument on Mumbai Harbour)',
      "Marine Drive & Chowpatty Beach (3.6km C-Shaped Queen's Necklace Sunset Promenade)",
      'Elephanta Island Caves (5th-century Rock-Cut Temples of Lord Shiva UNESCO)',
      'Chhatrapati Shivaji Maharaj Terminus (CST Landmark Victorian Gothic Railway Station)',
      'Colaba Causeway Heritage Market & Leopold Cafe',
      'Bandra-Worli Sea Link (Eight-Lane Cable-Stayed Engineering Feat)'
    ],
    fallbackImage: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80',
    tags: ['City of Dreams', 'Colonial Architecture', 'Coastline', 'Bollywood', 'Bazaars', 'India']
  },
  {
    id: 'udaipur-india',
    name: 'Udaipur (City of Lakes)',
    country: 'India',
    region: 'Asia',
    exactLocation: 'Mewar Kingdom, Aravalli Mountain Range, Rajasthan, Western India',
    category: 'Cultural Heritage',
    wikiSlug: 'Udaipur',
    lat: 24.5854,
    lon: 73.7125,
    budgetPerDay: 65,
    rating: 4.9,
    bestTimeToVisit: 'September – March',
    suggestedDuration: '3–4 Days',
    highlights: ['City Palace Lakeside Royal Complex', 'Lake Pichola & Jag Mandir Island Palace Boat Cruise', 'Saheliyon-ki-Bari Royal Fountains Garden', 'Monsoon Palace (Sajjangarh) Clifftop Sunset'],
    touristPlaces: [
      'City Palace of Udaipur (Rajasthan’s Largest Royal Palace Complex on Lake Pichola)',
      'Lake Pichola Sunset Boat Cruise to Jag Mandir Island Palace',
      'Taj Lake Palace (Floating 18th-century White Marble Island Marvel)',
      'Saheliyon-ki-Bari (Courtyard of the Maidens with Marble Elephants & Fountains)',
      'Bagore Ki Haveli (Evening Rajasthani Folk Dance & Puppet Performance at Gangaur Ghat)',
      'Sajjangarh Monsoon Palace (Hilltop Fortress with 360-degree Sunset Panorama)'
    ],
    fallbackImage: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80',
    tags: ['City of Lakes', 'Lake Palaces', 'Royalty', 'Aravalli Hills', 'Heritage', 'India']
  },
  {
    id: 'mahabalipuram-india',
    name: 'Mahabalipuram & Chennai',
    country: 'India',
    region: 'Asia',
    exactLocation: 'Coromandel Coast, Bay of Bengal, Chengalpattu District, Tamil Nadu, Southern India',
    category: 'Cultural Heritage',
    wikiSlug: 'Mamallapuram',
    lat: 12.6269,
    lon: 80.1927,
    budgetPerDay: 55,
    rating: 4.8,
    bestTimeToVisit: 'November – February (Pleasant Coastal Season)',
    suggestedDuration: '2–3 Days',
    highlights: ['UNESCO 8th-Century Shore Temple', 'Pancha Rathas Monoliths', "Arjuna's Penance Bas-Relief", 'Coromandel Coast Beaches'],
    touristPlaces: [
      'Shore Temple (8th-Century Granite Monolith perched directly beside the Sea Waves)',
      'Pancha Rathas (Five Chariot-shaped Rock-cut Monoliths named after the Pandavas)',
      "Arjuna's Penance / Descent of the Ganges (World’s Largest Open-Air Bas-Relief Rock Sculpture)",
      "Krishna's Butter Ball (Gigantic 250-Tonne Boulder poised on a 45-degree slope)",
      'Mahabalipuram Lighthouse & Sea View Observation Point',
      'DakshinaChitra Living Heritage Museum of South Indian Traditions'
    ],
    fallbackImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    tags: ['Pallava Dynasty', 'Rock Architecture', 'Coastline', 'Tamil Nadu Heritage', 'India']
  },

  // ── GLOBAL WONDERS & LANDMARKS ────────────────────────────────
  {
    id: 'kyoto-japan',
    name: 'Kyoto',
    country: 'Japan',
    region: 'Asia',
    exactLocation: 'Kansai Region, Honshu Island, Japan',
    category: 'Cultural Heritage',
    wikiSlug: 'Kyoto',
    lat: 35.0116,
    lon: 135.7681,
    budgetPerDay: 130,
    rating: 4.9,
    bestTimeToVisit: 'March – May & October – November',
    suggestedDuration: '4–5 Days',
    highlights: ['Fushimi Inari-taisha', 'Arashiyama Bamboo Grove', 'Kinkaku-ji Golden Pavilion', 'Gion Geisha District'],
    touristPlaces: [
      'Fushimi Inari-taisha (10,000 Vermilion Torii Gate Mountain Shrine)',
      'Kinkaku-ji (The Famous Zen Temple Covered in Pure Gold Leaf)',
      'Arashiyama Bamboo Grove & Tenryu-ji Zen Garden',
      'Kiyomizu-dera (Wooden Stage Temple over Hanging Valley Cliffs)',
      'Gion District (Historic Preserved Ochaya Geisha Tea Houses)',
      'Nijo Castle & Nightingale Squeaking Wooden Floors'
    ],
    fallbackImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    tags: ['Temples', 'Gardens', 'Culinary', 'Autumn Foliage', 'Japan']
  },
  {
    id: 'santorini-greece',
    name: 'Santorini',
    country: 'Greece',
    region: 'Europe',
    exactLocation: 'Cyclades Archipelago, Southern Aegean Sea, Greece',
    category: 'Island & Coastal',
    wikiSlug: 'Santorini',
    lat: 36.3932,
    lon: 25.4615,
    budgetPerDay: 210,
    rating: 4.8,
    bestTimeToVisit: 'Late April – Early November',
    suggestedDuration: '3–4 Days',
    highlights: ['Oia Sunsets', 'Red Beach', 'Ancient Thera', 'Caldera Catamaran Cruises'],
    touristPlaces: [
      'Oia Village (Famous Blue-Domed Whitewashed Churches & Sunset Castle)',
      'Fira to Oia Caldera Rim Panoramic Cliffside Hiking Path',
      'Red Beach (Dramatic Volcanic Rust-Red Cliffs & Turquoise Waters)',
      'Akrotiri Archaeological Site (Prehistoric Minoan Bronze Age Settlement)',
      'Ammoudi Bay (Seafood Tavernas & Cliff-Jumping Waters)',
      'Santo Wines Winery (Volcanic Wine Tasting with Sunset Caldera View)'
    ],
    fallbackImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
    tags: ['Caldera', 'Cyclades', 'Beaches', 'Wine', 'Greece']
  },
  {
    id: 'banff-canada',
    name: 'Banff National Park',
    country: 'Canada',
    region: 'Americas',
    exactLocation: 'Alberta Canadian Rocky Mountains, Canada',
    category: 'Nature & Adventure',
    wikiSlug: 'Banff_National_Park',
    lat: 51.4968,
    lon: -115.9281,
    budgetPerDay: 180,
    rating: 4.9,
    bestTimeToVisit: 'June – August & December – March',
    suggestedDuration: '5–6 Days',
    highlights: ['Lake Louise', 'Moraine Lake', 'Icefields Parkway', 'Banff Upper Hot Springs'],
    touristPlaces: [
      'Lake Louise (Glacier-fed Turquoise Alpine Lake & Fairmont Chateau)',
      'Moraine Lake & Valley of the Ten Peaks',
      'Icefields Parkway (One of the World’s Most Scenic Mountain Drives)',
      'Banff Gondola to Sulphur Mountain Cosmic Ray Station (2,281m)',
      'Johnston Canyon (Limestone Gorge Waterfalls & Suspended Catwalks)',
      'Banff Upper Hot Springs (Thermal Mineral Baths in the Rockies)'
    ],
    fallbackImage: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1200&q=80',
    tags: ['Rockies', 'Hiking', 'Glacial Lakes', 'Wildlife', 'Canada']
  },
  {
    id: 'paris-france',
    name: 'Paris',
    country: 'France',
    region: 'Europe',
    exactLocation: 'Île-de-France, Seine River Basin, France',
    category: 'Urban Wonders',
    wikiSlug: 'Paris',
    lat: 48.8566,
    lon: 2.3522,
    budgetPerDay: 195,
    rating: 4.7,
    bestTimeToVisit: 'April – May & September – October',
    suggestedDuration: '4–5 Days',
    highlights: ['Eiffel Tower', 'Louvre Museum', 'Montmartre', "Musée d'Orsay"],
    touristPlaces: [
      'Eiffel Tower (330m Iron Lattice Monument on the Champ de Mars)',
      'Louvre Museum (Home to Leonardo da Vinci’s Mona Lisa & Venus de Milo)',
      'Basilique du Sacré-Cœur on the Summit of Butte Montmartre',
      'Notre-Dame Cathedral & Sainte-Chapelle Stained Glass Windows',
      'Arc de Triomphe & Champs-Élysées Boulevard',
      'Seine River Sightseeing Cruise past Historic River Bridges'
    ],
    fallbackImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
    tags: ['Art', 'Cuisine', 'Architecture', 'Fashion', 'France']
  },
  {
    id: 'serengeti-tanzania',
    name: 'Serengeti National Park',
    country: 'Tanzania',
    region: 'Africa',
    exactLocation: 'Mara & Simiyu Regions, Northern Tanzania',
    category: 'Nature & Adventure',
    wikiSlug: 'Serengeti_National_Park',
    lat: -2.3333,
    lon: 34.8333,
    budgetPerDay: 320,
    rating: 5.0,
    bestTimeToVisit: 'June – October (Great Migration)',
    suggestedDuration: '4–5 Days',
    highlights: ['Great Wildebeest Migration', 'Ngorongoro Crater', 'Seronera Valley Safari', 'Hot Air Balloon Flights'],
    touristPlaces: [
      'Seronera River Valley (Dense Big Cat Safari: Lions, Leopards & Cheetahs)',
      'Grumeti & Mara River Crossing Points of the Great Migration',
      'Ngorongoro Conservation Crater (Ancient Volcanic Caldera)',
      'Serengeti Dawn Hot Air Balloon Safari with Bush Champagne Breakfast',
      'Retima Hippo Pool (Hundreds of Submerged Hippos & Crocodiles)',
      'Olduvai Gorge (Cradle of Humankind Prehistoric Site)'
    ],
    fallbackImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
    tags: ['Safari', 'Big Five', 'Savannah', 'Photography', 'Tanzania']
  },
  {
    id: 'amalfi-italy',
    name: 'Amalfi Coast',
    country: 'Italy',
    region: 'Europe',
    exactLocation: 'Province of Salerno, Campania, Tyrrhenian Sea, Italy',
    category: 'Island & Coastal',
    wikiSlug: 'Amalfi_Coast',
    lat: 40.6340,
    lon: 14.6027,
    budgetPerDay: 240,
    rating: 4.8,
    bestTimeToVisit: 'May – September',
    suggestedDuration: '4–5 Days',
    highlights: ['Positano Cliffside', 'Path of the Gods Hike', 'Ravello Villa Rufolo', 'Capri Day Boat Trip'],
    touristPlaces: [
      'Positano (Cascading Pastel Houses on Vertical Cliffs overlooking Spiaggia Grande)',
      'Ravello (Villa Rufolo & Villa Cimbrone Terrace of Infinity)',
      'Path of the Gods (Sentiero degli Dei Clifftop Trail)',
      'Amalfi Cathedral (Duomo di Sant’Andrea with Striped Byzantine Facade)',
      'Emerald Grotto (Grotta dello Smeraldo Sea Cave)',
      'Capri Island & Blue Grotto Excursion'
    ],
    fallbackImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    tags: ['Mediterranean', 'Cliffs', 'Limoncello', 'Scenic Drives', 'Italy']
  },
  {
    id: 'queenstown-newzealand',
    name: 'Queenstown',
    country: 'New Zealand',
    region: 'Oceania',
    exactLocation: 'Otago Region, Lake Wakatipu, South Island, New Zealand',
    category: 'Nature & Adventure',
    wikiSlug: 'Queenstown,_New_Zealand',
    lat: -45.0312,
    lon: 168.6626,
    budgetPerDay: 165,
    rating: 4.9,
    bestTimeToVisit: 'December – February (Summer) or July – August (Ski)',
    suggestedDuration: '4–6 Days',
    highlights: ['Milford Sound Excursion', 'Lake Wakatipu', 'Skyline Gondola', 'Shotover River Jet Boating'],
    touristPlaces: [
      'Milford Sound Fjord (Mitre Peak & Stirling Falls Scenic Cruise)',
      'Lake Wakatipu Historic TSS Earnslaw Vintage Steamship Cruise',
      'Skyline Gondola & Luge Track on Bob’s Peak',
      'Shotover River Canyons Jet Boat Ride',
      'Queenstown Hill Walking Track (Basket of Dreams Sculpture)',
      'Arrowtown (Preserved 1860s Gold Mining Heritage Town)'
    ],
    fallbackImage: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1200&q=80',
    tags: ['Fjords', 'Adrenaline', 'Wine', 'Alpine', 'New Zealand']
  },
  {
    id: 'machu-picchu-peru',
    name: 'Machu Picchu',
    country: 'Peru',
    region: 'Americas',
    exactLocation: 'Urubamba Province, Cusco Region, Eastern Cordillera of the Andes, Peru',
    category: 'Cultural Heritage',
    wikiSlug: 'Machu_Picchu',
    lat: -13.1631,
    lon: -72.5450,
    budgetPerDay: 140,
    rating: 4.9,
    bestTimeToVisit: 'May – October (Dry Season)',
    suggestedDuration: '3–4 Days',
    highlights: ['Inca Sun Gate', 'Huayna Picchu Peak', 'Temple of the Sun', 'Sacred Valley of the Incas'],
    touristPlaces: [
      'Machu Picchu Citadel (Temple of the Sun & Intihuatana Solar Clock)',
      'Huayna Picchu (Steep Peak Overlooking the Lost City Ruins)',
      'Inti Punku (Sun Gate on the Final Stretch of the Classic Inca Trail)',
      'Sacred Valley of the Incas (Ollantaytambo & Pisac Terraces)',
      'Inca Bridge (Secret Cliffside Plank Trail)',
      'Aguas Calientes Thermal Mineral Baths'
    ],
    fallbackImage: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=80',
    tags: ['Inca Empire', 'Andes', 'Archaeology', 'Trekking', 'Peru']
  },
  {
    id: 'cairo-giza-egypt',
    name: 'Giza & Cairo',
    country: 'Egypt',
    region: 'Africa',
    exactLocation: 'Giza Plateau & Cairo Metropolitan Region, Nile Valley, Egypt',
    category: 'Cultural Heritage',
    wikiSlug: 'Giza_pyramid_complex',
    lat: 29.9792,
    lon: 31.1342,
    budgetPerDay: 95,
    rating: 4.7,
    bestTimeToVisit: 'October – April',
    suggestedDuration: '3–4 Days',
    highlights: ['Great Pyramid of Khufu', 'Great Sphinx', 'Grand Egyptian Museum', 'Khan el-Khalili Bazaar'],
    touristPlaces: [
      'Great Pyramid of Giza (Khufu, Khafre, and Menkaure Ancient Dynastic Tombs)',
      'The Great Sphinx of Giza (Monolithic Limestone Statue of a Reclining Sphinx)',
      'Grand Egyptian Museum (GEM - World’s Largest Archaeological Museum)',
      'Khan el-Khalili (14th-Century Historic Islamic Cairo Bazaar)',
      'Citadel of Saladin & Mosque of Muhammad Ali (Alabaster Mosque)',
      'Nile River Sunset Felucca Sailboat Ride'
    ],
    fallbackImage: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1200&q=80',
    tags: ['Pyramids', 'Antiquities', 'Nile', 'Historic', 'Egypt']
  },
  {
    id: 'bora-bora-polynesia',
    name: 'Bora Bora',
    country: 'French Polynesia',
    region: 'Oceania',
    exactLocation: 'Leeward Society Islands, South Pacific Ocean, French Polynesia',
    category: 'Island & Coastal',
    wikiSlug: 'Bora_Bora',
    lat: -16.5004,
    lon: -151.7415,
    budgetPerDay: 450,
    rating: 4.9,
    bestTimeToVisit: 'May – October',
    suggestedDuration: '5–7 Days',
    highlights: ['Overwater Bungalows', 'Mount Otemanu', 'Lagoonarium Snorkeling', 'Matira Beach'],
    touristPlaces: [
      'Mount Otemanu (727-meter Jagged Extinct Volcanic Peak at Island Center)',
      'Bora Bora Lagoonarium (Natural Aquarium with Rays, Reef Sharks & Turtles)',
      'Matira Beach (Public White Coral Beach with Shallow Turquoise Waters)',
      'Motu Tapu (Private Coconut Palm Islet once reserved for Polynesian Royalty)',
      'Coral Gardens (Vibrant Snorkeling Reef with Moray Eels & Clownfish)',
      'Traditional Polynesian Outrigger Canoe Lagoon Excursion'
    ],
    fallbackImage: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1200&q=80',
    tags: ['Overwater Villas', 'Lagoon', 'Coral Reefs', 'Luxury', 'Polynesia']
  },
  {
    id: 'reykjavik-iceland',
    name: 'Reykjavik & Golden Circle',
    country: 'Iceland',
    region: 'Europe',
    exactLocation: 'Capital Region & Southern Geothermal Rift Valley, Iceland',
    category: 'Nature & Adventure',
    wikiSlug: 'Golden_Circle_(Iceland)',
    lat: 64.1466,
    lon: -21.9426,
    budgetPerDay: 220,
    rating: 4.8,
    bestTimeToVisit: 'September – March (Northern Lights) or June – August (Midnight Sun)',
    suggestedDuration: '4–6 Days',
    highlights: ['Gullfoss Waterfall', 'Geysir Geothermal Area', 'Blue Lagoon', 'Aurora Borealis Tours'],
    touristPlaces: [
      'Gullfoss (Two-Tiered "Golden Waterfall" roaring into a 32m canyon)',
      'Strokkur Geysir (Geothermal Fountain erupting boiling water every 6–10 minutes)',
      'Thingvellir National Park (UNESCO Tectonic Rift between North American & Eurasian plates)',
      'Blue Lagoon (Geothermal Mineral-Rich Silica Spa)',
      'Hallgrimskirkja (Expressionist Basalt-Columned Church towering over Reykjavik)',
      'Seljalandsfoss & Skógafoss South Coast Waterfalls'
    ],
    fallbackImage: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80',
    tags: ['Waterfalls', 'Geothermal', 'Northern Lights', 'Volcanoes', 'Iceland']
  },
  {
    id: 'tokyo-japan',
    name: 'Tokyo',
    country: 'Japan',
    region: 'Asia',
    exactLocation: 'Kanto Region, Honshu Island, Tokyo Bay, Japan',
    category: 'Urban Wonders',
    wikiSlug: 'Tokyo',
    lat: 35.6762,
    lon: 139.6503,
    budgetPerDay: 160,
    rating: 4.9,
    bestTimeToVisit: 'March – May & September – November',
    suggestedDuration: '5–7 Days',
    highlights: ['Shinjuku & Shibuya Crossing', 'Senso-ji Temple', 'teamLab Planets', 'Meiji Jingu Shrine'],
    touristPlaces: [
      'Shibuya Crossing (World’s Busiest Pedestrian Scramble & Hachiko Statue)',
      'Senso-ji Temple in Asakusa (Tokyo’s Oldest Buddhist Temple founded in 645 AD)',
      'teamLab Planets (Immersive Digital Art Museum with Water & Flower Installations)',
      'Meiji Jingu (Sacred Shinto Forest Shrine in Shibuya)',
      'Tokyo Skytree (634m Tower with Panoramic Observation Decks)',
      'Akihabara Electric Town & Tsukiji Outer Seafood Market'
    ],
    fallbackImage: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
    tags: ['Metropolis', 'Gastronomy', 'Tech', 'Tradition', 'Japan']
  }
];

// ── PRE-DEFINED ITINERARY PRESETS ─────────────────────────────────

// 1. Incredible India Grand Tour (8 Destinations across India)
export const INCREDIBLE_INDIA_PRESET = [
  {
    id: 'agra-taj-mahal-india',
    name: 'Agra & Taj Mahal',
    country: 'India',
    region: 'Asia',
    exactLocation: 'Yamuna River Basin, Agra District, Uttar Pradesh, Northern India',
    category: 'Cultural Heritage',
    wikiSlug: 'Agra',
    lat: 27.1767,
    lon: 78.0081,
    budgetPerDay: 60,
    rating: 5.0,
    plannedDays: 2,
    visitDate: '2026-11-10',
    notes: 'Witness dawn sunrise over the marble dome of the Taj Mahal. Tour Agra Fort and enjoy sunset from Mehtab Bagh across the Yamuna River.',
    highlights: ['Taj Mahal Sunrise & White Marble Marvel', 'Agra Fort Red Sandstone Citadel', 'Fatehpur Sikri Abandoned Imperial City', 'Mehtab Bagh Moonlight Gardens'],
    touristPlaces: [
      'Taj Mahal (UNESCO World Heritage Site & 7th Wonder of the World)',
      'Agra Fort (16th-century Mughal Red Sandstone Citadel)',
      'Fatehpur Sikri (Emperor Akbar’s Preserved Royal Capital & Buland Darwaza)',
      'Mehtab Bagh (Moonlight Garden with Unobstructed River View of the Taj)'
    ],
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'jaipur-india',
    name: 'Jaipur (Pink City)',
    country: 'India',
    region: 'Asia',
    exactLocation: 'Aravalli Hills Corridor, Jaipur District, Rajasthan, Northwestern India',
    category: 'Cultural Heritage',
    wikiSlug: 'Jaipur',
    lat: 26.9124,
    lon: 75.7873,
    budgetPerDay: 65,
    rating: 4.9,
    plannedDays: 3,
    visitDate: '2026-11-13',
    notes: 'Explore Amber Fort Sheesh Mahal (mirror palace), photograph Hawa Mahal at golden hour, and sample Dal Baati Churma at Chokhi Dhani.',
    highlights: ['Amber Fort & Sheesh Mahal Palace', 'Hawa Mahal Palace of Winds', 'City Palace Royal Courtyards', 'Jantar Mantar UNESCO Observatory'],
    touristPlaces: [
      'Amber Fort & Palace (Hilltop Citadel featuring Sheesh Mahal Mirror Hall)',
      'Hawa Mahal (5-Story Pink Honeycomb Facade with 953 Jharokha Windows)',
      'City Palace (Chandra Mahal & Maharaja Sawai Man Singh II Museum)',
      'Jantar Mantar (World’s Largest Stone Astronomical Sundial UNESCO)'
    ],
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'udaipur-india',
    name: 'Udaipur (City of Lakes)',
    country: 'India',
    region: 'Asia',
    exactLocation: 'Mewar Kingdom, Aravalli Mountain Range, Rajasthan, Western India',
    category: 'Cultural Heritage',
    wikiSlug: 'Udaipur',
    lat: 24.5854,
    lon: 73.7125,
    budgetPerDay: 65,
    rating: 4.9,
    plannedDays: 3,
    visitDate: '2026-11-16',
    notes: 'Cruise Lake Pichola by wooden royal boat, wander the balconies of City Palace, and watch the folk dancers at Bagore Ki Haveli.',
    highlights: ['City Palace Lakeside Royal Complex', 'Lake Pichola & Jag Mandir Island Palace Boat Cruise', 'Saheliyon-ki-Bari Royal Fountains Garden', 'Monsoon Palace Clifftop Sunset'],
    touristPlaces: [
      'City Palace of Udaipur (Rajasthan’s Largest Royal Palace Complex on Lake Pichola)',
      'Lake Pichola Sunset Boat Cruise to Jag Mandir Island Palace',
      'Taj Lake Palace (Floating 18th-century White Marble Island Marvel)',
      'Saheliyon-ki-Bari (Courtyard of the Maidens with Marble Elephants & Fountains)'
    ],
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'varanasi-india',
    name: 'Varanasi (Kashi)',
    country: 'India',
    region: 'Asia',
    exactLocation: 'Crescent Bank of Holy River Ganges, Varanasi District, Uttar Pradesh, Northern India',
    category: 'Cultural Heritage',
    wikiSlug: 'Varanasi',
    lat: 25.3176,
    lon: 82.9739,
    budgetPerDay: 50,
    rating: 4.8,
    plannedDays: 3,
    visitDate: '2026-11-19',
    notes: 'Evening Ganga Aarti ceremony from a wooden boat at Dashashwamedh Ghat. Morning spiritual stroll through ancient galis and Sarnath pilgrimage.',
    highlights: ['Dashashwamedh Ghat Evening Ganga Aarti', 'Kashi Vishwanath Corridor', 'Dawn Ganges Boat Ride', 'Sarnath Deer Park Stupa'],
    touristPlaces: [
      'Dashashwamedh Ghat (World-Renowned Sunset Maha Ganga Aarti Ceremony)',
      'Kashi Vishwanath Jyotirlinga Temple & Golden Spire Corridor',
      'Assi Ghat & Manikarnika Ghat (Ancient Riverside Steps & Rituals)',
      'Sarnath (Site of Gautama Buddha’s First Sermon & Dhamek Stupa)'
    ],
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'delhi-india',
    name: 'New Delhi & Old Delhi',
    country: 'India',
    region: 'Asia',
    exactLocation: 'National Capital Territory of Delhi, Yamuna River Valley, Northern India',
    category: 'Cultural Heritage',
    wikiSlug: 'Delhi',
    lat: 28.6139,
    lon: 77.2090,
    budgetPerDay: 55,
    rating: 4.8,
    plannedDays: 2,
    visitDate: '2026-11-22',
    notes: 'Visit the soaring Qutub Minar, take a cycle rickshaw through bustling Chandni Chowk, and tour Humayun’s Tomb gardens.',
    highlights: ['Qutub Minar 73-meter UNESCO Minaret', "Humayun's Tomb Mughal Garden Monument", 'Red Fort & Chandni Chowk Food Odyssey', 'India Gate & Kartavya Path Memorial'],
    touristPlaces: [
      'Qutub Minar Complex (73-meter Victory Tower & 4th-Century Rustless Iron Pillar)',
      "Humayun's Tomb (UNESCO Red Sandstone Prototype for the Taj Mahal)",
      'Red Fort (Lal Qila - 17th-Century Imperial Seat of the Mughal Empire)',
      'Chandni Chowk & Paranthe Wali Gali (Historic Rickshaw Bazaar & Street Gastronomy)'
    ],
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'ladakh-india',
    name: 'Ladakh & Pangong Tso',
    country: 'India',
    region: 'Asia',
    exactLocation: 'Trans-Himalayan Tibetan Plateau, Leh District, Ladakh Union Territory, Northern India',
    category: 'Nature & Adventure',
    wikiSlug: 'Ladakh',
    lat: 34.1526,
    lon: 77.5771,
    budgetPerDay: 85,
    rating: 4.9,
    plannedDays: 4,
    visitDate: '2026-11-25',
    notes: 'Cross Khardung La Pass into Nubra Valley, camp beside the color-changing blue waters of Pangong Tso, and attend morning chants at Thiksey Monastery.',
    highlights: ['Pangong Tso Alpine Lake', 'Nubra Valley Sand Dunes & Bactrian Camels', 'Khardung La Pass (5,359m)', 'Thiksey Buddhist Monastery'],
    touristPlaces: [
      'Pangong Tso (134km Long High-Altitude Lake Shifting from Turquoise to Deep Blue)',
      'Nubra Valley & Hunder Cold Sand Dunes (Double-Humped Bactrian Camels)',
      'Khardung La Pass (World’s Highest Motor-Accessible Mountain Pass at 5,359m)',
      'Thiksey Monastery (12-Story Complex modeled after Lhasa Potala Palace)'
    ],
    image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'kerala-backwaters-india',
    name: 'Kerala Backwaters & Alleppey',
    country: 'India',
    region: 'Asia',
    exactLocation: 'Vembanad Estuary, Alappuzha & Kottayam Districts, Kerala, Southern India',
    category: 'Island & Coastal',
    wikiSlug: 'Alappuzha',
    lat: 9.4981,
    lon: 76.3388,
    budgetPerDay: 75,
    rating: 4.9,
    plannedDays: 3,
    visitDate: '2026-11-30',
    notes: 'Overnight private kettuvallam luxury houseboat cruise through Vembanad Lake canals. Traditional Ayurvedic rejuvenation and coconut seafood feast.',
    highlights: ['Kettuvallam Houseboat Cruise', 'Vembanad Lake Serenity', 'Ayurvedic Wellness Retreats', 'Marari Beach Relaxation'],
    touristPlaces: [
      'Vembanad Lake (India’s Longest Lake & Houseboat Canal Network)',
      'Alappuzha Lighthouse & Historic Pier Beach',
      'Kumarakom Bird Sanctuary (Herons, Egrets & Kingfishers)',
      'Marari Serene White Sand Fishing Beach'
    ],
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'goa-india',
    name: 'Goa (Beaches & Heritage)',
    country: 'India',
    region: 'Asia',
    exactLocation: 'Konkan Coastal Belt, Arabian Sea, Western India',
    category: 'Island & Coastal',
    wikiSlug: 'Goa',
    lat: 15.2993,
    lon: 74.1240,
    budgetPerDay: 65,
    rating: 4.9,
    plannedDays: 3,
    visitDate: '2026-12-04',
    notes: 'Unwind at Palolem Beach, tour the Baroque UNESCO churches of Old Goa, trek to Dudhsagar Waterfalls, and enjoy coastal fish curry.',
    highlights: ['Basilica of Bom Jesus & Old Goa UNESCO Churches', 'Palolem & Agonda Crescent Beaches', 'Dudhsagar Four-Tiered Waterfalls', 'Fort Aguada 17th-Century Portuguese Citadel'],
    touristPlaces: [
      'Basilica of Bom Jesus (UNESCO Site housing mortal remains of St. Francis Xavier)',
      'Palolem Beach & Butterfly Beach (Dolphin Watching & Kayaking)',
      'Dudhsagar Waterfalls (310-Meter Cascading White Mist Waterfall in Bhagwan Mahaveer Sanctuary)',
      'Fort Aguada & Lighthouse (Portuguese Clifftop Defense overlooking the Arabian Sea)'
    ],
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80'
  }
];

// 2. Enchanted Malaysia Voyage (4 Top Destinations across Malaysia)
export const MALAYSIA_WONDERS_PRESET = [
  {
    id: 'kuala-lumpur-malaysia',
    name: 'Kuala Lumpur',
    country: 'Malaysia',
    region: 'Asia',
    exactLocation: 'Kuala Lumpur Federal Territory, Klang Valley, Peninsular Malaysia',
    category: 'Urban Wonders',
    wikiSlug: 'Kuala_Lumpur',
    lat: 3.1390,
    lon: 101.6869,
    budgetPerDay: 75,
    rating: 4.9,
    plannedDays: 3,
    visitDate: '2026-12-10',
    notes: 'Ascend the Petronas Twin Towers skybridge, climb the 272 rainbow steps at Batu Caves, and feast on sizzling satay along Jalan Alor.',
    highlights: ['Petronas Twin Towers & Skybridge', 'Batu Caves Rainbow Steps & Lord Murugan Statue', 'Merdeka 118 & KL Tower', 'Jalan Alor & Bukit Bintang Street Food'],
    touristPlaces: [
      'Petronas Twin Towers (452m Skybridge & Observation Deck)',
      'Batu Caves (272-Step Rainbow Staircase & Limestone Caverns)',
      'Merdeka 118 (World’s 2nd Tallest Skyscraper)',
      'Jalan Alor Famous Hawker Street & Night Food Stalls'
    ],
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'penang-malaysia',
    name: 'Penang & George Town',
    country: 'Malaysia',
    region: 'Asia',
    exactLocation: 'Penang Island & Seberang Perai, Strait of Malacca, Northwest Malaysia',
    category: 'Cultural Heritage',
    wikiSlug: 'George_Town,_Penang',
    lat: 5.4164,
    lon: 100.3327,
    budgetPerDay: 60,
    rating: 4.8,
    plannedDays: 3,
    visitDate: '2026-12-14',
    notes: 'Discover whimsical street art murals on Armenian Street, take the funicular up Penang Hill, and tour Kek Lok Si Temple.',
    highlights: ['George Town UNESCO Street Art & Shophouses', 'Kek Lok Si Temple (Pagoda of 10,000 Buddhas)', 'Penang Hill Funicular Railway & The Habitat', 'Clan Jetties Waterfront Settlement'],
    touristPlaces: [
      'George Town UNESCO Heritage District & Ernest Zacharevic Murals',
      'Kek Lok Si Mountain Temple Complex & Bronze Guanyin Statue',
      'Penang Hill Funicular Train to Panoramic Summit',
      'Chew Jetty & Traditional Clan Waterfront Stilt Houses'
    ],
    image: 'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=1200&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'langkawi-malaysia',
    name: 'Langkawi UNESCO Geopark',
    country: 'Malaysia',
    region: 'Asia',
    exactLocation: 'Langkawi 99-Island Archipelago, Andaman Sea, Kedah, Northwest Malaysia',
    category: 'Island & Coastal',
    wikiSlug: 'Langkawi',
    lat: 6.3500,
    lon: 99.8000,
    budgetPerDay: 90,
    rating: 4.9,
    plannedDays: 4,
    visitDate: '2026-12-18',
    notes: 'Walk across the breathtaking Langkawi Sky Bridge, cruise through Kilim Karst mangrove caves, and watch the sun set at Pantai Cenang.',
    highlights: ['Langkawi Sky Bridge & SkyCab Cable Car', 'Kilim Karst Geoforest Park & Mangrove Cruise', 'Tanjung Rhu Pristine Beach', 'Telaga Tujuh Seven Wells Waterfalls'],
    touristPlaces: [
      'Langkawi Sky Bridge (Curved 125m Cable-Stayed Bridge suspended 660m above sea level)',
      'Kilim Karst Geoforest Mangrove Safari & Eagle Feeding Sanctuary',
      'Pantai Cenang White Sand Coastline & Water Sports',
      'Dataran Lang (Eagle Square 12-meter Reddish-Brown Eagle Monument)'
    ],
    image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1200&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'melaka-malaysia',
    name: 'Melaka (Malacca Historic City)',
    country: 'Malaysia',
    region: 'Asia',
    exactLocation: 'Malacca Strait Coastline, Melaka State, Southern Peninsular Malaysia',
    category: 'Cultural Heritage',
    wikiSlug: 'Malacca',
    lat: 2.1896,
    lon: 102.2501,
    budgetPerDay: 55,
    rating: 4.8,
    plannedDays: 2,
    visitDate: '2026-12-23',
    notes: 'Walk through Dutch Red Square and Christ Church, explore A Famosa Portuguese gate, and enjoy Jonker Street night street delicacies.',
    highlights: ['A Famosa 16th-Century Portuguese Fortress', 'Dutch Stadthuys & Red Square', 'Jonker Street Bazaars & Night Market', 'Melaka River Scenic Night Cruise'],
    touristPlaces: [
      'Dutch Red Square & Christ Church (Erected in 1753)',
      'A Famosa (Porta de Santiago Portuguese Fortress Gate)',
      'Jonker Street Night Market & Peranakan Heritage Shophouses',
      'Melaka River Walkway & Illuminated Evening River Cruise'
    ],
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80'
  }
];

// 3. Grand Asia Odyssey (Combines Top India & Malaysia Highlights)
export const GRAND_ASIA_PRESET = [
  ...INCREDIBLE_INDIA_PRESET.slice(0, 4),
  ...MALAYSIA_WONDERS_PRESET
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
      temp: 24,
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
          exactLocation: `Coordinates: [${lat.toFixed(2)}, ${lon.toFixed(2)}]`,
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
          touristPlaces: ['City Center & Historic District', 'Regional Cultural Museum', 'Scenic Observation Vista'],
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
