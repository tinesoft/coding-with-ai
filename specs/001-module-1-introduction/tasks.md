# Tasks: Module 1 - Introduction to AI and Prompt Engineering

**Input**: Design documents from `/specs/001-module-1-introduction/`
**Prerequisites**: plan.md (required), research.md, data-model.md, contracts/

## Execution Flow (main)
```
1. Load plan.md from feature directory ✓
   → Extract: SFEIR School Theme, TypeScript 5.8.2, Nx Workspace, Vite
   → Structure: Educational content (slides + labs)
2. Load optional design documents ✓:
   → data-model.md: Extract 6 slide sections + 2 lab exercises
   → contracts/: Content quality standards + learning validation
   → research.md: SFEIR theme syntax patterns + educational approaches
3. Generate tasks by category:
   → Setup: directory structure, slide configuration
   → Content Creation: slide sections, lab exercises
   → Validation: quality checks, constitutional compliance
   → Integration: slides.js updates, asset management
4. Apply task rules:
   → Different slide files = mark [P] for parallel
   → Same configuration file = sequential (no [P])
   → Structure before content creation
5. Number tasks sequentially (T001, T002...)
6. Generate dependency graph
7. Create parallel execution examples
8. Validate task completeness:
   → All slide sections created?
   → All lab exercises developed?
   → Constitutional compliance verified?
9. Return: SUCCESS (tasks ready for execution)
```

## Format: `[ID] [P?] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- Include exact file paths in descriptions

## Path Conventions
- **Slides**: `docs/markdown/10_module_1_ai_fundamentals/` directory
- **Labs**: `labs/lab-XX-topic/` and `labs/lab-XX-topic-solution/`
- **Assets**: `docs/assets/images/` for visual resources
- **Configuration**: `docs/scripts/slides.js` for slide inclusion

## Phase 3.1: Setup and Structure
- [x] T001 Create Module 1 slide directory `docs/markdown/10_module_1_ai_fundamentals/`
- [x] T002 Create lab structure directories: `labs/lab-01-prompt-basics/`, `labs/lab-01-prompt-basics-solution/`, `labs/lab-02-ai-fundamentals/`, `labs/lab-02-ai-fundamentals-solution/`
- [x] T003 [P] Create asset directory for Module 1 images: `docs/assets/images/module-1/`

## Phase 3.2: Content Quality Validation Setup ⚠️ MUST COMPLETE BEFORE 3.3
**CRITICAL: These validation checkpoints MUST be established before content creation**
- [x] T004 [P] ~~Create slide quality validation checklist~~ *Removed: Replaced by constitutional governance*
- [x] T005 [P] ~~Create lab exercise validation criteria~~ *Removed: Replaced by constitutional governance*
- [x] T006 [P] Set up constitutional compliance checklist for Module 1 content

## Phase 3.3: Core Slide Content Creation (ONLY after validation setup)
- [ ] T007 [P] Create `docs/markdown/10_module_1_ai_fundamentals/10_module1_intro.md` with first-slide class, learning objectives, and module overview
- [ ] T008 [P] Create `docs/markdown/10_module_1_ai_fundamentals/11_ai_fundamentals.md` with AI concepts, LLMs, embeddings, and RAG explanations
- [ ] T009 [P] Create `docs/markdown/10_module_1_ai_fundamentals/12_prompt_engineering.md` with techniques, patterns, and best practices
- [ ] T010 [P] Create `docs/markdown/10_module_1_ai_fundamentals/13_exercise_prompts.md` with hands-on prompting exercises using exercice class
- [ ] T011 [P] Create `docs/markdown/10_module_1_ai_fundamentals/14_tools_and_agents.md` with AI tools introduction and safety practices
- [ ] T012 [P] Create `docs/markdown/10_module_1_ai_fundamentals/15_assessment_and_recap.md` with knowledge validation and module summary

## Phase 3.4: Lab Exercise Development
- [ ] T013 [P] Create `labs/lab-01-prompt-basics/README.md` with prompt writing exercises and clear instructions
- [ ] T014 [P] Create `labs/lab-01-prompt-basics/exercises/` directory with practice templates and prompts
- [ ] T015 [P] Create `labs/lab-01-prompt-basics-solution/README.md` with completed solutions and explanations
- [ ] T016 [P] Create `labs/lab-02-ai-fundamentals/README.md` with AI concepts exploration exercises
- [ ] T017 [P] Create `labs/lab-02-ai-fundamentals/resources/` directory with reference materials and examples
- [ ] T018 [P] Create `labs/lab-02-ai-fundamentals-solution/README.md` with solution guides and teaching notes

## Phase 3.5: Integration and Configuration
- [ ] T019 Update `docs/scripts/slides.js` to include all Module 1 slide files in correct sequence
- [ ] T020 Create placeholder images for Module 1 concepts in `docs/assets/images/module-1/`
- [ ] T021 Test slide navigation and SFEIR theme styling for all Module 1 content
- [ ] T022 Verify slide separators (##--##) work correctly between content sections

## Phase 3.6: Quality Assurance and Validation
- [ ] T023 [P] Run content quality validation against contracts/content-quality.md standards
- [ ] T024 [P] Validate learning objectives alignment using contracts/learning-validation.md criteria
- [ ] T025 [P] Verify constitutional compliance for all Module 1 content
- [ ] T026 Execute quickstart.md validation workflow to ensure 40-minute completion target
- [ ] T027 Test complete Module 1 learning journey from intro to assessment

## Dependencies
- Setup (T001-T003) before validation setup (T004-T006)
- Validation setup (T004-T006) before content creation (T007-T012)
- Slide content (T007-T012) before lab development (T013-T018)
- Content creation before integration (T019-T022)
- All content before quality assurance (T023-T027)

## Parallel Execution Examples

### Phase 3.2: Validation Setup (T004-T006)
```bash
# Note: Quality validation is now handled by constitutional governance
# T004 and T005 replaced by constitutional standards
Task: "Set up constitutional compliance checklist for Module 1 content"
```

### Phase 3.3: Slide Content Creation (T007-T012)
```bash
# Launch all slide creation tasks together:
Task: "Create docs/markdown/10_module_1_ai_fundamentals/10_module1_intro.md with first-slide class"
Task: "Create docs/markdown/10_module_1_ai_fundamentals/11_ai_fundamentals.md with AI concepts"
Task: "Create docs/markdown/10_module_1_ai_fundamentals/12_prompt_engineering.md with techniques"
Task: "Create docs/markdown/10_module_1_ai_fundamentals/13_exercise_prompts.md with exercises"
Task: "Create docs/markdown/10_module_1_ai_fundamentals/14_tools_and_agents.md with tools intro"
Task: "Create docs/markdown/10_module_1_ai_fundamentals/15_assessment_and_recap.md with validation"
```

### Phase 3.4: Lab Development (T013-T018)
```bash
# Launch lab creation tasks together:
Task: "Create labs/lab-01-prompt-basics/README.md with prompt writing exercises"
Task: "Create labs/lab-01-prompt-basics/exercises/ directory with practice templates"
Task: "Create labs/lab-01-prompt-basics-solution/README.md with solutions"
Task: "Create labs/lab-02-ai-fundamentals/README.md with exploration exercises"
Task: "Create labs/lab-02-ai-fundamentals/resources/ directory with references"
Task: "Create labs/lab-02-ai-fundamentals-solution/README.md with teaching notes"
```

### Phase 3.6: Quality Validation (T023-T025)
```bash
# Launch quality checks together:
Task: "Run content quality validation against contracts/content-quality.md"
Task: "Validate learning objectives alignment using contracts/learning-validation.md"
Task: "Verify constitutional compliance for all Module 1 content"
```

## SFEIR School Theme Syntax Requirements

### Slide Structure Standards
```markdown
<!-- .slide: class="first-slide" sfeir-level="2" sfeir-techno="AI" -->
# **Welcome to SFEIR School**
## **Module 1: Introduction to AI**

##--##

<!-- .slide: class="transition" -->
# AI Fundamentals
## Core Concepts and Technologies

##--##

<!-- .slide: class="exercice" -->
# Exercise: Prompt Writing
## Objective
Practice effective prompt engineering techniques
```

### Required Elements Per Slide
- **Title**: Clear, descriptive (max 60 characters)
- **Learning Objective**: Specific, measurable outcome
- **Content Body**: SFEIR theme markdown with proper structure
- **Speaker Notes**: Context and delivery guidance
- **Slide Separators**: Use `##--##` between all slides
- **Asset References**: Relative paths from `docs/` (e.g., `./assets/images/module-1/concept.png`)

## Lab Exercise Requirements

### GitHub Flavored Markdown Structure
```markdown
# Lab X: Topic Title

## Learning Objectives
- Specific, measurable outcomes
- Progressive skill building

## Prerequisites
- Required knowledge
- Setup requirements

## Instructions

### Exercise 1: Title
**Objective:** Clear goal statement

**Steps:**
1. Actionable step with expected outcome
2. Next step building on previous
3. Validation and success criteria

## Success Criteria
- [ ] Measurable completion checkboxes
- [ ] Observable skill demonstrations
```

## Constitutional Compliance Checkpoints

### Content Organization (Required)
- [ ] Slides in `docs/markdown/10_module_1_ai_fundamentals/` directory
- [ ] Sequential numbering 10-19 for Module 1
- [ ] SFEIR School Theme markdown syntax compliance
- [ ] Relative asset paths from `docs/` directory

### Educational Standards (Required)
- [ ] Beginner to intermediate developer target audience
- [ ] Practical AI coding skills focus
- [ ] Hands-on learning with real-world applications
- [ ] Progressive skill building sequence

### Quality Assurance (Required)
- [ ] Learning objectives validation
- [ ] Practical utility and confidence building
- [ ] Professional code and content standards
- [ ] Clear language appropriate for skill level

## Validation Checklist
*GATE: Checked before task completion*

- [ ] All 6 slide sections created with proper SFEIR theme syntax
- [ ] All 2 lab exercises developed with GitHub flavored markdown
- [ ] All slide separators (##--##) properly implemented
- [ ] All asset references use relative paths from docs/
- [ ] Sequential numbering (10-19) correctly applied
- [ ] Constitutional compliance verified for all content
- [ ] Learning objectives align with content and assessments
- [ ] Quickstart validation workflow executable in 40 minutes

## Notes
- [P] tasks target different files with no dependencies
- SFEIR School Theme syntax is mandatory for all slide content
- GitHub flavored markdown is required for all lab content
- Constitutional compliance must be verified before task completion
- Focus on practical AI coding skills for beginner-intermediate developers