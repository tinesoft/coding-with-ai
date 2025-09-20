
# Implementation Plan: Module 1 - Introduction to AI and Prompt Engineering

**Branch**: `001-module-1-introduction` | **Date**: 2025-09-18 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-module-1-introduction/spec.md`

## Execution Flow (/plan command scope)
```
1. Load feature spec from Input path
   → If not found: ERROR "No feature spec at {path}"
2. Fill Technical Context (scan for NEEDS CLARIFICATION)
   → Detect Project Type from context (web=frontend+backend, mobile=app+api)
   → Set Structure Decision based on project type
3. Fill the Constitution Check section based on the content of the constitution document.
4. Evaluate Constitution Check section below
   → If violations exist: Document in Complexity Tracking
   → If no justification possible: ERROR "Simplify approach first"
   → Update Progress Tracking: Initial Constitution Check
5. Execute Phase 0 → research.md
   → If NEEDS CLARIFICATION remain: ERROR "Resolve unknowns"
6. Execute Phase 1 → contracts, data-model.md, quickstart.md, agent-specific template file (e.g., `CLAUDE.md` for Claude Code, `.github/copilot-instructions.md` for GitHub Copilot, or `GEMINI.md` for Gemini CLI).
7. Re-evaluate Constitution Check section
   → If new violations: Refactor design, return to Phase 1
   → Update Progress Tracking: Post-Design Constitution Check
8. Plan Phase 2 → Describe task generation approach (DO NOT create tasks.md)
9. STOP - Ready for /tasks command
```

**IMPORTANT**: The /plan command STOPS at step 7. Phases 2-4 are executed by other commands:
- Phase 2: /tasks command creates tasks.md
- Phase 3-4: Implementation execution (manual or via tools)

## Summary
Create comprehensive Module 1 training content for "Introduction to AI and Prompt Engineering" following SFEIR School constitutional standards. This includes slide content using sfeir-school-theme markdown syntax with slide separators (##--##), hands-on labs with GitHub flavored markdown, and proper sequential numbering system. The module covers AI fundamentals, LLMs, embeddings, RAG, prompt engineering techniques, and introduction to AI coding tools with practical exercises.

## Technical Context
**Language/Version**: Markdown (SFEIR School Theme syntax), TypeScript 5.8.2  
**Primary Dependencies**: sfeir-school-theme, RevealJS, Nx Workspace, Vite  
**Storage**: Static files in docs/markdown/ and labs/ directories  
**Testing**: Manual review against educational objectives and constitutional compliance  
**Target Platform**: Web browsers via GitHub Pages deployment  
**Project Type**: Educational content (slides + labs)  
**Performance Goals**: Fast slide loading, clear educational progression  
**Constraints**: Must follow SFEIR School Theme guidelines, constitutional structure  
**Scale/Scope**: 1 day training module (6-8 hours), 5-6 slide sections, 2-3 lab exercises

## Constitution Check
*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

✅ **Educational Excellence**: Targets beginner to intermediate developers with practical AI coding skills  
✅ **Content Organization**: Places content in `docs/markdown/` using SFEIR School Theme syntax  
✅ **Lab Structure**: Creates sequential lab folders with README.md instructions  
✅ **Asset Management**: Uses relative paths from `docs/` directory  
✅ **Quality Assurance**: Validates against educational objectives and constitutional standards  
✅ **Sequential Numbering**: Follows 10-19 numbering for Module 1 slides  
✅ **Module Organization**: Includes intro, content slides, and exercise slides  
✅ **Technical Stack**: Uses SFEIR School Theme (RevealJS-based) with Nx Workspace

**Status**: PASS - All constitutional requirements satisfied

## Project Structure

### Documentation (this feature)
```
specs/001-module-1-introduction/
├── plan.md              # This file (/plan command output)
├── research.md          # Phase 0 output (/plan command)
├── data-model.md        # Phase 1 output (/plan command)
├── quickstart.md        # Phase 1 output (/plan command)
├── contracts/           # Phase 1 output (/plan command)
└── tasks.md             # Phase 2 output (/tasks command - NOT created by /plan)
```

### Source Code (repository root)
```
docs/
├── markdown/
│   ├── 10_module_1_ai_fundamentals/     # Module 1 content
│   │   ├── 10_module1_intro.md          # Module introduction
│   │   ├── 11_ai_fundamentals.md        # AI core concepts
│   │   ├── 12_prompt_engineering.md     # Prompt engineering techniques
│   │   ├── 13_exercise_prompts.md       # Hands-on prompt exercises
│   │   ├── 14_tools_and_agents.md       # Tools introduction
│   │   └── 15_assessment_and_recap.md   # Module wrap-up
│   └── assets/
│       └── images/                      # Module 1 visual assets
└── scripts/
    └── slides.js                        # Updated slide configuration

labs/
├── lab-01-prompt-basics/                # Introduction to effective prompting
│   └── README.md
├── lab-01-prompt-basics-solution/
│   └── README.md
├── lab-02-ai-fundamentals/              # AI concepts hands-on
│   └── README.md
└── lab-02-ai-fundamentals-solution/
    └── README.md
```

**Structure Decision**: Educational content project following SFEIR School constitutional structure

## Phase 0: Outline & Research
1. **Extract unknowns from Technical Context**:
   - SFEIR School Theme specific markdown syntax patterns
   - RevealJS slide formatting best practices
   - Educational content structuring for AI/ML topics
   - Prompt engineering exercise design

2. **Generate and dispatch research agents**:
   ```
   Task: "Research SFEIR School Theme slide syntax patterns and RevealJS integration"
   Task: "Find best practices for AI/ML educational content structure"
   Task: "Research effective prompt engineering teaching methodologies"
   Task: "Analyze successful coding education lab design patterns"
   ```

3. **Consolidate findings** in `research.md`

**Output**: research.md with all technical and educational research complete

## Phase 1: Design & Contracts
*Prerequisites: research.md complete*

1. **Extract entities from feature spec** → `data-model.md`:
   - Entity name, fields, relationships
   - Validation rules from requirements
   - State transitions if applicable

2. **Generate API contracts** from functional requirements:
   - For each user action → endpoint
   - Use standard REST/GraphQL patterns
   - Output OpenAPI/GraphQL schema to `/contracts/`

3. **Generate contract tests** from contracts:
   - One test file per endpoint
   - Assert request/response schemas
   - Tests must fail (no implementation yet)

4. **Extract test scenarios** from user stories:
   - Each story → integration test scenario
   - Quickstart test = story validation steps

5. **Update agent file incrementally** (O(1) operation):
   - Run `.specify/scripts/bash/update-agent-context.sh copilot` for your AI assistant
   - If exists: Add only NEW tech from current plan
   - Preserve manual additions between markers
   - Update recent changes (keep last 3)
   - Keep under 150 lines for token efficiency
   - Output to repository root

## Phase 1: Design & Contracts
*Prerequisites: research.md complete*

1. **Extract content entities** from feature spec → `data-model.md`:
   - Slide sections with learning objectives
   - Lab exercises with skill progression
   - Assessment criteria and success metrics

2. **Generate content contracts** from educational requirements:
   - Learning objective validation endpoints
   - Exercise completion criteria
   - Assessment rubrics and standards

3. **Generate validation tests** from contracts:
   - Content quality checks
   - Educational objective alignment tests
   - Constitutional compliance validation

4. **Extract learning scenarios** from user stories:
   - Developer learning journey validation
   - Hands-on exercise completion flows

5. **Update agent file incrementally**:
   - Update .github/copilot-instructions.md with Module 1 context
   - Add SFEIR School Theme syntax guidance
   - Include educational content quality standards

**Output**: data-model.md, /contracts/*, validation checklists, quickstart.md, .github/copilot-instructions.md

## Phase 2: Task Planning Approach
*This section describes what the /tasks command will do - DO NOT execute during /plan*

**Task Generation Strategy**:
- Load `.specify/templates/tasks-template.md` as base
- Generate content creation tasks from Phase 1 design docs
- Each slide section → slide creation task
- Each lab exercise → lab development task
- Each assessment → validation task
- Integration tasks for slides.js configuration

**Ordering Strategy**:
- Content-first order: Research → Slides → Labs → Validation
- Dependency order: Introduction → Core concepts → Practical exercises
- Sequential numbering following constitutional guidelines

**Estimated Output**: 15-20 numbered, ordered tasks in tasks.md

**IMPORTANT**: This phase is executed by the /tasks command, NOT by /plan

## Phase 3+: Future Implementation
*These phases are beyond the scope of the /plan command*

**Phase 3**: Task execution (/tasks command creates tasks.md)  
**Phase 4**: Implementation (execute tasks.md following constitutional principles)  
**Phase 5**: Validation (run tests, execute quickstart.md, performance validation)

## Complexity Tracking
*No constitutional violations identified - all requirements satisfied*

## Progress Tracking
*This checklist is updated during execution flow*

**Phase Status**:
- [x] Phase 0: Research complete (/plan command)
- [x] Phase 1: Design complete (/plan command)
- [x] Phase 2: Task planning complete (/plan command - describe approach only)
- [ ] Phase 3: Tasks generated (/tasks command)
- [ ] Phase 4: Implementation complete
- [ ] Phase 5: Validation passed

**Gate Status**:
- [x] Initial Constitution Check: PASS
- [x] Post-Design Constitution Check: PASS
- [x] All NEEDS CLARIFICATION resolved
- [x] Complexity deviations documented (none required)
- [ ] Phase 1: Design complete (/plan command)
- [ ] Phase 2: Task planning complete (/plan command - describe approach only)
- [ ] Phase 3: Tasks generated (/tasks command)
- [ ] Phase 4: Implementation complete
- [ ] Phase 5: Validation passed

**Gate Status**:
- [ ] Initial Constitution Check: PASS
- [ ] Post-Design Constitution Check: PASS
- [ ] All NEEDS CLARIFICATION resolved
- [ ] Complexity deviations documented

---
*Based on Constitution v2.1.1 - See `/memory/constitution.md`*
