# Lab 01: Basic Prompt Engineering Practice

## Objectives
- Write effective prompts for coding tasks
- Compare results from different prompt styles
- Learn to iterate and improve prompts
- Practice with various AI coding assistants

## Instructions

### Part 1: Prompt Writing Fundamentals (15 minutes)

1. **Access an AI coding assistant** (GitHub Copilot, ChatGPT, Claude, or Cursor Chat)

2. **Try these different prompt styles for the same task**:
   
   **Task**: Create a function to calculate the area of a circle

   **❌ Vague Prompt**:
   ```
   circle area function
   ```

   **✅ Better Prompt**:
   ```
   Write a TypeScript function to calculate the area of a circle.
   Function should:
   - Take radius as a parameter
   - Return the area as a number
   - Handle edge cases (negative radius)
   - Include proper JSDoc comments
   ```

   **✅ Expert Prompt**:
   ```
   Act as a senior TypeScript developer. Create a pure function to calculate circle area.

   Requirements:
   - Function name: calculateCircleArea
   - Parameter: radius (number)
   - Return: area (number)
   - Validation: throw error for negative radius
   - Documentation: JSDoc with examples
   - Style: functional programming approach

   Example usage:
   calculateCircleArea(5) // should return 78.54
   ```

3. **Compare the outputs** and note the differences in:
   - Code quality
   - Error handling
   - Documentation
   - Style consistency

### Part 2: Iterative Prompt Improvement (15 minutes)

1. **Start with this basic prompt**:
   ```
   Create a todo list component
   ```

2. **Gradually improve the prompt by adding**:
   - Technology specification (React, TypeScript)
   - Specific requirements (add, delete, mark complete)
   - Styling preferences (CSS modules, styled-components)
   - State management approach (useState, context)
   - Accessibility requirements

3. **Document how each iteration changes the output quality**

## Expected Outcomes

After completing this lab, you should:
- Understand the impact of prompt specificity
- Know how to structure effective coding prompts
- Be able to iterate and improve prompts based on results
- Have experience with at least one AI coding assistant

## Hints

- **Be specific**: The more context you provide, the better the output
- **Use examples**: Show the AI what you expect
- **Set constraints**: Specify technology, style, and requirements
- **Iterate**: Refine your prompts based on the results
- **Ask for explanations**: Request comments and documentation

## Reference Slides
- [11_ai_fundamentals.md](../../docs/public/markdown/11_ai_fundamentals.md)
- [12_prompt_engineering.md](../../docs/public/markdown/12_prompt_engineering.md)
