import { test, expect } from '@playwright/test';
test ('Datepicker0',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
   // await page.fill("#datepicker","04/06/2024");
   const year="2027"
   const month="January"
   const day="4"
   await page.locator('#datepicker').click();
   while(true)
   {
    const cyear=await page.locator('.ui-datepicker-year').textContent()
    const cmonth=await page.locator('.ui-datepicker-month').textContent()
    if(cyear==year && cmonth==month){
        await page.click(`//a[@class='ui-state-default'][text()='${day}']`)
        break;
    }        
    await page.locator('[title="Next"]').click()


   }
   //await page.click(`//a[@class='ui-state-default'][text()='${day}']`)


    await page.waitForTimeout(3000);
    // 
    






})