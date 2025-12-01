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

    getProductIds(productId){
        return this.page.locator(`//a[@href='/product_details/${productId}']`);
    }

    async verifyAllProductsInCart(){
        const productIds = [2,28,29,30,31,43];

        for(const id of productIds){
            await expect(this.getProductIds(id)).toBeVisible();
            console.log(`Product Id ${id} is visible`);
        }
    }

    async verifyAllProductsInCart1(){
        const productIds = [4,5,6,1,2,3];

        for(const id of productIds){
            await expect(this.getProductIds(id)).toBeVisible();
            console.log(`Product Id ${id} is visible`);
        }
    }
}
module.exports = CartsPaga;