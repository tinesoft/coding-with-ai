# Implementation Plan: Module 3 - AI-Powered Debugging, Refactoring, and Verification

**Branch**: `003-module-3-ai-debug-refactor-verify` | **Date**: 2025-10-26 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/003-module-3-ai-debug-refactor-verify/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

This module teaches beginner-to-intermediate developers how to leverage AI tools (primarily GitHub Copilot) for debugging, refactoring, and verifying code. It includes three hands-on lab exercises covering systematic debugging with AI assistance, code refactoring best practices, and critical evaluation of AI-generated code to detect hallucinations and security issues. Assessment combines knowledge checks with practical lab completion.

## Technical Context

**Language/Version**: Markdown for slide content, various programming languages for lab exercises (Python, JavaScript/TypeScript for practical examples)
**Primary Dependencies**: 
- SFEIR School Theme (RevealJS-based presentation framework)
- Nx Workspace with Vite
- GitHub Copilot in VS Code (primary AI tool)
- Optional: Claude, Cursor (for demonstrations)
**Storage**: Git repository for version control, file-based markdown for content
**Testing**: Manual review and validation of educational content, hands-on lab verification
**Target Platform**: Web (slides via GitHub Pages), VS Code environment for labs
**Project Type**: Educational training module (slides + labs)
**Performance Goals**: Slides load in <2 seconds, clear navigation flow
**Constraints**: 
- Must follow SFEIR School Theme markdown syntax
- Module-scoped lab numbering (lab-3X-{topic})
- Constitutional compliance for educational standards
- Beginner-to-intermediate skill level appropriate
**Scale/Scope**: 
- 1-day training module (part of 7-day course)
- ~5-7 slide files covering debugging, refactoring, verification topics
- 3 hands-on labs (lab-31, lab-32, lab-33)
- Knowledge check assessment

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Phase 0 Check ✅ PASSED
Constitutional compliance verified before research phase.

### Phase 1 Re-Check ✅ PASSED

**Content Structure Requirements (Principle II)**
- [✓] Slide format defined following SFEIR School Theme syntax
- [✓] Module numbering confirmed (30-37 for Module 3)
- [✓] Lab numbering follows module-scoped pattern (lab-31, lab-32, lab-33)
- [✓] Exercise slides documented with `class="exercice"` directive
- [✓] Visual standards established (SVG preference, dedicated slides)

**Lab Structure Requirements (Principle III)**
- [✓] Three sequential labs designed (lab-31, lab-32, lab-33)
- [✓] Solution structure defined with README.md and resources/
- [✓] Content format specified (GitHub-flavored markdown)
- [✓] Lab-slide alignment documented in data model
- [✓] Exercise-solution correspondence established
- [✓] Deliverable completeness requirement in contracts
- [✓] No administrative checklists in design

**Quality Assurance Standards (Principle V)**
- [✓] Educational objectives validated in learning contract
- [✓] Professional code quality standards in research decisions
- [✓] Progressive skill development: debugging → refactoring → verification
- [✓] Systematic compliance verification in contracts

**Content Accuracy Requirements (Principle VI)**
- [✓] Current AI tool capabilities researched (2025 state)
- [✓] GitHub Copilot features validated against current capabilities

**Data Sourcing Requirements (Principle VII)**
- [✓] Metrics sourcing established (30% debugging improvement with source link)
- [✓] No unsourced claims in design documents

**Sequential Numbering Standards (Principle VIII)**
- [✓] Module-level: Module 3 follows sequential flow
- [✓] Lab-level: Module-scoped numbering (31, 32, 33) established
- [✓] Exercise-level: Sequential from 1 within each lab
- [✓] Cross-reference tracking defined in data model

**Phase 1 Gate Status**: ✅ PASS - All design artifacts comply with constitution

## Project Structure

### Documentation (this feature)

```text
specs/003-module-3-ai-debug-refactor-verify/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
│   └── learning-validation.md  # Assessment contract
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
docs/
├── markdown/
│   └── 30_module_3_debugging/
│       ├── 30_module3_intro.md              # Module introduction and overview
│       ├── 31_ai_debugging.md               # AI-powered debugging techniques
│       ├── 32_refactoring_ai.md             # Refactoring with AI assistance
│       ├── 33_code_verification.md          # Verifying AI-generated code
│       ├── 34_exercise_debugging.md         # Exercise slide for lab-31
│       ├── 35_exercise_refactoring.md       # Exercise slide for lab-32
│       ├── 36_exercise_verification.md      # Exercise slide for lab-33
│       └── 37_assessment_and_recap.md       # Knowledge check and module recap
├── assets/
│   └── images/
│       └── module-3/                        # Module 3 specific visuals
│           ├── debugging-workflow.svg
│           ├── refactoring-patterns.svg
│           └── verification-checklist.svg
└── scripts/
    └── slides.js                            # Updated to include Module 3 slides

labs/
├── lab-31-ai-debugging/
│   ├── README.md                            # Debugging exercise instructions
│   └── exercises/
│       └── buggy-code-samples/              # Intentionally buggy code for practice
├── lab-31-ai-debugging-solution/
│   ├── README.md                            # Solution explanations
│   └── resources/
│       └── fixed-code-samples/              # Corrected code with explanations
├── lab-32-ai-refactoring/
│   ├── README.md                            # Refactoring exercise instructions
│   └── exercises/
│       └── legacy-code/                     # Code needing refactoring
├── lab-32-ai-refactoring-solution/
│   ├── README.md                            # Solution explanations
│   └── resources/
│       └── refactored-code/                 # Improved code examples
├── lab-33-code-verification/
│   ├── README.md                            # Verification exercise instructions
│   └── exercises/
│       └── ai-generated-code/               # AI-generated code to review
└── lab-33-code-verification-solution/
    ├── README.md                            # Solution explanations
    └── resources/
        └── verification-reports/            # Analysis of code issues found
```

**Structure Decision**: Educational module structure with slides in `docs/markdown/30_module_3_debugging/` following sequential numbering (30-37), paired with three module-scoped labs (lab-31, lab-32, lab-33). Each lab includes exercise materials and complete solution with working code examples in resources/ folders.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

No constitutional violations identified. All requirements align with educational content standards.
