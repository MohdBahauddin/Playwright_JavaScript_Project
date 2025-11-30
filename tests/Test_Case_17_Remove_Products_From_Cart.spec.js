const {test,expect} = require("@playwright/test");

const HomePage = require("../pages/HomePage.js");
const SignUpOrLoginPage = require("../pages/SignUpOrLoginPage");
const PaymentsPage = require("../pages/PaymentsPage.js");
const CartsPage = require("../pages/CartsPage.js");
const ProductsPage = require("../pages/ProductsPage.js");

test("Test Case 17: Remove Products From Cart", async ({page}) => {

    const home = new HomePage(page);
    const signup = new SignUpOrLoginPage(page);
    const pay = new PaymentsPage(page);
    const cart = new CartsPage(page);
    const product = new ProductsPage(page);

    await home.navigate()
    await home.verifyHomePageIsVisible();

    await product.addToCart("1");

    await home.clickCartButton();

    await cart.verifyCartsPage();
    await cart.removeProductFromCart();
    await cart.verifyCartIsEmpty();

});
