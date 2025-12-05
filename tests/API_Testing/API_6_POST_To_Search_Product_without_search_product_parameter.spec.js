import { test, expect, request } from "@playwright/test";

test("API 6: POST To Search Product without search_product parameter", async () => {
  const apiContext = await request.newContext();

  const response = await apiContext.post(
    "https://automationexercise.com/api/searchProduct",
    { form: {} }
  );

  // API returns 200 even on error
  expect(response.status()).toBe(200);

  const body = await response.json();
  console.log(body);

  // Assert the actual API message
  expect(body.message).toContain(
    "search_product parameter is missing"
  );

  // Optional: validate responseCode
  expect(body.responseCode).toBe(400);
});

