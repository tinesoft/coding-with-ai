import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide } from '../../exercises/starter-code/calculator';

describe('Calculator Functions', () => {
  describe('add', () => {
    it('should return 5 when adding 2 and 3', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('should handle negative numbers correctly', () => {
      expect(add(-5, 3)).toBe(-2);
      expect(add(-5, -3)).toBe(-8);
    });

    it('should handle zero correctly', () => {
      expect(add(0, 5)).toBe(5);
      expect(add(5, 0)).toBe(5);
      expect(add(0, 0)).toBe(0);
    });

    it('should handle decimal numbers with precision', () => {
      expect(add(0.1, 0.2)).toBeCloseTo(0.3, 10);
    });
  });

  describe('subtract', () => {
    it('should return 2 when subtracting 3 from 5', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    it('should handle negative numbers correctly', () => {
      expect(subtract(-5, 3)).toBe(-8);
      expect(subtract(5, -3)).toBe(8);
      expect(subtract(-5, -3)).toBe(-2);
    });

    it('should handle zero correctly', () => {
      expect(subtract(5, 0)).toBe(5);
      expect(subtract(0, 5)).toBe(-5);
      expect(subtract(0, 0)).toBe(0);
    });

    it('should handle decimal numbers with precision', () => {
      expect(subtract(0.3, 0.1)).toBeCloseTo(0.2, 10);
    });
  });

  describe('multiply', () => {
    it('should return 15 when multiplying 3 and 5', () => {
      expect(multiply(3, 5)).toBe(15);
    });

    it('should handle negative numbers correctly', () => {
      expect(multiply(-5, 3)).toBe(-15);
      expect(multiply(5, -3)).toBe(-15);
      expect(multiply(-5, -3)).toBe(15);
    });

    it('should return zero when multiplying by zero', () => {
      expect(multiply(5, 0)).toBe(0);
      expect(multiply(0, 5)).toBe(0);
      expect(multiply(0, 0)).toBe(0);
    });

    it('should handle decimal numbers with precision', () => {
      expect(multiply(0.1, 0.2)).toBeCloseTo(0.02, 10);
    });
  });

  describe('divide', () => {
    it('should return 2.5 when dividing 5 by 2', () => {
      expect(divide(5, 2)).toBe(2.5);
    });

    it('should handle negative numbers correctly', () => {
      expect(divide(-10, 2)).toBe(-5);
      expect(divide(10, -2)).toBe(-5);
      expect(divide(-10, -2)).toBe(5);
    });

    it('should throw error when dividing by zero', () => {
      expect(() => divide(5, 0)).toThrow('Division by zero is not allowed');
    });

    it('should handle decimal numbers with precision', () => {
      expect(divide(0.3, 0.1)).toBeCloseTo(3, 10);
    });
  });
});
