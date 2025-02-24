const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const playwright = require('playwright');  // Corrected import
const { LoginPage } = require('../../tests/Pages/LOGIN');

setDefaultTimeout(10 * 6000);

const url = "https://www.demoblaze.com/index.html";

Given('I navigate to the Demoblaze homepage', async function () {
    const browser = await playwright.chromium.launch({ headless: false });
    const context = await browser.newContext();
    this.page = await context.newPage();
    this.loginPage = new LoginPage(this.page);
    await this.loginPage.Logingoto(url);
});

When('I login with username {string} and password {string}', async function (username, password) {
    this.username = username;
    await this.loginPage.Login(username, password);
});


