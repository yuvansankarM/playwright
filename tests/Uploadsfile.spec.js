import { test, expect } from '@playwright/test';
test ('Upload files',async({page})=>{


    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    await page.locator("#filesToUpload").click()
    await page.locator("#filesToUpload").setInputFiles(["tests/Files/ReactJS-Guide.pdf","tests/Files/IMG_20231118_114336.jpg","tests/Files/D.jpeg"])
    await expect(await page.locator("(//*[@id='fileList']//child::*)[1]")).toHaveText("ReactJS-Guide.pdf")
    await expect(await page.locator("#fileList li:nth-Child(2)")).toHaveText("IMG_20231118_114336.jpg")
    await expect(await page.locator("#fileList li:nth-Child(3)")).toHaveText("D.jpeg")
    await page.waitForTimeout(2500)



})