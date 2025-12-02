const {expect} = require("@playwright/test");

class PaymentsPage{
    constructor(page){
        this.page = page;

        this.cardName = page.locator("//input[@data-qa='name-on-card']");
        this.cardNumber = page.locator("//input[@data-qa='card-number']");
        this.cvc = page.locator("//input[@data-qa='cvc']");
        this.expiryMonth = page.locator("//input[@data-qa='expiry-month']");
        this.expiryYear = page.locator("//input[@data-qa='expiry-year']");
        this.payButton = page.locator("//button[@data-qa='pay-button']");
        this.orderConfirmedText = page.locator("//p[text()='Congratulations! Your order has been confirmed!']");
        this.successMessage = page.getByText("Your order has been placed successfully!");
        this.downloadInvoice = page.locator("//a[@href='/download_invoice/500']")
    }

    async fillPaymentDetails(name, number, cvc, month, year){
        await this.cardName.fill(name);
        await this.cardNumber.fill(number);
        await this.cvc.fill(cvc);
        await this.expiryMonth.fill(month);
        await this.expiryYear.fill(year);
        await this.payButton.click();
    }

    async verifyOrderPlaced(){
        await expect(this.orderConfirmedText).toBeVisible();
        console.log("Congratulations! Your order has been confirmed!");
    }

    async clickDownloadInvoice(){
        await this.downloadInvoice.click();
    }
    
}
module.exports = PaymentsPage;