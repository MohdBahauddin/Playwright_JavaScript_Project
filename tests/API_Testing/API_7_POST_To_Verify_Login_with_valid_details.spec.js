import {test, expect} from "@playwright/test";

test("API 7: POST To Verify Login with valid details", async ({request}) => {

    const response = await request.post("https://automationexercise.com/api/verifyLogin",{
        form:{
            email: "johnvicks58@gmail.com",
            password: "Abcde@12"
        }
    });

    expect(response.status()).toBe(200);
    const body = await response.json();
    console.log(body);

    expect(body.message).toContain("User exists!");
});