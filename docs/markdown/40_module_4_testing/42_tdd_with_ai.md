<!-- .slide: class="transition" -->
# Module 4: Test-Driven Development (TDD)
## Red-Green-Refactor with AI Collaboration

##--##

<!-- .slide: -->
# **What is Test-Driven Development?**

## **The Test-First Approach**
<br>

TDD is a software development methodology where you **write tests before writing implementation code**.

<br>

### **Core Principle**
Tests drive the design and implementation of your code, ensuring every feature has verified behavior from the start.

<br>

### **Why TDD?**
- **Design clarity**: Writing tests first forces you to think about API design and interfaces
- **Living documentation**: Tests serve as executable specifications
- **Confidence**: Every feature has comprehensive test coverage by definition
- **Regression safety**: Refactoring becomes safer with existing test suite

Notes:
- TDD is fundamentally different from writing tests after implementation
- The tests become your specification - they define what "done" means
- AI assistants can help throughout the TDD cycle while maintaining the test-first discipline

##--##

<!-- .slide: -->
# **The Red-Green-Refactor Cycle**

## **TDD Three-Phase Workflow**
<br>

1. **🔴 RED**: Write a failing test for desired functionality
2. **🟢 GREEN**: Write minimal code to make the test pass
3. **🔵 REFACTOR**: Improve code quality while keeping tests green

<br>

### **Core Workflow**
Each cycle should be short (5-15 minutes typically) and follow the complete RED→GREEN→REFACTOR sequence.

Notes:
- Each cycle should be short (5-15 minutes typically)
- Never skip the RED phase - verify the test actually fails for the right reason
- GREEN phase focuses on making it work, not making it perfect
- REFACTOR phase is where you apply clean code principles
- The visual on the next slide illustrates this cyclical workflow

##--##

<!-- .slide: -->

<img src="./assets/images/module-4/tdd-cycle.svg" alt="Red-Green-Refactor cycle visualization" style="width:100%; height:auto; display:block;">

##--##

<!-- .slide: -->
# **AI Collaboration in Each TDD Phase**

## **Leveraging AI Throughout the Cycle**
<br>

### **🔴 RED Phase: AI helps write failing tests**
```typescript
// Prompt: "Write a test for a shopping cart add method that increases quantity"
it('should increase quantity when adding same item twice', () => {
  const cart = new ShoppingCart();
  cart.add({ id: '1', name: 'Book', price: 10 });
  cart.add({ id: '1', name: 'Book', price: 10 });
  expect(cart.getItem('1')?.quantity).toBe(2);
});
// Test fails - ShoppingCart doesn't exist yet ✓
```

### **🟢 GREEN Phase: AI suggests minimal implementation**
```typescript
// Prompt: "Implement ShoppingCart to pass the test with minimal code"
class ShoppingCart {
  private items = new Map();
  add(item) { /* minimal logic */ }
  getItem(id) { return this.items.get(id); }
}
```

Notes:
- RED: AI can generate comprehensive test scenarios quickly
- GREEN: AI suggests simple implementations; you verify they're truly minimal
- Always run tests to confirm they fail before writing implementation

##--##

<!-- .slide: -->
# **TDD with AI: Prompt Examples**

## **Effective Prompts for Each Phase**
<br>

### **Human-in-the-Loop Validation**
- **RED**: Verify test fails for expected reason (not syntax errors)
- **GREEN**: Ensure implementation is minimal, not over-engineered
- **REFACTOR**: Confirm tests remain green after each refactoring step

<br>

Different prompts are needed for different TDD phases to maximize AI effectiveness while maintaining discipline.

Notes:
- Different prompts are needed for different TDD phases
- RED phase prompts focus on behavior specifications and edge cases
- GREEN phase prompts emphasize simplicity and passing tests
- REFACTOR phase prompts target code quality improvements
- Always validate AI suggestions align with TDD principles
- The visual on the next slide shows example prompts for each phase

##--##

<!-- .slide: -->

<img src="./assets/images/module-4/tdd-prompt-examples.svg" alt="Example prompts for each TDD phase" style="width:100%; height:auto; display:block;">

##--##

##--##

<!-- .slide: -->
# **TDD Benefits with AI Assistance**

## **Why TDD + AI is Powerful**
<br>

### **Speed & Coverage**
- AI generates comprehensive test scenarios faster than manual writing
- Explores edge cases you might miss
- Maintains test-first discipline with rapid iteration

### **Design Quality**
- Tests force interface design before implementation
- AI suggestions reveal design issues early
- Refactoring becomes safer with full test coverage

### **Learning & Best Practices**
- AI demonstrates testing patterns and idioms
- Learn TDD discipline through guided practice
- See clean code principles applied in refactoring suggestions

<br>

### **⚠️ TDD Anti-Patterns to Avoid**
- Writing implementation before tests (defeats TDD purpose)
- Skipping RED phase verification (test must fail first)
- Over-engineering in GREEN phase (add only enough to pass)
- Refactoring without running tests (breaks safety net)

Notes:
- TDD with AI doesn't mean "AI writes everything" - you maintain discipline
- The human developer ensures TDD principles are followed
- AI accelerates each phase but doesn't replace your judgment
- Bad TDD with AI is worse than no TDD - maintain the cycle integrity

##--##

<!-- .slide: -->
# **TDD Workflow in Practice**

## **Real-World TDD Cycle Example**
<br>

**Scenario**: Implementing a password strength validator

<br>

1. **🔴 RED**: Write test for minimum length requirement
   - Test fails (validator doesn't exist)
2. **🟢 GREEN**: Implement simple length check
   - Test passes (minimal code added)
3. **🔵 REFACTOR**: Extract validation logic, improve naming
   - Tests still pass (quality improved)
4. **🔴 RED**: Write test for special character requirement
   - New test fails (feature not implemented)
5. **🟢 GREEN**: Add special character check
   - All tests pass (feature complete)
6. **🔵 REFACTOR**: Consolidate validation rules
   - All tests still pass (code cleaner)

<br>

### **Key Insight**: Each cycle adds one small capability with verified behavior

Notes:
- Real TDD proceeds incrementally - one requirement at a time
- Each RED-GREEN-REFACTOR cycle is independent and complete
- Test suite grows with each cycle, providing regression safety
- AI can help at each step but you control the pace and direction

