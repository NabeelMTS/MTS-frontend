const puppeteer = require('puppeteer');

async function checkPerformance() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Enable performance monitoring
  await page.setCacheEnabled(false);
  
  console.log('Testing performance...');
  
  // Measure initial page load
  const startTime = Date.now();
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  const loadTime = Date.now() - startTime;
  
  console.log(`Initial page load time: ${loadTime}ms`);
  
  // Measure navigation time
  const navStart = Date.now();
  await page.click('a[href="/care-management"]');
  await page.waitForSelector('main', { timeout: 5000 });
  const navTime = Date.now() - navStart;
  
  console.log(`Navigation time: ${navTime}ms`);
  
  // Get performance metrics
  const metrics = await page.evaluate(() => {
    const navigation = performance.getEntriesByType('navigation')[0];
    return {
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      firstPaint: performance.getEntriesByType('paint').find(entry => entry.name === 'first-paint')?.startTime,
      firstContentfulPaint: performance.getEntriesByType('paint').find(entry => entry.name === 'first-contentful-paint')?.startTime,
    };
  });
  
  console.log('Performance metrics:', metrics);
  
  await browser.close();
}

if (require.main === module) {
  checkPerformance().catch(console.error);
}

module.exports = checkPerformance; 