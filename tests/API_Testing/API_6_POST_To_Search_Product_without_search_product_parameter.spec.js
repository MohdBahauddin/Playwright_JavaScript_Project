import { test, expect, request } from "@playwright/test";

test("API 6: POST To Search Product without search_product parameter", async () => {
  const apiContext = await request.newContext();

  const response = await apiContext.post(
    "https://automationexercise.com/api/searchProduct",
    { form: {} }
  );

  expect(response.status()).toBe(200);

  const body = await response.json();
  console.log(body);

  expect(body.message).toContain(
    "search_product parameter is missing"
  );

  expect(body.responseCode).toBe(400);
});

