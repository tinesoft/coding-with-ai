<!-- .slide: class="transition" -->
# Module 4: AI-Powered Code Quality
## Static Analysis and Refactoring with AI

##--##

<!-- .slide: -->
# **What is Code Quality?**

## **Beyond "It Works"**
<br>

Code quality measures how **maintainable, readable, and robust** code is, not just whether it functions correctly.

<br>

### **Key Code Quality Dimensions**
| Dimension | Description | Impact |
|-----------|-------------|--------|
| **Readability** | Clear naming, logical structure | Team velocity, onboarding |
| **Maintainability** | Easy to change, low coupling | Long-term cost |
| **Complexity** | Cyclomatic complexity, nesting | Bug risk, testability |
| **Duplication** | DRY principle adherence | Maintenance burden |
| **Test Coverage** | Percentage of code tested | Confidence in changes |

Notes:
- Quality code is easier to understand, modify, and extend
- Technical debt accumulates when quality is neglected
- AI can help identify and fix quality issues systematically

##--##

<!-- .slide: -->
# **Code Quality Metrics**

## **Measuring Code Health**
<br>

![Quality Metrics](./assets/images/module-4/quality-metrics.svg)

<br>

### **Common Quality Metrics**
- **Cyclomatic Complexity**: Number of independent paths (target: < 10 per function)
- **Code Duplication**: Percentage of duplicated code (target: < 5%)
- **Test Coverage**: Lines/branches covered by tests (target: 80%+)
- **Technical Debt Ratio**: Estimated fix time / development time (target: < 5%)

Notes:
- Metrics provide objective quality measurements
- Use metrics as guidelines, not absolute rules
- Balance quality improvements with delivery speed

##--##

<!-- .slide: -->
# **AI-Assisted Code Quality Analysis**

## **Using AI to Identify Issues**
<br>

### **Effective Prompts for Quality Analysis**
```
"Analyze this code for quality issues:
- Poor variable/function naming
- Code duplication
- Unnecessary complexity
- Magic numbers/strings
- Lack of type safety
- Violations of SOLID principles

Provide specific examples and refactoring suggestions."
```

### **What AI Identifies**
- 🤖 **Naming issues**: Unclear variable/function names
- 🤖 **Code smells**: Long methods, large classes, feature envy
- 🤖 **Duplication**: Repeated code that should be extracted
- 🤖 **Complexity**: Nested conditionals, long parameter lists
- 🤖 **Type safety**: Missing types, loose typing

Notes:
- AI excels at pattern recognition for quality issues
- Provides context-aware refactoring suggestions
- Identifies issues humans might miss in code reviews

##--##

<!-- .slide: -->
# **AI-Powered Refactoring Workflow**

## **Systematic Quality Improvements**
<br>

![Refactoring Workflow](./assets/images/module-4/refactoring-workflow.svg)

<br>

### **Refactoring with AI Steps**
1. **Identify**: Use AI to analyze code and list quality issues
2. **Prioritize**: Focus on high-impact improvements first
3. **Refactor**: Apply AI suggestions incrementally (one at a time)
4. **Validate**: Run tests after each change to ensure behavior preserved
5. **Review**: Human validates improvements are meaningful, not cosmetic

Notes:
- Always refactor with tests as safety net
- Small, incremental changes reduce risk
- Human judgment crucial for prioritizing improvements

##--##

<!-- .slide: -->
# **Common Code Quality Issues**

## **What to Look For**
<br>

### **Naming Problems**
```typescript
// ❌ Bad: Unclear names
function calc(a, b) {
  return a * b + 10;
}

// ✅ Good: Descriptive names
function calculatePriceWithTax(basePrice: number, taxRate: number): number {
  const TAX_OFFSET = 10;
  return basePrice * taxRate + TAX_OFFSET;
}
```

### **Complexity Issues**
```typescript
// ❌ Bad: Nested conditions (high complexity)
if (user) {
  if (user.age > 18) {
    if (user.verified) {
      if (!user.banned) {
        return true;
      }
    }
  }
}
return false;

// ✅ Good: Guard clauses (reduced complexity)
if (!user || user.age <= 18) return false;
if (!user.verified || user.banned) return false;
return true;
```

Notes:
- Good names eliminate need for comments
- Guard clauses reduce nesting and improve readability
- Complexity reduction makes code easier to test and understand
