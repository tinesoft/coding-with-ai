# Lab 2: AI Fundamentals in Practice

## Learning Objectives
- Understand how LLMs, embeddings, and RAG work in real applications
- Experiment with different AI model capabilities and limitations
- Explore practical applications of AI concepts in development workflows
- Build confidence in choosing appropriate AI tools for specific tasks

## Prerequisites
- Completion of Lab 1 (Prompt Engineering Basics)
- Basic understanding of programming concepts
- Access to multiple AI tools for comparison
- Text editor for documenting experiments and observations

## Lab Overview
This hands-on lab bridges the gap between AI theory and practical application. You'll explore how fundamental AI concepts like embeddings, context windows, and RAG manifest in real development tools and workflows.

## Setup Instructions

1. **Prepare Your AI Tool Arsenal**:
   - **Primary Tools**: ChatGPT, Claude, or Gemini
   - **Specialized Tools**: GitHub Copilot (if available)
   - **Optional**: Local AI tools (Ollama, etc.)

2. **Create Lab Documentation**:
   - Create `lab-02-ai-fundamentals.md` for your observations
   - Set up experiment tracking templates
   - Prepare code samples for testing

3. **Environment Setup**:
   ```bash
   # Create a test project for experiments
   mkdir ai-fundamentals-lab
   cd ai-fundamentals-lab
   npm init -y
   
   # Create sample files for testing
   mkdir src tests docs
   touch src/index.js tests/sample.test.js docs/README.md
   ```

## Exercise 1: Understanding Context Windows

### Objective
Explore how context window limitations affect AI responses and learn strategies for working within these constraints.

### Background
LLMs have context window limits (4K-128K tokens depending on the model). Understanding this helps you structure interactions effectively.

### Instructions

**Step 1**: Test context window limits with a large document.

Create a large text file (`large-document.md`) with approximately 3000 words of code documentation or technical content. You can use:
- A large README file from an open-source project
- Multiple code files concatenated together
- Technical documentation from your current project

**Step 2**: Test different AI tools with your large document:

```
"Please analyze this entire document and provide:
1. A comprehensive summary
2. Key technical concepts identified
3. Suggested improvements
4. Any potential issues or concerns

[Paste your large document here]"
```

**Step 3**: Document the responses:
- Did the AI handle the entire document?
- Where did it seem to lose context?
- How did response quality change with document size?

**Step 4**: Try chunking strategies:

```
"I'm going to share a large document in 3 parts. Please:
1. Acknowledge each part
2. After all parts, provide comprehensive analysis
3. Reference specific sections in your analysis

Part 1 of 3:
[First chunk of document]"
```

**Step 5**: Compare chunking vs. single large prompt effectiveness.

### Success Criteria
- [ ] Tested context limits with document >2000 words
- [ ] Compared responses across different AI tools
- [ ] Documented where context was lost or truncated
- [ ] Successfully implemented chunking strategy
- [ ] Analyzed effectiveness of different approaches

## Exercise 2: Exploring Embeddings and Semantic Search

### Objective
Understand how AI models understand semantic relationships and how this affects code analysis and documentation tasks.

### Background
Embeddings allow AI to understand semantic similarity beyond exact word matches. This powers features like code search, documentation generation, and intelligent code completion.

### Instructions

**Step 1**: Test semantic understanding with code similarity.

Create three similar but different functions:

```javascript
// Function 1: Traditional loop
function findMaxValue(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

// Function 2: Functional approach
const findLargestNumber = (arr) => {
    return arr.reduce((max, current) => current > max ? current : max);
};

// Function 3: Built-in method
const getMaximum = (values) => Math.max(...values);
```

**Step 2**: Test AI semantic understanding:

```
"Analyze these three functions and explain:
1. What they have in common semantically
2. How they differ in implementation approach
3. Which approach you'd recommend and why
4. How you identified their semantic similarity

[Include all three functions]"
```

**Step 3**: Test with variable naming variations:

```javascript
function getUserAge(person) { return person.age; }
function getPersonYears(individual) { return individual.years; }
function extractAgeValue(user) { return user.ageInYears; }
```

Ask the AI to identify the semantic similarity despite different naming.

**Step 4**: Test code documentation generation:

```
"Generate documentation for this function that captures its semantic purpose, not just its syntax:

function processData(input, config) {
    const filtered = input.filter(config.filterFn);
    const transformed = filtered.map(config.transformFn);
    const sorted = transformed.sort(config.sortFn);
    return sorted.slice(0, config.limit || 10);
}
"
```

**Step 5**: Compare how different AI tools handle semantic understanding.

### Success Criteria
- [ ] Tested semantic similarity recognition across code variants
- [ ] Documented how AI identifies conceptual relationships
- [ ] Compared semantic understanding across different AI tools
- [ ] Successfully generated semantic-focused documentation
- [ ] Identified patterns in how embeddings affect code analysis

## Exercise 3: RAG in Action - Context-Aware Development

### Objective
Explore how Retrieval Augmented Generation works in practice and simulate RAG-like workflows for development tasks.

### Background
RAG combines retrieval of relevant information with generation, allowing AI to access current, specific information beyond its training data.

### Instructions

**Step 1**: Simulate RAG for project-specific assistance.

Create a "knowledge base" for your test project:

```markdown
# Project Knowledge Base

## Architecture Overview
This project follows microservices architecture with:
- API Gateway (Express.js)
- User Service (Node.js + PostgreSQL)
- Order Service (Node.js + MongoDB)
- Notification Service (Python + Redis)

## Coding Standards
- Use TypeScript for all new code
- Follow ESLint configuration in .eslintrc.js
- Use Prettier for code formatting
- All functions must include JSDoc comments
- Unit tests required for business logic

## Database Schema
Users table: id, email, password_hash, created_at, updated_at
Orders table: id, user_id, items, total, status, created_at
Products table: id, name, price, category_id, stock_count
```

**Step 2**: Test context-aware assistance:

```
"Based on this project's architecture and standards, help me create a new user registration endpoint.

Project Context:
[Include your knowledge base]

Requirements:
- Follow existing patterns
- Include proper validation
- Add appropriate tests
- Consider security best practices"
```

**Step 3**: Compare with and without context:

First, ask for the same endpoint without providing project context:
```
"Create a user registration endpoint for a web application"
```

Then provide the context and ask again. Document the differences.

**Step 4**: Test retrieval simulation:

Create multiple "documents" with different information:

```markdown
Document 1: Error Handling Patterns
- Use try-catch for async operations
- Return standardized error objects
- Log errors with correlation IDs

Document 2: Authentication Flow
- JWT tokens with 24-hour expiry
- Refresh token rotation
- Rate limiting on auth endpoints

Document 3: Database Patterns
- Use connection pooling
- Implement query timeout
- Add database health checks
```

Ask the AI to solve a problem that requires information from multiple documents:

```
"I need to implement secure user login with proper error handling and database connectivity. 

Relevant Documentation:
[Include all three documents]

Please create a solution that follows all documented patterns."
```

### Success Criteria
- [ ] Created comprehensive project knowledge base
- [ ] Compared AI responses with and without context
- [ ] Demonstrated improved specificity with project context
- [ ] Successfully simulated multi-document RAG workflow
- [ ] Documented how context affects response quality and relevance

## Exercise 4: Model Capabilities and Limitations

### Objective
Systematically explore what different AI models can and cannot do effectively, building intuition for tool selection.

### Instructions

**Step 1**: Test reasoning capabilities.

Present a logical puzzle that requires step-by-step reasoning:

```
"Debug this code logic issue by thinking through it step-by-step:

function calculateDiscount(price, customerType, purchaseDate) {
    let discount = 0;
    
    if (customerType === 'premium') {
        discount = 0.15;
    } else if (customerType === 'regular') {
        discount = 0.10;
    }
    
    // Holiday bonus
    const holiday = new Date('2024-12-25');
    if (purchaseDate.getMonth() === holiday.getMonth()) {
        discount += 0.05;
    }
    
    // Bulk purchase bonus
    if (price > 100) {
        discount *= 1.2; // 20% bonus on existing discount
    }
    
    return price * discount;
}

// Test case that's failing:
const result = calculateDiscount(150, 'premium', new Date('2024-12-20'));
// Expected: 22.5 (15% + 5% holiday = 20%, then 20% bonus = 24% of 150 = 36)
// Actual: 30

What's wrong and how should it be fixed?"
```

**Step 2**: Test code generation limits.

Ask for increasingly complex code generation:

```
Level 1: "Create a simple function to validate email addresses"

Level 2: "Create a React component with state management, API calls, and error handling"

Level 3: "Create a complete authentication system with login, registration, password reset, and session management"

Level 4: "Create a microservices architecture with API gateway, service discovery, and database migrations"
```

Document where the AI starts to struggle or provides incomplete solutions.

**Step 3**: Test domain-specific knowledge.

Test the AI's knowledge in areas relevant to your work:

```
"Explain the trade-offs between different state management solutions in React applications, considering performance, scalability, and developer experience for a team of 10 developers building an e-commerce platform"
```

**Step 4**: Test creative problem-solving.

Present a novel problem without obvious solutions:

```
"I need to implement real-time collaboration features for a code editor, similar to Google Docs but for programming. The challenge is handling conflicting edits, maintaining syntax validity, and synchronizing across multiple users. What approaches would you recommend, and what are the technical challenges I should prepare for?"
```

**Step 5**: Document capability patterns across different AI tools.

### Success Criteria
- [ ] Tested logical reasoning with complex debugging scenario
- [ ] Identified complexity limits for code generation
- [ ] Evaluated domain-specific knowledge accuracy
- [ ] Tested creative problem-solving capabilities
- [ ] Compared capabilities across multiple AI tools
- [ ] Documented patterns for when to use which tool

## Exercise 5: Practical AI Integration Strategies

### Objective
Design AI-enhanced workflows for common development tasks based on your understanding of AI capabilities and limitations.

### Instructions

**Step 1**: Design an AI-enhanced code review process.

Consider these requirements:
- Team of 5 developers
- Mixed experience levels (1 senior, 2 mid, 2 junior)
- Focus on code quality, security, and maintainability
- Need to review 20-30 PRs per week

Create a workflow that includes:
- When to use AI assistance
- What to ask AI to review
- How to validate AI suggestions
- Integration with existing tools

**Step 2**: Create an AI-assisted learning curriculum.

Design a learning path for a junior developer to master a new technology (choose: TypeScript, React, Node.js, or another relevant technology).

Include:
- AI tools to use for different learning phases
- Prompt strategies for effective learning
- Practice exercises with AI assistance
- How to validate learning progress

**Step 3**: Design an AI-enhanced debugging workflow.

Create a systematic approach to debugging complex issues:
- Initial problem analysis with AI
- Information gathering strategies
- When to involve AI vs. human expertise
- Documentation and knowledge sharing

**Step 4**: Prototype one of your designed workflows.

Choose one workflow and actually implement it with a small test case. Document:
- What worked as expected
- Where AI assistance was most valuable
- What required human intervention
- How you'd refine the workflow

### Success Criteria
- [ ] Designed comprehensive AI-enhanced code review process
- [ ] Created structured AI-assisted learning curriculum
- [ ] Developed systematic AI debugging workflow
- [ ] Prototyped and tested one complete workflow
- [ ] Documented lessons learned and workflow refinements

## Reflection and Analysis

### Lab Completion Assessment

Answer these questions based on your experiments:

1. **Context Window Understanding**:
   - How do context limitations affect different development tasks?
   - What strategies work best for handling large codebases?

2. **Semantic Understanding**:
   - How well do AI models understand code semantics vs. syntax?
   - When is semantic understanding most valuable in development?

3. **RAG Applications**:
   - How does providing context change AI response quality?
   - What types of project information are most valuable to include?

4. **Model Capabilities**:
   - What are the reliability boundaries for different AI tools?
   - Where do you need human oversight vs. AI automation?

5. **Integration Strategies**:
   - Which development tasks benefit most from AI assistance?
   - How do you balance AI efficiency with human expertise?

### Key Insights Documentation

Create a personal reference guide with:

```markdown
# My AI Development Insights

## Tool Selection Matrix
| Task Type | Recommended Tool | Reasoning | Limitations |
|-----------|------------------|-----------|-------------|
| Code generation | [Tool] | [Why] | [Limits] |
| Debugging | [Tool] | [Why] | [Limits] |
| Documentation | [Tool] | [Why] | [Limits] |

## Effective Prompt Patterns
- **For Code Analysis**: [Your pattern]
- **For Problem Solving**: [Your pattern]
- **For Learning**: [Your pattern]

## Red Flags and Safety Checks
- [ ] When AI responses need human verification
- [ ] How to validate AI-generated code
- [ ] What never to share with AI tools

## Personal AI Workflow
1. [Step 1 of your process]
2. [Step 2 of your process]
3. [etc.]
```

## Troubleshooting and Support

### Common Issues
- **AI responses too generic**: Add more specific context and constraints
- **Inconsistent quality**: Try different prompt patterns or AI tools
- **Missing domain knowledge**: Provide relevant background information
- **Complex tasks failing**: Break down into smaller, manageable pieces

### Getting Help
- Review Module 1 fundamentals if concepts are unclear
- Compare results across multiple AI tools
- Share interesting findings with classmates
- Prepare specific questions for instructor discussion

---
**Estimated Completion Time**: 3-4 hours
**Difficulty Level**: Intermediate
**Skills Practiced**: AI concept application, tool evaluation, workflow design