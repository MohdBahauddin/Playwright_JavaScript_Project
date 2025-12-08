import {test, expect} from "@playwright/test";

test("API 10: POST To Verify Login with invalid details", async ({request}) => {

    const response = await request.post("https://automationexercise.com/api/verifyLogin",{
        form:{
            email: "johnvicks58@gmail.com",
            password: "Abcde@12"
        }
    });

    const body = await response.json();
    console.log(body);

    expect(body.responseCode).toBe(404);
    expect(body.message).toContain("User not found!");
});