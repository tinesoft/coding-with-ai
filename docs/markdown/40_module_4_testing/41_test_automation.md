<!-- .slide: class="transition" -->
# Module 4: Test Automation Fundamentals
## AI-Assisted Unit Testing

##--##

<!-- .slide: -->
# Introduction to Test Automation

## Why Automated Testing Matters
<br>

- **Confidence**: Catch bugs before they reach production
- **Speed**: Run thousands of tests in seconds
- **Documentation**: Tests describe expected behavior
- **Refactoring Safety**: Change code without breaking functionality

### AI Changes the Game

Traditional testing required deep framework knowledge. **AI assistance** lets you generate comprehensive tests by describing what you want to validate.

##--##

<!-- .slide: -->
# Unit Testing with AI Assistance

## What Are Unit Tests?
<br>

**Definition**: Tests that validate individual functions or methods in isolation

### Characteristics
- **Fast**: Execute in milliseconds
- **Isolated**: No external dependencies (databases, APIs)
- **Focused**: Test one thing at a time
- **Repeatable**: Same input always produces same output

### AI's Role
Ask AI: *"Generate unit tests for this calculateDiscount function with edge cases"*

→ AI analyzes the code and creates comprehensive test suite

##--##

<!-- .slide: -->

<img src="./assets/images/module-4/test-generation-flow.svg" alt="AI-assisted test generation workflow" style="width:100%; height:auto; display:block;">

##--##

<!-- .slide: -->
# Code Coverage Metrics

## Understanding Coverage
<br>

**Code Coverage** = Percentage of code executed during tests

### Common Coverage Types
- **Line Coverage**: Which lines were executed?
- **Branch Coverage**: Which decision paths were taken?
- **Function Coverage**: Which functions were called?

### Target: 80%+ Coverage

Not about reaching 100%, but ensuring **critical paths** are tested

### AI Advantage
AI can identify uncovered paths and generate missing tests automatically

##--##

<!-- .slide: -->

<img src="./assets/images/module-4/test-pyramid.svg" alt="Testing pyramid with AI context" style="width:100%; height:auto; display:block;">

##--##

<!-- .slide: -->
# Human-in-the-Loop Validation

## Why Review AI-Generated Tests?
<br>

### Common AI Testing Pitfalls

❌ **Generic Assertions**: `expect(result).toBeTruthy()` (too vague)  
❌ **Missing Edge Cases**: Forgets null, empty array, boundary values  
❌ **Incorrect Logic**: Test passes but doesn't validate behavior  
❌ **Test Brittleness**: Over-specified assertions that break easily

### Your Role: The Validator

✅ **Verify Logic**: Does this test actually validate the requirement?  
✅ **Check Edge Cases**: Are error conditions tested?  
✅ **Assess Coverage**: Are critical paths included?  
✅ **Improve Prompts**: Refine requests for better test generation

**Remember**: AI is your assistant, not your replacement. You provide the judgment.

Notes:
Emphasize that learners must actively review and validate AI-generated tests. This is a critical skill for preventing false confidence in test coverage. Reference Module 3's human-in-the-loop validation techniques.

##--##

<!-- .slide: class="exercice" -->
# Exercise 1: AI-Assisted Unit Test Generation
## Lab 41

<br>

### 👉🏾 Follow **instructions** in

### `labs/lab-41-unit-testing/README.md`

Notes:
- Follow the instructions in the lab README.md for detailed steps on generating unit tests with GitHub Copilot.
- This lab focuses on test-driven practices using AI to create comprehensive test suites for existing code.

##--##

<!-- .slide: class="exercice" -->
# Exercise 1: AI-Assisted Unit Test Generation
## Lab 41

<br>

### 💡 Read **solution** at

### `labs/lab-41-unit-testing-solution/README.md`

Notes:
- Read the lab README.md for example solutions and validation techniques.
- The solution demonstrates 49 comprehensive test cases achieving 100% code coverage.
