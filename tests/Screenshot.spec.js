import {test,expect} from "@playwright/test"


test ("Screenshots", async({page})=>{
    await page.goto("https://www.opencart.com/index.php?route=cms/demo");
    await page.screenshot({path:'tests/ScreenShot/'+Date.now()+'screenshot.png'});
    await page.screenshot({path:'tests/ScreenShot/'+Date.now()+'screenshot.png',fullPage:true});
    await page.locator("//a[@href='https://demo.opencart.com/']").screenshot({path:'tests/ScreenShot/'+Date.now()+'screenshot.png'})
    

})