# Lab 22: GitHub Copilot in VS Code - Advanced Features

## Learning Objectives
By the end of this lab, you will be able to:
- Master Copilot Chat with repository context and custom instructions
- Use Copilot Edits for multi-file code changes
- Configure and use custom instructions for personalized assistance
- Apply Copilot Spaces concepts for project context organization

## Prerequisites
- VS Code installed with GitHub Copilot extensions
- GitHub Copilot subscription active
- A sample project or codebase to work with
- Completion of Lab 21 (CLI experience helpful)

## Duration: 45 minutes

---

## Exercise 1: Copilot Chat Mastery (15 minutes)

### Step 1: Install and Configure VS Code Extensions
**Objective:** Set up the complete GitHub Copilot experience in VS Code

**Required Extensions (October 2025):**
1. **GitHub Copilot** - Core code suggestions
2. **GitHub Copilot Chat** - Conversational AI assistant

**Installation:**
```bash
# Via command line
code --install-extension github.copilot
code --install-extension github.copilot-chat

# Or through VS Code Extensions marketplace
```

### Step 2: Explore Copilot Chat Features
**Objective:** Master advanced chat capabilities

**Basic Chat Usage:**
1. Open Copilot Chat panel (`Ctrl+Shift+I` or `Cmd+Shift+I`)
2. Try these example conversations:

```
You: Explain the architecture of this codebase
Copilot: [Analyzes your entire repository structure]

You: How can I optimize the database queries in this project?
Copilot: [Provides specific suggestions based on your code]

You: Create a comprehensive README for this project
Copilot: [Generates documentation based on your code]
```

**Advanced Features to Test:**
- **Repository Context**: Ask questions about your entire codebase
- **Web Search**: Get current documentation and best practices
- **Code Analysis**: Request security and performance reviews
- **Architecture Discussions**: Plan new features and refactoring

**Tasks to Complete:**
1. Ask Copilot to analyze your project's architecture
2. Request security improvements for your codebase
3. Get suggestions for performance optimization
4. Plan a new feature implementation

---

## Exercise 2: Copilot Edits - Multi-File Changes (15 minutes)

### Step 3: Master Multi-File Editing
**Objective:** Use natural language to make changes across multiple files

**Access Copilot Edits:**
1. Open Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
2. Search for "Copilot: Open Edits"
3. Or use keyboard shortcut (`Ctrl+Shift+I` and select Edits tab)

**Example Editing Tasks:**
```
Task 1: "Add TypeScript types to all API functions in this project"
- Copilot will analyze your API files
- Suggest type definitions across multiple files
- Show preview of all changes before applying

Task 2: "Refactor all React class components to functional components with hooks"
- Analyzes your React components
- Converts class-based to functional components
- Updates state management to use hooks

Task 3: "Add error handling to all async functions"
- Finds async functions across your codebase
- Adds try-catch blocks consistently
- Updates function signatures as needed
```

**Hands-on Practice:**
1. **Preparation**: Create or open a multi-file project
2. **Task**: Use Copilot Edits to make a project-wide change
3. **Review**: Examine the proposed changes carefully
4. **Apply**: Accept or modify the suggestions

**Success Criteria:**
- [ ] Successfully use Edits for multi-file changes
- [ ] Review and understand proposed modifications
- [ ] Apply changes selectively (accept some, reject others)

---

## Exercise 3: Custom Instructions Configuration (10 minutes)

### Step 4: Personalize Your AI Assistant
**Objective:** Configure Copilot to match your coding style and preferences

**Setting Up Custom Instructions:**
1. Open VS Code Settings (`Ctrl/Cmd + ,`)
2. Search for "copilot instructions"
3. Find "Github Copilot: Instructions" setting
4. Add your custom instructions

**Example Custom Instructions:**
```markdown
## Coding Style Preferences
- Use TypeScript with strict mode enabled
- Prefer functional programming patterns over object-oriented
- Always include comprehensive error handling
- Use modern ES6+ syntax and avoid jQuery
- Follow React hooks patterns, avoid class components

## Architecture Preferences  
- Prefer composition over inheritance
- Use dependency injection for testability
- Follow SOLID principles
- Implement proper separation of concerns

## Documentation Style
- Include JSDoc comments for all public functions
- Write descriptive variable names
- Add TODO comments for known technical debt
- Include example usage in documentation

## Testing Requirements
- Include unit tests for all business logic
- Use descriptive test names that explain behavior
- Mock external dependencies in tests
- Aim for high test coverage but focus on critical paths
```

**Tasks to Complete:**
1. Create custom instructions for your preferred coding style
2. Include your team's specific conventions
3. Test the instructions with a coding task
4. Refine based on the results

---

## Exercise 4: Advanced Workflows and Best Practices (5 minutes)

### Step 5: Optimize Your Copilot Workflow
**Objective:** Integrate advanced features into daily development

**Keyboard Shortcuts to Master:**
```
Ctrl+I (Cmd+I): Inline chat in editor
Ctrl+Shift+I: Open Copilot Chat panel
Tab: Accept suggestion
Esc: Dismiss suggestion
Ctrl+→ (Cmd+→): Accept word
Alt+]: Next suggestion
Alt+[: Previous suggestion
```

**Pro Tips for Better Results:**
1. **Context is Key**: Keep relevant files open when asking questions
2. **Be Specific**: Include framework versions and requirements in prompts
3. **Iterate**: Use follow-up questions to refine suggestions
4. **Review Carefully**: Always review generated code for security and logic issues

**Advanced Use Cases:**
```
1. Code Review Assistant:
   "Review this pull request for security vulnerabilities and performance issues"

2. Architecture Planning:
   "Help me design a microservices architecture for this e-commerce application"

3. Debugging Support:
   "This function is causing memory leaks. How can I fix it?"

4. Learning Assistant:
   "Explain this complex algorithm and suggest improvements"
```

---

## Success Criteria Checklist

### Chat Proficiency
- [ ] Successfully use repository-wide context in conversations
- [ ] Get meaningful architecture and optimization suggestions
- [ ] Use chat for planning and documentation tasks
- [ ] Demonstrate understanding of web search integration

### Edits Mastery
- [ ] Complete multi-file refactoring with Copilot Edits
- [ ] Preview and selectively apply suggested changes
- [ ] Handle complex cross-file dependencies
- [ ] Use natural language effectively for editing tasks

### Custom Instructions
- [ ] Configure personalized instructions for coding style
- [ ] Test instructions with real coding tasks
- [ ] Include team-specific conventions and requirements
- [ ] Demonstrate improved suggestion quality

### Workflow Integration
- [ ] Use keyboard shortcuts efficiently
- [ ] Apply advanced features to real development tasks
- [ ] Show measurable productivity improvements
- [ ] Integrate Copilot into existing development workflow

## Common Issues and Solutions

### Issue: Poor suggestion quality
**Solutions:**
- Add more context to your prompts
- Keep relevant files open in VS Code
- Use custom instructions to guide style
- Be specific about requirements and constraints

### Issue: Edits not working as expected
**Solutions:**
- Ensure you have the latest Copilot Chat extension
- Try breaking complex requests into smaller parts
- Review the preview carefully before applying
- Use more descriptive language in edit requests

### Issue: Custom instructions not being followed
**Solutions:**
- Make instructions more specific and detailed
- Test with simple examples first
- Restart VS Code after making changes
- Check for conflicting settings

## Performance Measurement

Track your productivity improvements:
- **Time to complete coding tasks**
- **Quality of generated code**
- **Reduction in context switching**
- **Improved code consistency**

## Next Steps
- Apply these techniques to your current projects
- Share custom instructions with your team
- Explore Copilot Spaces for project context organization
- Integrate advanced features into your daily workflow

---

*Lab completed! You now have advanced skills with GitHub Copilot in VS Code and can leverage its most powerful features for enhanced productivity.*