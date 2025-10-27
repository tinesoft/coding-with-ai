"""
Buggy Code: Scope Issue (Variable Shadowing)

This module demonstrates a variable shadowing bug that causes wrong results.
Use GitHub Copilot to identify and fix the bug.
"""


def calculate_total_price(items):
    """
    Calculate total price of items with tax.
    
    Args:
        items: List of item prices
        
    Returns:
        Total price including 10% tax
    """
    total = 0
    tax_rate = 0.10
    
    # Calculate subtotal
    for item in items:
        total += item
    
    # BUG: Variable shadowing causes wrong calculation
    def apply_tax(total):
        # This 'total' shadows the outer 'total'
        total = total * (1 + tax_rate)
        return total
    
    # The outer 'total' is never updated!
    apply_tax(total)
    
    return total  # Returns the subtotal, not the total with tax


def main():
    """Test the function with sample data."""
    prices = [10.00, 20.00, 30.00]  # Total: 60.00
    
    result = calculate_total_price(prices)
    expected = 60.00 * 1.10  # 66.00
    
    print(f"Item prices: {prices}")
    print(f"Calculated total: ${result:.2f}")
    print(f"Expected total (with 10% tax): ${expected:.2f}")
    print(f"Bug! Missing: ${expected - result:.2f}")
    
    # The bug: apply_tax() modifies a local 'total' but doesn't return/assign it
    # Expected: $66.00
    # Actual: $60.00 (tax not applied)


if __name__ == "__main__":
    main()
