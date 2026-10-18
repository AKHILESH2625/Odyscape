import React from 'react';
import { AlertTriangle, RefreshCw, WifiOff } from 'lucide-react';

export default function ErrorBanner({ message, onRetry }) {
  return (
    <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-amber-50/90 border border-amber-300 text-amber-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm animate-fade-in">
      <div className="flex items-start sm:items-center gap-3">
        <div className="p-2 rounded-xl bg-amber-200/80 text-amber-800 flex-shrink-0">
          <AlertTriangle className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900">
            External API Connection Notice
          </h4>
          <p className="text-xs sm:text-sm text-amber-800/90 mt-0.5">
            {message || 'Unable to fetch real-time updates from remote endpoints. Displaying verified local cache.'}
          </p>
        </div>
      </div>

      {onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-2 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs font-semibold tracking-wide transition flex items-center gap-1.5 shadow-sm self-end sm:self-auto flex-shrink-0"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Retry Live Sync</span>
        </button>
      )}
    </div>
  );
}
