# Lab 31: AI-Powered Debugging

## Learning Objectives

By the end of this lab, you will:
- Apply the 5-step AI debugging workflow to real bugs
- Use GitHub Copilot to identify and fix different bug categories
- Practice validating AI-suggested fixes before applying them
- Document debugging processes for future reference

## Prerequisites

- GitHub Copilot installed and activated in VS Code
- Basic Python programming knowledge
- Understanding of debugging concepts from Module 3 slides

## Overview

This lab contains **5 intentionally buggy Python code samples**, each representing a different bug category:

1. **Logic Error**: Off-by-one error in list processing
2. **Runtime Error**: Null/None access causing crashes
3. **Scope Issue**: Variable shadowing leading to wrong results
4. **Integration Bug**: Incorrect API/library usage
5. **Silent Failure**: Wrong return value with no error message

Your task is to use GitHub Copilot to systematically debug and fix each issue following the 5-step workflow.

## Instructions

### Setup

1. Navigate to the exercises directory:
   ```bash
   cd labs/lab-31-ai-debugging/exercises/buggy-code-samples/
   ```

2. Open each Python file in VS Code with Copilot enabled

### Exercise 1: Fix the Logic Error

**File**: `logic_error.py`

**Steps**:
1. **Reproduce**: Run the script and observe the incorrect output
2. **Analyze**: Use Copilot Chat to explain why the output is wrong
   - Prompt: "This function should process all items but skips one. Why?"
3. **Review**: Understand Copilot's hypothesis about the off-by-one error
4. **Test**: Apply the suggested fix and verify with test cases
5. **Validate**: Ensure all edge cases are handled (empty list, single item, etc.)

**Expected Behavior**: Function should process ALL items in the list, not skip the last one

**Success Criteria**:
- Bug identified correctly
- Fix applied and tested
- Explanation documented in comments

### Exercise 2: Fix the Runtime Error

**File**: `runtime_error.py`

**Steps**:
1. **Reproduce**: Run the script and capture the `AttributeError` or `TypeError`
2. **Analyze**: Ask Copilot to explain the null/None access issue
   - Prompt: "Why does this crash with AttributeError? How can I handle None safely?"
3. **Review**: Evaluate Copilot's suggested null checks or exception handling
4. **Test**: Verify the fix works with both None and valid inputs
5. **Validate**: Confirm error messages are helpful if inputs are invalid

**Expected Behavior**: Function should handle None gracefully without crashing

**Success Criteria**:
- Null safety implemented
- Both None and valid inputs tested
- Error handling documented

### Exercise 3: Fix the Scope Issue

**File**: `scope_issue.py`

**Steps**:
1. **Reproduce**: Run the script and note unexpected variable values
2. **Analyze**: Ask Copilot about variable shadowing
   - Prompt: "This variable has the wrong value inside the loop. What's wrong?"
3. **Review**: Understand how variable scope is causing the issue
4. **Test**: Apply Copilot's renaming or scoping fix
5. **Validate**: Verify variables have correct values at each scope level

**Expected Behavior**: Variables should maintain correct values without shadowing

**Success Criteria**:
- Shadowing issue identified
- Variables renamed or scope corrected
- Code behavior matches intent

### Exercise 4: Fix the Integration Bug

**File**: `integration_bug.py`

**Steps**:
1. **Reproduce**: Run the script and observe incorrect API/library usage
2. **Analyze**: Ask Copilot about the correct way to use the library
   - Prompt: "This API call fails. What's the correct parameter format?"
3. **Review**: Check Copilot's suggestion against library documentation
4. **Test**: Verify the corrected API call works as expected
5. **Validate**: Ensure error handling covers API edge cases

**Expected Behavior**: Correct library/API usage according to documentation

**Success Criteria**:
- API misuse identified
- Parameters corrected
- Documentation consulted to verify fix

### Exercise 5: Fix the Silent Failure

**File**: `silent_failure.py`

**Steps**:
1. **Reproduce**: Run the script and note the wrong return value (no error thrown)
2. **Analyze**: Ask Copilot why the return value is incorrect
   - Prompt: "This function returns the wrong value for edge cases. Why?"
3. **Review**: Understand the logic flaw causing incorrect results
4. **Test**: Add test cases for edge cases to expose the silent failure
5. **Validate**: Verify correct return values for all inputs (normal and edge cases)

**Expected Behavior**: Correct return values for all inputs, including edge cases

**Success Criteria**:
- Silent logic flaw identified
- Return logic corrected
- Edge cases explicitly tested

## Debugging Workflow Checklist

For each exercise, follow these steps:

1. ☐ **Reproduce**: Run code and document the bug
2. ☐ **Analyze**: Prompt Copilot with specific context
3. ☐ **Review**: Understand the AI's hypothesis
4. ☐ **Test**: Apply fix in isolation
5. ☐ **Validate**: Check for regressions and edge cases
6. ☐ **Document**: Add comments explaining the fix

## Tips for Success

- **Be Specific with Prompts**: Include error messages and expected behavior
- **Don't Blindly Copy**: Understand each suggested fix before applying
- **Test Thoroughly**: Each fix should pass with multiple test inputs
- **Ask Follow-ups**: If Copilot's explanation is unclear, ask for clarification
- **Learn Patterns**: Notice common bug patterns to prevent future issues

## Time Estimate

- **Total Lab Time**: 45-60 minutes
- **Per Exercise**: 8-12 minutes

## Next Steps

After completing all 5 exercises:
1. Review the solution README for comparison
2. Reflect on which bug types were hardest to debug
3. Note any patterns in effective Copilot prompts
4. Consider how to prevent these bugs in your own code

## Resources

- [Python Debugging Documentation](https://docs.python.org/3/library/pdb.html)
- [GitHub Copilot Chat Documentation](https://docs.github.com/en/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide)
- Module 3 Slides: Debugging Concepts and Workflow
