import { describe, it, expect } from 'vitest';
import { isValidEmail, isValidPassword, isValidAge } from '../../exercises/starter-code/user-validator';

describe('User Validator Functions', () => {
  describe('isValidEmail', () => {
    it('should return true for valid email formats', () => {
      expect(isValidEmail('user@example.com')).toBe(true);
      expect(isValidEmail('test.user@domain.co.uk')).toBe(true);
      expect(isValidEmail('name+tag@company.org')).toBe(true);
    });

    it('should return false for email missing @ symbol', () => {
      expect(isValidEmail('userexample.com')).toBe(false);
    });

    it('should return false for email missing domain', () => {
      expect(isValidEmail('user@')).toBe(false);
      expect(isValidEmail('user@domain')).toBe(false);
    });

    it('should return false for email with spaces', () => {
      expect(isValidEmail('user @example.com')).toBe(false);
      expect(isValidEmail('user@example .com')).toBe(false);
    });
  });

  describe('isValidPassword', () => {
    it('should return true for password meeting all requirements', () => {
      expect(isValidPassword('Test123!')).toBe(true);
      expect(isValidPassword('SecureP@ssw0rd')).toBe(true);
    });

    it('should return false for password shorter than 8 characters', () => {
      expect(isValidPassword('Test1!')).toBe(false);
    });

    it('should return false for password missing uppercase letter', () => {
      expect(isValidPassword('test123!')).toBe(false);
    });

    it('should return false for password missing lowercase letter', () => {
      expect(isValidPassword('TEST123!')).toBe(false);
    });

    it('should return false for password missing number', () => {
      expect(isValidPassword('TestTest!')).toBe(false);
    });

    it('should return false for password missing special character', () => {
      expect(isValidPassword('Test1234')).toBe(false);
    });

    it('should return false for password with only length requirement met', () => {
      expect(isValidPassword('testtest')).toBe(false);
    });

    it('should handle passwords with multiple special characters', () => {
      expect(isValidPassword('Test@123#')).toBe(true);
    });
  });

  describe('isValidAge', () => {
    it('should return true for valid age', () => {
      expect(isValidAge(25)).toBe(true);
      expect(isValidAge(18)).toBe(true); // Boundary: minimum age
      expect(isValidAge(120)).toBe(true); // Boundary: maximum age
    });

    it('should return false for age below minimum', () => {
      expect(isValidAge(17)).toBe(false);
      expect(isValidAge(10)).toBe(false);
    });

    it('should return false for age above maximum', () => {
      expect(isValidAge(121)).toBe(false);
      expect(isValidAge(150)).toBe(false);
    });

    it('should return false for negative age', () => {
      expect(isValidAge(-1)).toBe(false);
      expect(isValidAge(-25)).toBe(false);
    });
  });
});
