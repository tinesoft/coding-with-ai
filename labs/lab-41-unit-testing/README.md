# Lab 41: AI-Assisted Unit Test Generation

## Learning Objectives

By the end of this lab, you will be able to:

- Generate comprehensive unit tests using GitHub Copilot
- Achieve 80%+ code coverage for untested functions
- Validate AI-generated tests for correctness and completeness
- Identify and fix gaps in test coverage using human-in-the-loop techniques

## Prerequisites

- Module 2 completed (GitHub Copilot proficiency)
- Module 3 completed (human-in-the-loop validation skills)
- Basic TypeScript knowledge
- Vitest testing framework (introduced in this lab)

## Lab Setup

All starter code is in `exercises/starter-code/`. Your task is to generate comprehensive unit tests for each module using AI assistance.

**Time Estimate**: 60 minutes

---

## Exercise 1: Calculator Functions

**Objective**: Generate unit tests for basic arithmetic operations with edge case coverage.

**File**: `exercises/starter-code/calculator.ts`

### Steps

1. **Open** `calculator.ts` and review the four functions: `add`, `subtract`, `multiply`, `divide`
2. **Use GitHub Copilot** to generate test file:
   - Open Copilot Chat (Ctrl+Shift+I / Cmd+Shift+I)
   - Prompt: *"Generate comprehensive unit tests for calculator.ts using Vitest. Include edge cases like division by zero, negative numbers, and floating-point precision."*
3. **Create** `calculator.spec.ts` with AI-generated tests
4. **Review** generated tests:
   - Do assertions validate actual behavior?
   - Are edge cases covered (zero, negatives, decimals)?
   - Is error handling tested (divide by zero)?
5. **Run** tests: `npm test calculator.spec.ts`
6. **Check coverage**: `npm run test:coverage`
7. **Refine** if coverage < 80%: Ask AI to add missing tests for uncovered paths

### Success Criteria

- ✅ All tests pass
- ✅ Code coverage ≥ 80%
- ✅ Edge cases covered (division by zero, negative numbers, floating-point)
- ✅ Tests use specific assertions (not just `toBeTruthy()`)

---

## Exercise 2: User Validation Logic

**Objective**: Generate tests for validation functions with complex business rules.

**File**: `exercises/starter-code/user-validator.ts`

### Steps

1. **Open** `user-validator.ts` and review validation functions:
   - `isValidEmail(email: string): boolean`
   - `isValidPassword(password: string): boolean`
   - `isValidAge(age: number): boolean`
2. **Use GitHub Copilot** with specific prompt:
   - Prompt: *"Generate Vitest unit tests for user-validator.ts. Test email validation (valid/invalid formats), password requirements (length, special chars), and age validation (minimum age, boundary values, invalid inputs)."*
3. **Create** `user-validator.spec.ts`
4. **Execute** tests and review results
5. **Validate** AI-generated tests:
   - Are both valid AND invalid inputs tested?
   - Do tests cover boundary values (e.g., age = 18 exactly)?
   - Are error messages validated?
6. **Improve** prompts if tests are insufficient

### Success Criteria

- ✅ Tests cover valid inputs (should return true)
- ✅ Tests cover invalid inputs (should return false)
- ✅ Boundary values tested (e.g., minimum password length)
- ✅ Code coverage ≥ 80%

---

## Exercise 3: Data Transformation Functions

**Objective**: Generate tests for data manipulation with error handling.

**File**: `exercises/starter-code/data-transformer.ts`

### Steps

1. **Open** `data-transformer.ts` and review functions:
   - `parseJSON(input: string): object | null`
   - `filterArray(arr: any[], predicate: Function): any[]`
   - `mapValues(obj: object, mapper: Function): object`
2. **Use GitHub Copilot** with detailed prompt:
   - Prompt: *"Generate comprehensive Vitest tests for data-transformer.ts. Include: JSON parsing with valid/invalid JSON, array filtering with various predicates, object mapping with type transformations. Test error conditions and null/undefined handling."*
3. **Create** `data-transformer.spec.ts`
4. **Run** tests and check coverage report
5. **Human validation**:
   - Do tests handle malformed JSON?
   - Are empty arrays tested?
   - Are null/undefined inputs covered?
6. **Iterate** with AI if gaps exist

### Success Criteria

- ✅ Error conditions tested (invalid JSON, null inputs)
- ✅ Empty inputs tested (empty arrays, empty objects)
- ✅ Complex transformations validated
- ✅ Code coverage ≥ 80%

---

## Running All Tests

```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Run specific test file
npm test calculator.spec.ts
```

## Coverage Report

After running `npm run test:coverage`, check the terminal output and `coverage/` directory for detailed coverage reports.

**Target**: All three modules should show 80%+ coverage with green checkmarks.

## Tips for Effective AI Test Generation

1. **Be Specific**: Instead of "write tests", say "write tests covering edge cases X, Y, Z"
2. **Request Edge Cases**: Explicitly ask for null, undefined, empty, boundary values
3. **Iterate**: If first attempt misses cases, refine your prompt with specific gaps
4. **Validate Assertions**: Check that tests use specific assertions, not generic ones
5. **Check Error Paths**: Ensure error conditions and exception handling are tested

## Common Pitfalls to Avoid

- ❌ Accepting tests without reviewing them
- ❌ Ignoring coverage gaps in critical logic
- ❌ Using generic assertions like `toBeTruthy()`
- ❌ Forgetting to test error conditions
- ❌ Not running tests before considering them complete

---

**Next Step**: Once you achieve 80%+ coverage on all three modules, review the solution in `labs/lab-41-unit-testing-solution/` to compare your approach.
