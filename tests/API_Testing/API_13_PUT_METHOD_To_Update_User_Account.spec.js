const { test, expect } = require('@playwright/test');

test('Update account details API', async ({ request }) => {

  // 1️⃣ Create Account (same data as UI test)
  const createResponse = await request.post(
    'https://automationexercise.com/api/createAccount',
    {
      form: {
        name: 'John Wick',
        email: 'johnvicks8@gmail.com',
        password: 'Abcde@12',
        title: 'Mr',
        birth_date: '10',
        birth_month: '05',
        birth_year: '1995',
        firstname: 'John',
        lastname: 'Wick',
        company: 'CApgemini',
        address1: 'Kundalahalli',
        address2: 'Whitefield',
        country: 'India',
        zipcode: '560037',
        state: 'Karnataka',
        city: 'Bengaluru',
        mobile_number: '8081310985'
      }
    }
  );

  expect(createResponse.status()).toBe(200);

  // 2️⃣ Update Account
  const updateResponse = await request.put(
    'https://automationexercise.com/api/updateAccount',
    {
      form: {
        name: 'John Wick Updated',
        email: 'johnvicks8@gmail.com',
        password: 'Abcde@12',
        title: 'Mr',
        birth_date: '10',
        birth_month: '05',
        birth_year: '1995',
        firstname: 'John',
        lastname: 'Wick',
        company: 'Capgemini Updated',
        address1: 'Kundalahalli Updated',
        address2: 'Whitefield',
        country: 'India',
        zipcode: '560037',
        state: 'Karnataka',
        city: 'Bengaluru',
        mobile_number: '8081310985'
      }
    }
  );

  expect(updateResponse.status()).toBe(200);

  const responseBody = await updateResponse.json();
  expect(responseBody.message).toBe('User updated!');
});
