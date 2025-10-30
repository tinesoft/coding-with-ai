# Module 4 Quickstart Guide

## Overview

This guide helps content creators implement **Module 4: Test Automation and Quality Assurance with AI** for the SFEIR School Coding with AI training program.

**Module Focus:** Teaching developers to leverage AI tools (GitHub Copilot) for test generation, Test-Driven Development (TDD), integration/E2E testing, and code quality improvements using TypeScript with Vitest and Playwright.

## Prerequisites

Before starting implementation, ensure you have:

- ✅ Read the [Module 4 Specification](./spec.md)
- ✅ Reviewed the [Implementation Plan](./plan.md)
- ✅ Studied the [Data Model](./data-model.md)
- ✅ Read all contract files in `contracts/`
- ✅ Familiarized yourself with [Constitutional Guidelines](/.github/copilot-instructions.md)

## File Organization

### Specification Documents (Read-Only Reference)

```
specs/004-module-4-testing/
├── spec.md                           # Feature specification (4 user stories, 15 requirements)
├── plan.md                           # Implementation plan with phases
├── research.md                       # Technical research (Vitest/Playwright decisions)
├── data-model.md                     # Content entity definitions
├── quickstart.md                     # This file
├── contracts/
│   ├── slide-structure.yaml          # 9 slide file definitions
│   ├── lab-structure.yaml            # 3 lab folder specifications
│   └── assessment-criteria.yaml      # Knowledge check format requirements
├── tasks.md                          # [Created by /speckit.tasks] Task breakdown
└── checklists/
    └── requirements.md               # Specification validation (all ✅)
```

### Content to Create

```
docs/markdown/40_module_4_testing/    # Slide content
├── 40_module4_intro.md               # EXACTLY 3 slides
├── 41_test_automation.md             # Unit testing concepts
├── 42_tdd_with_ai.md                 # TDD workflow
├── 43_integration_testing.md         # Integration tests
├── 44_e2e_testing.md                 # Playwright E2E
├── 45_code_quality.md                # Quality metrics
├── 46_exercise_testing.md            # Hands-on practice
├── 47_best_practices.md              # Testing best practices
└── 48_assessment_and_recap.md        # EXACTLY 4 slides + 6 question slides

labs/
├── lab-41-unit-testing/              # Lab 1 starter
├── lab-41-unit-testing-solution/     # Lab 1 solution with resources/
├── lab-42-tdd-workflow/              # Lab 2 starter
├── lab-42-tdd-workflow-solution/     # Lab 2 solution with resources/
├── lab-43-integration-quality/       # Lab 3 starter
└── lab-43-integration-quality-solution/  # Lab 3 solution with resources/
```

## Implementation Workflow

### Phase 1: Setup and Configuration

**1. Update Slide Configuration**

Edit `docs/scripts/slides.js` to include Module 4 slides:

```javascript
function schoolSlides() {
  return [
    // ... existing modules ...
    "40_module_4_testing/40_module4_intro.md",
    "40_module_4_testing/41_test_automation.md",
    "40_module_4_testing/42_tdd_with_ai.md",
    "40_module_4_testing/43_integration_testing.md",
    "40_module_4_testing/44_e2e_testing.md",
    "40_module_4_testing/45_code_quality.md",
    "40_module_4_testing/46_exercise_testing.md",
    "40_module_4_testing/47_best_practices.md",
    "40_module_4_testing/48_assessment_and_recap.md",
  ];
}
```

**2. Verify Constitutional Compliance**

All Module 4 gates validated ✅ (see `plan.md` Constitution Check section):
- Slide numbering (40-49)
- Module-scoped lab numbering (lab-41, lab-42, lab-43)
- Solution deliverable completeness
- Assessment structure (EXACTLY 4 slide types)

### Phase 2: Create Slide Content

**Order of Creation:**

1. **40_module4_intro.md** - Module introduction
   - Reference: `contracts/slide-structure.yaml` (lines 14-38)
   - **CRITICAL**: EXACTLY 3 slides (no more, no less)
   - Slides: Transition → Learning Objectives → Prerequisites
   - **PROHIBITED**: No "Module Structure", "What You'll Learn", "Why This Matters" slides

2. **41_test_automation.md** - Unit testing fundamentals
   - Reference: `contracts/slide-structure.yaml` (lines 40-56)
   - Topics: AI test generation, coverage metrics, validation
   - Aligns with Lab 41 concepts

3. **42_tdd_with_ai.md** - Test-Driven Development
   - Reference: `contracts/slide-structure.yaml` (lines 58-74)
   - Topics: Red-Green-Refactor, AI in TDD workflow
   - Aligns with Lab 42 concepts

4. **43_integration_testing.md** - Integration testing
   - Reference: `contracts/slide-structure.yaml` (lines 76-92)
   - Topics: Component interaction testing, Vitest integration
   - Aligns with Lab 43 Exercise 1

5. **44_e2e_testing.md** - End-to-end testing
   - Reference: `contracts/slide-structure.yaml` (lines 94-110)
   - Topics: Playwright, user journey testing, test pyramid
   - Aligns with Lab 43 Exercise 2

6. **45_code_quality.md** - Code quality and metrics
   - Reference: `contracts/slide-structure.yaml` (lines 112-128)
   - Topics: Quality metrics, AI-assisted refactoring
   - Aligns with Lab 43 Exercise 3

7. **46_exercise_testing.md** - Hands-on lab introduction
   - Reference: `contracts/slide-structure.yaml` (lines 130-154)
   - **CRITICAL**: Starts immediately with `<!-- .slide: class="exercice" -->`
   - **PROHIBITED**: No H1 headers or content before first exercise slide
   - Three exercise slides (one per lab)

8. **47_best_practices.md** - Testing best practices
   - Reference: `contracts/slide-structure.yaml` (lines 156-177)
   - Topics: F.I.R.S.T principles, human-in-the-loop, maintainability

9. **48_assessment_and_recap.md** - Assessment and resources
   - Reference: `contracts/assessment-criteria.yaml`
   - **CRITICAL**: EXACTLY 4 slide types + 6 question slides
   - Slides: Transition → Learning Objectives Review → 6 Knowledge Checks → Resources
   - **PROHIBITED**: No "Module Recap", "Assessment Overview", "Success Metrics", "Rubric", "Next Steps", "Thank You" slides

**SFEIR Theme Syntax:**

Use `##--##` to separate slides:

```markdown
<!-- .slide: class="transition" -->
# Module 4: Test Automation
## Subtitle

##--##

<!-- .slide: -->
# Slide Title
Content here

##--##
```

### Phase 3: Create Lab Exercises

**Lab 41: Unit Testing (Priority P1, 60 minutes)**

Starter folder structure:
```
labs/lab-41-unit-testing/
├── README.md                         # Instructions with 3 exercises
└── exercises/
    ├── starter-code/
    │   ├── calculator.ts             # Functions needing tests
    │   ├── user-validator.ts
    │   └── data-transformer.ts
    └── vitest.config.ts              # Coverage configuration
```

Solution folder structure:
```
labs/lab-41-unit-testing-solution/
├── README.md                         # Solution explanations
└── resources/
    └── completed-tests/              # REQUIRED deliverables
        ├── calculator.spec.ts
        ├── user-validator.spec.ts
        └── data-transformer.spec.ts
```

**Lab 42: TDD Workflow (Priority P2, 90 minutes)**

Starter folder structure:
```
labs/lab-42-tdd-workflow/
├── README.md                         # TDD cycle instructions
└── exercises/
    ├── feature-spec.md               # Feature to implement
    ├── vitest.config.ts
    └── src/                          # Empty structure
```

Solution folder structure:
```
labs/lab-42-tdd-workflow-solution/
├── README.md                         # Phase-by-phase walkthrough
└── resources/                        # REQUIRED: All 3 phases
    ├── red-phase/                    # Failing tests
    ├── green-phase/                  # Minimal implementation
    └── refactor-phase/               # Clean implementation
```

**Lab 43: Integration/Quality (Priority P3, 120 minutes)**

Starter folder structure:
```
labs/lab-43-integration-quality/
├── README.md                         # Multi-part instructions
└── exercises/
    ├── multi-component-app/          # Integration testing
    │   ├── src/
    │   ├── vitest.config.ts
    │   └── playwright.config.ts
    └── code-with-quality-issues/     # Quality exercise
        ├── messy-code.ts
        └── complex-function.ts
```

Solution folder structure:
```
labs/lab-43-integration-quality-solution/
├── README.md                         # All 3 exercises explained
└── resources/                        # REQUIRED deliverables
    ├── integration-tests/
    │   ├── api-service.integration.spec.ts
    │   └── data-flow.integration.spec.ts
    ├── e2e-tests/
    │   ├── user-journey.spec.ts
    │   └── critical-workflow.spec.ts
    └── quality-improvements/
        ├── cleaned-code.ts
        └── refactored-function.ts
```

**Lab Content Requirements:**

From `contracts/lab-structure.yaml`:
- ✅ Module-scoped numbering (lab-41, lab-42, lab-43)
- ✅ Solution README.md mandatory
- ✅ Solution `resources/` MUST contain actual deliverable files
- ❌ NO "Success Criteria Checklist" sections in lab README files
- ✅ GitHub-flavored markdown format

### Phase 4: Create Assessment Content

**Knowledge Check Questions:**

Create 6 questions (1 per slide) in `48_assessment_and_recap.md`:

**Distribution:**
- 2 questions: Unit Testing (AI generation, coverage)
- 2 questions: TDD (Red-Green-Refactor, test-first)
- 1 question: Integration/E2E (test pyramid, Playwright)
- 1 question: Code Quality (metrics, refactoring)

**Format (from `contracts/assessment-criteria.yaml`):**

```markdown
<!-- .slide: -->
# **Knowledge Check**

## **Question 1: Test Coverage Interpretation**
<br>

### Your AI-generated test suite reports 78% code coverage. What should you do next?

**A)** Deploy to production since 78% exceeds the 75% threshold  
**B)** Review uncovered code paths and add targeted tests for critical logic  
**C)** Ask AI to generate more tests without reviewing them  
**D)** Ignore coverage metrics and focus only on passing tests  

<details>
<summary>Answer</summary>
**B)** - Coverage metrics identify gaps but don't guarantee quality. Human review is essential to assess whether uncovered code includes critical business logic that needs testing. Options A ignores validation, C bypasses human oversight, D dismisses valuable metrics.
</details>

Notes:
This question validates understanding of human-in-the-loop validation (SC-003) and coverage interpretation (SC-001).
```

**Resources Slide:**

```markdown
<!-- .slide: -->
# **Resources**

## **Further Learning**
<br>

### **Documentation**
- [Vitest Documentation](https://vitest.dev/) - Official testing framework guide
- [Vitest Coverage](https://vitest.dev/guide/coverage.html) - Code coverage configuration
- [Playwright Documentation](https://playwright.dev/) - E2E testing framework
- [Playwright Best Practices](https://playwright.dev/docs/best-practices) - Reliable test patterns
- [GitHub Copilot for Testing](https://github.blog/developer-skills/github/) - AI test generation
- [Test Automation Patterns](https://martinfowler.com/articles/practical-test-pyramid.html) - Test pyramid

### **Lab Solutions**
- Review `labs/lab-41-unit-testing-solution/`
- Review `labs/lab-42-tdd-workflow-solution/`
- Review `labs/lab-43-integration-quality-solution/`

Notes:
These resources provide deeper exploration of testing concepts and frameworks covered in Module 4.
```

### Phase 5: Validation and Testing

**Pre-Launch Checklist:**

1. **Slide Validation**
   - [ ] All 9 slide files created in `docs/markdown/40_module_4_testing/`
   - [ ] `slides.js` updated with Module 4 paths
   - [ ] Intro has EXACTLY 3 slides
   - [ ] Assessment has EXACTLY 4 slide types + 6 question slides
   - [ ] Exercise slide starts with `<!-- .slide: class="exercice" -->`
   - [ ] All slides use `##--##` separators
   - [ ] Knowledge checks use `<details>` for inline answers

2. **Lab Validation**
   - [ ] All 6 lab folders created (3 starters, 3 solutions)
   - [ ] All solution folders contain README.md
   - [ ] All solution folders contain `resources/` with deliverables
   - [ ] No "Success Criteria Checklist" in any lab README
   - [ ] Module-scoped numbering used (lab-41, lab-42, lab-43)
   - [ ] TypeScript code is syntactically valid
   - [ ] Vitest/Playwright configs are valid

3. **Content Quality**
   - [ ] Learning objectives from spec.md addressed in slides
   - [ ] Labs align with corresponding slide content
   - [ ] Assessment questions cover all module topics
   - [ ] Resources links are valid URLs
   - [ ] All code examples are tested and working

**Development Server:**

```bash
npm run start
```

View slides at http://localhost:4200

## Key Constitutional Requirements

### Module-Scoped Lab Numbering

**REQUIRED FORMAT:** `lab-4X-{topic}` where X is 1-3

- ✅ `lab-41-unit-testing` (Module 4, Lab 1)
- ✅ `lab-42-tdd-workflow` (Module 4, Lab 2)
- ✅ `lab-43-integration-quality` (Module 4, Lab 3)
- ❌ `lab-31-unit-testing` (Wrong module prefix)
- ❌ `lab-04-unit-testing` (Wrong numbering pattern)

### Solution Deliverable Completeness

**REQUIREMENT:** When lab exercises create files/projects, solution `resources/` folder MUST contain those actual files.

Example: Lab 41 creates unit tests → Solution MUST include:
```
labs/lab-41-unit-testing-solution/resources/completed-tests/
├── calculator.spec.ts          # REQUIRED
├── user-validator.spec.ts      # REQUIRED
└── data-transformer.spec.ts    # REQUIRED
```

### Assessment Slide Structure

**EXACTLY 4 slide types + question slides:**
1. Transition slide
2. Learning Objectives Review
3. Knowledge Check (6 questions across 6 slides)
4. Resources

**PROHIBITED slides:**
- Module Recap (duplicates review)
- Assessment Overview (belongs in specs)
- Success Metrics (belongs in specs)
- Assessment Rubric (belongs in specs)
- Next Steps (belongs in trainer materials)
- Thank You (belongs in facilitation)

### Exercise Slide Formatting

**REQUIRED:** File starts immediately with:
```markdown
<!-- .slide: class="exercice" -->
```

**PROHIBITED before first exercise:**
- H1 headers like "# Hands-on Practice"
- Section separators (`##--##`)
- Any introductory content

## Success Criteria Mapping

Content validates these success criteria from `spec.md`:

- **SC-001:** Unit test generation (15 min, 80%+ coverage) → Lab 41
- **SC-002:** TDD cycle completion (30 min) → Lab 42
- **SC-003:** Identify 3+ AI anti-patterns → Assessment questions
- **SC-007:** Code quality improvement (25%+) → Lab 43 Exercise 3

## Technical Stack Reference

**Primary Language:** TypeScript (ES2022+)
**Testing Framework:** Vitest (unit + integration)
**E2E Framework:** Playwright
**AI Tool:** GitHub Copilot (VS Code extension)

## Common Pitfalls to Avoid

❌ **Wrong lab numbering:** Using lab-31 instead of lab-41  
❌ **Missing solution deliverables:** Empty `resources/` folders  
❌ **Extra intro slides:** Adding "Why This Matters" to module intro (limit: 3 slides)  
❌ **Extra assessment slides:** Adding "Next Steps" to assessment (limit: 4 types)  
❌ **Separate answer slides:** Creating dedicated answer slides (use `<details>`)  
❌ **Success checklists in labs:** Adding administrative checklists to lab READMEs  
❌ **Headers before exercises:** Starting exercise slide file with H1 title  

## Questions and Support

- **Specification issues:** Review `specs/004-module-4-testing/spec.md`
- **Planning questions:** Review `specs/004-module-4-testing/plan.md`
- **Constitutional compliance:** Review `.github/copilot-instructions.md`
- **Contract details:** Review `specs/004-module-4-testing/contracts/`

---

**Ready to start?** Begin with Phase 1 (slide configuration) then proceed sequentially through phases 2-5.

**Estimated Implementation Time:** 16-20 hours for complete module (9 slide files, 6 lab folders, assessment content)
