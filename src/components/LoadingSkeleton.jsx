import React from 'react';

export default function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {[1, 2, 3, 4, 5, 6].map((idx) => (
        <div 
          key={idx} 
          className="bg-white rounded-2xl overflow-hidden border border-ivory-200 shadow-luxury animate-pulse"
        >
          {/* Cover image skeleton */}
          <div className="aspect-[16/10] bg-ivory-200/80 relative">
            <div className="absolute top-3 left-3 w-20 h-5 rounded-full bg-ivory-300" />
            <div className="absolute top-3 right-3 w-16 h-5 rounded-full bg-ivory-300" />
          </div>

          {/* Body skeleton */}
          <div className="p-5 space-y-4">
            <div className="space-y-2">
              <div className="w-1/3 h-3 rounded bg-ivory-200" />
              <div className="w-2/3 h-6 rounded bg-ivory-300" />
            </div>

            <div className="space-y-1.5 pt-1">
              <div className="w-full h-3 rounded bg-ivory-200" />
              <div className="w-4/5 h-3 rounded bg-ivory-200" />
            </div>

            {/* Highlights pills skeleton */}
            <div className="flex gap-2 pt-2">
              <div className="w-16 h-4 rounded bg-ivory-200" />
              <div className="w-20 h-4 rounded bg-ivory-200" />
            </div>

            {/* Footer skeleton */}
            <div className="pt-4 border-t border-ivory-200 flex items-center justify-between">
              <div className="w-20 h-4 rounded bg-ivory-200" />
              <div className="flex gap-2">
                <div className="w-16 h-7 rounded-xl bg-ivory-200" />
                <div className="w-8 h-7 rounded-xl bg-ivory-200" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
