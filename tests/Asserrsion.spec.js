import { test, expect } from '@playwright/test';
test ('locator',async({page})=>{
await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F");
await expect(page).toHaveURL("https://demo.nopcommerce.com/register?returnUrl=%2F");
//await expect(page).not.toHaveURL("https://demo.nopcommerce.com/register?returnUrl=%2F");
await expect(page).toHaveTitle("nopCommerce demo store. Register");
const enabled= await page.locator('#small-searchterms');
await expect(enabled).toBeEnabled();


const ckecked= await page.locator("#gender-male");
await ckecked.click();
await expect(ckecked).toBeChecked();
const ckecke= await page.locator("#Newsletter");

await expect(ckecke).toBeChecked();
const attribute= await page.locator("#register-button");
console.log("Attribute",attribute)
await expect(attribute).toHaveAttribute("type","submit");
const attributeValue = await page.locator("#register-button").getAttribute("type");
console.log("Attribute value:", attributeValue);

await expect(await page.locator("//strong[normalize-space()='Your Password']")).toHaveText("Your Password");
await expect(await page.locator("//strong[normalize-space()='Your Password']")).toContainText("Your");
const emailid=await page.locator("#Email")
await emailid.fill("tex@123");
await expect(emailid).toHaveValue("tex@123");
//const options= await page.locator("select[name='DateOfBirthMonth'] option");
//await expect(options).toHaveCount(13);

    let data = 'Hello Playwright';
    expect(data).toBeTruthy(); // ✅ Passes because it's a non-empty string

    let emptyString = null;
    expect(emptyString).toBeTruthy(); // ❌ Fails because it's falsy




})