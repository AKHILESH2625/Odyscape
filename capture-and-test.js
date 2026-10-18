import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE_URL = 'http://localhost:3000';
const SHOTS_DIR = path.resolve('./screenshots');

if (!fs.existsSync(SHOTS_DIR)) {
  fs.mkdirSync(SHOTS_DIR, { recursive: true });
}

async function run() {
  console.log('🚀 Launching headless Chrome from:', CHROME_PATH);
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security']
  });

  const page = await browser.newPage();
  
  // Collect console errors to verify no runtime issues
  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  // 1. Explore Page - Desktop
  console.log('📸 1. Capturing Explore View (Desktop)...');
  await page.setViewport({ width: 1366, height: 900 });
  await page.goto(BASE_URL, { waitUntil: 'networkidle2' });
  // Wait for destination cards to appear
  await page.waitForSelector('#explore-section');
  await new Promise(r => setTimeout(r, 2000)); // allow live APIs to populate
  await page.screenshot({ path: path.join(SHOTS_DIR, '01_explore_desktop.png') });

  // 2. Open Destination Details Modal
  console.log('📸 2. Capturing Destination Details Modal...');
  // Click on "Details" button of first card
  const detailsButtons = await page.$$('button');
  for (const btn of detailsButtons) {
    const text = await page.evaluate(el => el.textContent, btn);
    if (text && text.includes('Details')) {
      await btn.click();
      break;
    }
  }
  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({ path: path.join(SHOTS_DIR, '02_destination_details.png') });

  // Add this destination to trip from modal
  const submitTripBtn = await page.$('form button[type="submit"]');
  if (submitTripBtn) {
    await submitTripBtn.click();
    await new Promise(r => setTimeout(r, 800));
  }

  // Close modal via close button
  const closeBtn = await page.$('button[aria-label="Close modal"]');
  if (closeBtn) {
    await closeBtn.click();
    await new Promise(r => setTimeout(r, 600));
  }

  // Add 2 more destinations to trip directly via card bookmark buttons
  const bookmarkBtns = await page.$$('button[title="Add to My Trip"]');
  if (bookmarkBtns.length >= 2) {
    await bookmarkBtns[0].click();
    await new Promise(r => setTimeout(r, 400));
    await bookmarkBtns[1].click();
    await new Promise(r => setTimeout(r, 400));
  }

  // 3. Search & Filter State (India)
  console.log('📸 3. Capturing Search & Filter State for India...');
  const searchInput = await page.$('input[type="text"]');
  if (searchInput) {
    await searchInput.type('India');
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: path.join(SHOTS_DIR, '03_search_filter.png') });
    // Clear search
    await page.evaluate(el => el.value = '', searchInput);
  }

  // 4. Populated Itinerary ("My Trip" with Incredible India Itinerary)
  console.log('📸 4. Capturing Populated My Trip View (Incredible India Tour)...');
  const navBtns = await page.$$('header nav button');
  for (const btn of navBtns) {
    const text = await page.evaluate(el => el.textContent, btn);
    if (text && text.includes('My Trip')) {
      await btn.click();
      break;
    }
  }
  await new Promise(r => setTimeout(r, 1000));
  // Ensure Incredible India Tour is loaded
  await page.evaluate(() => {
    const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.includes('Incredible India Tour'));
    if (btn) btn.click();
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(SHOTS_DIR, '04_populated_itinerary.png') });

  // 5. Empty Itinerary State
  console.log('📸 5. Capturing Empty Itinerary State...');
  // Click "Clear Trip"
  const clearTripBtn = await page.$('button[title="Reset and clear all saved destinations"]');
  if (clearTripBtn) {
    await clearTripBtn.click();
    await new Promise(r => setTimeout(r, 600));
    // Confirm clear via pure DOM click
    await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('button'));
      const confirmBtn = btns.find(b => b.textContent && b.textContent.includes('Confirm Clear'));
      if (confirmBtn) confirmBtn.click();
    });
    await new Promise(r => setTimeout(r, 800));
  }
  await page.screenshot({ path: path.join(SHOTS_DIR, '05_empty_itinerary.png') });

  // Switch back to Explore
  for (const btn of navBtns) {
    const text = await page.evaluate(el => el.textContent, btn);
    if (text && text.includes('Explore')) {
      await btn.click();
      break;
    }
  }
  await new Promise(r => setTimeout(r, 800));

  // 6. Empty Search State
  console.log('📸 6. Capturing Empty Search State...');
  const searchInput2 = await page.$('input[type="text"]');
  if (searchInput2) {
    await searchInput2.type('NonExistentCityXYZ999');
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: path.join(SHOTS_DIR, '06_empty_search.png') });
    // Reset
    await page.evaluate(() => {
      const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.includes('Reset All Filters'));
      if (btn) btn.click();
    });
    await new Promise(r => setTimeout(r, 800));
  }

  // 7. Mobile Viewport Explore (390 x 844 iPhone 14)
  console.log('📸 7. Capturing Mobile Explore View...');
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.goto(BASE_URL, { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({ path: path.join(SHOTS_DIR, '07_mobile_explore.png') });

  // 8. Mobile Navigation Drawer
  console.log('📸 8. Capturing Mobile Navigation Drawer...');
  const mobileMenuToggle = await page.$('button[aria-label="Toggle menu"]');
  if (mobileMenuToggle) {
    await mobileMenuToggle.click();
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(SHOTS_DIR, '08_mobile_nav.png') });
  }

  // 9. About Modal
  console.log('📸 9. Capturing About Modal...');
  await page.setViewport({ width: 1280, height: 900 });
  await page.goto(BASE_URL, { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1000));
  await page.evaluate(() => {
    const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.includes('About Project'));
    if (btn) btn.click();
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(SHOTS_DIR, '09_about_modal.png') });

  console.log('✅ All screenshots captured successfully in ./screenshots!');
  console.log('Console errors captured during tests:', consoleErrors.length);
  if (consoleErrors.length > 0) {
    console.log(consoleErrors);
  }

  await browser.close();
}

run().catch(err => {
  console.error('Test script failure:', err);
  process.exit(1);
});
