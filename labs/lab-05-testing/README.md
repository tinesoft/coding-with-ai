# Lab 05: AI Testing & Quality Assurance

## Objectives
- Implement AI-powered testing strategies
- Set up automated quality gates with AI tools
- Generate comprehensive test suites using AI
- Monitor and improve code quality with AI assistance

## Prerequisites
- Completed Labs 01-04
- Basic understanding of testing frameworks (Jest, Mocha, etc.)
- Knowledge of quality assurance principles

## Instructions

### Part 1: AI-Generated Test Suites (20 minutes)

#### Task 1.1: Unit Test Generation
Use AI to generate comprehensive unit tests for this user service:

```javascript
// src/user-service.js
class UserService {
    constructor(database) {
        this.db = database;
        this.cache = new Map();
    }

    async createUser(userData) {
        const { email, password, name } = userData;
        
        if (!email || !password || !name) {
            throw new Error('All fields are required');
        }

        if (!this.isValidEmail(email)) {
            throw new Error('Invalid email format');
        }

        if (password.length < 8) {
            throw new Error('Password must be at least 8 characters');
        }

        const existingUser = await this.db.findByEmail(email);
        if (existingUser) {
            throw new Error('User already exists');
        }

        const hashedPassword = await this.hashPassword(password);
        const user = {
            id: Date.now(),
            email: email.toLowerCase(),
            name: name.trim(),
            password: hashedPassword,
            createdAt: new Date(),
            isActive: true
        };

        await this.db.save(user);
        this.cache.set(user.id, user);
        
        return { id: user.id, email: user.email, name: user.name };
    }

    async getUserById(id) {
        if (this.cache.has(id)) {
            return this.cache.get(id);
        }

        const user = await this.db.findById(id);
        if (user) {
            this.cache.set(id, user);
        }
        
        return user;
    }

    async updateUser(id, updates) {
        const user = await this.getUserById(id);
        if (!user) {
            throw new Error('User not found');
        }

        const allowedFields = ['name', 'email'];
        const filteredUpdates = {};
        
        for (const field of allowedFields) {
            if (updates[field] !== undefined) {
                filteredUpdates[field] = updates[field];
            }
        }

        if (filteredUpdates.email && !this.isValidEmail(filteredUpdates.email)) {
            throw new Error('Invalid email format');
        }

        const updatedUser = { ...user, ...filteredUpdates, updatedAt: new Date() };
        await this.db.update(id, updatedUser);
        this.cache.set(id, updatedUser);
        
        return { id: updatedUser.id, email: updatedUser.email, name: updatedUser.name };
    }

    async deleteUser(id) {
        const user = await this.getUserById(id);
        if (!user) {
            throw new Error('User not found');
        }

        await this.db.delete(id);
        this.cache.delete(id);
        return true;
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    async hashPassword(password) {
        // Simulate password hashing
        return `hashed_${password}`;
    }
}

module.exports = UserService;
```

**AI Testing Tasks:**
1. "Generate Jest unit tests for the UserService class"
2. "Create tests for edge cases and error conditions"
3. "Add mock implementations for the database dependency"
4. "Generate integration tests for the complete user workflow"

#### Task 1.2: API Test Generation
Generate tests for this Express API using AI:

```javascript
// src/product-api.js
const express = require('express');
const router = express.Router();

// Mock database
let products = [
    { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics', stock: 10 },
    { id: 2, name: 'Book', price: 19.99, category: 'Education', stock: 50 }
];

router.get('/products', (req, res) => {
    const { category, minPrice, maxPrice } = req.query;
    let filteredProducts = [...products];

    if (category) {
        filteredProducts = filteredProducts.filter(p => 
            p.category.toLowerCase() === category.toLowerCase()
        );
    }

    if (minPrice) {
        filteredProducts = filteredProducts.filter(p => p.price >= parseFloat(minPrice));
    }

    if (maxPrice) {
        filteredProducts = filteredProducts.filter(p => p.price <= parseFloat(maxPrice));
    }

    res.json(filteredProducts);
});

router.post('/products', (req, res) => {
    const { name, price, category, stock } = req.body;

    if (!name || !price || !category || stock === undefined) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    if (price <= 0) {
        return res.status(400).json({ error: 'Price must be positive' });
    }

    if (stock < 0) {
        return res.status(400).json({ error: 'Stock cannot be negative' });
    }

    const product = {
        id: Math.max(...products.map(p => p.id)) + 1,
        name,
        price: parseFloat(price),
        category,
        stock: parseInt(stock)
    };

    products.push(product);
    res.status(201).json(product);
});

router.put('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === id);

    if (productIndex === -1) {
        return res.status(404).json({ error: 'Product not found' });
    }

    const { name, price, category, stock } = req.body;
    const updates = {};

    if (name !== undefined) updates.name = name;
    if (price !== undefined) {
        if (price <= 0) {
            return res.status(400).json({ error: 'Price must be positive' });
        }
        updates.price = parseFloat(price);
    }
    if (category !== undefined) updates.category = category;
    if (stock !== undefined) {
        if (stock < 0) {
            return res.status(400).json({ error: 'Stock cannot be negative' });
        }
        updates.stock = parseInt(stock);
    }

    products[productIndex] = { ...products[productIndex], ...updates };
    res.json(products[productIndex]);
});

router.delete('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === id);

    if (productIndex === -1) {
        return res.status(404).json({ error: 'Product not found' });
    }

    products.splice(productIndex, 1);
    res.status(204).send();
});

module.exports = router;
```

**API Testing Tasks:**
1. "Generate supertest API tests for all endpoints"
2. "Create tests for query parameter filtering"
3. "Add validation tests for request body parameters"
4. "Generate performance tests for API endpoints"

### Part 2: Quality Gates and Automation (15 minutes)

#### Task 2.1: ESLint Configuration with AI
Create comprehensive ESLint rules using AI assistance:

**AI Task:** "Generate ESLint configuration for Node.js project with strict quality rules"

#### Task 2.2: Pre-commit Hooks Setup
Set up automated quality checks using AI:

**AI Tasks:**
1. "Create husky pre-commit hooks for code quality"
2. "Set up lint-staged configuration for automated formatting"
3. "Generate GitHub Actions workflow for CI quality checks"

### Part 3: Test Coverage and Quality Metrics (10 minutes)

#### Task 3.1: Coverage Analysis
Use AI to analyze and improve test coverage:

**AI Tasks:**
1. "Analyze test coverage gaps and suggest additional tests"
2. "Generate tests for uncovered edge cases"
3. "Create coverage reporting configuration"

#### Task 3.2: Quality Metrics Setup
Implement quality monitoring with AI:

**AI Tasks:**
1. "Set up SonarQube configuration for code quality metrics"
2. "Create quality gate rules for CI/CD pipeline"
3. "Generate code complexity analysis reports"

## Sample AI Prompts for Testing

### For Unit Tests
```
Generate comprehensive Jest unit tests for this [function/class]. Include:
- Happy path scenarios
- Edge cases and boundary conditions
- Error handling tests
- Mock implementations for dependencies
- Tests for async operations
- Input validation tests
```

### For Integration Tests
```
Create integration tests for this API/service that:
- Test complete workflows end-to-end
- Verify database interactions
- Test authentication and authorization
- Include setup and teardown procedures
- Test error scenarios and recovery
```

### For Performance Tests
```
Generate performance tests that:
- Measure response times under load
- Test concurrent user scenarios
- Identify memory leaks
- Test database query performance
- Include stress testing scenarios
```

## Quality Tools Integration

### Recommended AI-Enhanced Tools
1. **GitHub Copilot**: For test generation and completion
2. **SonarQube**: AI-powered code quality analysis
3. **Snyk**: AI security vulnerability scanning
4. **CodeClimate**: AI maintainability analysis
5. **Jest**: With AI-generated test cases

### Tool Configuration
Use AI to configure:
- Test runners and frameworks
- Coverage thresholds and reporting
- Quality gate criteria
- Automated fix suggestions
- Performance benchmarks

## Evaluation Criteria
- **Test Coverage**: Achieve >90% code coverage
- **Test Quality**: Comprehensive edge case coverage
- **Automation**: Working CI/CD quality pipeline
- **Tool Integration**: Effective use of quality tools
- **AI Utilization**: Demonstrate AI-assisted testing workflows

## Deliverables
- Complete test suite for UserService (unit tests)
- API test suite for product endpoints (integration tests)
- ESLint configuration with quality rules
- Pre-commit hooks setup
- GitHub Actions CI workflow
- Coverage reports and quality metrics
- Documentation of AI testing strategies

## Time Allocation
- Part 1 (Test Generation): 20 minutes
- Part 2 (Quality Gates): 15 minutes
- Part 3 (Metrics): 10 minutes
- **Total: 45 minutes**

## Bonus Challenges
1. Generate property-based tests using AI
2. Create visual regression tests for UI components
3. Implement AI-powered test data generation
4. Set up automated accessibility testing

## Next Steps
This lab prepares you for advanced AI code review and security practices in Lab 06.
