/**
 * Data Transformation Functions
 * 
 * Utilities for parsing and transforming data structures.
 * Tests should cover error conditions and edge cases.
 */

/**
 * Safely parses JSON string
 * @returns Parsed object or null if parsing fails
 */
export function parseJSON(input: string): object | null {
  try {
    return JSON.parse(input);
  } catch (error) {
    return null;
  }
}

/**
 * Filters array based on predicate function
 * @returns New array with elements that pass predicate
 */
export function filterArray<T>(arr: T[], predicate: (item: T) => boolean): T[] {
  if (!Array.isArray(arr)) {
    throw new Error('First argument must be an array');
  }
  if (typeof predicate !== 'function') {
    throw new Error('Second argument must be a function');
  }
  return arr.filter(predicate);
}

/**
 * Maps object values using mapper function
 * @returns New object with transformed values
 */
export function mapValues<T, U>(obj: Record<string, T>, mapper: (value: T, key: string) => U): Record<string, U> {
  if (typeof obj !== 'object' || obj === null) {
    throw new Error('First argument must be an object');
  }
  if (typeof mapper !== 'function') {
    throw new Error('Second argument must be a function');
  }

  const result: Record<string, U> = {};
  for (const [key, value] of Object.entries(obj)) {
    result[key] = mapper(value, key);
  }
  return result;
}
