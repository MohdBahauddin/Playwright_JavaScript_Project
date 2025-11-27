const {page, expect} = require("@playwright/test");
class ContactUsPage{

    constructor(page){
        this.page = page;
        
        this.contactUsButton = page.locator("//a[@href='/contact_us']");
        this.getInTouchText = page.locator("//h2[text()='Get In Touch']");
        this.name = page.locator("//input[@data-qa='name']");
        this.email = page.locator("//input[@data-qa='email']");
        this.subject = page.locator("//input[@data-qa='subject']");
        this.message = page.locator("//textarea[@data-qa='message']");
        this.choseFile = page.locator("//input[@type='file']");
        this.submitButton = page.locator("//input[@type='submit']");
        this.successMessage = page.locator("//div[text()='Success! Your details have been submitted successfully.']");
    }

    async clickConatactUsButton(){
        await this.contactUsButton.click();
    }

    async verifyGetInTouchText(){
        await expect(this.getInTouchText).toBeVisible();
        console.log("Get in touch! is visible");
    }

    async fillContactUsForm(name1, email1, subject1, message1){
        await this.name.fill(name1);
        await this.email.fill(email1);
        await this.subject.fill(subject1);
        await this.message.fill(message1);
        await this.choseFile.setInputFiles("Upload_Docs/dsmm-quantumn.pdf");
    }

    async submitForm() {
     // Register alert handler BEFORE the click
        this.page.once("dialog", async dialog => {
            console.log("Alert message: ", dialog.message());
            await dialog.accept();
        });

        // Click submit
        await this.submitButton.click();
    }

    async clickOkAlertMessage(){
        this.page.on("dialog", async dialog => {
        console.log("Alert message: ", dialog.message());
        await dialog.accept();
        });
    }

    async verifySuccessMessage(){
        await expect(this.successMessage.first()).toBeVisible();
        console.log("Success! Your details have been submitted successfully. message is visible");
    }
}

module.exports = ContactUsPage;