class SignUpOrLoginPage{

    constructor(page){

        this.page = page;

        this.signupName = page.locator("input[data-qa='signup-name']");
        this.signupEmail = page.locator("input[data-qa='signup-email']");
        this.signupBtn = page.locator("button[data-qa='signup-button']");
        this.genderMale = page.locator("#id_gender1");
        this.password = page.locator("#password");
        this.days = page.locator("#days");
        this.months = page.locator("#months");
        this.years = page.locator("#years");
        this.newsletter = page.locator("#newsletter");
        this.offers = page.locator("#optin");

        this.firstName = page.locator("#first_name");
        this.lastName = page.locator("#last_name");
        this.company = page.locator("#company");
        this.address1 = page.locator("#address1");
        this.address2 = page.locator("#address2");
        this.state = page.locator("#state");
        this.city = page.locator("#city");
        this.zipcode = page.locator("#zipcode");
        this.mobile = page.locator("#mobile_number");
        this.country = page.locator("#country");

        this.createAccountBtn = page.locator("button[data-qa='create-account']");
        this.accountCreatedText = page.locator("b:has-text('Account Created!')");
    }

    async signupCredentials(name, email){
        await this.signupName.fill(name);
        await this.signupEmail.fill(email);
        await this.signupBtn.click();
    }

    async fillSignupDetails(firstName, lastName, password, company, address1, address2, state, city, country, zipCode, mobileNumber){
        await this.genderMale.check();
        await this.password.fill(password);
        await this.days.selectOption("20");
        await this.months.selectOption("July");
        await this.years.selectOption("2000");

        await this.newsletter.check();
        await this.offers.check();

        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.company.fill(company);
        await this.address1.fill(address1);
        await this.address2.fill(address2);
        await this.country.selectOption(country);
        await this.state.fill(state);
        await this.city.fill(city);
        await this.zipcode.fill(zipCode);
        await this.mobile.fill(mobileNumber);

        await this.createAccountBtn.click();
    }

    async verifyAccountCreated() {
        const verifyText = await this.accountCreatedText.innerText();
        if(verifyText == "ACCOUNT CREATED!"){
            console.log("Account created successfully!");
        }
        else{
            console.log("Account creatiion failed!");
        }
    }

}
module.exports = SignUpOrLoginPage;