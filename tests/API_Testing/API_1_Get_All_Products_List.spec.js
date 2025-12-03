import {test, expect} from "@playwright/test";

test("API 1: Get All Products List", async ({request}) =>{

    const response = await request.get("https://automationexercise.com/api/productsList");

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toHaveProperty("products");
    expect(body.products.length).toBeGreaterThan(0);

});