# Data Model: Module 4 - Test Automation and Quality Assurance with AI

**Date**: 2025-10-30
**Feature**: Module 4 Testing Training Content

## Purpose

This document defines the content entities, their attributes, relationships, and validation rules for Module 4 training materials.

## Entity Definitions

### 1. Module 4 Slide Deck

**Description**: Complete presentation content for Module 4, organized as a collection of markdown slide files following SFEIR School Theme syntax.

**Attributes**:
- `module_number`: Integer (4)
- `module_title`: String ("Test Automation and Quality Assurance with AI")
- `slide_files`: Array<SlideFile>
- `total_slides`: Integer (~30-40 estimated)
- `duration`: Duration (1 training day, 6-7 hours)
- `file_prefix`: String ("40_" for Module 4)

**Validation Rules**:
- Module number MUST be 4
- All slide files MUST use numbering 40-49
- Total slides SHOULD be 30-40 for 1-day module
- MUST include exactly one intro file (40_module4_intro.md)
- MUST include exactly one assessment file (48_assessment_and_recap.md)
- MUST include at least 3 exercise files (45, 46, 47)

**Relationships**:
- Contains multiple SlideFile entities
- References Lab entities through exercise slides
- Includes Assessment entity

---

### 2. SlideFile

**Description**: Individual markdown file containing one or more presentation slides.

**Attributes**:
- `file_number`: Integer (40-49)
- `file_name`: String (e.g., "41_test_automation.md")
- `file_type`: Enum (intro | content | exercise | assessment)
- `slide_count`: Integer
- `slide_class`: String (first-slide | transition | exercice | standard)
- `content_topic`: String
- `path`: String (relative to docs/markdown/)

**Validation Rules**:
- File name MUST match pattern `{number}_{topic}.md`
- File number MUST be in range 40-49
- Intro files MUST contain EXACTLY 3 slides
- Assessment files MUST contain EXACTLY 4 slides (transition, objectives review, knowledge checks, resources)
- Exercise files MUST start with `<!-- .slide: class="exercice" -->`
- Content slides with H2 followed by H3 MUST include `<br>` tag between them
- Transition slides MUST use format "Module 4: {title}"

**Relationships**:
- Belongs to Module 4 Slide Deck
- References Lab entities (if exercise slide)
- Contains Assessment entity (if assessment slide)
- References Visual Asset entities (if includes images)

**Slide File Types**:

**Type: Intro** (40_module4_intro.md)
- Slide 1: Transition slide with "Module 4 Overview"
- Slide 2: Learning Objectives
- Slide 3: Prerequisites

**Type: Content** (41, 42, 43, 44)
- Multiple slides covering theory and concepts
- May include visual reference slides
- Uses standard slide class

**Type: Exercise** (45, 46, 47)
- Pairs of slides per lab (instructions + solution)
- Uses `class="exercice"`
- Points to lab README files

**Type: Assessment** (48)
- Slide 1: Transition slide
- Slide 2: Learning Objectives Review
- Slide 3+: Knowledge Check questions (with inline answers in `<details>` tags)
- Final Slide: Resources (with Documentation and Lab Solutions sections)

---

### 3. Lab

**Description**: Hands-on exercise folder with instructions, starter code, and solutions.

**Attributes**:
- `lab_number`: String (lab-41 | lab-42 | lab-43)
- `lab_topic`: String (unit-testing | tdd-workflow | integration-quality)
- `has_solution`: Boolean (always true)
- `has_resources`: Boolean
- `estimated_duration`: Duration
- `complexity`: Enum (P1 | P2 | P3)
- `folder_path`: String (relative to labs/)

**Validation Rules**:
- Lab number MUST use module-scoped pattern `lab-4X-{topic}`
- Lab number X MUST be 1, 2, or 3
- MUST have corresponding `-solution/` folder
- Solution folder MUST contain README.md
- Both lab and solution README MUST use GitHub-flavored markdown
- Exercise numbering MUST be sequential within each lab
- Solution resources/ folder MUST contain actual deliverable artifacts if exercises produce files

**Relationships**:
- Referenced by Exercise SlideFile
- Contains Exercise entities
- Has one Solution entity
- May contain multiple Starter Code entities
- May produce Deliverable Artifact entities (in solution resources/)

**Lab Instances**:

**Lab 41: Unit Testing** (lab-41-unit-testing)
- Priority: P1
- Duration: ~60 minutes
- Focus: AI-assisted unit test generation
- Starter code: 3 TypeScript functions needing tests
- Success criteria: 80%+ code coverage

**Lab 42: TDD Workflow** (lab-42-tdd-workflow)
- Priority: P2  
- Duration: ~90 minutes
- Focus: Red-Green-Refactor with AI
- Starter code: Feature specification, empty project structure
- Success criteria: Complete TDD cycle in 30 minutes

**Lab 43: Integration & Quality** (lab-43-integration-quality)
- Priority: P3
- Duration: ~120 minutes
- Focus: Integration tests, E2E tests, code quality
- Starter code: Multi-component app + code with quality issues
- Success criteria: Working integration/E2E tests + measurable quality improvements

---

### 4. Exercise

**Description**: Individual practice activity within a lab.

**Attributes**:
- `exercise_number`: Integer (1-based per lab)
- `exercise_title`: String
- `instructions`: Markdown
- `starter_files`: Array<String> (file paths)
- `expected_outcome`: String
- `success_criteria`: Array<String>

**Validation Rules**:
- Exercise number MUST be sequential within lab (no gaps)
- MUST have clear success criteria
- MUST reference specific starter files
- MUST describe expected outcome

**Relationships**:
- Belongs to Lab entity
- Has one Solution entity
- References Starter Code entities
- May produce Deliverable Artifact entity

---

### 5. Solution

**Description**: Complete, working example showing exercise completion.

**Attributes**:
- `solution_folder`: String (lab-XX-{topic}-solution/)
- `readme_path`: String (README.md)
- `has_explanation`: Boolean
- `explanation_detail`: Enum (minimal | moderate | comprehensive)
- `resources_included`: Boolean
- `deliverable_artifacts`: Array<String> (paths to actual files in resources/)

**Validation Rules**:
- MUST have README.md in solution root
- README MUST explain solution approach
- README MUST correspond to exercises in sequential order
- If exercises produce files/projects, resources/ MUST contain those actual artifacts
- Solution code MUST be working and tested
- MUST include validation techniques explanation (human-in-the-loop)

**Relationships**:
- Belongs to Lab entity
- Corresponds to Exercise entities
- May contain Deliverable Artifact entities

---

### 6. Assessment

**Description**: Knowledge check quiz questions and resources for module validation.

**Attributes**:
- `knowledge_checks`: Array<KnowledgeCheck>
- `resource_links`: Array<ResourceLink>
- `lab_solution_references`: Array<String>
- `passing_score`: Percentage (75%)

**Validation Rules**:
- MUST include 3-5 knowledge check questions
- Each question MUST use single-slide format with `<details>` tag for answer
- MUST include Resources slide with Documentation and Lab Solutions sections
- Lab solution references MUST use module-scoped numbering (lab-41, lab-42, lab-43)
- Documentation links MUST include official Vitest and Playwright docs

**Relationships**:
- Part of Module 4 Slide Deck (in 48_assessment_and_recap.md)
- References Lab entities (solution folders)
- References External Documentation

---

### 7. KnowledgeCheck

**Description**: Quiz question testing conceptual understanding.

**Attributes**:
- `question_number`: Integer
- `question_topic`: String
- `question_text`: String
- `options`: Array<String> (4 options: A, B, C, D)
- `correct_answer`: String (letter)
- `explanation`: String
- `educational_purpose`: String (for Notes section)

**Validation Rules**:
- MUST have exactly 4 options
- MUST have one correct answer
- MUST provide detailed explanation
- MUST be presented on single slide with inline answer in `<details>` tag
- Question format MUST be "Question X: {Topic}"

**Relationships**:
- Belongs to Assessment entity
- Tests concepts from SlideFile content
- Validates Lab learning outcomes

---

### 8. Visual Asset

**Description**: Diagram, flowchart, or illustration supporting slide content.

**Attributes**:
- `asset_name`: String
- `asset_type`: Enum (diagram | flowchart | screenshot | icon)
- `file_format`: Enum (svg | png | jpg | webp)
- `file_path`: String (relative to docs/assets/images/module-4/)
- `alt_text`: String
- `referenced_by_slide`: String

**Validation Rules**:
- SVG MUST be preferred for diagrams, flowcharts, schematics
- Raster formats only for photos or complex gradients
- File name MUST be descriptive
- MUST have concise alt text
- MUST be displayed full-width on dedicated slide

**Relationships**:
- Referenced by SlideFile entities
- Located in module-4 assets subdirectory

**Planned Assets**:
- `test-generation-flow.svg`: AI test generation workflow diagram
- `tdd-cycle.svg`: Red-Green-Refactor cycle visualization
- `test-pyramid.svg`: Testing pyramid with AI context
- `quality-metrics-dashboard.svg`: Code quality metrics visualization

---

### 9. Starter Code

**Description**: Incomplete or flawed code provided for learners to work with.

**Attributes**:
- `file_name`: String
- `file_path`: String (relative to lab exercises/)
- `code_language`: String (typescript)
- `contains_issues`: Boolean
- `issue_types`: Array<String> (e.g., missing-tests, quality-issues, incomplete)
- `line_count`: Integer

**Validation Rules**:
- MUST be syntactically valid TypeScript
- MUST compile without errors
- For quality exercises, MUST contain intentional quality issues
- For test generation, MUST be testable functions
- MUST align with lab objectives

**Relationships**:
- Belongs to Lab entity
- Used in Exercise entities
- Has corresponding complete version in Solution entity

---

### 10. Test Generation Prompt

**Description**: Example prompt pattern for guiding AI to generate quality tests.

**Attributes**:
- `prompt_pattern_name`: String
- `prompt_template`: String
- `use_case`: String
- `expected_output_description`: String
- `example_code`: String (optional)

**Validation Rules**:
- MUST provide clear context to AI
- MUST specify testing framework (Vitest)
- MUST request coverage of edge cases
- SHOULD include example for clarity

**Relationships**:
- Referenced in slide content
- Used in lab instructions
- Part of research best practices

**Pattern Examples**:
- Context-Rich Unit Test Generation
- TDD Red-Green-Refactor
- Integration Test Generation
- Quality Improvement Prompting

---

## Entity Relationships Diagram

```
Module 4 Slide Deck
├── SlideFile (intro) [1]
│   └── Exactly 3 slides
├── SlideFile (content) [4-5]
│   └── References Visual Assets [0..*]
├── SlideFile (exercise) [3]
│   └── References Lab [1]
├── SlideFile (assessment) [1]
    └── Contains Assessment [1]
        ├── KnowledgeCheck [3-5]
        └── References Labs [3]

Lab [3 total]
├── Exercise [1..*]
│   ├── Uses Starter Code [1..*]
│   └── Produces Deliverable Artifact [0..*]
└── Solution [1]
    ├── Solution Code [1..*]
    └── Deliverable Artifacts in resources/ [0..*]

Visual Asset [4+]
└── Referenced by SlideFile [1..*]

Test Generation Prompt [4]
└── Referenced by SlideFile and Lab [1..*]
```

## State Transitions

### Lab Exercise Completion Flow

```
[Not Started] 
    ↓
[Reading Instructions] ← learner reads lab README
    ↓
[Working on Exercise] ← learner generates tests with AI
    ↓
[Validating Output] ← learner checks coverage, reviews tests
    ↓
[Exercise Complete] ← success criteria met
    ↓
[Reviewing Solution] ← learner compares with solution
    ↓
[Lab Complete]
```

### Content Creation Flow

```
[Specification Complete]
    ↓
[Research Complete] ← Phase 0
    ↓
[Data Model Defined] ← Phase 1 (this document)
    ↓
[Contracts Generated] ← Phase 1
    ↓
[Slides Created] ← Phase 2 (not in /speckit.plan scope)
    ↓
[Labs Created] ← Phase 2
    ↓
[Assessment Created] ← Phase 2
    ↓
[Constitution Validation] ← Quality check
    ↓
[Content Ready]
```

## Validation Summary

| Entity | Key Validation | Constitutional Principle |
|--------|---------------|-------------------------|
| Module 4 Slide Deck | 40-49 numbering, 30-40 slides | Principle II: Content Organization |
| SlideFile (intro) | EXACTLY 3 slides | Principle II: Module Introduction Structure |
| SlideFile (assessment) | 4 slides, inline answers | Principle II: Assessment Structure |
| SlideFile (exercise) | Starts with `class="exercice"` | Principle II: Exercise Formatting |
| Lab | Module-scoped `lab-4X-topic` | Principle III: Lab Structure |
| Solution | README.md + actual deliverables in resources/ | Principle III: Deliverable Completeness |
| Assessment | Knowledge checks with `<details>` tags | Principle II: Knowledge Check Formatting |
| Visual Asset | SVG preferred, full-width display | Principle IV: Asset Management |

## Next Steps

1. Generate contracts/ folder with:
   - `slide-structure.yaml`: Metadata and organization for all 8-9 slide files
   - `lab-structure.yaml`: Folder structure and file requirements for 3 labs
   - `assessment-criteria.yaml`: Knowledge check format and success criteria
2. Create quickstart.md with content creator guidance
3. Update agent context with TypeScript/Vitest/Playwright setup
