/**
 * Validator Utilities
 * Reusable validation functions used across the application
 */

/**
 * Validate email format
 * @param email - Email address to validate
 * @returns true if valid email format
 */
export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') {
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate password strength
 * Password must:
 * - Be at least 8 characters
 * - Contain at least one uppercase letter
 * - Contain at least one lowercase letter
 * - Contain at least one number
 * - Contain at least one special character
 * 
 * @param password - Password to validate
 * @returns true if password meets requirements
 */
export function isValidPassword(password: string): boolean {
  if (!password || typeof password !== 'string' || password.length < 8) {
    return false;
  }

  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return hasUppercase && hasLowercase && hasNumber && hasSpecialChar;
}

/**
 * Validate age is within acceptable range
 * @param age - Age to validate
 * @returns true if age is between 18 and 120
 */
export function isValidAge(age: number): boolean {
  return typeof age === 'number' && age >= 18 && age <= 120;
}
