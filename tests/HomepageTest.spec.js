import { test, expect } from '@playwright/test';

test.use({storageState: 'UserState.json'});

test ('Home Page',async({page})=>{

    await page.goto('https://www.demoblaze.com/index.html');
    await expect(page).toHaveTitle('STORE');
   /* const pageTitle=page.title();
    console.log("pagetitle",pageTitle);

    await expect(page).toHaveTitle('STORE');
    const pageUrl=page.url();
    console.log("pageurl",pageUrl);

    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');*/
   /* await page.locator("#login2").click();
    await page.locator("#loginusername").fill("pavanol");
    await page.locator("#loginpassword").fill("test@123");
    await page.locator("//button[text()='Log in']").click();
    const products=await page.$$(".hrefch");
    //console.log(products)
    for(const value of products)
    {
      const productname=await value.textContent();
      console.log("productname",productname);
    }*/
      await page.waitForTimeout(5000);
    await page.close();
    
}  )