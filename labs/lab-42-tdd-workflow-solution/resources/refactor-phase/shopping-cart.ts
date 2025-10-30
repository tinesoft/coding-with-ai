/**
 * Shopping Cart - REFACTOR Phase Implementation
 * 
 * This refactored version improves code quality while keeping all tests green.
 * Changes from GREEN phase:
 * - Array replaced with Map for O(1) item lookups
 * - Calculation logic extracted into private methods
 * - Better variable naming and structure
 * - Comprehensive JSDoc comments
 * 
 * PUBLIC API UNCHANGED - all existing tests still pass!
 */

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity?: number;
}

class ShoppingCart {
  private items: Map<string, CartItem> = new Map();

  /**
   * Adds an item to the cart. If the item already exists (same ID),
   * increases its quantity instead of creating a duplicate.
   * 
   * @param item - The item to add to cart
   * 
   * @example
   * cart.add({ id: '1', name: 'Book', price: 10 });
   * cart.add({ id: '1', name: 'Book', price: 10 }); // Quantity becomes 2
   */
  add(item: CartItem): void {
    const existing = this.items.get(item.id);
    if (existing) {
      existing.quantity = (existing.quantity || 1) + 1;
    } else {
      this.items.set(item.id, { ...item, quantity: 1 });
    }
  }

  /**
   * Removes an item from the cart completely (regardless of quantity).
   * Safe to call with non-existent item IDs (no-op).
   * 
   * @param itemId - The ID of the item to remove
   * 
   * @example
   * cart.remove('1'); // Removes item with id '1'
   * cart.remove('999'); // Safe - does nothing if not found
   */
  remove(itemId: string): void {
    this.items.delete(itemId);
  }

  /**
   * Calculates the total price of all items in the cart,
   * considering quantities (price × quantity for each item).
   * 
   * @returns The total price (0 for empty cart)
   * 
   * @example
   * cart.add({ id: '1', name: 'Book', price: 10 }); // qty: 2
   * cart.add({ id: '1', name: 'Book', price: 10 });
   * cart.getTotal(); // Returns: 20 (10 × 2)
   */
  getTotal(): number {
    return this.calculateTotal();
  }

  /**
   * Returns the total number of items in the cart,
   * summing quantities of all items.
   * 
   * @returns The total item count (0 for empty cart)
   * 
   * @example
   * cart.add({ id: '1', name: 'Book', price: 10 }); // qty: 2
   * cart.add({ id: '1', name: 'Book', price: 10 });
   * cart.add({ id: '2', name: 'Pen', price: 2 });   // qty: 1
   * cart.getItemCount(); // Returns: 3 (2 + 1)
   */
  getItemCount(): number {
    return this.calculateItemCount();
  }

  /**
   * Removes all items from the cart.
   * Safe to call on an already empty cart.
   * 
   * @example
   * cart.clear();
   * cart.getItemCount(); // Returns: 0
   */
  clear(): void {
    this.items.clear();
  }

  /**
   * Retrieves a specific item from the cart by its ID.
   * 
   * @param itemId - The ID of the item to retrieve
   * @returns The cart item if found, undefined otherwise
   * 
   * @example
   * const item = cart.getItem('1');
   * if (item) {
   *   console.log(`${item.name}: $${item.price} × ${item.quantity}`);
   * }
   */
  getItem(itemId: string): CartItem | undefined {
    return this.items.get(itemId);
  }

  /**
   * Private helper: Calculates total price of all items.
   * Extracted from getTotal() for better separation of concerns.
   */
  private calculateTotal(): number {
    let total = 0;
    this.items.forEach(item => {
      total += item.price * (item.quantity || 1);
    });
    return total;
  }

  /**
   * Private helper: Calculates total item count (sum of quantities).
   * Extracted from getItemCount() for better separation of concerns.
   */
  private calculateItemCount(): number {
    let count = 0;
    this.items.forEach(item => {
      count += item.quantity || 1;
    });
    return count;
  }
}

export { ShoppingCart, CartItem };

/*
 * REFACTOR Phase Improvements:
 * 
 * ✅ All tests still pass (verified after each change)
 * ✅ Performance: Array → Map migration (O(n) → O(1) lookups)
 * ✅ Readability: Calculation logic extracted to private methods
 * ✅ Maintainability: Comprehensive JSDoc comments
 * ✅ Clean code: Better separation of concerns
 * 
 * Refactoring Strategy Applied:
 * 1. Change internal data structure (Array → Map)
 *    - Run tests after change ✅
 * 2. Extract calculation logic into private methods
 *    - Run tests after change ✅
 * 3. Add comprehensive documentation
 *    - Run tests after change ✅
 * 
 * Key Insight: Tests act as a safety net, allowing confident
 * refactoring without fear of breaking functionality.
 * 
 * PUBLIC API: Unchanged from GREEN phase
 * INTERNAL IMPLEMENTATION: Significantly improved
 * TEST SUITE: Zero modifications needed!
 */
