const { test, expect } = require("@playwright/test");
const home = require("../pages/HomePage");
const signup = require("../pages/SignUpOrLoginPage");
const HomePage = require("../pages/HomePage");
const SignUpOrLoginPage = require("../pages/SignUpOrLoginPage");
const { sign } = require("crypto");

test("Test Case 4: Logout User", async ({page}) => {

    const home = new HomePage(page);
    const signup = new SignUpOrLoginPage(page);

    await home.navigate();
    await home.clickLogin();
    
    await signup.fillLoginCredentials("johnvicks58@gmail.com", "Abcde@12");
    await signup.verifyLoginUserName();
    await signup.clickLogoutButton();

    await home.verifyHomePageIsVisible();
});