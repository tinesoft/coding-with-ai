# Data Model: Module 3 - AI-Powered Debugging, Refactoring, and Verification

**Date**: 2025-10-26  
**Feature**: Module 3 educational content  
**Purpose**: Define educational content entities and their relationships

## Content Entities

### Module

**Purpose**: Container for cohesive training content covering debugging, refactoring, and verification

**Attributes**:
- `module_number`: Integer (3)
- `title`: String ("AI-Powered Debugging, Refactoring, and Verification")
- `duration`: String ("1 day")
- `target_audience`: String ("Beginner to intermediate developers")
- `prerequisites`: List[String] (["Module 1 completion", "Module 2 completion", "Basic programming knowledge"])

**Relationships**:
- Contains multiple Slides (8 slide files)
- Contains multiple Labs (3 labs)
- Has one Assessment

**State Transitions**:
- Draft → Review → Approved → Published

---

### Slide

**Purpose**: Individual presentation file covering specific topic

**Attributes**:
- `file_name`: String (e.g., "31_ai_debugging.md")
- `sequence_number`: Integer (30-37)
- `title`: String (e.g., "AI-Powered Debugging Techniques")
- `slide_class`: Enum (transition, content, exercice, speaker)
- `content_markdown`: Text (SFEIR Theme formatted markdown)
- `learning_objectives`: List[String]
- `estimated_duration`: Integer (minutes)

**Relationships**:
- Belongs to Module
- May reference Lab (exercise slides reference labs)
- May include Assets (images, diagrams)

**Validation Rules**:
- file_name must follow pattern `{sequence}_*.md`
- sequence_number must be sequential without gaps
- exercise slides must use `class="exercice"` directive
- slide separators must use `##--##`

---

### Lab

**Purpose**: Hands-on practical exercise for skill application

**Attributes**:
- `lab_number`: String (e.g., "lab-31-ai-debugging")
- `module_number`: Integer (3)
- `sequence_in_module`: Integer (1, 2, or 3)
- `title`: String (e.g., "AI-Assisted Debugging Practice")
- `learning_objectives`: List[String]
- `prerequisites`: List[String]
- `estimated_duration`: Integer (minutes)
- `primary_language`: Enum (Python, JavaScript, TypeScript)

**Relationships**:
- Belongs to Module
- Has one Lab Solution
- Contains multiple Exercises
- Referenced by Exercise Slide

**Validation Rules**:
- lab_number follows pattern `lab-{module}{sequence}-{topic}`
- module_number must match parent module
- sequence_in_module must be unique within module
- must have paired -solution folder

---

### Lab Solution

**Purpose**: Reference implementation and explanation for lab exercises

**Attributes**:
- `solution_number`: String (e.g., "lab-31-ai-debugging-solution")
- `readme_path`: String (path to solution README.md)
- `resources_path`: String (path to resources/ folder)
- `has_deliverables`: Boolean

**Relationships**:
- Paired with Lab (1:1)
- Contains Solution Resources

**Validation Rules**:
- Must have README.md with complete solutions
- If exercises create files/projects, resources/ must contain actual working examples
- Exercise order in solution README must match lab README
- No "Success Criteria Checklist" sections allowed

---

### Exercise

**Purpose**: Specific task within a lab for skill practice

**Attributes**:
- `exercise_number`: Integer (1, 2, 3, etc.)
- `title`: String (e.g., "Debug Off-by-One Error")
- `description`: Text (markdown)
- `steps`: List[String] (ordered instructions)
- `success_criteria`: List[String]
- `estimated_duration`: Integer (minutes)
- `difficulty`: Enum (beginner, intermediate, advanced)

**Relationships**:
- Belongs to Lab
- Has Exercise Solution
- May include Exercise Resources (starter code, data files)

**Validation Rules**:
- exercise_number must be sequential from 1 within lab
- must have clear success criteria
- steps must be actionable and unambiguous

---

### Exercise Solution

**Purpose**: Complete working solution for exercise

**Attributes**:
- `exercise_number`: Integer (matches parent exercise)
- `solution_explanation`: Text (markdown explaining approach)
- `code_files`: List[String] (paths to solution code in resources/)
- `key_learnings`: List[String]

**Relationships**:
- Corresponds to Exercise (1:1)
- Solution files stored in Lab Solution resources/

**Validation Rules**:
- Must explain why solution works, not just what it is
- Code files must be complete and runnable
- Must demonstrate best practices

---

### Assessment

**Purpose**: Knowledge validation through quiz and lab completion

**Attributes**:
- `assessment_type`: Enum (knowledge_check, lab_completion, combined)
- `knowledge_check_questions`: List[Question]
- `required_lab_completions`: List[String] (lab numbers)
- `passing_criteria`: String (e.g., "80% quiz + all labs complete")

**Relationships**:
- Belongs to Module
- References Labs for completion tracking
- Included in Assessment Slide (37_assessment_and_recap.md)

**Validation Rules**:
- Knowledge check questions must align with learning objectives
- Must assess content actually taught in slides and labs
- No administrative rubrics in learner-facing slides

---

### Question

**Purpose**: Individual assessment question in knowledge check

**Attributes**:
- `question_id`: Integer
- `question_text`: Text
- `question_type`: Enum (multiple_choice, true_false, short_answer)
- `options`: List[String] (for multiple choice)
- `correct_answer`: String
- `explanation`: Text (why answer is correct)
- `learning_objective_ref`: String (which objective this tests)

**Relationships**:
- Belongs to Assessment

**Validation Rules**:
- Must test concepts taught in module
- Explanation must reference specific slide content
- Difficulty appropriate for target audience

---

### Asset

**Purpose**: Visual or media content supporting learning

**Attributes**:
- `file_name`: String (e.g., "debugging-workflow.svg")
- `file_path`: String (relative to docs/)
- `format`: Enum (svg, png, jpg, webp)
- `alt_text`: String (accessibility description)
- `usage_context`: String (which slide uses this)

**Relationships**:
- Referenced by Slides
- Stored in `docs/assets/images/module-3/`

**Validation Rules**:
- Prefer SVG for diagrams, flowcharts, technical illustrations
- Use raster formats only for photos or complex gradients
- Must have descriptive alt text
- Display full-width on dedicated slide with `style="width:100%; height:auto;"`

---

## Entity Relationships Diagram

```
Module (1)
  ├─── Slides (8) [30-37]
  │     └─── Assets (N)
  ├─── Labs (3) [lab-31, lab-32, lab-33]
  │     ├─── Lab Solution (1)
  │     │     └─── Solution Resources (N)
  │     └─── Exercises (N)
  │           └─── Exercise Solutions (1:1)
  └─── Assessment (1)
        └─── Questions (N)
```

## Data Flow

### Content Creation Flow
1. Create Module structure (folders, numbering)
2. Generate Slide content (30-37 sequence)
3. Create Lab folders (lab-3X and lab-3X-solution)
4. Write Lab exercises and solutions
5. Populate Solution resources/ with working code
6. Create Assessment with questions aligned to content
7. Update slides.js to register new Module 3 slides

### Learner Experience Flow
1. Review Module Introduction Slide (30)
2. Learn Debugging Techniques (Slide 31) → Practice Lab 31
3. Learn Refactoring Patterns (Slide 32) → Practice Lab 32
4. Learn Verification Skills (Slide 33) → Practice Lab 33
5. Complete Assessment (Slide 37): Knowledge Check + Lab Verification

### Quality Validation Flow
1. Validate Constitution Compliance (all entities)
2. Check Sequential Numbering (slides, labs, exercises)
3. Verify Content Alignment (assessment ↔ slides ↔ labs)
4. Validate Solution Completeness (resources/ contains deliverables)
5. Review Cross-References (exercise slides → labs)

## Validation Summary

All entities follow constitutional requirements:
- Sequential numbering without gaps
- Module-scoped lab numbering (lab-3X pattern)
- Complete solution deliverables in resources/
- No administrative checklists in learner materials
- Assessment aligned with actual taught content
- SVG preference for technical visuals
