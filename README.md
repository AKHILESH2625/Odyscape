# Odyscape — Discover More. Wander Further.

> **TripWise — Web Development Recruitment Task**  
> **AWS Student Builder Group, VIT Chennai**  
> **Selected Track:** Track 1: Frontend Development  
> **Candidate:** S Akhilesh  
> **Registration Number:** `25BCE5345`  
> **Repository:** [https://github.com/AKHILESH2625/Odyscape](https://github.com/AKHILESH2625/Odyscape)  
> **Live GitHub Pages URL:** [https://akhilesh2625.github.io/Odyscape/](https://akhilesh2625.github.io/Odyscape/)

---

## 🧭 Executive Overview

**Odyscape** is a luxury, modern travel-planning web application designed to eliminate fragmented trip research. Instead of scouring multiple travel blogs, encyclopedias, and weather forecasts across different tabs, Odyscape unifies:
1. **Authentic place discovery** powered by the **Wikipedia REST API** and high-resolution Wikimedia photography.
2. **Real-time live meteorology** powered by the **Open-Meteo API**, giving travelers immediate atmospheric temperature, weather conditions, and wind speed.
3. **Deep worldwide search**, allowing users to explore curated world wonders or discover any destination on Earth dynamically.
4. **A persistent personal itinerary planner ("My Trip")** with date scheduling, stay duration adjustments, custom notes, estimated budget calculations, JSON export, and browser-native PDF printing.

Designed with an editorial luxury aesthetic combining deep midnight navy (`#0A1128`), warm ivory (`#FDFBF7`), and muted champagne gold (`#C5A880`), Odyscape delivers an elevated, distraction-free travel planning experience across desktop and mobile devices.

---

## 🛠️ Technology Stack

Chosen for speed, reliability, beginner-friendly maintainability, and zero backend overhead:

| Layer | Technology | Rationale |
|---|---|---|
| **Framework** | **React 18** (Functional Components + Hooks) | Industry standard component architecture with clean state management. |
| **Bundler & Dev Server** | **Vite 5** | Lightning-fast Hot Module Replacement (HMR) and optimized static production builds. |
| **Styling & Design System** | **Tailwind CSS 3** | Responsive utility classes with a custom luxury travel theme (Navy, Ivory, Champagne Gold). |
| **Typography** | **Playfair Display & Plus Jakarta Sans** | Editorial serif headings paired with clean, accessible sans-serif body typography. |
| **Icons** | **Lucide React** | Lightweight, tree-shakeable SVG icons for navigation, weather, and actions. |
| **Persistence** | **HTML5 Web Storage (`localStorage`)** | Zero-latency, client-side data persistence that survives page reloads and browser restarts. |
| **Deployment** | **Vercel / Netlify / GitHub Pages** | Pre-configured `vercel.json` and `netlify.toml` for 1-click continuous deployment. |

---

## 🌐 Real External APIs Integrated

In strict adherence to the recruitment brief, Odyscape connects to real, live public APIs without mock tricks:

### 1. Open-Meteo Meteorological API
- **Endpoint:** `https://api.open-meteo.com/v1/forecast`
- **Parameters:** `latitude`, `longitude`, `current_weather=true`, `daily=temperature_2m_max,temperature_2m_min`
- **What it delivers:** Real-time live temperature in °C, WMO weather interpretation codes (mapped to animated icons for Sunny, Cloudy, Rain, Snow, etc.), wind speeds, and daily temperature ranges for exact geographic coordinates.
- **Why it was chosen:** Recommended in the task brief; 100% free for open use, zero CORS restrictions, and high reliability with zero API-key hurdles for browser clients.

### 2. Wikipedia REST API & Wikimedia Media
- **Endpoint:** `https://en.wikipedia.org/api/rest_v1/page/summary/{title}`
- **What it delivers:** Encyclopedic travel summaries, subtitles, GPS coordinates, high-resolution original photography, and direct article reference URLs.
- **Why it was chosen:** Provides authentic, peer-reviewed global destination knowledge and media directly to the client interface.

### 3. Wikimedia Live Search API
- **Endpoint:** `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch={query}&format=json&origin=*`
- **What it delivers:** Allows travelers to deep-search any city, landmark, or region across the entire globe, dynamically fetching live Wikipedia abstracts and real-time Open-Meteo weather on the fly.

---

## ✨ Features & Track 1 Deliverables

### 1. Destination Exploration
- Visual card grid displaying destination name, country, region, category badge, and live weather pill.
- Real-time weather condition icon and temperature fetched for each location.
- Interactive cards featuring smooth zoom hover effects, daily budget estimates, and user ratings.

### 2. Search, Filtering, and Sorting
- **Instant Search:** Instant client-side filtering across destination names, countries, categories, descriptions, and tags.
- **Deep Search:** Search any world city dynamically via the Wikipedia Live API.
- **Category Filters:** Filter by *Cultural Heritage*, *Island & Coastal*, *Nature & Adventure*, and *Urban Wonders*.
- **Region Filters:** Filter by continent (*Europe*, *Asia*, *Americas*, *Africa*, *Oceania*).
- **Sorting Options:** Sort by *Featured / Curated*, *Name (A → Z)*, *Name (Z → A)*, *Budget (Low to High)*, *Budget (High to Low)*, and *Rating (Highest First)*.
- **Quick Reset:** One-click reset button for active filters.

### 3. Destination Details Modal
- Fullscreen modal with smooth backdrop blur and Escape-key listener.
- High-resolution hero imagery with Wikipedia verification badge.
- Real-time weather panel displaying temperature, condition, wind speed, and daily range.
- Comprehensive encyclopedic overview and direct Wikipedia link.
- Travel intelligence specs: *Best Season to Visit*, *Recommended Stay Duration*, and *Daily Budget Estimate*.
- Signature experiences & landmark highlights.
- Embedded personalization form to set planned visit dates, duration in days, and travel notes before saving.

### 4. Itinerary Management ("My Trip")
- Dedicated Itinerary planner accessible via the top navigation bar with a live item counter badge.
- **Trip Intelligence Metrics:**
  - Total Destinations Scheduled
  - Total Stay Duration (in days)
  - Estimated Total Voyage Budget (auto-calculated from daily budgets and stay lengths)
  - Unique Countries Covered
- **Customizable Itinerary Items:**
  - Date selector for each destination.
  - Duration adjustment steppers (`+` and `-` days).
  - Editable travel notes field with auto-save toast confirmation.
  - Quick remove button (`Trash2`) to unsave destinations.
- **Data Export & Print:**
  - **Export JSON:** One-click download of the complete itinerary structure (`odyscape-itinerary.json`).
  - **Print / PDF:** Native browser print layout optimized with `@media print` rules to hide UI chrome and format a clean physical itinerary document.
  - **Clear Trip:** Safe bulk-clear with confirmation dialog.

### 5. Data Persistence (`localStorage`)
- Stored under key: `odyscape_itinerary_v1`.
- Fully persistent across browser restarts, page refreshes, and tab sessions.
- Listens to native `storage` events for synchronized updates across multiple open browser tabs.

### 6. Loading, Error, and Empty States
- **Loading State:** Shimmer skeleton card layout while live data is retrieved from external APIs.
- **Empty Search State:** User-friendly feedback with the searched term, a reset button, and deep Wikipedia search trigger.
- **Empty Itinerary State:** Inspiring empty view with a direct call-to-action to begin exploring destinations.
- **Error Handling:** Graceful error banner with retry button in case of network disruptions; automatic fallback to verified local cache so the app remains fully functional offline.

### 7. Responsive & Accessible Design
- Fully responsive across Mobile (375px+), Tablet (768px), and Desktop (1024px+) viewports.
- Mobile drawer navigation with hamburger toggle and badge counts.
- Semantic HTML tags (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<button>`).
- Keyboard accessible with `/` shortcut for search focus and `Escape` for modal dismissal.

---

## 📂 Project Architecture

```
odyscape/
├── index.html                   # HTML entrypoint with Google Fonts & meta tags
├── package.json                 # Project dependencies & scripts
├── vite.config.js               # Vite configuration with React plugin
├── tailwind.config.js           # Custom theme colors (Navy, Ivory, Gold) & fonts
├── postcss.config.js            # PostCSS Autoprefixer configuration
├── vercel.json                  # Vercel deployment configuration
├── netlify.toml                 # Netlify deployment configuration
├── public/                      # Static assets
└── src/
    ├── main.jsx                 # Application DOM mount
    ├── App.jsx                  # Master root component & state orchestrator
    ├── index.css                # Tailwind directives, keyframe animations, & print rules
    ├── services/
    │   ├── travelApi.js         # Real Wikipedia REST & Open-Meteo APIs client
    │   └── storage.js           # LocalStorage CRUD & trip calculation helpers
    └── components/
        ├── Navbar.jsx           # Responsive header with brand & trip counter badge
        ├── Hero.jsx             # Editorial hero banner with key feature pillars
        ├── Explore.jsx          # Destination catalog, search, filter, and card grid
        ├── SearchBar.jsx        # Search input with keyboard shortcut & quick pills
        ├── FilterBar.jsx        # Category, region, and sorting selectors
        ├── DestinationCard.jsx  # Destination card with real-time weather badge
        ├── DestinationModal.jsx # Detailed modal with live weather & planning form
        ├── MyTrip.jsx           # Itinerary dashboard with metrics, export, & print
        ├── EmptyState.jsx       # Zero-results feedback with recovery actions
        ├── LoadingSkeleton.jsx  # Shimmer skeleton loader
        ├── ErrorBanner.jsx      # Graceful network error alert with retry
        ├── AboutModal.jsx       # Project architecture & recruitment task modal
        └── Footer.jsx           # Editorial footer with API attributions
```

---

## 🚀 Local Setup & Installation

Follow these steps to run Odyscape on your local machine:

### Prerequisites
- **Node.js** (v18.0.0 or later recommended; tested on v24.18.1)
- **npm** (v9.0.0 or later)

### Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com/AKHILESH2625/Odyscape.git
   cd Odyscape
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:3000/`.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview the production build:**
   ```bash
   npm run preview
   ```
   Open `http://localhost:3000/` or `http://localhost:4173/`.

---

## 🔒 Security & Environment Configuration

- **Zero Credentials Committed:** Odyscape uses public, rate-friendly REST endpoints (Open-Meteo and Wikipedia REST API) that do not require private API keys, eliminating the risk of secret leakage in public repositories.
- If private API extensions (e.g. Geoapify or Unsplash developer keys) are desired in future expansions, they can be defined in a `.env.local` file via `VITE_GEOAPIFY_KEY` and are automatically ignored by `.gitignore`.

---

## 🌐 Live Deployments (Option A & Option B)

- **Option A (GitHub Pages):** [https://akhilesh2625.github.io/Odyscape/](https://akhilesh2625.github.io/Odyscape/)  
  Automated via `.github/workflows/deploy.yml` on every push to `main`.
- **Option B (Vercel):** One-click continuous deployment configured via `vercel.json`. Import `AKHILESH2625/Odyscape` on [Vercel](https://vercel.com/new).

---

## 📄 Submission Artifacts

- **Source Code Repository:** Public GitHub repository at [https://github.com/AKHILESH2625/Odyscape](https://github.com/AKHILESH2625/Odyscape)
- **Live Deployment URL:** [https://akhilesh2625.github.io/Odyscape/](https://akhilesh2625.github.io/Odyscape/)
- **Submission Screenshot PDF:** `25BCE5345_frontend.pdf` (compliant with `<register no>_<Track>` specification)

---

*Crafted with precision for the AWS Student Builder Group Recruitment Task (TripWise) &bull; VIT Chennai &bull; October 2026*
