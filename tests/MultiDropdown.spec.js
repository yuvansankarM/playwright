import { test, expect } from '@playwright/test';
test ('MultiDropdown',async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");
//await page.selectOption("#colors",['Red','Yellow','Blue']);
const values=await page.locator("#colors option");

await expect(values).toHaveCount(7);
const options= await page.$$("#colors option");
console.log("numeber of len",options.length);
await expect(options.length).toBe(7)








await page.waitForTimeout(3000);


})