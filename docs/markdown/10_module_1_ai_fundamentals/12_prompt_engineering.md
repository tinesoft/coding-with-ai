<!-- .slide: class="transition" -->
# Module 1: Prompt Engineering
## The Art of AI Communication

Notes:
Prompt engineering is arguably the most important skill for effective AI interaction. It's the bridge between human intent and AI capability—learning to communicate clearly and effectively with AI systems.

##--##

<!-- .slide -->
# **What is Prompt Engineering?**

## **Definition**
The practice of designing and refining inputs to AI systems to achieve desired outputs consistently and effectively.

## **Why It Matters**
- **Precision**: Get exactly what you need, not just something related
- **Efficiency**: Reduce iterations and back-and-forth
- **Consistency**: Reproducible results across different sessions
- **Professional Quality**: Generate production-ready outputs

## **Core Principle**
> **"Garbage in, garbage out"** - The quality of your prompt directly impacts the quality of the AI response.

Notes:
Think of prompt engineering as learning a new language—the language of effective AI communication. Like any language, it has patterns, best practices, and common pitfalls to avoid.

##--##

<!-- .slide -->
# **Anatomy of an Effective Prompt**

## **The CLEAR Framework**
- **C**ontext: Set the scene and background
- **L**ength: Specify desired output length
- **E**xamples: Provide concrete illustrations
- **A**udience: Define the target audience
- **R**ole: Establish the AI's perspective

## **Example: Poor vs. Good**
```
❌ Poor: "Write a function to sort"

✅ Good: "As a Python developer, write a well-documented 
function that sorts a list of integers in ascending order. 
Include error handling for invalid inputs and add type hints."
```

Notes:
The CLEAR framework ensures you cover all essential elements of a comprehensive prompt. Each element serves a specific purpose in guiding the AI toward your desired outcome. The next slide shows how each component contributes to effective prompts.

##--##

<img src="./assets/images/module-1/clear-framework.svg" alt="CLEAR Framework" style="width:100%; height:auto; display:block;">

##--##

<!-- .slide -->
# **The SPEAR Framework**

## **Alternative Approach: Role-Based & Contextual**
- **S**cenario: Define the context and situation
- **P**erspective: Establish the role or viewpoint the AI should take
- **E**xamples: Provide concrete examples of desired outputs
- **A**ction: Specify what you want the AI to do
- **R**esult: Define the expected outcome or format

## **When to Use SPEAR**
- **Complex scenarios** requiring specific context
- **Role-based tasks** where perspective matters
- **Domain expertise** needed in the response
- **Output format** is critical to success

Notes:
SPEAR complements CLEAR by emphasizing role and situational context. It's particularly effective when you need the AI to adopt a specific professional perspective or work within a defined scenario. The next slide visualizes the SPEAR components.

##--##

<img src="./assets/images/module-1/spear-framework.svg" alt="SPEAR Framework" style="width:100%; height:auto; display:block;">

##--##

<!-- .slide -->
# **SPEAR Framework in Practice**

## **Example: Building a Feature**
```
Scenario: "I'm developing a payment processing system for a SaaS platform"

Perspective: "As a senior backend engineer focused on security and reliability"

Examples: "Similar to Stripe's webhook handling with retry logic"

Action: "Create a Node.js service that processes payment webhooks"

Result: "TypeScript code with error handling, logging, and unit tests"
```

Notes:
Notice how SPEAR builds a comprehensive context before specifying the action. The Scenario sets the business context, Perspective establishes expertise level, Examples provide reference points, Action defines the task, and Result clarifies deliverables.

##--##

<!-- .slide -->
# **CLEAR vs SPEAR: When to Use Each**

## **Use CLEAR when:**
- Learning or teaching AI interaction
- Need structured, methodical approach
- Working with general-purpose tasks
- Audience and output format are primary concerns

## **Use SPEAR when:**
- Complex business scenarios require context
- Role/expertise level significantly affects output
- Domain-specific knowledge is critical
- Situation-specific solutions needed

## **Best Practice**
> Combine elements from both frameworks based on your specific needs. They're complementary, not mutually exclusive.

Notes:
Both frameworks serve different strengths. CLEAR is excellent for teaching structured prompt writing, while SPEAR excels in role-based, contextual scenarios. Experienced prompters often blend elements from both frameworks.

##--##

<!-- .slide -->
# **Essential Prompt Patterns**

## **1. Role-Based Prompting**
```
"You are a senior software engineer reviewing code for security 
vulnerabilities. Analyze this function and identify potential issues..."
```

## **2. Few-Shot Learning**
```
"Convert these requirements to user stories:

Requirement: Users need to log in
Story: As a user, I want to log in so that I can access my account

Requirement: Admin can delete users
Story: [AI completes the pattern]"
```

## **3. Chain of Thought**
```
"Explain your reasoning step by step:
1. First, identify the problem
2. Then, consider possible solutions
3. Finally, recommend the best approach because..."
```

Notes:
These patterns are proven techniques that consistently improve AI responses. Role-based prompting gives context, few-shot provides examples, and chain of thought encourages reasoning. The next slide shows how each pattern works in practice.

##--##

<img src="./assets/images/module-1/prompt-patterns.svg" alt="Prompt Patterns" style="width:100%; height:auto; display:block;">

##--##

<!-- .slide -->
# **Specificity and Context**

## **Be Specific About:**
- **Programming Language**: "Python 3.11" not just "Python"
- **Framework/Library**: "React 18 with TypeScript" not just "React"
- **Output Format**: "JSON response" or "markdown table"
- **Constraints**: "Under 50 lines" or "No external dependencies"

## **Provide Context:**
- **Project Background**: What you're building
- **Technical Stack**: Current technologies in use
- **Target Audience**: Who will use this code
- **Performance Requirements**: Speed, memory, scalability needs

## **Example**
```
"I'm building a React 18 TypeScript application for a todo list. 
Create a custom hook that manages todo items with add, remove, 
and toggle functionality. Use localStorage for persistence."
```

Notes:
Specificity eliminates ambiguity and helps the AI generate more targeted, useful responses. Context helps the AI understand the broader picture and make better decisions.

##--##

<!-- .slide -->
# **Iterative Prompt Refinement**

## **The Refinement Process**
1. **Start Simple**: Basic prompt to test understanding
2. **Analyze Output**: What's good, what's missing?
3. **Add Constraints**: Specify missing requirements
4. **Test Edge Cases**: Check for robustness
5. **Polish**: Refine for clarity and precision

## **Example Evolution**
```
v1: "Create a sorting function"
v2: "Create a Python sorting function for a list of numbers"
v3: "Create a Python function that sorts a list of integers in 
    ascending order with error handling"
v4: "Create a well-documented Python function with type hints 
    that sorts a list of integers in ascending order, includes 
    error handling for invalid inputs, and returns a new list"
```

Notes:
Prompt refinement is an iterative process. Each version builds on the previous one, adding specificity and addressing gaps in the AI's understanding.

##--##

<!-- .slide -->
# **Common Prompt Engineering Mistakes**

## **❌ Avoid These Pitfalls**
- **Vague Instructions**: "Make it better" or "Fix this"
- **Assuming Knowledge**: Not providing necessary context
- **Too Many Tasks**: Cramming multiple requests into one prompt
- **No Examples**: Failing to show desired output format
- **Ignoring Constraints**: Not specifying limitations or requirements

## **✅ Better Approaches**
- **Specific Requests**: "Optimize for memory usage" or "Add error logging"
- **Complete Context**: Include relevant background information
- **Single Focus**: One clear task per prompt
- **Example-Driven**: Show expected input/output formats
- **Clear Boundaries**: Define what you do and don't want

Notes:
Learning what NOT to do is just as important as learning best practices. These common mistakes can lead to frustrating experiences and poor results.

##--##

<!-- .slide -->
# **Advanced Prompt Techniques**

## **Constraint-Based Prompting**
```
"Write a Python function that:
- Takes a list of strings as input
- Returns only strings longer than 5 characters
- Uses list comprehension (not loops)
- Includes type hints and docstring
- Has no external dependencies"
```

## **Template Prompting**
```
"Follow this template for all API endpoints:

```python
@app.route('/api/<resource>')
def get_<resource>():
    \"\"\"[Description]\"\"\"
    try:
        # [Implementation]
        return jsonify({"data": result})
    except Exception as e:
        return jsonify({"error": str(e)}), 500
```
```

Notes:
Advanced techniques help you maintain consistency and get more predictable results. Constraint-based prompting ensures specific requirements are met, while templates provide consistent structure.

##--##

<!-- .slide -->
# **Debugging Prompts**

## **When AI Responses Are Off-Target**
1. **Check Clarity**: Is your request unambiguous?
2. **Add Context**: Provide more background information
3. **Use Examples**: Show the AI what you want
4. **Break Down**: Split complex requests into smaller parts
5. **Specify Format**: Be explicit about output structure

## **Prompt Debugging Checklist**
- [ ] Clear objective stated?
- [ ] Sufficient context provided?
- [ ] Examples included where helpful?
- [ ] Constraints and requirements specified?
- [ ] Output format defined?

Notes:
When AI responses don't meet your expectations, systematic debugging of your prompt often reveals the issue. Most problems stem from unclear or incomplete instructions.

##--##

<!-- .slide -->
# **Domain-Specific Prompting**

## **Code Review Prompts**
```
"Review this JavaScript function for:
- Security vulnerabilities
- Performance optimizations
- Code style improvements
- Error handling gaps
Provide specific recommendations with code examples."
```

## **Documentation Prompts**
```
"Generate comprehensive API documentation for this endpoint:
- Include request/response examples
- List all parameters and their types
- Document error codes and responses
- Add usage examples in curl and JavaScript"
```

## **Testing Prompts**
```
"Create unit tests for this function using Jest:
- Test happy path scenarios
- Test edge cases and error conditions
- Include setup and teardown as needed
- Follow AAA pattern (Arrange, Act, Assert)"
```

Notes:
Different development tasks require different prompting approaches. Learning domain-specific patterns helps you get better results for common development activities.

##--##

<!-- .slide -->
# **Prompt Libraries and Reusability**

## **Building Your Prompt Library**
- **Save Effective Prompts**: Document what works well
- **Categorize by Task**: Code review, debugging, documentation
- **Include Variations**: Different styles for different needs
- **Update Regularly**: Refine based on experience

## **Example Library Structure**
```
/prompts/
├── code-generation/
│   ├── api-endpoint.md
│   └── react-component.md
├── code-review/
│   ├── security-focused.md
│   └── performance-focused.md
└── documentation/
    ├── api-docs.md
    └── readme.md
```

Notes:
Building a personal prompt library saves time and ensures consistency. Treat your prompts as valuable assets that improve your AI interactions over time.

##--##

<!-- .slide -->
# **Measuring Prompt Effectiveness**

## **Quality Metrics**
- **Accuracy**: Does it solve the problem correctly?
- **Completeness**: Addresses all requirements?
- **Efficiency**: Minimal back-and-forth needed?
- **Consistency**: Reliable results across attempts?

## **Improvement Indicators**
- Fewer iterations needed to get desired output
- Higher quality of initial AI responses
- More consistent results across similar prompts
- Reduced time from prompt to usable solution

## **Tracking Your Progress**
- Keep a prompt journal with before/after examples
- Note which techniques work best for your workflow
- Document domain-specific patterns you discover
- Share successful prompts with your team

Notes:
These common pitfalls represent the most frequent mistakes in prompt engineering. By understanding and avoiding them, you'll write more effective prompts and get better results from AI systems. Remember: good prompts are specific, clear, and provide sufficient context for the AI to understand your intent.
##--##

<!-- .slide: class="exercice" --> 
# Exercice 1: Prompt Engineering Basics
## Lab 11

<br>

### 👉🏾 Follow **instructions** in

### `labs/lab-11-prompt-basics/README.md`

Notes:
- Lab 11 (Module 1, Lab 1) contains 5 progressive exercises (1-5) for comprehensive prompt engineering practice.
- Follow the instructions in the lab README.md for detailed steps.

##--##

<!-- .slide: class="exercice" --> 
# Exercice 1: Prompt Engineering Basics
## Lab 11

<br>

### 💡 Read **solution** at

### `labs/lab-11-prompt-basics-solution/README.md`

Notes:
- Contains complete solutions and explanations for all 5 exercises.
- Read the lab README.md for example of solutions.
