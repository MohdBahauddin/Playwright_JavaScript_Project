import {test, expect} from "@playwright/test";

test("API 4: PUT To All Brands List", async ({request}) => {

    const response = await request.put("https://automationexercise.com/api/brandsList");

    // expect(response.status()).toBe(405);

    const body = await response.json();
    console.log(body);
    expect(body.message).toContain('not supported');

});