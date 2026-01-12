const { test, expect } = require('@playwright/test');

test('Get user details by email API', async ({ request }) => {
  const response = await request.get(
    'https://automationexercise.com/api/getUserDetailByEmail',
    {
      params: {
        email: 'johnvicks8@gmail.com'
      }
    }
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  // Defensive assertions
  expect(body).toHaveProperty('user');
  expect(body.user.email).toBe('johnvicks8@gmail.com');

  // Optional fields – check presence before asserting
  if (body.user.firstname) {
    expect(body.user.firstname).toBe('John');
  }
  if (body.user.lastname) {
    expect(body.user.lastname).toBe('Wick');
  }
});
