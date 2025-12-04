import {test, expect} from "@playwright/test";

test("API 5: POST To Search Product", async ({request}) => {

    const response = await request.post("https://automationexercise.com/api/searchProduct",{
            form:{
                search_product: "tshirt"
            }
        }
    );

    expect(response.status()).toBe(200);

    const body = await response.json();
    console.log(body);

    expect(body).toHaveProperty('products');
    expect(body.products.length).toBeGreaterThan(0);


});