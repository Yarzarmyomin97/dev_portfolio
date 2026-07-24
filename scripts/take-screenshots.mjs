import { chromium } from 'playwright';
import { mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SCREENSHOTS_DIR = join(__dirname, '..', 'screenshots');
const BASE_URL = 'http://localhost:3000';

// Ensure screenshots directory exists
mkdirSync(SCREENSHOTS_DIR, { recursive: true });

// Nav link order (hero has no nav link — it's the initial view)
const navSections = [
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

const viewports = [
  { name: 'desktop', width: 1280, height: 800 },
  { name: 'mobile', width: 390, height: 844 },
];

async function setTheme(page) {
  await page.evaluate(() => {
    localStorage.setItem(
      'portfolio-theme',
      JSON.stringify({ mode: 'light', palette: 'sunset' })
    );
  });
  await page.reload({ waitUntil: 'networkidle' });
  // Wait for theme CSS variables to be applied
  await page.waitForFunction(() => {
    const root = document.documentElement;
    return (
      root.style.getPropertyValue('--color-primary') === '#F97316' &&
      root.style.getPropertyValue('--color-background') === '#FFFBF5'
    );
  });
}

async function clickDesktopNav(page, label) {
  const desktopNav = page.locator('nav[aria-label="Section navigation"]');
  const btn = desktopNav.getByRole('button', { name: label, exact: true });
  await btn.click();
}

async function clickMobileNav(page, label) {
  const hamburger = page.locator('button[aria-label="Open navigation menu"]');
  await hamburger.click();
  await page.waitForTimeout(400);

  const mobileNav = page.locator('nav[aria-label="Mobile section navigation"]');
  const btn = mobileNav.getByRole('button', { name: label, exact: true });
  await btn.click();

  await page.waitForTimeout(400);
}

async function takeScreenshots() {
  const browser = await chromium.launch({ headless: true });

  for (const vp of viewports) {
    const isMobile = vp.name === 'mobile';
    console.log(`\n📱 Viewport: ${vp.name} (${vp.width}×${vp.height})`);

    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 2,
    });
    const page = await context.newPage();

    // Navigate, set theme, reload
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    await setTheme(page);

    // ── Hero viewport screenshot (initial view, no nav click) ──
    await page.waitForTimeout(400);
    await page.screenshot({ path: join(SCREENSHOTS_DIR, `${vp.name}-hero.png`), fullPage: false });
    console.log(`  ✅ hero (viewport)`);

    // ── Navigate through each nav link and screenshot viewport only ──
    for (const section of navSections) {
      if (isMobile) {
        await clickMobileNav(page, section.label);
      } else {
        await clickDesktopNav(page, section.label);
      }

      // Wait for smooth scroll to finish
      await page.waitForTimeout(800);

      // Viewport screenshot only
      await page.screenshot({
        path: join(SCREENSHOTS_DIR, `${vp.name}-${section.id}.png`),
        fullPage: false,
      });
      console.log(`  ✅ ${section.id} (viewport)`);
    }

    // ── One full-page screenshot for desktop only ──
    if (vp.name === 'desktop') {
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(400);
      await page.screenshot({ path: join(SCREENSHOTS_DIR, 'portfolio-full.png'), fullPage: true });
      console.log('  ✅ portfolio-full (desktop full page)');
    }

    await context.close();
  }

  await browser.close();
  console.log('\n🎉 All screenshots captured successfully!');
}

takeScreenshots().catch((err) => {
  console.error('❌ Error:', err);
  process.exit(1);
});
