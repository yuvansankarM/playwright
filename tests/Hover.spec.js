import { test, expect } from '@playwright/test';
test ('Hover',async({page})=>{

    await page.goto("https://demo.opencart.com/");
    const Desktops= await page.locator("//a[normalize-space()='Desktops']");
    const laptops=await (page.locator("//a[normalize-space()='Laptops & Notebooks']"))
    await Desktops.hover();
    //await laptops.hover();
    await page.waitForTimeout(5000);




})