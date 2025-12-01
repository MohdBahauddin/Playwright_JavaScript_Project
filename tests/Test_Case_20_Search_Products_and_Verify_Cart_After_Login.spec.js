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

    await product.verifyProductsPage();
    await product.searchProducts1("Tshirt");
    await product.verifyAllProductsIsVisible();
    await product.addToCart("2");
    await product.addToCart("28");
    await product.addToCart("29");
    await product.addToCart("30");
    await product.addToCart("31");
    await product.addToCart("43");

    await home.clickCartButton();
    await cart.verifyCartsPage();
    

    await home.clickLogin();

    await signup.fillLoginCredentials("johnvicks58@gmail.com", "Abcde@12");

    await home.clickCartButton();
    
    await cart.verifyAllProductsInCart();
    
});
