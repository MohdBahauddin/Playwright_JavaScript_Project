const{expect} = require("@playwright/test");

class ProductsPage{
    constructor(page) {
        this.page = page;

        this.allProductsText = page.locator("//h2[text()='All Products']");
        this.viewProduct = page.locator("//a[@href='/product_details/1']");
        this.productName = page.locator("//h2[text()='Blue Top']");
        this.productCategory = page.locator("//p[text()='Category: Women > Tops']");
        this.priceOfProduct = page.locator("//span[text()='Rs. 500']");
        this.conditioOfProduct = page.locator("//b[text()='Condition:']");
        this.brandOfProduct = page.locator("//b[text()='Brand:']");
        this.availabilityOfProduct = page.locator("//b[text()='Availability:']");
        this.searchProduct = page.locator("#search_product");
        this.submitButton = page.locator("#submit_search");
        this.menTshirt = page.locator("//p[text()='Men Tshirt']");
        this.productImgae = page.locator("//img[@src='/static/images/home/logo.png']");
        this.productAddToCartButton = page.locator("//a[@data-product-id='1']");
        this.continueShopping = page.locator("//button[@class='btn btn-success close-modal btn-block']");
        this.productQuantity = page.locator("#quantity");
        this.addToCartButtton = page.locator("//button[@class='btn btn-default cart']");
        this.cartQuantity = page.locator("//button[text()='4']");
        this.brands = page.getByText("Brands");
        this.allProducts = page.getByText("Searched Products");
        this.reviewName = page.locator("#name");
        this.reviewEmail = page.locator("#email");
        this.reviewText = page.locator("#review");
        this.reviewMessage = page.getByText("Thank you for your review.");
        this.submitReviewButton = page.locator("#button-review");

    }

    async verifyProductsPage(){
        await expect(this.allProductsText).toBeVisible();
        console.log("All Products is visible");
    }

    async clickViewProduct(){
        await this.viewProduct.click();
    }

    async verifyProductDetailsPage(){
        await expect(this.page).toHaveTitle("Automation Exercise - Product Details");
        console.log("Product details page is verified");
    }

    async verifyProductDetails(){
        await expect(this.productName).toBeVisible();
        console.log("Product name is visible");
        await expect(this.productCategory).toBeVisible();
        console.log("Category of product is visible");
        await expect(this.priceOfProduct).toBeVisible();
        console.log("Price of the product is visible");
        await expect(this.availabilityOfProduct).toBeVisible();
        console.log("Availability of product is visible");  
        await expect(this.conditioOfProduct).toBeVisible();
        console.log("Condition of the product is visible");
        await expect(this.brandOfProduct).toBeVisible();
        console.log("Brand of the product is visible");
    }

    async searchProducts(){
        await this.searchProduct.fill("Men Tshirt");
        await this.submitButton.click();
    }

    async searchProducts1(productName){
        await this.searchProduct.fill(productName);
        await this.submitButton.click();
    }

    async verifySearchedProduct(){
        await expect(this.menTshirt.first()).toBeVisible();
        console.log("Searched product is visible");
    }

    getAddToCartButton(productId) {
        return this.page.locator(`//a[@data-product-id='${productId}']`);
    }

    getProductPicture(productId){
        return this.page.locator(`//img[@src='/get_product_picture/${productId}']`);
    }

    getProductInCart(productId){
        return this.page.locator(`//a[@href='/product_details/${productId}']`);
    }


    async addToCart(productId){
        await this.getProductPicture(productId).hover();
        await this.getAddToCartButton(productId).first().click();
        await this.continueShopping.click();
    }


    async verifyCart(productId){
        await expect(this.getProductInCart(productId)).toBeVisible();
        console.log(`Cart is verified for prodcut ID '${productId}'`);
    }

    async increaseProductQuantity(){
        await this.productQuantity.fill("");
        await this.productQuantity.fill("4");
        await this.addToCartButtton.click();
        await this.continueShopping.click()
    }

    async verifyCartQuantity(){
        await expect(this.cartQuantity).toBeVisible();
        console.log("Cart Quantity is verified");
    }

    async verifyBrandIsVisible(){
        await expect(this.brands).toHaveText("Brands");
        console.log("Brands is is visible");
    }

    getBrandName(brandName){
        return this.page.locator(`//a[@href='/brand_products/${brandName}']`);
    }

    async clickBrandName(brandName){
        await this.getBrandName(brandName).click();
    }

    getBrandProductName(name){
        return this.page.getByText(`Brand - ${name} Products`)
    }

    async verifyBrandProductName(name){
        await expect(this.getBrandProductName(name)).toHaveText(`Brand - ${name} Products`);
        console.log(`Brand - ${name} Products is verified`);
    }

    async verifyAllProductsIsVisible(){
        await expect(this.allProducts).toBeVisible();
        console.log("Searched Products are visible");
    }

    async fillProductReview(name, email, review){
        
        await this.reviewName.fill(name);
        await this.reviewEmail.fill(email);
        await this.reviewText.fill(review);
        await this.submitReviewButton.click();
    }

    async verifyReviewMessage(){
        await expect(this.reviewMessage).toBeVisible();
        console.log("Thank you for your review. message is visible");

    }
}
module.exports = ProductsPage;