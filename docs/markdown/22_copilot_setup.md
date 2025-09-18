<!-- .slide -->

# GitHub Copilot Setup & Demo

## **Getting Started with GitHub Copilot**

### **Prerequisites**
- **GitHub Account**: Personal or enterprise
- **VS Code or Compatible IDE**: JetBrains, Neovim, etc.
- **Active Subscription**: Individual ($10/month) or Enterprise

### **Installation Steps**
1. **Install the Extension**: GitHub Copilot for VS Code
2. **Sign In**: Authenticate with your GitHub account
3. **Activate**: Verify your subscription status
4. **Configure**: Adjust settings for your preferences

##--##

<!-- .slide: class="with-code" -->

# Copilot in Action: Live Demo

## **Code Completion Example**

```typescript
// Type this comment:
// Function to validate email address

// Copilot suggests:
function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
```

## **Function Generation**
```typescript
// Create a React hook for local storage
// Copilot generates complete hook implementation
```

##--##

<!-- .slide: class="with-code" -->

# Advanced Copilot Features

## **1. Copilot Chat**
```
Explain this regex pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
```

## **2. Code Explanation**
```
/explain - Get explanations for complex code
/fix - Suggest fixes for bugs
/tests - Generate unit tests
```

## **3. Context Awareness**
- **File Context**: Understands current file structure
- **Project Context**: Learns from your codebase patterns
- **Comment Context**: Responds to natural language comments

Notes:
GitHub Copilot is more than just autocomplete. It's a conversational coding partner that can explain code, suggest improvements, generate tests, and help with debugging. The key is learning to work with it as a collaborative tool.
