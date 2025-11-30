const {expect} = require("@playwright/test");
class CartsPaga{
    constructor(page) {
        this.page = page;
        
        this.cartPageText = page.locator("//li[text()='Shopping Cart']");
        this.clickProceedToCheckoutButton = page.locator("//a[text()='Proceed To Checkout']");
        this.clickContinueButton = page.locator("//button[text()='Continue On Cart']");
        this.addressDetails = page.locator("//h2[text()='Address Details']");
        this.description = page.locator("//textarea[@class='form-control']");
        this.placeOrderButton = page.locator("//a[text()='Place Order']");
        this.xButton = page.locator("//a[@data-product-id='1']");
        this.emptyCartText = page.getByText("Cart is empty!");
    }

    async verifyCartsPage(){
        await expect(this.cartPageText).toBeVisible();
        console.log("CartsPage is visible");
    }

    async clickProceedToCheckout(){
        await this.clickProceedToCheckoutButton.waitFor({ state: "visible" });
        await this.clickProceedToCheckoutButton.click();
    }

    async clickContinue(){
        await this.clickContinueButton.waitFor({state:"visible"});
        await this.clickContinueButton.click();
    }

    async verifyAddressDetails(){
        await expect(this.addressDetails).toBeVisible();
        console.log("Address details verified");
    }

    async fillDescription(){
        await this.description.fill("This is a test description");
        await this.placeOrderButton.click();
    }

    async removeProductFromCart(){
        await this.xButton.click();
    }

    async verifyCartIsEmpty(){
        await expect(this.emptyCartText).toBeVisible();
        console.log("Cart is empty!");
    }
}
module.exports = CartsPaga;