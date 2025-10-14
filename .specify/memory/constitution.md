<!--
SYNC IMPACT REPORT:
Version Change: 1.9.0 → 1.10.0
Modified Principles: None
Added Sections: Research Information Currency Requirements (Principle IX) - New principle requiring active fetching of current, accurate information during research phases
Removed Sections: None
Templates Requiring Updates:
  ✅ .specify/memory/constitution.md - Updated with new research information currency principle
  ⚠️ .specify/templates/plan-template.md - May require update to reflect research phase requirements for current information
  ⚠️ Research phase workflows may need adjustment to incorporate active information verification requirements
  ⚠️ Spec development processes may require updates to ensure research includes current information validation
Follow-up TODOs:
  1) Review plan-template.md to ensure research phases include current information gathering requirements
  2) Update research workflows to incorporate active verification of information currency and accuracy
  3) Verify that spec development processes include requirements for current information validation
  4) Ensure all research-dependent activities comply with new information currency standards
Notes: Added new Research Information Currency Requirements principle (IX) mandating active fetching of current, accurate information during research phases. This MINOR version change enhances information quality standards while maintaining existing educational methodology and structure.
-->

# SFEIR School Coding with AI Constitution

**Version**: 1.10.0 | **Ratified**: 2025-09-18 | **Last Amended**: 2025-10-14

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

**Visual Format Preference**: When generating or creating visual assets to illustrate concepts in slides, prefer SVG (Scalable Vector Graphics) format whenever technically feasible. SVG format provides resolution-independent scaling, smaller file sizes for diagrams, easier maintenance through text-based editing, and consistent rendering across all devices and screen resolutions. Raster formats (PNG, JPG, WebP) SHALL only be used when SVG is not technically feasible, such as for photographs, complex photo-realistic images, or graphics with intricate gradients that would result in excessive SVG complexity. For diagrams, flowcharts, architecture illustrations, icons, and technical schematics, SVG MUST be the default choice.

**Visual Presentation Standards**: Illustrative visuals MUST be presented on a dedicated separate slide immediately following the concept slide they illustrate. The visual slide SHALL be created using the slide separator `##--##` after the Notes section of the original concept slide. Visual slides MUST display images at full width while preserving aspect ratio using this exact format:

```markdown
##--##

<img src="{path/to/visual}" alt="{veryShortDescription}" style="width:100%; height:auto; display:block;">
```

When the original concept slide includes a Notes section, that Notes section MUST be updated to reference the visual that follows on the next slide. This ensures clear educational flow where concepts are introduced on one slide and reinforced visually on the dedicated subsequent slide. Visual slides SHALL NOT include additional text, headers, or content beyond the image itself to maintain focus on the illustration.

### V. Quality Assurance Standards
Validate all content against defined educational objectives with focus on practical utility and learner confidence building. Maintain professional code quality standards in all examples and exercises. Prioritize clarity, real-world application, and progressive skill development across all training materials.

**Constitution Compliance Verification**: When making changes to training materials, ALL affected files MUST be systematically reviewed for constitutional compliance. This includes exercise slides, lab instructions, solutions, assessment content, and any cross-references. Changes to one component require verification of consistency across the entire educational package to prevent maintenance burden and ensure cohesive learning experience.

**Content Duplication Prevention**: Exercise slides SHALL NOT duplicate detailed content from lab README files. Slides MUST follow the prescribed format pointing to lab instructions and solutions. This eliminates maintenance overhead and ensures single-source-of-truth for educational content while maintaining proper educational flow.

### VI. Content Accuracy and Currency Requirements
All training materials (slides, labs, exercises, and visual aids) MUST reflect accurate and current information about AI technologies, tools, and best practices as of the constitution's last amendment date. When generating or updating content, verify that all technical information, tool capabilities, API references, and industry practices are current and factually correct. Outdated information MUST be updated or clearly marked with deprecation notices. Content creators SHALL validate all AI tool references, feature availability, and technical specifications against official documentation and current releases before publication.

### VII. Data Sourcing and Citation Requirements
When including metrics, statistics, performance data, or quantitative claims in training materials (slides, labs, exercises), ALL such information MUST be accompanied by a direct link to the original source where that data was obtained. Unsourced data claims SHALL NOT be included in any educational materials. The citation format MUST follow this pattern: `[metric value]([source-link])` to provide immediate access to verification. For example: "**Time to First Working Code**: [30-50% reduction](https://example.com/source)" rather than unsourced claims. This requirement ensures educational integrity, allows learners to verify information independently, and maintains professional standards for factual content. When no verifiable source can be provided, the information MUST be excluded from the training materials entirely.

### VIII. Sequential Numbering and Consistency Standards
All training content MUST maintain strict sequential numbering without gaps to ensure clear educational progression and prevent learner confusion. Sequential numbering SHALL be enforced at three hierarchical levels with MODULE-SCOPED NUMBERING for labs and exercises:

**Module-Level Numbering**: Training modules MUST use sequential numbering (Module 1, Module 2, Module 3, etc.) with no gaps in the sequence. When modules are added, removed, or reorganized, ALL subsequent module numbering MUST be updated to maintain sequential integrity.

**Lab-Level Numbering (Module-Scoped)**: Within each module, laboratories MUST use module-scoped numbering that clearly identifies both the parent module and the sequential position within that module. Lab folder names MUST follow the pattern `lab-[MODULE_NUMBER][SEQUENCE]-{topic}/` where:
- `MODULE_NUMBER` is a single digit (1-7) identifying the parent module
- `SEQUENCE` is a single digit (1, 2, 3...) identifying the sequential position within that module
- Lab numbering RESETS to 1 for each new module
- Examples: Module 1 labs are `lab-11-{topic}`, `lab-12-{topic}`, `lab-13-{topic}`; Module 2 labs are `lab-21-{topic}`, `lab-22-{topic}`, etc.
- This ensures labs are CLEARLY ASSOCIATED with their parent module and prevents ambiguity about which module a lab belongs to.

**Exercise-Level Numbering (Lab-Scoped)**: Within each lab, exercises MUST use sequential numbering (Exercise 1, Exercise 2, Exercise 3, etc.) starting from 1 for the first exercise in each lab. Exercise numbering RESETS to 1 for each new lab. Exercise slides MUST reference labs using the module-scoped format "Lab [MODULE_NUMBER][SEQUENCE]" matching the lab folder name pattern.

**Cross-Reference Consistency**: When content is modified, ALL related materials MUST be updated simultaneously including lab instructions, solutions, exercise slides, assessment content, and navigation references. No orphaned references or broken sequential chains SHALL be permitted. Changes to numbering in one component require immediate verification and update of all dependent references to maintain educational coherence. The module-scoped numbering system ensures clear module boundaries and prevents confusion when working across multiple modules simultaneously.

### IX. Research Information Currency Requirements
During any research phase of content development, training material creation, or educational resource preparation, ALL information gathering activities MUST actively seek and validate the most current and accurate information available. Research SHALL NOT rely solely on static knowledge bases or pre-existing documentation without verification. When conducting research for AI technologies, tools, frameworks, APIs, or industry practices, content creators MUST:

- **Active Information Retrieval**: Actively fetch current information from authoritative online sources, official documentation, and up-to-date repositories rather than relying on potentially outdated cached knowledge
- **Currency Validation**: Verify that all technical information, version numbers, feature availability, and capabilities reflect the current state of the technology as of the research date
- **Source Authority Verification**: Prioritize official documentation, primary sources, and authoritative references over secondary or potentially outdated information sources
- **Real-Time Validation**: When possible, validate information against live APIs, current tool capabilities, and available features rather than assuming functionality based on historical knowledge

**Rationale**: The rapidly evolving nature of AI technologies, tools, and best practices requires that educational content reflect the most current state of the field. Outdated information in training materials can lead to learner confusion, ineffective practices, and reduced educational value. Active research ensures that learners receive accurate, applicable, and professionally relevant instruction that prepares them for current industry practices.

## Training Module Overview

This 7-day training provides a comprehensive journey from AI fundamentals to advanced agentic development workflows, with a strong focus on practical application and enterprise readiness.

### Module 1: AI Fundamentals, Prompt Engineering, and Safety (1 day)
- **AI Fundamentals:** Core concepts, LLMs, embeddings, Retrieval-Augmented Generation (RAG), and context windows
- **Prompt Engineering Theory:** Effective communication patterns with AI systems (e.g., role-playing, constraints, few-shot examples)
- **Safety and Ethics:** AI tool implications for code security, data privacy, and ethical use
  - **Code Security:** Vulnerabilities in AI-generated code (injection attacks, insecure dependencies); best practices for review, testing, and validation
  - **Data Privacy:** Sensitive data exposure risks; compliance with regulations (GDPR, HIPAA); authorization protocols for external services
  - **Ethical Use:** Bias and fairness considerations; transparency in AI assistance disclosure; developer accountability for AI-generated code
  - **Prerequisite for Tool Introduction:** Awareness of safety and ethical considerations essential before integrating AI tools into development workflows; organizational policy establishment for responsible AI tool usage
- **Practical Exercises:** Hands-on prompt writing and iterative refinement

### Module 2: Modern AI Coding Tools and Deep Dive (1.5 days)
- **Agentic Tools Landscape:** Overview of practical tools across categories (CLI, IDEs, Extensions, Online)
  - **CLI-Based Agents:** GitHub Copilot CLI, Codex CLI, Gemini CLI, Claude Code, Opencode, Warp, Aider
  - **Standalone IDEs:** Cursor, Windsurf, Kiro, Zed
  - **IDE Extensions (VS Code/JetBrains):** GitHub Copilot, Roo Code, Kilo Code, Continue,  Codex, Cline (formerly Claude Dev), Amazon Q Developer
  - **Online Tools:** Mention-only (Bolt.new, Firebase Studio, Lovable, v0 by Vercel, Replit AI)
- Focus on GitHub Copilot (VS Code) for hands-on labs and exercises
  - Install the VS Code extension, then add the custom agent “GPT 4.1 - Beast Mode” via this direct link badge: [![Install in VS Code](https://img.shields.io/badge/VS_Code-Install-0098FF?style=flat-square&logo=visualstudiocode&logoColor=white)](https://aka.ms/awesome-copilot/install/chatmode?url=vscode%3Achat-mode%2Finstall%3Furl%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2Fgithub%2Fawesome-copilot%2Fmain%2Fchatmodes%2F4.1-Beast.chatmode.md)
  - Showcase and practice the three modes — Ask (chat), Edit (inline/apply changes), Agent (autonomous task execution with oversight)
  - Showcase custom agent mode
  - Showcase restore points in Github CopilotChat
- **Models Comparison:** Detailed comparison on main coding models and when to use what (e.g., GPT-5 for reasoning, Claude for long context, Gemini for API/multimodal, Deepseek, etc.)

### Module 3: AI-Powered Debugging, Refactoring, and Verification (1 day)
- **AI Debugging:** Systematic problem-solving with AI assistance (focusing on root cause analysis)
- **Refactoring with AI:** Code improvement, modernization, and using AI to maintain backward compatibility
- **Verifying AI Code:** A critical segment on the **Human-in-the-Loop** model and techniques for spotting and fixing AI **hallucinations** and security flaws
- **Debugging Exercises:** Practical troubleshooting scenarios, including finding intentionally introduced AI-generated flaws

### Module 4: Test Automation and Quality Assurance with AI (1 day)
- **Test Automation:** AI-assisted generation of unit, integration, and end-to-end tests
- **Test-Driven Development (TDD) with AI:** Using agents to co-create tests *before* writing implementation code
- **Quality Assurance:** Maintaining coding standards and enforcing best practices using AI-powered static analysis
- **Testing Exercises:** Automated test creation, validation, and increasing test coverage

### Module 5: Code Review, Security Governance, and DevOps (1 day)
- **Code Review with AI:** Using AI assistants to evaluate pull requests, suggest performance improvements, and assess compliance
- **Governance and Policy:** Enterprise AI adoption strategies, policy setting, and controlling tool usage across teams
- **AI in DevOps/LLMOps:** Introduction to integrating AI agents into CI/CD pipelines (e.g., auto-documentation, automated reviews)
- **Review Exercises:** Practical code review scenarios focusing on security and compliance checks

### Module 6: Agentic Development Workflows and Spec-Driven Coding (1.5 days)
- **Agentic Workflows:** Systematic approaches to AI-driven development methodologies
- **Vibe Coding:** Intuitive AI collaboration patterns and advanced agent prompting
- **Spec-Driven Coding (Spec-Kit Deep Dive):** Specification-based development methodology
- **Hands-on Lab:** Dedicated lab on **Spec-Kit** to plan, scaffold, and execute an application module using a documented specification
- **Workflow Exercises:** Building a multi-step agentic process for a defined engineering task

### Module 7: Practical Project - Website Development and Multimodality (1 day)
- **Project Planning:** AI-assisted project architecture and component-level planning
- **Multimodal Prototyping:** Using an AI model (e.g., Gemini Pro) to generate starter UI code from a simple **wireframe sketch or screenshot**
- **Project Execution:** Complete a well-scoped website component/feature using the **workflows and tools from Modules 6 and 2**
- **Project Showcase:** Presentation and evaluation of results, emphasizing the **efficiency gained** through AI-assisted processes

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
- **Primary Tool for Labs**: GitHub Copilot in VS Code (with optional custom agent: “GPT 4.1 - Beast Mode”)
- **Secondary/Optional Tools**: Gemini, Claude, Codex, Cursor, Amazon Q Developer (demonstrated live by trainer; not required for labs)
- **Enterprise Platforms**: Support for professional AI development environments
- **Tool Access**: GitHub account required for Copilot access
- **Multi-Platform**: Cross-platform compatibility for diverse development setups; online tools are mention-only in Module 2 and not used in labs

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
│   ├── 21_agentic_tools_landscape.md
│   ├── 22_copilot_setup_and_modes.md
│   ├── 23_copilot_agent_workflows.md
│   └── 24_exercise_copilot_tools.md
├── 30_module_3_debugging/           # Module 3: Debugging
│   ├── 30_module3_intro.md
│   ├── 31_ai_debugging.md
│   ├── 32_refactoring_ai.md
│   ├── 33_code_analysis.md
│   └── 34_exercise_debugging.md
├── 40_module_4_testing/             # Module 4: Testing
│   ├── 40_module4_intro.md
│   ├── 41_test_automation.md
│   ├── 42_quality_assurance.md
│   └── 43_exercise_testing.md
├── 50_module_5_review_security/     # Module 5: Review & Security
│   ├── 50_module5_intro.md
│   ├── 51_code_review_ai.md
│   ├── 52_security_basics.md
│   ├── 53_governance.md
│   └── 54_exercise_review.md
├── 60_module_6_workflows/           # Module 6: Workflows
│   ├── 60_module6_intro.md
│   ├── 61_agentic_workflows.md
│   ├── 62_vibe_coding.md
│   ├── 63_spec_driven_coding.md
│   └── 64_exercise_workflows.md
├── 70_module_7_capstone/            # Module 7: Capstone Project
│   ├── 70_module7_intro.md
│   ├── 71_project_planning.md
│   ├── 72_project_execution.md
│   └── 73_project_showcase.md
└── assets/
    └── images/        # Generated visual assets and diagrams
```

### Laboratory Structure (Module-Scoped Numbering)
```
labs/
├── lab-11-prompt-basics/         # Module 1, Lab 1: Prompt engineering fundamentals
│   └── README.md
├── lab-11-prompt-basics-solution/
│   ├── README.md
│   └── resources/                # Optional: Lab outputs and deliverables
├── lab-12-ai-fundamentals/       # Module 1, Lab 2: AI concepts and LLM understanding
│   └── README.md
├── lab-12-ai-fundamentals-solution/
│   ├── README.md
│   └── resources/                # Optional: Lab outputs and deliverables
├── lab-21-copilot-cli/           # Module 2, Lab 1: CLI agent hands-on (GitHub Copilot CLI)
│   └── README.md
├── lab-21-copilot-cli-solution/
│   ├── README.md
│   └── resources/
├── lab-22-copilot-vscode/        # Module 2, Lab 2: Deep dive on Copilot in VS Code (modes, custom agents)
│   └── README.md
├── lab-22-copilot-vscode-solution/
│   ├── README.md
│   └── resources/
├── lab-23-model-comparison/      # Module 2, Lab 3: Coding model comparison (GPT-5, Claude, Gemini, etc.)
│   └── README.md
├── lab-23-model-comparison-solution/
│   ├── README.md
│   └── resources/
├── lab-31-ai-debugging/          # Module 3, Lab 1: AI-powered debugging and verification (Human-in-the-Loop)
│   └── README.md
├── lab-31-ai-debugging-solution/
│   ├── README.md
│   └── resources/
├── lab-41-test-automation/       # Module 4, Lab 1: Test automation and TDD with AI
│   └── README.md
├── lab-41-test-automation-solution/
│   ├── README.md
│   └── resources/
├── lab-51-code-review/           # Module 5, Lab 1: AI-assisted code review and DevOps integration
│   └── README.md
├── lab-51-code-review-solution/
│   ├── README.md
│   └── resources/
├── lab-61-agentic-workflows/     # Module 6, Lab 1: Agentic development workflows
│   └── README.md
├── lab-61-agentic-workflows-solution/
│   ├── README.md
│   └── resources/
├── lab-62-spec-kit/              # Module 6, Lab 2: Spec-Kit deep dive and hands-on
│   └── README.md
├── lab-62-spec-kit-solution/
│   ├── README.md
│   └── resources/
├── lab-71-multimodal-project/    # Module 7, Lab 1: Multimodal website prototyping and project execution
│   └── README.md
├── lab-71-multimodal-project-solution/
│   ├── README.md
│   └── resources/
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

**Version**: 1.10.0 | **Ratified**: 2025-09-18 | **Last Amended**: 2025-10-14