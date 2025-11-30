const {test,expect} = require("@playwright/test");

const HomePage = require("../pages/HomePage");
const SignUpOrLoginPage = require("../pages/SignUpOrLoginPage");
const ProductsPage = require("../pages/ProductsPage");

test("Test Case 13: Verify Product quantity in Cart", async ({page}) => {

    const home = new HomePage(page);
    const product = new ProductsPage(page);

    await home.navigate();
    await home.verifyHomePageIsVisible();

    await product.clickViewProduct();
    await product.verifyProductDetailsPage();
    await product.increaseProductQuantity();
    
    await home.clickCartButton();
    await product.verifyCartQuantity();
});