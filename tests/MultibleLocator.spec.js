import { test, expect } from '@playwright/test';
test ('locator',async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html');
    const links=await page.$$('a');
    for(const link of links)
    {
        console.log(await link.textContent());
    
    }

//page.waitForSelector("//div[@id='tbodyid']//div//h4//a");

const product= await page.$$("//div[@id='tbodyid']//div//h4//a");
for(const products of product)
{
    console.log(await products.textContent());
}
    await page.close();


})