# Lab 32: AI-Powered Code Refactoring

## Learning Objectives

By the end of this lab, you will:
- Apply 5 common refactoring patterns to legacy code
- Use GitHub Copilot to identify code smells and suggest improvements
- Practice incremental refactoring with test validation
- Evaluate trade-offs between different refactoring approaches

## Prerequisites

- GitHub Copilot installed and activated in VS Code
- Basic JavaScript/TypeScript programming knowledge
- Understanding of refactoring concepts from Module 3 slides

## Overview

This lab contains **5 legacy JavaScript/TypeScript code samples**, each demonstrating a specific refactoring opportunity:

1. **Extract Method**: Long monolithic function with multiple responsibilities
2. **Rename for Clarity**: Cryptic variable and function names
3. **Simplify Conditionals**: Deeply nested if-else statements
4. **Remove Duplication**: Repeated code across multiple functions
5. **Modernize Syntax**: Old ES5 code that can use ES6+ features

Your task is to use GitHub Copilot to systematically refactor each code sample while preserving its behavior.

## Instructions

### Setup

1. Navigate to the exercises directory:
   ```bash
   cd labs/lab-32-ai-refactoring/exercises/legacy-code/
   ```

2. Open each file in VS Code with Copilot enabled

### Exercise 1: Extract Method

**File**: `extract_method.js`

**Objective**: Break down a long `processUserRegistration()` function into smaller, focused functions

**Steps**:
1. **Identify Responsibilities**: Read the function and identify distinct tasks (validation, hashing, database, email)
2. **Ask Copilot**: "Refactor this function by extracting logical sections into separate functions"
3. **Review Suggestions**: Evaluate proposed method extractions
4. **Apply Incrementally**: Extract one method at a time, testing after each change
5. **Validate**: Run the provided test cases to ensure behavior is preserved

**Success Criteria**:
- Main function is < 15 lines
- Each extracted function has a single responsibility
- All tests pass
- Function names clearly describe their purpose

### Exercise 2: Rename for Clarity

**File**: `rename_clarity.ts`

**Objective**: Replace cryptic variable and function names with descriptive ones

**Steps**:
1. **Identify Cryptic Names**: Note all single-letter variables and unclear function names
2. **Ask Copilot**: "Suggest better names for the variables and functions in this code"
3. **Review Context**: Ensure suggested names match the business logic
4. **Apply Renaming**: Use VS Code's rename refactoring (F2) for consistency
5. **Validate**: Verify code is more readable and tests still pass

**Success Criteria**:
- No single-letter variable names (except loop counters)
- Function names are verb phrases describing actions
- Type definitions use descriptive names
- Code is self-documenting

### Exercise 3: Simplify Conditionals

**File**: `simplify_conditional.js`

**Objective**: Reduce nested if-else statements using guard clauses and early returns

**Steps**:
1. **Analyze Nesting**: Count the levels of nesting (should be 4-5 levels deep)
2. **Ask Copilot**: "Simplify these nested conditionals using guard clauses"
3. **Review Proposal**: Check that error conditions are handled first
4. **Test Edge Cases**: Verify all conditional branches still work correctly
5. **Measure Improvement**: Note the reduction in cyclomatic complexity

**Success Criteria**:
- Maximum nesting depth reduced to 1
- Guard clauses handle error conditions early
- Happy path is at the end
- All conditional logic preserved

### Exercise 4: Remove Duplication

**File**: `remove_duplication.ts`

**Objective**: Consolidate repeated code into shared functions

**Steps**:
1. **Find Duplicates**: Identify repeated patterns across multiple functions
2. **Ask Copilot**: "Extract the common logic from these functions into a shared utility"
3. **Create Abstraction**: Build a reusable function that handles all cases
4. **Update Callers**: Modify original functions to use the new shared function
5. **Validate Coverage**: Ensure all original use cases still work

**Success Criteria**:
- Duplicated logic extracted into shared function
- Original functions call the shared utility
- No copy-pasted code remains
- Tests pass for all original scenarios

### Exercise 5: Modernize Syntax

**File**: `modernize_syntax.js`

**Objective**: Update ES5 code to use modern ES6+ features

**Steps**:
1. **Identify Old Patterns**: Note `var`, `for` loops, `function` keyword, concatenation
2. **Ask Copilot**: "Modernize this code to use ES6+ features (const/let, arrow functions, template literals, array methods)"
3. **Review Changes**: Ensure modern features are used appropriately
4. **Check Compatibility**: Verify target environment supports ES6+
5. **Test Thoroughly**: Modern syntax should behave identically

**Success Criteria**:
- `var` replaced with `const`/`let`
- Arrow functions used for callbacks
- Template literals for string interpolation
- Array methods (`map`, `filter`, `reduce`) replace `for` loops
- All tests pass

## Refactoring Workflow Checklist

For each exercise, follow these steps:

1. ☐ **Understand Current Behavior**: Run tests to see what code does
2. ☐ **Identify Code Smell**: Recognize the specific refactoring opportunity
3. ☐ **Ask Copilot**: Prompt with specific refactoring pattern
4. ☐ **Review Proposal**: Critically evaluate AI suggestions
5. ☐ **Apply Incrementally**: Make small changes, test frequently
6. ☐ **Validate Behavior**: Ensure no regressions
7. ☐ **Document**: Add comments explaining the refactoring

## Testing

Each exercise includes simple test cases. Run tests with:

```bash
# For JavaScript files
node extract_method.js

# For TypeScript files
npx ts-node rename_clarity.ts
```

All tests should pass **before** and **after** refactoring.

## Tips for Success

- **Test First**: Always run tests before refactoring to establish baseline
- **One Pattern at a Time**: Don't mix multiple refactorings in one change
- **Commit Frequently**: Small commits make it easy to revert if needed
- **Ask "Why?"**: Understand why Copilot suggests each change
- **Consider Trade-offs**: Some refactorings increase abstraction - is it worth it?

## Time Estimate

- **Total Lab Time**: 60-75 minutes
- **Per Exercise**: 12-15 minutes

## Next Steps

After completing all 5 exercises:
1. Review the solution README for comparison
2. Reflect on which refactoring patterns were most valuable
3. Note effective Copilot prompts for future use
4. Consider how to apply these patterns to your own codebase

## Resources

- [Refactoring Catalog](https://refactoring.com/catalog/)
- [GitHub Copilot Refactoring Guide](https://docs.github.com/en/copilot/using-github-copilot/refactoring-code-with-github-copilot)
- Module 3 Slides: Refactoring Concepts and Patterns
