import { test, expect } from '@playwright/test';
test ('Form',async({page})=>{

await page.goto("https://demo.wpeverest.com/user-registration/form-3/");
await expect(await page.locator("//input[@id='first_name']")).toBeVisible();
await expect(await page.locator("//input[@id='first_name']")).toBeEmpty();
await expect(await page.locator("//input[@id='first_name']")).toBeEditable();
await expect(await page.locator("//input[@id='first_name']")).toBeEnabled();
await page.fill("//input[@id='first_name']", "John");
await page.locator("//input[@id='check_box_1530100860_Choice1']").check();
await expect(await page.locator("//input[@id='check_box_1530100860_Choice1']")).toBeChecked();
await expect(await page.locator("//input[@id='check_box_1530100860_Choice1']").isChecked()).toBeTruthy();
await expect(await page.locator("//input[@id='check_box_1530100860_Choice2']").isChecked()).toBeFalsy();

const checkboxs=[
    "//input[@id='check_box_1530100860_Choice2']",
    "//input[@id='check_box_1530100860_Choice3']"
]
for( const checkbox of checkboxs)
{
    await page.locator(checkbox).check();
}
await page.waitForTimeout(5000);
for( const checkbox of checkboxs)
    {
        if(await page.locator(checkbox).isChecked())
        {
        await page.locator(checkbox).uncheck();
        }
    }
    await page.waitForTimeout(5000);



})