const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch({ headless: false }); // Open browser in non-headless mode for debugging
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.demoblaze.com/index.html');

  // ✅ Ensure the input field is visible before filling
  await page.locator("#login2").click();
  await page.waitForSelector('#loginusername', { state: 'visible', timeout: 60000 });
  await page.locator("#loginusername").fill("pavanol");
  await page.locator("#loginpassword").fill("test@123");
  await page.waitForTimeout(5000);
  await page.locator("//button[text()='Log in']").click();
  await page.waitForTimeout(5000);
  await context.storageState({ path: 'Userstate.json' });
  console.log('✅ Login successful!');
  await browser.close();
  await page.waitForTimeout(5000);
  console.log('✅ Login successful!');
})();
