"""
Fixed Code: Integration Bug (Incorrect Library Usage) - SOLUTION

This module demonstrates the correct way to use json.dump()/load().

BUGFIX (2025-10-26): Changed from json.dumps()/json.loads() with manual
file write/read to json.dump()/json.load() which work directly with file
objects. This is more efficient and idiomatic.
"""

import json


def save_config(config_data, filename):
    """
    Save configuration data to a JSON file (efficient method).
    
    Args:
        config_data: Dictionary of configuration settings
        filename: Path to save the JSON file
        
    Bugfix: Now uses json.dump() instead of json.dumps() + manual write.
    This is more efficient as it writes directly to the file object.
    """
    with open(filename, 'w') as f:
        # FIXED: Use json.dump() which writes directly to file object
        # Added indent=2 for human-readable formatting
        json.dump(config_data, f, indent=2)


def load_config(filename):
    """
    Load configuration data from a JSON file (efficient method).
    
    Args:
        filename: Path to the JSON file
        
    Returns:
        Dictionary of configuration settings
        
    Bugfix: Now uses json.load() instead of f.read() + json.loads().
    This is more efficient as it reads directly from the file object.
    """
    with open(filename, 'r') as f:
        # FIXED: Use json.load() which reads directly from file object
        return json.load(f)


def save_config_old_way(config_data, filename):
    """
    Original (inefficient) approach for comparison.
    
    This works but is not idiomatic - uses string conversion unnecessarily.
    """
    with open(filename, 'w') as f:
        json_string = json.dumps(config_data, indent=2)
        f.write(json_string)


def load_config_old_way(filename):
    """
    Original (inefficient) approach for comparison.
    
    This works but is not idiomatic - reads entire file as string first.
    """
    with open(filename, 'r') as f:
        content = f.read()
        return json.loads(content)


def main():
    """Test the functions with sample data."""
    config = {
        'app_name': 'MyApp',
        'version': '1.0.0',
        'settings': {
            'debug': True,
            'port': 8080,
            'features': ['auth', 'api', 'websocket']
        }
    }
    
    filename = 'config.json'
    
    print("=== Testing Fixed Version ===")
    
    # Save and load with correct method
    save_config(config, filename)
    loaded = load_config(filename)
    
    print("Original config:", config)
    print("Loaded config:", loaded)
    print("Match:", config == loaded)
    
    # Show file content
    print("\n=== Generated JSON File ===")
    with open(filename, 'r') as f:
        print(f.read())
    
    print("\n=== Comparing Old vs New Method ===")
    
    # Test both approaches
    old_filename = 'config_old.json'
    new_filename = 'config_new.json'
    
    save_config_old_way(config, old_filename)
    save_config(config, new_filename)
    
    # Both should produce identical results
    loaded_old = load_config_old_way(old_filename)
    loaded_new = load_config(new_filename)
    
    print(f"Old method result: {loaded_old}")
    print(f"New method result: {loaded_new}")
    print(f"Results match: {loaded_old == loaded_new}")
    
    print("\n=== Key Lessons ===")
    print("1. json.dump(data, file) - writes directly to file object")
    print("2. json.load(file) - reads directly from file object")
    print("3. json.dumps(data) -> str - converts to JSON string")
    print("4. json.loads(json_str) -> dict - parses JSON string")
    print("5. Use dump/load for files, dumps/loads for strings")
    print("6. Always check library documentation for correct API usage")
    
    # Clean up
    import os
    for f in [filename, old_filename, new_filename]:
        if os.path.exists(f):
            os.remove(f)
    print("\nTest files cleaned up.")


if __name__ == "__main__":
    main()
