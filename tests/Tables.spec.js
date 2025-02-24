import { test, expect } from '@playwright/test';
test ('Table',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table= await page.locator("#productTable")
    const cols=await table.locator("thead tr th")
    const rows=await table.locator("tbody tr")  
    await expect(await cols.count()).toBe(4)
    await expect(await rows.count()).toBe(5)
   /* const matchrow= rows.filter({
        has: page.locator('td'),
        hasText: "Tablet"
    })
    await matchrow.locator('input').check();
await getRowData(rows,page,"Smartphone")
await getRowData(rows,page,"Tablet")
await getRowData(rows,page,"Smartwatch")

async function getRowData(rows,page,name) {
    const matchrow= rows.filter({
        has: page.locator('td'),
        hasText: name
    })
    await matchrow.locator('input').check();
}*/

for(let i=0;i<await rows.count()-1;i++)
{
    const row=rows.nth(i)
    const rowdata=await row.locator('td')
    for(let j=0;j<await rowdata.count();j++)
    {
        console.log(await rowdata.nth(j).textContent())
    }
}



const pages=await page.locator(".pagination li a");


for (let p=0;p<await pages.count();p++)
{

    if(p>0)
    {
        await pages.nth(p).click()
    }
    for(let i=0;i<await rows.count()-1;i++)
        {
            const row=rows.nth(i)
            const rowdata=await row.locator('td')
            for(let j=0;j<await rowdata.count();j++)
            {
                console.log(await rowdata.nth(j).textContent())
            }
        }
        await page.waitForTimeout(3000)
}

    await page.waitForTimeout(3000)
    

})