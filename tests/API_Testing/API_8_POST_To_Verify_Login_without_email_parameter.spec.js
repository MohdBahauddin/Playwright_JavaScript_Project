import {test, expect} from "@playwright/test";

test("API 8: POST To Verify Login without email parameter", async ({request}) => {

    const response = await request.post("https://automationexercise.com/api/verifyLogin",{
        form:{
            password: "Abcde@12"
        }
    });

    const body = await response.json();
    console.log(body);

    expect(body.responseCode).toBe(400);
    expect(body.message).toContain("email or password");
});