"""
Buggy Code: Runtime Error (Null/None Access)

This module demonstrates a null pointer / None access error.
Use GitHub Copilot to identify and fix the bug.
"""


def get_user_email(user_data):
    """
    Extract email from user data dictionary.
    
    Args:
        user_data: Dictionary containing user information
        
    Returns:
        User's email address in lowercase
    """
    # BUG: No null check before accessing nested data
    email = user_data['contact']['email']
    return email.lower()


def main():
    """Test the function with sample data."""
    
    # Test case 1: Valid data (works)
    valid_user = {
        'name': 'Alice',
        'contact': {
            'email': 'ALICE@EXAMPLE.COM',
            'phone': '555-1234'
        }
    }
    print("Valid user email:", get_user_email(valid_user))
    
    # Test case 2: Missing contact (crashes!)
    incomplete_user = {
        'name': 'Bob'
        # 'contact' key is missing
    }
    
    try:
        print("Incomplete user email:", get_user_email(incomplete_user))
    except KeyError as e:
        print(f"ERROR: {type(e).__name__} - {e}")
    
    # Test case 3: None contact (crashes!)
    none_contact_user = {
        'name': 'Charlie',
        'contact': None
    }
    
    try:
        print("None contact user email:", get_user_email(none_contact_user))
    except (TypeError, AttributeError) as e:
        print(f"ERROR: {type(e).__name__} - {e}")


if __name__ == "__main__":
    main()
