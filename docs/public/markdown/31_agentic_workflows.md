<!-- .slide -->

# What is an Agentic Workflow?

## **Traditional Development vs Agentic Development**

### **Traditional Approach**
```
Plan → Code → Test → Debug → Deploy
(Human does everything step by step)
```

### **Agentic Approach**
```
Specify Goal → Agent Plans → Agent Executes → Human Reviews → Iterate
(Human guides, Agent executes)
```

##--##

<!-- .slide -->

# The Agentic Development Process

## **Step-by-Step Agentic Workflow**

### **1. Goal Setting & Specification**
- **Define the objective** clearly and specifically
- **Provide context** about existing codebase and requirements
- **Set constraints** (technology, style, performance)

### **2. Agent Planning**
- **AI analyzes** the requirements and creates execution plan
- **Breaks down** complex tasks into manageable steps
- **Identifies dependencies** and potential challenges

### **3. Iterative Execution**
- **Agent executes** each step of the plan
- **Human reviews** and provides feedback
- **Agent adapts** based on feedback and new requirements

##--##

<!-- .slide: class="with-code" -->

# Agentic Workflow Example

## **Goal**: Add user authentication to a React app

### **Specification**
```yaml
Objective: Implement user authentication system
Technology: React + TypeScript + Express
Requirements:
  - JWT-based authentication
  - Login/register forms with validation
  - Protected routes
  - User context for state management
  - Secure password handling
  - Error handling and loading states
Constraints:
  - Use existing design system
  - Follow current code architecture
  - Maintain test coverage above 80%
```

### **Agent Execution Plan**
1. Analyze existing codebase structure
2. Design authentication context and hooks
3. Implement backend auth endpoints
4. Create login/register components
5. Add route protection
6. Update tests and documentation

Notes:
Agentic workflows transform how we think about development. Instead of writing code line by line, we become architects and reviewers, guiding AI agents to execute our vision while maintaining quality and consistency.
