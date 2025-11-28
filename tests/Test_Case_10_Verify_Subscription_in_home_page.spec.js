const {test,expect} = require("@playwright/test");
const HomePage = require("../pages/HomePage");

test("Test Case 10: Verify Subscription in home page", async ({page}) => {

    const home = new HomePage(page);

    await home.navigate();
    await home.verifyHomePageIsVisible();
    await home.verifytextSubscription();
    await home.fillSusbcriptionEmail("johnvicks58@gmail.com");
    await home.verifySubscriptionMessage();

});