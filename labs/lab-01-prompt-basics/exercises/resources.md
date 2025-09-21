# Exercise Resources for Lab 1: Prompt Engineering Basics

## Quick Reference Materials

### CLEAR Framework Checklist
Use this checklist for every prompt you write:

- [ ] **Context**: Have I provided relevant background information?
- [ ] **Length**: Have I specified the desired response length and detail level?
- [ ] **Examples**: Have I included examples where helpful?
- [ ] **Audience**: Have I indicated my skill level and expertise?
- [ ] **Role**: Have I assigned an appropriate role to the AI?

### Prompt Pattern Templates

#### 1. Role-Based Pattern
```
"You are a [specific role] with [years] years of experience in [domain].
Your expertise includes [specific skills].

Your task is to [specific request] for [context].

Please focus on [key areas] and provide [deliverable format].

Consider my background: [your skill level]"
```

#### 2. Few-Shot Pattern
```
"I need help with [task]. Here are examples of the desired output:

Example 1:
Input: [example input]
Output: [example output]

Example 2:
Input: [example input]
Output: [example output]

Example 3:
Input: [example input]
Output: [example output]

Now please help with:
Input: [your actual input]"
```

#### 3. Chain-of-Thought Pattern
```
"Please help me [objective] by thinking through this step-by-step:

Step 1: First, analyze [specific aspect]
Step 2: Then, examine [specific aspect]
Step 3: Next, consider [specific aspect]
Step 4: Finally, [final action/recommendation]

For each step, explain your reasoning before moving to the next.

Context: [your situation]"
```

#### 4. Constraint-Based Pattern
```
"Create [deliverable] that meets these requirements:

MUST have:
- [requirement 1]
- [requirement 2]
- [requirement 3]

MUST NOT have:
- [constraint 1]
- [constraint 2]

Technical constraints:
- [technical limit 1]
- [technical limit 2]

Additional context: [background information]"
```

## Sample Code Snippets for Exercises

### Exercise 1: Sample Vague Prompts to Improve
Try improving these prompts using the CLEAR framework:

```
1. "Fix this code"
2. "Make this faster"
3. "Add error handling"
4. "Create a database schema"
5. "Help with testing"
6. "Optimize this function"
7. "Add security"
8. "Make it responsive"
```

### Exercise 2: Base Components for Iteration
Start with these basic requests and iteratively improve them:

#### React Component Base
```
"Create a React component for displaying user data"
```

Iteration targets:
- Add TypeScript
- Specify props interface
- Include error handling
- Add loading states
- Specify styling approach
- Include accessibility features

#### API Function Base
```
"Create a function to fetch data from an API"
```

Iteration targets:
- Specify HTTP library (fetch, axios, etc.)
- Add error handling and retry logic
- Include TypeScript types
- Add request/response interceptors
- Specify authentication handling
- Include caching strategy

### Exercise 3: Code Samples for Review

#### Authentication Code (for security review exercise)
```javascript
// Sample code that needs security review
function authenticateUser(email, password) {
    // Warning: This is intentionally insecure for the exercise
    const query = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;
    const result = database.query(query);
    
    if (result.length > 0) {
        const token = btoa(email + ':' + password);
        localStorage.setItem('authToken', token);
        return { success: true, token: token };
    }
    
    return { success: false };
}
```

#### Performance Issue Code (for debugging exercise)
```javascript
// Sample React component with performance issues
import React, { useState, useEffect } from 'react';

function ProductList({ products }) {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    
    // Performance issue: This runs on every render
    const expensiveFilter = () => {
        return products.filter(product => {
            // Expensive operations in filter
            const normalizedName = product.name.toLowerCase().trim();
            const normalizedSearch = searchTerm.toLowerCase().trim();
            
            // Simulating expensive computation
            for (let i = 0; i < 10000; i++) {
                Math.random();
            }
            
            return normalizedName.includes(normalizedSearch);
        });
    };
    
    useEffect(() => {
        setFilteredProducts(expensiveFilter());
    }, [products, searchTerm]);
    
    return (
        <div>
            <input 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products..."
            />
            {expensiveFilter().map(product => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                </div>
            ))}
        </div>
    );
}
```

## Documentation Templates

### Prompt Evolution Template
Use this template to track your prompt improvements:

```markdown
## Prompt Evolution: [Exercise Name]

### Version 1 (Initial)
**Prompt**:
```
[Your initial prompt]
```

**Response Quality**: [1-10]
**Issues Identified**:
- Issue 1
- Issue 2

### Version 2 (Improved)
**Changes Made**: [What you changed and why]
**Prompt**:
```
[Your improved prompt]
```

**Response Quality**: [1-10]
**Improvements Observed**:
- Improvement 1
- Improvement 2

**Remaining Issues**:
- Issue 1 (if any)

### [Continue for additional versions]

### Final Assessment
**Best Version**: Version [X]
**Key Success Factors**:
- Factor 1
- Factor 2

**Lessons Learned**:
- Lesson 1
- Lesson 2
```

### Pattern Comparison Template
```markdown
## Pattern Effectiveness Comparison

### Scenario: [Describe your use case]

### Role-Based Pattern
**Prompt**: [Your role-based prompt]
**Response Quality**: [1-10]
**Strengths**: 
**Weaknesses**:

### Few-Shot Pattern
**Prompt**: [Your few-shot prompt]
**Response Quality**: [1-10]
**Strengths**:
**Weaknesses**:

### Chain-of-Thought Pattern
**Prompt**: [Your chain-of-thought prompt]
**Response Quality**: [1-10]
**Strengths**:
**Weaknesses**:

### Constraint-Based Pattern
**Prompt**: [Your constraint-based prompt]
**Response Quality**: [1-10]
**Strengths**:
**Weaknesses**:

### Conclusion
**Best Pattern for This Scenario**: [Pattern name]
**Reasoning**: [Why this pattern worked best]
**When to Use Each**: [Guidelines for pattern selection]
```

## Quality Assessment Rubric

### Prompt Quality Scoring (1-10 scale)

#### Context (1-10)
- **1-3**: No context provided
- **4-6**: Basic context, some important details missing
- **7-8**: Good context, minor details could be clearer
- **9-10**: Complete, clear context with all necessary background

#### Specificity (1-10)
- **1-3**: Very vague, many interpretations possible
- **4-6**: Somewhat specific, still ambiguous in places
- **7-8**: Mostly specific, clear requirements
- **9-10**: Highly specific, unambiguous instructions

#### Actionability (1-10)
- **1-3**: Unclear what action is needed
- **4-6**: General direction given, specifics unclear
- **7-8**: Clear action with some implementation details
- **9-10**: Precise, actionable instructions with clear deliverables

#### Response Quality (1-10)
- **1-3**: Response doesn't meet needs
- **4-6**: Response partially helpful, needs significant work
- **7-8**: Response mostly useful, minor adjustments needed
- **9-10**: Response perfectly meets requirements

## Common Mistakes and How to Avoid Them

### Mistake 1: Being Too Vague
**Example**: "Make this better"
**Problem**: No specific criteria for "better"
**Solution**: Define specific improvement goals

### Mistake 2: Assuming Context
**Example**: "Fix the login bug"
**Problem**: AI doesn't know about your specific bug
**Solution**: Provide code, error messages, and context

### Mistake 3: Overwhelming with Information
**Example**: 500-word prompt with 20 different requirements
**Problem**: Too much to process effectively
**Solution**: Break into smaller, focused prompts

### Mistake 4: Wrong Pattern Choice
**Example**: Using few-shot when you need expert analysis
**Problem**: Pattern doesn't match the task type
**Solution**: Match pattern to task requirements

### Mistake 5: No Iteration Strategy
**Example**: Accepting first response without refinement
**Problem**: Missing opportunities for improvement
**Solution**: Plan for 2-3 refinement cycles

## Success Indicators

### You're succeeding when:
- [ ] Your prompts consistently produce useful first responses
- [ ] You can identify what's missing from AI responses
- [ ] You know which pattern to use for different tasks
- [ ] Your refined prompts show clear improvement over initial versions
- [ ] You can troubleshoot prompt issues systematically

### Ready for next level when:
- [ ] You write effective prompts without referring to templates
- [ ] You can combine multiple patterns effectively
- [ ] You help others improve their prompts
- [ ] You adapt patterns for domain-specific needs
- [ ] You create your own prompt variations