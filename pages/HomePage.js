class HomePage{
    constructor(page){

        this.page = page;

        this.signUpLoginButton = page.locator("a[href='/login']");
    }

    async navigate(){
        await this.page.goto("https://automationexercise.com/");
    }

    async clickLogin(){
        await this.signUpLoginButton.click();
    }  
    
}

module.exports = HomePage; 