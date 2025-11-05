<!-- .slide: class="transition" -->
# Module 3: Systematic Debugging with AI
## Practical Workflows and Best Practices

##--##

<!-- .slide -->
# The 5-Step AI Debugging Process

## **Overview of the Workflow**
<br>

Systematic approach combining AI assistance with human validation at each step.

Notes:
This visual workflow (shown on the next slide) illustrates the systematic debugging process. It demonstrates human-AI collaboration at each step and emphasizes critical validation checkpoints.

##--##

<img src="./assets/images/module-3/ai-debugging-workflow.svg" alt="AI Debugging Workflow" style="width:100%; height:auto; display:block;">

##--##

<!-- .slide -->
# Step 1: Reproduce the Bug

## **Capturing Bug Context**
<br>

### 🔍 **What to Capture**

- Error messages and stack traces
- Input data that triggers the bug
- Expected vs. actual behavior
- Environment details (OS, runtime version, dependencies)

<br>

### 📋 **Create Minimal Reproduction**

```python
# Minimal example that reproduces the bug
def buggy_function(input_data):
    # Simplified version that still fails
    return process(input_data)

# Fails with this specific input
test_input = {"key": None}
buggy_function(test_input)  # Crashes here
```

Notes:
- Reproducibility is essential for effective debugging
- Isolate the bug from irrelevant code
- Document exact steps to trigger the issue
- AI needs clear reproduction context to help

##--##

<!-- .slide -->
# Step 2: Ask AI to Analyze

## **Crafting Effective Prompts**
<br>

### 💬 **Effective Prompts**

❌ **Vague**: "This code doesn't work, fix it"

✅ **Specific**: "This function throws `AttributeError: 'NoneType' object has no attribute 'get'` when `input_data` is `{'key': None}`. Why does this happen?"

<br>

### 📝 **Provide Context**

- Show relevant code sections (5-20 lines)
- Include error messages verbatim
- Explain what you expected to happen
- Share what you've already tried

Notes:
- Quality of AI assistance depends on prompt quality
- Include just enough code - not too little, not too much
- Error messages are critical context
- Be specific about what success looks like

##--##

<!-- .slide -->
# Step 3: Review AI Hypothesis

## **Evaluating AI's Analysis**
<br>

### 🧠 **AI Analysis Example**

**Copilot Response**:
```text
The error occurs because you're calling .get() on None.
When input_data['key'] is None, the subsequent line
tries to access None.get('nested_key'), which fails.

Root cause: Missing null check before accessing nested data.
```

<br>

### ✅ **Validate the Hypothesis**

- Does the explanation make sense?
- Does it match the observed behavior?
- Does it explain *why*, not just *what*?

Notes:
- AI should explain the root cause, not just symptoms
- Good hypotheses are testable and specific
- If the explanation is unclear, ask follow-up questions
- Understand before proceeding to fixes

##--##

<!-- .slide -->
# Step 4: Test Suggested Fix

## **Isolated Testing Approach**
<br>

### 🔧 **AI-Proposed Solution**

```python
def fixed_function(input_data):
    # Add null check before accessing nested data
    value = input_data.get('key')
    if value is None:
        return default_value  # Handle None explicitly
    
    return value.get('nested_key')
```

<br>

### 🧪 **Test in Isolation**

```python
# Test with original failing input
assert fixed_function({'key': None}) == default_value

# Test with valid input
assert fixed_function({'key': {'nested_key': 42}}) == 42

# Test edge cases
assert fixed_function({}) == default_value
```

Notes:
- Never apply fixes directly to production code
- Test with the original failing input first
- Test with valid inputs to ensure no regression
- Test edge cases AI might not have considered

##--##

<!-- .slide -->
# Step 5: Validate and Document

## **Final Verification Steps**
<br>

### ✅ **Validation Checklist**

- ✓ Fix resolves the original bug
- ✓ No regressions in existing functionality
- ✓ All related tests pass
- ✓ Edge cases handled appropriately
- ✓ Code is readable and maintainable

<br>

### 📝 **Document the Fix**

```python
def process_data(input_data):
    """Process input data with null safety.
    
    Bugfix (2025-10-26): Added null check for input_data['key']
    to prevent AttributeError when key is None. This can occur
    when upstream API returns incomplete data.
    """
    value = input_data.get('key')
    if value is None:
        return default_value
    return value.get('nested_key')
```

Notes:
- Documentation helps future maintainers understand the fix
- Explain *why* the bug occurred, not just what changed
- Link to issue tracker or bug report if available
- Good documentation prevents regression

##--##

<!-- .slide -->
# Common Debugging Patterns

## **Recognizing Frequent Bug Types**
<br>

### 🔄 **Pattern 1: Null/Undefined Checks**

```python
# Before: Crashes on None
result = data.process()

# After: Safe with guard clause
if data is not None:
    result = data.process()
else:
    result = default_value
```

<br>

### 🔄 **Pattern 2: Off-by-One Fixes**

```python
# Before: Misses last element
for i in range(len(items) - 1):  # Bug!
    process(items[i])

# After: Correct range
for i in range(len(items)):
    process(items[i])
```

Notes:
- AI learns from millions of code examples
- Recognizes common bug patterns instantly
- Suggests idiomatic fixes for each language
- Learn these patterns to prevent future bugs

##--##

<!-- .slide -->
# Debugging Workflow Anti-Patterns

## **Common Mistakes to Avoid**
<br>

### ❌ **Don't Do This**

1. **Blind Copy-Paste**: Applying fixes without understanding
2. **Scope Creep**: Refactoring unrelated code while debugging
3. **Insufficient Testing**: Skipping edge case validation
4. **Missing Root Cause**: Fixing symptoms instead of causes
5. **No Documentation**: Leaving future developers confused

<br>

### 🎯 **Stay Focused and Systematic**

Notes:
- Understand every change before applying it
- Debug one issue at a time - don't refactor simultaneously
- Test thoroughly to prevent regressions
- Always ask "why" to find root causes
- Document for your future self and teammates

##--##

<!-- .slide -->
# Key Takeaways

## **Workflow Summary**
<br>

### 🎯 **The 5-Step Process**

1. **Reproduce** reliably with minimal example
2. **Analyze** with specific AI prompts and full context
3. **Review** AI hypothesis for logical soundness
4. **Test** suggested fixes in isolation
5. **Validate** thoroughly and document learnings

<br>

### 🧠 **Human judgment at every step**

Notes:
- This workflow combines AI speed with human validation
- Each step builds confidence in the fix
- Documentation ensures knowledge transfer
- Practice makes this process second nature

##--##

<!-- .slide: class="exercice" -->
# Exercise 1: AI-Powered Debugging
## Lab 31

<br>

### 👉🏾 Follow **instructions** in

### `labs/lab-31-ai-debugging/README.md`

Notes:
- Follow the instructions in the lab README.md for detailed steps.

##--##

<!-- .slide: class="exercice" -->
# Exercise 1: AI-Powered Debugging
## Lab 31

<br>

### 💡 Read **solution** at

### `labs/lab-31-ai-debugging-solution/README.md`

Notes:
- Read the lab README.md for example of solutions.
- Solution includes fixed code and debugging process explanations
