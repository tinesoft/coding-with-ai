/**
 * Shopping Cart - GREEN Phase Implementation
 * 
 * This is the MINIMAL implementation to make tests pass.
 * Uses simple array storage and basic loops - no optimization yet.
 * The goal is to make tests green, not to write perfect code.
 */

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity?: number;
}

class ShoppingCart {
  private items: CartItem[] = [];

  /**
   * Adds an item to cart. If item exists, increases quantity.
   */
  add(item: CartItem): void {
    const existing = this.items.find(i => i.id === item.id);
    if (existing) {
      existing.quantity = (existing.quantity || 1) + 1;
    } else {
      this.items.push({ ...item, quantity: 1 });
    }
  }

  /**
   * Removes an item from cart by ID.
   */
  remove(itemId: string): void {
    const index = this.items.findIndex(i => i.id === itemId);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  /**
   * Calculates total price of all items (price × quantity).
   */
  getTotal(): number {
    return this.items.reduce((total, item) => {
      return total + (item.price * (item.quantity || 1));
    }, 0);
  }

  /**
   * Returns total number of items considering quantities.
   */
  getItemCount(): number {
    return this.items.reduce((count, item) => {
      return count + (item.quantity || 1);
    }, 0);
  }

  /**
   * Removes all items from cart.
   */
  clear(): void {
    this.items = [];
  }

  /**
   * Gets a specific item by ID.
   */
  getItem(itemId: string): CartItem | undefined {
    return this.items.find(i => i.id === itemId);
  }
}

export { ShoppingCart, CartItem };

/*
 * GREEN Phase Characteristics:
 * 
 * ✅ All tests pass
 * ✅ Uses simple data structures (array)
 * ✅ Linear search with find() - O(n) but straightforward
 * ✅ Basic reduce() for calculations
 * ✅ No premature optimization
 * ✅ No features beyond what tests require
 * 
 * Known Inefficiencies (to be addressed in REFACTOR):
 * - Array search is O(n) for item lookups
 * - Could use Map for O(1) lookups
 * - Calculation logic embedded in methods (not extracted)
 * - Minimal documentation
 * 
 * This is INTENTIONAL - GREEN phase focuses on making it work,
 * not making it perfect. Refactoring comes next!
 */
