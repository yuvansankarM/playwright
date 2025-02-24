import { test, expect } from '@playwright/test';
test ('locator',async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html');

    await page.click('id=login2');
    await page.fill('#loginusername','pavanol');
    await page.fill("input[id='loginpassword']",'test@123');
    await page.click("//button [normalize-space()='Log in']");
    const logoutLink = await page.locator("//a[normalize-space()='Log out']");
    await expect(logoutLink).toBeVisible();
    await page.close();    

})