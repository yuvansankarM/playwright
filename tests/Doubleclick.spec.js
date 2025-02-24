import { test, expect } from '@playwright/test';
test ('Doubleclick',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/") 
    const dbbutton= await page.locator("//button[text()='Copy Text']")
    await dbbutton.dbclick()
    const value=await page.locator("#field2")
    await expect(value).toHaveValue("Hello World!")
    await page.waitForTimeout(3000)




})