const { Given, When, Then } = require('@cucumber/cucumber');
Given('user opens the application', async function () {
    await this.page.goto('https://playwrightlabs.com/practice/login.html');
})

When('user enters the valid credentials', async function () {
    await this.page.fill('#username', 'admin');
    await this.page.fill('#password', 'admin123');
    await this.page.click('#login-button');
})

Then('user should see dashboard', async function () {
    await this.page.waitForSelector('[data-testid="dashboard-heading"]')
   console.log("Login sucessful");
   
});
