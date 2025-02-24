const {test,expect} = require('@playwright/test');
test ('locator',async({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await page.getByPlaceholder('username').fill("Admin");
await page.getByPlaceholder('password').fill( "admin123");
await page.getByRole('button',{type :'Submit'}).click();
const name= await page.locator("//p[@class='oxd-userdropdown-name']").textContent();
await expect(await page.getByText(name)).toBeVisible();
await page.close();




})