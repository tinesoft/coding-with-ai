# Quickstart: Module 3 - AI-Powered Debugging, Refactoring, and Verification

**Date**: 2025-10-26  
**Purpose**: Rapid orientation guide for implementing Module 3 content  
**Time to Complete**: ~5 minutes reading

## What This Module Delivers

**For Learners**: Practical skills in AI-assisted debugging, code refactoring, and critical evaluation of AI-generated code

**For Trainers**: Complete 1-day module with slides, labs, and assessment materials ready to use

**Key Differentiator**: Emphasizes human-in-the-loop validation and systematic workflows, not blind AI reliance

---

## Quick Context

### Target Audience
- Beginner to intermediate developers
- Completed Modules 1 & 2 (AI fundamentals and tools introduction)
- Basic programming knowledge in Python or JavaScript

### Module Structure
- **8 slide files** (30-37) covering introduction → debugging → refactoring → verification → assessment
- **3 hands-on labs** (lab-31, lab-32, lab-33) with complete solutions
- **Knowledge check** integrated into final assessment slide
- **Duration**: 1 day (6-8 hours including labs)

### Primary Tools
- GitHub Copilot in VS Code (hands-on labs)
- Optional: Claude, Cursor demonstrations

---

## File Organization at a Glance

```
docs/markdown/30_module_3_debugging/    # Slide content (create these)
├── 30_module3_intro.md
├── 31_ai_debugging.md
├── 32_refactoring_ai.md
├── 33_code_verification.md
├── 34_exercise_debugging.md
├── 35_exercise_refactoring.md
├── 36_exercise_verification.md
└── 37_assessment_and_recap.md

labs/                                    # Lab exercises (create these)
├── lab-31-ai-debugging/
├── lab-31-ai-debugging-solution/
├── lab-32-ai-refactoring/
├── lab-32-ai-refactoring-solution/
├── lab-33-code-verification/
└── lab-33-code-verification-solution/

docs/assets/images/module-3/             # Visual assets (create as needed)
└── *.svg                                # Prefer SVG for diagrams

docs/scripts/slides.js                   # Update to include new slides
```

---

## Implementation Sequence

### Phase 0: Research ✅ COMPLETE
- [x] Debugging best practices established
- [x] Refactoring patterns selected
- [x] Verification checklist defined
- [x] Programming languages chosen (Python, JavaScript/TypeScript)

### Phase 1: Design ✅ COMPLETE
- [x] Data model defined (Module, Slide, Lab, Exercise entities)
- [x] Learning validation contract created
- [x] Project structure documented

### Phase 2: Content Creation (Next Steps)
Use `/speckit.tasks` to generate detailed task breakdown for:
1. Creating slide content (30-37)
2. Building lab exercises and solutions
3. Developing assessment questions
4. Creating visual assets
5. Updating slides.js configuration

---

## Key Design Decisions

### 1. Systematic Approach Over AI-First
- Teach debugging/refactoring fundamentals with AI as accelerator
- Avoids creating AI dependency without core competency
- Human-in-the-loop validation central to all workflows

### 2. Language Choice
- **Python** for debugging exercises (beginner-friendly, common in AI)
- **JavaScript/TypeScript** for refactoring (web dev relevance)
- Demonstrates technique transferability across languages

### 3. Three Separate Labs
- Lab 31: Debugging (5-7 buggy code samples)
- Lab 32: Refactoring (4-6 legacy code patterns)
- Lab 33: Verification (AI-generated code with intentional issues)
- Each lab focuses on one core skill for depth

### 4. Verification Checklist
7-point systematic evaluation framework:
1. Correctness
2. Logic errors
3. Security
4. Dependencies
5. Best practices
6. Performance
7. Testability

---

## Critical Success Factors

### Constitutional Compliance
✅ **Sequential Numbering**: Slides 30-37, labs 31-33 (module-scoped)  
✅ **Solution Completeness**: All resources/ folders contain working deliverables  
✅ **No Admin Checklists**: Labs avoid end-of-document checklists  
✅ **Assessment Alignment**: Quiz questions match taught content  

### Quality Gates
- All slides follow SFEIR Theme syntax
- Exercise slides use `class="exercice"` directive
- Visual assets on dedicated slides, SVG preferred
- Lab instructions are actionable and clear
- Solutions explain *why* not just *what*

---

## Common Pitfalls to Avoid

❌ **Don't**: Create AI-only debugging content  
✅ **Do**: Teach systematic debugging with AI as assistant

❌ **Don't**: Use vague refactoring guidance  
✅ **Do**: Provide specific patterns with clear before/after examples

❌ **Don't**: Include assessment questions on untaught content  
✅ **Do**: Ensure every quiz question references specific slide/lab material

❌ **Don't**: Leave solution resources/ folders empty  
✅ **Do**: Include complete working code for all exercises

❌ **Don't**: Forget to update slides.js  
✅ **Do**: Register all Module 3 slides in slides.js configuration

---

## Next Steps

### Immediate Actions
1. Run `/speckit.tasks` to generate detailed task breakdown
2. Review `data-model.md` for entity relationships
3. Review `contracts/learning-validation.md` for quality standards

### Content Creation Order
1. **Slides first** (establishes what will be taught)
2. **Labs second** (provides practice for slide concepts)
3. **Assessment last** (validates against actual content)

### Validation Workflow
- Check constitutional compliance after each section
- Verify cross-references (exercise slides → labs)
- Test lab exercises for clarity and completeness
- Review assessment alignment before finalizing

---

## Getting Help

### Key Documentation
- **Specification**: `spec.md` - User stories and requirements
- **Research**: `research.md` - Technical decisions and rationale
- **Data Model**: `data-model.md` - Entity relationships
- **Contract**: `contracts/learning-validation.md` - Quality standards
- **Constitution**: `.specify/memory/constitution.md` - Governance rules

### Example References
- Module 1 slides: `docs/markdown/10_module_1_ai_fundamentals/`
- Module 2 slides: `docs/markdown/20_module_2_ai_tools/`
- Existing labs: `labs/lab-11-*`, `labs/lab-21-*`

---

## Success Indicators

You'll know this is ready when:
- ✅ All 8 slide files created and registered in slides.js
- ✅ All 3 labs have complete instructions and working solutions
- ✅ Assessment questions directly reference taught content
- ✅ Solution resources/ folders contain all deliverable files
- ✅ Constitutional compliance verified across all files
- ✅ Slides build correctly (`npm run start`)
- ✅ Labs are testable and produce expected outcomes

**Estimated Completion**: Phase 2 tasks will define timeline based on task breakdown

---

*This quickstart provides orientation. For detailed implementation, proceed to `/speckit.tasks` for task generation.*
