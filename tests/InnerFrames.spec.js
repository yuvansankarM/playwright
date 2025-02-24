import { test, expect } from '@playwright/test';
test ('INNER Frames',async({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/")
    const frames=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"})
    const childframes=frames.childFrames()
    await childframes[0].locator("//div[@id='i6']//div[@class='AB7Lab Id5V1']").check();
    await page.waitForTimeout(3000)
})