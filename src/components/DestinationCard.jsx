import React from 'react';
import { 
  MapPin, 
  Bookmark, 
  BookmarkCheck, 
  Sun, 
  CloudSun, 
  Cloud, 
  CloudRain, 
  Snowflake, 
  CloudLightning,
  Star,
  ArrowRight,
  Info
} from 'lucide-react';

// Dynamic weather icon renderer
function WeatherBadge({ weather }) {
  if (!weather) return null;

  const renderIcon = () => {
    switch (weather.iconName) {
      case 'Sun': return <Sun className="w-3.5 h-3.5 text-amber-300 animate-spin-slow" />;
      case 'CloudSun': return <CloudSun className="w-3.5 h-3.5 text-amber-200" />;
      case 'Cloud': return <Cloud className="w-3.5 h-3.5 text-slate-200" />;
      case 'CloudRain':
      case 'CloudRainWind':
      case 'CloudDrizzle': return <CloudRain className="w-3.5 h-3.5 text-sky-200" />;
      case 'Snowflake': return <Snowflake className="w-3.5 h-3.5 text-sky-100" />;
      case 'CloudLightning': return <CloudLightning className="w-3.5 h-3.5 text-amber-400" />;
      default: return <Sun className="w-3.5 h-3.5 text-amber-300" />;
    }
  };

  return (
    <div 
      title={`Live Weather via ${weather.source}: ${weather.condition}, ${weather.temp}°C`}
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-navy-950/75 backdrop-blur-md border border-white/15 text-white text-[11px] font-medium tracking-tight shadow-sm"
    >
      {renderIcon()}
      <span>{weather.temp}°C</span>
      <span className="hidden sm:inline opacity-80">&bull; {weather.condition}</span>
    </div>
  );
}

export default function DestinationCard({ 
  destination, 
  isSaved, 
  onToggleSave, 
  onSelect 
}) {
  return (
    <div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-ivory-200 hover:border-gold-400/60 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 transform hover:-translate-y-1">
      
      {/* Visual Header / Cover Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-navy-900 cursor-pointer" onClick={() => onSelect(destination)}>
        <img
          src={destination.image}
          alt={destination.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          onError={(e) => {
            // Fallback image in case external Wikimedia link had transient issue
            e.target.src = destination.fallbackImage || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80';
          }}
        />
        
        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
          {/* Category Tag */}
          <span className="pointer-events-auto px-2.5 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider bg-gold-500/90 text-navy-950 shadow-sm">
            {destination.category}
          </span>

          {/* Live Weather Pill */}
          <div className="pointer-events-auto">
            <WeatherBadge weather={destination.weather} />
          </div>
        </div>

        {/* Location & Title in Image Bottom */}
        <div className="absolute bottom-3 left-4 right-4 pointer-events-none">
          <div className="flex items-center gap-1.5 text-gold-300 text-xs font-semibold uppercase tracking-wider mb-0.5">
            <MapPin className="w-3.5 h-3.5" />
            <span>{destination.country} &bull; {destination.region}</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
            {destination.name}
          </h3>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex-1 p-5 flex flex-col justify-between">
        <div>
          {/* Exact Location Sub-label */}
          {destination.exactLocation && (
            <div className="flex items-center gap-1.5 text-[11px] text-navy-600 font-medium mb-2">
              <MapPin className="w-3 h-3 text-gold-600 flex-shrink-0" />
              <span className="truncate" title={destination.exactLocation}>{destination.exactLocation}</span>
            </div>
          )}

          {/* Subtitle / Description Excerpt */}
          <p className="text-xs sm:text-sm text-navy-800/80 line-clamp-2 leading-relaxed mb-3">
            {destination.description || destination.subtitle}
          </p>

          {/* Key Tourist Attractions / Highlights */}
          {destination.touristPlaces && destination.touristPlaces.length > 0 ? (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {destination.touristPlaces.slice(0, 2).map((place, idx) => (
                <span 
                  key={idx} 
                  className="px-2 py-0.5 rounded-md bg-gold-500/10 text-gold-950 text-[11px] font-medium border border-gold-500/20 truncate max-w-[240px]"
                  title={typeof place === 'string' ? place : place.name}
                >
                  📍 {typeof place === 'string' ? place.split('(')[0].trim() : place.name}
                </span>
              ))}
            </div>
          ) : destination.highlights && destination.highlights.length > 0 ? (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {destination.highlights.slice(0, 3).map((item, idx) => (
                <span 
                  key={idx} 
                  className="px-2 py-0.5 rounded-md bg-ivory-100 text-navy-800 text-[11px] font-medium border border-ivory-200"
                >
                  {item}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        {/* Card Footer: Budget + Action Buttons */}
        <div className="pt-4 border-t border-ivory-200 flex items-center justify-between gap-2">
          
          {/* Budget & Rating */}
          <div>
            <div className="flex items-center gap-1 text-gold-600 font-bold text-sm">
              <Star className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
              <span>{destination.rating || 4.8}</span>
            </div>
            <p className="text-[11px] text-navy-700/60 font-medium">
              est. <strong className="text-navy-900">${destination.budgetPerDay}</strong> / day
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2">
            
            {/* View Details Button */}
            <button
              onClick={() => onSelect(destination)}
              className="px-3.5 py-1.5 rounded-xl border border-navy-900/15 hover:border-gold-500 text-navy-900 text-xs font-semibold tracking-wide hover:bg-gold-500/10 transition flex items-center gap-1.5"
            >
              <span>Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Save to Itinerary Toggle */}
            <button
              onClick={() => onToggleSave(destination)}
              title={isSaved ? "Remove from Itinerary" : "Add to My Trip"}
              className={`p-2 rounded-xl transition-all ${
                isSaved 
                  ? 'bg-gold-500 text-navy-950 shadow-sm hover:bg-gold-600' 
                  : 'bg-ivory-100 text-navy-700 hover:bg-gold-500/20 hover:text-gold-700'
              }`}
            >
              {isSaved ? (
                <BookmarkCheck className="w-4 h-4 fill-current" />
              ) : (
                <Bookmark className="w-4 h-4" />
              )}
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}
