/**
 * Refactored Code: Remove Duplication - SOLUTION
 * 
 * This demonstrates extracting common patterns into reusable utilities.
 * 
 * REFACTORING APPLIED: Remove Duplication
 * - Extracted common formatting logic into generic function
 * - Created configurable validation framework
 * - Reduced code from ~150 lines to ~50 lines
 * - Single source of truth for formatting and validation
 */

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

interface Order {
  id: number;
  userId: number;
  total: number;
  status: string;
}

// Generic formatting function
function formatEntityForDisplay(entity: Record<string, any>): string {
  let result = '';
  
  for (const [key, value] of Object.entries(entity)) {
    // Convert camelCase to Title Case
    const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
    
    // Format monetary values
    const formattedValue = (typeof value === 'number' && (key.includes('price') || key.includes('total')))
      ? `$${value.toFixed(2)}`
      : value;
    
    result += `${label}: ${formattedValue}\n`;
  }
  
  result += '---';
  return result;
}

// Specific formatters using the generic function
function formatUserForDisplay(user: User): string {
  return formatEntityForDisplay(user);
}

function formatProductForDisplay(product: Product): string {
  return formatEntityForDisplay(product);
}

function formatOrderForDisplay(order: Order): string {
  return formatEntityForDisplay(order);
}

// Generic validation framework
interface ValidationRule<T> {
  field: keyof T;
  validate: (value: any) => boolean;
  errorMessage: string;
}

function validateEntity<T>(entity: T, rules: ValidationRule<T>[]): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  for (const rule of rules) {
    const value = entity[rule.field];
    if (!rule.validate(value)) {
      errors.push(rule.errorMessage);
    }
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
}

// Validation rules configurations
const userValidationRules: ValidationRule<User>[] = [
  { field: 'id', validate: (v) => v > 0, errorMessage: 'Invalid user ID' },
  { field: 'firstName', validate: (v) => v?.trim().length > 0, errorMessage: 'First name is required' },
  { field: 'lastName', validate: (v) => v?.trim().length > 0, errorMessage: 'Last name is required' },
  { field: 'email', validate: (v) => v?.includes('@'), errorMessage: 'Invalid email' }
];

const productValidationRules: ValidationRule<Product>[] = [
  { field: 'id', validate: (v) => v > 0, errorMessage: 'Invalid product ID' },
  { field: 'name', validate: (v) => v?.trim().length > 0, errorMessage: 'Product name is required' },
  { field: 'price', validate: (v) => v >= 0, errorMessage: 'Invalid price' },
  { field: 'category', validate: (v) => v?.trim().length > 0, errorMessage: 'Category is required' }
];

const orderValidationRules: ValidationRule<Order>[] = [
  { field: 'id', validate: (v) => v > 0, errorMessage: 'Invalid order ID' },
  { field: 'userId', validate: (v) => v > 0, errorMessage: 'Invalid user ID' },
  { field: 'total', validate: (v) => v >= 0, errorMessage: 'Invalid total' },
  { field: 'status', validate: (v) => v?.trim().length > 0, errorMessage: 'Status is required' }
];

// Specific validators using the generic framework
function validateUser(user: User) {
  return validateEntity(user, userValidationRules);
}

function validateProduct(product: Product) {
  return validateEntity(product, productValidationRules);
}

function validateOrder(order: Order) {
  return validateEntity(order, orderValidationRules);
}

// Test cases
function runTests(): void {
  console.log('=== Testing Refactored Code ===\n');
  
  const user: User = {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    role: 'admin'
  };
  
  const product: Product = {
    id: 101,
    name: 'Laptop',
    price: 999.99,
    category: 'Electronics'
  };
  
  const order: Order = {
    id: 5001,
    userId: 1,
    total: 999.99,
    status: 'pending'
  };
  
  console.log('User:\n', formatUserForDisplay(user));
  console.log('\nProduct:\n', formatProductForDisplay(product));
  console.log('\nOrder:\n', formatOrderForDisplay(order));
  
  console.log('\nValidations:');
  console.log('User valid:', validateUser(user).valid);
  console.log('Product valid:', validateProduct(product).valid);
  console.log('Order valid:', validateOrder(order).valid);
  
  // Test validation errors
  const invalidUser = { ...user, email: 'invalid-email' };
  const userValidation = validateUser(invalidUser);
  console.log('\nInvalid user errors:', userValidation.errors);
}

runTests();

export { formatUserForDisplay, formatProductForDisplay, formatOrderForDisplay };
export { validateUser, validateProduct, validateOrder };
export type { User, Product, Order };
