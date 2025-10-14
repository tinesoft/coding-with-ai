# Feature Specification: Module 2 - Modern AI Coding Tools

**Feature Branch**: `002-module-2-ai-coding-tools`  
**Created**: October 12, 2025  
**Status**: Draft  
**Input**: User description: "Module 2: Modern AI Coding Tools"

## User Scenarios & Testing *(mandatory)*

<!--
  IMPORTANT: User stories should be PRIORITIZED as user journeys ordered by importance.
  Each user story/journey must be INDEPENDENTLY TESTABLE - meaning if you implement just ONE of them,
  you should still have a viable MVP (Minimum Viable Product) that delivers value.
  
  Assign priorities (P1, P2, P3, etc.) to each story, where P1 is the most critical.
  Think of each story as a standalone slice of functionality that can be:
  - Developed independently
  - Tested independently
  - Deployed independently
  - Demonstrated to users independently
-->

### User Story 1 - AI Coding Tools Landscape Overview (Priority: P1)

Learners need a comprehensive overview of available AI coding tools across different categories to make informed decisions about which tools to use in their development workflow. They learn about CLI-based agents, standalone IDEs, IDE extensions, and online tools with their specific use cases and capabilities, as accurately, comprehensively, and up-to-date (as of the research date) as possible. The tools landscape must include:
  - **CLI-Based Agents:** GitHub Copilot CLI, Codex CLI, Gemini CLI, Claude Code, Opencode, Warp, Aider
  - **Standalone IDEs:** Cursor, Windsurf, Kiro, Zed
  - **IDE Extensions (VS Code/JetBrains):** GitHub Copilot, Roo Code, Kilo Code, Continue,  Codex, Cline (formerly Claude Dev), Amazon Q Developer
  - **Online Tools:** Mention-only (Bolt.new, Firebase Studio, Lovable, v0 by Vercel, Replit AI)

**Why this priority**: Foundation knowledge of the AI coding tools ecosystem is essential before diving into specific tool usage. Without this overview, learners cannot make informed choices about which tools to adopt for different scenarios.

**Independent Test**: Can be fully tested by presenting the tool categorization content and having learners correctly identify which category a given AI tool belongs to and explain when to use it.

**Acceptance Scenarios**:

1. **Given** a learner new to AI coding tools, **When** they complete the landscape overview, **Then** they can categorize different AI tools into CLI agents, standalone IDEs, IDE extensions, and online tools
2. **Given** a development scenario description, **When** learners review it, **Then** they can recommend appropriate tool categories for that scenario
3. **Given** multiple AI tool options, **When** learners evaluate them, **Then** they can explain the trade-offs between different tool types

---

### User Story 2 - GitHub Copilot Deep Dive and Hands-on Practice (Priority: P2)

Learners need practical experience with GitHub Copilot in VS Code, including installation, configuration, and mastery of the three core modes (Ask, Edit, Agent) plus custom agent usage to become proficient with the primary tool used throughout the training.

**Why this priority**: GitHub Copilot serves as the primary tool for subsequent modules, so learners must achieve proficiency before advancing. This hands-on experience provides the foundation for all future AI-assisted development activities.

**Independent Test**: Can be fully tested by having learners complete a coding task using each of the three Copilot modes and demonstrate successful use of a custom agent.

**Acceptance Scenarios**:

1. **Given** VS Code with GitHub Copilot installed, **When** learners use the Ask mode, **Then** they can successfully get coding help through chat interactions
2. **Given** existing code that needs modification, **When** learners use Edit mode, **Then** they can apply inline changes and code suggestions effectively
3. **Given** a development task, **When** learners use Agent mode, **Then** they can delegate autonomous task execution while maintaining appropriate oversight
4. **Given** access to the "GPT 4.1 - Beast Mode" custom agent, **When** learners install and use it, **Then** they can demonstrate enhanced AI assistance capabilities

---

### User Story 3 - AI Model Comparison and Selection (Priority: P3)

Learners understand the strengths and appropriate use cases for different AI coding models (GPT-5, Claude, Gemini, Deepseek, etc.) to make informed decisions about when to use specific models for different coding tasks.

**Why this priority**: While important for advanced usage, model comparison knowledge builds upon the foundational tool usage skills. Learners need practical tool experience before they can effectively evaluate model differences.

**Independent Test**: Can be fully tested by presenting coding scenarios and having learners recommend the most appropriate AI model with justification based on the task requirements.

**Acceptance Scenarios**:

1. **Given** a complex reasoning task, **When** learners evaluate model options, **Then** they can explain why GPT-5 would be most appropriate
2. **Given** a task requiring long context understanding, **When** learners choose a model, **Then** they select Claude and justify the choice based on context window capabilities
3. **Given** an API integration or multimodal task, **When** learners recommend a model, **Then** they choose Gemini and explain its multimodal advantages
4. **Given** performance-critical coding tasks, **When** learners evaluate options, **Then** they can compare different models' speed and efficiency trade-offs

---

### User Story 4 - AI Agent Instruction Files and Project Context (Priority: P3)

Learners understand what agent instruction files are and how to create and maintain AI agent instruction files (`.github/copilot-instructions.md`, `CLAUDE.md`, `GEMINI.md`, `AGENTS.md`) that provide essential project context and guidelines to AI coding assistants for improved collaboration and code quality.

**Why this priority**: Agent instruction files are critical for scaling AI-assisted development in real projects, but this knowledge builds on understanding of AI tools and models. Learners need practical experience with AI agents before they can effectively design instructions for them.

**Independent Test**: Can be fully tested by having learners analyze an existing codebase and generate appropriate instruction files that demonstrably improve AI agent performance on project-specific tasks.

**Acceptance Scenarios**:

1. **Given** a software project without AI instruction files, **When** learners analyze the codebase architecture and patterns, **Then** they can identify key information that AI agents need to be immediately productive
2. **Given** project-specific conventions and workflows, **When** learners create agent instruction files, **Then** they can document critical patterns, dependencies, and development processes that differ from standard practices
3. **Given** multiple AI platforms in use (GitHub Copilot, Claude, Gemini), **When** learners design instruction files, **Then** they can create both platform-specific files and a unified `AGENTS.md` that covers common project context
4. **Given** an existing generic instruction file, **When** learners work with a specific codebase, **Then** they can customize and enhance the instructions with project-specific architectural decisions, build systems, and integration points


## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Module MUST provide comprehensive overview of AI coding tools categorized into CLI agents, standalone IDEs, IDE extensions, and online tools
- **FR-002**: Module MUST include hands-on GitHub Copilot CLI exercises demonstrating practical CLI agent workflows
- **FR-003**: Module MUST provide deep-dive GitHub Copilot VS Code training covering installation, configuration, and all three core modes (Ask, Edit, Agent)
- **FR-004**: Learners MUST successfully install and configure the "GPT 4.1 - Beast Mode" custom agent via the provided installation badge
- **FR-005**: Module MUST include practical exercises for each GitHub Copilot mode with measurable completion criteria
- **FR-006**: Module MUST provide detailed comparison of major AI coding models (GPT-5, Claude, Gemini, Deepseek) with specific use case recommendations
- **FR-007**: Module MUST include restore points demonstration in GitHub Copilot Chat for version control and experimentation safety
- **FR-008**: Learning materials MUST follow SFEIR School Theme markdown syntax and constitutional formatting requirements
- **FR-009**: Module MUST provide practical guidance on creating and maintaining AI agent instruction files including platform-specific files (copilot-instructions.md, CLAUDE.md, GEMINI.md) and unified AGENTS.md
- **FR-010**: Module MUST include exercises for analyzing codebases to identify essential project context that AI agents need, including architecture patterns, build systems, and development workflows
- **FR-011**: Module MUST provide three lab exercises using module-scoped numbering (lab-21, lab-22, lab-23) with corresponding solution documentation
- **FR-012**: All practical exercises MUST be designed for beginner to intermediate developers with clear success criteria and scaffolded learning progression

### Key Entities *(include if feature involves data)*

- **AI Coding Tool**: Represents different categories of AI-powered development tools with attributes like category type, capabilities, platform compatibility, and use case recommendations
- **Learning Exercise**: Structured hands-on activities with objectives, prerequisites, instructions, and success criteria for skill development
- **Tool Configuration**: Setup instructions, installation procedures, and configuration settings required for learners to successfully use AI tools in their development environment
- **Agent Instruction File**: Project-specific guidance documents (copilot-instructions.md, CLAUDE.md, GEMINI.md, AGENTS.md) containing essential codebase context, architectural patterns, development workflows, and conventions to optimize AI agent performance
- **Assessment Criteria**: Measurable learning outcomes and validation methods to ensure learners achieve proficiency with AI coding tools and agent collaboration

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 90% of learners can successfully categorize 8 out of 10 AI coding tools into correct categories (CLI agents, standalone IDEs, IDE extensions, online tools) within 5 minutes
- **SC-002**: 100% of learners complete GitHub Copilot installation and successfully use each of the three core modes (Ask, Edit, Agent) in guided exercises
- **SC-003**: 85% of learners successfully install and demonstrate usage of the "GPT 4.1 - Beast Mode" custom agent within the lab session
- **SC-004**: Learners can complete a coding task 40% faster using AI assistance compared to unassisted coding baseline established in Module 1
- **SC-005**: 90% of learners correctly recommend appropriate AI models for 4 out of 5 given coding scenarios based on task requirements (reasoning, context length, multimodal needs, performance)
- **SC-006**: Learners complete all three lab exercises (lab-21, lab-22, lab-23) with documented success criteria within allocated module timeframe
- **SC-007**: 80% of learners successfully create comprehensive AI agent instruction files that demonstrably improve agent performance on project-specific coding tasks
- **SC-008**: Learners can identify and document at least 5 critical project-specific patterns (architecture, build systems, conventions) that AI agents need for effective collaboration
- **SC-009**: 95% of learners report increased confidence in selecting and using AI coding tools for their development workflow
- **SC-010**: Post-module assessment shows 80% proficiency in identifying when and how to use different AI coding tool categories for various development scenarios

## Assumptions

- Learners have completed Module 1 (AI Fundamentals, Prompt Engineering, and Safety) and understand basic AI concepts and safety considerations
- Learners have access to GitHub accounts for Copilot installation and usage
- Training environment provides VS Code or similar IDE with extension installation capabilities
- Network connectivity allows access to cloud-based AI services during hands-on exercises
- Learners have basic programming knowledge and familiarity with code editors/IDEs
- Module duration of 1.5 days provides sufficient time for both theoretical coverage and hands-on practice
- Trainers have experience with multiple AI coding tools to provide live demonstrations of secondary tools (Cursor, Claude, etc.)
- Learning environment supports installation of browser extensions and desktop applications as needed for tool exploration
