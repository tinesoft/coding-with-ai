# Lab 03 Solution: AI-Assisted Coding Techniques

## Solution Overview

This lab demonstrates various AI-assisted coding patterns and best practices. Here are the complete solutions with explanations of AI utilization strategies.

## Part 1: Basic Code Generation Solutions

### Task 1.1: Math Utilities (`src/math-utils.js`)

```javascript
/**
 * Math utility functions generated with AI assistance
 */

// Function to calculate the factorial of a number recursively
function factorial(n) {
    if (n < 0) {
        throw new Error('Factorial is not defined for negative numbers');
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to find the greatest common divisor of two numbers using Euclidean algorithm
function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Function to convert degrees to radians
function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

// Function to calculate compound interest given principal, rate, time, and compounding frequency
function compoundInterest(principal, rate, time, compoundingFrequency = 1) {
    if (principal <= 0 || rate < 0 || time < 0 || compoundingFrequency <= 0) {
        throw new Error('Invalid input parameters');
    }
    
    const amount = principal * Math.pow(1 + (rate / compoundingFrequency), compoundingFrequency * time);
    return Math.round((amount - principal) * 100) / 100;
}

module.exports = {
    factorial,
    isPrime,
    gcd,
    degreesToRadians,
    compoundInterest
};
```

### Task 1.2: User Manager (`src/user-manager.js`)

```javascript
/**
 * User management class with comprehensive error handling
 */
class UserManager {
    constructor() {
        this.users = new Map();
        this.nextId = 1;
    }

    // Creating new user
    createUser(userData) {
        const { name, email, password } = userData;
        
        // Input validation
        if (!name || typeof name !== 'string' || name.trim().length < 2) {
            throw new Error('Name must be a non-empty string with at least 2 characters');
        }
        
        if (!this.isValidEmail(email)) {
            throw new Error('Invalid email format');
        }
        
        if (!password || password.length < 8) {
            throw new Error('Password must be at least 8 characters long');
        }
        
        // Check for existing email
        for (const user of this.users.values()) {
            if (user.email === email) {
                throw new Error('User with this email already exists');
            }
        }
        
        const user = {
            id: this.nextId++,
            name: name.trim(),
            email: email.toLowerCase(),
            password: this.hashPassword(password),
            isActive: true,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        
        this.users.set(user.id, user);
        return { id: user.id, name: user.name, email: user.email };
    }

    // Validating user credentials
    validateCredentials(email, password) {
        if (!email || !password) {
            throw new Error('Email and password are required');
        }
        
        const user = this.findUserByEmail(email);
        if (!user) {
            return false;
        }
        
        if (!user.isActive) {
            throw new Error('User account is deactivated');
        }
        
        return this.verifyPassword(password, user.password);
    }

    // Updating user profile
    updateProfile(userId, updates) {
        const user = this.users.get(userId);
        if (!user) {
            throw new Error('User not found');
        }
        
        if (!user.isActive) {
            throw new Error('Cannot update deactivated user');
        }
        
        const allowedFields = ['name', 'email'];
        const updateData = {};
        
        for (const field of allowedFields) {
            if (updates[field] !== undefined) {
                if (field === 'email' && !this.isValidEmail(updates[field])) {
                    throw new Error('Invalid email format');
                }
                updateData[field] = updates[field];
            }
        }
        
        Object.assign(user, updateData, { updatedAt: new Date() });
        return { id: user.id, name: user.name, email: user.email };
    }

    // Deactivating user account
    deactivateUser(userId) {
        const user = this.users.get(userId);
        if (!user) {
            throw new Error('User not found');
        }
        
        user.isActive = false;
        user.updatedAt = new Date();
        return { success: true, message: 'User deactivated successfully' };
    }

    // Helper methods
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    hashPassword(password) {
        // In production, use bcrypt or similar
        return `hashed_${password}`;
    }

    verifyPassword(password, hashedPassword) {
        return this.hashPassword(password) === hashedPassword;
    }

    findUserByEmail(email) {
        for (const user of this.users.values()) {
            if (user.email === email.toLowerCase()) {
                return user;
            }
        }
        return null;
    }
}

module.exports = UserManager;
```

## Part 2: Iterative Development Solutions

### Task 2.1: Calculator API (`src/calculator-api.js`)

```javascript
const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`, req.body);
    next();
});

// Input validation middleware
const validateNumbers = (req, res, next) => {
    const { a, b } = req.body;
    
    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ 
            error: 'Both operands must be numbers' 
        });
    }
    
    if (!isFinite(a) || !isFinite(b)) {
        return res.status(400).json({ 
            error: 'Numbers must be finite' 
        });
    }
    
    next();
};

// Basic operations
app.post('/api/add', validateNumbers, (req, res) => {
    const { a, b } = req.body;
    res.json({ result: a + b, operation: 'addition' });
});

app.post('/api/subtract', validateNumbers, (req, res) => {
    const { a, b } = req.body;
    res.json({ result: a - b, operation: 'subtraction' });
});

app.post('/api/multiply', validateNumbers, (req, res) => {
    const { a, b } = req.body;
    res.json({ result: a * b, operation: 'multiplication' });
});

app.post('/api/divide', validateNumbers, (req, res) => {
    const { a, b } = req.body;
    
    // Division by zero handling
    if (b === 0) {
        return res.status(400).json({ 
            error: 'Division by zero is not allowed' 
        });
    }
    
    res.json({ result: a / b, operation: 'division' });
});

// Advanced operations
app.post('/api/sqrt', (req, res) => {
    const { a } = req.body;
    
    if (typeof a !== 'number' || !isFinite(a)) {
        return res.status(400).json({ 
            error: 'Input must be a finite number' 
        });
    }
    
    if (a < 0) {
        return res.status(400).json({ 
            error: 'Cannot calculate square root of negative number' 
        });
    }
    
    res.json({ result: Math.sqrt(a), operation: 'square root' });
});

app.post('/api/power', validateNumbers, (req, res) => {
    const { a, b } = req.body;
    
    const result = Math.pow(a, b);
    
    if (!isFinite(result)) {
        return res.status(400).json({ 
            error: 'Result is too large or invalid' 
        });
    }
    
    res.json({ result, operation: 'exponentiation' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({ error: 'Internal server error' });
});

module.exports = app;
```

### Task 2.2: Data Processor (`src/data-processor.js`)

```javascript
const fs = require('fs').promises;

/**
 * Comprehensive data processing pipeline with analytics
 */
class DataProcessor {
    // Main analytics function
    static processUserData(users) {
        if (!Array.isArray(users) || users.length === 0) {
            throw new Error('Input must be a non-empty array of users');
        }

        const cleanedUsers = this.validateAndCleanData(users);
        
        return {
            userCount: cleanedUsers.length,
            averageAge: this.calculateAverageAge(cleanedUsers),
            mostCommonDomain: this.getMostCommonDomain(cleanedUsers),
            ageGroups: this.analyzeAgeGroups(cleanedUsers),
            growthTrends: this.analyzeGrowthTrends(cleanedUsers)
        };
    }

    // Data validation and cleaning
    static validateAndCleanData(users) {
        return users.filter(user => {
            // Check required fields
            if (!user.id || !user.name || !user.email || !user.joinDate) {
                console.warn(`Invalid user data: ${JSON.stringify(user)}`);
                return false;
            }

            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(user.email)) {
                console.warn(`Invalid email for user ${user.id}: ${user.email}`);
                return false;
            }

            // Validate age
            if (typeof user.age !== 'number' || user.age < 0 || user.age > 150) {
                console.warn(`Invalid age for user ${user.id}: ${user.age}`);
                return false;
            }

            return true;
        }).map(user => ({
            ...user,
            name: user.name.trim(),
            email: user.email.toLowerCase().trim(),
            joinDate: new Date(user.joinDate)
        }));
    }

    // Basic analytics
    static calculateAverageAge(users) {
        const totalAge = users.reduce((sum, user) => sum + user.age, 0);
        return Math.round((totalAge / users.length) * 100) / 100;
    }

    static getMostCommonDomain(users) {
        const domainCounts = {};
        
        users.forEach(user => {
            const domain = user.email.split('@')[1];
            domainCounts[domain] = (domainCounts[domain] || 0) + 1;
        });

        return Object.entries(domainCounts)
            .sort(([,a], [,b]) => b - a)[0][0];
    }

    // Advanced analytics
    static analyzeAgeGroups(users) {
        const groups = {
            '18-25': 0,
            '26-35': 0,
            '36-45': 0,
            '46-55': 0,
            '56+': 0
        };

        users.forEach(user => {
            const age = user.age;
            if (age <= 25) groups['18-25']++;
            else if (age <= 35) groups['26-35']++;
            else if (age <= 45) groups['36-45']++;
            else if (age <= 55) groups['46-55']++;
            else groups['56+']++;
        });

        return groups;
    }

    static analyzeGrowthTrends(users) {
        const monthlyGrowth = {};
        
        users.forEach(user => {
            const month = user.joinDate.toISOString().slice(0, 7); // YYYY-MM
            monthlyGrowth[month] = (monthlyGrowth[month] || 0) + 1;
        });

        const sortedMonths = Object.entries(monthlyGrowth)
            .sort(([a], [b]) => a.localeCompare(b));

        return {
            monthlySignups: Object.fromEntries(sortedMonths),
            totalMonths: sortedMonths.length,
            averageMonthlyGrowth: sortedMonths.length > 0 ? 
                Math.round((users.length / sortedMonths.length) * 100) / 100 : 0
        };
    }

    // Export functionality
    static async exportResults(data, filename = 'analytics-results.json') {
        try {
            const jsonData = JSON.stringify(data, null, 2);
            await fs.writeFile(filename, jsonData, 'utf8');
            return { success: true, filename, size: jsonData.length };
        } catch (error) {
            throw new Error(`Failed to export results: ${error.message}`);
        }
    }
}

module.exports = DataProcessor;
```

## Part 3: Code Optimization Solutions

### Task 3.1: Optimized Duplicate Finder

```javascript
// Optimized version using Set for O(n) complexity
function findDuplicates(arr) {
    const seen = new Set();
    const duplicates = new Set();
    
    for (const item of arr) {
        if (seen.has(item)) {
            duplicates.add(item);
        } else {
            seen.add(item);
        }
    }
    
    return Array.from(duplicates);
}
```

### Task 3.2: Modernized User Service

```javascript
class UserService {
    constructor() {
        this.users = [];
    }

    async addUser(user) {
        return new Promise((resolve) => {
            setTimeout(() => {
                this.users.push(user);
                console.log(`User added: ${user.name}`);
                resolve(user);
            }, 100);
        });
    }

    getUsers() {
        return [...this.users]; // Return copy to prevent mutation
    }

    // Additional modern methods
    async addUsers(users) {
        const promises = users.map(user => this.addUser(user));
        return Promise.all(promises);
    }

    findUser(predicate) {
        return this.users.find(predicate);
    }

    filterUsers(predicate) {
        return this.users.filter(predicate);
    }
}
```

## Key Learning Points

### AI Prompting Best Practices
1. **Specificity**: Detailed prompts produce better results
2. **Context**: Provide examples and constraints
3. **Iteration**: Build complexity gradually
4. **Validation**: Always test AI-generated code

### Code Quality Improvements
1. **Error Handling**: AI helps identify edge cases
2. **Input Validation**: Comprehensive parameter checking
3. **Performance**: AI suggests algorithmic improvements
4. **Modern Patterns**: ES6+ features and best practices

### Testing Strategy
Generate comprehensive tests covering:
- Happy path scenarios
- Edge cases and boundary conditions
- Error conditions
- Performance characteristics

This solution demonstrates effective AI collaboration while maintaining code quality and best practices.
