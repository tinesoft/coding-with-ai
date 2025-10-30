/**
 * E-commerce Shopping Cart Module - Refactored Version
 * 
 * IMPROVEMENTS APPLIED:
 * ✅ Clear, descriptive naming throughout
 * ✅ Proper TypeScript interfaces for type safety
 * ✅ Eliminated code duplication with reusable functions
 * ✅ Named constants replace magic numbers
 * ✅ Comprehensive documentation
 * ✅ Proper error handling with validation
 * ✅ Single responsibility per function
 */

// ===== INTERFACES =====

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

interface DiscountCoupon {
  code: string;
  expirationDate: number;
}

interface PriceBreakdown {
  subtotal: number;
  discount: number;
  tax: number;
  total: number;
}

// ===== CONFIGURATION CONSTANTS =====

const DISCOUNT_THRESHOLDS = {
  STANDARD: 50,
  PREMIUM: 100
} as const;

const DISCOUNT_RATES = {
  STANDARD: 0.10, // 10% off orders > $50
  PREMIUM: 0.20   // 20% off orders > $100
} as const;

const TAX_RATE = 0.08; // 8% sales tax

const COUPON_VALUES = {
  SAVE10: 10,
  SAVE20: 20,
  FREESHIP: 5
} as const;

// ===== STATE =====

let cartItems: CartItem[] = [];
let appliedDiscountAmount = 0;

// ===== HELPER FUNCTIONS =====

/**
 * Calculates the subtotal for all items in the cart
 */
function calculateSubtotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

/**
 * Calculates automatic discount based on subtotal threshold
 */
function calculateAutomaticDiscount(subtotal: number): number {
  if (subtotal > DISCOUNT_THRESHOLDS.PREMIUM) {
    return subtotal * DISCOUNT_RATES.PREMIUM;
  } else if (subtotal > DISCOUNT_THRESHOLDS.STANDARD) {
    return subtotal * DISCOUNT_RATES.STANDARD;
  }
  return 0;
}

/**
 * Calculates tax amount based on taxable amount
 */
function calculateTax(taxableAmount: number): number {
  return taxableAmount * TAX_RATE;
}

// ===== PUBLIC API =====

/**
 * Adds an item to the shopping cart with validation
 * @throws Error if price or quantity are invalid
 */
export function addItemToCart(name: string, price: number, quantity: number): void {
  if (price < 0) {
    throw new Error('Price cannot be negative');
  }
  if (quantity <= 0) {
    throw new Error('Quantity must be greater than zero');
  }
  if (!name || name.trim().length === 0) {
    throw new Error('Item name is required');
  }

  cartItems.push({
    name: name.trim(),
    price,
    quantity
  });
}

/**
 * Gets current cart items (read-only copy)
 */
export function getCartItems(): readonly CartItem[] {
  return [...cartItems];
}

/**
 * Calculates complete price breakdown for current cart
 */
export function calculatePriceBreakdown(): PriceBreakdown {
  const subtotal = calculateSubtotal(cartItems);
  const automaticDiscount = calculateAutomaticDiscount(subtotal);
  const totalDiscount = automaticDiscount + appliedDiscountAmount;
  const discountedAmount = subtotal - totalDiscount;
  const tax = calculateTax(discountedAmount);
  const total = discountedAmount + tax;

  return {
    subtotal,
    discount: totalDiscount,
    tax,
    total
  };
}

/**
 * Applies a discount coupon if valid
 * @returns true if coupon applied successfully, false otherwise
 */
export function applyCoupon(coupon: DiscountCoupon): boolean {
  if (!isValidCoupon(coupon)) {
    return false;
  }

  const couponValue = COUPON_VALUES[coupon.code as keyof typeof COUPON_VALUES];
  if (couponValue === undefined) {
    return false;
  }

  appliedDiscountAmount += couponValue;
  return true;
}

/**
 * Validates a discount coupon
 */
export function isValidCoupon(coupon: DiscountCoupon | null): boolean {
  if (!coupon) {
    return false;
  }

  if (!coupon.expirationDate || coupon.expirationDate <= Date.now()) {
    return false;
  }

  return true;
}

/**
 * Completes the order and clears the cart
 * @returns Final order total
 */
export function checkout(): number {
  const breakdown = calculatePriceBreakdown();
  const finalTotal = breakdown.total;

  // Clear cart state after checkout
  clearCart();

  return finalTotal;
}

/**
 * Clears all items from cart and resets discounts
 */
export function clearCart(): void {
  cartItems = [];
  appliedDiscountAmount = 0;
}

/**
 * Gets the discount amount that would be applied to a given subtotal
 * Useful for showing potential savings to customers
 */
export function getDiscountForAmount(subtotal: number): number {
  return calculateAutomaticDiscount(subtotal);
}
