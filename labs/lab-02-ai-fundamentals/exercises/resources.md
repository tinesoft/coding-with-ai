# Exercise Resources for Lab 2: AI Fundamentals in Practice

## Quick Reference Materials

### Context Window Testing Guide

#### Estimating Token Count
- **Rule of Thumb**: ~4 characters = 1 token for English text
- **Code**: Slightly higher token density due to syntax
- **Whitespace**: Still counts toward token limits

#### Common Context Window Sizes
| AI Tool | Context Window | Approximate Characters |
|---------|---------------|----------------------|
| GPT-3.5 | 4K tokens | ~16,000 characters |
| GPT-4 | 8K-32K tokens | ~32K-128K characters |
| Claude | 100K tokens | ~400,000 characters |
| Gemini | 32K tokens | ~128,000 characters |

#### Chunking Strategies
```markdown
Strategy 1: Sequential Chunks
- Part 1: Introduction and setup
- Part 2: Core implementation
- Part 3: Testing and conclusion

Strategy 2: Logical Sections
- Chunk by function/class
- Chunk by feature
- Chunk by concern

Strategy 3: Reference Summaries
- Provide brief context summary with each chunk
- Include key relationships between chunks
- End with synthesis request
```

### Sample Large Documents for Testing

#### Option 1: Technical Documentation Sample
```markdown
# Microservices Architecture Guide

## Table of Contents
1. Overview and Principles
2. Service Design Patterns
3. Communication Strategies
4. Data Management
5. Security Considerations
6. Monitoring and Observability
7. Deployment Strategies
8. Testing Approaches

## 1. Overview and Principles

Microservices architecture is an approach to developing a single application as a suite of small services, each running in its own process and communicating with lightweight mechanisms...

[Continue with 2000+ words of detailed technical content]

## 2. Service Design Patterns

### Single Responsibility Principle
Each microservice should have a single reason to change. This means:
- One business capability per service
- Clear service boundaries
- Minimal dependencies between services

### Domain-Driven Design
Services should be organized around business domains:
- Bounded contexts define service boundaries
- Domain experts guide service design
- Ubiquitous language within each service

[Continue with detailed explanations...]

## 3. Communication Strategies

### Synchronous Communication
- REST APIs for simple request/response
- GraphQL for flexible data fetching
- gRPC for high-performance scenarios

### Asynchronous Communication
- Event-driven architecture
- Message queues (RabbitMQ, Apache Kafka)
- Publish-subscribe patterns

[Continue with comprehensive coverage...]
```

#### Option 2: Large Codebase Sample
```javascript
// E-commerce Platform - Complete User Service Implementation

// User Model and Database Schema
const userSchema = {
  id: 'UUID PRIMARY KEY',
  email: 'VARCHAR(255) UNIQUE NOT NULL',
  password_hash: 'VARCHAR(255) NOT NULL',
  first_name: 'VARCHAR(100)',
  last_name: 'VARCHAR(100)',
  phone: 'VARCHAR(20)',
  date_of_birth: 'DATE',
  address: {
    street: 'VARCHAR(255)',
    city: 'VARCHAR(100)',
    state: 'VARCHAR(50)',
    zip_code: 'VARCHAR(10)',
    country: 'VARCHAR(50)'
  },
  preferences: {
    newsletter: 'BOOLEAN DEFAULT FALSE',
    notifications: 'BOOLEAN DEFAULT TRUE',
    theme: 'VARCHAR(20) DEFAULT light'
  },
  account_status: 'ENUM(active, suspended, deleted)',
  created_at: 'TIMESTAMP',
  updated_at: 'TIMESTAMP',
  last_login: 'TIMESTAMP'
};

// Authentication Service
class AuthenticationService {
  constructor(userRepository, jwtService, hashService) {
    this.userRepository = userRepository;
    this.jwtService = jwtService;
    this.hashService = hashService;
  }

  async register(userData) {
    try {
      // Validate input data
      const validationResult = this.validateRegistrationData(userData);
      if (!validationResult.isValid) {
        throw new ValidationError(validationResult.errors);
      }

      // Check if user already exists
      const existingUser = await this.userRepository.findByEmail(userData.email);
      if (existingUser) {
        throw new ConflictError('User with this email already exists');
      }

      // Hash password
      const passwordHash = await this.hashService.hash(userData.password);

      // Create user
      const newUser = await this.userRepository.create({
        ...userData,
        password_hash: passwordHash,
        account_status: 'active'
      });

      // Generate tokens
      const accessToken = this.jwtService.generateAccessToken(newUser);
      const refreshToken = this.jwtService.generateRefreshToken(newUser);

      // Store refresh token
      await this.userRepository.updateRefreshToken(newUser.id, refreshToken);

      return {
        user: this.sanitizeUserData(newUser),
        tokens: { accessToken, refreshToken }
      };
    } catch (error) {
      this.logError('Registration failed', error, userData.email);
      throw error;
    }
  }

  async login(email, password) {
    try {
      // Find user
      const user = await this.userRepository.findByEmail(email);
      if (!user) {
        throw new AuthenticationError('Invalid credentials');
      }

      // Check account status
      if (user.account_status !== 'active') {
        throw new AuthenticationError('Account is not active');
      }

      // Verify password
      const isPasswordValid = await this.hashService.verify(password, user.password_hash);
      if (!isPasswordValid) {
        await this.recordFailedLogin(email);
        throw new AuthenticationError('Invalid credentials');
      }

      // Update last login
      await this.userRepository.updateLastLogin(user.id);

      // Generate tokens
      const accessToken = this.jwtService.generateAccessToken(user);
      const refreshToken = this.jwtService.generateRefreshToken(user);

      // Store refresh token
      await this.userRepository.updateRefreshToken(user.id, refreshToken);

      return {
        user: this.sanitizeUserData(user),
        tokens: { accessToken, refreshToken }
      };
    } catch (error) {
      this.logError('Login failed', error, email);
      throw error;
    }
  }

  // [Continue with 20+ more methods and classes...]
}

// [Include additional services, middleware, routes, tests, etc.]
```

### Semantic Understanding Test Cases

#### Code Similarity Examples
```javascript
// Set 1: Array Processing Functions
function sumArray(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

const calculateTotal = (values) => values.reduce((sum, val) => sum + val, 0);

function addUpNumbers(arr) {
  return arr.reduce(function(accumulator, current) {
    return accumulator + current;
  }, 0);
}

// Set 2: String Manipulation Functions
function reverseString(str) {
  return str.split('').reverse().join('');
}

const flipText = (text) => [...text].reverse().join('');

function stringReverse(input) {
  let result = '';
  for (let i = input.length - 1; i >= 0; i--) {
    result += input[i];
  }
  return result;
}

// Set 3: Data Validation Functions
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

const checkEmailFormat = (address) => {
  return /\S+@\S+\.\S+/.test(address);
}

function validateEmailAddress(userInput) {
  if (!userInput) return false;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(userInput.trim());
}
```

#### Variable Naming Variations
```javascript
// Data Access Patterns
function getUserById(id) { return database.users.findOne({ id }); }
function findPersonByIdentifier(identifier) { return db.people.getOne({ id: identifier }); }
function retrieveUserRecord(userId) { return userRepository.get(userId); }

// Data Transformation Patterns
function formatUserName(user) { return `${user.first} ${user.last}`; }
function getPersonDisplayName(person) { return `${person.firstName} ${person.lastName}`; }
function createFullName(individual) { return individual.givenName + ' ' + individual.familyName; }

// Calculation Patterns
function calculateTotal(items) { return items.reduce((sum, item) => sum + item.price, 0); }
function computeOrderAmount(products) { return products.map(p => p.cost).reduce((a, b) => a + b); }
function getTotalPrice(cartItems) { return cartItems.reduce((total, current) => total + current.amount, 0); }
```

### RAG Simulation Templates

#### Project Knowledge Base Template
```markdown
# [Project Name] Knowledge Base

## Architecture Overview
- System architecture description
- Technology stack
- Service relationships
- Data flow patterns

## Development Standards
- Coding conventions
- File organization
- Naming patterns
- Documentation requirements

## API Conventions
- URL patterns
- Request/response formats
- Error handling
- Authentication patterns

## Database Schema
- Table structures
- Relationships
- Constraints
- Migration patterns

## Security Guidelines
- Authentication flow
- Authorization patterns
- Data protection
- Security headers

## Testing Strategies
- Unit testing patterns
- Integration testing approach
- Test data management
- CI/CD pipeline

## Deployment Procedures
- Environment configurations
- Release process
- Monitoring setup
- Rollback procedures
```

#### Multi-Document Simulation
```markdown
Document A: Error Handling Standards
- Use try-catch for async operations
- Return standardized error objects: { success: false, error: { code, message, details } }
- Log errors with correlation IDs for tracing
- Implement circuit breaker pattern for external services
- Use custom error classes for different error types

Document B: API Response Formats
- Success: { success: true, data: {...}, message: "...", timestamp: "..." }
- Error: { success: false, error: {...}, timestamp: "..." }
- Pagination: Include meta: { page, limit, total, hasNext, hasPrev }
- Use HTTP status codes consistently
- Include request ID in all responses

Document C: Database Connection Patterns
- Use connection pooling with max 20 connections
- Implement query timeout of 30 seconds
- Add database health checks on /health endpoint
- Use transactions for multi-table operations
- Implement retry logic with exponential backoff

Document D: Authentication Flow
- JWT tokens with 24-hour expiry for access tokens
- Refresh tokens with 30-day expiry
- Implement token rotation on refresh
- Rate limiting: 5 login attempts per minute per IP
- Store refresh tokens securely in httpOnly cookies
```

### Model Testing Scenarios

#### Reasoning Challenge Problems
```javascript
// Problem 1: Complex Logic Bug
function calculateShippingCost(weight, distance, isPriority, customerType) {
  let baseCost = weight * 0.5 + distance * 0.1;
  
  if (isPriority) {
    baseCost *= 1.5;
  }
  
  if (customerType === 'premium') {
    baseCost *= 0.8; // 20% discount
  } else if (customerType === 'gold') {
    baseCost *= 0.9; // 10% discount
  }
  
  // Minimum shipping cost
  if (baseCost < 5) {
    baseCost = 5;
  }
  
  // Weekend surcharge
  const today = new Date();
  if (today.getDay() === 0 || today.getDay() === 6) {
    baseCost += 2;
  }
  
  return Math.round(baseCost * 100) / 100;
}

// Test case with unexpected result:
// calculateShippingCost(1, 10, true, 'premium')
// Expected logic: (1*0.5 + 10*0.1) * 1.5 * 0.8 = 1.5 * 1.5 * 0.8 = 1.8, min 5, +2 weekend = 7
// But what if there's a bug in the order of operations?
```

#### Creative Problem-Solving Scenarios
```
Scenario 1: Real-time Code Collaboration
Design a system for real-time collaborative code editing with these constraints:
- Multiple users editing simultaneously
- Maintain syntax validity during edits
- Handle conflicting changes gracefully
- Support undo/redo across all users
- Work with large files (10k+ lines)
- Offline capability with sync on reconnect

Scenario 2: Intelligent Code Refactoring
Create an AI-assisted refactoring tool that:
- Identifies code smells automatically
- Suggests refactoring opportunities
- Preserves behavior during transformations
- Handles complex dependency chains
- Provides confidence scores for suggestions
- Integrates with existing development workflows

Scenario 3: Adaptive Testing Framework
Design a testing system that:
- Generates test cases based on code analysis
- Adapts test priorities based on change risk
- Automatically maintains tests as code evolves
- Provides intelligent test failure analysis
- Suggests test improvements
- Balances coverage with execution time
```

## Documentation Templates

### Experiment Tracking Template
```markdown
## Experiment: [Title]
**Date**: [Date]
**AI Tool**: [Tool Used]
**Objective**: [What you're testing]

### Hypothesis
[What you expect to happen]

### Method
1. [Step 1]
2. [Step 2]
3. [Step 3]

### Results
**Prompt Used**:
```
[Your exact prompt]
```

**AI Response**: [Quality 1-10]
[Key observations]

**Unexpected Findings**:
- [Observation 1]
- [Observation 2]

### Analysis
**What Worked**:
- [Success factor 1]
- [Success factor 2]

**What Didn't Work**:
- [Issue 1]
- [Issue 2]

**Insights for Future Use**:
- [Lesson 1]
- [Lesson 2]
```

### Tool Comparison Matrix
```markdown
## AI Tool Comparison: [Task Type]

| Criterion | Tool A | Tool B | Tool C |
|-----------|--------|--------|--------|
| Response Quality | [1-10] | [1-10] | [1-10] |
| Response Speed | [Fast/Medium/Slow] | [Fast/Medium/Slow] | [Fast/Medium/Slow] |
| Context Understanding | [1-10] | [1-10] | [1-10] |
| Code Generation | [1-10] | [1-10] | [1-10] |
| Error Handling | [1-10] | [1-10] | [1-10] |
| Domain Knowledge | [1-10] | [1-10] | [1-10] |

### Best Use Cases
**Tool A**: [When to use]
**Tool B**: [When to use]
**Tool C**: [When to use]

### Limitations Discovered
**Tool A**: [Specific limitations]
**Tool B**: [Specific limitations]
**Tool C**: [Specific limitations]
```

### Workflow Design Template
```markdown
# AI-Enhanced Workflow: [Workflow Name]

## Objective
[What this workflow achieves]

## Prerequisites
- [Requirement 1]
- [Requirement 2]

## Workflow Steps

### Step 1: [Step Name]
**Human Role**: [What human does]
**AI Role**: [What AI does]
**Tools**: [Tools used]
**Input**: [What's needed]
**Output**: [What's produced]
**Validation**: [How to verify quality]

### Step 2: [Step Name]
[Same structure]

## Success Metrics
- [ ] [Measurable outcome 1]
- [ ] [Measurable outcome 2]

## Risk Mitigation
**Risk**: [Potential problem]
**Mitigation**: [How to handle it]

## Iteration Points
- [Where to refine based on feedback]
- [How to measure improvement]

## Tools and Resources
- [Required tools]
- [Reference materials]
- [Templates needed]
```

## Success Indicators

### You're mastering AI fundamentals when:
- [ ] You can predict which AI tool will work best for specific tasks
- [ ] You understand context window limitations and work around them effectively
- [ ] You can design prompts that leverage semantic understanding
- [ ] You successfully simulate RAG workflows for your projects
- [ ] You identify AI capabilities and limitations accurately
- [ ] You create effective AI-enhanced workflows for real development tasks

### Ready for advanced topics when:
- [ ] You combine multiple AI tools strategically
- [ ] You debug AI responses systematically
- [ ] You adapt AI workflows to your team's needs
- [ ] You train others on effective AI usage
- [ ] You contribute to AI tool selection and adoption decisions