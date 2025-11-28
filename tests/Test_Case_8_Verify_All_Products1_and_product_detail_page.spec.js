const {test, expect} = require("@playwright/test");
const HomePage = require("../pages/HomePage");
const SignUpOrLoginPage = require("../pages/SignUpOrLoginPage");
const ProductsPage = require("../pages/ProductsPage");

test("Test Case 8: Verify All Products and product detail page", async({page}) => {
    const home = new HomePage(page);
    const signup = new SignUpOrLoginPage(page);
    const product = new ProductsPage(page);

    await home.navigate();
    await home.verifyHomePageIsVisible();
    await home.clickProductsButton();

    await product.verifyProductsPage();
    await product.clickViewProduct();
    await product.verifyProductDetailsPage();
    await product.verifyProductDetails();
});