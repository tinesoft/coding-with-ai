<!-- .slide -->

# Prompt Engineering Basics

## **What is a Prompt?**
A prompt is how you "talk" to an AI agent to get the results you want

## **Basic Prompt Structure**
```
[Context] + [Task] + [Format] + [Examples]
```

##--##

<!-- .slide: class="with-code" -->

# Prompt Engineering Examples

## **❌ Bad Prompt**
```
write code
```

## **✅ Good Prompt**
```
Write a TypeScript function that validates email addresses.
Requirements:
- Use regex pattern for validation
- Return boolean true/false
- Handle edge cases like null/undefined
- Include JSDoc comments

Example usage:
validateEmail("user@example.com") // should return true
```

##--##

<!-- .slide: class="with-code" -->

# Effective Prompt Patterns

## **1. Role-Based Prompts**
```
Act as a senior TypeScript developer.
Review this code and suggest improvements...
```

## **2. Step-by-Step Instructions**
```
Create a React component following these steps:
1. Define the component props interface
2. Create the functional component
3. Add proper TypeScript types
4. Include error handling
```

## **3. Context + Constraints**
```
Given this existing codebase [paste code],
add a new feature that [describes feature]
while maintaining the current architecture and coding style.
```

Notes:
Prompt engineering is like learning a new language for communicating with AI. The more specific and structured your prompts, the better results you'll get. Practice with different patterns to find what works best for your coding style.
