const {expect} = require("@playwright/test");
class HomePage{
    constructor(page){

        this.page = page;

        this.signUpLoginButton = page.locator("a[href='/login']");
        this.testCasesButton = page.locator("//a[@href='/test_cases']");
        this.productsButton = page.locator("//a[@href='/products']");
        this.subscriptionText = page.locator("//h2[text()='Subscription']");
        this.sucscriptionEmail = page.locator("#susbscribe_email");
        this.subscriptionButton = page.locator("#subscribe");
        this.subscriptionSuccessfullMessage = page.getByText("You have been successfully subscribed!");
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
        if(str == "Automation Exercise - Signup / Login"){
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
    
}

module.exports = HomePage; 