/**
 * Refactored Code: Extract Method - SOLUTION
 * 
 * This demonstrates proper function extraction for single responsibility.
 * 
 * REFACTORING APPLIED: Extract Method
 * - Broke down 80-line monolithic function into focused helpers
 * - Each function has one clear responsibility
 * - Main function is now 8 lines and highly readable
 */

function processUserRegistration(userData) {
  validateUserInput(userData);
  const passwordHash = hashPassword(userData.password);
  const user = saveUserToDatabase(userData, passwordHash);
  sendWelcomeEmail(user);
  logRegistrationActivity(user);
  
  return {
    success: true,
    userId: user.id,
    message: 'User registered successfully'
  };
}

function validateUserInput(userData) {
  if (!userData.email || typeof userData.email !== 'string') {
    throw new Error('Invalid email');
  }
  if (!userData.email.includes('@')) {
    throw new Error('Email must contain @');
  }
  if (!userData.password || userData.password.length < 8) {
    throw new Error('Password must be at least 8 characters');
  }
  if (!userData.username || userData.username.length < 3) {
    throw new Error('Username must be at least 3 characters');
  }
  if (!/^[a-zA-Z0-9_]+$/.test(userData.username)) {
    throw new Error('Username can only contain letters, numbers, and underscores');
  }
}

function hashPassword(password) {
  const salt = Math.random().toString(36).substring(2, 15);
  let hashedPassword = '';
  for (let i = 0; i < password.length; i++) {
    hashedPassword += String.fromCharCode(
      password.charCodeAt(i) ^ salt.charCodeAt(i % salt.length)
    );
  }
  return salt + ':' + btoa(hashedPassword);
}

function saveUserToDatabase(userData, passwordHash) {
  const user = {
    id: Math.floor(Math.random() * 1000000),
    email: userData.email.toLowerCase(),
    username: userData.username,
    passwordHash: passwordHash,
    createdAt: new Date().toISOString(),
    isActive: true,
    emailVerified: false
  };
  
  console.log('[DB] Saving user:', user.id);
  // Simulate database save
  const mockDatabase = mockDatabase || [];
  mockDatabase.push(user);
  
  return user;
}

function sendWelcomeEmail(user) {
  const emailSubject = 'Welcome to Our Platform!';
  const emailBody = `
    Hello ${user.username},
    
    Thank you for registering!
    Your account has been created successfully.
    
    Please verify your email address by clicking the link below:
    https://example.com/verify/${user.id}
    
    Best regards,
    The Team
  `;
  
  console.log('[EMAIL] Sending to:', user.email);
  console.log('[EMAIL] Subject:', emailSubject);
  // Simulate email sending
}

function logRegistrationActivity(user) {
  const logEntry = {
    timestamp: new Date().toISOString(),
    action: 'USER_REGISTRATION',
    userId: user.id,
    metadata: {
      email: user.email,
      username: user.username,
      source: 'web'
    }
  };
  console.log('[LOG]', JSON.stringify(logEntry));
}

// Test cases
function runTests() {
  console.log('=== Testing Refactored Code ===\n');
  
  try {
    const result1 = processUserRegistration({
      email: 'john@example.com',
      username: 'john_doe',
      password: 'securePassword123'
    });
    console.log('✓ Test 1 passed:', result1.message);
  } catch (e) {
    console.log('✗ Test 1 failed:', e.message);
  }
  
  try {
    processUserRegistration({
      email: 'invalid-email',
      username: 'jane_doe',
      password: 'password123'
    });
    console.log('✗ Test 2 failed: Should have thrown error');
  } catch (e) {
    console.log('✓ Test 2 passed: Caught invalid email');
  }
  
  try {
    processUserRegistration({
      email: 'bob@example.com',
      username: 'bob',
      password: 'short'
    });
    console.log('✗ Test 3 failed: Should have thrown error');
  } catch (e) {
    console.log('✓ Test 3 passed: Caught short password');
  }
}

runTests();
