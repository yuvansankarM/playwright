import { test, expect } from '@playwright/test';
test ('Frames',async({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/")
    const frames=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})
      await frames.fill("[name='mytext1']","yuvan");
    
    
   //const value=await page.frameLocator("frames[src='frame_1.html']").locator("[name='mytext1']")
    //value.fill("helo")
})
