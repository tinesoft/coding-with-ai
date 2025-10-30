<!-- .slide: class="transition" -->
# Module 3: Assessment and Recap
## Validating Your Learning

##--##

<!-- .slide: -->
# **Learning Objectives Review**

## **What You've Learned**
<br>

### **1. AI-Assisted Debugging** ✓
Systematic debugging workflow with AI as diagnostic assistant

### **2. Code Refactoring** ✓
Applying refactoring patterns with AI suggestions

### **3. Code Verification** ✓
Critical evaluation of AI-generated code

Notes:
Let's review what you've accomplished in this module and validate your understanding.

##--##

<!-- .slide: -->
# **Knowledge Check**

## **Question 1: Debugging Workflow**
<br>

### What is the correct order for systematic debugging with AI?

**A)** Ask AI to fix → Apply suggestion → Test  
**B)** Reproduce → Isolate → AI hypothesize → Validate → Fix  
**C)** Write test → Ask AI → Copy solution  
**D)** Read error → Google → Ask AI

<details>
<summary>Answer</summary>
**B** - Systematic debugging follows: Reproduce the bug, isolate the cause, use AI to hypothesize root causes, validate hypotheses, then apply fixes. AI accelerates but doesn't replace the debugging process.
</details>

Notes:
Systematic debugging ensures you understand the problem, not just apply fixes blindly.

##--##

<!-- .slide: -->
# **Knowledge Check**

## **Question 2: AI Debugging Limitations**
<br>

### When should you NOT blindly trust AI debugging suggestions?

**A)** For syntax errors  
**B)** For complex logic errors requiring domain knowledge  
**C)** For simple typos  
**D)** Never - AI is always correct

<details>
<summary>Answer</summary>
**B** - AI may not understand your specific domain logic, business rules, or architectural constraints. Complex bugs often require human expertise to properly diagnose and fix.
</details>

Notes:
AI excels at pattern recognition but may miss context-specific issues.

##--##

<!-- .slide: -->
# **Knowledge Check**

## **Question 3: Refactoring Patterns**
<br>

### Which refactoring is most appropriate for this code?

```python
if user.is_active and user.has_permission('admin') and user.email_verified and not user.is_banned:
    allow_access()
```

**A)** Extract Method  
**B)** Rename Variable  
**C)** Simplify Conditional  
**D)** Remove Duplication

<details>
<summary>Answer</summary>
**C** - Extract the complex conditional into a meaningful method: `if user.can_access_admin():`. AI tools excel at suggesting this pattern.
</details>

Notes:
Complex conditionals benefit from extraction to improve readability.

##--##

<!-- .slide: -->
# **Knowledge Check**

## **Question 4: Refactoring Safety**
<br>

### What should you ALWAYS do before applying AI-suggested refactorings?

**A)** Verify tests still pass after changes  
**B)** Ask another AI for confirmation  
**C)** Apply all suggestions at once  
**D)** Skip testing for simple changes

<details>
<summary>Answer</summary>
**A** - Always run tests after refactoring to ensure functionality is preserved. Refactoring should improve code structure without changing behavior.
</details>

Notes:
Testing validates that refactoring maintained correctness.

##--##

<!-- .slide: -->
# **Knowledge Check**

## **Question 5: AI Code Verification**
<br>

### Which is NOT part of the 7-point verification checklist?

**A)** Correctness and logic errors  
**B)** Security vulnerabilities  
**C)** Code formatting preferences  
**D)** Dependency hallucinations

<details>
<summary>Answer</summary>
**C** - Formatting is important but not a critical verification concern. The checklist focuses on: correctness, logic, security, dependencies, best practices, performance, and testability.
</details>

Notes:
Focus verification on functional and security concerns, not style.

##--##

<!-- .slide: -->
# **Knowledge Check**

## **Question 6: Dependency Hallucinations**
<br>

### AI suggests using package `ultra-fast-json-parser`. What should you do?

**A)** Install it immediately  
**B)** Verify the package exists and check for known vulnerabilities  
**C)** Trust AI - it wouldn't suggest fake packages  
**D)** Use it but don't commit to version control

<details>
<summary>Answer</summary>
**B** - Always verify packages exist on official registries (npm, PyPI) and check for security issues. AI can hallucinate package names that sound plausible but don't exist.
</details>

Notes:
Package hallucinations are a common AI issue that can break builds.

##--##

<!-- .slide: -->
# **Knowledge Check**

## **Question 7: Security Verification**
<br>

### What security issue is present in this AI-generated code?

```python
def get_user(user_id):
    query = f"SELECT * FROM users WHERE id = {user_id}"
    return db.execute(query)
```

**A)** No error handling  
**B)** SQL injection vulnerability  
**C)** Performance issue  
**D)** Missing type hints

<details>
<summary>Answer</summary>
**B** - String interpolation in SQL queries allows SQL injection. Should use parameterized queries: `db.execute("SELECT * FROM users WHERE id = ?", (user_id,))`
</details>

Notes:
AI often generates code with security vulnerabilities that require human review.

##--##

<!-- .slide: -->
# **Knowledge Check**

## **Question 8: Logic Error Detection**
<br>

### What's wrong with this AI-generated function?

```python
def calculate_discount(price, discount_percent):
    return price - (price * discount_percent)
```

**A)** Nothing - it's correct  
**B)** Missing edge case handling (negative values, >100%)  
**C)** Performance issue  
**D)** Wrong algorithm

<details>
<summary>Answer</summary>
**B** - Function doesn't validate inputs. What if `discount_percent` is 150% or -20%? Always check AI code for edge cases.
</details>

Notes:
AI often misses edge case validation that humans catch through experience.

##--##

<!-- .slide: -->
# **Knowledge Check**

## **Question 9: When to Trust AI**
<br>

### In which scenario is AI suggestion most reliable?

**A)** Complex business logic specific to your domain  
**B)** Standard refactoring patterns (extract method, rename)  
**C)** Security-critical authentication code  
**D)** Database schema design

<details>
<summary>Answer</summary>
**B** - AI excels at well-known patterns and standard practices. Be skeptical of domain-specific logic, security code, and architectural decisions.
</details>

Notes:
Trust AI for patterns, verify for specifics and security.

##--##

<!-- .slide: -->
# **Knowledge Check**

## **Question 10: Human-in-the-Loop**
<br>

### What does "human-in-the-loop" mean for AI coding?

**A)** AI does everything, humans just approve  
**B)** Humans lead, AI assists, humans validate all changes  
**C)** Use AI only when stuck  
**D)** Alternate between AI and manual coding

<details>
<summary>Answer</summary>
**B** - Human-in-the-loop means you maintain control: define problems, evaluate AI suggestions critically, validate correctness, and make final decisions. AI accelerates but doesn't replace expertise.
</details>

Notes:
This methodology prevents over-reliance while maximizing AI benefits.

##--##

<!-- .slide: -->
# **Resources**

## **Further Learning**
<br>

### **Documentation**
- [GitHub Copilot Best Practices](https://github.blog/developer-skills/github/)
- [AI-Assisted Debugging Research](https://www.microsoft.com/en-us/research/publication/ai-assisted-debugging/)

### **Lab Solutions**
- Review `labs/lab-31-ai-debugging-solution/`
- Review `labs/lab-32-ai-refactoring-solution/`
- Review `labs/lab-33-code-verification-solution/`

Notes:
Refer back to lab solutions as references for your own work.
