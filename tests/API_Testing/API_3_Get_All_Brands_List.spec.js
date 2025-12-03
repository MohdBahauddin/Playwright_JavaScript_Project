import {test, expect} from "@playwright/test";

test("API 3: Get All Brands List", async ({request}) => {

    const response = await request.get("https://automationexercise.com/api/brandsList");

    expect(response.status()).toBe(200);

    const body = await response.json();
    console.log(body);
    expect(body).toHaveProperty('brands');
    expect(body.brands.length).toBeGreaterThan(0);

});