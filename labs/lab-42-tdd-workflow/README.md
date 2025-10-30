# Lab 42: Test-Driven Development (TDD) Workflow with AI

## Learning Objectives

By completing this lab, you will:
- Practice the Red-Green-Refactor TDD cycle with AI assistance
- Write failing tests before implementation (test-first approach)
- Implement minimal code to pass tests, then refactor for quality
- Use GitHub Copilot to accelerate each TDD phase
- Validate that tests fail for the right reasons before implementing

## Prerequisites

- Completion of Lab 41 (Unit Test Generation)
- Understanding of unit testing concepts
- Vitest testing framework basics
- GitHub Copilot enabled in VS Code

## Overview

This lab teaches Test-Driven Development (TDD) through practical application. You'll implement a shopping cart feature using the Red-Green-Refactor cycle, with AI assistance at each phase. The goal is to internalize TDD discipline: write tests first, implement minimally, then refactor.

---

## Exercise 1: RED Phase - Write Failing Tests

**Objective**: Practice writing tests before implementation, verifying they fail for the correct reasons.

**Scenario**: You need to implement a `ShoppingCart` class that manages items. Start by writing tests that describe the desired behavior.

### Steps:

1. **Read the feature specification** in `exercises/feature-spec.md` to understand requirements

2. **Create test file** `exercises/src/shopping-cart.spec.ts`

3. **Use GitHub Copilot to generate failing tests**:
   
   **Prompt**:
   ```
   Write comprehensive unit tests for a ShoppingCart class with the following behavior:
   - add(item): adds items to cart, increases quantity if item already exists
   - remove(itemId): removes item from cart
   - getTotal(): calculates total price of all items
   - getItemCount(): returns total number of items (considering quantities)
   - clear(): removes all items from cart
   
   Include tests for edge cases: empty cart, removing non-existent items, quantity tracking.
   Use Vitest test framework with describe/it blocks.
   ```

4. **Run the tests** (they should all fail):
   ```bash
   npm test
   ```

5. **Verify failure reasons**:
   - Tests should fail because `ShoppingCart` class doesn't exist
   - NOT because of syntax errors or test bugs
   - Check error messages confirm expected failures

### Success Criteria:

- ✅ Test file created with 10+ test cases covering all requirements
- ✅ All tests fail with "ShoppingCart is not defined" or similar
- ✅ No syntax errors in test file
- ✅ Tests describe clear, expected behaviors

---

## Exercise 2: GREEN Phase - Minimal Implementation

**Objective**: Write just enough code to make tests pass, resisting over-engineering.

### Steps:

1. **Create implementation file** `exercises/src/shopping-cart.ts`

2. **Use GitHub Copilot for minimal implementation**:
   
   **Prompt**:
   ```
   Implement a ShoppingCart class that makes the tests in shopping-cart.spec.ts pass.
   Use the SIMPLEST possible approach - arrays, basic loops, straightforward logic.
   Do NOT optimize or add features not required by tests.
   Do NOT use advanced data structures yet.
   Focus only on making tests green.
   ```

3. **Run tests to verify they pass**:
   ```bash
   npm test
   ```

4. **Review the implementation**:
   - Is it truly minimal? (No unnecessary features)
   - Does it use simple structures? (Arrays vs Maps)
   - Is there any code not required by tests?

### Success Criteria:

- ✅ All tests pass (green)
- ✅ Implementation uses simple data structures (arrays are fine)
- ✅ No features beyond what tests require
- ✅ Code is straightforward but not necessarily optimal

---

## Exercise 3: REFACTOR Phase - Improve Quality

**Objective**: Enhance code quality while keeping all tests green.

### Steps:

1. **Identify refactoring opportunities**:
   - Inefficient algorithms (O(n) array lookups could be O(1) with Maps)
   - Poor naming (variable/method names unclear)
   - Code duplication
   - Complex logic that could be extracted into methods

2. **Use GitHub Copilot for refactoring suggestions**:
   
   **Prompt**:
   ```
   Refactor the ShoppingCart class to improve code quality:
   - Replace array with Map for O(1) item lookups by ID
   - Extract calculation logic into private methods
   - Improve variable and method naming for clarity
   - Add JSDoc comments for public methods
   
   IMPORTANT: Keep all existing tests passing. Do not change public API.
   ```

3. **Apply refactorings incrementally**:
   - Make one improvement at a time
   - Run tests after EACH refactoring
   - If tests fail, revert and try again

4. **Verify final state**:
   ```bash
   npm test
   ```
   All tests should still be green!

### Success Criteria:

- ✅ All tests still pass after refactoring
- ✅ Code uses efficient data structures (Map for item storage)
- ✅ Logic is extracted into well-named private methods
- ✅ Public API remains unchanged
- ✅ Code is more readable and maintainable

---

## Exercise 4: Full TDD Cycle - Add New Feature

**Objective**: Practice complete RED-GREEN-REFACTOR cycle for a new feature.

**New Requirement**: Add discount code support to the shopping cart.

### Steps:

1. **🔴 RED: Write failing tests**:
   
   **Prompt**:
   ```
   Add tests to shopping-cart.spec.ts for a new feature:
   - applyDiscount(code, percentage): applies discount code with percentage off
   - getDiscountedTotal(): returns total after discount applied
   - Test edge cases: invalid discount codes, multiple discount applications, empty cart
   ```
   
   Run tests - they should fail (no discount methods exist yet)

2. **🟢 GREEN: Minimal implementation**:
   
   **Prompt**:
   ```
   Add discount functionality to ShoppingCart class to pass new tests.
   Use simplest approach - store discount percentage, apply to total calculation.
   ```
   
   Run tests - they should now pass

3. **🔵 REFACTOR: Improve discount logic**:
   
   **Prompt**:
   ```
   Refactor discount logic:
   - Extract discount validation into separate method
   - Improve discount calculation clarity
   - Add proper error handling for invalid codes
   ```
   
   Run tests - they should still pass

### Success Criteria:

- ✅ Completed full RED-GREEN-REFACTOR cycle
- ✅ New feature has comprehensive test coverage
- ✅ All tests remain green throughout
- ✅ Code quality maintained during feature addition

---

## Validation & Reflection

After completing all exercises, verify:

1. **Run full test suite**:
   ```bash
   npm test
   ```
   All tests should pass

2. **Check test coverage**:
   ```bash
   npm run test:coverage
   ```
   Should have 100% coverage (TDD guarantees this!)

3. **Review code quality**:
   - Is the final code clean and maintainable?
   - Are methods well-named and focused?
   - Is the public API intuitive?

### Reflection Questions:

- How did writing tests first change your design approach?
- What advantages did you notice from having tests before implementation?
- How did AI assistance help in each TDD phase?
- What challenges did you face maintaining TDD discipline?

---

## Tips for TDD Success

**General TDD Principles**:
- ✅ Always write tests before implementation
- ✅ Verify tests fail before writing code
- ✅ Write minimal code to pass tests
- ✅ Refactor only when tests are green
- ✅ Run tests frequently (after each change)

**Working with AI in TDD**:
- ✅ Use specific prompts for each phase (RED/GREEN/REFACTOR)
- ✅ Review AI suggestions critically - is implementation truly minimal?
- ✅ Let tests guide design, not AI suggestions
- ✅ Verify tests fail for the right reasons
- ✅ Maintain TDD discipline even when AI offers full implementations

**Common Pitfalls to Avoid**:
- ❌ Implementing before writing tests (breaks TDD)
- ❌ Skipping RED phase verification (test must fail first)
- ❌ Over-engineering in GREEN phase (add only what's needed)
- ❌ Refactoring without running tests (loses safety net)
- ❌ Letting AI write both tests and implementation at once (defeats TDD purpose)

---

## Resources

- Review slides: `docs/markdown/40_module_4_testing/42_tdd_with_ai.md`
- Vitest Documentation: https://vitest.dev
- TDD Best Practices: https://martinfowler.com/bliki/TestDrivenDevelopment.html

## Next Steps

After completing this lab, you'll be ready to:
- Apply TDD to real-world features in your projects
- Use AI assistance throughout the TDD cycle
- Maintain test-first discipline for better design
- Proceed to Lab 43: Integration and E2E Testing
