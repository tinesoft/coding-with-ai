<!-- .slide: class="transition" -->
# GitHub Copilot Deep Dive
## Mastering AI-Assisted Development

##--##

<!-- .slide: -->
# GitHub Copilot Overview

## Your AI Pair Programming Partner

<br>

### **What is GitHub Copilot?**
- AI-powered development platform that integrates multiple model backends (OpenAI, Anthropic, Google partners) to provide context-aware completion, chat, and multi-file editing
- Context-aware code completion, chat, and multi-file editing
- Repository-wide analysis and planning capabilities
- Integrated with VS Code, JetBrains, CLI, and GitHub.com

### **Why Choose GitHub Copilot?**
- **Market Leader**: 1.3M+ paid subscribers, trusted by Fortune 500
- **Enterprise Ready**: SOC 2 compliance, audit logs, content filtering
- **Multi-Modal**: Chat, Edits, Workspace, and custom instructions
- **Extensive Integration**: Native GitHub ecosystem integration

Notes:
GitHub Copilot represents the market leader for AI-assisted development, offering broad model backend integration and enterprise-grade reliability. See the October 2025 research snapshot for vendor links and SKUs: `specs/002-module-2-ai-coding-tools/october-2025-comprehensive-update.md`

##--##

<!-- .slide: -->
# GitHub Copilot Architecture

## Three Complementary Modes

<br>

### **1. Copilot Chat** 💬
Multi-turn conversations with repository context and web search

### **2. Copilot Edits** ✏️
Multi-file editing with natural language instructions and preview

### **3. Copilot Spaces** 🤖
Organized context and knowledge for specific development tasks

<br>

> **Key Insight**: Each mode serves different development scenarios and can be used together for maximum productivity

Notes:
Understanding when and how to use each mode is crucial for effective AI-assisted development workflows.

##--##

<!-- .slide: -->
# Installation & Setup

## Getting Started with GitHub Copilot

<br>

### **Prerequisites**
- GitHub account with Copilot subscription (Pro, Pro+, Business, Enterprise)
- Supported IDE (VS Code, JetBrains, Neovim, etc.)
- Node.js 22+ and npm 10+ for CLI installation

### **Installation Options**
1. **VS Code Extension**: Install "GitHub Copilot" and "GitHub Copilot Chat"
2. **CLI Tool**: `npm install -g @github/copilot`
3. **JetBrains Plugin**: Install from Plugin Marketplace
4. **Other IDEs**: Neovim, Emacs, and more supported

Notes:
We'll focus primarily on VS Code extension and CLI installations as they represent the most common usage patterns.

##--##

<!-- .slide: -->
# Copilot Chat

## Multi-Turn Conversational AI Assistant

<br>

### **When to Use Copilot Chat**
- Complex problem-solving and architecture discussions
- Code review and security analysis
- Learning new frameworks or best practices
- Debugging with full repository context

### **Key Features**
- **Repository Context**: Analyzes entire codebase for relevant answers
- **Web Search**: Access to current documentation and Stack Overflow
- **Custom Instructions**: Personalized responses based on your preferences
- **Agents**: Specialized assistants for terminal, VS Code, and GitHub

### **Example Usage**
```
You: "How do I implement a binary search in Python?"
Copilot: [Provides implementation with explanation]
You: "Can you make it recursive?"
Copilot: [Modifies to recursive approach]
```

Notes:
Ask mode is perfect for learning and exploration, providing explanations and context that help you understand the "why" behind code suggestions.

##--##

<!-- .slide: -->
# Copilot Edits

## Multi-File Natural Language Editing

<br>

### **When to Use Copilot Edits**
- Refactoring across multiple files
- Implementing features with natural language descriptions
- Making consistent changes across your codebase
- Converting between frameworks or languages

### **Key Features**
- **Multi-File Editing**: Modify multiple files simultaneously
- **Natural Language Instructions**: Describe changes in plain English
- **Preview Mode**: Review all changes before applying
- **Contextual Understanding**: Analyzes file relationships and dependencies

### **Example Workflow**
1. Open Copilot Edits panel (`Ctrl+Shift+I`)
2. Describe desired changes: "Add TypeScript types to all API functions"
3. Review proposed changes across multiple files
4. Accept or reject individual changes

Notes:
Edit mode transforms your coding experience by predicting what you want to write next, significantly speeding up development.

##--##

<!-- .slide: -->
# Copilot Spaces

## Organized Context for Development Tasks

<br>

### **When to Use Copilot Spaces**
- Planning new features or major changes
- Understanding large or unfamiliar codebases
- Creating comprehensive implementation plans
- Coordinating changes across multiple systems
- Implementing feature specifications
- Batch operations across codebase

### **Key Features**
- **Context Organization**: Centralize relevant code, docs, and specs in one place
- **Focused Assistance**: Ground Copilot responses in project-specific context
- **Team Collaboration**: Share spaces to reduce handoffs and repeated questions
- **Knowledge Persistence**: Maintain context across development sessions

### **Example Workflow**
1. Create a space at github.com/copilot/spaces
2. Add relevant code files, documentation, and specifications
3. Provide context instructions for the development task
4. Ask Copilot questions grounded in your space's context
5. Share with team members for consistent knowledge access

Notes:
Copilot Spaces help organize and centralize relevant content for specific development tasks, enabling better context-aware assistance from Copilot.

##--##

<!-- .slide: -->
# Custom Instructions

## Personalizing Your AI Assistant

<br>

### **What are Custom Instructions?**
Persistent preferences that shape how Copilot responds to you

### **Setup Process**
1. Open VS Code settings (Ctrl/Cmd + ,)
2. Search for "copilot instructions"
3. Add your preferences in natural language
4. Save and restart VS Code for full effect

### **Example Instructions**
- "Use TypeScript with strict mode and functional programming patterns"
- "Always include error handling and input validation"
- "Prefer modern ES6+ syntax and avoid jQuery"
- "Follow React hooks patterns and avoid class components"

### **Benefits**
- **Consistent Style**: Maintains your coding preferences across projects
- **Domain Knowledge**: Incorporates your specific frameworks and patterns
- **Team Standards**: Enforces organizational coding guidelines

Notes:
Custom instructions transform Copilot from a generic assistant into a personalized pair programmer that understands your specific preferences and constraints.

##--##

<!-- .slide: -->
# Workflow Integration Patterns

## Combining Modes Effectively

<br>

### **Discovery → Implementation → Refinement**
1. **Ask Mode**: "How should I approach this problem?"
2. **Edit Mode**: Implement solution with inline assistance
3. **Agent Mode**: Refactor and optimize across files

### **Learning → Doing → Scaling**
1. **Ask Mode**: Learn new concepts and patterns
2. **Edit Mode**: Practice with guided assistance
3. **Agent Mode**: Apply to larger-scale implementations

### **Planning → Coding → Review**
1. **Agent Mode**: Generate implementation plan
2. **Edit Mode**: Write code with contextual help
3. **Ask Mode**: Review and explain complex sections

Notes:
The most effective developers use all three modes synergistically, leveraging each mode's strengths for different phases of development.

##--##

<!-- .slide: -->
# Restore Points & Version Control

## Safe AI Experimentation

<br>

### **GitHub Copilot Chat Restore Points**
- **Automatic Snapshots**: Save state before major changes
- **Manual Checkpoints**: Create restore points on demand
- **Quick Rollback**: Revert to previous state instantly
- **Branch Integration**: Works with Git branching strategies

### **Best Practices**
- Create restore points before experimental changes
- Use descriptive names for manual checkpoints
- Combine with Git commits for comprehensive versioning
- Test AI-generated code before committing

### **Example Workflow**
```bash
# Create restore point
copilot restore create "before-refactoring"

# Make AI-assisted changes
copilot agent "refactor for performance"

# If issues arise, restore
copilot restore apply "before-refactoring"
```

Notes:
Restore points provide safety nets for AI experimentation, allowing you to explore solutions without fear of breaking working code.

##--##

<!-- .slide: -->
# Performance Optimization

## Getting the Most from GitHub Copilot

<br>

### **Context Optimization**
- **File Organization**: Keep related files open for better context
- **Meaningful Names**: Use descriptive variable and function names
- **Clear Comments**: Write intent-revealing comments
- **Project Structure**: Maintain consistent architecture patterns

### **Prompt Engineering for Code**
- **Be Specific**: Detailed requirements get better results
- **Provide Examples**: Show expected input/output patterns
- **Use Standards**: Reference coding conventions and style guides
- **Iterate Gradually**: Build complexity step by step

### **Performance Monitoring**
- Track code generation accuracy
- Monitor suggestion acceptance rates
- Measure development speed improvements
- Assess code quality and maintainability

Notes:
Optimizing your interaction with Copilot significantly improves both the quality of suggestions and your overall development velocity.

##--##

<!-- .slide: class="exercice" --> 
# Exercice 1: GitHub Copilot CLI
## Lab 21

<br>

### 👉🏾 Follow **instructions** in

### `labs/lab-21-copilot-cli/README.md`

Notes:
- Follow the instructions in the lab README.md for detailed steps.

##--##

<!-- .slide: class="exercice" --> 
# Exercice 1: GitHub Copilot CLI
## Lab 21

<br>

### 💡 Read **solution** at

### `labs/lab-21-copilot-cli-solution/README.md`

Notes:
- Read the lab README.md for example of solutions.

##--##

<!-- .slide: class="exercice" --> 
# Exercice 2: GitHub Copilot VS Code
## Lab 22

<br>

### 👉🏾 Follow **instructions** in

### `labs/lab-22-copilot-vscode/README.md`

Notes:
- Follow the instructions in the lab README.md for detailed steps.

##--##

<!-- .slide: class="exercice" --> 
# Exercice 2: GitHub Copilot VS Code
## Lab 22

<br>

### 💡 Read **solution** at

### `labs/lab-22-copilot-vscode-solution/README.md`

Notes:
- Read the lab README.md for example of solutions.

##--##

<!-- .slide: -->
# Key Takeaways

## GitHub Copilot Mastery

<br>

### **✅ Multi-Modal Proficiency**
- Ask mode for learning and exploration
- Edit mode for coding acceleration
- Agent mode for complex task automation

### **✅ Safe Experimentation**
- Restore points for risk-free exploration
- Version control integration for comprehensive safety
- Iterative refinement with human oversight

### **✅ Performance Optimization**
- Context awareness for better suggestions
- Prompt engineering for specific results
- Custom agents for specialized capabilities

### **✅ Next Steps**
- Advanced AI model comparison and selection
- Project-specific agent instruction files
- Enterprise deployment considerations

Notes:
You now have comprehensive GitHub Copilot skills that will serve as the foundation for all subsequent AI-assisted development activities.