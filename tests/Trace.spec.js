import { test, expect } from '@playwright/test';

test('Trace',async({page})=>{
    
    await page.goto('https://www.demoblaze.com/');
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("pavanol");
    await page.locator("#loginpassword").fill("test@123");
    await page.locator("//button[text()='Log in']").click();
    await expect(page.locator("#logout2")).toBeVisible()

});