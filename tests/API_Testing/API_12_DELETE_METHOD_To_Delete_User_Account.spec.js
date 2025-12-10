import { test, expect } from "@playwright/test";

test("API 12: DELETE To Delete User Account", async ({ request }) => {

    const email = `user_${Date.now()}@mail.com`;

    await request.post("https://automationexercise.com/api/createAccount", {
        form: {
            name: "Engineer Sahab",
            email: email,
            password: "Abcde@12",
            title: "Mr",
            birth_date: "12",
            birth_month: "05",
            birth_year: "1999",
            firstname: "Engineer",
            lastname: "Sahab",
            company: "Capgemini",
            address1: "Bangalore Street",
            address2: "Tech Park Road",
            country: "India",
            zipcode: "560001",
            state: "Karnataka",
            city: "Bangalore",
            mobile_number: "9876543210"
        }
    });

    const response = await request.delete(
        "https://automationexercise.com/api/deleteAccount",
        {
            form: {
                email: email,
                password: "Abcde@12"
            }
        }
    );

    const body = await response.json();
    console.log(body);

    //
    expect(body.responseCode).toBe(200);
    expect(body.message).toContain("Account deleted!");
});