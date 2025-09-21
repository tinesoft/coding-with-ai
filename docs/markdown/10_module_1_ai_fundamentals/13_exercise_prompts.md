<!-- .slide: class="exercice" -->
# Hands-on Prompt Exercises
## Lab 01

Apply your prompt engineering skills through practical exercises.

Notes:
Time to put theory into practice! These exercises will help you internalize prompt engineering techniques and build confidence in your AI communication skills.

##--##

<!-- .slide: class="exercice" -->
# Exercice 1: Basic Prompt Writing
## Lab 01

**Objective:** Transform vague requests into clear, effective prompts, using the **CLEAR** framework:

### **Before:**
```
"Create a function to validate email"
```

### **Your Turn:**
Write an improved version including:
- Context and role
- Specific language/framework  
- Error handling requirements
- Expected output format

**Time:** 5 minutes

Notes:
This exercise focuses on the fundamentals. Remember: Context, Length, Examples, Audience, Role. Think about what information the AI needs to give you exactly what you want.

##--##

<!-- .slide: class="exercice" -->
# Exercice 1: Solution Discussion  
## Lab 01

### **Example**
```
"As a senior JavaScript developer, create a robust email validation 
function for a React application. The function should:

- Accept a string parameter
- Return true/false for valid/invalid emails
- Handle edge cases (null, undefined, empty strings)
- Use modern JavaScript (ES6+) syntax
- Include JSDoc documentation
- Follow RFC 5322 email standards

Provide the function with 2-3 test examples showing usage."
```

##--##

<!-- .slide: class="exercice" -->
# Exercice 1: Solution Discussion  
## Lab 01

### **Improvements**
- ✅ Clear role and context
- ✅ Specific requirements
- ✅ Technology constraints
- ✅ Output expectations

Notes:
Notice how the improved prompt eliminates ambiguity and gives the AI everything it needs to generate exactly what you want. This level of specificity leads to much better results.

##--##

<!-- .slide: class="exercice" -->
# Exercice 2: Iterative Refinement
## Lab 01

### **Scenario**
You need a React component for displaying user profiles.

### **Round 1:** Basic prompt
```
"Create a React component for user profiles"
```

### **Round 2:** Add constraints
### **Round 3:** Specify requirements  
### **Round 4:** Perfect details

**Work in Pairs**
- Person A: Write prompts
- Person B: Evaluate and suggest improvements
- Switch roles after 10 minutes

**Time:** 15 minutes total

Notes:
This exercise simulates real-world prompt engineering, where you rarely get perfect results on the first try. The key is systematic improvement based on what you observe.

##--##

<!-- .slide: class="exercice" -->
# Exercice 2: Refinement Example
## Lab 01

### **Progression**

### **v1:** "Create a React component for user profiles"
### **v2:** "Create a React TypeScript component that displays user profile information including name, email, and avatar"
### **v3:** "Create a React TypeScript component called UserProfile that displays user information (name, email, avatar) with proper styling using CSS modules and error handling for missing data"
### **v4:** "Create a React TypeScript component called UserProfile that displays user information (name, email, avatar) using interface props, CSS modules for styling, loading states, error boundaries for missing data, and accessibility features. Include prop validation."

### **Pattern**
Each iteration adds **specificity** and addresses **gaps** from the previous version.

Notes:
This progression shows how each iteration builds on the previous one, adding specificity and addressing gaps. This is the natural flow of effective prompt engineering.

##--##

<!-- .slide: class="exercice" -->
# Exercice 3: Pattern Application
## Lab 01

**Objective:** Apply advanced prompt patterns

### **Scenarios** (Choose 2)
1. **Role-Based**: Code review prompt as a security expert
2. **Few-Shot**: API error handling examples
3. **Chain-of-Thought**: Debugging a performance issue
4. **Constraint-Based**: Database query optimization
5. **Template**: Consistent logging implementation

### **Instructions**
- Pick your scenarios
- Write prompts using the specified patterns
- Test with your neighbor
- Discuss what worked and what didn't

**Time: 10 minutes**

Notes:
This exercise helps you practice the specific patterns we discussed. Each pattern serves different purposes, and recognizing when to use which pattern is key to prompt engineering mastery.

##--##

<!-- .slide: class="exercice" -->
# Exercice 3: Pattern Examples
## Lab 01

### **Role-Based Pattern**
```
"You are a cybersecurity expert reviewing Node.js code for a financial 
application. Analyze this authentication middleware for security 
vulnerabilities, focusing on injection attacks, authentication bypass, 
and data exposure risks. Provide specific remediation steps."
```

### **Chain-of-Thought Pattern**
```
"Help me debug this slow API endpoint. Walk through your analysis:
1. First, examine the code structure and identify potential bottlenecks
2. Then, consider database query patterns and N+1 problems
3. Next, analyze caching opportunities and data serialization
4. Finally, recommend specific optimizations with expected impact"
```

Notes:
These examples show how patterns shape the AI's approach to problem-solving. Role-based prompting sets expertise context, while chain-of-thought encourages systematic analysis.

##--##

<!-- .slide: class="exercice" -->
# Exercice 4: Real-World Application
## Lab 01

**Objective:** Apply prompt engineering to actual development needs

### **Task**
Think of a real coding challenge you're currently facing or recently encountered:
- API integration
- Performance optimization  
- Testing strategy
- Documentation needs
- Architecture decision

### **Steps**
1. **Define the problem** clearly (2 min)
2. **Write an initial prompt** (3 min)
3. **Refine using techniques** we've learned (5 min)
4. **Share with the group** and get feedback (5 min)

**Time: 15 minutes**

Notes:
This exercise bridges the gap between learning and application. Using real problems from your work makes the exercise more meaningful and immediately useful.

##--##

<!-- .slide: class="exercice" -->
# Exercice 4: Peer Review
## Lab 01

### **Review Criteria**
When evaluating each other's prompts, check for:

- [ ] **Clear Context**: Background information provided?
- [ ] **Specific Requirements**: Detailed constraints and expectations?
- [ ] **Appropriate Pattern**: Right technique for the problem?
- [ ] **Output Format**: Clear about desired response structure?
- [ ] **Actionable Result**: Would this produce usable output?

### **Feedback Format**
- **What works well**: Specific strengths
- **Suggested improvements**: Concrete recommendations
- **Pattern suggestions**: Alternative approaches to consider

Notes:
Peer review helps you see prompt engineering from different perspectives and learn from others' approaches. The feedback criteria ensure constructive, actionable advice.

##--##

<!-- .slide: class="exercice" -->
# Exercice 5: Debugging Bad Prompts
## Lab 01

**Objective:** Identify and fix common prompt problems

### **Fix These Broken Prompts:**

### **Problem 1:** Too Vague
```
"Make this code better"
```

### **Problem 2:** Too Many Tasks
```
"Create a React app with authentication, database integration, 
user management, email notifications, file uploads, and deployment 
scripts using the latest best practices and security measures"
```

### **Problem 3:** Missing Context
```
"Fix the performance issue in my function"
```

**Work individually, then discuss solutions**
**Time: 10 minutes**

Notes:
Learning to spot and fix bad prompts is just as important as writing good ones. These examples represent common mistakes that lead to frustrating AI interactions.

##--##

<!-- .slide: class="exercice" -->
# Exercice 5: Debugging Solutions
## Lab 01

### **Fixed Prompts:**

### **Problem 1 → Solution**
```
"Review this JavaScript function for code quality improvements:
- Optimize for readability and maintainability
- Suggest modern ES6+ syntax where applicable
- Identify potential performance optimizations
- Add error handling where missing"
```

### **Problem 2 → Solution**
```
"Create a basic React authentication component with:
- Login/logout functionality
- JWT token management
- Protected route wrapper
- TypeScript interfaces
[Note: Separate prompts for other features]"
```

Notes:
The key to fixing bad prompts is adding specificity while maintaining focus. Break complex requests into smaller, manageable pieces.

##--##

<!-- .slide: class="exercice" -->
# **Reflection and Key Takeaways**

**What We've Practiced**
- ✅ **CLEAR Framework**: Context, Length, Examples, Audience, Role
- ✅ **Iterative Refinement**: Systematic improvement process
- ✅ **Pattern Application**: Role-based, few-shot, chain-of-thought
- ✅ **Real-World Problem Solving**: Applying skills to actual challenges
- ✅ **Debugging Techniques**: Identifying and fixing common issues

**Prompt Engineering Toolkit**
- **Start Simple**: Basic prompt to test understanding
- **Add Specificity**: Constraints, requirements, context
- **Use Patterns**: Role-based, examples, reasoning
- **Iterate**: Refine based on output quality
- **Document**: Save what works for future use

Notes:
These exercises have given you hands-on experience with the core techniques of prompt engineering. The key now is to apply these skills consistently in your daily development work.

##--##

<!-- .slide: class="transition" -->
# Skills Applied Successfully!
**Now Let's Explore the AI Development Toolkit**

Notes:
Excellent work on these exercises! You've now experienced firsthand how effective prompt engineering can dramatically improve your AI interactions. Next, we'll explore the broader ecosystem of AI development tools.