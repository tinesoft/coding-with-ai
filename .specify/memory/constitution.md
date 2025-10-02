<!--
SYNC IMPACT REPORT:
Version Change: 1.5.2 → 1.6.0
Modified Principles: None
Added Sections: VII. Data Sourcing and Citation Requirements - New principle requiring all metrics and statistical data to include source links
Removed Sections: None
Templates Requiring Updates: ✅ All current templates verified (no changes needed)
Follow-up TODOs: Review existing slide content and lab materials to ensure all metrics data includes proper source citations
Notes: Added mandatory sourcing requirement for all metrics and statistical data to maintain educational integrity and provide learners with access to original data sources.
-->

# SFEIR School Coding with AI Constitution

**Version**: 1.6.0 | **Ratified**: 2025-09-18 | **Last Amended**: 2025-10-02

## Core Principles

### I. Educational Excellence
Comprehensive 7-day training program targeting beginner to intermediate developers with focus on practical AI coding skills and autonomous agents. Emphasis on hands-on learning with real-world applications and professional development workflow enhancement. All content MUST provide measurable skill building and confidence development for modern AI-enhanced software development.

### II. Content Organization Standards
Place training modules in `docs/markdown/` using SFEIR School Theme markdown syntax (reference: https://github.com/sfeir-open-source/sfeir-school-theme). Structured module progression with clear learning outcomes and sequential numbering system for modules and slides. 

**Slide Class Organization**: Only the main presentation introduction (`00_intro.md`) SHALL use the `class="first-slide"` directive. All module introduction slides MUST use `class="transition"` to maintain consistent navigation flow. Regular content slides use standard slide classes without special designation.

**Content Generation Restrictions**: When generating exercise slides, focus ONLY on the actual exercise content without creating introductory or closing slides. When generating module slides, focus ONLY on the core content without creating introductory or closing transition slides. This ensures lean, focused educational content without unnecessary navigational overhead.

**Exercise Slide Formatting**: Exercise slides MUST use the `class="exercice"` directive and follow this exact heading hierarchy:
```markdown
<!-- .slide: class="exercice" --> 
# Exercice X: {short text}
## Lab XX

<br>

### 👉🏾 Follow **instructions** in

### `labs/lab-XX-{topic}/README.md`

Notes:
- Follow the instructions in the lab README.md for detailed steps.

##--##

<!-- .slide: class="exercice" --> 
# Exercice X: {short text}
## Lab XX

<br>

### 💡 Read **solution** at

### `labs/lab-XX-{topic}-solution/README.md`

Notes:
- Read the lab README.md for example of solutions.
```
Where X is the exercise number and XX is the two-digit lab number. Exercise slides SHALL only use H1, H2, or H3 level headers: H1 (#) is reserved for the exercise title, H2 (##) is reserved for the lab generic sub-header ("Lab XX"), and H3 (###) is reserved for specific steps of the exercise. Bold text MAY be used to highlight sections within the exercise content.
```

Where X is the exercise number and XX is the two-digit lab number. Exercise slides SHALL only use H1, H2, or H3 level headers: H1 (#) is reserved for the exercise title, H2 (##) is reserved for the lab generic sub-header ("Lab XX"), and H3 (###) is reserved for specific steps of the exercise. Bold text MAY be used to highlight sections within the exercise content.

**Regular Slide Formatting**: Regular content slides MUST include a `<br>` tag between H2-level (##) and H3-level (###) headers to prevent content overlap. This formatting requirement applies to all standard slides that are not exercise or transition slides:
```markdown
<!-- .slide: -->
# **Slide Title**

## **H2 Section Header**
<br>

### **H3 Subsection Header**
Content here...
```

### III. Lab Structure Requirements
Create sequential lab folders using pattern `labs/lab-XX-{topic}/` with corresponding solution folders `labs/lab-XX-{topic}-solution/`. Each solution folder MUST contain a mandatory `README.md` file and MAY include an optional `resources/` directory for lab outputs and deliverables (e.g., final projects, code samples, generated artifacts). Write all lab instructions in GitHub-flavored markdown format with clear objectives, prerequisites, and success criteria. Provide hands-on exercises with scaffolded projects that demonstrate practical application of module concepts.

**Lab-Slide Content Alignment**: Lab exercises MUST align with and reinforce the learning objectives and content presented in their corresponding module slides. Each lab SHALL provide hands-on practice for concepts introduced in the theoretical slide content. Exercise instructions MUST reference specific techniques, tools, or methodologies covered in the module slides. Learning progression in labs SHALL follow the sequence established in slide presentations to ensure educational coherence and effective skill building.

**Assessment Content Alignment**: Assessment materials including knowledge checks, quizzes, and evaluation criteria MUST accurately reflect the actual content that learners experienced in labs and slide presentations. Assessment questions SHALL be updated when lab content changes to maintain alignment between what is taught and what is tested. This ensures valid measurement of learning outcomes and prevents assessment-instruction misalignment.

**Exercise-Solution Correspondence**: The `lab-XX-{topic}/README.md` file MUST contain all exercises to be completed. The corresponding `lab-XX-{topic}-solution/README.md` file MUST contain the complete solution to each exercise in the same sequential order. Each exercise solution SHALL be clearly marked and correspond exactly to the exercise statement in the main lab file.

**Exercise Numbering Consistency**: When content is removed or reorganized, exercise numbering MUST be updated consistently across all related materials including lab instructions, solutions, exercise slides, and assessment content. Sequential numbering SHALL be maintained without gaps to ensure educational flow and prevent learner confusion.

**Deliverable Organization**: When an exercise solution includes deliverable artifacts (complete projects, code repositories, generated files), the solution text MUST indicate the specific location of these deliverables within the `lab-XX-{topic}-solution/resources/exercise-{X}-complete-project/` subdirectory structure, where X corresponds to the exercise number. Deliverable subdirectories SHALL only be created when required by the exercise's deliverable requirements.

### IV. Asset Management Protocol
Store all visual assets in `docs/assets/images/` using descriptive file names and organized subdirectories by module. Reference assets using relative paths from `docs/` directory in all markdown files. Include slides, diagrams, code screenshots, and supporting visuals while maintaining consistent SFEIR branding standards.

### V. Quality Assurance Standards
Validate all content against defined educational objectives with focus on practical utility and learner confidence building. Maintain professional code quality standards in all examples and exercises. Prioritize clarity, real-world application, and progressive skill development across all training materials.

**Constitution Compliance Verification**: When making changes to training materials, ALL affected files MUST be systematically reviewed for constitutional compliance. This includes exercise slides, lab instructions, solutions, assessment content, and any cross-references. Changes to one component require verification of consistency across the entire educational package to prevent maintenance burden and ensure cohesive learning experience.

**Content Duplication Prevention**: Exercise slides SHALL NOT duplicate detailed content from lab README files. Slides MUST follow the prescribed format pointing to lab instructions and solutions. This eliminates maintenance overhead and ensures single-source-of-truth for educational content while maintaining proper educational flow.

### VI. Content Accuracy and Currency Requirements
All training materials (slides, labs, exercises, and visual aids) MUST reflect accurate and current information about AI technologies, tools, and best practices as of the constitution's last amendment date. When generating or updating content, verify that all technical information, tool capabilities, API references, and industry practices are current and factually correct. Outdated information MUST be updated or clearly marked with deprecation notices. Content creators SHALL validate all AI tool references, feature availability, and technical specifications against official documentation and current releases before publication.

### VII. Data Sourcing and Citation Requirements
When including metrics, statistics, performance data, or quantitative claims in training materials (slides, labs, exercises), ALL such information MUST be accompanied by a direct link to the original source where that data was obtained. Unsourced data claims SHALL NOT be included in any educational materials. The citation format MUST follow this pattern: `[metric value]([source-link])` to provide immediate access to verification. For example: "**Time to First Working Code**: [30-50% reduction](https://example.com/source)" rather than unsourced claims. This requirement ensures educational integrity, allows learners to verify information independently, and maintains professional standards for factual content. When no verifiable source can be provided, the information MUST be excluded from the training materials entirely.

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
├── lab-01-prompt-basics/         # Module 1: Prompt engineering fundamentals
│   └── README.md
├── lab-01-prompt-basics-solution/
│   ├── README.md
│   └── resources/                # Optional: Lab outputs and deliverables
├── lab-02-ai-fundamentals/       # Module 1: AI concepts and LLM understanding
│   └── README.md
├── lab-02-ai-fundamentals-solution/
│   ├── README.md
│   └── resources/                # Optional: Lab outputs and deliverables
├── lab-03-coding-patterns/       # Hands-on coding with AI
│   └── README.md
├── lab-03-coding-patterns-solution/
│   ├── README.md
│   └── resources/                # Optional: Lab outputs and deliverables
├── lab-04-debugging/             # AI-assisted debugging
│   └── README.md
├── lab-04-debugging-solution/
│   ├── README.md
│   └── resources/                # Optional: Lab outputs and deliverables
├── lab-05-testing/               # Test automation with AI
│   └── README.md
├── lab-05-testing-solution/
│   ├── README.md
│   └── resources/                # Optional: Lab outputs and deliverables
├── lab-06-security/              # AI and code security
│   └── README.md
├── lab-06-security-solution/
│   ├── README.md
│   └── resources/                # Optional: Lab outputs and deliverables
├── lab-07-capstone/              # Complete project development
│   └── README.md
└── lab-07-capstone-solution/
    ├── README.md
    └── resources/                # Optional: Lab outputs and deliverables
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

**Version**: 1.6.0 | **Ratified**: 2025-09-18 | **Last Amended**: 2025-10-02