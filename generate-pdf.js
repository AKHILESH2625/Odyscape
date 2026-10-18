import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const SHOTS_DIR = path.resolve('./screenshots');

function getBase64Image(filename) {
  const filePath = path.join(SHOTS_DIR, filename);
  if (!fs.existsSync(filePath)) return '';
  const bitmap = fs.readFileSync(filePath);
  return `data:image/png;base64,${bitmap.toString('base64')}`;
}

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Odyscape Submission - 25BCE5345_frontend</title>
  <style>
    @page {
      size: A4;
      margin: 15mm;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #0a1128;
      background: #ffffff;
      margin: 0;
      padding: 0;
      line-height: 1.4;
    }
    .page-break {
      page-break-after: always;
    }
    .header-box {
      border: 2px solid #c5a880;
      background: #0a1128;
      color: #fdfbf7;
      padding: 24px;
      border-radius: 12px;
      margin-bottom: 20px;
    }
    .tagline {
      color: #e5c378;
      font-size: 13px;
      letter-spacing: 2px;
      text-transform: uppercase;
      font-weight: 600;
      margin-top: 4px;
    }
    .title {
      font-size: 28px;
      font-weight: 800;
      margin: 8px 0;
      letter-spacing: -0.5px;
    }
    .meta-grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 12px;
      margin-top: 16px;
      padding-top: 14px;
      border-top: 1px solid rgba(197, 168, 128, 0.3);
      font-size: 11px;
    }
    .meta-item strong {
      display: block;
      color: #e5c378;
      text-transform: uppercase;
      font-size: 9px;
      letter-spacing: 1px;
      margin-bottom: 2px;
    }
    .section-title {
      font-size: 16px;
      font-weight: 700;
      color: #0a1128;
      border-bottom: 2px solid #c5a880;
      padding-bottom: 6px;
      margin: 20px 0 10px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .section-desc {
      font-size: 11px;
      color: #4a5568;
      margin-bottom: 12px;
    }
    .img-container {
      width: 100%;
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid #e2e8f0;
      box-shadow: 0 4px 12px rgba(0,0,0,0.06);
      margin-bottom: 15px;
      background: #f8fafc;
    }
    .img-container img {
      width: 100%;
      display: block;
      height: auto;
    }
    .badge {
      display: inline-block;
      padding: 3px 8px;
      border-radius: 4px;
      font-size: 10px;
      font-weight: 600;
      background: #f0ede6;
      color: #0a1128;
      border: 1px solid #c5a880;
    }
    .two-cols {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
  </style>
</head>
<body>

  <!-- Cover / Header -->
  <div class="header-box">
    <div class="tagline">AWS Student Builder Group &bull; VIT Chennai &bull; Web Dev Recruitment</div>
    <div class="title">ODYSCAPE &mdash; Smart Travel Planner</div>
    <div style="font-size: 13px; color: #d4d4d4;">Discover More. Wander Further.</div>

    <div class="meta-grid">
      <div class="meta-item">
        <strong>Candidate Name</strong>
        S Akhilesh
      </div>
      <div class="meta-item">
        <strong>Registration Number</strong>
        25BCE5345
      </div>
      <div class="meta-item">
        <strong>Selected Track</strong>
        Track 1: Frontend Development
      </div>
      <div class="meta-item">
        <strong>Technologies</strong>
        React 18 &bull; Vite 5 &bull; Tailwind CSS &bull; LocalStorage
      </div>
      <div class="meta-item">
        <strong>Real External APIs</strong>
        Open-Meteo Weather API &bull; Wikipedia REST API
      </div>
      <div class="meta-item">
        <strong>Repository</strong>
        github.com/AKHILESH2625/Odyscape
      </div>
    </div>
  </div>

  <!-- Page 1: Explore Desktop -->
  <div class="section-title">
    <span>1. Destination Exploration (Desktop View)</span>
    <span class="badge">Mandatory Feature 1 & 11</span>
  </div>
  <p class="section-desc">
    Interactive card layout rendering real encyclopedic destinations enriched with live atmospheric weather data from Open-Meteo and authentic imagery from the Wikipedia REST API.
  </p>
  <div class="img-container">
    <img src="${getBase64Image('01_explore_desktop.png')}" alt="Explore Desktop" />
  </div>

  <div class="page-break"></div>

  <!-- Page 2: Destination Details Modal -->
  <div class="section-title">
    <span>2. Real-Time Destination Details & Meteorology Modal</span>
    <span class="badge">Mandatory Feature 3 & 5</span>
  </div>
  <p class="section-desc">
    Detailed destination view displaying live temperature and weather conditions, WMO weather codes, wind speeds, Wikipedia extracts, visit recommendations, budget estimates, and personal itinerary planning controls.
  </p>
  <div class="img-container">
    <img src="${getBase64Image('02_destination_details.png')}" alt="Destination Details" />
  </div>

  <div class="page-break"></div>

  <!-- Page 3: Search & Filter -->
  <div class="section-title">
    <span>3. Search, Categorical Filtering, and Real-Time Results</span>
    <span class="badge">Mandatory Feature 2 & 4</span>
  </div>
  <p class="section-desc">
    Instant search by destination, country, or tag, coupled with category filtering (Cultural Heritage, Island & Coastal, Nature & Adventure, Urban Wonders) and sorting options (featured, name, budget, rating).
  </p>
  <div class="img-container">
    <img src="${getBase64Image('03_search_filter.png')}" alt="Search and Filter" />
  </div>

  <div class="page-break"></div>

  <!-- Page 4: Populated Itinerary -->
  <div class="section-title">
    <span>4. My Trip Itinerary Planner (Populated & Persisted)</span>
    <span class="badge">Mandatory Feature 6 & 7</span>
  </div>
  <p class="section-desc">
    Interactive personal itinerary with trip analytics (total days, estimated budget, unique countries), customizable stay lengths, visit dates, editable personal travel notes, JSON export, and print formatting. Persisted via localStorage.
  </p>
  <div class="img-container">
    <img src="${getBase64Image('04_populated_itinerary.png')}" alt="Populated Itinerary" />
  </div>

  <div class="page-break"></div>

  <!-- Page 4: Empty States -->
  <div class="section-title">
    <span>5. Empty States & Graceful Error Handling</span>
    <span class="badge">Mandatory Feature 8, 9 & 10</span>
  </div>
  <p class="section-desc">
    Thoughtful feedback states for empty itinerary and zero search results, complete with recovery actions like "Reset All Filters" and dynamic Wikipedia global exploration.
  </p>

  <div class="two-cols">
    <div>
      <div style="font-size: 11px; font-weight: 600; margin-bottom: 6px;">Empty Itinerary State:</div>
      <div class="img-container">
        <img src="${getBase64Image('05_empty_itinerary.png')}" alt="Empty Itinerary" />
      </div>
    </div>
    <div>
      <div style="font-size: 11px; font-weight: 600; margin-bottom: 6px;">Empty Search State:</div>
      <div class="img-container">
        <img src="${getBase64Image('06_empty_search.png')}" alt="Empty Search" />
      </div>
    </div>
  </div>

  <div class="page-break"></div>

  <!-- Page 5: Mobile Experience & Project Architecture -->
  <div class="section-title">
    <span>6. Responsive Mobile Experience (iPhone / Android)</span>
    <span class="badge">Mandatory Feature 11</span>
  </div>
  <p class="section-desc">
    Fully responsive mobile interface tested on modern viewport sizes (390 &times; 844) with mobile navigation drawer and touch-friendly controls.
  </p>

  <div class="two-cols">
    <div>
      <div style="font-size: 11px; font-weight: 600; margin-bottom: 6px;">Mobile Explore View:</div>
      <div class="img-container">
        <img src="${getBase64Image('07_mobile_explore.png')}" alt="Mobile Explore" />
      </div>
    </div>
    <div>
      <div style="font-size: 11px; font-weight: 600; margin-bottom: 6px;">Mobile Navigation Drawer:</div>
      <div class="img-container">
        <img src="${getBase64Image('08_mobile_nav.png')}" alt="Mobile Navigation" />
      </div>
    </div>
  </div>

  <div class="page-break"></div>

  <div class="section-title">
    <span>7. Architecture, Track Details & Verification Modal</span>
    <span class="badge">Technical Quality & Attribution</span>
  </div>
  <p class="section-desc">
    Candidate credentials, API attribution, and architectural choices embedded directly into the application.
  </p>
  <div class="img-container">
    <img src="${getBase64Image('09_about_modal.png')}" alt="About Modal" />
  </div>

</body>
</html>
`;

async function buildPdf() {
  console.log('📄 Launching Chrome to generate submission PDF...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

  // 1. Primary submission filename: 25BCE5345_frontend.pdf
  const pdfPath1 = path.resolve('./25BCE5345_frontend.pdf');
  await page.pdf({
    path: pdfPath1,
    format: 'A4',
    printBackground: true,
    margin: { top: '12mm', bottom: '12mm', left: '12mm', right: '12mm' }
  });
  console.log('✅ Generated submission PDF:', pdfPath1);

  // 2. Also copy to Downloads so user can immediately attach it to their form/email
  const downloadsPath = 'C:\\Users\\S Akhilesh\\Downloads\\25BCE5345_frontend.pdf';
  fs.copyFileSync(pdfPath1, downloadsPath);
  console.log('✅ Copied submission PDF directly to Downloads folder:', downloadsPath);

  await browser.close();
}

buildPdf().catch(err => {
  console.error('PDF generation failure:', err);
  process.exit(1);
});
