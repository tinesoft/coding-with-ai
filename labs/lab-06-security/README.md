# Lab 06: AI Code Review & Security

## Objectives
- Implement AI-powered code review processes
- Set up automated security scanning with AI tools
- Practice secure coding with AI assistance
- Establish governance and compliance standards

## Prerequisites
- Completed Labs 01-05
- Understanding of security principles
- Basic knowledge of code review practices

## Instructions

### Part 1: AI Code Review Setup (20 minutes)

#### Task 1.1: GitHub Actions Code Review
Set up automated AI code review in your repository:

**AI Task:** "Create GitHub Actions workflow for automated code review with the following features:"
- Automated PR analysis
- Code quality scoring
- Security vulnerability detection
- Performance impact assessment

#### Task 1.2: CodeRabbit Integration
Configure AI-powered pull request reviews:

**Steps:**
1. Install CodeRabbit or similar AI review tool
2. Configure review criteria and rules
3. Test with sample pull request

#### Task 1.3: Review Vulnerable Code
Use AI to review and fix this insecure code:

```javascript
// INSECURE CODE - Use AI to identify and fix security issues
const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password123',
    database: 'users'
});

// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    // Direct SQL query - SQL injection vulnerability
    const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
    
    db.query(query, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).send('Database error');
        }
        
        if (results.length > 0) {
            // Exposing sensitive user data
            res.json({
                success: true,
                user: results[0],
                token: 'simple_token_' + results[0].id
            });
        } else {
            res.status(401).send('Invalid credentials');
        }
    });
});

// File upload endpoint
app.post('/upload', (req, res) => {
    const { filename, content } = req.body;
    
    // Path traversal vulnerability
    const fs = require('fs');
    const path = `/uploads/${filename}`;
    
    fs.writeFileSync(path, content);
    res.send('File uploaded successfully');
});

// User data endpoint
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    
    // No authentication check
    const query = `SELECT * FROM users WHERE id = ${userId}`;
    
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).send('Error');
        } else {
            res.json(results[0]);
        }
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
```

**AI Security Review Tasks:**
1. "Identify all security vulnerabilities in this Express app"
2. "Fix SQL injection vulnerabilities using parameterized queries"
3. "Implement proper authentication and authorization"
4. "Add input validation and sanitization"
5. "Secure file upload functionality"

### Part 2: Security Implementation (25 minutes)

#### Task 2.1: Secure Authentication System
Use AI to build a secure authentication system:

**AI Task:** "Create a secure authentication system with the following features:"
- Password hashing with bcrypt
- JWT token generation and validation
- Rate limiting for login attempts
- Secure session management
- Password strength validation

#### Task 2.2: Input Validation and Sanitization
Implement comprehensive input validation:

```javascript
// Starting point - add validation with AI assistance
app.post('/api/users', (req, res) => {
    const { name, email, age, bio } = req.body;
    
    // TODO: Add comprehensive validation with AI
    // - Email format validation
    // - Name sanitization (XSS prevention)
    // - Age range validation
    // - Bio length and content validation
    
    // Save user logic here
});
```

**AI Validation Tasks:**
1. "Generate comprehensive input validation schema"
2. "Add XSS protection for text inputs"
3. "Implement SQL injection prevention"
4. "Create CSRF protection middleware"

#### Task 2.3: Security Headers and Middleware
Configure security middleware using AI:

**AI Task:** "Set up Express security middleware including:"
- Helmet.js configuration
- CORS policy setup
- Rate limiting implementation
- Content Security Policy (CSP)
- HTTP security headers

### Part 3: Security Scanning and Monitoring (15 minutes)

#### Task 3.1: Automated Security Scanning
Set up AI-powered security scanning:

**Tools to configure:**
1. **Snyk** - Dependency vulnerability scanning
2. **GitHub Advanced Security** - Code scanning
3. **SonarQube** - Security hotspot detection
4. **CodeQL** - Semantic code analysis

**AI Configuration Tasks:**
1. "Configure Snyk for automated dependency scanning"
2. "Set up GitHub security alerts and scanning"
3. "Create security-focused ESLint rules"

#### Task 3.2: Security Monitoring
Implement security event monitoring:

**AI Task:** "Create security monitoring system with:"
- Login attempt logging
- Failed authentication tracking
- Suspicious activity detection
- Security event alerting

## Sample Vulnerable Code Scenarios

### Scenario 1: Authentication Bypass
```javascript
// Fix this authentication bypass
function authenticateUser(req, res, next) {
    const token = req.headers.authorization;
    
    if (token && token.includes('admin')) {
        req.user = { role: 'admin' };
        next();
    } else if (token) {
        req.user = { role: 'user' };
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
}
```

### Scenario 2: Data Exposure
```javascript
// Fix information disclosure
app.get('/api/error', (req, res) => {
    try {
        riskyOperation();
    } catch (error) {
        res.status(500).json({
            message: 'Error occurred',
            stack: error.stack,
            config: process.env
        });
    }
});
```

### Scenario 3: Insecure Direct Object Reference
```javascript
// Fix access control issue
app.get('/api/documents/:id', (req, res) => {
    const docId = req.params.id;
    const query = 'SELECT * FROM documents WHERE id = ?';
    
    db.query(query, [docId], (err, results) => {
        if (results.length > 0) {
            res.json(results[0]);
        } else {
            res.status(404).send('Not found');
        }
    });
});
```

## AI Security Prompts

### For Vulnerability Detection
```
Analyze this code for security vulnerabilities and identify:
- SQL injection risks
- XSS vulnerabilities
- Authentication bypass issues
- Data exposure problems
- Input validation gaps
- Authorization flaws
```

### For Secure Implementation
```
Generate secure code that implements:
- Proper input validation and sanitization
- Parameterized database queries
- Strong authentication mechanisms
- Authorization checks
- Error handling without information disclosure
- Security headers and middleware
```

### For Security Testing
```
Create security tests that verify:
- Protection against common attacks (OWASP Top 10)
- Authentication and authorization workflows
- Input validation effectiveness
- Security header presence
- Rate limiting functionality
```

## Security Tools Integration

### AI-Enhanced Security Tools
1. **Snyk**: AI vulnerability intelligence
2. **GitHub Advanced Security**: ML-powered code scanning
3. **Veracode**: AI static analysis
4. **Checkmarx**: Intelligent security testing
5. **SemGrep**: Pattern-based security analysis

### Configuration Examples
Use AI to generate:
- Security scanning workflows
- Vulnerability remediation guides
- Security policy templates
- Compliance checking rules

## Evaluation Criteria
- **Vulnerability Detection**: Identify all security issues in provided code
- **Secure Implementation**: Fix vulnerabilities with proper solutions
- **Tool Integration**: Successfully configure security scanning tools
- **Process Implementation**: Establish automated security workflows
- **Documentation**: Create security guidelines and procedures

## Deliverables
- Fixed secure version of the vulnerable Express app
- Configured AI code review workflow
- Security scanning setup (Snyk, GitHub Security)
- Secure authentication system implementation
- Input validation and sanitization middleware
- Security monitoring and logging system
- Security testing suite
- Documentation of security practices and AI tool usage

## Time Allocation
- Part 1 (Code Review): 20 minutes
- Part 2 (Security Implementation): 25 minutes
- Part 3 (Scanning & Monitoring): 15 minutes
- **Total: 60 minutes**

## Bonus Challenges
1. Implement AI-powered threat detection
2. Create automated security incident response
3. Set up compliance monitoring (GDPR, HIPAA)
4. Generate security documentation with AI

## Next Steps
This lab prepares you for the final capstone project in Lab 07, where you'll build a complete application using all AI coding techniques learned.
