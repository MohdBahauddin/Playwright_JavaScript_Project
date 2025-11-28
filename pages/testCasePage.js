const { expect } = require("@playwright/test");
class testCasePage{
    constructor(page){
        this.page = page;
    }

    async verifyTestCasePage(){
        await expect(this.page).toHaveTitle("Automation Practice Website for UI Testing - Test Cases");
        console.log("TestCase Page verified");
    }
}
module.exports = testCasePage;