<!-- .slide: class="transition" -->
# Module 4: End-to-End (E2E) Testing
## User Journey Validation with Playwright

##--##

<!-- .slide: -->
# **What is End-to-End (E2E) Testing?**

## **Testing Complete User Workflows**
<br>

E2E tests simulate **real user interactions** with your application from start to finish, validating entire workflows.

### **E2E Testing Characteristics**
- **Browser automation**: Real browsers (Chrome, Firefox, Safari)
- **User perspective**: Clicks, form inputs, navigation
- **Full stack**: Frontend, backend, database all working together
- **Critical paths**: Focus on most important user journeys

<br>

### **When to Use E2E Tests**
- ✅ User authentication flows (login, registration)
- ✅ E-commerce checkout processes
- ✅ Multi-step forms and wizards
- ✅ Critical business workflows
- ⚠️ NOT for testing every feature (too slow/expensive)

Notes:
- E2E tests are the slowest and most expensive tests to write and maintain
- Use them sparingly for critical user paths
- They sit at the top of the test pyramid (fewest tests)

##--##

<!-- .slide: -->
# **Playwright: Modern E2E Testing**

## **Why Playwright?**
<br>

### **Key Features**
- **Multi-browser support**: Chromium, Firefox, WebKit (Safari)
- **Auto-wait**: Automatically waits for elements to be ready
- **Parallel execution**: Run tests concurrently for speed
- **Debugging tools**: Screenshot, video, trace viewer
- **Mobile emulation**: Test responsive designs

<br>

### **Playwright vs Alternatives**
| Feature | Playwright | Selenium | Cypress |
|---------|-----------|----------|---------|
| Speed | Fast | Slow | Fast |
| Multi-browser | ✅ All major | ✅ All major | ⚠️ Limited |
| Auto-wait | ✅ Built-in | ❌ Manual | ✅ Built-in |
| Parallel | ✅ Yes | ⚠️ Limited | ⚠️ Limited |

Notes:
- Playwright is Microsoft's modern E2E testing framework
- Rapidly gaining adoption due to excellent developer experience
- Strong AI/Copilot integration for test generation

##--##

<!-- .slide: -->
# **E2E Test Workflow**

## **Complete User Journey Testing**
<br>

### **Typical E2E Test Structure**
1. **Setup**: Navigate to starting page, authenticate if needed
2. **Action**: Perform user interactions (click, type, select)
3. **Verification**: Assert expected outcomes (page content, URLs, state)
4. **Teardown**: Clean up test data, logout

<br>

E2E tests follow realistic user flows from start to finish as complete, independent journeys.

Notes:
- E2E tests follow realistic user flows from start to finish
- Each test should be a complete, independent user journey
- Focus on happy paths and critical error scenarios
- The visual on the next slide illustrates the complete E2E test flow

##--##

<!-- .slide: -->

<img src="./assets/images/module-4/e2e-workflow.svg" alt="User journey E2E test flow" style="width:100%; height:auto; display:block;">

##--##

<!-- .slide: -->
# **AI-Assisted E2E Test Generation**

## **Using AI with Playwright**
<br>

### **Effective Prompts for E2E Tests**
```
"Generate a Playwright E2E test for user login flow:
1. Navigate to /login page
2. Enter email and password
3. Click login button
4. Verify redirected to /dashboard
5. Verify welcome message shows user's name

Include test for invalid credentials showing error message.
Use Playwright test framework with page object pattern."
```

### **AI Benefits for E2E Testing**
- 🤖 **Selector generation**: Finds robust element selectors
- 🤖 **Interaction patterns**: Suggests proper wait strategies
- 🤖 **Assertion recommendations**: Identifies what to verify
- 🤖 **Error scenario coverage**: Generates failure case tests

Notes:
- E2E tests are complex - AI significantly speeds up writing them
- Human expertise crucial for making tests maintainable
- Bad E2E tests are worse than no tests (flaky, slow, brittle)

##--##

<!-- .slide: -->
# **AI-Assisted E2E Test Generation**

## **Using AI with Playwright**
<br>

### **⚠️ Critical Human Validation**
- Verify selectors are stable (not brittle)
- Confirm waits are appropriate (not race conditions)
- Validate test data doesn't conflict across tests
- Ensure tests are truly independent

##--##

<!-- .slide: class="with-code"-->
# **Playwright Test Example**

## **Real-World E2E Test**
<br>

```typescript
import { test, expect } from '@playwright/test';

test.describe('User Login Flow', () => {
  test('should login successfully with valid credentials', async ({ page }) => {
    // Navigate to login page
    await page.goto('/login');
    
    // Fill login form
    await page.fill('input[name="email"]', 'user@example.com');
    await page.fill('input[name="password"]', 'SecurePass123!');
    
    // Submit form
    await page.click('button[type="submit"]');
    
    // Verify successful login
    await expect(page).toHaveURL('/dashboard');
    await expect(page.locator('.welcome-message'))
      .toContainText('Welcome back, User!');
  });

  test('should show error for invalid credentials', async ({ page }) => {
    await page.goto('/login');
    await page.fill('input[name="email"]', 'wrong@example.com');
    await page.fill('input[name="password"]', 'wrongpass');
    await page.click('button[type="submit"]');
    
    // Verify error message
    await expect(page.locator('.error-message'))
      .toContainText('Invalid email or password');
    await expect(page).toHaveURL('/login'); // Still on login page
  });
});
```

Notes:
- Playwright's API is clean and intuitive
- Auto-waiting eliminates most timing issues
- Tests read like user actions

##--##

<!-- .slide: -->
# **E2E Testing Best Practices**

## **Writing Maintainable E2E Tests**
<br>

### **✅ DO**
- **Test critical paths**: Focus on most important user journeys
- **Use stable selectors**: data-testid attributes, not CSS classes
- **Keep tests independent**: No shared state between tests
- **Use page objects**: Encapsulate page interactions
- **Run in CI/CD**: Automate execution on every deployment

### **❌ DON'T**
- **Test every feature**: E2E tests are expensive (use unit/integration instead)
- **Use brittle selectors**: Avoid complex CSS that changes frequently
- **Share test data**: Causes flaky tests
- **Ignore flakiness**: Fix flaky tests immediately or delete them
- **Skip local testing**: Always run E2E tests locally before CI

Notes:
- E2E tests should be your last line of defense, not your first
- Quality over quantity - 10 solid E2E tests beat 100 flaky ones
- Invest time in making them stable and maintainable

##--##

<!-- .slide: -->
# **E2E Testing Best Practices**

## **Writing Maintainable E2E Tests**
<br>

### **🎯 E2E Testing Anti-Patterns**
- Testing implementation details (internal state)
- Over-relying on E2E tests (inverted test pyramid)
- Not using proper waits (causing race conditions)
- Sharing authentication state incorrectly

##--##

<!-- .slide: -->
# **Complete Test Pyramid with AI**

## **Balancing Test Types**
<br>

### **Test Strategy by Level**

| Level | Purpose | AI Assistance | Count |
|-------|---------|---------------|-------|
| **E2E** | User journeys | Generate user flows, selectors | ~10 tests |
| **Integration** | Component interactions | Setup code, data flows | ~30 tests |
| **Unit** | Individual functions | Test cases, edge cases | ~100+ tests |

<br>

### **AI-Powered Testing Workflow**
1. **Unit**: AI generates comprehensive test cases for functions
2. **Integration**: AI suggests component interaction scenarios
3. **E2E**: AI creates complete user journey tests
4. **Human**: Reviews, validates, maintains all test levels

<br>


Notes:
- The test pyramid remains important even with AI assistance
- AI makes it faster to write tests at all levels
- Don't let AI convenience lead to inverted pyramid (too many E2E tests)
- Balance speed, coverage, and maintainability

##--##

<!-- .slide: class="exercice" --> 
# Exercise 4: End-to-End Testing
## Lab 43

<br>

### 👉🏾 Follow **instructions** in

### `labs/lab-43-integration-quality/README.md`

Notes:
- Follow the instructions in the lab README.md for Exercise 2: E2E Testing.
- Focus on Playwright tests simulating complete user workflows.

##--##

<!-- .slide: class="exercice" -->
# Exercise 4: End-to-End Testing
## Lab 43

<br>

### 💡 Read **solution** at

### `labs/lab-43-integration-quality-solution/README.md`

Notes:
- Read the lab README.md for Playwright E2E test examples.
- The solution demonstrates user registration and login journey tests.
