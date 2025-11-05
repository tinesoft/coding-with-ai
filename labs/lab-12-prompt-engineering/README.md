# Lab 2: Prompt Engineering Basics

## Learning Objectives
- Apply the CLEAR framework to write effective prompts
- Practice iterative prompt refinement techniques
- Understand the impact of prompt structure on AI responses
- Build confidence in AI communication skills

## Prerequisites
- Completion of Lab 1 (AI Fundamentals in Practice)
- Basic understanding of programming concepts
- Access to an AI tool (ChatGPT, Claude, or similar)
- Text editor for documenting your prompts and responses

## Lab Overview
This hands-on lab will guide you through the fundamentals of prompt engineering. You'll transform vague requests into clear, effective prompts that consistently produce high-quality AI responses.

## Setup Instructions

1. **Choose Your AI Tool**:
   - **Free Options**: ChatGPT Free, Claude (Anthropic), Gemini
   - **Paid Options**: ChatGPT Plus, Claude Pro
   - **IDE Integration**: GitHub Copilot (if available)

2. **Create a Lab Notebook**:
   - Create a new text file named `lab-12-prompts.md`
   - You'll document prompts and responses throughout the lab
   - Include timestamps and tool used for each interaction

3. **Template for Documentation**:
   ```markdown
   ## Exercise [Number]: [Title]
   **Tool Used**: [AI Tool Name]
   **Time**: [Timestamp]
   
   ### Original Prompt:
   ```
   [Your prompt here]
   ```
   
   ### AI Response:
   ```
   [AI response here]
   ```
   
   ### Reflection:
   - What worked well?
   - What could be improved?
   - How would you refine this prompt?
   ```

## Exercise 1: From Vague to Clear

### Objective
Transform a vague prompt into a specific, actionable request using the CLEAR framework.

### Instructions

**Step 1**: Start with this vague prompt:
```
"Help me with a login function"
```

**Step 2**: Ask the AI this prompt and document the response.

**Step 3**: Analyze the response:
- Is it specific enough for your needs?
- What assumptions did the AI make?
- What important details are missing?

**Step 4**: Improve the prompt using CLEAR:
- **Context**: What's the larger application?
- **Length**: How detailed should the response be?
- **Examples**: What format do you want?
- **Audience**: What's your skill level?
- **Role**: What expertise should the AI provide?

**Step 5**: Create an improved prompt that might look like:
```
"As a senior JavaScript developer, help me create a secure login function 
for a React TypeScript application. The function should:

- Accept email and password parameters
- Return a Promise with user data or error
- Include input validation for email format
- Hash passwords using bcrypt
- Handle network errors gracefully
- Include TypeScript types for all parameters and return values

Please provide:
1. The complete function with JSDoc comments
2. TypeScript interfaces for the data structures
3. Basic usage example
4. Error handling best practices

Target: Senior developers familiar with React and TypeScript"
```

**Step 6**: Compare the two responses and document the differences.

### Success Criteria
- [ ] Applied real-world problem-solving with AI assistance
- [ ] Received and incorporated feedback from peers

## Exercise 2: Iterative Refinement

### Objective
Practice the iterative improvement process to achieve optimal AI responses.

### Instructions

**Step 1**: Start with this basic prompt:
```
"Create a React component for displaying products"
```

**Step 2**: Submit this prompt and evaluate the response:
- What's missing?
- What assumptions were made?
- How could it be more specific to your needs?

**Step 3**: Create Version 2 by adding ONE improvement:
- Add specific requirements (props, styling, behavior)
- OR specify the technology stack (TypeScript, styling library)
- OR define the data structure for products

**Step 4**: Submit Version 2 and evaluate again.

**Step 5**: Create Version 3 by addressing the next biggest gap.

**Step 6**: Continue this process for 4-5 iterations until you get a response that meets specific criteria:
- Uses TypeScript with proper interfaces
- Includes error handling for missing data
- Has responsive styling (CSS modules or styled-components)
- Includes loading states
- Has accessibility features
- Includes proper PropTypes or TypeScript validation

**Step 7**: Document each iteration with:
- The specific improvement made
- The reason for the improvement
- The impact on the AI response quality

### Success Criteria
- [ ] Completed 4-5 iterations of prompt refinement
- [ ] Each iteration shows clear improvement intent
- [ ] Final response meets all specified criteria
- [ ] Evolution of response quality clearly documented
- [ ] Specific improvements and their impacts recorded

## Exercise 3: Pattern Application

### Objective
Apply different prompt engineering patterns to solve various coding challenges.

### Instructions

Choose **THREE** of the following scenarios and apply the specified pattern:

#### Scenario A: Role-Based Pattern
**Challenge**: Code review for security vulnerabilities
**Your Task**: Write a prompt that assigns the AI a specific security expert role to review a piece of authentication code.

**Pattern Structure**:
```
"You are a [specific role] with [expertise areas]. 
Your task is to [specific analysis] focusing on [key concerns].
Please provide [specific deliverables]."
```

#### Scenario B: Few-Shot Pattern  
**Challenge**: Generate consistent API response formats
**Your Task**: Create a prompt with 2-3 examples that guide the AI to generate API responses in a specific format.

**Pattern Structure**:
```
"Generate API responses following these examples:

Example 1: [concrete example]
Example 2: [concrete example]
Example 3: [concrete example]

Now generate: [your specific request]"
```

#### Scenario C: Chain-of-Thought Pattern
**Challenge**: Debug a performance issue in a React application
**Your Task**: Structure a prompt that guides the AI through systematic analysis steps.

**Pattern Structure**:
```
"Help me debug this performance issue by following these steps:
1. First, analyze [specific aspect]
2. Then, examine [specific aspect]
3. Next, consider [specific aspect]
4. Finally, recommend [specific deliverables]

[Provide your code/scenario]"
```

#### Scenario D: Constraint-Based Pattern
**Challenge**: Database query optimization with specific requirements
**Your Task**: Write a prompt with clear constraints and boundaries.

**Pattern Structure**:
```
"Create a database query that MUST:
- [specific requirement]
- [specific requirement]
- [specific requirement]

And CANNOT:
- [specific limitation]
- [specific limitation]

Additional constraints:
- [technical constraint]
- [performance constraint]"
```

### Success Criteria
- [ ] Three different patterns successfully applied
- [ ] Each prompt clearly demonstrates the pattern structure
- [ ] AI responses show the pattern's effectiveness
- [ ] Comparison notes on when each pattern works best
- [ ] Reflection on pattern selection criteria

## Exercise 4: Real-World Application

### Objective
Apply prompt engineering skills to a current development challenge.

### Instructions

**Step 1**: Identify a real coding task you're currently working on or recently encountered:
- Bug fix you're struggling with
- Feature implementation you need to complete
- Technology you're learning
- Architecture decision you need to make
- Performance optimization challenge

**Step 2**: Write an initial prompt for this real challenge.

**Step 3**: Apply everything you've learned:
- Use the CLEAR framework
- Choose an appropriate pattern
- Be specific about your context and constraints
- Define clear success criteria

**Step 4**: Iterate on the prompt at least 3 times based on the AI responses.

**Step 5**: Implement or test the AI's suggestions (if applicable).

**Step 6**: Document the complete process:
- Original problem description
- Evolution of your prompts
- Quality of AI responses at each stage
- Final outcome and lessons learned

### Success Criteria
- [ ] Real-world problem clearly defined
- [ ] Initial prompt documented
- [ ] CLEAR framework and appropriate pattern applied
- [ ] At least 3 iterations of refinement completed
- [ ] Final results evaluated and documented
- [ ] Lessons learned captured for future use

## Reflection and Documentation

### Lab Completion Checklist
- [ ] All exercises completed with documented prompts and responses
- [ ] Clear improvements observed between vague and specific prompts
- [ ] Iterative refinement process successfully demonstrated
- [ ] Multiple prompt patterns applied effectively
- [ ] Real-world application attempted with documented results
- [ ] Personal insights and lessons learned documented

### Key Insights Template
Document your answers to these reflection questions:

1. **Most Surprising Discovery**: What surprised you most about prompt engineering?

2. **Biggest Challenge**: What was the most difficult aspect of this lab?

3. **Most Useful Pattern**: Which prompt pattern do you think you'll use most often?

4. **Quality Improvement**: On a scale of 1-10, how much did your prompt quality improve?

5. **Future Application**: How will you apply these skills in your daily development work?

6. **Tool Comparison**: If you tried multiple AI tools, how did they differ in response quality?

### Next Steps
- Save your best prompts in a personal prompt library
- Experiment with additional AI tools using your improved prompts
- Share effective prompts with your team
- Continue practicing prompt refinement in your daily work

## Exercise 5: Debugging Bad Prompts

### Objective
Identify common prompt problems and practice fixing them using the techniques learned in Module 1.

### Background
This exercise helps you recognize and correct typical prompt engineering mistakes by analyzing ineffective prompts and transforming them into clear, actionable requests.

### Instructions

#### **Fix These Broken Prompts**

**Problem 1: Too Vague**
```
"Make this code better"
```

**Your Task**: Rewrite this prompt to be specific and actionable.

**Considerations**:
- What kind of improvements are needed?
- What context is missing?
- What output format is expected?

**Problem 2: Too Many Tasks**
```
"Create a React app with authentication, database integration, user management, 
email notifications, file uploads, and deployment scripts using the latest 
best practices and security measures"
```

**Your Task**: Break this down into manageable, focused prompts.

**Problem 3: Missing Context**
```
"Fix the performance issue in my function"
```

**Your Task**: Add the necessary context to make this prompt effective.

#### **Solution Development**

**Step 1**: Work individually to fix each prompt (5 minutes)

**Step 2**: Compare your solutions with provided examples:

**Problem 1 → Fixed Example**:
```
"Review this JavaScript function for code quality improvements:
- Optimize for readability and maintainability
- Suggest modern ES6+ syntax where applicable
- Identify potential performance optimizations
- Add error handling where missing

[Include the specific code to review]"
```

**Problem 2 → Fixed Example**:
```
"Create a basic React authentication component with:
- Login/logout functionality using email/password
- JWT token storage in localStorage
- Form validation for email format
- Loading states for async operations
- TypeScript interfaces for all props

Note: This is part 1 of a larger application. Additional features 
will be addressed in separate prompts."
```

**Problem 3 → Fixed Example**:
```
"Analyze this Node.js function for performance issues:

function processUserData(users) {
  // [Include the actual function code]
}

Context:
- Function processes arrays of 1000+ user objects
- Currently takes 3-5 seconds to complete
- Running on Node.js 18 in production
- Each user object has ~20 properties

Please identify bottlenecks and suggest specific optimizations 
with expected performance improvements."
```

**Step 3**: Document the patterns you notice in effective vs. ineffective prompts

### Success Criteria
- [ ] Successfully identified problems in all three broken prompts
- [ ] Created improved versions that address the specific issues
- [ ] Compared your solutions with provided examples
- [ ] Documented patterns for recognizing and fixing prompt problems
- [ ] Can explain why each improvement makes the prompt more effective

### Reflection Questions
- What made the original prompts problematic?
- Which improvement techniques were most effective?
- How do these patterns apply to your own prompt writing?
- What warning signs indicate a prompt needs refinement?

**Time: 15 minutes (10 minutes fixing + 5 minutes reflection)**

## Troubleshooting

### Common Issues and Solutions

**Issue**: AI responses are too generic
**Solution**: Add more specific context and constraints

**Issue**: AI makes wrong assumptions
**Solution**: Explicitly state your assumptions and requirements

**Issue**: Responses are too long/short
**Solution**: Specify desired length and level of detail

**Issue**: AI doesn't understand your domain
**Solution**: Provide relevant background information and examples

**Issue**: Inconsistent response quality
**Solution**: Try different AI tools or refine your prompt structure

### Getting Help
- Review the CLEAR framework in Module 1 slides
- Try different prompt patterns for the same request
- Compare responses across different AI tools
- Ask classmates or instructors for prompt review

## Exercise 6: SPEAR Framework Introduction

### Objective
Learn and apply the SPEAR framework (Scenario, Perspective, Examples, Action, Result) for role-based and contextual prompt construction.

### Background
While CLEAR focuses on comprehensive prompt elements, SPEAR emphasizes situational context and role-specific expertise. This exercise introduces you to this complementary framework.

### Instructions

**Step 1**: Understand SPEAR Components
- **S**cenario: The business or technical context
- **P**erspective: The role or viewpoint the AI should adopt
- **E**xamples: Reference implementations or patterns
- **A**ction: The specific task to perform
- **R**esult: Expected deliverables and format

**Step 2**: Apply SPEAR to this scenario:

**Context**: You're building a REST API for a mobile application that needs to handle user profiles.

**Your Task**: Write a prompt using the SPEAR framework to generate a user profile endpoint.

**SPEAR Template**:
```
Scenario: [Describe the business/technical context]

Perspective: [Define the role/expertise level]

Examples: [Provide reference patterns or implementations]

Action: [Specify the exact task]

Result: [Define expected output format and quality]
```

**Step 3**: Create your SPEAR prompt. Here's a starter:
```
Scenario: I'm developing a mobile app backend for a fitness tracking platform. 
We need a user profile system that handles 10,000+ daily active users.

Perspective: As a backend engineer with 5 years experience in Node.js and REST API design, 
focused on scalability and security.

Examples: Similar to GitHub's user API (GET /users/:username) with profile fields, 
but tailored for fitness data (age, weight, height, fitness goals).

Action: Create a Node.js Express endpoint that:
- Handles GET /api/users/:userId
- Returns user profile data
- Includes proper error handling
- Uses TypeScript types
- Validates user authentication

Result: Provide complete TypeScript code with:
1. Route handler with JSDoc comments
2. TypeScript interfaces for request/response
3. Error handling middleware
4. Example successful and error responses
```

**Step 4**: Submit your prompt to an AI tool and evaluate:
- Does the response match the expected expertise level?
- Is the context appropriately considered?
- Does the output match the specified format?

### Success Criteria
- [ ] Created a complete SPEAR-formatted prompt
- [ ] All five SPEAR components are clearly defined
- [ ] AI response reflects the specified perspective/expertise
- [ ] Output matches the expected result format
- [ ] Can explain how SPEAR differs from CLEAR

**Time: 20 minutes**

## Exercise 7: CLEAR vs SPEAR Comparison

### Objective
Compare and contrast CLEAR and SPEAR frameworks by applying both to the same task.

### Instructions

**The Challenge**: Create a React component for a data table with sorting and filtering.

**Step 1**: Write a prompt using the CLEAR framework
- Context: What's the application context?
- Length: How detailed should the response be?
- Examples: What format/style do you want?
- Audience: What's your skill level?
- Role: What expertise should AI provide?

**Step 2**: Write a prompt using the SPEAR framework
- Scenario: What's the business context?
- Perspective: What role should AI adopt?
- Examples: What reference implementations?
- Action: What specific task to perform?
- Result: What deliverables are expected?

**Step 3**: Submit both prompts to the same AI tool (use separate sessions)

**Step 4**: Compare the responses:

| Aspect | CLEAR Response | SPEAR Response |
|--------|---------------|----------------|
| Code complexity | | |
| Documentation quality | | |
| Assumptions made | | |
| Expertise level | | |
| Relevance to context | | |

**Step 5**: Answer these questions:
- Which framework produced a better response for this task? Why?
- What did CLEAR emphasize that SPEAR didn't?
- What did SPEAR capture that CLEAR missed?
- When would you prefer one framework over the other?

### Success Criteria
- [ ] Created prompts using both CLEAR and SPEAR for the same task
- [ ] Documented responses from both frameworks
- [ ] Completed comparison analysis table
- [ ] Can articulate when to use each framework
- [ ] Understand the complementary nature of both approaches

**Time: 25 minutes**

## Exercise 8: Advanced SPEAR Application

### Objective
Apply SPEAR framework to a complex, domain-specific scenario requiring specialized expertise.

### Instructions

Choose ONE of these advanced scenarios and create a comprehensive SPEAR prompt:

#### Scenario A: Database Performance Optimization
**Context**: E-commerce platform experiencing slow query performance during flash sales (1000+ concurrent users)

**Your Task**: Use SPEAR to request database optimization recommendations from a senior database architect perspective.

**Required Elements**:
- Scenario: Include user volume, current tech stack, specific pain points
- Perspective: Senior DBA with PostgreSQL and high-traffic experience
- Examples: Reference similar optimization cases (e.g., Twitter, Amazon Prime Day)
- Action: Analyze query patterns and provide optimization strategy
- Result: Specific SQL optimization, indexing strategy, caching recommendations

#### Scenario B: Security Audit
**Context**: Legacy authentication system needs modernization before SOC 2 compliance audit

**Your Task**: Use SPEAR to request a security review from an application security expert perspective.

**Required Elements**:
- Scenario: Legacy system details, compliance requirements, timeline
- Perspective: AppSec engineer with OAuth2/JWT expertise and compliance knowledge
- Examples: Industry-standard auth implementations (Auth0, Okta patterns)
- Action: Review current implementation and create migration plan
- Result: Security assessment report + step-by-step migration strategy

#### Scenario C: Microservices Architecture
**Context**: Monolithic application needs decomposition into microservices for scaling team and deployment

**Your Task**: Use SPEAR to request architecture design from a solutions architect perspective.

**Required Elements**:
- Scenario: Current monolith structure, team size, scaling requirements
- Perspective: Solutions architect with microservices and DDD experience
- Examples: Netflix, Uber microservice patterns
- Action: Design service boundaries and communication patterns
- Result: Architecture diagram, service definitions, migration phases

**Deliverables**:
1. Complete SPEAR prompt (400-600 words)
2. AI response analysis
3. Evaluation of whether perspective/expertise was properly reflected
4. Refinement suggestions if response didn't meet expectations

### Success Criteria
- [ ] Selected one advanced scenario
- [ ] Created comprehensive SPEAR prompt with all components
- [ ] Scenario reflects real-world complexity
- [ ] Perspective clearly defines required expertise level
- [ ] Examples provide relevant reference points
- [ ] Action specifies detailed requirements
- [ ] Result defines clear, measurable deliverables
- [ ] Can articulate how SPEAR handles domain expertise better than simpler frameworks

**Time: 30 minutes**

## SPEAR Framework Summary

### Key Takeaways
- **SPEAR emphasizes**: Role-based context and situational awareness
- **Best for**: Domain-specific tasks requiring specialized expertise
- **Complements CLEAR**: Use together for comprehensive prompts
- **Perspective is crucial**: The role significantly affects response quality

### When to Use SPEAR
✅ Complex business scenarios with specific context  
✅ Domain expertise significantly affects solution quality  
✅ Role-based perspective changes approach  
✅ Situational context drives decision-making  

### Combining CLEAR and SPEAR
You can blend elements from both frameworks:
- Use CLEAR's Length and Audience with SPEAR's Scenario and Perspective
- Combine CLEAR's structured approach with SPEAR's contextual depth
- Adapt based on task complexity and domain specificity

---
**Estimated Completion Time**: 2-3 hours (original exercises) + 75 minutes (SPEAR exercises)
**Total Lab Time**: 3-4.25 hours
**Difficulty Level**: Beginner to Intermediate
**Skills Practiced**: Prompt engineering, CLEAR framework, SPEAR framework, iterative refinement, pattern application