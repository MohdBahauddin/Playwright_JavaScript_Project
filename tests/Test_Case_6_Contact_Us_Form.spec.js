const { test, expect } = require("@playwright/test");

const ContactUsPage = require("../pages/ContactUsPage");
const HomePage = require("../pages/HomePage");
const SignUpOrLoginPage = require("../pages/SignUpOrLoginPage");
const path = require('path');

test("Test Case 6: Contact Us Form", async ({page}) => {

    const home = new HomePage(page);
    const signup = new SignUpOrLoginPage(page);
    const contact = new ContactUsPage(page);

    await home.navigate();
    await home.verifyHomePageIsVisible();
    
    await contact.clickConatactUsButton();
    await contact.verifyGetInTouchText();
    await contact.fillContactUsForm("John Wick", "johnvicks58@gmail.com", "Filling contact us form", "Filled contact us form");
    await contact.submitForm();
    await contact.clickOkAlertMessage();
    await contact.verifySuccessMessage();
});