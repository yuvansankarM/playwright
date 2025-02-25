import {test,expect,chromium} from "@playwright/test"
test("Browser/windows", async()=>{
  
    const browser = await chromium.launch()
    const context=await browser.newContext()
    const page1 = await context.newPage()
    const page2 = await context.newPage()

    await page1.goto("https://www.google.com")
    await expect(page1).toHaveTitle("Google")
    await page1.waitForTimeout(3000)
    await page2.goto("https://www.bing.com")
    await expect(page2).toHaveTitle("Search - Microsoft Bing")
    await page1.waitForTimeout(3000)
    




})
/*test("Browserk/windows", async()=>{
  
    const browser = await chromium.launch()
    const context=await browser.newContext()
    const page1 = await context.newPage()
    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page1).toHaveTitle("OrangeHRM")
  
    const promise=await context.waitForEvent('page')
    await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click()
    const newPage=await promise
    await expect(newPage).toHaveTitle("Human Resources Management Software | OrangeHRM")


})*/