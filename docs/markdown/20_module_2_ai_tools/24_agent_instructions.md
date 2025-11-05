<!-- .slide: class="transition" -->
# Module 2: AI Agent Instruction Files
## Enhancing AI Collaboration with Project Context

##--##

<!-- .slide: -->
# What Are Agent Instruction Files?

## Project-Specific AI Guidance

<br>

### **Purpose**
Provide AI coding assistants with essential project context, patterns, and conventions to improve code generation quality and consistency

### **Common Files**
- `.github/copilot-instructions.md` - GitHub Copilot-specific
- `CLAUDE.md` - Claude/Anthropic-specific  
- `GEMINI.md` - Google Gemini-specific
- `AGENTS.md` - Open standard supported by multiple coding agents (GitHub Copilot, Gemini CLI, etc.)



##--##

<!-- .slide: -->
# What Are Agent Instruction Files?

## Project-Specific AI Guidance

<br>

### **Key Benefits**
- **Consistency**: AI follows project conventions automatically
- **Productivity**: Reduces need to explain context repeatedly
- **Quality**: Better suggestions aligned with architecture
- **Onboarding**: New team members (human and AI) get up to speed faster


##--##

<!-- .slide: -->
# What to Include

## Essential Project Context

<br>

### **1. Architecture & Patterns**
```markdown
## Architecture
- Monorepo using Nx workspace with 15 apps and 42 libraries
- Domain-driven design with bounded contexts
- Event-sourcing for core business logic
```

### **2. Tech Stack & Dependencies**
```markdown
## Tech Stack
- Frontend: React 18, TypeScript 5.3, TailwindCSS 3.4
- Backend: Node.js 20, NestJS 10, PostgreSQL 16
- Build: Nx 19, Vite 5, TypeScript project references
```

### **3. Development Conventions**
```markdown
## Conventions
- Use named exports, avoid default exports
- Functional components with hooks (no class components)
- Co-locate tests: `component.tsx` + `component.spec.tsx`
```

Notes:
Focus on information that AI models cannot infer from code alone - architectural decisions, project-specific patterns, and team conventions.

##--##

<!-- .slide: -->
# Structure of Instruction Files

## Effective Organization

<br>

### **Recommended Sections**

1. **Project Overview** - Purpose, domain, key stakeholders
2. **Architecture** - High-level structure, design patterns, bounded contexts
3. **Tech Stack** - Languages, frameworks, libraries with versions
4. **Code Conventions** - Style, naming, file organization, imports
5. **Development Workflow** - Build commands, testing, deployment
6. **Domain Knowledge** - Business rules, terminology, constraints
7. **Integration Points** - External APIs, services, dependencies
8. **Common Tasks** - Frequent operations with examples

### **Keep It Updated**
- Review during architecture changes
- Update when adopting new patterns
- Remove outdated information
- Version control with codebase

Notes:
Well-organized instruction files serve as living documentation that benefits both AI agents and human developers.

##--##

<!-- .slide: -->
# Platform-Specific Files

## Tailoring Instructions for Different AI Tools

<br>

### **`.github/copilot-instructions.md`** (GitHub Copilot)
```markdown
# GitHub Copilot Instructions

## Project Context
[Architecture and patterns]

## Copilot-Specific
- Use @workspace for repository-wide context
- Leverage #file references for specific components
- Use slash commands: /explain, /fix, /tests
```

### **`CLAUDE.md`** (Claude/Anthropic)
```markdown
# Claude Instructions

[Universal project context]

## Claude-Specific
- Leverage 200k context for large file analysis
- Request detailed reasoning for complex decisions
```

### **`AGENTS.md`** (Universal)
```markdown
# AI Agent Instructions

[Core project information shared by all agents]
```

Notes:
Platform-specific files allow you to leverage unique capabilities of each AI tool while maintaining a universal baseline.

##--##

<!-- .slide: -->
# Creating Effective Instructions

## Best Practices

<br>

### **✅ Do's**
- **Be specific** - "Use named exports" not "good export practices"
- **Include examples** - Show concrete code patterns
- **Explain why** - Context helps AI make better decisions
- **Keep concise** - Focus on critical information
- **Use sections** - Clear organization aids comprehension

### **❌ Don'ts**
- **Avoid vague guidance** - "Write clean code" is not actionable
- **Don't dump entire docs** - Extract key patterns only
- **Don't contradict code** - Instructions should match reality
- **Don't over-specify** - Leave room for AI judgment
- **Don't forget maintenance** - Update regularly

Notes:
Quality over quantity - focused, actionable instructions yield better AI collaboration than verbose documentation dumps.

##--##

<!-- .slide: class="with-code" -->
# Example: Real Instruction File

## SFEIR School Project Instructions

<br>

```markdown
# SFEIR School Coding with AI - Agent Instructions

## Project Overview
Educational platform for AI-enhanced development training.
7-day modular curriculum for beginner-intermediate developers.

## Architecture
- Nx monorepo with docs and labs workspaces
- SFEIR School Theme for slide rendering (Vite-based)
- Module-scoped numbering (10-19, 20-29, etc.)

## Content Standards
- Slides: SFEIR School Theme markdown syntax
- Labs: GitHub Flavored Markdown with clear objectives
- French "Exercice" spelling in slides (not "Exercise")
- Exercise slides: minimal, point to lab README only

## File Organization
- Slides: `docs/markdown/XX_module_Y/`
- Labs: `labs/lab-XY-{topic}/` with solution variants
- Assets: `docs/assets/images/module-Y/`
```

Notes:
This real example from our project demonstrates focused, actionable instructions that help AI agents understand project-specific requirements.

##--##

<!-- .slide: class="exercice" --> 
# Exercise 4: Agent Instruction Files
## Lab 23

<br>

### 👉🏾 Follow **instructions** in

### `labs/lab-23-agent-instruction-files/README.md`

Notes:
- Follow the instructions in the lab README.md for detailed steps.

##--##

<!-- .slide: class="exercice" --> 
# Exercise 4: Agent Instruction Files
## Lab 23

<br>

### 💡 Read **solution** at

### `labs/lab-23-agent-instruction-files-solution/README.md`

Notes:
- Read the lab README.md for example of solutions.

##--##

<!-- .slide: -->
# Impact on AI Performance

## Measurable Improvements

<br>

### **Without Instruction Files**
- ❌ AI suggests default exports (project uses named exports)
- ❌ Generic folder structures (project has specific conventions)
- ❌ Outdated library versions (project pinned to specific versions)
- ❌ Inconsistent patterns across generated code

### **With Instruction Files**
- ✅ AI follows project conventions automatically
- ✅ Suggestions align with architecture patterns
- ✅ Correct library versions and APIs used
- ✅ Consistent code style across all generations

Notes:
Instruction files transform AI from generic helper to project-aware collaborator, significantly improving code quality and developer satisfaction.

##--##

<!-- .slide: -->
# Maintenance Strategy

## Keeping Instructions Current

<br>

### **Review Triggers**
- **Architecture changes** - New patterns, services, or bounded contexts
- **Dependency updates** - Major version upgrades or new libraries
- **Convention evolution** - Team adopts new coding standards
- **Quarterly reviews** - Scheduled instruction file audits

### **Ownership Model**
- **Tech leads** - Maintain architecture and pattern sections
- **Team members** - Propose updates via pull requests
- **Documentation** - Keep in sync with formal docs
- **Version control** - Track changes alongside code

You can use you favourite AI agent (re)generate this file at any time!
<!-- .element: class="admonition tip" -->

Notes:
Treat instruction files as living documentation that evolves with your codebase - stale instructions are worse than no instructions.

##--##

<!-- .slide: -->
# Key Takeaways

## Agent Instruction Files Mastery

<br>

### **✅ Understanding Purpose**
- Provide project-specific context AI cannot infer
- Bridge generic model knowledge and unique codebase
- Improve consistency, quality, and productivity

### **✅ Content Structure**
- Architecture, tech stack, conventions, workflows
- Platform-specific files for specialized capabilities
- Universal baseline with AGENTS.md

### **✅ Best Practices**
- Specific, actionable guidance with examples
- Concise focus on critical information
- Regular maintenance aligned with code evolution

Notes:
You now understand how to create comprehensive AI agent instruction files that significantly enhance AI-assisted development in real projects.
