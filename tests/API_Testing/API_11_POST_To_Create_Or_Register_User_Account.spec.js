import {test,expect} from "@playwright/test";

test("API 11: POST To Create/Register User Account", async ({request}) => {

    const response = await request.post("https://automationexercise.com/api/createAccount",{
        form:{
               name: "Engineer Sahab",
                email: "johnvicks8@gmail.com",
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

    const body = await response.json();
    console.log(body);

    expect(body.responseCode).toBe(201);
    expect(body.message).toContain("User created!")

});

