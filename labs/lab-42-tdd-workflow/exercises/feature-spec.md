# Shopping Cart Feature Specification

## Overview

Implement a shopping cart system that allows users to add, remove, and manage items for purchase. The system should track item quantities, calculate totals, and support discount codes.

---

## Core Requirements

### R1: Add Items to Cart

**Description**: Users can add items to their shopping cart. If an item already exists, its quantity should increase.

**Acceptance Criteria**:
- Each item has: `id` (string), `name` (string), `price` (number)
- Adding a new item increases cart item count
- Adding an existing item (same `id`) increases its quantity instead of duplicating
- Quantity starts at 1 for new items

**Examples**:
```typescript
cart.add({ id: '1', name: 'Book', price: 10 });
// Cart now has 1 item with quantity 1

cart.add({ id: '1', name: 'Book', price: 10 });
// Cart still has 1 item, but quantity is 2
```

---

### R2: Remove Items from Cart

**Description**: Users can remove items from their cart by item ID.

**Acceptance Criteria**:
- Removing an item completely removes it from cart (regardless of quantity)
- Removing non-existent item should not throw error (idempotent operation)
- Cart item count decreases when item removed

**Examples**:
```typescript
cart.remove('1'); // Removes item with id '1'
cart.remove('999'); // Safe - does nothing if item not found
```

---

### R3: Calculate Cart Total

**Description**: System calculates the total price of all items considering quantities.

**Acceptance Criteria**:
- Total = sum of (item.price × item.quantity) for all items
- Empty cart has total of 0
- Total updates automatically when items added/removed

**Examples**:
```typescript
cart.add({ id: '1', name: 'Book', price: 10 }); // quantity: 1
cart.add({ id: '1', name: 'Book', price: 10 }); // quantity: 2
cart.add({ id: '2', name: 'Pen', price: 2 });   // quantity: 1

cart.getTotal(); // Returns: (10 × 2) + (2 × 1) = 22
```

---

### R4: Get Item Count

**Description**: Return total number of items in cart considering quantities.

**Acceptance Criteria**:
- Item count = sum of all item quantities
- Empty cart returns 0
- Count updates when items added/removed

**Examples**:
```typescript
cart.add({ id: '1', name: 'Book', price: 10 }); // count: 1
cart.add({ id: '1', name: 'Book', price: 10 }); // count: 2 (same item, increased quantity)
cart.add({ id: '2', name: 'Pen', price: 2 });   // count: 3

cart.getItemCount(); // Returns: 3
```

---

### R5: Clear Cart

**Description**: Remove all items from cart at once.

**Acceptance Criteria**:
- All items removed in single operation
- Item count becomes 0
- Total becomes 0
- Operation is idempotent (safe to call on empty cart)

**Examples**:
```typescript
cart.clear();
cart.getItemCount(); // Returns: 0
cart.getTotal();     // Returns: 0
```

---

## Advanced Requirements (Exercise 4)

### R6: Apply Discount Codes

**Description**: Support discount codes that reduce the cart total by a percentage.

**Acceptance Criteria**:
- Discount specified as percentage (e.g., 10 = 10% off)
- Only one discount can be active at a time
- Applying new discount replaces previous discount
- Discount applies to entire cart total

**Examples**:
```typescript
cart.applyDiscount('SAVE10', 10); // 10% off
cart.getTotal(); // Returns: 22
cart.getDiscountedTotal(); // Returns: 19.8 (22 - 10%)
```

---

## Technical Constraints

- Use TypeScript with strict type checking
- No external dependencies for cart logic (use built-in structures)
- All methods should handle edge cases gracefully (no crashes)
- Item IDs are unique identifiers
- Prices are positive numbers

---

## Edge Cases to Consider

1. **Empty Cart Operations**:
   - Getting total of empty cart
   - Removing from empty cart
   - Clearing empty cart

2. **Duplicate Items**:
   - Adding same item multiple times
   - Quantity tracking accuracy

3. **Invalid Operations**:
   - Removing non-existent items
   - Applying discount to empty cart
   - Multiple discount applications

4. **Boundary Values**:
   - Zero-priced items (free items)
   - Very large quantities
   - 100% discount codes

---

## Public API Specification

```typescript
interface CartItem {
  id: string;
  name: string;
  price: number;
}

class ShoppingCart {
  // Add item to cart (increases quantity if exists)
  add(item: CartItem): void;
  
  // Remove item from cart by ID
  remove(itemId: string): void;
  
  // Get total price (price × quantity for all items)
  getTotal(): number;
  
  // Get total item count (sum of all quantities)
  getItemCount(): number;
  
  // Remove all items from cart
  clear(): void;
  
  // Get specific item from cart (optional - for testing)
  getItem(itemId: string): CartItem | undefined;
  
  // Apply discount code (Exercise 4)
  applyDiscount(code: string, percentage: number): void;
  
  // Get total after discount applied (Exercise 4)
  getDiscountedTotal(): number;
}
```

---

## Implementation Notes

**For TDD Practice**:
1. Implement requirements in order (R1 → R2 → R3 → R4 → R5)
2. Write all tests for a requirement before implementing
3. Start with simple data structures (arrays), refactor to better structures (Maps) later
4. Each requirement should follow complete RED-GREEN-REFACTOR cycle

**Test Coverage Expectations**:
- Minimum 100% coverage (TDD guarantees this)
- All edge cases have explicit tests
- Both success and error scenarios covered

---

## Success Criteria

✅ All requirements implemented with passing tests  
✅ Complete test coverage of public API  
✅ Edge cases handled gracefully  
✅ Code follows TDD discipline (tests first, minimal implementation, refactored quality)  
✅ Public API matches specification exactly
