"""
Fixed Code: Silent Failure (Wrong Return Value) - SOLUTION

This module demonstrates the correct initialization for finding maximum values.

BUGFIX (2025-10-26): Changed max_val initialization from 0 to numbers[0]
to correctly handle all-negative number lists. The bug caused silent failure
because no error was thrown - just wrong results.
"""


def find_max_value(numbers):
    """
    Find the maximum value in a list of numbers.
    
    Args:
        numbers: List of numeric values
        
    Returns:
        Maximum value, or None if list is empty
        
    Bugfix: Fixed initialization - now uses numbers[0] instead of 0,
    which correctly handles all-negative numbers.
    """
    if not numbers:
        return None
    
    # FIXED: Initialize with first element, not 0
    max_val = numbers[0]
    
    for num in numbers:
        if num > max_val:
            max_val = num
    
    return max_val


def find_max_value_builtin(numbers):
    """
    Pythonic version using built-in max() function.
    
    This is the recommended approach - Python's built-in handles
    all edge cases correctly and is optimized.
    """
    if not numbers:
        return None
    
    return max(numbers)


def find_max_value_infinity(numbers):
    """
    Alternative using negative infinity as initial value.
    
    This ensures any number (even very negative) will be greater
    than the initial value.
    """
    if not numbers:
        return None
    
    max_val = float('-inf')
    
    for num in numbers:
        if num > max_val:
            max_val = num
    
    return max_val


def find_max_value_functional(numbers):
    """
    Functional programming approach using reduce.
    
    This explicitly shows the comparison logic.
    """
    if not numbers:
        return None
    
    from functools import reduce
    return reduce(lambda a, b: a if a > b else b, numbers)


def main():
    """Test the function with various inputs."""
    
    print("=== Testing Fixed Version ===")
    
    # Test 1: Positive numbers
    positive = [3, 7, 2, 9, 1]
    print(f"Max of {positive}: {find_max_value(positive)}")  # Correct: 9
    
    # Test 2: Negative numbers (CRITICAL TEST - was failing before)
    negative = [-5, -2, -8, -1, -10]
    result = find_max_value(negative)
    expected = -1
    print(f"Max of {negative}: {result}")
    print(f"Expected: {expected}, Got: {result}, Correct: {result == expected} ✓")
    
    # Test 3: Mixed positive and negative
    mixed = [-5, 3, -2, 7, -1]
    print(f"Max of {mixed}: {find_max_value(mixed)}")  # Correct: 7
    
    # Test 4: All zeros
    zeros = [0, 0, 0]
    print(f"Max of {zeros}: {find_max_value(zeros)}")  # Correct: 0
    
    # Test 5: Empty list
    empty = []
    print(f"Max of {empty}: {find_max_value(empty)}")  # Correct: None
    
    # Test 6: Single element
    single = [-42]
    print(f"Max of {single}: {find_max_value(single)}")  # Correct: -42
    
    print("\n=== Edge Cases ===")
    
    # Very large numbers
    large = [1e10, 1e11, 1e12]
    print(f"Max of large numbers: {find_max_value(large)}")
    
    # Very small (negative) numbers
    very_negative = [-1e10, -1e11, -1e12]
    print(f"Max of very negative numbers: {find_max_value(very_negative)}")
    
    # Mixed with zero
    with_zero = [-5, 0, -3]
    print(f"Max of {with_zero}: {find_max_value(with_zero)}")  # Should be 0
    
    print("\n=== Comparing Approaches ===")
    
    test_cases = [
        [3, 7, 2, 9, 1],
        [-5, -2, -8, -1, -10],
        [-5, 3, -2, 7, -1],
        [0],
        [-42]
    ]
    
    for nums in test_cases:
        r1 = find_max_value(nums)
        r2 = find_max_value_builtin(nums)
        r3 = find_max_value_infinity(nums)
        r4 = find_max_value_functional(nums)
        
        match = (r1 == r2 == r3 == r4)
        print(f"{str(nums):30} -> {r1:8} (all approaches match: {match})")
    
    print("\n=== Key Lessons ===")
    print("1. Initialize with first element: max_val = numbers[0]")
    print("2. Or use sentinel value: max_val = float('-inf')")
    print("3. Prefer built-in functions when available: max(numbers)")
    print("4. Silent failures are dangerous - always test edge cases")
    print("5. Test with: empty, single, all positive, all negative, mixed, zeros")


if __name__ == "__main__":
    main()
