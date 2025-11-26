const {test,expect} = require("@playwright/test");
const home = require("../pages/HomePage");
const signup = require("../pages/SignUpOrLoginPage");
const HomePage = require("../pages/HomePage");
const SignUpOrLoginPage = require("../pages/SignUpOrLoginPage");

test("Test Case 5: Register User with existing email", async ({page}) => {

    const home = new HomePage(page);
    const signup = new SignUpOrLoginPage(page);

    await home.navigate();
    await home.verifyHomePageIsVisible();
    await home.clickLogin();
    
    await signup.signupCredentials("John Wick", "johnvicks58@gmail.com");
    await signup.verifyEmailalreadyExistsMessage();
});