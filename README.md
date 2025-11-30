🟩 Playwright UI Automation Framework (JavaScript)

A scalable and maintainable UI Automation Framework built using Playwright, following Page Object Model (POM) architecture.
This framework automates real end-to-end test scenarios from AutomationExercise.com, including login, signup, forms, cart operations, and product validations.

🚀 Features:
    ✅ Built using Playwright Test Runner
    ✅ Page Object Model (POM) architecture
    ✅ Allure Reporting integrated
    ✅ Modular, reusable, and scalable components
    ✅ File upload, alert handling, waits, screenshots
    ✅ Test data isolation and utilities
    ✅ Clean folder structure for maintainability
    ✅ Easy to extend (26 test cases planned)

📁 Project Structure:

        playwright-project/
        │
        ├── pages/
        │   ├── HomePage.js
        │   ├── ContactUsPage.js
        │   ├── LoginPage.js
        │   ├── ProductsPage.js
        │   └── ...more pages
        │
        ├── tests/
        │   ├── TC01_VerifyHomePage.spec.js
        │   ├── TC02_SignUpUser.spec.js
        │   ├── TC06_ContactUsForm.spec.js
        │   └── ...more test cases
        │
        ├── test-data/
        │   └── sample.txt
        │
        ├── allure-results/
        ├── playwright.config.js
        └── README.md
        
🔧 Tech Stack:
        Component	Technology
        UI Automation	Playwright (JavaScript)
        Architecture	Page Object Model (POM)
        Reporting	Allure Reports
        Assertions	Playwright Test Assertions
        File Upload	Playwright File Handling
        Test Execution	Playwright Test Runner
        Version Control	Git / GitHub
        🧪 Automated Test Scenarios
        
        Currently automated: 6/26 test cases
        (Actively extending test coverage)
        
 ## Automation Exercise – 26 Test Cases

        1. **Test Case 1:** Register User  
        2. **Test Case 2:** Login User with correct email and password  
        3. **Test Case 3:** Login User with incorrect email and password  
        4. **Test Case 4:** Logout User  
        5. **Test Case 5:** Register User with existing email  
        6. **Test Case 6:** Contact Us Form  
        7. **Test Case 7:** Verify Test Cases Page  
        8. **Test Case 8:** Verify All Products and product detail page  
        9. **Test Case 9:** Search Product  
        10. **Test Case 10:** Verify Subscription in home page  
        11. **Test Case 11:** Verify Subscription in Cart page  
        12. **Test Case 12:** Add Products in Cart  
        13. **Test Case 13:** Verify Product quantity in Cart  
        14. **Test Case 14:** Place Order: Register while Checkout  
        15. **Test Case 15:** Place Order: Register before Checkout  
        16. **Test Case 16:** Place Order: Login before Checkout  
        17. **Test Case 17:** Remove Products From Cart  
        18. **Test Case 18:** View Category Products  
        19. **Test Case 19:** View & Cart Brand Products  
        20. **Test Case 20:** Search Products and Verify Cart After Login  
        21. **Test Case 21:** Add review on product  
        22. **Test Case 22:** Add to cart from Recommended items  
        23. **Test Case 23:** Verify address details in checkout page  
        24. **Test Case 24:** Download Invoice after purchase order  
        25. **Test Case 25:** Verify Scroll Up using Arrow button and Scroll Down functionality  
        26. **Test Case 26:** Verify Scroll Up without Arrow button and Scroll Down functionality  


🛠️ Installation & Setup:
      1️⃣ Clone the repository:
          git clone https://github.com/YourUserName/Playwright_Automation.git

      2️⃣ Install dependencies:
          npm install

      3️⃣ Install Browsers:
          npx playwright install

      ▶️ How to Run Tests:
          npx playwright test

          Run a specific test:
              npx playwright test tests/TC06_ContactUsForm.spec.js

          Run in headed mode:
              npx playwright test --headed

          To debug:
              npx playwright test --debug

📊 Allure Report Integration:

    Generate Allure Results (automatically created during test run).
        npx playwright test

    Generate HTML Report:
        allure generate allure-results --clean -o allure-report

    Open the Report:
        allure open allure-report


📸 Screenshots & Failure Traces

    Framework captures:
    Screenshot on failure
    Traces for debugging
    Video recording (optional)
    
    Enabled via:
        use: {
          screenshot: "only-on-failure",
          trace: "retain-on-failure"
        }

💡 Key Highlights

    Designed with clean code practices.
    No duplicate locators — everything stored in POM.
    Easy to onboard new test cases.
    Works in CI/CD (GitHub Actions, Jenkins-ready).
    Beginner-friendly yet production-grade architecture.

🤝 Contributions

    Pull requests and suggestions are welcome!
    Feel free to fork the repo and submit improvements.

If you’d like to connect or discuss automation, reach out:

    Name: Mohammad Bahauddin Haque
    Role: SDET/QA Automation Engineer
    Skills: Playwright | JavaScript | Selenium |Jva | POM | Allure | TestNG
    Linkedin: https://www.linkedin.com/in/mbahauddin/

If you want, I can also:

    ✔ Add images (screenshots of Allure reports).
    ✔ Add badges (test status, GitHub stars, version, etc.).
    ✔ Write a LinkedIn post to announce your project.
    ✔ Prepare a README for Selenium project too.

Just say: “Add badges” or “Write LinkedIn post.”









  

    
