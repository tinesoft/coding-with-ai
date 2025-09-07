# Lab 02 Solution: Development Environment Setup

## Solution Overview

This lab focused on setting up a comprehensive AI-powered development environment. Here's how to approach each step:

## 1. IDE Configuration

### VS Code Extensions (Recommended Setup)
```bash
# Install essential AI extensions
code --install-extension GitHub.copilot
code --install-extension GitHub.copilot-chat
code --install-extension ms-vscode.vscode-ai-toolkit
code --install-extension TabNine.tabnine-vscode
```

### Settings Configuration
Create or update your VS Code `settings.json`:
```json
{
  "github.copilot.enable": {
    "*": true,
    "yaml": false,
    "plaintext": false,
    "markdown": true
  },
  "github.copilot.inlineSuggest.enable": true,
  "github.copilot.chat.enable": true,
  "editor.inlineSuggest.enabled": true,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  }
}
```

## 2. AI Tool Setup

### GitHub Copilot Setup
1. Ensure you have an active GitHub Copilot subscription
2. Authenticate with your GitHub account in VS Code
3. Test with a simple function:
```javascript
// Type: "function to calculate factorial" and let Copilot suggest
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
```

### Alternative AI Tools
If Copilot isn't available, configure TabNine:
```bash
# TabNine will prompt for configuration on first use
# Choose local model for privacy or cloud for better suggestions
```

## 3. Terminal and CLI Setup

### Install AI CLI Tools
```bash
# GitHub CLI with Copilot extension
gh extension install github/gh-copilot

# Node.js AI tools
npm install -g @githubnext/github-copilot-cli
npm install -g gpt-commit-cli
```

### Shell Integration
Add to your `.bashrc` or `.zshrc`:
```bash
# GitHub Copilot CLI aliases
eval "$(github-copilot-cli alias -- "$0")"

# AI-powered git commits
alias gptcommit='gpt-commit'
```

## 4. Project Structure Setup

### Create Sample Project
```bash
mkdir ai-coding-practice
cd ai-coding-practice
npm init -y
git init

# Add basic dependencies
npm install express jest eslint prettier
npm install -D nodemon
```

### Configure Development Tools
```json
// package.json scripts section
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest",
    "lint": "eslint .",
    "format": "prettier --write ."
  }
}
```

## 5. Testing the Setup

### Create Test Files
Test your AI setup with these files:

**index.js**
```javascript
// Ask Copilot to generate an Express server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'AI-powered development environment ready!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

**utils.js**
```javascript
// Test AI suggestions for utility functions
// Type comments and let AI generate implementations

// Function to validate email format
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to format date to readable string
function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date));
}

module.exports = { validateEmail, formatDate };
```

## Best Practices Discovered

### 1. Effective Prompting
- Use descriptive comments before functions
- Include expected input/output in comments
- Specify edge cases and error handling needs

### 2. Code Review Process
- Always review AI-generated code for correctness
- Test generated functions before committing
- Understand the logic, don't just copy-paste

### 3. Tool Integration
- Use multiple AI tools for different strengths
- Configure tools to work together seamlessly
- Establish consistent settings across team

## Troubleshooting Common Issues

### Copilot Not Working
1. Check authentication: Run `gh auth status`
2. Verify subscription: Check GitHub account settings
3. Restart VS Code and reload window

### Slow Suggestions
1. Check internet connection
2. Restart AI service in VS Code
3. Clear VS Code cache if necessary

### Permission Issues
1. Ensure proper GitHub permissions
2. Check organization settings if in enterprise
3. Verify VS Code extension permissions

## Next Steps

With your environment set up, you're ready to:
1. Practice AI-assisted coding techniques
2. Explore advanced prompting strategies
3. Integrate AI tools into your daily workflow
4. Experiment with different AI models and tools

Remember: The key to success with AI coding tools is practice and understanding their capabilities and limitations.
