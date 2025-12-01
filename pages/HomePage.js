const {expect} = require("@playwright/test");
class HomePage{
    constructor(page){

        this.page = page;

        this.signUpLoginButton = page.getByRole('link', { name: 'Signup / Login' })
        this.testCasesButton = page.locator("//a[@href='/test_cases']");
        this.productsButton = page.locator("//a[@href='/products']");
        this.subscriptionText = page.locator("//h2[text()='Subscription']");
        this.sucscriptionEmail = page.locator("#susbscribe_email");
        this.subscriptionButton = page.locator("#subscribe");
        this.subscriptionSuccessfullMessage = page.getByText("You have been successfully subscribed!");
        this.cartButton = page.locator("//a[@href='/view_cart']");
        this.deleteAccountButton = page.locator("//a[@href='/delete_account']");
        this.accountDeletedText = page.locator("//b[text()='Account Deleted!']");
        this.category = page.getByText("Category");
        this.topProducts = page.getByText("Women - Dress Products");
        this.continueButton = page.getByText("Continue Shopping");
        this.rightArrow = page.locator("//i[@class='fa fa-angle-right']");
        this.upArrow = page.locator("//i[@class='fa fa-angle-up']");
        this.fullFledgeText = page.getByText("Full-Fledged practice website for Automation Engineers");
        
    }

    async navigate(){
        await this.page.goto("https://automationexercise.com/");
    }

    async clickTestCaseButton(){
        await this.testCasesButton.first().click();
    }

    async clickProductsButton(){
        await this.productsButton.click();
    }

    async verifyHomePageIsVisible(){
        const str = await this.page.title();
        if(str == "Automation Exercise"){
            console.log("Homepage is verified");
        }
        else{
            console.log("Homepage is not verified");
        }
    }

    async clickLogin(){
        await this.signUpLoginButton.click();
    }
    
    async verifytextSubscription(){
        await expect(this.subscriptionText).toBeVisible();
        console.log("Subscription text is visible");
    }

    async fillSusbcriptionEmail(email){
        await this.sucscriptionEmail.fill(email);
        await this.subscriptionButton.click();
    }

    async verifySubscriptionMessage(){
        await expect(this.subscriptionSuccessfullMessage).toBeVisible();
        console.log("You have been successfully subscribed! message is visible");
    }

    async clickCartButton(){
        await this.cartButton.first().click();
    }

    async deleteAccount(){
        await this.deleteAccountButton.click();
    }

    async verifyDeleteAccount(){
        await expect(this.accountDeletedText).toBeVisible();
        console.log("Account deleted successfully!");
    }

    async verifyCategory(){
        await expect(this.category).toBeVisible();
        console.log("Category is visible");
    }
    
    getCategory(category){
        return this.page.locator(`//a[@href='#${category}']`);
    }

    async clickCategory(category){
        await this.getCategory(category).click();
    }

    getSubCategory(subCategory){
        return this.page.locator(`//a[@href='/category_products/${subCategory}']`);
    }

    async clickSubCategory(subCategory){
        await this.getSubCategory(subCategory).click();
    }

    async VerifyCategoryPage(){
        await expect(this.topProducts).toBeVisible();
        console.log("WOMEN - TOPS PRODUCTS are visible");
    }

    getrecommendedProduct(productId){
        return this.page.locator(`//div[@id='recommended-item-carousel']//a[@data-product-id='${productId}']`);
    }

    async addRecommendedProductToCart(){
        const productIds = [4,5,6];
        const productIds1 = [1,2,3];
        for(const id of productIds)
        {
            await this.getrecommendedProduct(id).first().click();
            await this.continueButton.click();
        }  
        
        await this.rightArrow.last().click();

        for(const id of productIds1)
        {
            await this.getrecommendedProduct(id).first().click();
            await this.continueButton.click();
        }   
    }

    async clickUpArrow(){
        await this.upArrow.click();
    }

    async verifyFullFledgeText(){
        await expect(this.fullFledgeText.first()).toBeVisible();
        console.log("Full-Fledged practice website for Automation Engineers is visible");
    }

    async scrollPage() {
        await this.page.mouse.wheel(0, 500);
    }

}

module.exports = HomePage; 