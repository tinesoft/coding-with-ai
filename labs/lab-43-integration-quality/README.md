# Lab 43: Integration and E2E Testing with Quality Improvements

## Learning Objectives

By completing this lab, you will:
- Write integration tests validating component interactions
- Create E2E tests simulating complete user workflows with Playwright
- Use AI to generate both integration and E2E test scenarios
- Apply code quality improvements using AI-assisted refactoring
- Understand the test pyramid and apply appropriate test strategies

## Prerequisites

- Completion of Lab 41 (Unit Testing) and Lab 42 (TDD)
- Understanding of integration vs E2E testing concepts
- Vitest testing framework familiarity
- GitHub Copilot enabled in VS Code
- Node.js application understanding

## Overview

This comprehensive lab covers three distinct exercises:
1. **Integration Testing**: Verify API + Service + Database interactions
2. **E2E Testing**: Simulate complete user journeys with Playwright
3. **Code Quality**: Use AI to identify and fix quality issues

---

## Exercise 1: Integration Testing

**Objective**: Write integration tests that validate multiple components working together.

**Scenario**: You have a multi-component application with an API layer, service layer, and data utilities. Test their interactions.

### Steps:

1. **Explore the application structure** in `exercises/multi-component-app/src/`:
   - `api/user-api.ts` - HTTP API endpoints
   - `services/user-service.ts` - Business logic
   - `utils/validator.ts` - Validation utilities
   
2. **Create integration test file** `exercises/multi-component-app/src/api-service.integration.spec.ts`

3. **Use GitHub Copilot to generate integration tests**:
   
   **Prompt**:
   ```
   Write integration tests for the user registration flow that validates:
   1. API endpoint receives registration data
   2. UserService validates and processes the data
   3. User is created successfully with proper data transformations
   4. Validation errors are propagated correctly from service to API
   
   Test these scenarios:
   - Successful user registration (valid data)
   - Failed registration (invalid email format)
   - Failed registration (weak password)
   - Failed registration (duplicate user)
   
   Use Vitest with real UserService and Validator instances (no mocks).
   Include beforeEach setup and afterEach cleanup.
   ```

4. **Run integration tests**:
   ```bash
   cd exercises/multi-component-app
   npm test
   ```

5. **Verify integration test characteristics**:
   - Uses real component instances (not mocks)
   - Tests data flow across component boundaries
   - Validates both success and error paths
   - Proper test isolation with setup/teardown

### Success Criteria:

- ✅ 8+ integration tests covering API → Service → Validator flow
- ✅ Tests use real component instances, not mocks
- ✅ Both success and failure scenarios tested
- ✅ All tests pass independently (no cross-test dependencies)
- ✅ Tests verify data transformations across boundaries

---

## Exercise 2: End-to-End (E2E) Testing

**Objective**: Create E2E tests simulating complete user workflows using Playwright.

**Scenario**: Test a simple web application's user registration and login flows from a user's perspective.

### Steps:

1. **Start the application** (in separate terminal):
   ```bash
   cd exercises/multi-component-app
   npm run dev
   ```
   Application runs at `http://localhost:3000`

2. **Create E2E test file** `exercises/multi-component-app/e2e/user-journey.spec.ts`

3. **Use GitHub Copilot to generate E2E tests**:
   
   **Prompt**:
   ```
   Write Playwright E2E tests for user registration and login workflows:
   
   Test 1: User Registration Flow
   1. Navigate to /register page
   2. Fill registration form (name, email, password)
   3. Submit form
   4. Verify success message appears
   5. Verify redirected to /dashboard
   6. Verify user name displayed in header
   
   Test 2: Login Flow
   1. Navigate to /login page
   2. Enter valid credentials
   3. Click login button
   4. Verify redirected to /dashboard
   5. Verify welcome message
   
   Test 3: Invalid Login
   1. Navigate to /login
   2. Enter invalid credentials
   3. Verify error message shown
   4. Verify still on login page
   
   Use Playwright test framework with stable selectors (data-testid).
   Include proper waits and assertions.
   ```

4. **Run E2E tests**:
   ```bash
   npm run test:e2e
   ```

5. **Debug if needed** (opens browser in headed mode):
   ```bash
   npm run test:e2e -- --headed
   ```

### Success Criteria:

- ✅ 3+ E2E tests covering complete user journeys
- ✅ Tests use stable selectors (data-testid attributes)
- ✅ Proper waits prevent race conditions
- ✅ Tests verify both UI state and navigation
- ✅ All tests pass reliably (not flaky)

---

## Exercise 3: Code Quality Improvements (User Story 4 content)

**Objective**: Use AI to identify code quality issues and apply refactoring improvements.

**Scenario**: The codebase has quality issues - poor naming, code duplication, unnecessary complexity. Use AI to improve it.

### Steps:

1. **Analyze code with quality issues** in `exercises/code-with-quality-issues/`:
   - `messy-code.ts` - Poor naming, duplication
   - `complex-function.ts` - High cyclomatic complexity

2. **Use GitHub Copilot to identify issues**:
   
   **Prompt for messy-code.ts**:
   ```
   Analyze this code and identify quality issues:
   - Poor variable/function naming
   - Code duplication
   - Magic numbers/strings
   - Lack of type safety
   
   Then provide refactored version with:
   - Clear, descriptive names
   - Extracted constants for magic values
   - Eliminated duplication
   - Strong typing
   ```

3. **Use GitHub Copilot for complexity reduction**:
   
   **Prompt for complex-function.ts**:
   ```
   This function has high cyclomatic complexity (too many nested conditions).
   Refactor to:
   - Extract validation logic into separate functions
   - Use early returns to reduce nesting
   - Apply guard clauses
   - Improve readability while maintaining behavior
   
   Ensure all existing tests still pass after refactoring.
   ```

4. **Apply refactorings incrementally**:
   - Make one improvement at a time
   - Run tests after each change
   - Verify behavior unchanged

5. **Validate improvements**:
   ```bash
   npm run test
   npm run lint
   ```

### Success Criteria:

- ✅ Code has clear, descriptive naming
- ✅ Magic values replaced with named constants
- ✅ Duplication eliminated
- ✅ Cyclomatic complexity reduced (fewer nested conditions)
- ✅ All tests still pass after refactoring
- ✅ Linting issues resolved

---

## Validation & Reflection

After completing all exercises:

1. **Run complete test suite**:
   ```bash
   cd exercises/multi-component-app
   npm run test:all  # Runs unit, integration, and E2E tests
   ```

2. **Check coverage** (unit + integration):
   ```bash
   npm run test:coverage
   ```
   Should achieve 80%+ coverage

3. **Verify E2E tests pass**:
   ```bash
   npm run test:e2e
   ```

### Reflection Questions:

**Integration Testing**:
- How do integration tests differ from unit tests in setup complexity?
- What did you choose to mock vs use real implementations?
- How did AI help identify important integration scenarios?

**E2E Testing**:
- What makes E2E tests more fragile than unit/integration tests?
- How did you ensure stable selectors?
- What user journeys are most critical to test?

**Code Quality**:
- What quality issues did AI identify that you missed?
- How did refactoring improve maintainability?
- What's the balance between code quality and over-engineering?

---

## Tips for Success

**Integration Testing**:
- ✅ Use real implementations where possible (minimal mocking)
- ✅ Focus on component boundaries and data flow
- ✅ Test both happy paths and error propagation
- ✅ Ensure proper test isolation with setup/teardown
- ✅ Keep tests focused on interactions, not implementation details

**E2E Testing with Playwright**:
- ✅ Use `data-testid` attributes for stable selectors
- ✅ Let Playwright's auto-wait handle timing (avoid manual sleeps)
- ✅ Test critical user journeys, not every feature
- ✅ Make tests independent (no shared state)
- ✅ Debug with `--headed` mode to see browser actions

**Code Quality**:
- ✅ Use AI to identify quality issues you might miss
- ✅ Apply refactorings incrementally (small steps)
- ✅ Run tests after each refactoring to ensure behavior unchanged
- ✅ Balance quality improvements with pragmatism
- ✅ Let AI suggest patterns, but you make final decisions

**Common Pitfalls**:
- ❌ Mocking too much in integration tests (defeats purpose)
- ❌ Using brittle CSS selectors in E2E tests
- ❌ Creating flaky E2E tests with race conditions
- ❌ Over-refactoring code (diminishing returns)
- ❌ Trusting AI suggestions blindly (always validate)

---

## Resources

- Review slides: 
  - `docs/markdown/40_module_4_testing/43_integration_testing.md`
  - `docs/markdown/40_module_4_testing/44_e2e_testing.md`
  - `docs/markdown/40_module_4_testing/45_code_quality.md`
- Vitest Documentation: https://vitest.dev
- Playwright Documentation: https://playwright.dev
- Test Pyramid: https://martinfowler.com/bliki/TestPyramid.html

## Next Steps

After completing this lab, you'll have comprehensive testing skills:
- ✅ Unit testing (Lab 41)
- ✅ TDD workflow (Lab 42)
- ✅ Integration testing (Lab 43 Ex1)
- ✅ E2E testing (Lab 43 Ex2)
- ✅ Code quality (Lab 43 Ex3)

You're ready to apply AI-assisted testing at all levels of the test pyramid in real-world projects!
