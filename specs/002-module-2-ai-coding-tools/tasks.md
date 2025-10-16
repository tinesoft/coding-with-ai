# Tasks: Module 2 - Modern AI Coding Tools

**Input**: Design documents from `/specs/002-module-2-ai-coding-tools/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Manual validation via dev server and learner assessment rubrics as specified in plan.md

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3, US4)
- Include exact file paths in descriptions

## Path Conventions
- **Educational content**: `docs/markdown/20_module_2_ai_tools/`, `labs/lab-2X/`
- **Assets**: `docs/assets/images/module-2/`
- Paths based on plan.md structure for SFEIR School Theme architecture

## Overview

This task list implements comprehensive educational content for modern AI coding tools training. Tasks are organized by user story to enable independent implementation and testing. Each user story represents a deliverable increment that provides learner value.

**Total Tasks**: 46  
**Parallel Opportunities**: 19 tasks marked with [P]  
**Independent Stories**: 4 user stories can be implemented independently  
**MVP Scope**: User Story 1 (AI Coding Tools Landscape Overview)

- **MAJOR UPDATE (October 16, 2025)**: Comprehensive content accuracy review completed
- ✅ All AI model references updated to current versions (GPT-5 / GPT-4.5, Claude 4.x, Gemini 2.5)
- ✅ Tool installation methods updated to October 2025 standards
- ✅ Pricing, features, and capabilities reflect current market state
- ✅ Lab content created with hands-on exercises using current tools
- ✅ Assessment criteria updated for current AI landscape

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure per plan.md educational content architecture

- [x] T001 Create directory structure per implementation plan in docs/markdown/20_module_2_ai_tools/
- [x] T002 Create lab directory structure for lab-21-copilot-cli, lab-22-copilot-vscode, lab-23-agent-instruction-files
- [x] T003 Create solution directory structure for all labs with README.md placeholders
- [x] T004 Create assets directory structure in docs/assets/images/module-2/
- [x] T005 Update docs/scripts/slides.js to register Module 2 slides (20-25)
- [x] T006 [P] Verify development server configuration supports Module 2 content via npm run start

## Phase 2: Foundational Content

*Goal: Core content foundation that all user stories depend on*

- [x] T007 Create 20_module2_intro.md with module overview and learning objectives
- [x] T008 Create 25_assessment_and_recap.md with module summary and assessment framework
- [x] T009 [P] Research and validate current AI tool information per Constitution IX requirements - COMPLETED with October 2025 research update
- [x] T010 [P] Create assessment rubric template per FR-014 for agent instruction file evaluation

## Phase 3: User Story 1 - AI Coding Tools Landscape Overview (Priority P1)

*Goal: Comprehensive overview of AI coding tools categorization*  
*Independent Test*: Learners can categorize 8/10 AI tools correctly within 5 minutes

### Content Creation
- [x] T011 [US1] Create 21_tools_landscape.md with comprehensive AI tools categorization content - UPDATED with October 2025 current tool information
- [x] T012 [P] [US1] Create tools-landscape-diagram.svg showing four categories with tool examples
- [x] T013 [US1] Add tool categorization exercise slide linking to assessment criteria

### Visual Assets
- [x] T014 [P] [US1] Design CLI agents section with GitHub Copilot CLI, Aider, Gemini CLI, Warp examples  
- [x] T015 [P] [US1] Design standalone IDEs section with Cursor, Windsurf, Zed, Kiro examples
- [x] T016 [P] [US1] Design IDE extensions section with GitHub Copilot, Continue, Cline examples
- [x] T017 [P] [US1] Design online tools section with mention-only approach for Bolt.new, v0, etc.

### Assessment Integration  
- [x] T018 [US1] Create assessment criteria for tool categorization success (SC-001)
- [x] T019 [US1] Define independent test criteria for US1 completion validation

## Phase 4: User Story 2 - GitHub Copilot Deep Dive (Priority P2)

*Goal: Hands-on GitHub Copilot mastery in VS Code*  
*Independent Test*: Learners complete coding task using all three Copilot modes

### Slide Content
- [x] T020 [US2] Create 22_copilot_deep_dive.md with installation and three modes content - FULLY UPDATED with October 2025 features (Chat, Edits, Workspace, Custom Instructions)
- [ ] T021 [P] [US2] Create copilot-modes-workflow.svg showing Ask, Edit, Agent mode progression
- [ ] T022 [US2] Add GPT 4.1 - Beast Mode custom agent installation content with badge

### Lab 21: GitHub Copilot CLI  
- [x] T023 [US2] Create lab-21-copilot-cli/README.md with CLI installation and main commands - COMPLETED with correct npm installation method
- [ ] T024 [US2] Create lab-21-copilot-cli/exercises/ with CLI workflow scenarios
- [x] T025 [US2] Create lab-21-copilot-cli-solution/README.md with complete CLI solutions - COMPLETED with comprehensive solutions and troubleshooting
- [ ] T026 [P] [US2] Create lab-21-copilot-cli-solution/resources/ with CLI output examples

### Lab 22: GitHub Copilot VS Code Extension
- [x] T027 [US2] Create lab-22-copilot-vscode/README.md with extension installation and exploration - COMPLETED with Chat, Edits, Workspace features
- [ ] T028 [US2] Create lab-22-copilot-vscode/exercises/ with three modes practice scenarios
- [ ] T029 [US2] Create lab-22-copilot-vscode-solution/README.md with mode-specific solutions  
- [ ] T030 [P] [US2] Create lab-22-copilot-vscode-solution/resources/ with example interactions

### Lab 23: AI Model Comparison (NEW)
- [x] T027b [US3] Create lab-23-model-comparison/README.md with GPT-5, Claude 4.x, Gemini 2.5 comparison - COMPLETED with systematic evaluation framework

### Assessment Integration
- [ ] T031 [US2] Create assessment criteria for Copilot proficiency (SC-002, SC-003)
- [ ] T032 [US2] Create assessment criteria for AI-assisted coding speed improvement (SC-004)
- [ ] T033 [US2] Define independent test criteria for US2 completion validation

## Phase 5: User Story 3 - AI Model Comparison (Priority P3)

*Goal: Understanding AI model strengths and use cases*  
*Independent Test*: Learners recommend appropriate models for 4/5 coding scenarios

### Content Creation  
- [ ] T034 [US3] Create 23_model_comparison.md with GPT-5, Claude, Gemini, Deepseek comparison
- [ ] T035 [P] [US3] Create model-comparison-matrix.svg with capabilities and use cases
- [ ] T036 [US3] Add model selection exercise with reasoning justification requirements

### Assessment Integration
- [ ] T037 [US3] Create assessment criteria for model selection proficiency (SC-005)  
- [ ] T038 [US3] Define independent test criteria for US3 completion validation

## Phase 6: User Story 4 - Agent Instruction Files (Priority P3)

*Goal: Creating and maintaining AI agent instruction files using GitHub Copilot CLI and VS Code extension*  
*Independent Test*: Learners create instruction files meeting 5-point rubric criteria using both GitHub Copilot approaches

### Content Creation
- [ ] T039 [US4] Create 24_agent_instruction_files.md with instruction file concepts and examples
- [ ] T040 [P] [US4] Create agent-files-structure.svg showing file types and relationships

### Lab 23: Agent Instruction Files (GitHub Copilot CLI & VS Code Extension)
- [ ] T041 [US4] Create lab-23-agent-instruction-files/README.md with GitHub Copilot CLI and VS Code extension instruction file creation exercises
- [ ] T042 [US4] Create lab-23-agent-instruction-files/exercises/ with codebase analysis scenarios using both CLI and VS Code approaches
- [ ] T043 [US4] Create lab-23-agent-instruction-files-solution/README.md with example instruction files for both GitHub Copilot CLI and VS Code extension
- [ ] T044 [P] [US4] Create lab-23-agent-instruction-files-solution/resources/ with sample project contexts and instruction file templates

### Assessment Integration  
- [ ] T045 [US4] Create assessment criteria for instruction file quality (SC-007, SC-008)
- [ ] T046 [US4] Define independent test criteria for US4 completion validation

## Dependencies & Execution Order

### User Story Dependencies
```
Setup (T001-T006) → Foundational (T007-T010) → All User Stories
├── US1 (T011-T019) - Independent, can be delivered alone as MVP
├── US2 (T020-T033) - Independent, requires basic AI knowledge from Module 1  
├── US3 (T034-T038) - Independent, can run parallel with US1/US2
└── US4 (T039-T046) - Independent, builds conceptually on US2 but deliverable alone
```

### Critical Path Tasks (Sequential)
1. T001-T005: Directory structure setup
2. T007: Module intro (foundation for all content)  
3. T009: Research validation (blocks accurate content creation)
4. Story-specific content tasks (T011, T020, T033, T038)
5. Assessment integration tasks (T018, T031, T036, T044)

### Parallel Execution Opportunities
**Visual Assets Group**: T012, T014-T017, T021, T035, T040 (8 tasks)  
**Solution Resources Group**: T026, T030, T044 (3 tasks)  
**Research & Validation Group**: T009, T010 (2 tasks)  
**Assessment Criteria Group**: T018, T031, T032, T037, T045 (5 tasks)  
**Independent Validation**: T006 (1 task)

**Total Parallelizable**: 19 tasks

## Implementation Strategy

### MVP Delivery (User Story 1 Only)
**Tasks**: T001-T010, T011-T019 (19 total)  
**Delivers**: Complete AI tools landscape overview with assessment  
**Value**: Foundational knowledge for informed AI tool selection  
**Timeline**: ~40% of total development effort

### Incremental Delivery Plan  
1. **MVP**: US1 - Tools landscape (T001-T019)
2. **Increment 2**: US2 - Copilot deep dive (T020-T033)  
3. **Increment 3**: US3 - Model comparison (T034-T038)
4. **Increment 4**: US4 - Agent instruction files (T039-T046)

### Quality Gates
- **After MVP**: Validate tools categorization accuracy and learner assessment
- **After US2**: Test three Copilot modes functionality and lab exercises  
- **After US3**: Verify model comparison accuracy and selection scenarios
- **After US4**: Validate instruction file rubric and assessment criteria

### Success Metrics Per Story
- **US1**: 90% categorization accuracy (SC-001), independent test completable
- **US2**: 100% Copilot installation success (SC-002), 85% custom agent usage (SC-003)
- **US3**: 90% correct model recommendations (SC-005)  
- **US4**: 80% quality rubric success (SC-007), 5+ pattern identification (SC-008)

## Notes

- All slide content follows SFEIR School Theme markdown syntax per FR-008
- Lab numbering uses module-scoped format (lab-21, lab-22, lab-23) per Constitution  
- Visual assets prefer SVG format per Asset Management Protocol
- Assessment rubric follows 5-point scale per clarification session
- Google Gemini fallback strategy integrated per tool access failure handling
- Mixed delivery format (presentations + demos + practice) per FR-013
- **Lab-23 Scope Clarification**: Lab-23 focuses on Agent Instruction Files creation using GitHub Copilot CLI and VS Code extension approaches, NOT model comparison (existing workspace structure may contain outdated lab-23-model-comparison directories)