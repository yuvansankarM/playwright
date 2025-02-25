

import { test, expect } from '@playwright/test';
test ('locator',async({page})=>{



await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2");
const options = await page.locator("ul>li label input")
await expect(options).toHaveCount(11);

const values= await page.$$("ul>li label")
for(const checked of values)
{
    const text = await checked.textContent()
    if(text.includes("Angular") || text.includes("Java"))
    {
        try {
            await checked.click({ timeout: 5000 });
        } catch (error) {
            console.error('Error clicking element:', error);
        }
    }

}
await page.waitForTimeout(5000)

})