const { test, expect } = require("@playwright/test");
const HomePage = require("../pages/HomePage");
const SignUpOrLoginPage = require("../pages/SignUpOrLoginPage");

test("Test Case 3: Login User with incorrect email and password", async ({page}) => {
    const home = new HomePage(page);
    const signup = new SignUpOrLoginPage(page);

    await home.navigate();
    await home.verifyHomePageIsVisible();
    await home.clickLogin();

    await signup.fillLoginCredentials("johnvicks58@gmail.com", "Abcde@2");
    await signup.verifyIncorrectLoginPassword();


});