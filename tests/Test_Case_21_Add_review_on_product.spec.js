const {test,expect} = require("@playwright/test");

const HomePage = require("../pages/HomePage.js");
const CartsPage = require("../pages/CartsPage.js");
const ProductsPage = require("../pages/ProductsPage.js");
const SignupOrLoginPage = require("../pages/SignUpOrLoginPage.js");

test("Test Case 20: Search Products and Verify Cart After Login", async ({page}) => {

    const home = new HomePage(page);
    const product = new ProductsPage(page);
    const cart = new CartsPage(page);
    const signup = new SignupOrLoginPage(page);

    await home.navigate();
    await home.verifyHomePageIsVisible();
    await home.clickProductsButton();

    await product.clickViewProduct();
    await product.fillProductReview("John Wick", "johnvicks58@gmail.com", "This is a test review");
    await product.verifyReviewMessage();

});
