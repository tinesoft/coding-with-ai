/**
 * User authentication and authorization module with high cyclomatic complexity
 * 
 * COMPLEXITY PROBLEMS TO FIX:
 * - Deeply nested conditionals (high cyclomatic complexity)
 * - Long parameter lists
 * - Multiple responsibilities in single function
 * - Difficult to test due to complexity
 * - Hard to understand control flow
 * - Missing early returns (guard clauses)
 */

// Cyclomatic complexity: ~15+ (should be < 10)
// Too many nested if statements make this nearly impossible to test comprehensively
function validateAndProcessUser(
  username: string,
  password: string,
  email: string,
  age: number,
  country: string,
  role: string,
  permissions: string[],
  isVerified: boolean,
  accountStatus: string,
  lastLogin: Date,
  failedAttempts: number
) {
  // Nested conditionals create deep indentation
  if (username) {
    if (username.length >= 3) {
      if (username.length <= 20) {
        if (password) {
          if (password.length >= 8) {
            if (/[A-Z]/.test(password)) {
              if (/[a-z]/.test(password)) {
                if (/[0-9]/.test(password)) {
                  if (/[!@#$%^&*]/.test(password)) {
                    if (email) {
                      if (email.includes('@')) {
                        if (email.includes('.')) {
                          if (age) {
                            if (age >= 18) {
                              if (age <= 120) {
                                if (country) {
                                  // More nesting based on country
                                  if (country === 'US' || country === 'CA' || country === 'UK') {
                                    if (role) {
                                      if (role === 'admin' || role === 'moderator' || role === 'user') {
                                        if (permissions && permissions.length > 0) {
                                          // Check permissions based on role
                                          if (role === 'admin') {
                                            if (!permissions.includes('admin:*')) {
                                              return { success: false, error: 'Admin requires full permissions' };
                                            }
                                          } else if (role === 'moderator') {
                                            if (!permissions.includes('content:moderate')) {
                                              return { success: false, error: 'Moderator needs moderation permission' };
                                            }
                                          }
                                          
                                          if (isVerified) {
                                            if (accountStatus === 'active') {
                                              if (failedAttempts < 5) {
                                                // Check last login recency
                                                const daysSinceLogin = (Date.now() - lastLogin.getTime()) / (1000 * 60 * 60 * 24);
                                                if (daysSinceLogin <= 90) {
                                                  // Finally, create user after all validations
                                                  return {
                                                    success: true,
                                                    user: {
                                                      username,
                                                      email,
                                                      age,
                                                      country,
                                                      role,
                                                      permissions,
                                                      isVerified,
                                                      accountStatus
                                                    }
                                                  };
                                                } else {
                                                  return { success: false, error: 'Account inactive for too long' };
                                                }
                                              } else {
                                                return { success: false, error: 'Too many failed login attempts' };
                                              }
                                            } else {
                                              return { success: false, error: 'Account is not active' };
                                            }
                                          } else {
                                            return { success: false, error: 'Email not verified' };
                                          }
                                        } else {
                                          return { success: false, error: 'No permissions assigned' };
                                        }
                                      } else {
                                        return { success: false, error: 'Invalid role' };
                                      }
                                    } else {
                                      return { success: false, error: 'Role is required' };
                                    }
                                  } else {
                                    return { success: false, error: 'Country not supported' };
                                  }
                                } else {
                                  return { success: false, error: 'Country is required' };
                                }
                              } else {
                                return { success: false, error: 'Age must be 120 or less' };
                              }
                            } else {
                              return { success: false, error: 'Must be 18 or older' };
                            }
                          } else {
                            return { success: false, error: 'Age is required' };
                          }
                        } else {
                          return { success: false, error: 'Email must contain a dot' };
                        }
                      } else {
                        return { success: false, error: 'Email must contain @ symbol' };
                      }
                    } else {
                      return { success: false, error: 'Email is required' };
                    }
                  } else {
                    return { success: false, error: 'Password must contain a special character' };
                  }
                } else {
                  return { success: false, error: 'Password must contain a number' };
                }
              } else {
                return { success: false, error: 'Password must contain a lowercase letter' };
              }
            } else {
              return { success: false, error: 'Password must contain an uppercase letter' };
            }
          } else {
            return { success: false, error: 'Password must be at least 8 characters' };
          }
        } else {
          return { success: false, error: 'Password is required' };
        }
      } else {
        return { success: false, error: 'Username must be 20 characters or less' };
      }
    } else {
      return { success: false, error: 'Username must be at least 3 characters' };
    }
  } else {
    return { success: false, error: 'Username is required' };
  }
}

export { validateAndProcessUser };
