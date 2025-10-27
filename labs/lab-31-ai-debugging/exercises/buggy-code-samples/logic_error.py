"""
Buggy Code: Logic Error (Off-by-One)

This module demonstrates a common off-by-one error in list processing.
Use GitHub Copilot to identify and fix the bug.
"""


def process_items(items):
    """
    Process all items in a list and return their results.
    
    Args:
        items: List of items to process
        
    Returns:
        List of processed results
    """
    results = []
    
    # BUG: This loop has an off-by-one error
    for i in range(len(items) - 1):
        processed = items[i].upper() if isinstance(items[i], str) else str(items[i])
        results.append(processed)
    
    return results


def main():
    """Test the function with sample data."""
    test_data = ["apple", "banana", "cherry", "date"]
    
    print("Original items:", test_data)
    print("Processed items:", process_items(test_data))
    print(f"Expected: {len(test_data)} items, Got: {len(process_items(test_data))} items")
    
    # The output will show that one item is missing!
    # Expected output: ['APPLE', 'BANANA', 'CHERRY', 'DATE']
    # Actual output: ['APPLE', 'BANANA', 'CHERRY'] (missing 'DATE')


if __name__ == "__main__":
    main()
