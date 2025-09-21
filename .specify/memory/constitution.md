<!--
SYNC IMPACT REPORT:
Version Change: 1.0.0 → 1.1.0
Modified Principles: 
- Content Organization Standards → Enhanced with slide class organization rules
Added Sections:
- Slide Class Organization principle under Content Organization Standards
Removed Sections: None
Templates Requiring Updates: ✅ All current (no changes needed)
Follow-up TODOs: None
-->

# SFEIR School Coding with AI Constitution

**Version**: 1.1.0 | **Ratified**: 2025-09-18 | **Last Amended**: 2025-09-21

## Core Principles

### I. Educational Excellence
Comprehensive 7-day training program targeting beginner to intermediate developers with focus on practical AI coding skills and autonomous agents. Emphasis on hands-on learning with real-world applications and professional development workflow enhancement. All content MUST provide measurable skill building and confidence development for modern AI-enhanced software development.

### II. Content Organization Standards
Place training modules in `docs/markdown/` using SFEIR School Theme markdown syntax (reference: https://github.com/sfeir-open-source/sfeir-school-theme). Structured module progression with clear learning outcomes and sequential numbering system for modules and slides. 

**Slide Class Organization**: Only the main presentation introduction (`00_intro.md`) SHALL use the `class="first-slide"` directive. All module introduction slides MUST use `class="transition"` to maintain consistent navigation flow. Regular content slides use standard slide classes without special designation.

### III. Lab Structure Requirements
Create sequential lab folders using pattern `labs/lab-XX-{topic}/` with corresponding solution folders `labs/lab-XX-{topic}-solution/`. Write all lab instructions in GitHub-flavored markdown format with clear objectives, prerequisites, and success criteria. Provide hands-on exercises with scaffolded projects that demonstrate practical application of module concepts.

### IV. Asset Management Protocol
Store all visual assets in `docs/assets/images/` using descriptive file names and organized subdirectories by module. Reference assets using relative paths from `docs/` directory in all markdown files. Include slides, diagrams, code screenshots, and supporting visuals while maintaining consistent SFEIR branding standards.

### V. Quality Assurance Standards
Validate all content against defined educational objectives with focus on practical utility and learner confidence building. Maintain professional code quality standards in all examples and exercises. Prioritize clarity, real-world application, and progressive skill development across all training materials.

## Training Module Overview

### Module 1: Introduction to AI and Prompt Engineering (1 day)
- AI Fundamentals: Core concepts, LLMs, embeddings, and RAG
- Prompt Engineering: Effective communication patterns with AI systems
- Practical Exercises: Hands-on prompt writing and iteration
- Tools Introduction: Overview of coding agents and safety practices

### Module 2: Modern AI Coding Tools and Autonomous Agents (1.5 days)
- AI Tools Landscape: Comprehensive overview of available platforms
- GitHub Copilot Setup: Professional tool configuration and usage
- Autonomous Agents: Introduction to independent coding agents
- Tool Comparison: Hands-on evaluation of different AI platforms

### Module 3: Agentic Development Workflows and Spec-Driven Coding (1.5 days)
- Agentic Workflows: Systematic approaches to AI-driven development
- Vibe Coding: Intuitive AI collaboration patterns
- Spec-Driven Coding: Specification-based development methodology
- Workflow Exercises: Real-world development scenarios

### Module 4: AI-Powered Debugging, Refactoring, and Code Analysis (1 day)
- AI Debugging: Systematic problem-solving with AI assistance
- Refactoring with AI: Code improvement and modernization techniques
- Code Analysis: AI-powered code review and optimization
- Debugging Exercises: Practical troubleshooting scenarios

### Module 5: Test Automation and Quality Assurance with AI (1 day)
- Test Automation: AI-assisted test generation and execution
- Quality Assurance: Maintaining standards with AI tools
- Testing Exercises: Automated test creation and validation

### Module 6: AI-Assisted Code Review, Security Basics, and Governance (1 day)
- Code Review with AI: Systematic review processes and best practices
- Security Fundamentals: AI tool implications for code security
- Governance: Enterprise AI adoption strategies and policies
- Review Exercises: Practical code review scenarios

### Module 7: Practical Project - Website Development with AI Agents (1 day)
- Project Planning: AI-assisted project architecture and planning
- Project Execution: Complete website development using AI agents
- Project Showcase: Presentation and evaluation of results

## Technical Stack Requirements

### Framework and Build System
- **Framework**: SFEIR School Theme (RevealJS-based presentation framework)
- **Build Tool**: Nx Workspace with Vite for modern development workflow
- **Package Manager**: NPM for dependency management
- **Deployment**: GitHub Pages for slide hosting and distribution

### Development Environment
- **Languages**: TypeScript for type safety, Markdown for content creation
- **IDE Requirements**: VS Code or Cursor IDE with AI extensions
- **Version Control**: Git for source management
- **Container Support**: DevContainer configuration for consistent development environment

### AI Tools Integration
- **Primary Tool**: GitHub Copilot
- **Seconday Tools**: Gemini, Claude, Codex, Cursor
- **Enterprise Platforms**: Support for professional AI development environments
- **Tool Access**: GitHub account required for Copilot access
- **Multi-Platform**: Cross-platform compatibility for diverse development setups

## Project Structure Standards

### Documentation Organization
```
docs/
├── markdown/          # Training slide content
│   ├── 00_intro.md    # Introduction and welcome
├── 01_speaker.md      # Speaker information
├── 02_agenda.md       # Training agenda
├── 10_module_1_ai_fundamentals/     # Module 1: AI Fundamentals
│   ├── 10_module1_intro.md
│   ├── 11_ai_fundamentals.md
│   ├── 12_prompt_engineering.md
│   ├── 13_exercise_prompts.md
│   ├── 14_tools_and_agents.md
│   └── 15_assessment_and_recap.md
├── 20_module_2_ai_tools/            # Module 2: AI Tools
│   ├── 20_module2_intro.md
│   ├── 21_ai_tools_landscape.md
│   ├── 22_copilot_setup.md
│   ├── 23_autonomous_agents.md
│   └── 24_exercise_tools.md
├── 30_module_3_workflows/           # Module 3: Workflows
│   ├── 30_module3_intro.md
│   ├── 31_agentic_workflows.md
│   ├── 32_vibe_coding.md
│   ├── 33_spec_driven_coding.md
│   └── 34_exercise_workflows.md
├── 40_module_4_debugging/           # Module 4: Debugging
│   ├── 40_module4_intro.md
│   ├── 41_ai_debugging.md
│   ├── 42_refactoring_ai.md
│   ├── 43_code_analysis.md
│   └── 44_exercise_debugging.md
├── 50_module_5_testing/             # Module 5: Testing
│   ├── 50_module5_intro.md
│   ├── 51_test_automation.md
│   ├── 52_quality_assurance.md
│   └── 53_exercise_testing.md
├── 60_module_6_review_security/     # Module 6: Review & Security
│   ├── 60_module6_intro.md
│   ├── 61_code_review_ai.md
│   ├── 62_security_basics.md
│   ├── 63_governance.md
│   └── 64_exercise_review.md
├── 70_module_7_capstone/            # Module 7: Capstone Project
│   ├── 70_module7_intro.md
│   ├── 71_project_planning.md
│   ├── 72_project_execution.md
│   └── 73_project_showcase.md
└── assets/
    └── images/        # Generated visual assets and diagrams
```

### Laboratory Structure
```
labs/
├── lab-01-prompt-basics/         # Introduction to effective prompting
│   └── README.md
├── lab-01-prompt-basics-solution/
│   └── README.md
├── lab-02-tools-setup/            # AI tools installation and comparison
│   └── README.md
├── lab-02-tools-setup-solution/
│   └── README.md
├── lab-03-coding-patterns/       # Hands-on coding with AI
│   └── README.md
├── lab-03-coding-patterns-solution/
│   └── README.md
├── lab-04-debugging/             # AI-assisted debugging
│   └── README.md
├── lab-04-debugging-solution/
│   └── README.md
├── lab-05-testing/               # Test automation with AI
│   └── README.md
├── lab-05-testing-solution/
│   └── README.md
├── lab-06-security/              # AI and code security
│   └── README.md
├── lab-06-security-solution/
│   └── README.md
├── lab-07-capstone/              # Complete project development
│   └── README.md
└── lab-07-capstone-solution/
    └── README.md
```

### Content Creation Guidelines
- **Slide Numbering**: Sequential numbering system (00-09: intro, 10-19: module 1, 20-29: module 2, etc.)
- **Slide Class Usage**: `first-slide` class reserved exclusively for `00_intro.md`; module introductions use `transition` class
- **Module Organization**: Each module includes intro slide, content slides, exercise slides, and assessment slide
- **Exercise Integration**: Each module includes hands-on exercises with clear objectives and success criteria
- **Asset Management**: All images referenced with relative paths from `docs/` directory
- **Markdown Standards**: SFEIR School Theme syntax for consistent presentation formatting

## Governance

This constitution supersedes all other development practices for the SFEIR School Coding with AI training program. All content creation, lab development, and documentation MUST verify compliance with these standards. Educational effectiveness and practical utility MUST be maintained throughout the training development process.

**Version**: 1.1.0 | **Ratified**: 2025-09-18 | **Last Amended**: 2025-09-21