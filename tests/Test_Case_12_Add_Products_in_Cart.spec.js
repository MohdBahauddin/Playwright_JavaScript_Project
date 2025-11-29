const {test,expect} = require("@playwright/test");
const HomePage = require("../pages/HomePage");
const ProductsPage = require("../pages/ProductsPage");

test("Test Case 12: Add Products in Cart", async ({page}) => {

    const home = new HomePage(page);
    const product = new ProductsPage(page);

    await home.navigate();
    await home.verifyHomePageIsVisible();
    await home.clickProductsButton();

    await product.addToCart("1");
    await product.addToCart("2");

    await home.clickCartButton();
    await product.verifyCart("1");
    await product.verifyCart("2");

});