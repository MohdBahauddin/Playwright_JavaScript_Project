const {test,expect} = require("@playwright/test");

const HomePage = require("../pages/HomePage.js");

test("Test Case 18: View Category Productst", async ({page}) => {

    const home = new HomePage(page);

    await home.navigate();
    await home.verifyHomePageIsVisible();
    await home.verifyCategory();
    await home.clickCategory("Women");
    await home.clickSubCategory("1");
    await home.VerifyCategoryPage();
    await home.clickCategory("Men");
    await home.clickSubCategory("3");
    await home.verifyCategory();

});
