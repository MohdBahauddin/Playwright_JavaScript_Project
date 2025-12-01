const {test,expect} = require("@playwright/test");

const HomePage = require("../pages/HomePage.js");
const ProductsPage = require("../pages/ProductsPage.js");

test("Test Case 19: View & Cart Brand Products", async ({page}) => {

    const home = new HomePage(page);
    const product = new ProductsPage(page);

    await home.navigate();
    await home.verifyHomePageIsVisible();
    await home.clickProductsButton();

    await product.verifyBrandIsVisible();
    await product.clickBrandName("Polo");
    await product.verifyBrandProductName("Polo");
    await product.clickBrandName("H&M");
    await product.verifyBrandProductName("H&M");


});