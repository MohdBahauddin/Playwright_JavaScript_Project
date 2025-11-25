const {test, expect} = require("@playwright/test");
const HomePage = require("../pages/HomePage");
const SignUpOrLoginPage = require("../pages/SignUpOrLoginPage");

test("Test_Case_1_Register_User", async ({ page }) =>{

    const home = new HomePage(page);
    const signup = new SignUpOrLoginPage(page);

    await home.navigate();
    await home.clickLogin();

    await signup.signupCredentials("John Wick", "johnvicks58@gmail.com");
    await signup.fillSignupDetails("John", "Wick", "Abcde@12", "CApgemini", "Kundalahalli", "Whitefield", "Karnataka", "Bengaluru", "India", "560037", "8081310985");
    await signup.verifyAccountCreated();

});

