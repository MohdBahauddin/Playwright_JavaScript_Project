const {test,expect} = require("@playwright/test");

const HomePage = require("../pages/HomePage.js");

test("Test Case 25: Verify Scroll Up using 'Arrow' button and Scroll Down functionality", async ({page}) => {

    const home = new HomePage(page);

    await home.navigate();
    await home.verifyHomePageIsVisible();
    await home.verifytextSubscription();
    await home.scrollPage();
    await home.clickUpArrow();
    await home.verifyFullFledgeText();


});