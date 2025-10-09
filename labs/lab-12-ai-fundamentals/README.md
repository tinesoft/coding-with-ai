# Lab 2: AI Fundamentals in Practice

## Learning Objectives
- Understand how LLMs and embeddings work in real applications
- Experiment with different AI model capabilities and limitations
- Explore practical applications of AI concepts in development workflows
- Build confidence in choosing appropriate AI tools for specific tasks

## Prerequisites
- Completion of Lab 1 (Prompt Engineering Basics)
- Basic understanding of programming concepts
- Access to multiple AI tools for comparison
- Text editor for documenting experiments and observations

## Lab Overview
This hands-on lab bridges the gap between AI theory and practical application. You'll explore how fundamental AI concepts like embeddings and context windows manifest in real development tools and workflows.

## Setup Instructions

1. **Prepare Your AI Tool Arsenal**:
   - **Primary Tools**: ChatGPT, Claude, or Gemini
   - **Specialized Tools**: GitHub Copilot (if available)
   - **Optional**: Local AI tools (Ollama, etc.)

2. **Create Lab Documentation**:
   - Create `lab-12-ai-fundamentals.md` for your observations
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

## Exercise 3: Model Capabilities and Limitations

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

## Exercise 4: Practical AI Integration Strategies

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

3. **Context and Semantics**:
   - How does providing context change AI response quality?
   - When is semantic understanding most valuable in development?

4. **Model Capabilities**:
   - What are the reliability boundaries for different AI tools?
   - Where do you need human oversight vs. AI automation?

5. **Integration Strategies**:
   - Which development tasks benefit most from AI assistance?
   - How do you balance AI efficiency with human expertise?

## Exercise 5: Tool Exploration

### Objective
Experience hands-on interaction with different AI coding tools to understand their capabilities and integration patterns.

### Background
This exercise aligns with **slide 14_tools_and_agents.md** and provides practical experience with the AI development tools discussed in Module 1.

### Instructions

Choose one of the following options based on your available tools:

#### **Option 1: GitHub Copilot (if available)**
1. **Installation and Setup**:
   - Install GitHub Copilot extension in VS Code
   - Ensure you have an active Copilot subscription
   - Configure settings for optimal performance

2. **Code Completion Test**:
   ```javascript
   // Try typing this comment and let Copilot suggest the implementation
   // Create a function that validates email addresses using regex
   ```

3. **Copilot Chat Experience**:
   - Open Copilot Chat in VS Code
   - Ask: "Explain how this function works and suggest improvements"
   - Test with a code snippet from your current project

#### **Option 2: Free AI Alternative**
1. **Access AI Tool**:
   - Visit ChatGPT, Claude, or Gemini web interface
   - Practice prompt engineering techniques from Lab 11

2. **Code Generation Test**:
   ```
   "Generate a simple TypeScript function that validates email addresses. 
   Include type annotations, error handling, and JSDoc documentation."
   ```

3. **Code Review Simulation**:
   - Paste an existing code snippet
   - Ask the AI to review for improvements, security issues, and best practices

#### **Option 3: Documentation AI**
1. **Select Code Sample**:
   - Choose a function or class from your existing codebase
   - Or use the sample code provided in this lab

2. **Generate Documentation**:
   ```
   "Generate comprehensive documentation for this code including:
   - Purpose and functionality
   - Parameter descriptions
   - Return value explanation
   - Usage examples
   - Potential edge cases"
   ```

3. **Compare Results**:
   - Generate documentation manually
   - Compare AI-generated vs. manual documentation
   - Identify strengths and weaknesses of each approach

### Success Criteria
- [ ] Successfully tested at least one AI coding tool
- [ ] Compared AI-generated outputs with manual alternatives
- [ ] Documented tool capabilities and limitations
- [ ] Identified potential integration points in your workflow
- [ ] Recorded specific examples for future reference

### Reflection Questions
- How accurate were the AI suggestions?
- What types of tasks seemed well-suited to AI assistance?
- Where did you notice limitations or errors?
- How would you integrate this tool into your development workflow?

**Time: 15 minutes (10 minutes exploration + 5 minutes reflection)**

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