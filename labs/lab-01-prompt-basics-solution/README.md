# Lab 01 Solution: Basic Prompt Engineering Practice

## Solution Approach

This lab demonstrates the progressive improvement of prompts and their impact on AI-generated code quality.

## Part 1 Solutions

### Circle Area Function Examples

**From Vague Prompt** (`circle area function`):
```typescript
function circleArea(radius) {
    return 3.14159 * radius * radius;
}
```

**From Better Prompt**:
```typescript
/**
 * Calculates the area of a circle
 * @param radius - The radius of the circle
 * @returns The area of the circle
 */
function calculateCircleArea(radius: number): number {
    if (radius < 0) {
        throw new Error("Radius cannot be negative");
    }
    return Math.PI * radius * radius;
}
```

**From Expert Prompt**:
```typescript
/**
 * Calculates the area of a circle using a pure functional approach
 * @param radius - The radius of the circle (must be non-negative)
 * @returns The area of the circle
 * @throws {Error} When radius is negative
 * @example
 * ```typescript
 * calculateCircleArea(5) // returns 78.54
 * calculateCircleArea(0) // returns 0
 * calculateCircleArea(-1) // throws Error
 * ```
 */
export const calculateCircleArea = (radius: number): number => {
    if (radius < 0) {
        throw new Error("Radius must be non-negative");
    }
    return Math.PI * radius * radius;
};
```

## Part 2 Solution: Todo List Component Evolution

### Initial Prompt Result
Basic, minimal functionality without proper typing or styling.

### Final Optimized Prompt
```
Create a React Todo List component in TypeScript with the following specifications:

Component Requirements:
- Use functional component with hooks
- TypeScript interfaces for all props and state
- Add, delete, and toggle completion of todos
- Filter view (all, active, completed)

Technical Stack:
- React 18+ with TypeScript
- CSS Modules for styling
- useState for local state management
- Accessibility: ARIA labels and keyboard navigation

Code Quality:
- JSDoc comments for all functions
- Error boundaries for robust error handling
- Responsive design (mobile-first)
- Unit test structure comments

Example usage:
<TodoList initialTodos={[]} onTodoChange={(todos) => console.log(todos)} />
```

## Key Learning Points

1. **Specificity Matters**: Detailed prompts produce higher quality, production-ready code
2. **Context is King**: Including technology stack, requirements, and examples dramatically improves output
3. **Iteration Works**: Refining prompts based on initial results leads to better outcomes
4. **Role Assignment**: Asking AI to act as a "senior developer" improves code quality and best practices
5. **Examples Guide Output**: Providing expected usage examples helps AI understand the intended interface

## Best Practices Discovered

- **Always specify the programming language and version**
- **Include error handling requirements**
- **Request documentation and comments**
- **Specify coding style preferences**
- **Ask for accessibility considerations**
- **Include example usage in prompts**

## Next Steps

- Practice these prompt patterns with different types of coding tasks
- Experiment with domain-specific prompts (frontend, backend, testing)
- Learn to combine prompts for complex, multi-step development tasks
