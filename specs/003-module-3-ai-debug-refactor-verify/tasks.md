# Tasks: Module 3 - AI-Powered Debugging, Refactoring, and Verification

**Input**: Design documents from `/specs/003-module-3-ai-debug-refactor-verify/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/learning-validation.md

**Tests**: Not requested - focus on educational content creation and validation

**Organization**: Tasks are grouped by user story (content modules) to enable independent implementation and testing

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

Educational content structure:
- **Slides**: `docs/markdown/30_module_3_debugging/`
- **Labs**: `labs/lab-3X-{topic}/` and `labs/lab-3X-{topic}-solution/`
- **Assets**: `docs/assets/images/module-3/`
- **Config**: `docs/scripts/slides.js`

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Create module structure and initialize directories

- [x] T001 Create module directory structure at docs/markdown/30_module_3_debugging/
- [x] T002 [P] Create module assets directory at docs/assets/images/module-3/
- [x] T003 [P] Create lab directory structure for lab-31-ai-debugging and lab-31-ai-debugging-solution
- [x] T004 [P] Create lab directory structure for lab-32-ai-refactoring and lab-32-ai-refactoring-solution
- [x] T005 [P] Create lab directory structure for lab-33-code-verification and lab-33-code-verification-solution
- [x] T006 Create checklists directory at specs/003-module-3-ai-debug-refactor-verify/checklists/

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core content that establishes module structure and dependencies

**⚠️ CRITICAL**: These must be complete before individual user story content can be created

- [x] T007 Create module introduction slide at docs/markdown/30_module_3_debugging/30_module3_intro.md
- [x] T008 Create module assessment slide at docs/markdown/30_module_3_debugging/37_assessment_and_recap.md
- [x] T009 Update slides.js to register Module 3 slides in docs/scripts/slides.js
- [x] T009 [P] Update docs/scripts/slides.js to register Module 3 slides (30-37)

### Validation and Compliance

- [x] T010 [US1, US2, US3] Create constitutional compliance checklist at specs/003-module-3-ai-debug-refactor-verify/checklists/constitutional-compliance.md

**Checkpoint**: Foundation ready - user story content creation can now begin in parallel

---

## Phase 3: User Story 1 - Debugging with AI Assistance (Priority: P1) 🎯 MVP

**Goal**: Teach developers to use AI tools for systematic debugging and root cause analysis

**Independent Test**: Learners can debug 5-7 intentionally buggy code samples using AI assistance and explain root causes

### Slide Content for User Story 1

- [x] T011 [P] [US1] Create AI debugging concepts slide at docs/markdown/30_module_3_debugging/31_debugging_concepts.md
- [x] T012 [P] [US1] Create debugging workflow diagram at docs/assets/images/module-3/ai-debugging-workflow.svg
- [x] T013 [US1] Create debugging workflow slide at docs/markdown/30_module_3_debugging/32_debugging_workflow.md
- [x] T014 [US1] Create exercise slide for lab-31 at docs/markdown/30_module_3_debugging/34_exercise_debugging.md

### Lab Content for User Story 1

- [x] T015 [P] [US1] Create lab-31 README with debugging exercises at labs/lab-31-ai-debugging/README.md
- [x] T016 [P] [US1] Create buggy Python code samples in labs/lab-31-ai-debugging/exercises/buggy-code-samples/
- [x] T017 [US1] Create logic error example (off-by-one) in labs/lab-31-ai-debugging/exercises/buggy-code-samples/logic_error.py
- [x] T018 [US1] Create runtime error example (null access) in labs/lab-31-ai-debugging/exercises/buggy-code-samples/runtime_error.py
- [x] T019 [US1] Create scope issue example (variable shadowing) in labs/lab-31-ai-debugging/exercises/buggy-code-samples/scope_issue.py
- [x] T020 [US1] Create integration bug example (API misuse) in labs/lab-31-ai-debugging/exercises/buggy-code-samples/integration_bug.py
- [x] T021 [US1] Create silent failure example (wrong return value) in labs/lab-31-ai-debugging/exercises/buggy-code-samples/silent_failure.py

### Solution Content for User Story 1

- [x] T022 [US1] Create lab-31 solution README at labs/lab-31-ai-debugging-solution/README.md
- [x] T023 [P] [US1] Create fixed code samples with explanations in labs/lab-31-ai-debugging-solution/resources/fixed-code-samples/
- [x] T024 [US1] Document debugging process for logic error in solution README
- [x] T025 [US1] Document debugging process for runtime error in solution README
- [x] T026 [US1] Document debugging process for scope issue in solution README
- [x] T027 [US1] Document debugging process for integration bug in solution README
- [x] T028 [US1] Document debugging process for silent failure in solution README

**Checkpoint**: User Story 1 (Debugging content) complete and independently testable

---

## Phase 4: User Story 2 - Refactoring Code with AI (Priority: P2)

**Goal**: Teach developers to leverage AI for code refactoring while maintaining quality and compatibility

**Independent Test**: Learners can apply 4-6 refactoring patterns to legacy code using AI tools and evaluate appropriateness

### Slide Content for User Story 2

- [x] T029 [P] [US2] Create AI refactoring concepts slide at docs/markdown/30_module_3_debugging/33_refactoring_ai.md
- [x] T030 [P] [US2] Create refactoring patterns diagram at docs/assets/images/module-3/refactoring-patterns.svg
- [x] T031 [US2] Create refactoring patterns visual slide (dedicated slide after 32) using full-width image format
- [x] T032 [US2] Create exercise slide for lab-32 at docs/markdown/30_module_3_debugging/35_exercise_refactoring.md

### Lab Content for User Story 2

- [x] T033 [P] [US2] Create lab-32 README with refactoring exercises at labs/lab-32-ai-refactoring/README.md
- [x] T034 [P] [US2] Create legacy JavaScript/TypeScript code in labs/lab-32-ai-refactoring/exercises/legacy-code/
- [x] T035 [US2] Create extract method example in labs/lab-32-ai-refactoring/exercises/legacy-code/extract_method.js
- [x] T036 [US2] Create rename for clarity example in labs/lab-32-ai-refactoring/exercises/legacy-code/rename_clarity.ts
- [x] T037 [US2] Create simplify conditional example in labs/lab-32-ai-refactoring/exercises/legacy-code/simplify_conditional.js
- [x] T038 [US2] Create remove duplication example in labs/lab-32-ai-refactoring/exercises/legacy-code/remove_duplication.ts
- [x] T039 [US2] Create modernize syntax example in labs/lab-32-ai-refactoring/exercises/legacy-code/modernize_syntax.js

### Solution Content for User Story 2

- [x] T040 [US2] Create lab-32 solution README at labs/lab-32-ai-refactoring-solution/README.md
- [x] T041 [P] [US2] Create refactored code examples in labs/lab-32-ai-refactoring-solution/resources/refactored-code/
- [x] T042 [US2] Document extract method refactoring in solution README
- [x] T043 [US2] Document rename for clarity refactoring in solution README
- [x] T044 [US2] Document simplify conditional refactoring in solution README
- [x] T045 [US2] Document remove duplication refactoring in solution README
- [x] T046 [US2] Document modernize syntax refactoring in solution README

**Checkpoint**: User Story 2 (Refactoring content) complete and independently testable

---

## Phase 5: User Story 3 - Verifying AI-Generated Code (Priority: P3)

**Goal**: Teach developers to critically evaluate AI-generated code for correctness, security, and hallucinations

**Independent Test**: Learners can apply 7-point verification checklist to identify issues in AI-generated code

### Slide Content for User Story 3

- [x] T047 [P] [US3] Create code verification concepts slide at docs/markdown/30_module_3_debugging/33_code_verification.md
- [x] T048 [P] [US3] Create verification checklist diagram at docs/assets/images/module-3/verification-checklist.svg
- [x] T049 [US3] Create verification checklist visual slide (dedicated slide after 33) using full-width image format
- [x] T050 [US3] Create exercise slide for lab-33 at docs/markdown/30_module_3_debugging/36_exercise_verification.md

### Lab Content for User Story 3

- [x] T051 [P] [US3] Create lab-33 README with verification exercises at labs/lab-33-code-verification/README.md
- [x] T052 [P] [US3] Create AI-generated code samples with intentional issues in labs/lab-33-code-verification/exercises/ai-generated-code/
- [x] T053 [US3] Create correctness issue example (wrong algorithm) in labs/lab-33-code-verification/exercises/ai-generated-code/correctness_issue.py
- [x] T054 [US3] Create logic error example (edge case) in labs/lab-33-code-verification/exercises/ai-generated-code/logic_error.py
- [x] T055 [US3] Create security issue example (SQL injection) in labs/lab-33-code-verification/exercises/ai-generated-code/security_issue.py
- [x] T056 [US3] Create dependency hallucination example (fake package) in labs/lab-33-code-verification/exercises/ai-generated-code/dependency_hallucination.py
- [x] T057 [US3] Create best practice violation example (poor naming) in labs/lab-33-code-verification/exercises/ai-generated-code/best_practice_violation.js
- [x] T058 [US3] Create performance issue example (N+1 query) in labs/lab-33-code-verification/exercises/ai-generated-code/performance_issue.py
- [x] T059 [US3] Create testability issue example (untestable code) in labs/lab-33-code-verification/exercises/ai-generated-code/testability_issue.py

### Solution Content for User Story 3

- [x] T060 [US3] Create lab-33 solution README at labs/lab-33-code-verification-solution/README.md
- [x] T061 [P] [US3] Create verification reports in labs/lab-33-code-verification-solution/resources/verification-reports/
- [x] T062 [US3] Document correctness issue analysis in solution README
- [x] T063 [US3] Document logic error analysis in solution README
- [x] T064 [US3] Document security issue analysis in solution README
- [x] T065 [US3] Document dependency hallucination analysis in solution README
- [x] T066 [US3] Document best practice violation analysis in solution README
- [x] T067 [US3] Document performance issue analysis in solution README
- [x] T068 [US3] Document testability issue analysis in solution README

**Checkpoint**: User Story 3 (Verification content) complete and independently testable

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Finalize module with assessment, validation, and quality assurance

- [x] T069 [P] Populate assessment slide with knowledge check questions aligned to slides 31-33
- [x] T070 [P] Add learning objectives review section to assessment slide
- [x] T071 [P] Add module recap section to assessment slide
- [x] T072 [P] Add resources section to assessment slide
- [x] T073 Validate all slides follow SFEIR School Theme syntax (slide separators, class directives)
- [x] T074 Validate exercise slides use correct format with lab path references
- [x] T075 Validate all visual slides display images at full-width with proper style attribute
- [x] T076 Verify sequential numbering (slides 30-37, labs 31-33, exercises within labs)
- [x] T077 Verify lab-slide content alignment (concepts in slides → exercises in labs)
- [x] T078 Verify solution deliverable completeness (all resources/ folders contain working files)
- [x] T079 Verify no administrative checklists in lab content
- [x] T080 Verify assessment questions match taught content (no untaught material)
- [x] T081 Update constitutional compliance checklist with validation results
- [x] T082 Test slide navigation (npm run start) and verify all Module 3 slides load correctly
- [x] T083 Review all code samples for accuracy and best practices
- [x] T084 Verify all metrics include source citations (30% debugging improvement link)
- [x] T085 Final constitutional compliance review across all files

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-5)**: All depend on Foundational phase completion
  - US1 (Debugging), US2 (Refactoring), US3 (Verification) can proceed in parallel if staffed
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Phase 6)**: Depends on all user stories being complete

### User Story Dependencies

- **User Story 1 (P1 - Debugging)**: Can start after Foundational - No dependencies on other stories
- **User Story 2 (P2 - Refactoring)**: Can start after Foundational - Independent of US1
- **User Story 3 (P3 - Verification)**: Can start after Foundational - Independent of US1/US2

### Within Each User Story

- Slide content before exercise slides (concepts → exercises)
- Lab instructions before solution content
- Exercise files before solution files
- Core content before integration/validation

### Parallel Opportunities

- **Phase 1**: T002-T006 all marked [P] can run in parallel (different directories)
- **Phase 2**: Slides can be created in parallel with checklists
- **User Story 1**: T011-T012 (slide + diagram), T015-T021 (lab exercises), T023-T028 (solution content)
- **User Story 2**: T029-T030 (slide + diagram), T033-T039 (lab exercises), T041-T046 (solution content)
- **User Story 3**: T047-T048 (slide + diagram), T051-T059 (lab exercises), T061-T068 (solution content)
- **Polish Phase**: T069-T072 (assessment sections), validation tasks can run in parallel

---

## Parallel Example: User Story 1 (Debugging)

```bash
# Launch slide and diagram creation together:
Task: "Create AI debugging concepts slide at docs/markdown/30_module_3_debugging/31_ai_debugging.md"
Task: "Create debugging workflow diagram at docs/assets/images/module-3/debugging-workflow.svg"

# Launch all buggy code samples together:
Task: "Create logic error example in labs/lab-31-ai-debugging/exercises/buggy-code-samples/logic_error.py"
Task: "Create runtime error example in labs/lab-31-ai-debugging/exercises/buggy-code-samples/runtime_error.py"
Task: "Create scope issue example in labs/lab-31-ai-debugging/exercises/buggy-code-samples/scope_issue.py"
Task: "Create integration bug example in labs/lab-31-ai-debugging/exercises/buggy-code-samples/integration_bug.py"
Task: "Create silent failure example in labs/lab-31-ai-debugging/exercises/buggy-code-samples/silent_failure.py"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only - Debugging Module)

1. Complete Phase 1: Setup (T001-T006)
2. Complete Phase 2: Foundational (T007-T010) - Creates module structure
3. Complete Phase 3: User Story 1 (T011-T028) - Full debugging content
4. **STOP and VALIDATE**: Test debugging content independently
5. Partial Phase 6: Run validation tasks (T073-T082) on completed content
6. Deploy/demo debugging module if ready

**MVP Deliverable**: Learners can complete AI-assisted debugging training with Lab 31

### Incremental Delivery

1. **Milestone 1**: Setup + Foundational → Module shell ready
2. **Milestone 2**: Add User Story 1 (Debugging) → Test independently → Deploy (MVP!)
3. **Milestone 3**: Add User Story 2 (Refactoring) → Test independently → Deploy
4. **Milestone 4**: Add User Story 3 (Verification) → Test independently → Deploy
5. **Milestone 5**: Complete Polish phase → Final validation → Full module release

Each milestone adds value without breaking previous content.

### Parallel Team Strategy

With multiple content creators:

1. Team completes Setup + Foundational together (T001-T010)
2. Once Foundational is done:
   - **Creator A**: User Story 1 - Debugging (T011-T028)
   - **Creator B**: User Story 2 - Refactoring (T029-T046)
   - **Creator C**: User Story 3 - Verification (T047-T068)
3. Stories complete independently, then integrate in Phase 6

---

## Task Summary

**Total Tasks**: 85

**Task Count by User Story**:
- Setup (Phase 1): 6 tasks
- Foundational (Phase 2): 4 tasks
- User Story 1 - Debugging (Phase 3): 18 tasks
- User Story 2 - Refactoring (Phase 4): 18 tasks
- User Story 3 - Verification (Phase 5): 22 tasks
- Polish & Validation (Phase 6): 17 tasks

**Parallel Opportunities**: 45 tasks marked [P] can execute in parallel (53% parallelization potential)

**Independent Test Criteria**:
- **US1**: Learners debug 5-7 buggy code samples and explain root causes
- **US2**: Learners apply 4-6 refactoring patterns and evaluate results
- **US3**: Learners identify 7 types of issues using verification checklist

**Suggested MVP Scope**: User Story 1 only (Debugging) - 28 tasks total (Setup + Foundational + US1)

**Format Validation**: ✅ All tasks follow checklist format with ID, labels, and file paths

---

## Notes

- [P] tasks = different files/directories, no dependencies, can run in parallel
- [Story] label maps task to specific user story (US1, US2, US3) for traceability
- Each user story is independently completable and testable
- Constitution requires: sequential numbering, solution deliverables, no admin checklists, assessment alignment
- All code samples must be working and demonstrable
- Commit after each logical group of tasks
- Validate constitutional compliance at checkpoints
