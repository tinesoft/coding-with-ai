# Lab 32 Solution: AI-Powered Code Refactoring

This solution demonstrates how to refactor each of the 5 legacy code samples using GitHub Copilot and systematic refactoring patterns.

## Solution Overview

All refactorings follow the same principle: **Improve code structure without changing behavior**

---

## Exercise 1: Extract Method

### Problem
The `processUserRegistration()` function has 5 distinct responsibilities in ~80 lines.

### Copilot Prompt Used
```
Refactor this function by extracting logical sections into separate functions
```

### Refactoring Applied

**Main function (refactored)**:
```javascript
function processUserRegistration(userData) {
  validateUserInput(userData);
  const passwordHash = hashPassword(userData.password);
  const user = saveUserToDatabase(userData, passwordHash);
  sendWelcomeEmail(user);
  logRegistrationActivity(user);
  
  return {
    success: true,
    userId: user.id,
    message: 'User registered successfully'
  };
}
```

**Extracted functions** (see `resources/refactored-code/extract_method.js` for full implementation):
- `validateUserInput(userData)` - Handles all input validation
- `hashPassword(password)` - Password hashing logic
- `saveUserToDatabase(userData, passwordHash)` - Database operations
- `sendWelcomeEmail(user)` - Email sending
- `logRegistrationActivity(user)` - Activity logging

### Benefits
- Main function is now 8 lines (vs. 80)
- Each function has single responsibility
- Easier to test individual pieces
- Can reuse extracted functions elsewhere

### Key Learnings
- Extract Method is one of the most powerful refactorings
- Functions should do one thing well
- 7-15 lines is a good function length target
- Test each extraction separately

---

## Exercise 2: Rename for Clarity

### Problem
Cryptic variable names (`d`, `x`, `y`, `i`, `n`, `p`, `q`, `s`) make code unreadable.

### Copilot Prompt Used
```
Suggest better names for the variables and functions in this code based on their usage
```

### Refactoring Applied

**Before**:
```typescript
type Item = {
  i: number;  // What does 'i' mean?
  n: string;  // What does 'n' mean?
  p: number;  // What does 'p' mean?
  q: number;  // What does 'q' mean?
  s: string;  // What does 's' mean?
};

function calc(d: Item[]): number {
  let x = d.filter(i => i.s === 'A');
  let y = 0;
  for (let i = 0; i < x.length; i++) {
    y += x[i].p * x[i].q;
  }
  return y;
}
```

**After**:
```typescript
type Item = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  status: string;
};

function calculateActiveItemsTotal(items: Item[]): number {
  const activeItems = items.filter(item => item.status === 'ACTIVE');
  let total = 0;
  for (let i = 0; i < activeItems.length; i++) {
    total += activeItems[i].price * activeItems[i].quantity;
  }
  return total;
}
```

**All renamed** (see `resources/refactored-code/rename_clarity.ts`):
- `calc` → `calculateActiveItemsTotal`
- `proc` → `processItemsWithDiscount`
- `fmt` → `formatItemForDisplay`
- `getAvg` → `calculateAveragePrice`

### Benefits
- Code is self-documenting
- No mental mapping required (what was `d` again?)
- TypeScript type hints become meaningful
- Easier for new developers to understand

### Key Learnings
- Names should reveal intent
- Use full words, not abbreviations (except well-known ones like `id`)
- Function names should be verb phrases
- Type/interface names should be nouns

---

## Exercise 3: Simplify Conditionals

### Problem
7 levels of nested if-else create "arrow code" that's hard to follow.

### Copilot Prompt Used
```
Simplify these nested conditionals using guard clauses and early returns
```

### Refactoring Applied

**Before** (nested pyramid):
```javascript
function canProcessPayment(user, cart, paymentMethod) {
  if (user) {
    if (user.isActive) {
      if (user.emailVerified) {
        if (cart) {
          if (cart.items && cart.items.length > 0) {
            // ... 7 levels deep!
          }
        }
      }
    }
  }
}
```

**After** (guard clauses):
```javascript
function canProcessPayment(user, cart, paymentMethod) {
  // Handle error conditions first with early returns
  if (!user) {
    return { success: false, message: 'User is required' };
  }
  if (!user.isActive) {
    return { success: false, message: 'User account is inactive' };
  }
  if (!user.emailVerified) {
    return { success: false, message: 'Email not verified' };
  }
  if (!cart) {
    return { success: false, message: 'Cart is required' };
  }
  if (!cart.items || cart.items.length === 0) {
    return { success: false, message: 'Cart is empty' };
  }
  if (cart.total <= 0) {
    return { success: false, message: 'Cart total must be greater than zero' };
  }
  if (!paymentMethod) {
    return { success: false, message: 'Payment method required' };
  }
  
  // Process payment method (still needs some nesting for different types)
  if (paymentMethod.type === 'credit_card') {
    if (!paymentMethod.isValid) {
      return { success: false, message: 'Invalid payment method' };
    }
    if (user.creditLimit < cart.total) {
      return { success: false, message: 'Insufficient credit limit' };
    }
  } else if (paymentMethod.type === 'paypal') {
    if (paymentMethod.email !== user.email) {
      return { success: false, message: 'PayPal email must match user email' };
    }
  } else {
    return { success: false, message: 'Unsupported payment method' };
  }
  
  // Happy path at the end
  return { success: true, message: 'Payment can proceed' };
}
```

### Benefits
- Maximum nesting depth reduced from 7 to 2
- Error conditions handled upfront
- Happy path is clear at the end
- Much easier to read and maintain

### Complexity Metrics
- **Before**: Cyclomatic complexity = 11
- **After**: Cyclomatic complexity = 8
- **Reduction**: 27% improvement

### Key Learnings
- Guard clauses make code more linear
- Handle errors first, success last
- Reduces cognitive load significantly
- "Fail fast" principle

---

## Exercise 4: Remove Duplication

### Problem
Three formatting functions and three validation functions with ~80% identical code.

### Copilot Prompt Used
```
Extract the common formatting logic into a reusable utility function
```

### Refactoring Applied

**Generic formatting function**:
```typescript
function formatEntityForDisplay(entity: Record<string, any>): string {
  let result = '';
  for (const [key, value] of Object.entries(entity)) {
    const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
    const formattedValue = typeof value === 'number' && key.includes('price') || key.includes('total')
      ? `$${value.toFixed(2)}`
      : value;
    result += `${label}: ${formattedValue}\n`;
  }
  result += '---';
  return result;
}
```

**Generic validation function**:
```typescript
interface ValidationRule<T> {
  field: keyof T;
  validate: (value: any) => boolean;
  errorMessage: string;
}

function validateEntity<T>(entity: T, rules: ValidationRule<T>[]): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  for (const rule of rules) {
    const value = entity[rule.field];
    if (!rule.validate(value)) {
      errors.push(rule.errorMessage);
    }
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
}
```

**Usage** (see `resources/refactored-code/remove_duplication.ts`):
```typescript
// Simplified user validation
const userRules: ValidationRule<User>[] = [
  { field: 'id', validate: (v) => v > 0, errorMessage: 'Invalid user ID' },
  { field: 'firstName', validate: (v) => v?.trim().length > 0, errorMessage: 'First name is required' },
  // ... more rules
];

function validateUser(user: User) {
  return validateEntity(user, userRules);
}
```

### Benefits
- Reduced code from ~150 lines to ~50 lines
- Single source of truth for formatting/validation
- Adding new entity types is trivial
- Much easier to maintain

### Key Learnings
- DRY (Don't Repeat Yourself) is powerful
- Generics/types enable reusable abstractions
- Configuration over code for common patterns
- Balance abstraction with readability

---

## Exercise 5: Modernize Syntax

### Problem
Old ES5 code using `var`, `for` loops, `function` keyword, string concatenation.

### Copilot Prompt Used
```
Modernize this code to use ES6+ features: const/let, arrow functions, template literals, array methods
```

### Refactoring Applied

**getActiveUsers** - Before:
```javascript
function getActiveUsers(userList) {
  var activeUsers = [];
  for (var i = 0; i < userList.length; i++) {
    if (userList[i].active === true) {
      activeUsers.push(userList[i]);
    }
  }
  return activeUsers;
}
```

**After**:
```javascript
const getActiveUsers = (userList) => userList.filter(user => user.active);
```

**formatUser** - Before:
```javascript
function formatUser(user) {
  return 'User: ' + user.name + ' (ID: ' + user.id + ') - Age: ' + user.age;
}
```

**After**:
```javascript
const formatUser = (user) => `User: ${user.name} (ID: ${user.id}) - Age: ${user.age}`;
```

**getAverageAgeByDepartment** - Before (30+ lines with nested loops):
```javascript
function getAverageAgeByDepartment(userList) {
  var departments = [];
  // ... complex nested loop logic
  return result;
}
```

**After** (5 lines with reduce):
```javascript
const getAverageAgeByDepartment = (userList) => {
  const grouped = userList.reduce((acc, user) => {
    if (!acc[user.department]) acc[user.department] = [];
    acc[user.department].push(user);
    return acc;
  }, {});
  
  return Object.entries(grouped).reduce((acc, [dept, users]) => {
    acc[dept] = users.reduce((sum, u) => sum + u.age, 0) / users.length;
    return acc;
  }, {});
};
```

### Benefits
- Reduced code from ~120 lines to ~40 lines
- More expressive and functional
- Eliminates manual index management
- More concise and readable

### Modern Features Used
- `const`/`let` instead of `var`
- Arrow functions `=>`
- Template literals `` `${var}` ``
- Array methods: `filter`, `map`, `reduce`, `join`
- Destructuring: `for (const [key, value] of Object.entries(obj))`
- Default parameters

### Key Learnings
- Modern syntax is often more concise
- Functional programming reduces bugs (immutability)
- Array methods are more expressive than loops
- Template literals improve string readability

---

## General Refactoring Workflow

For each exercise, we followed:

1. **Understand Behavior**: Run tests to establish baseline
2. **Identify Smell**: Recognize specific refactoring opportunity
3. **Ask Copilot**: Request specific refactoring pattern
4. **Review Proposal**: Critically evaluate suggestions
5. **Apply Incrementally**: Small changes with frequent testing
6. **Validate**: Ensure no behavioral changes

## Common Refactoring Patterns Summary

| Pattern | When to Use | Primary Benefit |
|---------|-------------|-----------------|
| **Extract Method** | Functions > 20 lines | Single Responsibility |
| **Rename** | Unclear names | Self-Documenting Code |
| **Simplify Conditionals** | Nesting > 3 levels | Readability |
| **Remove Duplication** | Repeated code blocks | Maintainability |
| **Modernize Syntax** | Old language features | Conciseness & Safety |

## Tips for Effective Refactoring

1. **Test Coverage**: Always refactor with good tests
2. **One Pattern**: Don't mix multiple refactorings
3. **Small Steps**: Commit after each successful refactoring
4. **Code Review**: Get feedback on refactoring decisions
5. **Metrics**: Track complexity reduction (cyclomatic, lines of code)

## Resources

- Refactored code samples in `resources/refactored-code/`
- Module 3 slides for refactoring pattern reference
- [Refactoring Catalog](https://refactoring.com/catalog/) for more patterns
