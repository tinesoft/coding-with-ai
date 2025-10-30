import { describe, it, expect, beforeEach } from 'vitest';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity?: number;
}

// ShoppingCart class does not exist yet - these tests will fail
class ShoppingCart {
  // Implementation will be added in GREEN phase
}

describe('ShoppingCart', () => {
  let cart: ShoppingCart;

  beforeEach(() => {
    cart = new ShoppingCart();
  });

  describe('add', () => {
    it('should add a new item to cart', () => {
      cart.add({ id: '1', name: 'Book', price: 10 });
      expect(cart.getItemCount()).toBe(1);
    });

    it('should increase quantity when adding same item twice', () => {
      cart.add({ id: '1', name: 'Book', price: 10 });
      cart.add({ id: '1', name: 'Book', price: 10 });
      const item = cart.getItem('1');
      expect(item?.quantity).toBe(2);
    });

    it('should add different items separately', () => {
      cart.add({ id: '1', name: 'Book', price: 10 });
      cart.add({ id: '2', name: 'Pen', price: 2 });
      expect(cart.getItemCount()).toBe(2);
    });
  });

  describe('remove', () => {
    it('should remove item from cart', () => {
      cart.add({ id: '1', name: 'Book', price: 10 });
      cart.remove('1');
      expect(cart.getItemCount()).toBe(0);
    });

    it('should not throw error when removing non-existent item', () => {
      expect(() => cart.remove('999')).not.toThrow();
    });

    it('should remove item regardless of quantity', () => {
      cart.add({ id: '1', name: 'Book', price: 10 });
      cart.add({ id: '1', name: 'Book', price: 10 }); // quantity: 2
      cart.remove('1');
      expect(cart.getItem('1')).toBeUndefined();
    });
  });

  describe('getTotal', () => {
    it('should return 0 for empty cart', () => {
      expect(cart.getTotal()).toBe(0);
    });

    it('should calculate total for single item', () => {
      cart.add({ id: '1', name: 'Book', price: 10 });
      expect(cart.getTotal()).toBe(10);
    });

    it('should calculate total considering quantities', () => {
      cart.add({ id: '1', name: 'Book', price: 10 });
      cart.add({ id: '1', name: 'Book', price: 10 }); // quantity: 2
      expect(cart.getTotal()).toBe(20); // 10 × 2
    });

    it('should calculate total for multiple different items', () => {
      cart.add({ id: '1', name: 'Book', price: 10 });
      cart.add({ id: '2', name: 'Pen', price: 2 });
      cart.add({ id: '2', name: 'Pen', price: 2 }); // quantity: 2
      expect(cart.getTotal()).toBe(14); // (10 × 1) + (2 × 2)
    });
  });

  describe('getItemCount', () => {
    it('should return 0 for empty cart', () => {
      expect(cart.getItemCount()).toBe(0);
    });

    it('should return total quantity of all items', () => {
      cart.add({ id: '1', name: 'Book', price: 10 });
      cart.add({ id: '1', name: 'Book', price: 10 }); // quantity: 2
      cart.add({ id: '2', name: 'Pen', price: 2 }); // quantity: 1
      expect(cart.getItemCount()).toBe(3); // 2 + 1
    });
  });

  describe('clear', () => {
    it('should remove all items from cart', () => {
      cart.add({ id: '1', name: 'Book', price: 10 });
      cart.add({ id: '2', name: 'Pen', price: 2 });
      cart.clear();
      expect(cart.getItemCount()).toBe(0);
      expect(cart.getTotal()).toBe(0);
    });

    it('should be safe to call on empty cart', () => {
      expect(() => cart.clear()).not.toThrow();
      expect(cart.getItemCount()).toBe(0);
    });
  });

  describe('getItem', () => {
    it('should return item by id', () => {
      cart.add({ id: '1', name: 'Book', price: 10 });
      const item = cart.getItem('1');
      expect(item).toBeDefined();
      expect(item?.name).toBe('Book');
    });

    it('should return undefined for non-existent item', () => {
      expect(cart.getItem('999')).toBeUndefined();
    });
  });
});

// Expected test results when running this file:
// ❌ All tests fail with "cart.add is not a function" or similar
// This confirms tests are failing for the RIGHT reason (missing implementation)
