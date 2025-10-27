/**
 * Legacy Code: Extract Method Refactoring Exercise
 * 
 * This function has multiple responsibilities and is too long.
 * Use GitHub Copilot to extract logical sections into separate functions.
 */

function processUserRegistration(userData) {
  // PROBLEM: This function does too many things!
  // - Validates input
  // - Hashes password
  // - Saves to database
  // - Sends welcome email
  // - Logs activity
  
  // Input validation (responsibility #1)
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
  
  // Password hashing (responsibility #2)
  const salt = Math.random().toString(36).substring(2, 15);
  let hashedPassword = '';
  for (let i = 0; i < userData.password.length; i++) {
    hashedPassword += String.fromCharCode(
      userData.password.charCodeAt(i) ^ salt.charCodeAt(i % salt.length)
    );
  }
  const finalHash = salt + ':' + btoa(hashedPassword);
  
  // Database operations (responsibility #3)
  const user = {
    id: Math.floor(Math.random() * 1000000),
    email: userData.email.toLowerCase(),
    username: userData.username,
    passwordHash: finalHash,
    createdAt: new Date().toISOString(),
    isActive: true,
    emailVerified: false
  };
  
  // Simulate database save
  console.log('[DB] Saving user:', user.id);
  const mockDatabase = mockDatabase || [];
  mockDatabase.push(user);
  
  // Email sending (responsibility #4)
  const emailSubject = 'Welcome to Our Platform!';
  const emailBody = `
    Hello ${userData.username},
    
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
  
  // Activity logging (responsibility #5)
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
  
  return {
    success: true,
    userId: user.id,
    message: 'User registered successfully'
  };
}

// Test cases
function runTests() {
  console.log('=== Testing processUserRegistration ===\n');
  
  try {
    // Valid registration
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
    // Invalid email
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
    // Short password
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

// Run tests
runTests();
