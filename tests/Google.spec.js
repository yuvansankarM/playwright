import { test, expect } from '@playwright/test';
test ('locator',async({page})=>{
await page.goto("https://www.google.com/");
await expect(page).toHaveURL("https://www.google.com/");
await expect(page).toHaveTitle("Google");
await page.waitfortimeout(3000);
// 
}) 