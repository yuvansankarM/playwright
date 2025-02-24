exports.LoginPage=
class LoginPage{
    constructor(page) {
        this.page = page;
        this.loginForm = '#login2'
        this.usernameInput = '#loginusername'
        this.passwordInput = '#loginpassword'
        this.loginButton = '//button[text()="Log in"]'
}
async Logingoto(){
  await this.page.goto("https://www.demoblaze.com/index.html")
}
async Login(username, password) {

    await this.page.locator(this.loginForm).click();
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.locator(this.loginButton).click();

}
}