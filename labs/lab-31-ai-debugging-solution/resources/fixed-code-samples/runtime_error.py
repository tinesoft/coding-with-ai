"""
Fixed Code: Runtime Error (Null/None Access) - SOLUTION

This module demonstrates the corrected version with proper null safety.

BUGFIX (2025-10-26): Added null safety checks at each level of dictionary
access to prevent KeyError and TypeError when data is missing or None.
Uses .get() method for safe dictionary access with default values.
"""


def get_user_email(user_data):
    """
    Extract email from user data dictionary with null safety.
    
    Args:
        user_data: Dictionary containing user information
        
    Returns:
        User's email address in lowercase, or None if not available
        
    Bugfix: Added null checks to prevent crashes when data is missing.
    """
    # Guard clause: check if user_data itself is None or empty
    if not user_data:
        return None
    
    # Safe access using .get() - returns None if 'contact' key doesn't exist
    contact = user_data.get('contact')
    if not contact:
        return None
    
    # Safe access for nested email
    email = contact.get('email')
    if not email:
        return None
    
    # Only call .lower() after confirming email exists and is a string
    return email.lower()


def get_user_email_with_exceptions(user_data):
    """
    Alternative approach using exception handling.
    
    This is more Pythonic (EAFP - Easier to Ask for Forgiveness than Permission)
    but can be less explicit about what went wrong.
    """
    try:
        return user_data['contact']['email'].lower()
    except (KeyError, TypeError, AttributeError):
        return None
    

def get_user_email_with_custom_error(user_data):
    """
    Version that raises custom exceptions with helpful messages.
    
    Useful when you want to distinguish between different failure modes.
    """
    if not user_data:
        raise ValueError("user_data cannot be None or empty")
    
    contact = user_data.get('contact')
    if contact is None:
        raise ValueError("Missing 'contact' field in user_data")
    
    email = contact.get('email')
    if email is None:
        raise ValueError("Missing 'email' field in contact information")
    
    if not isinstance(email, str):
        raise TypeError(f"Email must be a string, got {type(email).__name__}")
    
    return email.lower()


def main():
    """Test the function with sample data."""
    
    print("=== Testing Fixed Version ===")
    
    # Test case 1: Valid data (works)
    valid_user = {
        'name': 'Alice',
        'contact': {
            'email': 'ALICE@EXAMPLE.COM',
            'phone': '555-1234'
        }
    }
    print("Valid user email:", get_user_email(valid_user))
    
    # Test case 2: Missing contact (now handled gracefully)
    incomplete_user = {
        'name': 'Bob'
    }
    print("Incomplete user email:", get_user_email(incomplete_user))  # Returns None
    
    # Test case 3: None contact (now handled gracefully)
    none_contact_user = {
        'name': 'Charlie',
        'contact': None
    }
    print("None contact user email:", get_user_email(none_contact_user))  # Returns None
    
    # Test case 4: None user_data
    print("None user_data:", get_user_email(None))  # Returns None
    
    # Test case 5: Empty dict
    print("Empty dict:", get_user_email({}))  # Returns None
    
    print("\n=== Edge Cases ===")
    
    # Missing email in contact
    no_email = {'contact': {'phone': '555-1234'}}
    print("Contact without email:", get_user_email(no_email))
    
    # Empty email string
    empty_email = {'contact': {'email': ''}}
    print("Empty email string:", get_user_email(empty_email))  # Returns None (falsy)
    
    # Email as non-string
    non_string_email = {'contact': {'email': 12345}}
    try:
        result = get_user_email(non_string_email)
        print(f"Non-string email: {result}")
    except AttributeError as e:
        print(f"Non-string email caused error (might want to add type check): {e}")
    
    print("\n=== Comparing Approaches ===")
    
    # All approaches should handle None gracefully
    test_cases = [valid_user, incomplete_user, none_contact_user, None]
    
    for i, user in enumerate(test_cases, 1):
        result1 = get_user_email(user)
        result2 = get_user_email_with_exceptions(user)
        print(f"Test {i}: Guard clauses={result1}, Exceptions={result2}, Match={result1 == result2}")


if __name__ == "__main__":
    main()
