import { test, expect } from '@playwright/test';
test ('Hidden DropDown',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.fill("[name='username']","Admin");

    await page.fill("[name='password']","admin123");
    await page.click("[type='submit']");
    await page.click("//span[normalize-space()='PIM']");
    ////span[text()='"+value+"']
    const options= await page.$$("//div[@role='listbox']//span")
    for(const value of options)
    {
        const text = await value.textContent()
        console.log(text);
      //  if( text.includes(""))
    }
    await page.waitForTimeout(5000)







})