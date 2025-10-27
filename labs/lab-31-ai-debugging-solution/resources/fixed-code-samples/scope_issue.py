"""
Fixed Code: Scope Issue (Variable Shadowing) - SOLUTION

This module demonstrates the corrected version without variable shadowing.

BUGFIX (2025-10-26): Fixed variable shadowing issue where inner function's
parameter shadowed outer variable. Now properly returns and assigns the
modified value instead of modifying a shadowed local copy.
"""


def calculate_total_price(items):
    """
    Calculate total price of items with tax.
    
    Args:
        items: List of item prices
        
    Returns:
        Total price including 10% tax
        
    Bugfix: Fixed shadowing - inner function now returns value instead
    of modifying a shadowed local variable.
    """
    total = 0
    tax_rate = 0.10
    
    # Calculate subtotal
    for item in items:
        total += item
    
    # FIXED: Return the calculated value instead of shadowing
    def apply_tax(subtotal):
        return subtotal * (1 + tax_rate)
    
    # FIXED: Assign the returned value
    total = apply_tax(total)
    
    return total


def calculate_total_price_simple(items):
    """
    Simpler version without inner function.
    
    This approach eliminates the shadowing issue entirely by
    not using a nested function.
    """
    total = sum(items)  # More Pythonic than manual loop
    tax_rate = 0.10
    return total * (1 + tax_rate)


def calculate_total_price_nonlocal(items):
    """
    Version using nonlocal keyword (Python 3+).
    
    This explicitly modifies the outer scope variable.
    Less common but demonstrates the nonlocal feature.
    """
    total = 0
    tax_rate = 0.10
    
    for item in items:
        total += item
    
    def apply_tax():
        nonlocal total  # Explicitly reference outer scope variable
        total = total * (1 + tax_rate)
    
    apply_tax()
    return total


def calculate_total_price_functional(items, tax_rate=0.10):
    """
    Functional programming approach.
    
    Pure function with no mutable state - eliminates all shadowing concerns.
    """
    subtotal = sum(items)
    return subtotal * (1 + tax_rate)


def main():
    """Test the function with sample data."""
    prices = [10.00, 20.00, 30.00]  # Total: 60.00
    expected = 60.00 * 1.10  # 66.00
    
    print("=== Testing Fixed Version ===")
    print(f"Item prices: {prices}")
    
    result = calculate_total_price(prices)
    print(f"Calculated total: ${result:.2f}")
    print(f"Expected total (with 10% tax): ${expected:.2f}")
    print(f"Match: {result == expected}")
    
    # Test edge cases
    print("\n=== Edge Cases ===")
    print(f"Empty list: ${calculate_total_price([]):.2f}")
    print(f"Single item ($10): ${calculate_total_price([10.00]):.2f}")
    print(f"Large order: ${calculate_total_price([100, 200, 300]):.2f}")
    
    # Compare all approaches
    print("\n=== Comparing Approaches ===")
    test_prices = [10.00, 20.00, 30.00]
    
    result1 = calculate_total_price(test_prices)
    result2 = calculate_total_price_simple(test_prices)
    result3 = calculate_total_price_nonlocal(test_prices)
    result4 = calculate_total_price_functional(test_prices)
    
    print(f"Return value approach:   ${result1:.2f}")
    print(f"Simple approach:         ${result2:.2f}")
    print(f"Nonlocal approach:       ${result3:.2f}")
    print(f"Functional approach:     ${result4:.2f}")
    print(f"All match: {result1 == result2 == result3 == result4 == expected}")
    
    print("\n=== Key Lessons ===")
    print("1. Avoid variable shadowing by using different names")
    print("2. Return values from functions instead of modifying outer scope")
    print("3. Simpler code (no inner function) is often better")
    print("4. Use 'nonlocal' sparingly - return values are clearer")


if __name__ == "__main__":
    main()
