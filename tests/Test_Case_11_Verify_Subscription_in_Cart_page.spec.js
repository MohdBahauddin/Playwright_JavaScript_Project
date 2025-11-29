const {test,expect} = require("@playwright/test");
const HomePage = require("../pages/HomePage");

test("Test Case 11: Verify Subscription in Cart page", async ({page}) => {

    const home = new HomePage(page);

    await home.navigate();
    await home.verifyHomePageIsVisible();
    await home.clickCartButton();
    await home.fillSusbcriptionEmail("johnvicks58@gmail.com");
    await home.verifySubscriptionMessage()
});