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

    async verifySearchedProduct(){
        await expect(this.menTshirt.first()).toBeVisible();
        console.log("Searched product is visible");
    }
}
module.exports = ProductsPage;