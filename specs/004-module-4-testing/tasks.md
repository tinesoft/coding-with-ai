# Tasks: Module 4 - Test Automation and Quality Assurance with AI

**Input**: Design documents from `/specs/004-module-4-testing/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/

**Tests**: Not applicable - This is educational content creation (slides and labs), not software development with test suites.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story. Each user story represents a training topic area with corresponding slides and lab exercises.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3, US4)
- Include exact file paths in descriptions

## Path Conventions

- **Slide content**: `docs/markdown/40_module_4_testing/`
- **Lab exercises**: `labs/lab-4X-{topic}/`
- **Lab solutions**: `labs/lab-4X-{topic}-solution/`
- **Visual assets**: `docs/assets/images/module-4/`
- **Configuration**: `docs/scripts/slides.js`

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and configuration for Module 4 content

- [x] T001 Create directory structure `docs/markdown/40_module_4_testing/` for slide files
- [x] T002 [P] Create directory structure `docs/assets/images/module-4/` for visual assets
- [x] T003 [P] Create directory structures for all lab folders: `labs/lab-41-unit-testing/`, `labs/lab-41-unit-testing-solution/`, `labs/lab-42-tdd-workflow/`, `labs/lab-42-tdd-workflow-solution/`, `labs/lab-43-integration-quality/`, `labs/lab-43-integration-quality-solution/`
- [x] T004 Update `docs/scripts/slides.js` to include Module 4 slide paths (40-48 range)
- [x] T005 [P] Create visual asset placeholders based on `contracts/slide-structure.yaml` requirements

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core module introduction and assessment structure that sets the framework for all user stories

**⚠️ CRITICAL**: These slides define the module scope and must be complete before user story implementation

- [x] T006 Create `docs/markdown/40_module_4_testing/40_module4_intro.md` with EXACTLY 3 slides (transition, learning objectives, prerequisites) per constitutional requirements
- [x] T007 Create `docs/markdown/40_module_4_testing/48_assessment_and_recap.md` with EXACTLY 4 slide types (transition, learning objectives review, knowledge checks across 6 slides, resources) per `contracts/assessment-criteria.yaml`

**Checkpoint**: Module framework ready - user story content implementation can now begin in parallel

---

## Phase 3: User Story 1 - AI-Assisted Unit Test Generation (Priority: P1) 🎯 MVP

**Goal**: Teach developers to leverage GitHub Copilot for generating comprehensive unit tests with proper validation techniques

**Independent Test**: Provide learners with untested TypeScript functions, ask them to generate unit tests achieving 80%+ coverage using AI assistance, verify tests pass and cover edge cases

### Implementation for User Story 1

#### Slide Content

- [x] T008 [P] [US1] Create `docs/markdown/40_module_4_testing/41_test_automation.md` with 6 slides covering unit testing fundamentals, AI test generation workflow, coverage metrics, validation techniques per `contracts/slide-structure.yaml`
- [x] T009 [P] [US1] Create visual asset `docs/assets/images/module-4/test-generation-flow.svg` showing AI-assisted test generation workflow
- [x] T010 [P] [US1] Create visual asset `docs/assets/images/module-4/test-pyramid.svg` illustrating test types with AI context

#### Lab 41 Starter Content

- [x] T011 [US1] Create `labs/lab-41-unit-testing/README.md` with learning objectives, prerequisites, and 3 exercises for unit test generation per `contracts/lab-structure.yaml`
- [x] T012 [P] [US1] Create `labs/lab-41-unit-testing/exercises/starter-code/calculator.ts` with functions needing unit tests (add, subtract, multiply, divide, with edge cases)
- [x] T013 [P] [US1] Create `labs/lab-41-unit-testing/exercises/starter-code/user-validator.ts` with validation logic needing tests (email, password, age validation)
- [x] T014 [P] [US1] Create `labs/lab-41-unit-testing/exercises/starter-code/data-transformer.ts` with transformation functions needing tests (JSON parsing, array operations, data mapping)
- [x] T015 [P] [US1] Create `labs/lab-41-unit-testing/exercises/vitest.config.ts` with coverage configuration enabled

#### Lab 41 Solution Content

- [x] T016 [US1] Create `labs/lab-41-unit-testing-solution/README.md` with exercise-by-exercise solutions, human-in-the-loop validation strategies, coverage analysis explanation per `contracts/lab-structure.yaml`
- [x] T017 [P] [US1] Create `labs/lab-41-unit-testing-solution/resources/completed-tests/calculator.spec.ts` with comprehensive unit tests demonstrating AI-generated test patterns
- [x] T018 [P] [US1] Create `labs/lab-41-unit-testing-solution/resources/completed-tests/user-validator.spec.ts` with validation test examples including edge cases
- [x] T019 [P] [US1] Create `labs/lab-41-unit-testing-solution/resources/completed-tests/data-transformer.spec.ts` with transformation test examples covering error conditions

#### Exercise Slide Reference

- [x] T020 [US1] Add User Story 1 exercise slide pair to `docs/markdown/40_module_4_testing/46_exercise_testing.md` (Lab 41 instruction slide + solution slide) following `class="exercice"` format

**Checkpoint**: At this point, User Story 1 is complete - learners can generate unit tests using AI and validate coverage

---

## Phase 4: User Story 2 - Test-Driven Development (TDD) with AI (Priority: P2)

**Goal**: Teach developers to practice Red-Green-Refactor TDD cycle with AI collaboration, writing tests before implementation

**Independent Test**: Give learners a feature specification, verify they can create failing tests first using AI, implement minimal passing code, then refactor while keeping tests green - all within 30 minutes

### Implementation for User Story 2

#### Slide Content

- [ ] T021 [P] [US2] Create `docs/markdown/40_module_4_testing/42_tdd_with_ai.md` with 7 slides covering TDD methodology, Red-Green-Refactor cycle, AI collaboration in each phase per `contracts/slide-structure.yaml`
- [ ] T022 [P] [US2] Create visual asset `docs/assets/images/module-4/tdd-cycle.svg` illustrating Red-Green-Refactor workflow with AI assistance points
- [ ] T023 [P] [US2] Create visual asset `docs/assets/images/module-4/tdd-prompt-examples.svg` showing example prompts for each TDD phase

#### Lab 42 Starter Content

- [ ] T024 [US2] Create `labs/lab-42-tdd-workflow/README.md` with TDD exercise instructions explaining Red, Green, and Refactor phases per `contracts/lab-structure.yaml`
- [ ] T025 [P] [US2] Create `labs/lab-42-tdd-workflow/exercises/feature-spec.md` with feature specification for TDD implementation (e.g., shopping cart functionality)
- [ ] T026 [P] [US2] Create `labs/lab-42-tdd-workflow/exercises/vitest.config.ts` with Vitest configuration
- [ ] T027 [P] [US2] Create `labs/lab-42-tdd-workflow/exercises/src/` empty starter directory structure for implementation

#### Lab 42 Solution Content

- [ ] T028 [US2] Create `labs/lab-42-tdd-workflow-solution/README.md` with TDD walkthrough explaining Red phase (failing tests), Green phase (minimal implementation), Refactor phase (code improvement) per `contracts/lab-structure.yaml`
- [ ] T029 [P] [US2] Create `labs/lab-42-tdd-workflow-solution/resources/red-phase/` with example failing tests showing test-first approach
- [ ] T030 [P] [US2] Create `labs/lab-42-tdd-workflow-solution/resources/green-phase/` with minimal passing implementation demonstrating simplest code to pass tests
- [ ] T031 [P] [US2] Create `labs/lab-42-tdd-workflow-solution/resources/refactor-phase/` with refactored clean implementation showing quality improvements while tests remain green

#### Exercise Slide Reference

- [ ] T032 [US2] Add User Story 2 exercise slide pair to `docs/markdown/40_module_4_testing/46_exercise_testing.md` (Lab 42 instruction slide + solution slide)

**Checkpoint**: At this point, User Stories 1 AND 2 are complete - learners can generate unit tests AND practice TDD workflow with AI

---

## Phase 5: User Story 3 - Integration and End-to-End Test Generation (Priority: P3)

**Goal**: Teach developers to use AI for generating integration tests (component interactions) and E2E tests (user workflows) with proper test pyramid understanding

**Independent Test**: Provide learners with multi-component application, verify they can generate integration tests validating component interactions and E2E tests simulating user journeys using Playwright

### Implementation for User Story 3

#### Slide Content

- [ ] T033 [P] [US3] Create `docs/markdown/40_module_4_testing/43_integration_testing.md` with 5 slides covering integration testing concepts, component interaction validation, Vitest integration test patterns per `contracts/slide-structure.yaml`
- [ ] T034 [P] [US3] Create `docs/markdown/40_module_4_testing/44_e2e_testing.md` with 6 slides covering E2E testing fundamentals, Playwright introduction, user journey testing, test pyramid application per `contracts/slide-structure.yaml`
- [ ] T035 [P] [US3] Create visual asset `docs/assets/images/module-4/integration-test-example.svg` showing component interaction testing scenario
- [ ] T036 [P] [US3] Create visual asset `docs/assets/images/module-4/e2e-workflow.svg` illustrating user journey E2E test flow

#### Lab 43 Starter Content (Integration/E2E Exercises)

- [ ] T037 [US3] Create `labs/lab-43-integration-quality/README.md` with multi-part exercise instructions covering Exercise 1 (integration tests), Exercise 2 (E2E tests), Exercise 3 (quality improvements) per `contracts/lab-structure.yaml`
- [ ] T038 [US3] Create `labs/lab-43-integration-quality/exercises/multi-component-app/src/` with application structure including API, services, and utils for integration testing
- [ ] T039 [P] [US3] Create `labs/lab-43-integration-quality/exercises/multi-component-app/vitest.config.ts` with Vitest configuration for integration tests
- [ ] T040 [P] [US3] Create `labs/lab-43-integration-quality/exercises/multi-component-app/playwright.config.ts` with Playwright configuration for E2E tests

#### Lab 43 Solution Content (Integration/E2E Solutions)

- [ ] T041 [US3] Create `labs/lab-43-integration-quality-solution/README.md` with solutions for Exercise 1 (integration testing) and Exercise 2 (E2E testing) per `contracts/lab-structure.yaml`
- [ ] T042 [P] [US3] Create `labs/lab-43-integration-quality-solution/resources/integration-tests/api-service.integration.spec.ts` with integration test example validating API and service interactions
- [ ] T043 [P] [US3] Create `labs/lab-43-integration-quality-solution/resources/integration-tests/data-flow.integration.spec.ts` with integration test example validating data flow between components
- [ ] T044 [P] [US3] Create `labs/lab-43-integration-quality-solution/resources/e2e-tests/user-journey.spec.ts` with Playwright E2E test demonstrating complete user workflow
- [ ] T045 [P] [US3] Create `labs/lab-43-integration-quality-solution/resources/e2e-tests/critical-workflow.spec.ts` with Playwright E2E test for critical application workflow

#### Exercise Slide Reference

- [ ] T046 [US3] Add User Story 3 exercise slide pair (first pair for integration/E2E) to `docs/markdown/40_module_4_testing/46_exercise_testing.md` (Lab 43 integration/E2E instruction slide + solution slide)

**Checkpoint**: At this point, User Stories 1, 2, AND 3 are complete - learners can generate unit tests, practice TDD, AND create integration/E2E tests

---

## Phase 6: User Story 4 - AI-Powered Code Quality and Static Analysis (Priority: P4)

**Goal**: Teach developers to use AI for identifying code quality issues, applying refactoring suggestions, and maintaining code standards

**Independent Test**: Provide learners with code containing quality issues (code smells, complexity, duplication), verify they can use AI to identify problems and apply improvements with measurable quality metric improvements

### Implementation for User Story 4

#### Slide Content

- [ ] T047 [P] [US4] Create `docs/markdown/40_module_4_testing/45_code_quality.md` with 5 slides covering code quality metrics, AI-assisted refactoring, cyclomatic complexity, code smells, maintainability per `contracts/slide-structure.yaml`
- [ ] T048 [P] [US4] Create `docs/markdown/40_module_4_testing/47_best_practices.md` with 6 slides covering F.I.R.S.T principles, human-in-the-loop validation, test maintainability, AI testing anti-patterns per `contracts/slide-structure.yaml`
- [ ] T049 [P] [US4] Create visual asset `docs/assets/images/module-4/quality-metrics.svg` showing code quality metrics dashboard concept
- [ ] T050 [P] [US4] Create visual asset `docs/assets/images/module-4/refactoring-workflow.svg` illustrating AI-assisted refactoring process

#### Lab 43 Starter Content (Quality Exercise)

- [ ] T051 [US4] Create `labs/lab-43-integration-quality/exercises/code-with-quality-issues/messy-code.ts` with intentional quality issues (poor naming, duplication, unnecessary complexity)
- [ ] T052 [P] [US4] Create `labs/lab-43-integration-quality/exercises/code-with-quality-issues/complex-function.ts` with overly complex function needing refactoring (high cyclomatic complexity)

#### Lab 43 Solution Content (Quality Solutions)

- [ ] T053 [US4] Update `labs/lab-43-integration-quality-solution/README.md` to add Exercise 3 solution explaining quality improvements and refactoring strategies
- [ ] T054 [P] [US4] Create `labs/lab-43-integration-quality-solution/resources/quality-improvements/cleaned-code.ts` with refactored code showing quality fixes (clear naming, eliminated duplication, reduced complexity)
- [ ] T055 [P] [US4] Create `labs/lab-43-integration-quality-solution/resources/quality-improvements/refactored-function.ts` with simplified complex function demonstrating AI-assisted complexity reduction

#### Exercise Slide Reference

- [ ] T056 [US4] Add User Story 4 exercise slide pair (second pair for quality) to `docs/markdown/40_module_4_testing/46_exercise_testing.md` (Lab 43 quality instruction slide + solution slide)

**Checkpoint**: All four user stories complete - learners have full AI-assisted testing and quality assurance skills

---

## Phase 7: Assessment Content (Knowledge Validation)

**Purpose**: Create knowledge check questions validating conceptual understanding across all user stories

**Note**: This phase depends on all user story content being complete to reference in assessment questions

- [ ] T057 [P] Add Knowledge Check Question 1 to `docs/markdown/40_module_4_testing/48_assessment_and_recap.md` covering unit testing/coverage interpretation (US1 topic) with inline `<details>` answer per `contracts/assessment-criteria.yaml`
- [ ] T058 [P] Add Knowledge Check Question 2 to `docs/markdown/40_module_4_testing/48_assessment_and_recap.md` covering AI test generation validation (US1 topic) with inline `<details>` answer
- [ ] T059 [P] Add Knowledge Check Question 3 to `docs/markdown/40_module_4_testing/48_assessment_and_recap.md` covering TDD Red-Green-Refactor cycle (US2 topic) with inline `<details>` answer
- [ ] T060 [P] Add Knowledge Check Question 4 to `docs/markdown/40_module_4_testing/48_assessment_and_recap.md` covering test-first development approach (US2 topic) with inline `<details>` answer
- [ ] T061 [P] Add Knowledge Check Question 5 to `docs/markdown/40_module_4_testing/48_assessment_and_recap.md` covering integration/E2E test pyramid understanding (US3 topic) with inline `<details>` answer
- [ ] T062 [P] Add Knowledge Check Question 6 to `docs/markdown/40_module_4_testing/48_assessment_and_recap.md` covering code quality metrics interpretation (US4 topic) with inline `<details>` answer
- [ ] T063 Update Resources slide in `docs/markdown/40_module_4_testing/48_assessment_and_recap.md` with documentation links (Vitest, Playwright, GitHub Copilot, Testing Best Practices) and lab solution references per `contracts/assessment-criteria.yaml`

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories and final quality assurance

- [ ] T064 [P] Review all slide files for constitutional compliance (proper `##--##` separators, correct class directives, `<br>` tags where required)
- [ ] T065 [P] Verify all lab README files follow GitHub-flavored markdown and have no "Success Criteria Checklist" sections per constitutional requirements
- [ ] T066 [P] Verify all lab solution folders contain resources/ with actual deliverable files per `contracts/lab-structure.yaml`
- [ ] T067 [P] Verify module-scoped numbering consistency (lab-41, lab-42, lab-43) across all exercise slides and lab folders
- [ ] T068 [P] Test all TypeScript starter code and solution code for syntactic validity (compiles without errors)
- [ ] T069 [P] Verify Vitest configurations are valid and coverage is properly enabled in lab-41 and lab-42
- [ ] T070 [P] Verify Playwright configuration is valid in lab-43
- [ ] T071 Start development server with `npm run start` and verify all Module 4 slides load correctly at http://localhost:4200
- [ ] T072 Verify slide navigation works properly through all Module 4 content (40-48 range)
- [ ] T073 [P] Verify all visual assets load correctly and display with proper full-width formatting
- [ ] T074 [P] Review quickstart.md guidance and validate all implementation steps were followed
- [ ] T075 Run constitutional compliance validation checklist from `specs/004-module-4-testing/contracts/slide-structure.yaml`
- [ ] T076 Run constitutional compliance validation checklist from `specs/004-module-4-testing/contracts/lab-structure.yaml`
- [ ] T077 Run constitutional compliance validation checklist from `specs/004-module-4-testing/contracts/assessment-criteria.yaml`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phases 3-6)**: All depend on Foundational phase completion
  - User stories can proceed in parallel if team capacity allows
  - Or sequentially in priority order (US1 → US2 → US3 → US4)
- **Assessment (Phase 7)**: Depends on all four user story content phases being complete (references all topics)
- **Polish (Phase 8)**: Depends on all content creation phases being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - Independently testable from US1
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - Independently testable from US1/US2
- **User Story 4 (P4)**: Can start after Foundational (Phase 2) - Shares Lab 43 with US3 (quality exercises in same lab)

### Within Each User Story

- Slide content and lab starter content can be created in parallel (marked [P])
- Lab solution content depends on starter content being complete
- Exercise slide references depend on both starter and solution content being complete
- Visual assets can be created in parallel with slide content

### Parallel Opportunities

- All Setup tasks (T001-T005) can run in parallel
- Both Foundational tasks (T006-T007) can run in parallel
- Once Foundational completes, all four user story phases can start in parallel (if team allows)
- Within each user story:
  - All slide content tasks marked [P] can run in parallel
  - All visual asset tasks marked [P] can run in parallel
  - All lab starter file tasks marked [P] can run in parallel
  - All lab solution file tasks marked [P] can run in parallel
- All assessment knowledge check questions (T057-T062) can run in parallel
- All polish tasks (T064-T077) can run in parallel

---

## Parallel Example: User Story 1

```bash
# Launch all User Story 1 slide and asset creation together:
T008: Create 41_test_automation.md (slide content)
T009: Create test-generation-flow.svg (visual asset)
T010: Create test-pyramid.svg (visual asset)

# Launch all User Story 1 lab starter files together:
T012: Create calculator.ts
T013: Create user-validator.ts
T014: Create data-transformer.ts
T015: Create vitest.config.ts

# Launch all User Story 1 lab solution files together (after starter complete):
T017: Create calculator.spec.ts
T018: Create user-validator.spec.ts
T019: Create data-transformer.spec.ts
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (T001-T005)
2. Complete Phase 2: Foundational (T006-T007) - CRITICAL: Module intro and assessment framework
3. Complete Phase 3: User Story 1 (T008-T020)
4. **STOP and VALIDATE**: 
   - Start development server and verify slides render correctly
   - Test Lab 41 starter code compiles
   - Test Lab 41 solution tests pass with 80%+ coverage
   - Verify exercise slide correctly references Lab 41
5. **MVP READY**: Learners can now complete unit test generation training

### Incremental Delivery

1. Complete Setup + Foundational → Module framework ready
2. Add User Story 1 → Test independently → **MVP delivered** (unit testing training functional)
3. Add User Story 2 → Test independently → **TDD training added** (expanded offering)
4. Add User Story 3 → Test independently → **Integration/E2E training added** (comprehensive testing coverage)
5. Add User Story 4 → Test independently → **Quality assurance training added** (complete module)
6. Add Assessment → Test independently → **Knowledge validation complete**
7. Polish → Final quality assurance → **Production ready**

Each story adds value without breaking previous content.

### Parallel Team Strategy

With multiple content creators:

1. Team completes Setup + Foundational together (T001-T007)
2. Once Foundational is done:
   - **Creator A**: User Story 1 (unit testing) - T008-T020
   - **Creator B**: User Story 2 (TDD) - T021-T032
   - **Creator C**: User Story 3 (integration/E2E) - T033-T046
   - **Creator D**: User Story 4 (quality) - T047-T056
3. Team completes Assessment together (T057-T063)
4. Team completes Polish together (T064-T077)

---

## Task Summary

**Total Tasks**: 77

### Tasks by User Story:
- **Setup (Phase 1)**: 5 tasks (T001-T005)
- **Foundational (Phase 2)**: 2 tasks (T006-T007)
- **User Story 1 (P1 - Unit Testing)**: 13 tasks (T008-T020)
- **User Story 2 (P2 - TDD)**: 12 tasks (T021-T032)
- **User Story 3 (P3 - Integration/E2E)**: 14 tasks (T033-T046)
- **User Story 4 (P4 - Quality)**: 10 tasks (T047-T056)
- **Assessment (Phase 7)**: 7 tasks (T057-T063)
- **Polish (Phase 8)**: 14 tasks (T064-T077)

### Parallel Opportunities Identified:
- **Phase 1**: 4 parallel tasks (T002-T005)
- **Phase 2**: 2 parallel tasks (T006-T007)
- **User Story 1**: 8 parallel opportunities (slide/asset creation, starter files, solution files)
- **User Story 2**: 8 parallel opportunities
- **User Story 3**: 10 parallel opportunities
- **User Story 4**: 7 parallel opportunities
- **Assessment**: 6 parallel questions (T057-T062)
- **Polish**: 13 parallel validation tasks (T064-T077)

### Independent Test Criteria:

**User Story 1 Test**: Provide untested TypeScript code → Learner generates tests with AI → Verify 80%+ coverage achieved
**User Story 2 Test**: Provide feature spec → Learner writes failing tests → Implements passing code → Refactors → Verify TDD cycle completion
**User Story 3 Test**: Provide multi-component app → Learner generates integration and E2E tests → Verify component interactions and user workflows validated
**User Story 4 Test**: Provide code with quality issues → Learner uses AI to identify and fix → Verify measurable quality metric improvements

### Suggested MVP Scope:
**User Story 1 only** (T001-T020) - Provides immediate value with unit test generation training, learners can start applying skills to existing codebases immediately

---

## Format Validation

✅ **All tasks follow checklist format**: `- [ ] [TaskID] [P?] [Story?] Description with file path`
✅ **All user story tasks have [Story] labels**: US1, US2, US3, US4 labels present
✅ **All parallelizable tasks marked [P]**: Different files, no dependencies between parallel tasks
✅ **Sequential task IDs**: T001 through T077 in execution order
✅ **File paths included**: Every task includes specific file path or directory path
✅ **Independent test criteria defined**: Each user story has clear validation criteria

---

## Notes

- Educational content creation project - no software test suites applicable
- [P] tasks indicate different files that can be created simultaneously
- [Story] labels (US1-US4) enable tracking which training topic each task supports
- Each user story delivers independently testable training increment
- Module-scoped numbering (lab-41, lab-42, lab-43) ensures clear module association
- Constitutional compliance validation in Phase 8 ensures all formatting requirements met
- Commit after each logical task group (e.g., all starter files for a lab)
- Stop at any checkpoint to validate independently before proceeding
