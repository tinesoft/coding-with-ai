<!-- .slide: class="transition" -->
# Module 3: Code Refactoring with AI
## Improving Code Quality and Maintainability

##--##

<!-- .slide -->
# What is Refactoring?

## **Understanding Code Improvement**
<br>

### 🔧 **Definition**

Improving code structure **without changing its behavior**

<br>

### 🎯 **Goals**

- **Readability**: Make code easier to understand
- **Maintainability**: Simplify future changes
- **Extensibility**: Prepare for new features
- **Performance**: Optimize inefficient patterns

<br>

### ⚠️ **Not Bug Fixing**: Refactoring preserves existing behavior

Notes:
- Refactoring is distinct from debugging or adding features
- Must maintain all existing functionality
- Requires good test coverage to ensure no regressions
- AI can suggest refactorings but humans validate appropriateness

##--##

<!-- .slide -->
# Why Refactor with AI?

## **Benefits and Considerations**
<br>

### 🤖 **AI Advantages**

- **Pattern Recognition**: Identifies code smells instantly
- **Refactoring Catalog**: Knows common patterns (Extract Method, Rename, etc.)
- **Context Awareness**: Suggests improvements based on surrounding code
- **Multiple Options**: Proposes several approaches to choose from

<br>

### 🧠 **Human Judgment Required**

- Deciding **when** to refactor (vs. rewrite)
- Evaluating **trade-offs** (complexity vs. performance)
- Maintaining **domain knowledge** and business logic
- Ensuring **team conventions** are followed

Notes:
- AI accelerates refactoring but cannot replace domain expertise
- Humans decide strategic refactoring priorities
- AI suggests tactics, humans validate alignment with goals

##--##

<!-- .slide -->
# 5 Common Refactoring Patterns

## **Essential Techniques**
<br>

### 1️⃣ **Extract Method**
Break long functions into smaller, reusable pieces

### 2️⃣ **Rename for Clarity**
Replace cryptic names with descriptive ones

### 3️⃣ **Simplify Conditionals**
Reduce nested if-else with guard clauses or early returns

### 4️⃣ **Remove Duplication**
Consolidate repeated code into shared functions

### 5️⃣ **Modernize Syntax**
Update to current language idioms and features

Notes:
These patterns apply across programming languages and AI tools can suggest all automatically. Each pattern has specific applicability conditions. The next slide provides a visual overview of how these patterns complement each other.

##--##

<img src="./assets/images/module-3/refactoring-patterns.svg" alt="Refactoring Patterns Overview" style="width:100%; height:auto; display:block;">

##--##

<!-- .slide -->
# Pattern 1: Extract Method

## **Breaking Down Long Functions**
<br>

### 🐛 **Before: Long, Monolithic Function**

```javascript
function processOrder(order) {
  // Validate order (15 lines)
  if (!order.items || order.items.length === 0) {
    throw new Error("Empty order");
  }
  // ... more validation
  
  // Calculate total (20 lines)
  let total = 0;
  for (let item of order.items) {
    total += item.price * item.quantity;
  }
  // ... more calculation
  
  // Apply discounts (25 lines)
  // ... discount logic
  
  return finalOrder;
}
```

Notes:
- Long functions are hard to understand and test
- Multiple responsibilities violate Single Responsibility Principle
- Hard to reuse individual parts

##--##

<!-- .slide -->
# Pattern 1: Extract Method (Continued)

## **Refactored Solution**
<br>

### ✅ **After: Extracted Helper Methods**

```javascript
function processOrder(order) {
  validateOrder(order);
  const subtotal = calculateSubtotal(order);
  const total = applyDiscounts(subtotal, order);
  return { ...order, total };
}

function validateOrder(order) {
  if (!order.items || order.items.length === 0) {
    throw new Error("Empty order");
  }
  // ... validation logic
}

function calculateSubtotal(order) {
  return order.items.reduce((sum, item) => 
    sum + item.price * item.quantity, 0);
}

function applyDiscounts(subtotal, order) {
  // ... discount logic
  return finalTotal;
}
```

Notes:
- Each function has one clear responsibility
- Easier to test each piece independently
- More reusable across the codebase

##--##

<!-- .slide -->
# Pattern 2: Rename for Clarity

## **Improving Code Readability**
<br>

### 🐛 **Before: Cryptic Names**

```typescript
function calc(d: any) {
  let x = d.filter(i => i.s === 'A');
  let y = x.map(i => i.v);
  return y.reduce((a, b) => a + b, 0);
}
```

<br>

### ✅ **After: Descriptive Names**

```typescript
function calculateActiveItemsTotal(items: Item[]) {
  const activeItems = items.filter(item => item.status === 'ACTIVE');
  const values = activeItems.map(item => item.value);
  return values.reduce((sum, value) => sum + value, 0);
}
```

Notes:
- Good names eliminate need for comments
- Code becomes self-documenting
- AI can suggest better names based on usage context

##--##

<!-- .slide -->
# Pattern 3: Simplify Conditionals

## **Reducing Complexity**
<br>

### 🐛 **Before: Complex Nested Logic**

```javascript
function canCheckout(user, cart) {
  if (user) {
    if (user.isVerified) {
      if (cart.items.length > 0) {
        if (cart.total < user.creditLimit) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
```

Notes:
- Deep nesting is hard to follow
- Multiple return paths are confusing
- Error conditions buried deep

##--##

<!-- .slide -->
# Pattern 3: Simplify Conditionals (Continued)

## **Cleaner Control Flow**
<br>

### ✅ **After: Guard Clauses**

```javascript
function canCheckout(user, cart) {
  // Early returns for error conditions
  if (!user) return false;
  if (!user.isVerified) return false;
  if (cart.items.length === 0) return false;
  if (cart.total >= user.creditLimit) return false;
  
  // Happy path at the end
  return true;
}
```

<br>

### 📊 **Complexity Reduced**: Cyclomatic complexity from 5 to 2

Notes:
- Guard clauses handle error cases early
- Happy path is clear and simple
- Much easier to read and maintain

##--##

<!-- .slide -->
# Pattern 4: Remove Duplication

## **DRY Principle in Action**
<br>

### 🐛 **Before: Repeated Code**

```typescript
function formatUser(user: User) {
  return `${user.firstName} ${user.lastName} (${user.email})`;
}

function formatAdmin(admin: Admin) {
  return `${admin.firstName} ${admin.lastName} (${admin.email})`;
}

function formatGuest(guest: Guest) {
  return `${guest.firstName} ${guest.lastName} (${guest.email})`;
}
```

<br>

### ✅ **After: Shared Function**

```typescript
function formatPerson(person: { firstName: string; lastName: string; email: string }) {
  return `${person.firstName} ${person.lastName} (${person.email})`;
}
```

Notes:
- DRY principle: Don't Repeat Yourself
- Single source of truth for formatting
- Changes in one place affect all uses

##--##

<!-- .slide -->
# Pattern 5: Modernize Syntax

## **Adopting Modern Idioms**
<br>

### 🐛 **Before: Legacy Python**

##--##

<!-- .slide -->
# AI-Assisted Refactoring Workflow

## **Systematic Approach**
<br>

### 🔄 **Process**

```text
1. Identify Code Smell
   ↓
2. Ask AI for Refactoring Suggestions
   ↓
3. Review Proposed Changes
   ↓
4. Run Tests to Ensure No Behavior Change
   ↓
5. Apply Refactoring Incrementally
   ↓
6. Commit with Clear Message
```

<br>

### ✅ **Always test before and after**

Notes:
- Never refactor without tests
- Apply changes incrementally (one pattern at a time)
- Commit frequently with descriptive messages
- If tests fail, revert immediately

##--##

<!-- .slide -->
# When to Refactor vs. Rewrite

## **Making Strategic Decisions**
<br>

### ✅ **Refactor When:**

- Code works but is messy
- Small, localized improvements needed
- Good test coverage exists
- Incremental changes are safe

<br>

### 🔄 **Rewrite When:**

- Architecture is fundamentally flawed
- Technology is obsolete
- Refactoring cost > rewrite cost
- Business requirements changed drastically

<br>

### 🤖 **AI Can Help**: Analyze code complexity and suggest approach

Notes:
- Refactoring is lower risk than rewriting
- Rewrites often fail due to scope creep
- AI can assess code complexity metrics
- Human judgment on business context is critical

##--##

<!-- .slide -->
# Refactoring Best Practices

## **Guidelines for Success**
<br>

### 📋 **Safe Refactoring**

1. **Test Coverage First**: Ensure existing tests pass
2. **One Pattern at a Time**: Don't mix refactorings
3. **Frequent Commits**: Small, atomic changes
4. **Code Review**: Get team feedback on improvements
5. **Performance Check**: Verify no regressions

<br>

### ⚠️ **Avoid:**

- Refactoring under time pressure
- Mixing refactoring with new features
- Changing behavior "while you're at it"

Notes:
- Refactoring requires discipline and patience
- Separate refactoring commits from feature commits
- If you find a bug during refactoring, fix it in a separate commit

##--##

<!-- .slide -->
# AI Refactoring Tools

## **Practical Tool Usage**
<br>

### 🛠️ **GitHub Copilot Features**

- `/doc` command: Document functions and classes
- Inline suggestions: Refactoring hints as you type
- Chat: "How can I refactor this function?"
- Code actions: Right-click → Refactor with Copilot

<br>

### 💡 **Effective Prompts**

- "Refactor this function to be more readable"
- "Extract this repeated code into a shared function"
- "Modernize this code to use ES6+ features"
- "Simplify these nested conditionals"

Notes:
- Copilot integrates refactoring into your workflow
- Be specific about which pattern you want
- Review AI suggestions critically - not all are improvements

##--##

<!-- .slide -->
# Key Takeaways

## **Refactoring Summary**
<br>

### 🎯 **Remember**

- ✅ Refactoring improves structure without changing behavior
- ✅ AI accelerates refactoring by recognizing patterns
- ✅ Five key patterns: Extract, Rename, Simplify, Deduplicate, Modernize
- ✅ Always test before and after refactoring
- ✅ Incremental changes are safer than big rewrites
- ✅ Human judgment determines when and how to refactor

<br>

### 🔜 **Next**: Hands-on refactoring practice

Notes:
- Refactoring is a continuous practice, not a one-time event
- Build refactoring into your development workflow
- Use AI to accelerate, not replace, careful thinking

##--##

<!-- .slide: class="exercice" -->
# Exercise 2: AI-Powered Refactoring
## Lab 32

<br>

### 👉🏾 Follow **instructions** in

### `labs/lab-32-ai-refactoring/README.md`

Notes:
- Follow the instructions in the lab README.md for detailed steps.

##--##

<!-- .slide: class="exercice" -->
# Exercise 2: AI-Powered Refactoring
## Lab 32

<br>

### 💡 Read **solution** at

### `labs/lab-32-ai-refactoring-solution/README.md`

Notes:
- Read the lab README.md for example of solutions.
- Solution includes refactored code and pattern explanations
