import {test, expect} from "@playwright/test";

test("API 2: POST To All Products List", async ({request}) => {

    const response = await request.post("https://automationexercise.com/api/productsList");

    expect(response.status()).toBe(405);
    const body = await response.json();

    expect(body.message).toContain('not supported');
    
});