"""
Buggy Code: Integration Bug (Incorrect Library Usage)

This module demonstrates incorrect usage of the json library.
Use GitHub Copilot to identify and fix the bug.
"""

import json


def save_config(config_data, filename):
    """
    Save configuration data to a JSON file.
    
    Args:
        config_data: Dictionary of configuration settings
        filename: Path to save the JSON file
    """
    # BUG: Incorrect parameter usage - passing string instead of file object
    with open(filename, 'w') as f:
        # json.dumps() returns a string, but we should use json.dump() with file object
        json_string = json.dumps(config_data)
        # This writes the JSON string, but in an inefficient way
        f.write(json_string)


def load_config(filename):
    """
    Load configuration data from a JSON file.
    
    Args:
        filename: Path to the JSON file
        
    Returns:
        Dictionary of configuration settings
    """
    # BUG: Incorrect parameter usage - reading entire file as string
    with open(filename, 'r') as f:
        content = f.read()
        # json.loads() expects a string, but json.load() works directly with file
        return json.loads(content)


def main():
    """Test the functions with sample data."""
    config = {
        'app_name': 'MyApp',
        'version': '1.0.0',
        'settings': {
            'debug': True,
            'port': 8080
        }
    }
    
    filename = 'config.json'
    
    # These work but are inefficient due to incorrect API usage
    save_config(config, filename)
    loaded = load_config(filename)
    
    print("Original config:", config)
    print("Loaded config:", loaded)
    print("Match:", config == loaded)
    
    # The code works, but it's using the wrong methods
    # Should use json.dump() and json.load() for file objects
    # Instead of json.dumps()/json.loads() with manual read/write


if __name__ == "__main__":
    main()
