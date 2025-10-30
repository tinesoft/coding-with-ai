# Implementation Plan: Module 4 - Test Automation and Quality Assurance with AI

**Branch**: `004-module-4-testing` | **Date**: 2025-10-30 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/004-module-4-testing/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Module 4 provides comprehensive training on AI-assisted test automation and quality assurance, teaching developers to leverage GitHub Copilot for generating unit tests, practicing Test-Driven Development (TDD), creating integration and end-to-end tests, and maintaining code quality standards. The module consists of slide presentations, three hands-on labs (lab-41-unit-testing, lab-42-tdd-workflow, lab-43-integration-quality), exercise slides, and assessment content with knowledge checks. All content uses TypeScript with Vitest for testing, Playwright for E2E tests, and follows SFEIR School Theme constitutional formatting requirements.

## Technical Context

**Language/Version**: TypeScript (ES2022+) for lab exercises and code examples
**Primary Dependencies**: 
- Vitest (testing framework for unit and integration tests)
- Playwright (E2E testing framework)
- GitHub Copilot (VS Code extension, primary AI tool)
- Nx Workspace (build system and monorepo management)
- SFEIR School Theme (RevealJS-based presentation framework)

**Storage**: File-based (markdown slides, lab code, solution examples) - No database required
**Testing**: Vitest for unit/integration tests, Playwright for E2E tests
**Target Platform**: Web-based training materials (slides hosted via GitHub Pages), lab exercises in VS Code development environment
**Project Type**: Educational content (training materials) - Documentation-heavy with code examples
**Performance Goals**: 
- Slide load time <2 seconds
- Lab exercises completable within specified time limits (15 min for unit tests, 30 min for TDD cycle)
- Test execution time <5 seconds for unit tests, <30 seconds for E2E tests

**Constraints**: 
- Must comply with SFEIR School Theme markdown syntax and constitutional formatting standards
- Module 4 has 1 full training day (6-7 hours including breaks)
- All code examples must use TypeScript with Vitest
- Constitutional compliance required for all slides, labs, and assessments

**Scale/Scope**: 
- 1 module slide deck (~30-40 slides including intro, content, exercises, assessment)
- 3 lab folders with exercises and solutions
- 3 exercise slide files
- 1 assessment slide file with knowledge checks
- Module-scoped numbering (lab-41, lab-42, lab-43)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Principle I: Educational Excellence
- ✅ **Comprehensive Training**: Module provides measurable skill building in AI-assisted testing
- ✅ **Hands-on Learning**: Three labs with practical exercises and real-world application
- ✅ **Professional Development**: Focus on GitHub Copilot and modern testing workflows
- ✅ **Target Audience**: Beginner to intermediate developers with clear prerequisites
- ✅ **Skill Building**: Progressive learning from unit tests → TDD → integration/E2E → quality

### Principle II: Content Organization Standards
- ✅ **SFEIR School Theme**: All slides use correct markdown syntax with proper class directives
- ✅ **Module Numbering**: Files in `docs/markdown/40_module_4_testing/` (40-49 range)
- ✅ **Slide Classes**: First slide uses `class="first-slide"`, module intro uses `class="transition"`
- ✅ **Transition Format**: "Module 4: {title}" format with subtitle
- ✅ **Module Intro Structure**: EXACTLY three slides (transition, learning objectives, prerequisites)
- ✅ **Assessment Structure**: Four slides (transition, objectives review, knowledge checks, resources)
- ✅ **Knowledge Check Format**: Single-slide with `<details>` tags for answers
- ✅ **Resources Format**: Standardized template with Documentation and Lab Solutions sections
- ✅ **Exercise Format**: Files start directly with `class="exercice"` directive
- ✅ **Regular Slide Format**: `<br>` tag between H2 and H3 headers
- ✅ **GitHub Copilot Terminology**: Use "Ask Mode", "Edit Mode", "Agent Mode" terminology

### Principle III: Lab Structure Requirements
- ✅ **Sequential Labs**: lab-41-unit-testing, lab-42-tdd-workflow, lab-43-integration-quality
- ✅ **Module-Scoped Numbering**: Pattern `lab-4X-{topic}` where X is 1-3
- ✅ **Solution Folders**: Each lab has corresponding `-solution/` folder
- ✅ **Mandatory README**: Each solution folder contains README.md
- ✅ **Resources Directory**: Optional `resources/` for lab deliverables
- ✅ **GitHub Markdown**: All lab instructions use GitHub-flavored markdown
- ✅ **Clear Objectives**: Each lab has objectives, prerequisites, success criteria
- ✅ **Scaffolded Projects**: Starter code provided with intentional quality issues
- ✅ **Lab-Slide Alignment**: Labs reinforce concepts from slide presentations
- ✅ **Exercise-Solution Correspondence**: Solutions match exercises in sequential order
- ✅ **No Admin Checklists**: No "Success Criteria Checklist" sections in lab files

### Principle IV: Asset Management Protocol
- ✅ **Asset Location**: Visual assets in `docs/assets/images/module-4/`
- ✅ **Relative Paths**: All asset references use relative paths from `docs/`
- ✅ **SVG Preference**: Diagrams and illustrations use SVG when feasible
- ✅ **Visual Presentation**: Illustrative visuals on dedicated slides with full-width format
- ✅ **SFEIR Branding**: Consistent visual style maintained

### Principle V: Quality Assurance Standards
- ✅ **Educational Objectives**: Content validated against defined learning outcomes
- ✅ **Code Quality**: Professional standards in all examples
- ✅ **Progressive Skill Development**: Clear learning progression P1→P2→P3→P4
- ✅ **Constitution Compliance**: All materials systematically reviewed
- ✅ **No Content Duplication**: Exercise slides point to labs, don't duplicate content
- ✅ **Practical Utility**: Focus on real-world AI-assisted testing workflows

### Principle VI: Content Accuracy Requirements
- ✅ **Current Information**: Vitest and Playwright are current as of 2025
- ✅ **Accurate Tool References**: GitHub Copilot features and capabilities verified
- ✅ **Best Practices**: TypeScript + Vitest + Playwright align with modern standards

### Principle VII: Data Sourcing Requirements
- ✅ **Source Citations**: Success criteria reference verifiable outcomes (coverage %, time limits)
- ⚠️  **Performance Claims**: If adding statistics about AI testing benefits, must include source links

### Sequential Numbering Standards
- ✅ **Module-Level**: Module 4 follows Module 3, sequential order maintained
- ✅ **Lab-Level**: Module-scoped pattern lab-41, lab-42, lab-43
- ✅ **Exercise-Level**: Exercises numbered sequentially within each lab
- ✅ **No Gaps**: Sequential numbering without gaps

### Research Information Currency
- ✅ **Active Research**: Will validate Vitest/Playwright versions and best practices
- ✅ **Current Tools**: Focus on 2025-current testing tools and AI capabilities

**GATE STATUS**: ✅ **PASSED** - All constitutional requirements met, no violations requiring justification

## Project Structure

### Documentation (this feature)

```text
specs/004-module-4-testing/
├── spec.md              # Feature specification
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (testing best practices, Vitest/Playwright research)
├── data-model.md        # Phase 1 output (content entities and relationships)
├── quickstart.md        # Phase 1 output (getting started guide for content creators)
├── contracts/           # Phase 1 output (slide/lab content contracts)
│   ├── slide-structure.yaml     # Slide deck structure and metadata
│   ├── lab-structure.yaml       # Lab folder structure and requirements
│   └── assessment-criteria.yaml # Knowledge check and success criteria
└── checklists/
    └── requirements.md  # Specification quality validation checklist
```

### Training Content (repository root)

```text
docs/
├── markdown/
│   └── 40_module_4_testing/
│       ├── 40_module4_intro.md                    # Module introduction (3 slides)
│       ├── 41_test_automation.md                  # Test automation fundamentals
│       ├── 42_tdd_with_ai.md                      # TDD methodology and workflows
│       ├── 43_integration_e2e_testing.md          # Integration and E2E testing
│       ├── 44_code_quality_analysis.md            # Quality assurance and static analysis
│       ├── 45_exercise_unit_testing.md            # Exercise: Lab 41
│       ├── 46_exercise_tdd_workflow.md            # Exercise: Lab 42
│       ├── 47_exercise_integration_quality.md     # Exercise: Lab 43
│       └── 48_assessment_and_recap.md             # Assessment and resources (4 slides)
├── assets/
│   └── images/
│       └── module-4/
│           ├── test-generation-flow.svg           # AI test generation diagram
│           ├── tdd-cycle.svg                      # Red-Green-Refactor visualization
│           ├── test-pyramid.svg                   # Testing pyramid with AI context
│           └── quality-metrics-dashboard.svg      # Code quality visualization
└── scripts/
    └── slides.js                                  # Slide configuration (update required)

labs/
├── lab-41-unit-testing/
│   ├── README.md                                  # Exercise instructions
│   └── exercises/
│       ├── starter-code/                          # Functions needing tests
│       │   ├── calculator.ts
│       │   ├── user-validator.ts
│       │   └── data-transformer.ts
│       └── vitest.config.ts                       # Vitest configuration
├── lab-41-unit-testing-solution/
│   ├── README.md                                  # Solution explanations
│   └── resources/
│       ├── completed-tests/                       # Fully tested code
│       │   ├── calculator.spec.ts
│       │   ├── user-validator.spec.ts
│       │   └── data-transformer.spec.ts
│       └── coverage-report/                       # Example coverage output
├── lab-42-tdd-workflow/
│   ├── README.md                                  # TDD exercise instructions
│   └── exercises/
│       ├── feature-spec.md                        # Feature to implement via TDD
│       ├── vitest.config.ts
│       └── src/                                   # Empty starter structure
├── lab-42-tdd-workflow-solution/
│   ├── README.md                                  # TDD solution walkthrough
│   └── resources/
│       ├── red-phase/                             # Failing tests
│       ├── green-phase/                           # Minimal implementation
│       └── refactor-phase/                        # Improved implementation
├── lab-43-integration-quality/
│   ├── README.md                                  # Integration/E2E/Quality exercises
│   └── exercises/
│       ├── multi-component-app/                   # App for integration testing
│       │   ├── src/
│       │   │   ├── api/
│       │   │   ├── services/
│       │   │   └── utils/
│       │   ├── vitest.config.ts
│       │   └── playwright.config.ts
│       └── code-with-quality-issues/              # Code needing quality improvements
│           ├── messy-code.ts
│           └── complex-function.ts
└── lab-43-integration-quality-solution/
    ├── README.md                                  # Solution explanations
    └── resources/
        ├── integration-tests/                     # Integration test examples
        │   ├── api-service.integration.spec.ts
        │   └── data-flow.integration.spec.ts
        ├── e2e-tests/                             # E2E test examples (Playwright)
        │   ├── user-journey.spec.ts
        │   └── critical-workflow.spec.ts
        └── quality-improvements/                  # Refactored code with quality fixes
            ├── cleaned-code.ts
            └── refactored-function.ts
```

**Structure Decision**: Educational content structure for training materials. No traditional application code - this is documentation and lab exercises. The structure follows SFEIR School Theme conventions with module-numbered slides (40-49 range) and module-scoped lab numbering (lab-41, lab-42, lab-43). Each lab has corresponding solution folder with `resources/` containing complete working examples.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

**No violations** - All constitutional requirements met. No complexity justification needed.

---

## Implementation Phases

### Phase 0: Research ✅ Complete
**Deliverables Created:**
- `research.md` - Comprehensive research covering:
  - Vitest best practices and configuration
  - Playwright E2E testing setup
  - AI-assisted test generation patterns (3 prompt patterns with examples)
  - Code quality metrics (cyclomatic complexity, duplication, naming)
  - Human-in-the-loop validation strategies
  - F.I.R.S.T testing principles

### Phase 1: Design & Contracts ✅ Complete
**Deliverables Created:**
- `data-model.md` - Entity definitions with 10 content entities, relationships, validation rules
- `contracts/slide-structure.yaml` - 9 slide file specifications with constitutional requirements
- `contracts/lab-structure.yaml` - 3 lab folder structures (lab-41, lab-42, lab-43) with deliverables
- `contracts/assessment-criteria.yaml` - Knowledge check format and resource slide templates
- `quickstart.md` - Implementation guide for content creators
- Agent context updated - Added TypeScript, Vitest, Playwright to `.github/copilot-instructions.md`

### Phase 2: Task Breakdown
**Status:** ⏳ Pending - Requires separate `/speckit.tasks` command

**Note:** The `/speckit.plan` command completes at Phase 1. Task decomposition into actionable work items is handled by the dedicated `/speckit.tasks` command as the next step in the spec-kit workflow.
