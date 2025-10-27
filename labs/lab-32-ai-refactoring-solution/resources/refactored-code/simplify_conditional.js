/**
 * Refactored Code: Simplify Conditionals - SOLUTION
 * 
 * This demonstrates guard clauses and early returns.
 * 
 * REFACTORING APPLIED: Simplify Conditionals
 * - Replaced 7-level nested if-else with guard clauses
 * - Error conditions handled first with early returns
 * - Happy path is at the end, clear and simple
 * - Reduced cyclomatic complexity from 11 to 8
 */

function canProcessPayment(user, cart, paymentMethod) {
  // Guard clauses: handle error conditions first with early returns
  if (!user) {
    return { success: false, message: 'User is required' };
  }
  
  if (!user.isActive) {
    return { success: false, message: 'User account is inactive' };
  }
  
  if (!user.emailVerified) {
    return { success: false, message: 'Email not verified' };
  }
  
  if (!cart) {
    return { success: false, message: 'Cart is required' };
  }
  
  if (!cart.items || cart.items.length === 0) {
    return { success: false, message: 'Cart is empty' };
  }
  
  if (cart.total <= 0) {
    return { success: false, message: 'Cart total must be greater than zero' };
  }
  
  if (!paymentMethod) {
    return { success: false, message: 'Payment method required' };
  }
  
  // Validate payment method type
  if (paymentMethod.type === 'credit_card') {
    if (!paymentMethod.isValid) {
      return { success: false, message: 'Invalid payment method' };
    }
    if (user.creditLimit < cart.total) {
      return { success: false, message: 'Insufficient credit limit' };
    }
  } else if (paymentMethod.type === 'paypal') {
    if (paymentMethod.email !== user.email) {
      return { success: false, message: 'PayPal email must match user email' };
    }
  } else {
    return { success: false, message: 'Unsupported payment method' };
  }
  
  // Happy path: all validations passed
  return { success: true, message: 'Payment can proceed' };
}

// Test cases
function runTests() {
  console.log('=== Testing Refactored Code ===\n');
  
  const validUser = {
    isActive: true,
    emailVerified: true,
    email: 'user@example.com',
    creditLimit: 1000
  };
  
  const validCart = {
    items: [{ name: 'Product', price: 50 }],
    total: 50
  };
  
  const validCreditCard = {
    type: 'credit_card',
    isValid: true
  };
  
  const validPayPal = {
    type: 'paypal',
    email: 'user@example.com'
  };
  
  console.log('Test 1 (Valid credit card):', canProcessPayment(validUser, validCart, validCreditCard));
  console.log('Test 2 (Valid PayPal):', canProcessPayment(validUser, validCart, validPayPal));
  console.log('Test 3 (No user):', canProcessPayment(null, validCart, validCreditCard));
  console.log('Test 4 (Empty cart):', canProcessPayment(validUser, { items: [], total: 0 }, validCreditCard));
  console.log('Test 5 (Unsupported payment):', canProcessPayment(validUser, validCart, { type: 'bitcoin', isValid: true }));
  console.log('Test 6 (Insufficient credit):', canProcessPayment(
    { ...validUser, creditLimit: 10 },
    validCart,
    validCreditCard
  ));
}

runTests();
