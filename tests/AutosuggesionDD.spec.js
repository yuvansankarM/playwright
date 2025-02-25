import { test, expect } from '@playwright/test';
test ('locator',async({page})=>{
    await page.waitForTimeout(4000)
 await page.goto("https://www.redbus.in/")
 await page.waitForTimeout(4000)


 await page.locator("#src").fill("Chennai");
 await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")
 const text = await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")
 for( const value of text)
 {
    const option= await value.textContent();
    //console.log(option);
    if(option.includes("Velachery"))
    {
        await value.click();
        break;

    }

 }
 await page.waitForTimeout(4000)

})