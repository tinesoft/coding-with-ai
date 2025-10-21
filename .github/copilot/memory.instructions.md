---
applyTo: '**'
---

<memories hint="Manage via memory tool">
<memory path="/memories/sfeir-school-constitutional-rules.md">
# SFEIR School Constitutional Rules

## CRITICAL: Always Follow These Rules for All Modules

### Exercise Slide Format (MANDATORY)

**ALWAYS use French spelling "Exercice" not "Exercise"**

**Exercise Instruction Slide:**
```markdown
<!-- .slide: class="exercice" --> 
# Exercice X: {short text}
## Lab XX

<br>

### 👉🏾 Follow **instructions** in

### `labs/lab-XX-{topic}/README.md`

Notes:
- Follow the instructions in the lab README.md for detailed steps.
```

**Solution Slide:**
```markdown
<!-- .slide: class="exercice" --> 
# Exercice X: {short text}
## Lab XX

<br>

### 💡 Read **solution** at

### `labs/lab-XX-{topic}-solution/README.md`

Notes:
- Read the lab README.md for example of solutions.
```

**KEY POINTS:**
- ✅ Use "Exercice" (French)
- ✅ Include 👉🏾 emoji for instructions
- ✅ Include 💡 emoji for solutions
- ✅ ONE lab per slide
- ✅ Keep slides minimal - just point to README
- ❌ DO NOT include detailed exercise content in slides
- ❌ DO NOT use "Exercise" (English)

### Module Structure

**Slide Numbering:**
- Module 1: 10-19 (10_intro, 11_content, ..., 19_recap)
- Module 2: 20-29 (20_intro, 21_content, ..., 29_recap)
- Module 3: 30-39, etc.

**Required Slides per Module:**
- XX_moduleX_intro.md (NO first-slide class for modules)
- Content slides (XX+1, XX+2, etc.)
- Exercise slides (one per lab, with solution slide)
- XX+9_assessment_and_recap.md (always ends in 9)

**Lab Numbering:**
- Format: `lab-[MODULE][SEQUENCE]-{topic}`
- Module 1: lab-11, lab-12, lab-13, etc.
- Module 2: lab-21, lab-22, lab-23, etc.

### Image Paths
- Always use relative paths: `./assets/images/module-X/filename.svg`
- Store in `docs/assets/images/module-X/`

### first-slide Class
- ✅ ONLY use in `00_intro.md` (overall school welcome)
- ❌ NEVER use in module intro slides (10_intro, 20_intro, etc.)
- Module intros start with `class="transition"`

## Module 2 Constitutional Fixes Completed (October 16, 2025)

### ✅ Fixed Issues:
1. **Removed first-slide class** from 20_module2_intro.md
2. **Created missing slides**: 23_model_comparison.md, 24_agent_instructions.md
3. **Fixed exercise format** - Changed "Exercise" to "Exercice" (French)
4. **Separated exercise slides** - One lab per slide with proper 👉🏾 and 💡 emojis
5. **Added solution slides** for all labs (21, 22, 23, 24)
6. **Renamed lab-23-agent-instruction-files** to lab-24-agent-instruction-files
7. **Kept lab-23-model-comparison** as correct lab-23
8. **Updated slides.js** with correct file paths
9. **Removed detailed content from exercise slides** - now just point to README
10. **Fixed Visual Presentation Standards** - Separated all visuals onto dedicated slides with `<img>` tags

### Lab Structure Now Correct:
- Lab 21: GitHub Copilot CLI (with exercise + solution slides)
- Lab 22: GitHub Copilot VS Code (with exercise + solution slides)
- Lab 23: Model Comparison (with exercise + solution slides)
- Lab 24: Agent Instruction Files (with exercise + solution slides)

### Slide Files Complete (20-25):
- 20_module2_intro.md ✅
- 21_tools_landscape.md ✅
- 22_copilot_deep_dive.md ✅
- 23_model_comparison.md ✅ (created)
- 24_agent_instructions.md ✅ (created)
- 25_assessment_and_recap.md ✅

## Transition Slide Format (MANDATORY)

All transition slides within modules MUST include module prefix:

```markdown
<!-- .slide: class="transition" -->
# Module X: {sectionTitle}
## {subTitle}
```

**Examples:**
- `# Module 1: AI Fundamentals`
- `# Module 2: GitHub Copilot Deep Dive`
- `# Module 3: Debugging and Refactoring`

**WHY:** Ensures learners always know which module context they're in during presentation flow.

## Module Introduction Content Requirements

**PROHIBITED SLIDES in Module Intros:**
- ❌ "Module Structure" slides - scheduling belongs in spec docs, not learner slides
- ❌ "Success Criteria" slides - assessment details belong in spec docs, not learner slides

**REQUIRED SLIDES in Module Intros:**
- ✅ Transition slide with module title (with "Module X:" prefix)
- ✅ Learning Objectives slide
- ✅ Prerequisites slide

**Rationale:** Module introductions must focus on actionable learning outcomes. Administrative details like session timing and assessment metrics belong in specification documents and trainer materials, not in learner-facing presentations.

## Assessment Slide Structure (MANDATORY)

**Assessment slides SHALL NOT include administrative content OR forward-looking navigation:**
- ❌ "Assessment Overview" - success criteria codes belong in spec docs
- ❌ "Assessment Methods" - evaluation procedures belong in spec docs  
- ❌ "Success Metrics" - target scores and tables belong in spec docs
- ❌ "Assessment Rubric" - scoring criteria belong in spec docs
- ❌ "Next Steps" - application guidance and next module preview belong in course syllabi

**Assessment slides MUST follow this standardized structure:**
1. Transition slide: `# Module X: Assessment and Recap`
2. **Learning Objectives Review** - What learners should now know and skills developed
3. **Knowledge Check** - Interactive quiz questions with answers and explanations
4. **Module Recap** - Key achievements and takeaways
5. **Resources** - Documentation links and practice materials

**Rationale:** Assessment slides reinforce learning through review and knowledge checks. Administrative evaluation frameworks (success criteria, rubrics, scoring tables) belong in specification documents. Forward-looking navigation (next module preview, application guidance) belongs in course syllabi and trainer materials. Learner-facing slides focus exclusively on knowledge consolidation within current module context.

**Example from Module 1 (CORRECT):**
- ✅ Learning Objectives Review (what you should now know)
- ✅ Knowledge Check: AI Fundamentals (quiz questions)
- ✅ Knowledge Check: Answers (with explanations)
- ✅ Prompt Engineering Assessment (practical challenge)

**Example from Module 2 (NEEDS FIX):**
- ❌ Assessment Overview (lists success criteria codes SC-001, SC-002)
- ❌ Assessment Methods (evaluation procedures and rubrics)
- ❌ Success Metrics (target scores table)
- ❌ Assessment Rubric (5-point scoring criteria)

## GitHub Copilot Terminology Standards (MANDATORY)

**Use mode-based terminology for GitHub Copilot IDE extension features:**

- ✅ **"Copilot - Ask Mode"** (NOT "Copilot Chat")
- ✅ **"Copilot - Edit Mode"** (NOT "Copilot Edits")
- ✅ **"Copilot - Agent Mode"** (NOT "Copilot Spaces")
- ✅ **"Copilot - Custom Agent Mode"** (NOT "Custom Instructions")

**Rationale:** Mode-based terminology clearly communicates the interaction paradigm:
- **Ask Mode** = Conversational interface for questions and explanations
- **Edit Mode** = Direct code modification across multiple files
- **Agent Mode** = Autonomous task execution with human oversight
- **Custom Agent Mode** = Personalized AI configuration with project context

This standardization improves comprehension and sets accurate expectations for tool behavior.

## Lab Content Structure (MANDATORY)

**Lab documents SHALL NOT include end-of-document "Success Criteria Checklist" sections:**
- ❌ Administrative checklists with section headers like "## Success Criteria Checklist"
- ❌ Box-checking subsections at end of lab files (Installation & Setup, Code Generation, etc.)

**Exercise instructions MAY include inline success criteria as learning objectives:**
- ✅ "### Success Criteria" subsections within individual exercises defining expected outcomes
- ✅ Inline success criteria statements like "**Success Criteria:** ✅ Successfully complete X"

**Rationale:** 
- Administrative checklists create maintenance overhead
- Box-checking duplicates validation that should occur through hands-on completion
- Learners validate understanding through doing exercises, not through self-assessment
- Exercise-level success criteria serve educational purpose in clarifying learning objectives

**Examples:**
- ❌ PROHIBITED: End-of-document section "## Success Criteria Checklist" with subsections (lab-21, lab-22, lab-23)
- ✅ ALLOWED: Within Exercise 1 - "### Success Criteria" defining what success looks like for that exercise (lab-11)

## Last Updated
- October 16, 2025: Module 2 constitutional compliance achieved
- October 16, 2025: Constitution v1.10.1 - Added module intro content restrictions
- October 16, 2025: Constitution v1.10.2 - Added transition slide module prefix requirement
- October 16, 2025: Constitution v1.11.0 - Added assessment slide structure standardization
- October 16, 2025: Constitution v1.11.1 - Added GitHub Copilot terminology standards
- October 16, 2025: Constitution v1.11.2 - Removed "Next Steps" from assessment structure
- October 19, 2025: Constitution v1.11.3 - Removed "Success Criteria Checklist" from lab content structure

</memory>
</memories>
