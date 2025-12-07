import {test, expect} from "@playwright/test";

test("API 9: DELETE To Verify Login", async ({request}) => {

    const response = await request.delete("https://automationexercise.com/api/verifyLogin");

    const body = await response.json();
    console.log(body);

    expect(body.responseCode).toBe(405);
    expect(body.message).toContain("not supported");

});