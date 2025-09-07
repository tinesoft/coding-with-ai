# Lab 02: AI Tool Setup and Comparison

## Objectives
- Set up and configure GitHub Copilot
- Compare multiple AI coding tools
- Experience different AI interaction patterns
- Understand tool selection criteria

## Instructions

### Part 1: GitHub Copilot Setup (15 minutes)

1. **Install GitHub Copilot**
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X)
   - Search for "GitHub Copilot"
   - Install the official extension

2. **Authentication**
   - Sign in with your GitHub account
   - Verify subscription status (individual or enterprise)
   - Check that Copilot is active (status bar indicator)

3. **Configuration**
   - Open VS Code settings (Ctrl+,)
   - Search for "copilot"
   - Configure preferences:
     - Enable/disable suggestions
     - Set suggestion trigger
     - Configure languages

4. **First Test**
   ```typescript
   // Create a TypeScript file and type this comment:
   // Function to calculate fibonacci sequence
   
   // Let Copilot suggest the implementation
   // Press Tab to accept suggestions
   ```

### Part 2: Tool Comparison Exercise (20 minutes)

**Task**: Create a simple todo application component

**Tools to Compare**:
- GitHub Copilot (in VS Code)
- ChatGPT (web interface)
- Claude (web interface)
- Cursor (if available)

**Comparison Criteria**:
For each tool, request the same task and evaluate:

1. **Code Quality**
   - Syntax correctness
   - Best practices adherence
   - Error handling

2. **Completeness**
   - Does it include TypeScript types?
   - Are there proper imports?
   - Is styling included?

3. **Documentation**
   - Comments and JSDoc
   - README or usage examples
   - Explanation quality

4. **Iteration Capability**
   - Can you refine the request?
   - How well does it handle modifications?
   - Context retention

**Task Prompt**:
```
Create a React Todo component in TypeScript with the following features:
- Add new todos
- Mark todos as complete/incomplete
- Delete todos
- Filter by all/active/completed
- Use proper TypeScript interfaces
- Include basic styling
```

### Part 3: Advanced Features Exploration (10 minutes)

1. **GitHub Copilot Chat**
   - Open Copilot Chat panel
   - Try these commands:
     ```
     /explain [select some complex code]
     /fix [select code with a bug]
     /tests [select a function]
     ```

2. **Context Awareness Test**
   - Create a file with some existing code
   - Add a comment requesting related functionality
   - Observe how Copilot uses existing code context

3. **Multi-file Context**
   - Open multiple related files
   - Request code that should reference other files
   - See how well Copilot understands project structure

## Expected Outcomes

After this lab, you should:
- Have GitHub Copilot properly configured
- Understand differences between AI coding tools
- Know how to evaluate AI tool outputs
- Be able to choose the right tool for different scenarios

## Comparison Matrix

Fill out this comparison for your evaluation:

| Aspect | GitHub Copilot | ChatGPT | Claude | Other |
|--------|----------------|---------|--------|-------|
| **Setup Ease** | | | | |
| **Code Quality** | | | | |
| **Speed** | | | | |
| **Context Awareness** | | | | |
| **Documentation** | | | | |
| **Best For** | | | | |

## Troubleshooting

**Common Issues**:
- **Copilot not working**: Check GitHub subscription and VS Code authentication
- **No suggestions**: Verify extension is enabled and language is supported
- **Poor suggestions**: Try more specific comments or different prompting styles

## Reference Slides
- [21_ai_tools_landscape.md](../../docs/public/markdown/21_ai_tools_landscape.md)
- [22_copilot_setup.md](../../docs/public/markdown/22_copilot_setup.md)
- [23_autonomous_agents.md](../../docs/public/markdown/23_autonomous_agents.md)
