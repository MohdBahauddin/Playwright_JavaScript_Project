const {test,expect} = require("@playwright/test");

const HomePage = require("../pages/HomePage.js");
const SignUpOrLoginPage = require("../pages/SignUpOrLoginPage");
const PaymentsPage = require("../pages/PaymentsPage.js");
const CartsPage = require("../pages/CartsPage.js");
const ProductsPage = require("../pages/ProductsPage.js");

test("Test Case 16: Place Order: Login before Checkout", async ({page}) => {

    const home = new HomePage(page);
    const signup = new SignUpOrLoginPage(page);
    const pay = new PaymentsPage(page);
    const cart = new CartsPage(page);
    const product = new ProductsPage(page);

    await home.navigate();
    await home.verifyHomePageIsVisible();
    await home.clickLogin();
    
    await signup.fillLoginCredentials("johnvicks58@gmail.com", "Abcde@12");
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