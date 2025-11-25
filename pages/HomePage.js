class HomePage{
    constructor(page){

        this.page = page;

        this.signUpLoginButton = page.locator("a[href='/login']");
    }

    async navigate(){
        await this.page.goto("https://automationexercise.com/");
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

    
}

module.exports = HomePage; 