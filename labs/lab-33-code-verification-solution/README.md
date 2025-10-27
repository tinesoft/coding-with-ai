# Lab 33 Solution: Code Verification - Evaluating AI-Generated Code

## Solution Overview

This solution guide provides detailed analysis for each of the seven AI-generated code samples. Each section follows the 7-point verification checklist and documents specific issues found, their impact, and recommended fixes.

## General Verification Approach

For every code sample, we applied this systematic workflow:

1. **READ**: Understand the intended functionality from docstrings
2. **TEST**: Execute code with sample inputs to observe behavior
3. **EDGE CASES**: Test boundary conditions, null values, empty inputs
4. **INSPECT**: Verify all dependencies, imports, and external calls
5. **REVIEW**: Apply the complete 7-point checklist
6. **DOCUMENT**: Record findings with impact assessment
7. **RECOMMEND**: Suggest concrete improvements

---

## Exercise 1: Correctness Issue - `correctness_issue.py`

### Verification Report

**Issue Category:** Correctness - Fundamental Algorithm Error

**Problem Statement:**
The function `calculate_median()` claims to compute the median of a list of numbers, but implements a completely different algorithm.

**Root Cause:**
Instead of finding the middle value(s) of a sorted list, the function calculates the average of the **first and last elements** after sorting. This is fundamentally incorrect.

**Code Analysis:**
```python
# WRONG IMPLEMENTATION
median = (sorted_nums[0] + sorted_nums[-1]) / 2
```

**Correct Implementation:**
```python
def calculate_median(numbers):
    """Calculate the median value of a list of numbers."""
    if not numbers:
        return None
    
    sorted_nums = sorted(numbers)
    n = len(sorted_nums)
    
    if n % 2 == 0:  # Even number of elements
        mid1 = n // 2 - 1
        mid2 = n // 2
        median = (sorted_nums[mid1] + sorted_nums[mid2]) / 2
    else:  # Odd number of elements
        mid = n // 2
        median = sorted_nums[mid]
    
    return median
```

**Test Results:**
| Input | Expected | Actual (Buggy) | Correct? |
|-------|----------|----------------|----------|
| [1,2,3,4,5] | 3.0 | 3.0 | ✅ (by chance!) |
| [1,2,3,4] | 2.5 | 2.5 | ✅ (by chance!) |
| [5,1,4,2,3] | 3.0 | 3.0 | ✅ (lucky!) |
| [1,2,2,2,3] | 2.0 | 2.0 | ✅ (lucky!) |
| [1,2,3,100] | 2.5 | 50.5 | ❌ WRONG |
| [1,100] | 50.5 | 50.5 | ✅ (coincidence) |
| [1,2,3,4,5,100] | 3.5 | 50.5 | ❌ WRONG |

**Impact:**
- Produces completely wrong results for most real-world datasets
- Fails silently—no errors, just incorrect results
- Would cause data analysis errors in production
- Tests may pass if using symmetric or evenly distributed data

**7-Point Checklist Results:**
- 1️⃣ **Correctness**: ❌ **FAILED** - Algorithm is wrong
- 2️⃣ **Logic**: ✅ Handles edge cases (empty list)
- 3️⃣ **Security**: N/A - Pure computation
- 4️⃣ **Dependencies**: ✅ Uses only stdlib
- 5️⃣ **Best Practices**: ✅ Good naming, documentation
- 6️⃣ **Performance**: ✅ O(n log n) sorting is fine
- 7️⃣ **Testability**: ✅ Pure function, easily testable

**Recommendations:**
1. ✅ Implement correct median algorithm (see above)
2. ✅ Add comprehensive test cases including skewed distributions
3. ✅ Consider edge cases: single element, two elements, large outliers
4. ✅ Add type hints and input validation

**Key Lesson:**
Correctness issues can hide behind plausible-looking code that passes simple tests. Always test with diverse datasets, especially edge cases and distributions that aren't symmetric or evenly spaced.

---

## Exercise 2: Logic Error - `logic_error.py`

### Verification Report

**Issue Category:** Logic Errors - Edge Cases & Boolean Logic

**Problem Statement:**
The `validate_password()` function contains multiple logic errors that cause it to reject valid passwords and accept invalid ones.

**Issues Found:**

**1. Off-by-One Error (Line 29):**
```python
if len(password) > 8:  # WRONG: Should be >= 8, and logic inverted!
    return False
```
Should be:
```python
if len(password) < 8:
    return False
```

**2. Missing Null/None Check:**
Will crash with `TypeError` on `None` input instead of returning `False`.

**3. Missing Special Character Validation:**
Requirements specify special characters (!@#$%^&*), but no validation exists.

**4. Inverted Boolean Logic (Line 65):**
```python
return not (has_upper and has_lower and has_digit)  # Returns True when INVALID!
```
Should be:
```python
return has_upper and has_lower and has_digit and has_special
```

**Correct Implementation:**
```python
def validate_password(password):
    """Validate password meets security requirements."""
    # Handle None/empty edge cases
    if password is None or len(password) == 0:
        return False
    
    # Check minimum length (>= 8, not > 8)
    if len(password) < 8:
        return False
    
    # Check requirements
    has_upper = any(c.isupper() for c in password)
    has_lower = any(c.islower() for c in password)
    has_digit = any(c.isdigit() for c in password)
    has_special = any(c in '!@#$%^&*' for c in password)
    
    # Return True if ALL requirements met
    return has_upper and has_lower and has_digit and has_special
```

**Test Results:**
| Input | Expected | Actual (Buggy) | Issue |
|-------|----------|----------------|-------|
| "Pass123!" | True | False | Length logic inverted |
| "Pass1234!" | True | True | Works by accident |
| "Pass1!" | False | True | Length check wrong |
| "Password123" | False | True | No special char check |
| "" | False | CRASH | No empty string check |
| None | False | CRASH | No None check |

**Impact:**
- Weak passwords accepted (missing special chars)
- Valid passwords rejected (off-by-one error)
- Application crashes on edge cases (None, empty)
- Security vulnerability—inadequate password enforcement

**7-Point Checklist Results:**
- 1️⃣ **Correctness**: ❌ **FAILED** - Core logic wrong
- 2️⃣ **Logic**: ❌ **FAILED** - Multiple edge case bugs
- 3️⃣ **Security**: ❌ **FAILED** - Weak password acceptance
- 4️⃣ **Dependencies**: ✅ Uses only stdlib
- 5️⃣ **Best Practices**: ⚠️ Could use list comprehensions
- 6️⃣ **Performance**: ✅ O(n) is fine for passwords
- 7️⃣ **Testability**: ✅ Pure function

**Recommendations:**
1. ✅ Fix length check (>= 8, not > 8)
2. ✅ Add None/empty validation at start
3. ✅ Implement special character validation
4. ✅ Correct boolean logic (remove `not`)
5. ✅ Use `any()` with generator expressions for cleaner code
6. ✅ Add comprehensive test suite covering all edge cases

**Key Lesson:**
Edge cases (None, empty, boundary values) often reveal logic bugs that pass "happy path" tests. Always test boundaries: empty, minimum length, maximum length, null/None values.

---

## Exercise 3: Security Issue - `security_issue.py`

### Verification Report

**Issue Category:** Security - SQL Injection & Information Disclosure

**Problem Statement:**
The database search functions contain critical SQL injection vulnerabilities that could allow attackers to bypass authentication, access unauthorized data, or delete records.

**Critical Vulnerabilities:**

**1. SQL Injection in `search_users()` (Lines 31-35):**
```python
# VULNERABLE TO INJECTION
query = f"SELECT ... WHERE name LIKE '%{search_term}%' OR email LIKE '%{search_term}%'"
if role_filter:
    query += f" AND role = '{role_filter}'"
```

**Attack Vector:**
```python
search_term = "' OR '1'='1"
# Results in: SELECT ... WHERE name LIKE '%' OR '1'='1%' OR email...
# Returns ALL users, bypassing filter

search_term = "'; DROP TABLE users; --"
# Could delete entire users table!
```

**2. SQL Injection in `get_user_details()` (Line 66):**
```python
query = f"SELECT * FROM users WHERE id = {user_id}"
# user_id = "1 OR 1=1" returns all users
```

**3. Missing Input Validation:**
No sanitization, escaping, or validation of user inputs.

**4. Information Disclosure (Lines 54-56):**
```python
except Exception as e:
    print(f"Database error: {e}")
    print(f"Query was: {query}")  # LEAKS INTERNAL STRUCTURE!
```

**5. Missing Authentication/Authorization:**
`get_user_details()` allows anyone to access any user's data.

**Secure Implementation:**
```python
def search_users(search_term, role_filter=None):
    """Search users - SECURE VERSION with parameterized queries."""
    # Input validation
    if not isinstance(search_term, str) or len(search_term) > 100:
        raise ValueError("Invalid search term")
    
    if role_filter and role_filter not in ['admin', 'user', 'guest']:
        raise ValueError("Invalid role filter")
    
    conn = sqlite3.connect('users.db')
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    
    # SECURE: Parameterized query
    query = "SELECT id, name, email, role FROM users WHERE name LIKE ? OR email LIKE ?"
    params = [f'%{search_term}%', f'%{search_term}%']
    
    if role_filter:
        query += " AND role = ?"
        params.append(role_filter)
    
    try:
        cursor.execute(query, params)  # Parameters separate from query!
        results = cursor.fetchall()
        
        users = [dict(row) for row in results]
        return users
    
    except Exception as e:
        # Log error securely (don't expose details to user)
        logger.error(f"Database error in search_users: {e}")
        return []  # Generic error response
    
    finally:
        conn.close()


def get_user_details(user_id, requesting_user_id):
    """Get user details - SECURE VERSION with auth check."""
    # Authorization: Users can only access their own details (or admins can access all)
    if not is_authorized(requesting_user_id, user_id):
        raise PermissionError("Unauthorized access")
    
    # Input validation
    if not isinstance(user_id, int) or user_id < 1:
        raise ValueError("Invalid user ID")
    
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    
    # SECURE: Parameterized query
    query = "SELECT * FROM users WHERE id = ?"
    cursor.execute(query, (user_id,))
    
    result = cursor.fetchone()
    conn.close()
    
    return result
```

**Impact:**
- **CRITICAL**: Unauthorized data access
- **CRITICAL**: Potential data deletion
- **HIGH**: Information disclosure via error messages
- **HIGH**: Missing access control
- **Exploitable** in production—immediate security risk

**7-Point Checklist Results:**
- 1️⃣ **Correctness**: ⚠️ Works but insecure
- 2️⃣ **Logic**: ⚠️ Functional but vulnerable
- 3️⃣ **Security**: ❌ **CRITICAL FAILURE** - Multiple vulnerabilities
- 4️⃣ **Dependencies**: ✅ Uses stdlib sqlite3
- 5️⃣ **Best Practices**: ❌ Violates security best practices
- 6️⃣ **Performance**: ✅ Queries are efficient
- 7️⃣ **Testability**: ⚠️ Hard-coded DB connection

**Recommendations:**
1. 🚨 **CRITICAL**: Use parameterized queries immediately
2. 🚨 **HIGH**: Add input validation and sanitization
3. 🚨 **HIGH**: Implement authentication/authorization
4. ✅ Use secure error handling (don't leak query details)
5. ✅ Add logging for security events (failed auth, suspicious inputs)
6. ✅ Consider using an ORM (SQLAlchemy) for additional protection
7. ✅ Add rate limiting to prevent brute force attacks

**Key Lesson:**
SQL injection is one of the most common and dangerous vulnerabilities. ALWAYS use parameterized queries (prepared statements), never build SQL with string concatenation. Input validation is a defense-in-depth measure but not a substitute for parameterized queries.

---

## Exercise 4: Dependency Hallucination - `dependency_hallucination.py`

### Verification Report

**Issue Category:** Dependency Hallucination - Nonexistent Packages & APIs

**Problem Statement:**
The code references multiple packages and API methods that don't exist, making the code completely non-functional.

**Hallucinations Identified:**

| Line | Hallucination | Reality | Correct Alternative |
|------|---------------|---------|---------------------|
| 12 | `dataforge` package | Doesn't exist | `pandas` |
| 12 | `DataFrame` from dataforge | N/A | `pandas.DataFrame` |
| 16 | `chartify` package | Doesn't exist | `plotly`, `matplotlib`, `seaborn` |
| 20 | `pdfmagic` package | Doesn't exist | `reportlab`, `fpdf2`, `weasyprint` |
| 24 | `requests.fetch_json()` | Method doesn't exist | `requests.get().json()` |
| 36 | `DataProcessor.from_api()` | Doesn't exist | Custom implementation |
| 41 | `.aggregate_by_category()` | Doesn't exist | `pandas.groupby()` |
| 48 | `BarChart.create_from_dataframe()` | Doesn't exist | `plotly.express.bar()` |
| 55 | `LineChart.with_trend_line()` | Doesn't exist | `plotly.express.line()` with trendline |
| 62 | `PieChart.auto_explode()` | Doesn't exist | Manual explode configuration |
| 69-73 | `PDFBuilder` and methods | Completely invented | `reportlab` canvas API |
| 86 | `nlpkit` package | Doesn't exist | `nltk`, `spacy`, `textblob`, `transformers` |
| 90 | `SentimentAnalyzer` | Doesn't exist | `TextBlob`, `transformers.pipeline` |

**Total Hallucinations:** 14 packages, classes, or methods that don't exist!

**Correct Implementation Using Real Packages:**
```python
import pandas as pd
import plotly.express as px
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
import requests

def generate_report(data_source_url):
    """Generate report using REAL packages."""
    
    # CORRECT: requests.get().json()
    response = requests.get(data_source_url)
    data = response.json()
    
    # CORRECT: pandas DataFrame
    df = pd.DataFrame(data)
    
    # CORRECT: pandas groupby
    summary = df.groupby('category').agg({
        'sales': ['sum', 'mean', 'count']
    })
    
    # CORRECT: plotly express for charts
    bar_chart = px.bar(
        summary.reset_index(),
        x='category',
        y=('sales', 'sum'),
        title='Sales by Category'
    )
    
    line_chart = px.line(
        df,
        x='date',
        y='sales',
        trendline='ols'  # Ordinary Least Squares trendline
    )
    
    pie_chart = px.pie(
        summary.reset_index(),
        values=('sales', 'sum'),
        names='category'
    )
    
    # CORRECT: reportlab for PDF
    pdf_filename = 'sales_report.pdf'
    c = canvas.Canvas(pdf_filename, pagesize=letter)
    c.drawString(100, 750, "Sales Report")
    
    # Save charts as images and add to PDF
    bar_chart.write_image("bar.png")
    c.drawImage("bar.png", 50, 500, width=500, height=200)
    
    c.save()
    
    return pdf_filename


def analyze_sentiment(text_data):
    """Sentiment analysis using REAL packages."""
    from textblob import TextBlob  # REAL package
    
    results = []
    for text in text_data:
        blob = TextBlob(text)
        results.append({
            'text': text,
            'polarity': blob.sentiment.polarity,
            'subjectivity': blob.sentiment.subjectivity
        })
    
    return results
```

**How to Verify Packages:**

1. **Search PyPI:**
   - Visit https://pypi.org
   - Search for package name
   - Check official documentation

2. **Test Installation:**
   ```bash
   pip search dataforge  # (deprecated but may work)
   pip install --dry-run dataforge  # Check if exists
   ```

3. **Check Documentation:**
   - Read official package docs
   - Verify API methods exist
   - Check version compatibility

**Impact:**
- Code will not run at all (`ImportError` immediately)
- Wastes development time debugging
- May delay project if not caught early
- Requires complete rewrite with real packages

**7-Point Checklist Results:**
- 1️⃣ **Correctness**: ❌ Cannot execute
- 2️⃣ **Logic**: N/A - Can't run to test
- 3️⃣ **Security**: N/A - Can't run
- 4️⃣ **Dependencies**: ❌ **CRITICAL FAILURE** - All hallucinated
- 5️⃣ **Best Practices**: N/A
- 6️⃣ **Performance**: N/A
- 7️⃣ **Testability**: ❌ Cannot test non-existent code

**Recommendations:**
1. 🚨 **ALWAYS** verify package names on PyPI before using
2. ✅ Check official documentation for API methods
3. ✅ Test imports in a separate script before integrating
4. ✅ Use established, well-documented packages
5. ✅ If unfamiliar with a package, spend 5 minutes reading docs
6. ✅ Set up linting/type checking to catch import errors early

**Package Alternatives Table:**

| AI Hallucination | Real Alternatives |
|------------------|-------------------|
| `dataforge` | `pandas`, `numpy`, `polars` |
| `chartify` | `plotly`, `matplotlib`, `seaborn`, `altair` |
| `pdfmagic` | `reportlab`, `fpdf2`, `weasyprint`, `pdfkit` |
| `nlpkit` | `nltk`, `spacy`, `textblob`, `transformers` |

**Key Lesson:**
AI models can confidently generate plausible-sounding package names that don't exist. This is especially common when combining concepts (data + forge = dataforge). Always verify dependencies against official registries (PyPI for Python, npm for JavaScript) before attempting to use them.

---

## Exercise 5: Best Practice Violations - `best_practice_violation.js`

### Verification Report

**Issue Category:** Best Practice Violations - Code Quality & Maintainability

**Problem Statement:**
The code violates numerous JavaScript best practices, making it difficult to read, maintain, and debug.

**Violations Catalog (23 total):**

**Naming Violations:**
1. **Cryptic function name**: `proc()` instead of `processUserData()`
2. **Single-letter variables**: `d`, `x`, `y`, `z`, `i`, `n`
3. **Non-descriptive params**: `u`, `act`, `p` instead of `userId`, `action`, `promotion`

**Modern JavaScript Violations:**
4. **Using `var`**: Should use `const`/`let`
5. **No arrow functions**: Uses `function` keyword everywhere
6. **String concatenation**: `z = z + n.name + ", "` instead of template literals
7. **For loops**: `for (let i=0; ...)` instead of `.forEach()`, `.map()`
8. **Callback hell**: Nested callbacks instead of `async`/`await`

**Code Structure Violations:**
9. **Magic numbers**: `100`, `99.99`, `0.9` without explanation
10. **Global variables**: `globalCache`, `currentUser`
11. **No input validation**: Functions trust all inputs
12. **Deep nesting**: 4+ levels of if statements
13. **Mixing concerns**: DB, business logic, UI in one function
14. **Violates SRP**: Functions do multiple unrelated things
15. **Hard-coded values**: Prices, API keys embedded in code

**Documentation Violations:**
16. **No JSDoc**: Missing parameter/return documentation
17. **No comments**: Complex logic unexplained

**Security Violations:**
18. **Hard-coded API key**: `var API_KEY = "sk_live_123456789"`
19. **SQL injection**: Building queries with concatenation

**Style Violations:**
20. **Inconsistent formatting**: Random spacing
21. **Mixed quotes**: Single and double quotes
22. **No semicolons**: Inconsistent style
23. **No module system**: Should use ES6 imports/exports

**Refactored Version (Clean Code):**
```javascript
/**
 * Process premium user data and calculate totals.
 * 
 * @param {Array} users - Array of user objects
 * @returns {Object} Processed results with items, total, and names
 * @throws {Error} If users array is invalid or exceeds maximum length
 */
function processUserData(users) {
    const MAX_USERS = 100;
    
    if (!Array.isArray(users) || users.length === 0) {
        throw new Error('Invalid users array');
    }
    
    if (users.length > MAX_USERS) {
        throw new Error(`Too many users (max ${MAX_USERS})`);
    }
    
    // Filter for active premium users with sales > 50
    const MINIMUM_SALES = 50;
    const PREMIUM_TYPE = 'premium';
    
    const premiumUsers = users.filter(user => 
        user.isActive && 
        user.sales > MINIMUM_SALES && 
        user.type === PREMIUM_TYPE
    );
    
    // Calculate total sales
    const totalSales = premiumUsers.reduce(
        (sum, user) => sum + user.sales,
        0
    );
    
    // Extract user names
    const names = premiumUsers
        .map(user => user.name)
        .join(', ');
    
    return {
        items: premiumUsers,
        total: totalSales,
        names
    };
}


/**
 * Handle user purchase action.
 * 
 * @param {number} userId - ID of user making purchase
 * @param {number} requestingUserId - ID of user making request (for auth)
 * @param {Object|null} promotion - Optional promotion code object
 * @returns {Promise<boolean>} True if purchase successful
 */
async function handlePurchase(userId, requestingUserId, promotion = null) {
    // Input validation
    if (!isValidUserId(userId) || !isValidUserId(requestingUserId)) {
        throw new Error('Invalid user ID');
    }
    
    // Authorization check
    if (!isAuthorized(requestingUserId, userId)) {
        throw new Error('Unauthorized access');
    }
    
    // Fetch user data
    const userData = await getUserData(userId);
    
    // Check user status
    if (userData.status !== 'active') {
        return false;
    }
    
    // Calculate price with promotion
    const BASE_PRICE = await getPriceForUser(userData);
    const DISCOUNT_RATE = 0.1;
    
    const finalPrice = promotion?.code 
        ? BASE_PRICE * (1 - DISCOUNT_RATE)
        : BASE_PRICE;
    
    // Verify sufficient balance
    if (userData.balance < finalPrice) {
        return false;
    }
    
    // Process purchase
    await deductBalance(userId, finalPrice);
    await sendConfirmationEmail(userData.email);
    
    return true;
}


// Use environment variables for secrets
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    throw new Error('API_KEY environment variable not set');
}


/**
 * Fetch nested data using async/await instead of callbacks.
 */
async function fetchData(id) {
    const user = await getUser(id);
    const orders = await getOrders(user.id);
    const details = await getDetails(orders[0].id);
    return details;
}

// Export for module system
export { processUserData, handlePurchase, fetchData };
```

**Before/After Metrics:**

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Lines of code | 120 | 80 | 33% reduction |
| Cyclomatic complexity | 12 | 4 | 67% reduction |
| Single-letter vars | 7 | 0 | 100% improvement |
| Magic numbers | 5 | 0 | Named constants |
| Nesting depth | 5 levels | 2 levels | 60% flatter |
| Hard-coded secrets | 1 | 0 | Secure |

**Impact:**
- **Maintainability**: Extremely difficult to modify
- **Readability**: Hard to understand intent
- **Security**: Exposed secrets, SQL injection
- **Debugging**: Cryptic variable names hinder troubleshooting
- **Team collaboration**: Other developers struggle to work with code

**7-Point Checklist Results:**
- 1️⃣ **Correctness**: ⚠️ Likely works but unclear
- 2️⃣ **Logic**: ⚠️ Deep nesting suggests complexity
- 3️⃣ **Security**: ❌ Hard-coded secret, SQL injection
- 4️⃣ **Dependencies**: ✅ No external packages
- 5️⃣ **Best Practices**: ❌ **MAJOR FAILURE** - 23 violations
- 6️⃣ **Performance**: ⚠️ Callback hell may cause issues
- 7️⃣ **Testability**: ❌ Hard-coded DB, global state

**Recommendations:**
1. ✅ Rename all variables descriptively (`d` → `data`, `x` → `premiumUsers`)
2. ✅ Use `const`/`let` instead of `var`
3. ✅ Replace callbacks with `async`/`await`
4. ✅ Use template literals for strings
5. ✅ Extract magic numbers to named constants
6. ✅ Remove global variables
7. ✅ Add input validation
8. ✅ Reduce nesting with guard clauses
9. ✅ Separate concerns (one function, one responsibility)
10. ✅ Add JSDoc comments
11. ✅ Move secrets to environment variables
12. ✅ Use parameterized DB queries

**Key Lesson:**
Best practices exist for a reason—they make code readable, maintainable, and less bug-prone. AI-generated code often prioritizes "getting something working" over code quality. Always refactor for clarity, especially for production code. Remember: code is read far more often than it's written.

---

## Exercise 6: Performance Issue - `performance_issue.py`

### Verification Report

**Issue Category:** Performance - Algorithmic Inefficiency & N+1 Queries

**Problem Statement:**
The social network friend functions contain multiple performance anti-patterns that will cause catastrophic slowdown with realistic datasets.

**Critical Performance Issues:**

**1. N+1 Query Problem in `find_common_friends()` (Lines 23-24):**
```python
# Gets friends with 2 queries (OK)
user1_friends = get_user_friends(user1_id, database)
user2_friends = get_user_friends(user2_id, database)

# But then queries database for EACH common friend (N+1!)
for friend_id in common_friend_ids:
    friend_details = get_user_details(friend_id, database)  # N more queries!
```

**Impact:** For 50 common friends: 2 + 50 = **52 database queries**

**2. O(n²) Nested Loop (Lines 29-33):**
```python
# Compares every friend of user1 with every friend of user2
for friend1 in user1_friends:  # n iterations
    for friend2 in user2_friends:  # m iterations
        if friend1 == friend2:  # O(n*m) = O(n²) if both have n friends
```

**Impact:** For 200 friends each: **40,000 comparisons**

**3. O(n³) Triple Nested Loop in `get_friend_recommendations()` (Lines 50-65):**
```python
for friend_id in user_friends:  # n
    for potential_friend_id in friends_of_friend:  # n
        for existing_friend_id in user_friends:  # n
            # n³ comparisons!
```

**Impact:** For 100 friends: **1,000,000 iterations**

**4. Linear Search Instead of Sets (Lines 58-63):**
```python
# O(n) search repeated many times
for recommended in potential_friends:
    if recommended == potential_friend_id:  # Linear search!
```

**5. Loading Entire Datasets to Count (Lines 75-78):**
```python
def get_mutual_friends_count():
    common = find_common_friends(...)  # Loads all data
    return len(common)  # Just to count!
```

**Optimized Implementation:**
```python
def find_common_friends(user1_id, user2_id, database):
    """
    Find common friends - OPTIMIZED VERSION.
    
    Improvements:
    - Single batch query instead of N+1
    - Set intersection O(n) instead of nested loops O(n²)
    - Database does the work instead of Python
    """
    # OPTIMIZATION 1: Use database JOIN query
    query = """
        SELECT u.id, u.name, u.email
        FROM users u
        INNER JOIN friendships f1 ON u.id = f1.friend_id
        INNER JOIN friendships f2 ON u.id = f2.friend_id
        WHERE f1.user_id = ? AND f2.user_id = ?
    """
    results = database.execute(query, (user1_id, user2_id))
    
    return [dict(row) for row in results]
    
    # ALTERNATIVE: Set intersection in Python (still much faster)
    """
    user1_friends = set(get_user_friends(user1_id, database))
    user2_friends = set(get_user_friends(user2_id, database))
    
    # O(n) set intersection instead of O(n²) nested loops
    common_friend_ids = user1_friends & user2_friends
    
    # Single batch query for details
    if common_friend_ids:
        placeholders = ','.join('?' * len(common_friend_ids))
        query = f"SELECT * FROM users WHERE id IN ({placeholders})"
        return database.execute(query, tuple(common_friend_ids))
    
    return []
    """


def get_friend_recommendations(user_id, database):
    """
    Get friend recommendations - OPTIMIZED VERSION.
    
    Improvements:
    - Database does heavy lifting with single query
    - No nested loops in Python
    - Set operations instead of linear searches
    """
    # Let database find friends-of-friends efficiently
    query = """
        SELECT DISTINCT f2.friend_id as potential_friend_id, COUNT(*) as mutual_count
        FROM friendships f1
        INNER JOIN friendships f2 ON f1.friend_id = f2.user_id
        WHERE f1.user_id = ?
          AND f2.friend_id != ?
          AND f2.friend_id NOT IN (
              SELECT friend_id FROM friendships WHERE user_id = ?
          )
        GROUP BY f2.friend_id
        ORDER BY mutual_count DESC
        LIMIT 10
    """
    results = database.execute(query, (user_id, user_id, user_id))
    
    return [dict(row) for row in results]


def get_mutual_friends_count(user1_id, user2_id, database):
    """
    Count mutual friends - OPTIMIZED VERSION.
    
    Uses COUNT query instead of loading data.
    """
    query = """
        SELECT COUNT(DISTINCT f1.friend_id) as count
        FROM friendships f1
        INNER JOIN friendships f2 ON f1.friend_id = f2.friend_id
        WHERE f1.user_id = ? AND f2.user_id = ?
    """
    result = database.execute(query, (user1_id, user2_id))
    
    return result[0]['count'] if result else 0
```

**Performance Comparison:**

| Operation | Before | After | Improvement |
|-----------|--------|-------|-------------|
| Find common friends (200 each) | 40,000 comparisons + 50 queries | 1 query | **99.9% faster** |
| Friend recommendations (100 friends) | 1,000,000 iterations | 1 query | **99.9% faster** |
| Count mutual friends | Load all data | COUNT query | **99% less memory** |
| Execution time (10K users) | Minutes | Milliseconds | **10,000x faster** |

**Big-O Complexity:**

| Function | Before | After |
|----------|--------|-------|
| `find_common_friends` | O(n² + n) | O(n log n) (DB join) |
| `get_friend_recommendations` | O(n³) | O(n log n) (DB join) |
| `get_mutual_friends_count` | O(n²) | O(n log n) (DB count) |

**Impact:**
- **Small data (10 users)**: Barely noticeable
- **Medium data (1000 users)**: Seconds → Minutes
- **Large data (10,000+ users)**: Application unusable, potential timeout/crash
- **Production**: System overload, poor user experience

**7-Point Checklist Results:**
- 1️⃣ **Correctness**: ✅ Logic is correct (but slow)
- 2️⃣ **Logic**: ✅ Handles edge cases
- 3️⃣ **Security**: ⚠️ SQL injection (separate issue)
- 4️⃣ **Dependencies**: ✅ Only sqlite3
- 5️⃣ **Best Practices**: ❌ Violates performance best practices
- 6️⃣ **Performance**: ❌ **CRITICAL FAILURE** - O(n³) algorithms
- 7️⃣ **Testability**: ⚠️ Hard-coded DB

**Recommendations:**
1. 🚨 **CRITICAL**: Use database JOINs for complex queries
2. ✅ Replace nested loops with set operations
3. ✅ Batch database queries (avoid N+1)
4. ✅ Use COUNT queries instead of loading data to count
5. ✅ Add indexes on friendship table columns
6. ✅ Profile with realistic data sizes (1000+ users)
7. ✅ Consider caching for frequently accessed data
8. ✅ Add pagination for large result sets

**Key Lesson:**
Performance issues are often invisible with small test datasets. An O(n³) algorithm works fine with 10 items but becomes catastrophically slow with 1000 items. Always consider algorithmic complexity and test with production-scale data. Let databases do what they're optimized for—JOINs, aggregations, and filtering.

---

## Exercise 7: Testability Issue - `testability_issue.py`

### Verification Report

**Issue Category:** Testability - Hard-Coded Dependencies & Tight Coupling

**Problem Statement:**
The `OrderProcessor` class is nearly impossible to unit test due to hard-coded infrastructure dependencies embedded throughout the business logic.

**Testability Issues Identified:**

**1. Hard-Coded Database (Lines 28-29):**
```python
# Cannot mock—always connects to real production database!
conn = sqlite3.connect('/var/data/production.db')
```

**2. Hard-Coded File System (Lines 42-44, 62-66):**
```python
log_file = open('/var/log/orders.log', 'a')  # Real file required
receipt_path = f'/var/receipts/order_{order_id}.txt'  # Real directory
```

**3. Hard-Coded Email Service (Lines 47-48):**
```python
smtp_server = smtplib.SMTP('smtp.gmail.com', 587)
smtp_server.login('noreply@company.com', 'hardcoded_password!')
```

**4. Hard-Coded HTTP API (Lines 108-112):**
```python
response = requests.post(
    'https://api.shippingcompany.com/calculate',  # Real API call
    ...
)
```

**5. Hard-Coded SMS Service (Lines 132-136):**
```python
client = Client('AC123456789', 'auth_token_hardcoded')
client.messages.create(...)  # Real Twilio call
```

**6. Mixed Concerns:**
Business logic (order processing) entangled with infrastructure (DB, email, files).

**Problems This Creates:**

- ❌ **Cannot run tests** without production infrastructure
- ❌ **Tests are slow** (real DB, email, API calls)
- ❌ **Tests are brittle** (network failures, file permissions)
- ❌ **Tests are not isolated** (side effects on real systems)
- ❌ **Cannot mock dependencies** (no injection points)
- ❌ **Difficult to debug** (business logic mixed with I/O)

**Refactored for Testability:**

```python
# Step 1: Define dependency interfaces
class DatabaseInterface:
    """Interface for database operations."""
    def get_order(self, order_id):
        raise NotImplementedError
    
    def get_customer(self, customer_id):
        raise NotImplementedError
    
    def update_order_status(self, order_id, status):
        raise NotImplementedError


class EmailServiceInterface:
    """Interface for email operations."""
    def send_email(self, to, subject, body):
        raise NotImplementedError


class FileSystemInterface:
    """Interface for file operations."""
    def write_log(self, message):
        raise NotImplementedError
    
    def write_receipt(self, path, content):
        raise NotImplementedError


# Step 2: Refactor with dependency injection
class OrderProcessor:
    """
    Process customer orders - TESTABLE VERSION.
    
    All dependencies injected, making it easy to mock for testing.
    """
    
    def __init__(self, database, email_service, file_system):
        """
        Initialize with dependencies (can be mocks in tests!).
        
        Args:
            database: Object implementing DatabaseInterface
            email_service: Object implementing EmailServiceInterface
            file_system: Object implementing FileSystemInterface
        """
        self.db = database
        self.email = email_service
        self.fs = file_system
    
    def process_order(self, order_id):
        """
        Process an order - now testable!
        
        All infrastructure access goes through injected dependencies.
        """
        # Get order from injected database
        order = self.db.get_order(order_id)
        if not order:
            return False
        
        # Get customer from injected database
        customer = self.db.get_customer(order.customer_id)
        
        # Log via injected file system
        self.fs.write_log(f"Processing order {order_id}")
        
        # Send email via injected service
        self.email.send_email(
            to=customer.email,
            subject='Order Confirmation',
            body=f"Your order #{order_id} has been processed."
        )
        
        # Write receipt via injected file system
        receipt_content = f"Order ID: {order_id}\n"
        receipt_content += f"Customer: {customer.name}\n"
        receipt_content += f"Total: ${order.total}\n"
        self.fs.write_receipt(f'order_{order_id}.txt', receipt_content)
        
        # Update database via injected database
        self.db.update_order_status(order_id, 'processed')
        
        return True


# Step 3: Production implementation with real dependencies
class SQLiteDatabase(DatabaseInterface):
    """Real database implementation."""
    def __init__(self, db_path):
        self.db_path = db_path
    
    def get_order(self, order_id):
        conn = sqlite3.connect(self.db_path)
        # ... actual implementation
        conn.close()


class SMTPEmailService(EmailServiceInterface):
    """Real email implementation."""
    def __init__(self, smtp_host, smtp_port, username, password):
        self.smtp_host = smtp_host
        self.smtp_port = smtp_port
        self.username = username
        self.password = password
    
    def send_email(self, to, subject, body):
        # ... actual SMTP implementation


class LocalFileSystem(FileSystemInterface):
    """Real file system implementation."""
    def __init__(self, log_dir, receipt_dir):
        self.log_dir = log_dir
        self.receipt_dir = receipt_dir
    
    def write_log(self, message):
        with open(f'{self.log_dir}/orders.log', 'a') as f:
            f.write(f"{datetime.now()}: {message}\n")
    
    def write_receipt(self, filename, content):
        with open(f'{self.receipt_dir}/{filename}', 'w') as f:
            f.write(content)


# Step 4: Create processor with production dependencies
def create_production_processor():
    """Factory for production OrderProcessor."""
    db = SQLiteDatabase('/var/data/production.db')
    email = SMTPEmailService(
        smtp_host='smtp.gmail.com',
        smtp_port=587,
        username=os.getenv('EMAIL_USER'),
        password=os.getenv('EMAIL_PASSWORD')
    )
    fs = LocalFileSystem(
        log_dir='/var/log',
        receipt_dir='/var/receipts'
    )
    
    return OrderProcessor(db, email, fs)


# Step 5: Now we can write UNIT TESTS!
import unittest
from unittest.mock import Mock

class TestOrderProcessor(unittest.TestCase):
    """Unit tests for OrderProcessor - now possible!"""
    
    def setUp(self):
        """Create mocks for testing."""
        self.mock_db = Mock(spec=DatabaseInterface)
        self.mock_email = Mock(spec=EmailServiceInterface)
        self.mock_fs = Mock(spec=FileSystemInterface)
        
        # Create processor with mocks
        self.processor = OrderProcessor(
            self.mock_db,
            self.mock_email,
            self.mock_fs
        )
    
    def test_process_order_success(self):
        """Test successful order processing."""
        # Arrange
        order_id = 123
        mock_order = Mock(customer_id=456, total=99.99)
        mock_customer = Mock(email='test@example.com', name='Test User')
        
        self.mock_db.get_order.return_value = mock_order
        self.mock_db.get_customer.return_value = mock_customer
        
        # Act
        result = self.processor.process_order(order_id)
        
        # Assert
        self.assertTrue(result)
        self.mock_db.get_order.assert_called_once_with(order_id)
        self.mock_email.send_email.assert_called_once()
        self.mock_fs.write_log.assert_called_once()
        self.mock_fs.write_receipt.assert_called_once()
        self.mock_db.update_order_status.assert_called_once_with(order_id, 'processed')
    
    def test_process_order_not_found(self):
        """Test handling of missing order."""
        # Arrange
        self.mock_db.get_order.return_value = None
        
        # Act
        result = self.processor.process_order(999)
        
        # Assert
        self.assertFalse(result)
        self.mock_email.send_email.assert_not_called()


# Run tests:
# $ python -m pytest test_order_processor.py
# Tests run in milliseconds with no real infrastructure!
```

**Before/After Comparison:**

| Aspect | Before (Untestable) | After (Testable) |
|--------|---------------------|------------------|
| **Unit test possible?** | ❌ No | ✅ Yes |
| **Test speed** | N/A (can't test) | Milliseconds |
| **Mocking** | ❌ Impossible | ✅ Easy |
| **Test isolation** | ❌ Side effects | ✅ Isolated |
| **Setup complexity** | Requires full env | Mock objects |
| **Debuggability** | ❌ Mixed concerns | ✅ Clear separation |

**Impact:**
- **Development**: Slow iteration (can't test changes quickly)
- **Debugging**: Difficult to isolate issues
- **Refactoring**: Risky without tests
- **CI/CD**: Cannot run automated tests (needs infrastructure)
- **Team productivity**: Fear of making changes

**7-Point Checklist Results:**
- 1️⃣ **Correctness**: ⚠️ Likely correct but unverified
- 2️⃣ **Logic**: ⚠️ Cannot test edge cases
- 3️⃣ **Security**: ❌ Hard-coded passwords
- 4️⃣ **Dependencies**: ⚠️ Real packages but hard-coded
- 5️⃣ **Best Practices**: ❌ Violates DI principles
- 6️⃣ **Performance**: ⚠️ Unknown (can't benchmark)
- 7️⃣ **Testability**: ❌ **CRITICAL FAILURE** - Untestable

**Recommendations:**
1. ✅ Use dependency injection for all external services
2. ✅ Define interfaces/protocols for dependencies
3. ✅ Separate business logic from infrastructure code
4. ✅ Inject configuration (file paths, API endpoints) via constructor
5. ✅ Use factory pattern for creating production instances
6. ✅ Write unit tests with mocks to verify business logic
7. ✅ Use integration tests separately for infrastructure
8. ✅ Move secrets to environment variables

**Testing Pyramid:**

```
     /\
    /  \    E2E Tests (few, slow, real infrastructure)
   /____\
  /      \  Integration Tests (some, medium speed, test adapters)
 /________\
/          \ Unit Tests (many, fast, mocked dependencies)
```

**Key Lesson:**
Testability is a first-class design concern. Code that's difficult to test is usually poorly designed—tight coupling, mixed concerns, hard-coded dependencies. Dependency injection isn't just for testing; it makes code more modular, maintainable, and flexible. If you can't easily write unit tests, your code structure needs refactoring.

---

## Summary: Verification Patterns

### Common Issues Across All Examples

1. **Correctness**: Verify algorithms match specifications
2. **Edge Cases**: Test null, empty, boundaries, unusual inputs
3. **Security**: Never trust user input, use parameterized queries
4. **Dependencies**: Verify all packages and APIs exist
5. **Code Quality**: Prioritize readability and maintainability
6. **Performance**: Consider algorithmic complexity, avoid N+1
7. **Testability**: Inject dependencies, separate concerns

### Verification Workflow Checklist

✅ **Always Do:**
- Read documentation and understand intent
- Test with diverse inputs (normal, edge cases, errors)
- Verify dependencies against official sources
- Check for security vulnerabilities (especially input handling)
- Assess performance with realistic data sizes
- Evaluate testability (can you mock dependencies?)
- Apply all 7 points systematically

❌ **Never Do:**
- Trust code just because it "looks right"
- Skip edge case testing
- Assume packages exist without checking
- Accept hard-coded secrets or SQL concatenation
- Ignore performance implications
- Write untestable code with hard-coded dependencies

### Key Takeaways

1. **AI is a tool, not a source of truth** - Always verify
2. **Test everything** - Especially edge cases
3. **Security cannot be an afterthought** - Validate all inputs
4. **Dependencies can be hallucinated** - Check PyPI/npm
5. **Clean code matters** - Readability = Maintainability
6. **Performance scales** - O(n²) becomes O(disaster)
7. **Testability = Quality** - If you can't test it, refactor it

---

## Additional Resources

- **Security**: OWASP Top 10 (https://owasp.org/www-project-top-ten/)
- **Performance**: Big-O Cheat Sheet (https://www.bigocheatsheet.com/)
- **Best Practices**: Clean Code by Robert C. Martin
- **Testing**: Test-Driven Development by Kent Beck
- **Python**: PEP 8 Style Guide (https://peps.python.org/pep-0008/)
- **JavaScript**: Airbnb JavaScript Style Guide (https://github.com/airbnb/javascript)
