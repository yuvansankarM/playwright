

import { test, expect } from '@playwright/test';
test.skip ('locator',async({page})=>{
    await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F');
    await page.locator("//select[@name='DateOfBirthMonth']").selectOption({label:"May"});
    await page.locator("//select[@name='DateOfBirthDay']").selectOption("12");
    await page.locator("//select[@name='DateOfBirthDay']").selectOption({value :"1"});
    await page.locator("//select[@name='DateOfBirthDay']").selectOption({index :5});

const options= await page.$$("//select[@name='DateOfBirthMonth']");

let status=false;
for(const option of options)
{
    let value=await option.textContent();
    if(value.includes("June"))
    {
        status=true;
        break;
    }
}
await expect(status).toBeTruthy();

await page.waitForTimeout(6000)

})