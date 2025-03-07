import { test, expect } from '@playwright/test';
let page;
test.beforeAll('Hooks',async({browser})=>{
    page = await browser.newPage();
    await page.goto('https://www.demoblaze.com/');
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("pavanol");
    await page.locator("#loginpassword").fill("test@123");
    await page.locator("//button[text()='Log in']").click();

});
test.afterAll(async()=>{
    await page.locator("#logout2").click()
    

});
test('Test Links',async()=>{
  const products=await page.$$("[class='hrefch']");
 
  expect(products).toHaveLength(9);
});
test('Test Product',async()=>{
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
    await page.locator("//a[@class='btn btn-success btn-lg']").click()
    page.on('dialog', async dialog=>{
        expect(dialog.message()).toContain("Product added.")
        await dialog.accept()
    })
  });
  test('Test Product2',async()=>{
    await page.locator("//a[normalize-space()='Nokia lumia 1520']").click()
    await page.locator("//a[@class='btn btn-success btn-lg']").click()
    page.on('dialog', async dialog=>{
        expect(dialog.message()).toContain("Product added.")
        await dialog.accept()
    })
  });
