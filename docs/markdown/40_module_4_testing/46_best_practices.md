<!-- .slide: class="transition" -->
# Module 4: Testing Best Practices
## F.I.R.S.T Principles and AI Testing Anti-Patterns

##--##

<!-- .slide: -->
# **F.I.R.S.T Testing Principles**

## **Writing Effective Tests**
<br>

### **F.I.R.S.T Acronym**

**F - Fast**: Tests should run quickly (milliseconds)
- Unit tests: < 10ms each
- Integration tests: < 1 second each
- Slow tests discourage running them frequently

**I - Independent**: Tests should not depend on each other
- No shared state between tests
- Run in any order without failures
- Use proper setup/teardown

Notes:
- F.I.R.S.T principles apply to all test types (unit, integration, E2E)
- These principles ensure tests remain valuable long-term
- Violating these makes tests brittle and unreliable
##--##

<!-- .slide: -->
# **F.I.R.S.T Testing Principles**

## **Writing Effective Tests**
<br>

### **F.I.R.S.T Acronym**

**R - Repeatable**: Same result every time
- No flaky tests (intermittent failures)
- No dependency on external factors (time, network)
- Deterministic outcomes

**S - Self-Validating**: Clear pass/fail without manual inspection
- Assertions provide clear verdicts
- No need to check logs or outputs manually

**T - Timely**: Written at the right time
- TDD: Before implementation
- Or immediately after feature implementation
- Not as an afterthought


##--##

<!-- .slide: -->
# **Human-in-the-Loop Validation**

## **Critical Developer Responsibilities**
<br>

### **What AI Cannot Validate**
- **Business Logic Correctness**: AI suggests tests, you verify they test the right behavior
- **Edge Case Completeness**: AI misses domain-specific edge cases
- **Test Quality**: AI might generate tests that pass but don't validate properly
- **False Positives**: Tests that pass incorrectly (asserting wrong things)

<br>

### **Developer Validation Checklist**
- ✅ Tests fail for the right reasons (RED phase in TDD)
- ✅ Assertions test actual behavior, not implementation details
- ✅ Edge cases are truly comprehensive (domain knowledge)
- ✅ Test names clearly describe what's being validated
- ✅ Mock/stub usage is appropriate (not over-mocking)
- ✅ Tests are maintainable (not brittle, not coupled)

Notes:
- AI accelerates test writing but doesn't replace human judgment
- Domain expertise crucial for identifying important edge cases
- Code review of tests as important as code review of implementation

##--##

<!-- .slide: class="with-code"-->
# **Test Maintainability**

## **Writing Tests That Last**
<br>

### **Maintainable Test Characteristics**

**Clear Test Names**
```typescript
// ❌ Bad: Vague name
it('should work', () => { ... });

// ✅ Good: Descriptive name
it('should reject password without special characters', () => { ... });
```

**Focused Tests (One Concept)**
```typescript
// ❌ Bad: Testing multiple things
it('should validate user', () => {
  expect(validateEmail()).toBe(true);
  expect(validatePassword()).toBe(true);
  expect(validateAge()).toBe(true); // Too much in one test
});

// ✅ Good: One assertion focus
it('should validate email format', () => {
  expect(validateEmail('test@example.com')).toBe(true);
});
```

**Minimal Setup**
- Use test helpers for complex setup
- Avoid duplicated setup code
- Keep tests readable (not buried in setup)

Notes:
- Good tests serve as documentation
- Maintainable tests encourage adding more tests
- Test code deserves same quality standards as production code

##--##

<!-- .slide: class="with-code"-->
# **AI Testing Anti-Patterns**

## **Common Mistakes with AI-Generated Tests**
<br>

### **❌ Anti-Pattern 1: Over-Reliance on AI**
**Problem**: Accepting all AI suggestions without validation
**Solution**: Review every AI-generated test critically

### **❌ Anti-Pattern 2: Testing Implementation Details**
**Problem**: AI tests internal implementation, not behavior
```typescript
// Bad: Testing private methods
expect(cart._calculateDiscount()).toBe(10);
// Good: Testing public behavior
expect(cart.getDiscountedTotal()).toBe(90);
```

##--##

<!-- .slide: class="with-code"-->
# **AI Testing Anti-Patterns**

## **Common Mistakes with AI-Generated Tests**
<br> 

### **❌ Anti-Pattern 3: Brittle Assertions**
**Problem**: Tests break with minor changes
```typescript
// Bad: Generic assertions
expect(result).toBeTruthy();
// Good: Specific assertions
expect(result.status).toBe('success');
expect(result.data.id).toBeDefined();
```

### **❌ Anti-Pattern 4: Over-Mocking**
- **Problem**: Mocking everything defeats testing purpose
- **Solution**: Use real implementations in integration tests

Notes:
- AI doesn't understand your test strategy automatically
- These anti-patterns make tests fragile and less valuable
- Learn to recognize and avoid these patterns in AI suggestions

##--##

<!-- .slide: -->
# **Test Pyramid Balance**

## **Applying the Right Mix**
<br>

### **Recommended Test Distribution**

```
        /\
       /  \      10% - Few critical user journeys (E2E)
      /____\
     /      \
    /        \   20% - Component interactions (Integration)
   /----------\
  /            \
 /              \ 70% - Many fast, isolated tests (Unit)
/________________\
```

<br>

### **AI-Assisted Test Strategy**
- **Unit**: Let AI generate many comprehensive test cases
- **Integration**: Use AI to identify important interaction scenarios
- **E2E**: AI creates user journey tests for critical paths
- **Balance**: Human ensures proper pyramid proportions maintained


Notes:
- Test pyramid remains essential even with AI assistance
- More tests ≠ better tests (need right balance)
- AI makes all test levels faster to write, but strategy is still human-driven

##--##

<!-- .slide: -->
# **Continuous Quality with AI**

## **Maintaining Quality Over Time**
<br>

### **Integrating AI into Development Workflow**

**1. Pre-Commit Quality Checks**
- Use AI to review code quality before commits
- Identify issues early in development cycle
- Fix problems when context is fresh

**2. Code Review Enhancement**
- AI analyzes PRs for quality issues
- Suggests refactorings during review
- Complements human code review##--##

<!-- .slide: -->
# **Continuous Quality with AI**

## **Maintaining Quality Over Time**
<br>

### **Integrating AI into Development Workflow**

**3. Test Coverage Monitoring**
- AI identifies untested code paths
- Generates tests for uncovered areas
- Maintains coverage thresholds

**4. Refactoring Sessions**
- Dedicated time for quality improvements
- AI identifies technical debt hotspots
- Systematic cleanup with test validation

<br>

### **🎯 Quality as a Practice**
Make quality improvement continuous, not one-time. AI makes it faster to maintain high standards consistently.

Notes:
- Quality is not a phase - it's ongoing
- AI tools make continuous quality improvement feasible
- Balance new features with quality maintenance
