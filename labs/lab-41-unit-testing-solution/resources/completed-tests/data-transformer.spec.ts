import { describe, it, expect } from 'vitest';
import { parseJSON, filterArray, mapValues } from '../../exercises/starter-code/data-transformer';

describe('Data Transformer Functions', () => {
  describe('parseJSON', () => {
    it('should parse valid JSON string into object', () => {
      const result = parseJSON('{"name": "John", "age": 30}');
      expect(result).toEqual({ name: 'John', age: 30 });
    });

    it('should return null for invalid JSON string', () => {
      const result = parseJSON('{invalid json}');
      expect(result).toBeNull();
    });

    it('should return null for empty string', () => {
      const result = parseJSON('');
      expect(result).toBeNull();
    });

    it('should parse complex nested JSON', () => {
      const input = '{"user": {"name": "Alice", "roles": ["admin", "user"]}}';
      const result = parseJSON(input);
      expect(result).toEqual({
        user: {
          name: 'Alice',
          roles: ['admin', 'user'],
        },
      });
    });
  });

  describe('filterArray', () => {
    it('should filter array based on predicate', () => {
      const numbers = [1, 2, 3, 4, 5, 6];
      const result = filterArray(numbers, (n) => n % 2 === 0);
      expect(result).toEqual([2, 4, 6]);
    });

    it('should return empty array when no elements match predicate', () => {
      const numbers = [1, 3, 5, 7];
      const result = filterArray(numbers, (n) => n % 2 === 0);
      expect(result).toEqual([]);
    });

    it('should handle empty array input', () => {
      const result = filterArray([], (n) => n > 0);
      expect(result).toEqual([]);
    });

    it('should throw error when first argument is not an array', () => {
      expect(() => filterArray('not an array' as any, (x) => true)).toThrow(
        'First argument must be an array'
      );
    });

    it('should throw error when second argument is not a function', () => {
      expect(() => filterArray([1, 2, 3], 'not a function' as any)).toThrow(
        'Second argument must be a function'
      );
    });

    it('should work with different data types', () => {
      const strings = ['apple', 'banana', 'apricot', 'blueberry'];
      const result = filterArray(strings, (s) => s.startsWith('a'));
      expect(result).toEqual(['apple', 'apricot']);
    });
  });

  describe('mapValues', () => {
    it('should transform object values using mapper function', () => {
      const obj = { a: 1, b: 2, c: 3 };
      const result = mapValues(obj, (v) => v * 2);
      expect(result).toEqual({ a: 2, b: 4, c: 6 });
    });

    it('should pass both value and key to mapper function', () => {
      const obj = { firstName: 'john', lastName: 'doe' };
      const result = mapValues(obj, (v, k) => `${k}: ${v.toUpperCase()}`);
      expect(result).toEqual({
        firstName: 'firstName: JOHN',
        lastName: 'lastName: DOE',
      });
    });

    it('should handle empty object', () => {
      const result = mapValues({}, (v) => v);
      expect(result).toEqual({});
    });

    it('should throw error when first argument is not an object', () => {
      expect(() => mapValues(null as any, (x) => x)).toThrow(
        'First argument must be an object'
      );
      expect(() => mapValues('string' as any, (x) => x)).toThrow(
        'First argument must be an object'
      );
    });

    it('should throw error when second argument is not a function', () => {
      expect(() => mapValues({ a: 1 }, 'not a function' as any)).toThrow(
        'Second argument must be a function'
      );
    });
  });
});
