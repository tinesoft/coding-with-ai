"""
Fixed Code: Logic Error (Off-by-One) - SOLUTION

This module demonstrates the corrected version of the off-by-one error.

BUGFIX (2025-10-26): Removed incorrect '-1' from range() call that caused
the loop to skip the last element. Changed from range(len(items) - 1) to
range(len(items)) to process all items in the list.
"""


def process_items(items):
    """
    Process all items in a list and return their results.
    
    Args:
        items: List of items to process
        
    Returns:
        List of processed results
        
    Bugfix: Fixed off-by-one error in loop range.
    """
    results = []
    
    # FIXED: Removed the '-1' that was skipping the last element
    for i in range(len(items)):
        processed = items[i].upper() if isinstance(items[i], str) else str(items[i])
        results.append(processed)
    
    return results


def process_items_pythonic(items):
    """
    More Pythonic version without index management.
    
    This approach eliminates the entire class of off-by-one errors
    by iterating directly over items instead of indices.
    """
    results = []
    for item in items:
        processed = item.upper() if isinstance(item, str) else str(item)
        results.append(processed)
    return results


def process_items_list_comprehension(items):
    """
    Most Pythonic version using list comprehension.
    
    Concise and eliminates manual loop management entirely.
    """
    return [item.upper() if isinstance(item, str) else str(item) for item in items]


def main():
    """Test the function with sample data."""
    test_data = ["apple", "banana", "cherry", "date"]
    
    print("=== Testing Fixed Version ===")
    print("Original items:", test_data)
    print("Processed items:", process_items(test_data))
    print(f"Expected: {len(test_data)} items, Got: {len(process_items(test_data))} items")
    
    # Now all items are processed correctly
    print("\nExpected output: ['APPLE', 'BANANA', 'CHERRY', 'DATE']")
    print("Actual output:  ", process_items(test_data))
    
    # Test edge cases
    print("\n=== Edge Cases ===")
    print("Empty list:", process_items([]))
    print("Single item:", process_items(["single"]))
    print("Numbers:", process_items([1, 2, 3]))
    
    # Compare all three approaches
    print("\n=== Comparing Approaches ===")
    print("Index-based:         ", process_items(test_data))
    print("Direct iteration:    ", process_items_pythonic(test_data))
    print("List comprehension:  ", process_items_list_comprehension(test_data))
    print("All match:", all([
        process_items(test_data) == process_items_pythonic(test_data),
        process_items(test_data) == process_items_list_comprehension(test_data)
    ]))


if __name__ == "__main__":
    main()
