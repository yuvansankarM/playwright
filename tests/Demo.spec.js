import { test, expect } from '@playwright/test';
import {LoginPage} from "./Pages/LOGIN"
import { Card} from './Pages/CARD';
import {Products} from './Pages/Product'
test("DemoProject", async({page})=>{

 const Login=new LoginPage(page)
 await Login.Logingoto()
 await Login.Login("pavanol","test@123")
 await page.waitForTimeout(2000)
 const Cards=new Card(page)
 await Cards.ProductDetails("Samsung galaxy s6")
 await Cards.goto()
 await page.waitForTimeout(3000)
 
const ADDcard=new Products(page)
await ADDcard.Findproducts("Samsung galaxy s6")
await page.waitForTimeout(5000)





})