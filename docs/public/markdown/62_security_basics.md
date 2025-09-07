<!-- .slide -->

# AI-Powered Security Fundamentals

## **Secure Coding with AI Assistance**

### **Security Challenges in Development**
- **Complex attack vectors**: Evolving security threats
- **Human oversight**: Missing security vulnerabilities
- **Knowledge gaps**: Limited security expertise on teams
- **Time constraints**: Security often deprioritized for speed

### **AI Security Solutions**
- **Vulnerability detection**: Real-time security scanning
- **Secure code generation**: AI suggests secure implementations
- **Threat modeling**: AI identifies potential attack vectors
- **Compliance checking**: Automated security standard validation

##--##

<!-- .slide: class="with-code" -->

# AI Security Analysis

## **Common Vulnerabilities & AI Detection**

```javascript
// AI detects multiple security issues
const express = require('express');
const app = express();

// AI flags: Missing rate limiting
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    
    // AI flags: SQL injection vulnerability
    const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
    
    // AI flags: Missing input sanitization
    db.query(query, (err, results) => {
        if (results.length > 0) {
            // AI flags: Sensitive data in JWT
            const token = jwt.sign({
                userId: results[0].id,
                username: results[0].username,
                password: results[0].password,
                creditCard: results[0].creditCard
            }, 'secret123'); // AI flags: Weak secret
            
            res.json({ token });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    });
});
```

**AI Security Report:**
- 🚨 **SQL Injection**: Parameterized queries required
- 🔒 **Rate Limiting**: Missing brute force protection
- 🛡️ **Input Validation**: Sanitize user inputs
- 🔐 **JWT Security**: Remove sensitive data, use strong secret
- 📝 **Logging**: Add security event logging

##--##

<!-- .slide: class="with-code" -->

# AI-Secured Implementation

## **AI-Generated Secure Code**

```javascript
const express = require('express');
const rateLimit = require('express-rate-limit');
const bcrypt = require('bcrypt');
const joi = require('joi');
const app = express();

// AI suggests: Rate limiting for login attempts
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // 5 attempts per window
    message: 'Too many login attempts, please try again later',
    standardHeaders: true,
    legacyHeaders: false,
});

// AI suggests: Input validation schema
const loginSchema = joi.object({
    username: joi.string().alphanum().min(3).max(30).required(),
    password: joi.string().min(8).required()
});

app.post('/api/login', loginLimiter, async (req, res) => {
    try {
        // AI suggests: Input validation
        const { error, value } = loginSchema.validate(req.body);
        if (error) {
            securityLogger.warn('Invalid login attempt', { 
                ip: req.ip, 
                userAgent: req.get('User-Agent'),
                errors: error.details 
            });
            return res.status(400).json({ error: 'Invalid input' });
        }
        
        const { username, password } = value;
        
        // AI suggests: Parameterized query
        const query = 'SELECT id, username, password_hash FROM users WHERE username = ? AND active = 1';
        const results = await db.query(query, [username]);
        
        if (results.length === 0) {
            securityLogger.warn('Login attempt for non-existent user', { 
                username, 
                ip: req.ip 
            });
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        
        const user = results[0];
        
        // AI suggests: Secure password comparison
        const isValidPassword = await bcrypt.compare(password, user.password_hash);
        
        if (!isValidPassword) {
            securityLogger.warn('Invalid password attempt', { 
                userId: user.id, 
                ip: req.ip 
            });
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        
        // AI suggests: Minimal JWT payload with strong secret
        const token = jwt.sign(
            { 
                userId: user.id, 
                username: user.username,
                iat: Date.now()
            }, 
            process.env.JWT_SECRET, // AI suggests: Environment variable
            { expiresIn: '1h' }
        );
        
        securityLogger.info('Successful login', { 
            userId: user.id, 
            ip: req.ip 
        });
        
        res.json({ 
            token,
            expiresIn: 3600
        });
        
    } catch (error) {
        securityLogger.error('Login error', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
```

##--##

<!-- .slide -->

# AI Security Best Practices

## **Comprehensive Security Strategy**

### **AI Security Tools**
- **Snyk**: Vulnerability scanning with AI insights
- **GitHub Advanced Security**: Automated security scanning
- **Veracode**: AI-powered static analysis
- **Checkmarx**: Intelligent security testing

### **Security Implementation Areas**
- **Input validation**: AI generates validation schemas
- **Authentication**: Secure authentication patterns
- **Authorization**: Role-based access control
- **Data protection**: Encryption and secure storage
- **Logging**: Security event monitoring

### **AI Security Workflow**
1. **Secure by design**: AI suggests secure patterns during development
2. **Continuous scanning**: Real-time vulnerability detection
3. **Automated remediation**: AI provides fix suggestions
4. **Threat modeling**: AI identifies potential attack vectors
5. **Compliance monitoring**: Automated security standard validation

Notes:
AI security tools should be integrated into every stage of development, from initial coding to production monitoring. The goal is to shift security left and make it an integral part of the development process.
