const { test, exoect } = require("@playwright/test");
const Homepage = require("../pages/HomePage");
const testCasePage = require("../pages/testCasePage");

test("Test Case 7: Verify Test Cases Page", async({page}) => {

    const home = new Homepage(page);
    const test = new testCasePage(page);

    await home.navigate();
    await home.verifyHomePageIsVisible();
    await home.clickTestCaseButton();

    await test.verifyTestCasePage();
    
});