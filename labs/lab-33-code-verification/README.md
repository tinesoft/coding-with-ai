# Lab 33: Code Verification - Evaluating AI-Generated Code

## Learning Objectives

By completing this lab, you will:
- Apply the 7-point verification checklist systematically to AI-generated code
- Identify correctness issues, logic errors, and security vulnerabilities
- Detect dependency hallucinations and API misuse
- Recognize best practice violations and performance problems
- Evaluate code testability and suggest improvements
- Document verification findings in a structured format
- Build critical thinking skills for code review

## Prerequisites

- Completion of Module 3 slides on code verification
- Understanding of the 7-point checklist
- Basic familiarity with Python and JavaScript
- Ability to read and analyze code critically

## Time Estimate

⏱️ **60-75 minutes** total:
- Setup: 5 minutes
- Exercise 1 (Correctness): 8 minutes
- Exercise 2 (Logic): 8 minutes
- Exercise 3 (Security): 10 minutes
- Exercise 4 (Dependencies): 8 minutes
- Exercise 5 (Best Practices): 8 minutes
- Exercise 6 (Performance): 10 minutes
- Exercise 7 (Testability): 10 minutes
- Review: 8 minutes

## Lab Structure

```
labs/lab-33-code-verification/
├── README.md (this file)
└── exercises/
    └── ai-generated-code/
        ├── correctness_issue.py
        ├── logic_error.py
        ├── security_issue.py
        ├── dependency_hallucination.py
        ├── best_practice_violation.js
        ├── performance_issue.py
        └── testability_issue.py
```

## Instructions

### Setup

1. Navigate to the lab directory:
   ```bash
   cd labs/lab-33-code-verification/exercises/ai-generated-code
   ```

2. Have your verification checklist ready (refer to slide 33b):
   - 1️⃣ Correctness
   - 2️⃣ Logic
   - 3️⃣ Security
   - 4️⃣ Dependencies
   - 5️⃣ Best Practices
   - 6️⃣ Performance
   - 7️⃣ Testability

3. Create a verification notes file to document findings:
   ```bash
   touch verification-notes.md
   ```

---

### Exercise 1: Correctness Issue

**Objective:** Identify fundamental correctness problems in AI-generated code

**File:** `correctness_issue.py`

**Instructions:**
1. Read the code and its docstring to understand the intended behavior
2. Mentally trace the algorithm—what does it claim to do?
3. Test it with sample inputs (on paper or by running it)
4. Identify where the output differs from expectations
5. Document the correctness issue in your notes

**Verification Questions:**
- Does the algorithm match the specification in the docstring?
- What inputs produce incorrect outputs?
- What is the root cause of the incorrectness?

---

### Exercise 2: Logic Error

**Objective:** Find edge case handling issues and boundary condition bugs

**File:** `logic_error.py`

**Instructions:**
1. Read the function and identify its purpose
2. List potential edge cases: empty input, null values, boundary values
3. Trace the code execution for each edge case
4. Identify which edge cases are not handled correctly
5. Document the logic error and its consequences

**Verification Questions:**
- What edge cases exist for this function?
- Are all edge cases handled correctly?
- Are there off-by-one errors or boundary issues?

---

### Exercise 3: Security Issue

**Objective:** Detect security vulnerabilities in AI-generated code

**File:** `security_issue.py`

**Instructions:**
1. Read the code focusing on user input handling
2. Identify any database queries, file operations, or external calls
3. Check for input validation and sanitization
4. Identify the specific vulnerability type (SQL injection, XSS, etc.)
5. Document the security risk and potential impact

**Verification Questions:**
- How is user input handled?
- Are there any injection vulnerabilities?
- What data could an attacker manipulate?

---

### Exercise 4: Dependency Hallucination

**Objective:** Identify nonexistent packages, modules, or API methods

**File:** `dependency_hallucination.py`

**Instructions:**
1. Review all import statements
2. Check each package/module against official documentation:
   - Search PyPI for Python packages: https://pypi.org
   - Verify API methods in official docs
3. Identify which dependencies or APIs don't actually exist
4. Document the hallucinations and suggest real alternatives

**Verification Questions:**
- Do all imported packages exist in the official registry?
- Are the API methods real and correctly used?
- What are the correct alternatives?

**Resources:**
- Python Package Index (PyPI): https://pypi.org
- Python Standard Library: https://docs.python.org/3/library/

---

### Exercise 5: Best Practice Violations

**Objective:** Recognize code quality and maintainability issues

**File:** `best_practice_violation.js`

**Instructions:**
1. Read the code and assess naming conventions
2. Evaluate code structure and organization
3. Check for JavaScript/TypeScript best practices
4. Identify violations of clean code principles
5. Document improvements needed for maintainability

**Verification Questions:**
- Are variable and function names descriptive?
- Does the code follow language conventions?
- Is the structure clear and maintainable?

---

### Exercise 6: Performance Issue

**Objective:** Identify algorithmic inefficiencies and performance anti-patterns

**File:** `performance_issue.py`

**Instructions:**
1. Read the code and identify nested loops or repeated operations
2. Analyze the algorithmic complexity (O(n), O(n²), etc.)
3. Identify the specific performance anti-pattern (N+1 queries, etc.)
4. Estimate how it would perform with large data sets
5. Document the performance issue and suggest optimizations

**Verification Questions:**
- What is the algorithmic complexity?
- How will it perform with 1000 items? 100,000 items?
- What optimization strategies apply?

---

### Exercise 7: Testability Issue

**Objective:** Evaluate code structure for unit testing feasibility

**File:** `testability_issue.py`

**Instructions:**
1. Read the function and identify its dependencies
2. Determine if dependencies are hard-coded or injectable
3. Assess whether the function can be tested in isolation
4. Identify tight coupling that prevents mocking
5. Document testability issues and refactoring recommendations

**Verification Questions:**
- Can this function be unit tested easily?
- Are dependencies hard-coded or injectable?
- How would you refactor for better testability?

---

## Verification Workflow Checklist

For each exercise, follow this systematic approach:

- [ ] **READ**: Understand what the code claims to do
- [ ] **TEST**: Run it with typical inputs (mentally or actually)
- [ ] **EDGE CASES**: Consider boundaries, nulls, empty arrays
- [ ] **INSPECT**: Check dependencies, imports, API calls
- [ ] **REVIEW**: Apply the 7-point checklist
- [ ] **REFINE**: Identify specific issues and improvements
- [ ] **DOCUMENT**: Record findings in verification-notes.md

## Documentation Format

For each code sample, structure your notes like this:

```markdown
### [Filename] Verification Report

**Issue Category:** [Correctness/Logic/Security/etc.]

**Findings:**
- Issue 1: [Specific problem found]
- Issue 2: [Another problem]

**Impact:**
- [What could go wrong in production?]

**Recommendations:**
- Recommendation 1: [How to fix it]
- Recommendation 2: [Alternative approach]

**Checklist Results:**
- 1️⃣ Correctness: ❌/✅
- 2️⃣ Logic: ❌/✅
- 3️⃣ Security: ❌/✅
- 4️⃣ Dependencies: ❌/✅
- 5️⃣ Best Practices: ❌/✅
- 6️⃣ Performance: ❌/✅
- 7️⃣ Testability: ❌/✅
```

## Testing Code Samples

### Python Samples

```bash
# Run individual Python file
python3 correctness_issue.py

# Or execute specific function interactively
python3 -c "from correctness_issue import function_name; print(function_name(test_input))"
```

### JavaScript Sample

```bash
# Run JavaScript file
node best_practice_violation.js

# Or test specific function
node -e "const {functionName} = require('./best_practice_violation.js'); console.log(functionName(testInput));"
```

## Tips for Success

1. **Be Systematic**: Work through the checklist methodically for each file
2. **Test Don't Assume**: Actually run code when possible to verify behavior
3. **Check Documentation**: Verify APIs and packages against official sources
4. **Think Like an Attacker**: For security, consider malicious inputs
5. **Consider Scale**: For performance, imagine 1000x the data
6. **Question Everything**: AI-generated code can look plausible but be wrong
7. **Document Thoroughly**: Good notes help you learn verification patterns

## Common Pitfalls to Avoid

- ❌ **Trusting appearance**: Code that looks professional may still be buggy
- ❌ **Skipping edge cases**: The "happy path" always works—test boundaries
- ❌ **Ignoring dependencies**: Hallucinated packages won't install
- ❌ **Overlooking security**: Input validation saves production disasters
- ❌ **Accepting inefficiency**: O(n²) becomes O(disaster) at scale
- ❌ **Forgetting tests**: Untestable code becomes unmaintainable code

## Learning Outcomes

After completing this lab, you should be able to:
- ✅ Apply verification checklist to any code systematically
- ✅ Identify the seven common categories of AI code issues
- ✅ Distinguish between superficial and fundamental problems
- ✅ Document verification findings professionally
- ✅ Suggest concrete improvements for each issue type
- ✅ Evaluate code quality holistically, not just functionality
- ✅ Build habits for safe AI-assisted development

## Next Steps

1. Compare your findings with the solution README in `labs/lab-33-code-verification-solution/`
2. Review the detailed verification reports in the solution `resources/verification-reports/` directory
3. Practice the verification workflow on your own AI-generated code
4. Develop custom checklists for your specific project domains
5. Share verification patterns with your team

## Additional Resources

- **OWASP Top 10**: https://owasp.org/www-project-top-ten/ (Security vulnerabilities)
- **Big-O Cheat Sheet**: https://www.bigocheatsheet.com/ (Algorithm complexity)
- **Python PEP 8**: https://peps.python.org/pep-0008/ (Python style guide)
- **JavaScript Standard Style**: https://standardjs.com/ (JS best practices)
- **Martin Fowler's Refactoring Catalog**: https://refactoring.com/catalog/ (Code quality patterns)

---

**Remember**: Verification is not about distrusting AI—it's about maintaining professional standards for all code, regardless of source. The skills you build here make you a better developer whether you're using AI assistance or not.
