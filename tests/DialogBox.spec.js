import { test,expect} from "@playwright/test"; 
test.skip('dialog',async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")
page.on('dialog' ,async dialog =>{
    
    expect(dialog.type()).toContain("alert")
    expect(dialog.message()).toContain("I am an alert box!")
    await dialog.accept();



})
await page.click("#alertBtn");

await page.waitForTimeout(3000)


})
test.skip('dialog after',async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on('dialog' ,async dialog =>{
        
        expect(dialog.type()).toContain("confirm")
        expect(dialog.message()).toContain("Press a button!")
        await dialog.dismiss();
    
    
    
    })
    await page.click("#confirmBtn");
    await expect(page.locator("//p[@id='demo']")).toHaveText("You pressed Cancel!") 
    
    await page.waitForTimeout(3000)
    
    
    })


    test('dialog after Prompt',async ({page})=>{

        await page.goto("https://testautomationpractice.blogspot.com/")
        page.on('dialog' ,async dialog =>{
            
            expect(dialog.type()).toContain("prompt")
            expect(dialog.message()).toContain("Please enter your name:")
            expect( dialog.defaultValue()).toContain("Harry Potter")
            await dialog.accept("Jone");

        
        
        
        })
        await page.click("#promptBtn");
        await expect(page.locator("//p[@id='demo']")).toHaveText("Hello Jone! How are you today?") 
        
        await page.waitForTimeout(3000)
        
        
        })