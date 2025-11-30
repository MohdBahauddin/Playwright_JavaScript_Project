const {test,expect} = require("@playwright/test");

const HomePage = require("../pages/HomePage.js");
const SignUpOrLoginPage = require("../pages/SignUpOrLoginPage");
const PaymentsPage = require("../pages/PaymentsPage.js");
const CartsPage = require("../pages/CartsPage.js");
const ProductsPage = require("../pages/ProductsPage.js");

test("Test Case 15: Place Order: Register before Checkout", async ({page}) => {

    const home = new HomePage(page);
    const signup = new SignUpOrLoginPage(page);
    const pay = new PaymentsPage(page);
    const cart = new CartsPage(page);
    const product = new ProductsPage(page);

    await home.navigate();
    await home.verifyHomePageIsVisible();
    await home.clickLogin();

    await signup.signupCredentials("John Wick", "johnvicks58@gmail.com");
    await signup.fillSignupDetails("John", "Wick", "Abcde@12", "Capgemini", "Kundalahalli", "Whitefield", "Karnataka", "Bengaluru", "India", "560037", "8081310985");
    await signup.verifyAccountCreated();
    await signup.clickContinueButton();
    await signup.verifyLoginUserName();

    await product.addToCart("1");

    await home.clickCartButton();

    await cart.verifyCartsPage();
    await cart.clickProceedToCheckout();

    await cart.verifyAddressDetails();
    await cart.fillDescription();
    
    await pay.fillPaymentDetails("John Wick", "1234567890123459", "123", "10", "2030");
    await pay.verifyOrderPlaced();

    await home.deleteAccount();
    await home.verifyDeleteAccount();
});

