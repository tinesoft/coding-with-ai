<!-- .slide: class="transition" -->
# Module 3: Verifying AI-Generated Code
## Critical Evaluation and Validation Techniques

##--##

<!-- .slide -->
# Why Verify AI-Generated Code?

## **Understanding AI Limitations**
<br>

AI assistants are powerful but **not infallible**:

- ❌ **Hallucinations**: Nonexistent APIs, packages, or functions
- ⚠️ **Logic Errors**: Edge cases, off-by-one, incorrect algorithms
- 🔓 **Security Gaps**: SQL injection, XSS, insecure configurations
- 📉 **Performance Issues**: N+1 queries, inefficient algorithms
- 🧪 **Testability**: Hard-to-test code, tight coupling
- 📚 **Best Practices**: Outdated patterns, poor naming conventions
- ✅ **Correctness**: Wrong output for specific inputs

Notes:
AI coding assistants dramatically accelerate development, but they're trained on vast datasets that include both good and bad code. They can confidently generate incorrect solutions, invent APIs that don't exist, or overlook critical security concerns. This makes verification a crucial skill—not just for AI-generated code, but for enhancing your overall code review capabilities. The verification mindset helps you catch issues early, whether they come from AI, colleagues, or your own keyboard.

##--##

<!-- .slide -->
# The 7-Point Verification Checklist

## **Systematic Review Framework**
<br>

| # | Check | Question |
|---|-------|----------|
| 1️⃣ | **Correctness** | Does it produce expected output for all inputs? |
| 2️⃣ | **Logic** | Are edge cases handled? Any off-by-one errors? |
| 3️⃣ | **Security** | Are inputs validated? SQL injection risks? |
| 4️⃣ | **Dependencies** | Do all imports/packages actually exist? |
| 5️⃣ | **Best Practices** | Naming, structure, patterns aligned with standards? |
| 6️⃣ | **Performance** | Any obvious inefficiencies (N+1, nested loops)? |
| 7️⃣ | **Testability** | Can this code be easily unit tested? |

Notes:
This seven-point checklist provides a systematic approach to code review. Start with correctness—does it even work? Then examine logic for boundary conditions and edge cases. Security checks should include input validation, authentication, and common vulnerability patterns. Dependencies are particularly important for AI-generated code, which may hallucinate package names or API methods. Best practices ensure maintainability. Performance considerations prevent production bottlenecks. Finally, testability determines long-term code health. The next slide provides a comprehensive visual representation of this framework.

##--##

<img src="./assets/images/module-3/verification-checklist.svg" alt="AI Code Verification Checklist" style="width:100%; height:auto; display:block;">

##--##

<!-- .slide -->
# Verification Workflow

## **Step-by-Step Process**
<br>

```text
1. READ: Understand what the code claims to do
   ↓
2. TEST: Run it with typical inputs
   ↓
3. EDGE CASES: Test boundaries, nulls, empty arrays
   ↓
4. INSPECT: Check dependencies, imports, API calls
   ↓
5. REVIEW: Apply 7-point checklist systematically
   ↓
6. REFINE: Fix issues, ask AI to improve
   ↓
7. VALIDATE: Re-test after modifications
```

Notes:
Effective verification is methodical, not random. Start by reading the code to understand its intent—what problem is it solving? Then run it with normal inputs to establish baseline functionality. Next, push the boundaries with edge cases: empty inputs, null values, maximum sizes, special characters. Inspect external dependencies carefully—do the packages exist? Are the API signatures correct? Apply the seven-point checklist systematically. When you find issues, collaborate with the AI to fix them—describe the problem and ask for corrections. Finally, validate that your fixes didn't introduce new problems. This workflow becomes faster with practice.

##--##

<!-- .slide -->
# Common AI Code Issues

## **Frequent Problem Patterns**
<br>

### 🔴 Hallucinated Dependencies
```python
from faker_package import generate_data  # Package doesn't exist!
```

### 🔴 Incorrect API Usage
```javascript
array.sortBy('name');  // No such method in JavaScript
```

### 🔴 Missing Edge Cases
```python
def divide(a, b):
    return a / b  # No zero-division check!
```

Notes:
These are the most frequent issues in AI-generated code. Hallucinated dependencies occur when the AI invents plausible-sounding package names or combines real package names with nonexistent APIs. Always verify imports against official documentation. Incorrect API usage happens when the AI conflates methods from different languages or libraries—like using Ruby's sortBy in JavaScript. Missing edge case handling is particularly dangerous because the code works for happy-path scenarios but fails in production. Train yourself to ask: "What could go wrong?"

##--##

<!-- .slide -->
# Testing AI-Generated Code

## **Comprehensive Testing Approach**
<br>

### ✅ **DO**: Test with diverse inputs
```python
test_cases = [
    (normal_input, expected_output),
    ([], expected_for_empty),
    (None, expected_for_null),
    (huge_input, expected_for_large),
]
```

### ❌ **DON'T**: Trust "it looks right"
```python
# AI generated this—looks plausible, but is it correct?
result = ai_function(data)
# return result  # NO! Test first!
```

Notes:
Testing is your primary defense against AI errors. Create a diverse test suite before integrating generated code: normal cases, edge cases, error conditions, and performance scenarios. Don't let plausible-looking code bypass your testing discipline—AI is excellent at generating code that looks professional but contains subtle bugs. Use test-driven approaches: describe the expected behavior first, then evaluate the AI's implementation against those expectations. This inverts the trust model: instead of trusting the code and hoping it works, you define success criteria and verify compliance.

##--##

<!-- .slide -->
# Verifying Dependencies

## **Package Validation Process**
<br>

### 🛡️ **Verification Steps**:

1. Check package exists: `npm search <package>` or search PyPI
2. Verify API documentation on official sites
3. Check version compatibility
4. Test imports before full integration
5. Look for deprecation warnings

### 💡 **Pro Tip**: If AI suggests unfamiliar packages, search documentation first!

Notes:
Dependency verification prevents integration disasters. When AI suggests a package, don't immediately install it—search the official registry first (npm, PyPI, Maven Central). Verify that the suggested API methods exist in the official documentation, not just Stack Overflow snippets. Check version compatibility with your project's environment. Test imports in isolation before weaving them into your codebase. Watch for deprecation warnings—AI training data may include outdated patterns. If you're unfamiliar with a package, spend five minutes reviewing its documentation. This small investment prevents hours of debugging mysterious import errors.

##--##

<!-- .slide -->
# Security Verification

## **Identifying Vulnerabilities**
<br>

### 🔓 Common Security Gaps in AI Code:

- **SQL Injection**: Direct string concatenation in queries
- **XSS**: Unescaped user input in HTML
- **Path Traversal**: Unsanitized file paths
- **Hardcoded Secrets**: API keys, passwords in code
- **Missing Authentication**: Unprotected endpoints
- **Insufficient Input Validation**: Trusting user data

### 🛡️ **Always**: Validate, sanitize, and escape user inputs!

Notes:
AI models are trained on code written before modern security awareness became standard. They may generate code with classic vulnerabilities: SQL queries built with string concatenation, user input rendered directly to HTML without escaping, file paths constructed from user input without validation. Always scrutinize any code that handles user input, database queries, file operations, or network requests. Use parameterized queries for databases, template engines with auto-escaping for HTML, and allowlists for file paths. Never hardcode secrets—use environment variables or secret management systems. Treat all AI-generated code as untrusted input until security review confirms otherwise.

##--##

<!-- .slide -->
# Performance Verification

## **Avoiding Scalability Issues**
<br>

### ⚡ Watch for Performance Anti-Patterns:

```python
# ❌ N+1 Query Problem (AI may not optimize)
for user in users:
    orders = db.query(f"SELECT * FROM orders WHERE user_id = {user.id}")
    
# ✅ Batch Query
user_ids = [user.id for user in users]
orders = db.query(f"SELECT * FROM orders WHERE user_id IN ({user_ids})")
```

```javascript
// ❌ Nested Loop (O(n²))
for (let user of users) {
    for (let order of orders) {
        if (order.userId === user.id) { ... }
    }
}

// ✅ Hash Map Lookup (O(n))
const ordersByUser = new Map();
orders.forEach(o => ordersByUser.set(o.userId, o));
users.forEach(u => { const order = ordersByUser.get(u.id); });
```

Notes:
AI often optimizes for readability over performance, generating code that works correctly but scales poorly. The N+1 query problem is particularly common—the AI generates a loop that makes one database query per iteration, when a single batched query would suffice. Similarly, nested loops over collections may seem clear but create quadratic complexity. Before accepting generated code, consider its performance characteristics: How will it behave with 1000 items? 100,000 items? Use profiling tools for critical paths. Hash maps, batch operations, and caching can transform algorithmic complexity. Don't optimize prematurely, but don't accept naive implementations in performance-critical code either.

##--##

<!-- .slide -->
# Verifying Code Testability

## **Ensuring Maintainability**
<br>

### ❌ **Hard to Test** (tight coupling):
```javascript
function processOrder(orderId) {
    const db = new Database();  // Hard-coded dependency!
    const order = db.getOrder(orderId);
    const email = new EmailService();
    email.send(order.user.email, "Order confirmed");
}
```

### ✅ **Testable** (dependency injection):
```javascript
function processOrder(orderId, db, emailService) {
    const order = db.getOrder(orderId);
    emailService.send(order.user.email, "Order confirmed");
}
// Easy to mock db and emailService in tests!
```

Notes:
AI-generated code often lacks testability because it creates hard-coded dependencies—instantiating databases, email services, or external APIs directly inside functions. This makes unit testing nearly impossible without hitting real infrastructure. Look for tight coupling: functions that directly instantiate their dependencies can't be tested in isolation. Refactor for dependency injection, where dependencies are passed as parameters. This enables mocking in tests. AI can help with this refactoring—paste the generated code and ask, "How can I make this more testable using dependency injection?" Testable code is maintainable code, and catching testability issues early prevents technical debt.

##--##

<!-- .slide -->
# Using AI to Verify AI Code

## **Meta-Review Strategy**
<br>

### 🤖 **Meta-Strategy**: Use AI to review AI

**Prompt Pattern**:
```
Review this code for:
1. Correctness issues
2. Security vulnerabilities  
3. Performance bottlenecks
4. Missing edge cases
5. Dependency hallucinations

[paste code]

What issues do you find?
```

### ⚠️ **Remember**: AI can find issues it created—but **you** make final decisions!

Notes:
Here's a powerful technique: use AI to review AI-generated code. Paste generated code back into the chat with a systematic review prompt covering the seven-point checklist. AI can often spot its own mistakes when prompted to look critically—particularly hallucinations, incorrect API usage, and missing edge cases. However, don't trust this meta-review blindly. AI models can contradict themselves or miss issues they highlighted moments ago. Use AI-powered review as one tool in your verification toolkit, complementing manual inspection, testing, and documentation checks. The human developer remains the final arbiter of code quality. Think of AI review as a second pair of eyes, not a replacement for your judgment.

##--##

<!-- .slide -->
# Best Practices for Code Verification

## **Professional Standards**
<br>

1. ✅ **Always test** before integrating AI code
2. 📚 **Check documentation** for unfamiliar APIs/packages
3. 🧪 **Write tests first** (TDD approach)
4. 🔍 **Manual review** critical sections (auth, payment, security)
5. 🤖 **Use AI for review** but verify AI's verification
6. 📊 **Track patterns** in AI errors to improve prompts
7. 🔄 **Iterate**: Fix, re-test, refine

Notes:
Synthesizing verification into best practices: test everything, check official documentation for any unfamiliar code, consider test-driven development where you write tests before accepting AI solutions, manually review critical sections like authentication and payment processing, use AI to review AI but verify those findings independently, track common error patterns to improve your prompting strategy, and iterate until the code meets your quality bar. Verification becomes faster with practice—you'll develop intuition for red flags like unusual package names, overly complex logic, or missing error handling. Make verification a habit, not an afterthought.

##--##

<!-- .slide -->
# Summary: Code Verification Mindset

## **Key Principles**
<br>

| Principle | Why It Matters |
|-----------|----------------|
| 🎯 **Trust but Verify** | AI is a tool, not a source of truth |
| 🧪 **Test Everything** | Bugs found early are easier to fix |
| 📚 **Documentation First** | Official docs > AI suggestions |
| 🔒 **Security Always** | One vulnerability can compromise everything |
| ⚡ **Performance Matters** | Slow code becomes slower at scale |
| 🧪 **Testability Counts** | Untestable code becomes unmaintainable |
| 🔄 **Iterate and Improve** | First draft is rarely the best solution |

Notes:
Adopt a verification mindset that balances speed with quality. Trust AI to accelerate your work, but verify every significant suggestion through testing, documentation review, and critical thinking. Test everything—the cost of finding bugs in development is trivial compared to production incidents. Always consult official documentation before trusting AI's API usage. Security cannot be an afterthought—one SQL injection vulnerability can compromise an entire system. Consider performance implications early, especially for code that will run at scale. Prioritize testability to ensure long-term maintainability. Finally, iterate—AI's first suggestion is a starting point, not a final solution. With practice, verification becomes second nature, making you a more effective developer regardless of whether you're using AI assistance.

##--##

<!-- .slide: class="exercice" -->
# Exercise 3: Code Verification
## Lab 33

<br>

### 👉🏾 Follow **instructions** in

### `labs/lab-33-code-verification/README.md`

Notes:
- Follow the instructions in the lab README.md for detailed steps.

##--##

<!-- .slide: class="exercice" -->
# Exercise 3: Code Verification
## Lab 33

<br>

### 💡 Read **solution** at

### `labs/lab-33-code-verification-solution/README.md`

Notes:
- Read the lab README.md for example of solutions.
