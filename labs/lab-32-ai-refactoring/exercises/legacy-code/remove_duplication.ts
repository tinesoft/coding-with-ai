/**
 * Legacy Code: Remove Duplication Exercise
 * 
 * This code has repeated logic across multiple functions.
 * Use GitHub Copilot to extract common patterns into shared utilities.
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

// PROBLEM: All these functions have duplicated formatting logic

function formatUserForDisplay(user: User): string {
  let result = '';
  result += `ID: ${user.id}\n`;
  result += `Name: ${user.firstName} ${user.lastName}\n`;
  result += `Email: ${user.email}\n`;
  result += `Role: ${user.role}\n`;
  result += '---';
  return result;
}

function formatProductForDisplay(product: Product): string {
  let result = '';
  result += `ID: ${product.id}\n`;
  result += `Name: ${product.name}\n`;
  result += `Price: $${product.price.toFixed(2)}\n`;
  result += `Category: ${product.category}\n`;
  result += '---';
  return result;
}

function formatOrderForDisplay(order: Order): string {
  let result = '';
  result += `ID: ${order.id}\n`;
  result += `User ID: ${order.userId}\n`;
  result += `Total: $${order.total.toFixed(2)}\n`;
  result += `Status: ${order.status}\n`;
  result += '---';
  return result;
}

// More duplication: validation functions

function validateUser(user: User): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  if (!user.id || user.id <= 0) {
    errors.push('Invalid user ID');
  }
  if (!user.firstName || user.firstName.trim().length === 0) {
    errors.push('First name is required');
  }
  if (!user.lastName || user.lastName.trim().length === 0) {
    errors.push('Last name is required');
  }
  if (!user.email || !user.email.includes('@')) {
    errors.push('Invalid email');
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
}

function validateProduct(product: Product): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  if (!product.id || product.id <= 0) {
    errors.push('Invalid product ID');
  }
  if (!product.name || product.name.trim().length === 0) {
    errors.push('Product name is required');
  }
  if (!product.price || product.price < 0) {
    errors.push('Invalid price');
  }
  if (!product.category || product.category.trim().length === 0) {
    errors.push('Category is required');
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
}

function validateOrder(order: Order): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  if (!order.id || order.id <= 0) {
    errors.push('Invalid order ID');
  }
  if (!order.userId || order.userId <= 0) {
    errors.push('Invalid user ID');
  }
  if (!order.total || order.total < 0) {
    errors.push('Invalid total');
  }
  if (!order.status || order.status.trim().length === 0) {
    errors.push('Status is required');
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
}

// Test cases
function runTests(): void {
  console.log('=== Testing Duplicated Code ===\n');
  
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
}

runTests();

export { formatUserForDisplay, formatProductForDisplay, formatOrderForDisplay };
export { validateUser, validateProduct, validateOrder };
export type { User, Product, Order };
