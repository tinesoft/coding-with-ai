"""
Buggy Code: Silent Failure (Wrong Return Value)

This module demonstrates a silent failure where wrong results are returned.
Use GitHub Copilot to identify and fix the bug.
"""


def find_max_value(numbers):
    """
    Find the maximum value in a list of numbers.
    
    Args:
        numbers: List of numeric values
        
    Returns:
        Maximum value, or None if list is empty
    """
    if not numbers:
        return None
    
    # BUG: Wrong initialization causes silent failure for negative numbers
    max_val = 0  # Should be numbers[0] or float('-inf')
    
    for num in numbers:
        if num > max_val:
            max_val = num
    
    return max_val


def main():
    """Test the function with various inputs."""
    
    # Test 1: Positive numbers (works by accident)
    positive = [3, 7, 2, 9, 1]
    print(f"Max of {positive}: {find_max_value(positive)}")  # Correct: 9
    
    # Test 2: Negative numbers (SILENT FAILURE!)
    negative = [-5, -2, -8, -1, -10]
    result = find_max_value(negative)
    expected = -1
    print(f"Max of {negative}: {result}")  # Wrong: 0 (should be -1)
    print(f"Expected: {expected}, Got: {result}, Correct: {result == expected}")
    
    # Test 3: Mixed positive and negative (works by accident)
    mixed = [-5, 3, -2, 7, -1]
    print(f"Max of {mixed}: {find_max_value(mixed)}")  # Correct: 7
    
    # Test 4: All zeros (works by accident)
    zeros = [0, 0, 0]
    print(f"Max of {zeros}: {find_max_value(zeros)}")  # Correct: 0
    
    # Test 5: Empty list (works correctly)
    empty = []
    print(f"Max of {empty}: {find_max_value(empty)}")  # Correct: None
    
    # The bug: max_val initialized to 0 instead of first element
    # Only fails silently with all-negative numbers
    # No error thrown, just wrong results!


if __name__ == "__main__":
    main()
