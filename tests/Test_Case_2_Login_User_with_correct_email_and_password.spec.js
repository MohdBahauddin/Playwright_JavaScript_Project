const { test, expect} = require("@playwright/test");
const HomePage = require("../pages/HomePage");
const SignUpOrLoginPage = require("../pages/SignUpOrLoginPage");

test("Test_Case_2_Login_User_with_correct_email_and_password", async ({ page }) => {

    const home = new HomePage(page);
    const signup = new SignUpOrLoginPage(page);

    await home.navigate();
    await home.clickLogin();
    await home.verifyHomePageIsVisible();

    await signup.fillLoginCredentials("johnvicks58@gmail.com", "Abcde@12");
    await signup.verifyLoginUserName();
    await signup.deleteAccount();
    await signup.verifyAccountDeleted();
    await page.pause();
});