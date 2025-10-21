# Lab 23: AI Agent Instruction Files

## Learning Objectives
By the end of this lab, you will be able to:
- Understand the purpose and structure of AI agent instruction files
- Create effective instruction files for GitHub Copilot and other AI agents
- Customize agent behavior for project-specific workflows
- Maintain and update instruction files as projects evolve

## Prerequisites
- Completion of Lab 21 (GitHub Copilot CLI) and Lab 22 (VS Code Extension)
- Active GitHub Copilot subscription
- A sample project or codebase to work with
- Understanding of your project's architecture and conventions

## Duration: 45 minutes

---

## What Are AI Agent Instruction Files?

AI agent instruction files provide persistent context and guidelines to AI coding assistants. They help agents understand:
- Project architecture and organization
- Coding standards and conventions
- Development workflows
- Domain-specific knowledge
- Team preferences and best practices

### Common Instruction File Types

1. **`.github/copilot-instructions.md`** - GitHub Copilot (both CLI and VS Code)
2. **`CLAUDE.md`** - Anthropic Claude (Claude.ai, CLI tools)
3. **`GEMINI.md`** - Google Gemini
4. **`AGENTS.md`** - Universal/multi-agent instructions
5. **`.cursorrules`** - Cursor IDE specific rules
6. **`.aiderignore` / `.aider.md`** - Aider CLI tool

---

## Exercise 1: Understanding Instruction File Structure (10 minutes)

### Step 1: Review Sample Instruction Files
**Objective:** Understand common patterns and sections in effective instruction files

**Key Sections to Include:**

1. **Project Context**
   - Brief project description
   - Technology stack
   - Target audience or domain

2. **Architecture Overview**
   - File organization
   - Module structure
   - Key components

3. **Coding Standards**
   - Language conventions
   - Naming patterns
   - Code style preferences

4. **Common Tasks**
   - Frequent operations
   - Task-specific guidance
   - Examples and templates

5. **Quality Requirements**
   - Testing expectations
   - Documentation standards
   - Review criteria

### Step 2: Analyze Example Instruction File
Review this example structure:

```markdown
# AI Agent Instructions for [Project Name]

## Project Context
Brief description of what this project does and who it's for.

## Technology Stack
- Language: [Primary language]
- Framework: [Main framework]
- Tools: [Key tools]

## Architecture
[High-level architecture description]

## File Organization
- `/src` - Source code
- `/tests` - Test files
- `/docs` - Documentation

## Coding Standards

### [Language] Style
- Naming: camelCase for variables, PascalCase for classes
- Comments: JSDoc format for public APIs
- Testing: Unit tests required for business logic

## Common Tasks

### Adding a New Feature
1. Create feature branch
2. Implement with tests
3. Update documentation
4. Submit PR with description

### Code Review Guidelines
- Check for test coverage
- Verify documentation updates
- Review for security issues

## Quality Standards
- All functions must have tests
- Code coverage > 80%
- No console.log in production code
```

**Tasks to Complete:**
1. Read through the example structure
2. Identify which sections are most important for your project
3. Note any project-specific sections you might need

---

## Exercise 2: Creating Your First Instruction File (20 minutes)

### Step 3: Analyze Your Project
**Objective:** Gather information needed for an effective instruction file

**Analysis Checklist:**
1. **Project Purpose:** What problem does it solve?
2. **Technology Stack:** What languages, frameworks, and tools?
3. **Architecture:** How is the code organized?
4. **Conventions:** What coding standards are used?
5. **Workflows:** What are common development tasks?
6. **Pain Points:** What do new developers struggle with?

### Step 4: Create GitHub Copilot Instructions
**Objective:** Create `.github/copilot-instructions.md` for your project

**Instructions:**

1. Create the directory and file:
```bash
mkdir -p .github
touch .github/copilot-instructions.md
```

2. Add core sections using the template below:

```markdown
# GitHub Copilot Instructions for [Your Project Name]

## Project Context

[Brief description: This project is a ...]

**Current Focus:** [What you're currently building/improving]

**Target Audience:** [Who uses this project]

## Technology Stack

- **Language:** [Primary language and version]
- **Framework:** [Main framework]
- **Database:** [If applicable]
- **Build Tools:** [Package manager, build system]
- **Testing:** [Testing frameworks]

## Architecture Overview

[Describe high-level architecture]

### File Organization

- `/[directory]` - [Purpose]
- `/[directory]` - [Purpose]
- `/[directory]` - [Purpose]

## Coding Standards

### [Language] Conventions
- [Specific conventions for your project]
- [Naming patterns]
- [Code organization rules]

### Documentation Requirements
- [When and how to document]
- [Documentation format]

### Testing Standards
- [Test coverage expectations]
- [Testing patterns to use]

## Common Tasks

### [Task 1: e.g., Adding a New API Endpoint]
[Step-by-step guidance specific to your project]

### [Task 2: e.g., Creating a New Component]
[Detailed instructions]

### [Task 3: e.g., Database Migrations]
[How to handle in your project]

## Best Practices

- [Project-specific best practice 1]
- [Project-specific best practice 2]
- [Project-specific best practice 3]

## Quality Standards

- [Specific quality requirements]
- [Code review criteria]
- [Performance expectations]

## Common Pitfalls to Avoid

- [Common mistake 1 and how to avoid it]
- [Common mistake 2 and how to avoid it]
- [Common mistake 3 and how to avoid it]

## References

- [Link to full documentation]
- [Link to style guide]
- [Link to architecture docs]
```

3. **Customize for Your Project:**
   - Replace all `[placeholders]` with actual information
   - Add project-specific sections
   - Remove sections that don't apply
   - Include examples of your actual code patterns

4. **Test Your Instructions:**
   - Open GitHub Copilot Chat in VS Code
   - Ask: "What are the coding standards for this project?"
   - Verify Copilot references your instruction file
   - Ask: "How do I add a new [feature] to this project?"
   - Check if the response aligns with your instructions

**Success Criteria:** ✅ 
- Instruction file created in `.github/copilot-instructions.md`
- Contains at least 5 key sections (Context, Architecture, Standards, Tasks, Quality)
- Copilot Chat acknowledges and uses the instructions

---

## Exercise 3: Multi-Agent Instruction Files (10 minutes)

### Step 5: Create Universal Agent Instructions
**Objective:** Create an `AGENTS.md` file for use with multiple AI tools

**Rationale:** Different AI agents (Claude, Gemini, Cursor, Aider) may not read `.github/copilot-instructions.md`, but often look for common filenames like `AGENTS.md`, `CLAUDE.md`, or `GEMINI.md`.

**Instructions:**

1. Create `AGENTS.md` in your project root:
```bash
touch AGENTS.md
```

2. Structure for multi-agent compatibility:

```markdown
# AI Agent Instructions

> This file provides context and guidelines for AI coding assistants including GitHub Copilot, Claude, Gemini, Cursor, and other agents.

## Quick Reference

- **Project Type:** [Web app / CLI tool / Library / etc.]
- **Primary Language:** [Language]
- **Framework:** [Framework]
- **Package Manager:** [npm / yarn / pip / etc.]

## Project Overview

[Same content as in copilot-instructions.md but formatted for general use]

## For GitHub Copilot Users
See `.github/copilot-instructions.md` for Copilot-specific instructions.

## For Claude Users
When using Claude (via CLI or web interface):
- [Claude-specific guidance if needed]
- [Preferred interaction patterns]

## For Cursor IDE Users
See `.cursorrules` for Cursor-specific configuration.

## For CLI Agent Users (Aider, etc.)
- [CLI-specific workflows]
- [File modification patterns]

## Architecture

[Architecture content applicable to all agents]

## Code Style

[Universal code style guidelines]

## Development Workflow

[Standard workflow applicable regardless of AI tool]

## Testing Guidelines

[Testing standards for all contexts]

## Common Commands

```bash
# Install dependencies
[command]

# Run development server
[command]

# Run tests
[command]

# Build for production
[command]
```

## Important Patterns

### [Pattern 1]
[Description and example]

### [Pattern 2]
[Description and example]

## What AI Agents Should Know

1. **Critical Information:** [Things agents must understand]
2. **Constraints:** [Limitations or restrictions]
3. **Preferences:** [Team/project preferences]
4. **Anti-patterns:** [Things to avoid]

## File Modification Guidelines

When suggesting changes:
- [Guideline 1]
- [Guideline 2]
- [Guideline 3]

## Questions to Ask Before Suggesting Changes

1. [Question 1]
2. [Question 2]
3. [Question 3]
```

3. **Customize and Test:**
   - Fill in all sections with your project information
   - Test with different AI tools if available
   - Verify consistency across instruction files

---

## Exercise 4: Maintaining Instruction Files (5 minutes)

### Step 6: Version Control and Updates
**Objective:** Establish practices for keeping instruction files current

**Best Practices:**

1. **Version Control:**
   - Commit instruction files to repository
   - Review changes in PRs
   - Document why instructions changed

2. **Update Triggers:**
   - Major architecture changes
   - New technologies added
   - Process improvements
   - Team feedback

3. **Review Schedule:**
   - Monthly review for active projects
   - Quarterly review for stable projects
   - After major releases

4. **Team Collaboration:**
   ```bash
   # Add to your PR checklist
   - [ ] Updated instruction files if architecture changed
   - [ ] Updated instruction files if adding new patterns
   - [ ] Verified AI agents understand new instructions
   ```

### Step 7: Test and Validate
**Objective:** Ensure instruction files improve AI agent performance

**Validation Checklist:**

1. **Basic Functionality:**
   - Ask agent about project structure → Correct response?
   - Ask about coding standards → Matches your guidelines?
   - Ask how to perform common task → Correct procedure?

2. **Code Generation Quality:**
   - Generate a new component → Follows your patterns?
   - Generate tests → Uses your testing framework correctly?
   - Generate documentation → Matches your format?

3. **Consistency:**
   - Multiple similar requests → Consistent responses?
   - Different AI agents → Similar understanding?

4. **Improvement Areas:**
   - What did the agent get wrong?
   - What information was missing?
   - What needs clarification?

**Update Cycle:**
```
Create Instructions → Test with AI → Identify Gaps → Update Instructions → Retest
```

---

## Bonus: Platform-Specific Instruction Files

### Cursor IDE (`.cursorrules`)
```
# Cursor-specific rules
@always use TypeScript strict mode
@prefer functional components in React
@include unit tests with all new functions
@follow ESLint configuration in .eslintrc
```

### Aider CLI (`.aider.md`)
```markdown
# Aider Configuration

## Edit Mode Preferences
- Use diff format for small changes
- Use whole-file mode for large refactors

## File Organization
- Place tests next to implementation files
- Use index files for public APIs

## Commit Message Format
- feat: New features
- fix: Bug fixes
- refactor: Code improvements
- test: Testing changes
```

---

## Summary and Next Steps

**What You've Learned:**
- ✅ Structure and purpose of agent instruction files
- ✅ How to create effective GitHub Copilot instructions
- ✅ Multi-agent instruction file patterns
- ✅ Maintenance and validation strategies

**Best Practices Checklist:**
- [ ] Instruction file exists and is version controlled
- [ ] Contains project-specific architectural information
- [ ] Includes coding standards and conventions
- [ ] Provides common task guidance
- [ ] Updated regularly (at least quarterly)
- [ ] Tested with actual AI agent interactions
- [ ] Team members contribute improvements

**Next Steps:**
1. Apply these concepts to your real projects
2. Gather feedback from team members using AI agents
3. Iterate and improve instruction files based on results
4. Share successful patterns with your team

**Additional Resources:**
- [GitHub Copilot Custom Instructions Documentation](https://docs.github.com/copilot/customizing-copilot)
- Sample instruction files in `lab-23-agent-instruction-files-solution/`
- SFEIR School Module 2 slides on agent instruction files

---

## Troubleshooting

### Issue: AI agent doesn't seem to use instruction file

**Solutions:**
1. Check file is in correct location (`.github/copilot-instructions.md` for Copilot)
2. Verify markdown formatting is correct
3. Reload VS Code window
4. Ensure file is not in `.gitignore`
5. Check file permissions (should be readable)

### Issue: Instructions are too generic

**Solutions:**
1. Add specific code examples from your project
2. Include actual file paths and structure
3. Document project-specific conventions
4. Add context about domain-specific concepts

### Issue: Instructions become outdated quickly

**Solutions:**
1. Keep instructions focused on stable patterns
2. Link to external docs for frequently changing details
3. Set up automated reminders for quarterly reviews
4. Include instruction file updates in architecture change PRs

### Issue: Different team members have different preferences

**Solutions:**
1. Establish team consensus on critical patterns
2. Document optional vs. required conventions
3. Use PR discussions to align on standards
4. Regular team reviews of instruction file content
