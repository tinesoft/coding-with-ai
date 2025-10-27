/**
 * Legacy Code: Simplify Conditionals Exercise
 * 
 * This function has deeply nested conditionals that are hard to follow.
 * Use GitHub Copilot to simplify using guard clauses and early returns.
 */

function canProcessPayment(user, cart, paymentMethod) {
  // PROBLEM: Nested conditionals create "arrow code" that's hard to read
  
  if (user) {
    if (user.isActive) {
      if (user.emailVerified) {
        if (cart) {
          if (cart.items && cart.items.length > 0) {
            if (cart.total > 0) {
              if (paymentMethod) {
                if (paymentMethod.type === 'credit_card') {
                  if (paymentMethod.isValid) {
                    if (user.creditLimit >= cart.total) {
                      return { success: true, message: 'Payment can proceed' };
                    } else {
                      return { success: false, message: 'Insufficient credit limit' };
                    }
                  } else {
                    return { success: false, message: 'Invalid payment method' };
                  }
                } else if (paymentMethod.type === 'paypal') {
                  if (paymentMethod.email === user.email) {
                    return { success: true, message: 'Payment can proceed' };
                  } else {
                    return { success: false, message: 'PayPal email must match user email' };
                  }
                } else {
                  return { success: false, message: 'Unsupported payment method' };
                }
              } else {
                return { success: false, message: 'Payment method required' };
              }
            } else {
              return { success: false, message: 'Cart total must be greater than zero' };
            }
          } else {
            return { success: false, message: 'Cart is empty' };
          }
        } else {
          return { success: false, message: 'Cart is required' };
        }
      } else {
        return { success: false, message: 'Email not verified' };
      }
    } else {
      return { success: false, message: 'User account is inactive' };
    }
  } else {
    return { success: false, message: 'User is required' };
  }
}

// Test cases
function runTests() {
  console.log('=== Testing canProcessPayment ===\n');
  
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
  
  // Test 1: Valid credit card payment
  console.log('Test 1:', canProcessPayment(validUser, validCart, validCreditCard));
  
  // Test 2: Valid PayPal payment
  console.log('Test 2:', canProcessPayment(validUser, validCart, validPayPal));
  
  // Test 3: No user
  console.log('Test 3:', canProcessPayment(null, validCart, validCreditCard));
  
  // Test 4: Empty cart
  console.log('Test 4:', canProcessPayment(validUser, { items: [], total: 0 }, validCreditCard));
  
  // Test 5: Invalid payment method
  console.log('Test 5:', canProcessPayment(validUser, validCart, { type: 'bitcoin', isValid: true }));
  
  // Test 6: Insufficient credit
  console.log('Test 6:', canProcessPayment(
    { ...validUser, creditLimit: 10 },
    validCart,
    validCreditCard
  ));
}

runTests();
