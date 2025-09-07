# Lab 03: AI-Assisted Coding Techniques

## Objectives
- Master different AI prompting strategies for code generation
- Practice iterative development with AI assistance
- Learn to effectively combine AI suggestions with manual coding
- Understand when and how to use AI for different coding tasks

## Prerequisites
- Completed Lab 02 (Development Environment Setup)
- Working AI coding assistant (GitHub Copilot, TabNine, or similar)
- Basic knowledge of JavaScript/TypeScript

## Instructions

### Part 1: Basic Code Generation (15 minutes)

#### Task 1.1: Function Generation with Prompts
Create a new file `src/math-utils.js` and use AI to generate functions with these comment prompts:

```javascript
// Function to calculate the factorial of a number recursively

// Function to check if a number is prime

// Function to find the greatest common divisor of two numbers using Euclidean algorithm

// Function to convert degrees to radians

// Function to calculate compound interest given principal, rate, time, and compounding frequency
```

**Expected Output**: Each comment should be followed by a complete, working function implementation.

#### Task 1.2: Class Generation
Create `src/user-manager.js` and use AI to generate:

```javascript
// Class to manage user accounts with methods for:
// - Creating new user
// - Validating user credentials
// - Updating user profile
// - Deactivating user account
// Include proper error handling and input validation
```

### Part 2: Iterative Development (20 minutes)

#### Task 2.1: Building a Calculator API
Create `src/calculator-api.js` and develop step by step:

1. Start with this prompt:
```javascript
// Express.js API endpoint for basic calculator operations
// Should handle addition, subtraction, multiplication, division
```

2. Then iteratively improve with these prompts:
```javascript
// Add input validation to prevent invalid operations

// Add error handling for division by zero

// Add support for more advanced operations (square root, power, etc.)

// Add request logging middleware
```

#### Task 2.2: Data Processing Pipeline
Create `src/data-processor.js`:

1. Begin with:
```javascript
// Function to process an array of user objects and return analytics
// Input: Array of users with properties: id, name, age, email, joinDate
// Output: Object with user count, average age, most common domain
```

2. Enhance with:
```javascript
// Add data validation and cleaning functions

// Add more sophisticated analytics (age groups, growth trends)

// Add export functionality to save results to JSON file
```

### Part 3: Code Optimization and Refactoring (15 minutes)

#### Task 3.1: Performance Optimization
Take this inefficient code and ask AI to optimize it:

```javascript
// Optimize this function for better performance
function findDuplicates(arr) {
    let duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
                duplicates.push(arr[i]);
            }
        }
    }
    return duplicates;
}
```

#### Task 3.2: Code Modernization
Use AI to modernize this legacy code:

```javascript
// Convert this ES5 code to modern ES6+ with better practices
var UserService = function() {
    this.users = [];
};

UserService.prototype.addUser = function(user) {
    var self = this;
    setTimeout(function() {
        self.users.push(user);
        console.log('User added: ' + user.name);
    }, 100);
};

UserService.prototype.getUsers = function() {
    return this.users;
};
```

### Part 4: Testing and Documentation (10 minutes)

#### Task 4.1: Test Generation
For your math-utils.js functions, ask AI to generate:

```javascript
// Generate comprehensive Jest test suite for all math utility functions
// Include edge cases, error conditions, and boundary tests
```

#### Task 4.2: Documentation Generation
Ask AI to generate JSDoc documentation for your calculator API:

```javascript
// Generate complete JSDoc documentation for all functions and endpoints
// Include parameter types, return values, examples, and error conditions
```

## Hints and Tips

### Effective Prompting Strategies
1. **Be specific**: Include expected input/output formats
2. **Mention edge cases**: Ask for error handling and validation
3. **Specify standards**: Mention coding style preferences (ES6+, async/await, etc.)
4. **Iterative refinement**: Build complexity gradually

### AI Assistance Best Practices
1. **Review generated code**: Always understand what AI produces
2. **Test thoroughly**: AI code may have subtle bugs
3. **Combine approaches**: Mix AI suggestions with your expertise
4. **Learn patterns**: Observe AI solutions to improve your skills

## Evaluation Criteria
- **Functionality**: All generated code works correctly
- **Code quality**: Clean, readable, and well-structured code
- **AI utilization**: Effective use of AI for different coding tasks
- **Testing**: Comprehensive test coverage
- **Documentation**: Clear and complete documentation

## Deliverables
- `src/math-utils.js` with utility functions
- `src/user-manager.js` with user management class
- `src/calculator-api.js` with Express API
- `src/data-processor.js` with data processing functions
- Test files for all modules
- JSDoc documentation
- Brief reflection on AI assistance effectiveness

## Time Allocation
- Part 1: 15 minutes
- Part 2: 20 minutes  
- Part 3: 15 minutes
- Part 4: 10 minutes
- **Total: 60 minutes**

## Next Steps
After completing this lab, you'll be ready to explore more advanced AI coding patterns and team collaboration workflows in subsequent labs.
