<!--
SYNC IMPACT REPORT - Amendment v1.13.5
Date: 2025-10-30
Amendment: Define explicit Knowledge Check Slide Formatting standard for assessment slides

RATIONALE:
- Knowledge Check slides across modules lacked standardized formatting for question-answer presentation
- Module 3 assessment (37_assessment_and_recap.md) demonstrates best practice with inline answers using <details> tags
- Some modules may have questions and answers on separate slides, reducing educational flow
- Constitution lacked explicit requirement for single-slide question-answer format
- Need clear template and strict prohibition of separated question-answer slides

SCOPE:
This PATCH amendment adds detailed "Knowledge Check Slide Formatting" subsection to Principle II's "Assessment and Recap Slide Structure":
1. ADDED: Complete markdown template for Knowledge Check slides with <details> disclosure element
2. ADDED: Formatting requirements (H2 for question title, H3 for question text, bold options, Notes section)
3. ADDED: Strict prohibition of separate answer slides and alternative formats
4. CLARIFIED: Single-slide format with inline collapsible answers maintains educational flow
5. STRENGTHENED: Rationale emphasizes immediate feedback, presentation flow, and consistency

AFFECTED FILES:
Constitution:
- [✓] .specify/memory/constitution.md - Added "Knowledge Check Slide Formatting" to Principle II (v1.13.4 → v1.13.5)

Supporting Documentation:
- [✓] .github/copilot-instructions.md - Added "Knowledge Check Slide Format" section with complete template

Module Assessment Slides:
- [✓] docs/markdown/30_module_3_debugging/37_assessment_and_recap.md - COMPLIANT: Already uses inline <details> format (reference implementation)
- [✓] docs/markdown/10_module_1_ai_fundamentals/15_assessment_and_recap.md - FIXED: Updated to single-slide <details> format (2 questions converted)
- [✓] docs/markdown/20_module_2_ai_tools/25_assessment_and_recap.md - FIXED: Updated to single-slide <details> format (3 questions converted)

VALIDATION:
- [✓] Constitution principle enhanced with explicit Knowledge Check formatting template
- [✓] Version incremented (PATCH: clarification and standardization)
- [✓] Amendment date updated to 2025-10-30
- [✓] Copilot instructions updated with complete template and examples
- [✓] Module 3 assessment verified compliant (serves as reference implementation)
- [✓] Module 1 assessment fixed (2 Knowledge Check questions now use inline <details> format)
- [✓] Module 2 assessment fixed (3 Knowledge Check questions now use inline <details> format)

FOLLOW-UP ACTIONS:
1. [✓] Updated Module 1 assessment (15_assessment_and_recap.md) - Converted Q1 (Context Windows) and Q2 (LLM Performance)
2. [✓] Updated Module 2 assessment (25_assessment_and_recap.md) - Converted Q1 (Tool Categories), Q2 (Agent Mode), Q3 (Context Windows)
3. [✓] All existing Knowledge Check slides now use single-slide <details> format
4. Ensure all future module assessments (4-7) follow standardized Knowledge Check template

AMENDMENT STATUS: Constitution updated (v1.13.5), copilot instructions updated, all existing assessments (Modules 1-3) now compliant.
-->

<!--
SYNC IMPACT REPORT - Amendment v1.13.4
Date: 2025-10-30
Amendment: Remove "Thank You" slides from Assessment and Recap Slide Structure

RATIONALE:
- "Thank You" slides add no educational value to assessment structure
- Creates unnecessary ceremonial content that belongs in trainer-led wrap-ups
- Assessment slides should focus exclusively on learning validation and resources
- Concluding gratitude and questions belong in trainer facilitation, not slide decks
- Streamlined four-slide structure (Transition → Learning Objectives Review → Knowledge Check → Resources) remains optimal

SCOPE:
This PATCH amendment modifies existing "Assessment and Recap Slide Structure" in Principle II by:
1. ADDED: Explicit prohibition of "Thank You" slides in SHALL NOT include section
2. CLARIFIED: Concluding slides with gratitude/questions add no educational content
3. REINFORCED: Assessment slides must serve learning validation purposes only
4. MAINTAINED: Four-slide structure remains unchanged

AFFECTED FILES:
Constitution:
- [✓] .specify/memory/constitution.md - Added "Thank You" prohibition to Assessment and Recap Slide Structure (v1.13.3 → v1.13.4)

Module Assessment Slides:
- [✓] docs/markdown/30_module_3_debugging/37_assessment_and_recap.md - FIXED: Removed "Thank You!" slide (lines 291-299)
- [✓] docs/markdown/20_module_2_ai_tools/25_assessment_and_recap.md - COMPLIANT: No "Thank You" slide present
- [✓] docs/markdown/10_module_1_ai_fundamentals/15_assessment_and_recap.md - COMPLIANT: No "Thank You" slide present

Supporting Documentation:
- [✓] .github/copilot-instructions.md - UPDATED: Added "Thank You" slides to prohibited list

VALIDATION:
- [✓] Constitution principle updated with "Thank You" prohibition
- [✓] Version incremented (PATCH: clarification and content refinement)
- [✓] Amendment date updated to 2025-10-30
- [✓] Module 1 assessment compliant (no "Thank You" slide)
- [✓] Module 2 assessment compliant (no "Thank You" slide)
- [✓] Module 3 assessment fixed ("Thank You" slide removed)
- [✓] Copilot instructions updated with prohibition

FOLLOW-UP ACTIONS:
1. [✓] Removed "Thank You!" slide from Module 3 assessment (37_assessment_and_recap.md lines 291-299)
2. [✓] Updated .github/copilot-instructions.md to prohibit "Thank You" slides
3. Ensure future module assessments (4-7) follow four-slide structure without concluding gratitude slides

AMENDMENT STATUS: Constitution updated (v1.13.4), all existing assessments compliant, copilot instructions updated.
-->

<!--
SYNC IMPACT REPORT - Amendment v1.13.2
Date: 2025-10-30
Amendment: Prohibit headers and content before exercise slide declarations

RATIONALE:
- Module 3 exercise files contain unnecessary H1 headers before `<!-- .slide: class="exercice" -->` directive
- 34_exercise_debugging.md has "# Hands-on Debugging Practice" before exercise declaration
- 35_exercise_refactoring.md has "# Hands-on Refactoring Practice" before exercise declaration
- These headers create maintenance overhead and duplicate context already in exercise titles
- Constitution "Exercise Slide Formatting" section lacked explicit prohibition of preceding content
- Need clear requirement that exercise files begin directly with exercise slide directive

SCOPE:
This PATCH amendment strengthens existing "Exercise Slide Formatting" in Principle II by:
1. ADDED: Explicit requirement "Exercise slides MUST begin directly with the class='exercice' directive without any preceding content"
2. ADDED: "STRICT PROHIBITION" section listing disallowed content before exercise slides
3. ADDED: Specific prohibition examples (H1 headers, introductory text, section separators)
4. CLARIFIED: Exercise files serve single purpose - declaring exercise slides pointing to lab instructions
5. STRENGTHENED: Rationale emphasizes focused, lean slide generation without unnecessary wrapping content

AFFECTED FILES:
Constitution:
- [✓] .specify/memory/constitution.md - Enhanced Exercise Slide Formatting with strict prohibition of preceding content (v1.13.1 → v1.13.2)

Module 3 Exercise Slides:
- [✓] docs/markdown/30_module_3_debugging/34_exercise_debugging.md - FIXED: Removed "# Hands-on Debugging Practice" header
- [✓] docs/markdown/30_module_3_debugging/35_exercise_refactoring.md - FIXED: Removed "# Hands-on Refactoring Practice" header
- [✓] docs/markdown/30_module_3_debugging/36_exercise_verification.md - COMPLIANT: Already starts with exercise directive

Supporting Documentation:
- [⚠] .github/copilot-instructions.md - REQUIRES UPDATE: Add prohibition guidance for exercise slide headers

VALIDATION:
- [✓] Constitution principle strengthened with explicit prohibition of content before exercise slides
- [✓] Version incremented (PATCH: clarification and enforcement strengthening)
- [✓] Amendment date updated to 2025-10-30
- [✓] All Module 3 exercise slides now compliant (2 headers removed, 1 already correct)
- [⚠] Copilot instructions require update for future compliance

FOLLOW-UP ACTIONS:
1. Update .github/copilot-instructions.md to emphasize exercise slides must start directly with directive
2. Audit Module 1 and Module 2 exercise slides for similar header issues
3. Ensure future exercise slide generation follows direct-start pattern

AMENDMENT STATUS: Constitution updated, Module 3 exercise slides fixed, copilot instructions update pending.
-->

<!--
SYNC IMPACT REPORT - Amendment v1.13.1
Date: 2025-10-30
Amendment: Enforce EXACTLY three slides in Module Introduction Slide Structure with strict prohibition of additional content

RATIONALE:
- Module 1 and Module 3 intro files contain extra slides beyond the three-slide structure
- Module 1 has "Why AI and Prompt Engineering Matter" slide (4th slide violating three-slide limit)
- Module 3 has "Learning Approach", "Success Criteria", and "Let's Get Started!" slides (6 total slides instead of 3)
- Previous constitution wording allowed interpretation that additional slides might be acceptable
- Need explicit "EXACTLY three slides" requirement with comprehensive prohibition list
- Module 2 demonstrates correct compliance and serves as reference implementation

SCOPE:
This PATCH amendment strengthens existing "Module Introduction Slide Structure" in Principle II by:
1. ADDED: Explicit "EXACTLY three slides and NO additional content" requirement
2. ADDED: "STRICT PROHIBITION" section with expanded list of disallowed slide types
3. ADDED: Specific examples from Module 1 and Module 3 violations ("Learning Approach", "Let's Get Started")
4. STRENGTHENED: Rationale emphasizes strict three-slide limit prevents scope creep
5. CLARIFIED: Additional content belongs in module content slides or specification documents, NOT introductions

AFFECTED FILES:
Constitution:
- [✓] .specify/memory/constitution.md - Enhanced Module Introduction Slide Structure with strict three-slide enforcement (v1.13.0 → v1.13.1)

Module Introduction Slides:
- [⚠] docs/markdown/10_module_1_ai_fundamentals/10_module1_intro.md - REQUIRES FIX: Remove "Why AI and Prompt Engineering Matter" slide (slide 4)
- [⚠] docs/markdown/30_module_3_debugging/30_module3_intro.md - REQUIRES FIX: Remove "Learning Approach", "Success Criteria", "Let's Get Started!" slides (slides 4-6)
- [✓] docs/markdown/20_module_2_ai_tools/20_module2_intro.md - COMPLIANT: Reference implementation with exactly three slides

Supporting Documentation:
- [⚠] .github/copilot-instructions.md - REQUIRES UPDATE: Strengthen "EXACTLY three slides" enforcement

VALIDATION:
- [✓] Constitution principle strengthened with explicit three-slide limit and comprehensive prohibition list
- [✓] Version incremented (PATCH: clarification and enforcement strengthening)
- [✓] Amendment date updated to 2025-10-30
- [⚠] Module 1 intro requires removal of 1 extra slide
- [⚠] Module 3 intro requires removal of 3 extra slides
- [⚠] Copilot instructions require update for strict enforcement

FOLLOW-UP ACTIONS:
1. Remove slide 4 ("Why AI and Prompt Engineering Matter") from 10_module1_intro.md
2. Remove slides 4-6 ("Learning Approach", "Success Criteria", "Let's Get Started!") from 30_module3_intro.md
3. Update .github/copilot-instructions.md to emphasize "EXACTLY three slides, no exceptions"
4. Audit future module intros (Modules 4-7) for strict three-slide compliance during content generation

AMENDMENT STATUS: Constitution updated, Module 1 and Module 3 corrections pending.
-->

<!--
SYNC IMPACT REPORT - Amendment v1.13.0
Date: 2025-10-30
Amendment: Define explicit Module Introduction Slide Structure based on Module 2 pattern

RATIONALE:
- Module introduction slides across training program lacked consistent structure
- Module 2 (20_module2_intro.md) demonstrates ideal three-slide pattern but was not codified
- Module 3 and potentially other modules contain non-compliant intro structures with extra slides
- Administrative slides (Module Structure, Why This Matters) duplicate specification document content
- Standardization improves learner experience through predictable navigation and focus on learning outcomes

SCOPE:
This amendment replaces general "Module Introduction Content Restrictions" in Principle II with explicit "Module Introduction Slide Structure" defining:
1. REQUIRED: Three-slide structure (Transition → Learning Objectives → Prerequisites)
2. REQUIRED: Specific title formats ("Module X Overview" for transition, standard headers for content slides)
3. REQUIRED: Content organization patterns (bold action verbs in objectives, H3 sections in prerequisites)
4. PROHIBITED: Extra slides including "Module Structure", "What You'll Learn", "Why This Matters", scheduling information

AFFECTED FILES:
Constitution:
- [✓] .specify/memory/constitution.md - Replaced "Module Introduction Content Restrictions" with detailed "Module Introduction Slide Structure" (v1.12.0 → v1.13.0)

Module Introduction Slides:
- [⚠] docs/markdown/30_module_3_debugging/30_module3_intro.md - REQUIRES REWRITE: Remove extra slides, fix transition title format, restructure Learning Objectives
- [⚠] docs/markdown/10_module_1_ai_fundamentals/10_module1_intro.md - AUDIT NEEDED: Verify compliance with three-slide structure
- [⚠] docs/markdown/40_module_4_testing/ through 70_module_7_capstone/ - AUDIT NEEDED: Verify all future module intros comply

Supporting Documentation:
- [⚠] .github/copilot-instructions.md - Should be updated with explicit Module Introduction Slide Structure guidance

VALIDATION:
- [✓] Constitution principle enhanced with explicit structure definition
- [✓] Version incremented (MINOR: new structural requirements added)
- [✓] Amendment date updated to 2025-10-30
- [⚠] Module 3 intro slide requires immediate correction
- [⚠] All existing and future module intros require compliance verification

FOLLOW-UP ACTIONS:
1. Rewrite docs/markdown/30_module_3_debugging/30_module3_intro.md following constitutional pattern
2. Update .github/copilot-instructions.md with Module Introduction Slide Structure examples
3. Audit Module 1 intro (10_module1_intro.md) for compliance
4. Ensure all future module intros (Modules 4-7) follow three-slide structure during content generation

AMENDMENT STATUS: Constitution updated, Module 3 correction and propagation pending.
-->

<!--
SYNC IMPACT REPORT - Amendment v1.12.0
Date: 2025-10-22
Amendment: Add Lab Solution Deliverable Completeness requirement to Principle III

RATIONALE:
- Lab solutions that reference deliverables in resources/ folder but don't include actual files provide incomplete learning experience
- Learners benefit from concrete, working examples they can examine and reference
- Complete solution artifacts demonstrate best practices and proper implementation
- Missing deliverables create frustration and reduce educational value

SCOPE:
This amendment adds a new requirement to Principle III (Lab Structure Requirements):
- REQUIRED: When lab exercises create files or projects, solution resources/ folder MUST contain those actual files/projects
- REQUIRED: File/project structure in resources/ MUST match what learners would create following exercise instructions
- ALLOWED: Solution README may reference these resources/ deliverables with clear paths

AFFECTED FILES:
Constitution:
- [✓] .specify/memory/constitution.md - Added "Lab Solution Deliverable Completeness" subsection to Principle III

Supporting Documentation:
- [⚠] .github/copilot-instructions.md - Should be updated with solution deliverable requirements
- [⚠] Lab solutions requiring actual resource files need to be populated (e.g., lab-23-agent-instruction-files-solution/resources/)

VALIDATION:
- [✓] New principle added to constitution (v1.11.3 → v1.12.0)
- [⚠] Existing labs need audit to ensure resources/ folders contain referenced deliverables
- [⚠] Future lab generation must include actual deliverable creation in resources/ folder

FOLLOW-UP ACTIONS:
1. Update .github/copilot-instructions.md with solution deliverable guidance
2. Audit existing lab solutions (especially Module 2) for missing resources/ deliverables
3. Populate lab-23-agent-instruction-files-solution/resources/ with actual instruction files

AMENDMENT STATUS: Constitution updated, propagation pending.
-->

<!--
SYNC IMPACT REPORT - Amendment v1.11.3
Date: 2025-10-19
Amendment: Remove "Success Criteria Checklist" sections from lab content

RATIONALE:
- Administrative checklists at end of lab documents create maintenance overhead
- Box-checking duplicates validation that should occur through hands-on completion
- Learners validate understanding through doing, not through self-assessment checklists
- Exercise-level success criteria defining expected outcomes remain appropriate and educational

SCOPE:
This amendment distinguishes between:
1. PROHIBITED: End-of-document "Success Criteria Checklist" sections (administrative overhead)
2. ALLOWED: Exercise-level success criteria defining learning objectives (educational content)

AFFECTED FILES:
Constitution:
- [✓] .specify/memory/constitution.md - Added prohibition to Principle III

Lab Content:
- [✓] labs/lab-21-copilot-cli/README.md - Removed "Success Criteria Checklist" section (29 lines removed)
- [✓] labs/lab-22-copilot-vscode/README.md - Removed "Success Criteria Checklist" section (28 lines removed)
- [✓] labs/lab-23-model-comparison/README.md - Removed "Success Criteria Checklist" section (26 lines removed)
- [✓] labs/lab-11-prompt-basics/README.md - "Success Criteria" subsections are exercise learning objectives (preserved as educational content)

Supporting Documentation:
- [✓] .github/copilot-instructions.md - Added lab content structure guidance
- [✓] /memories/sfeir-school-constitutional-rules.md - Added lab content restrictions with examples

VALIDATION:
- [✓] All Module 2 labs updated (lab-21, lab-22, lab-23) - removed administrative checklists
- [✓] Module 1 labs evaluated - exercise-level criteria preserved as educational content
- [✓] Solution labs contain only educational content (no checklists removed)
- [✓] Supporting documentation updated with clear guidance
- [✓] Memory system updated for future lab generation compliance

AMENDMENT COMPLETE: All tasks validated and completed on October 21, 2025.
-->

<!--
SYNC IMPACT REPORT:
Version Change: 1.11.1 → 1.11.2
Modified Principles: Principle II (Content Organization Standards) - Updated Assessment and Recap Slide Structure
Added Sections: None
Removed Sections: "Next Steps" from Assessment and Recap Slide Structure
Templates Requiring Updates:
  ✅ .specify/memory/constitution.md - Updated assessment slide structure removing "Next Steps"
  ✅ docs/markdown/10_module_1_ai_fundamentals/15_assessment_and_recap.md - Removed "Next Steps and Preparation" slide
  ✅ docs/markdown/20_module_2_ai_tools/25_assessment_and_recap.md - Removed "Next Steps" slide
  ✅ docs/markdown/20_module_2_ai_tools/24_agent_instructions.md - Removed "Next Steps" section from Key Takeaways
  ✅ .github/copilot-instructions.md - Updated assessment slide structure examples
  ✅ /memories/sfeir-school-constitutional-rules.md - Updated assessment structure requirements
Completed Actions:
  1) ✅ Removed "Next Steps and Preparation" slide from Module 1 assessment (15_assessment_and_recap.md)
     - Removed Module 2 preview, homework assignments, and recommended reading sections
     - Kept "Questions and Discussion" slide for trainer-facilitated wrap-up
  2) ✅ Removed "Next Steps" slide from Module 2 assessment (25_assessment_and_recap.md)
     - Removed immediate application, ongoing learning, and Module 3 preview sections
  3) ✅ Removed "Next Steps" section from 24_agent_instructions.md Key Takeaways
     - Removed action items that belonged in lab instructions
  4) ✅ Updated copilot-instructions.md to reflect new assessment structure without "Next Steps"
  5) ✅ Updated memory system with updated assessment requirements including "Next Steps" prohibition
Future Compliance:
  - All future modules (3-7) MUST NOT include "Next Steps" in assessment slides
  - Forward-looking content belongs in course syllabi and trainer materials only
  - Assessment slides focus exclusively on current module mastery
Notes: Successfully removed "Next Steps" from Assessment and Recap Slide Structure. This PATCH version change (v1.11.2) streamlines assessment slides by eliminating forward-looking content. Assessment slides now focus exclusively on: (1) Transition, (2) Learning Objectives Review, (3) Knowledge Check, (4) Module Recap, (5) Resources. "Next Steps" content (module previews, homework, recommended reading, application guidance) belongs in course syllabi, trainer materials, and module transitions, not in module-ending assessment slides. This maintains focus on consolidating current module learning.
-->

# SFEIR School Coding with AI - Constitutional Document
## Version 1.13.5

## Core Principles

### I. Educational Excellence
Comprehensive 7-day training program targeting beginner to intermediate developers with focus on practical AI coding skills and autonomous agents. Emphasis on hands-on learning with real-world applications and professional development workflow enhancement. All content MUST provide measurable skill building and confidence development for modern AI-enhanced software development.

### II. Content Organization Standards
Place training modules in `docs/markdown/` using SFEIR School Theme markdown syntax (reference: https://github.com/sfeir-open-source/sfeir-school-theme). Structured module progression with clear learning outcomes and sequential numbering system for modules and slides. 

**Slide Class Organization**: Only the main presentation introduction (`00_intro.md`) SHALL use the `class="first-slide"` directive. All module introduction slides MUST use `class="transition"` to maintain consistent navigation flow. Regular content slides use standard slide classes without special designation.

**Transition Slide Formatting**: All transition slides within modules MUST prefix the section title with the module identifier to maintain clear context and navigation. The format SHALL be:
```markdown
<!-- .slide: class="transition" -->
# Module X: {sectionTitle}
## {subTitle}
```
Where X is the module number (1-7) and sectionTitle describes the content section. This ensures learners always understand which module context they are in during the presentation flow.

**Content Generation Restrictions**: When generating exercise slides, focus ONLY on the actual exercise content without creating introductory or closing slides. When generating module slides, focus ONLY on the core content without creating introductory or closing transition slides. This ensures lean, focused educational content without unnecessary navigational overhead.

**Module Introduction Slide Structure**: Module introduction slides MUST contain EXACTLY three slides and NO additional content. This strict three-slide limit is mandatory across all modules to ensure consistency, clarity, and focus. The required structure is:

1. **Transition slide** (`class="transition"`): Title format "Module X Overview" (where X is the module number) with a descriptive subtitle summarizing the module's focus area (e.g., "Modern AI Coding Tools Mastery")
2. **Learning Objectives slide** (standard slide): H1 header "Learning Objectives" followed by introductory text and bulleted list of specific learning outcomes with **bold** action verbs (e.g., **Categorize**, **Master**, **Configure**, **Compare**, **Create**)
3. **Prerequisites slide** (standard slide): H1 header "Prerequisites" with H2 subheader (e.g., "What You Need to Know") followed by H3 sections organizing prerequisite categories (e.g., "From Module X", "Technical Requirements")

**STRICT PROHIBITION**: Module introduction files SHALL contain ONLY these three slides. Any additional slides beyond the three-slide structure are PROHIBITED. This includes but is not limited to:
- ❌ "Module Structure" or "Success Criteria" slides (administrative content belongs in specification documents)
- ❌ "What You'll Learn" slides that duplicate Learning Objectives content
- ❌ "Why This Matters" or motivational slides (value proposition belongs in module content, not introductions)
- ❌ "Learning Approach" or methodology slides (pedagogical details belong in trainer materials)
- ❌ "Let's Get Started" or transitional slides (unnecessary between intro and content)
- ❌ Duration, timeline, or scheduling information (belongs in course syllabi)
- ❌ ANY other slides beyond the three required slides

**Rationale**: The EXACTLY-three-slide structure provides essential educational framing (context, goals, preparation) while eliminating ALL redundant content. This strict limit prevents scope creep in module introductions, ensures consistency across all modules (1-7), maintains focus exclusively on actionable learning outcomes, and prevents slide deck bloat. Additional content such as learning approaches, success criteria, and motivational material belongs in the module's main content slides or in specification documents, NOT in the standardized three-slide introduction. The "Module X Overview" title format creates clean, consistent navigation while the subtitle provides necessary context.

**Assessment and Recap Slide Structure**: Module assessment and recap slides SHALL follow a streamlined learner-focused structure that reinforces learning through review, practice, and resource access. Assessment slides MUST include ONLY:

1. **Transition slide**: Module title with "Assessment and Recap" subtitle
2. **Learning Objectives Review**: Summarizes what learners should now know and skills developed
3. **Knowledge Check**: Interactive quiz questions testing key concepts with answers and explanations
4. **Resources**: Documentation links and practice materials

Assessment slides SHALL NOT include:
- ❌ "Module Recap" slides with key achievements or takeaways (duplicates Learning Objectives Review)
- ❌ "Assessment Overview" slides listing success criteria codes and competency requirements
- ❌ "Assessment Methods" slides detailing evaluation procedures and rubrics
- ❌ "Success Metrics" slides showing target scores and assessment tables
- ❌ "Assessment Rubric" slides with detailed scoring criteria
- ❌ "Next Steps" slides with forward-looking content or next module previews
- ❌ "Thank You" slides with concluding gratitude or open questions (belongs in trainer facilitation)

**Rationale**: Assessment slides must focus on three essential functions: reviewing what was learned (Learning Objectives Review), validating understanding (Knowledge Check), and providing continued learning resources (Resources). "Module Recap" slides create redundancy with Learning Objectives Review and add unnecessary slide count. Administrative evaluation frameworks (success criteria, rubrics, scoring tables, assessment methods) and forward-looking content (next module previews, next steps) belong in specification documents and trainer materials, not learner-facing presentations. This streamlined four-slide structure ensures presentations remain focused, concise, and educational while eliminating redundant summary content.

**Knowledge Check Slide Formatting**: Knowledge Check slides MUST present both the question and answer on a single slide using the HTML `<details>` disclosure element for the answer. Each question SHALL be presented on a separate slide. The exact template structure is:

```markdown
<!-- .slide: -->
# **Knowledge Check**

## **Question X: {Topic/Concept Name}**
<br>

### {Question text}

**A)** {Option A text}  
**B)** {Option B text}  
**C)** {Option C text}  
**D)** {Option D text}

<details>
<summary>Answer</summary>
**{Correct Option}** - {Detailed explanation of why this is correct and/or why other options are incorrect. Include relevant context about the concept being tested.}
</details>

Notes:
{Brief explanation of the educational purpose or key learning point.}
```

**Formatting Requirements**:
- Question number SHALL use format "Question X:" followed by short topic descriptor
- Questions SHALL use H3 (###) heading level
- Answer options SHALL use bold labels (**A)**, **B)**, **C)**, **D)**) followed by two spaces before next option
- Answer explanation SHALL be enclosed in `<details><summary>Answer</summary>` tags
- Correct answer SHALL be bolded at start of explanation
- Notes section MUST provide brief educational context

**STRICT PROHIBITION**: Knowledge Check slides SHALL NOT:
- ❌ Separate questions and answers into different slides
- ❌ Place all answers on a single separate "Answers" slide
- ❌ Use any format other than the `<details>` disclosure element for answers
- ❌ Omit the Notes section providing educational context

**Rationale**: The single-slide question-and-answer format using `<details>` tags provides immediate feedback while maintaining presentation flow. Learners can attempt to answer the question, then reveal the answer and explanation without navigating to separate slides. This format eliminates slide deck bloat from answer slides, maintains educational pacing, provides contextual learning through inline explanations, and ensures consistent formatting across all Knowledge Check questions. Separating questions and answers creates unnecessary navigation complexity and breaks the learning flow.

**GitHub Copilot Terminology Standards**: All training materials (slides, labs, documentation) MUST use standardized mode-based terminology when referring to GitHub Copilot IDE extension features. This ensures clarity about the actual interaction modes and capabilities:

- **"Copilot - Ask Mode"** (NOT "Copilot Chat"): Multi-turn conversational interface for asking questions, getting explanations, and exploring code concepts
- **"Copilot - Edit Mode"** (NOT "Copilot Edits"): Direct code modification interface for multi-file changes and refactoring operations
- **"Copilot - Agent Mode"** (NOT "Copilot Spaces"): Autonomous task execution mode with human oversight for complex multi-step development workflows
- **"Copilot - Custom Agent Mode"** (NOT "Custom Instructions"): Personalized AI agent configuration with project-specific instructions and preferences

**Rationale**: Mode-based terminology clearly communicates the interaction paradigm (Ask/Edit/Agent) rather than using generic feature names that don't convey how learners will actually interact with the tool. "Ask Mode" immediately signals conversational interaction, "Edit Mode" indicates direct code modification, "Agent Mode" conveys autonomous execution, and "Custom Agent Mode" clarifies personalization capabilities. This standardization improves comprehension and sets accurate expectations for tool behavior.

**Exercise Slide Formatting**: Exercise slides MUST begin directly with the `class="exercice"` directive without any preceding content. Exercise files SHALL NOT contain headers, titles, or any other content before the first exercise slide declaration. The exact formatting structure is:
```markdown
<!-- .slide: class="exercice" --> 
# Exercice X: {short text}
## Lab XX

<br>

### 👉🏾 Follow **instructions** in

### `labs/lab-XX-{topic}/README.md`

Notes:
- Follow the instructions in the lab README.md for detailed steps.

##--##

<!-- .slide: class="exercice" --> 
# Exercice X: {short text}
## Lab XX

<br>

### 💡 Read **solution** at

### `labs/lab-XX-{topic}-solution/README.md`

Notes:
- Read the lab README.md for example of solutions.
```
Where X is the exercise number and XX is the two-digit lab number. Exercise slides SHALL only use H1, H2, or H3 level headers: H1 (#) is reserved for the exercise title, H2 (##) is reserved for the lab generic sub-header ("Lab XX"), and H3 (###) is reserved for specific steps of the exercise. Bold text MAY be used to highlight sections within the exercise content.

**STRICT PROHIBITION**: Exercise slide files SHALL NOT contain any content before the first `<!-- .slide: class="exercice" -->` directive. Specifically prohibited:
- ❌ H1 headers (e.g., "# Hands-on Practice", "# Lab Exercises")
- ❌ Introductory text or descriptions
- ❌ Section separators (`##--##`) before the first exercise slide
- ❌ ANY other content preceding the exercise declaration

**Rationale**: Exercise files serve a single purpose: declaring exercise slides that point to lab instructions. Unnecessary headers create maintenance overhead, duplicate content that belongs in module slides, and violate the principle of focused, lean slide generation. The exercise title within the slide itself (e.g., "Exercice 1: AI-Powered Debugging") provides sufficient context without additional wrapping content.

**Regular Slide Formatting**: Regular content slides MUST include a `<br>` tag between H2-level (##) and H3-level (###) headers to prevent content overlap. This formatting requirement applies to all standard slides that are not exercise or transition slides:
```markdown
<!-- .slide: -->
# **Slide Title**

## **H2 Section Header**
<br>

### **H3 Subsection Header**
Content here...
```

### III. Lab Structure Requirements
Create sequential lab folders using pattern `labs/lab-XX-{topic}/` with corresponding solution folders `labs/lab-XX-{topic}-solution/`. Each solution folder MUST contain a mandatory `README.md` file and MAY include an optional `resources/` directory for lab outputs and deliverables (e.g., final projects, code samples, generated artifacts). Write all lab instructions in GitHub-flavored markdown format with clear objectives, prerequisites, and success criteria. Provide hands-on exercises with scaffolded projects that demonstrate practical application of module concepts.

**Lab Solution Deliverable Completeness**: When lab exercises require learners to create files, projects, or other artifacts, the corresponding solution's `resources/` folder MUST contain those actual files and projects as complete, working examples. Solution deliverables SHALL match the expected output that learners would produce by following the exercise instructions. For example:
- If an exercise instructs creating a file named `CLAUDE.md`, the solution `resources/` folder MUST contain that `CLAUDE.md` file with complete, exemplary content
- If an exercise requires creating a project or application, the solution `resources/` folder MUST contain a properly named subdirectory (e.g., `exercise-1-complete-project/` or `my-app/`) with all required project files
- Solution README MAY reference these deliverables with clear paths (e.g., "See `resources/CLAUDE.md` for complete example")

**Rationale**: Complete solution artifacts provide learners with concrete reference implementations they can examine, compare against their work, and learn from. Missing deliverables diminish educational value and create learner frustration. This requirement ensures solutions serve as comprehensive learning resources rather than incomplete documentation.

**Lab Content Restrictions**: Lab documents SHALL NOT include "Success Criteria Checklist" sections at the end of lab files. Administrative checklists create maintenance overhead and duplicate validation that should occur through hands-on completion of exercises. Learners validate understanding through doing the exercises, not through self-assessment checklists. Exercise instructions MAY include inline success criteria defining expected outcomes for specific tasks, as these serve an educational purpose in clarifying learning objectives.

**Lab-Slide Content Alignment**: Lab exercises MUST align with and reinforce the learning objectives and content presented in their corresponding module slides. Each lab SHALL provide hands-on practice for concepts introduced in the theoretical slide content. Exercise instructions MUST reference specific techniques, tools, or methodologies covered in the module slides. Learning progression in labs SHALL follow the sequence established in slide presentations to ensure educational coherence and effective skill building.

**Assessment Content Alignment**: Assessment materials including knowledge checks, quizzes, and evaluation criteria MUST accurately reflect the actual content that learners experienced in labs and slide presentations. Assessment questions SHALL be updated when lab content changes to maintain alignment between what is taught and what is tested. This ensures valid measurement of learning outcomes and prevents assessment-instruction misalignment.

**Exercise-Solution Correspondence**: The `lab-XX-{topic}/README.md` file MUST contain all exercises to be completed. The corresponding `lab-XX-{topic}-solution/README.md` file MUST contain the complete solution to each exercise in the same sequential order. Each exercise solution SHALL be clearly marked and correspond exactly to the exercise statement in the main lab file.

**Exercise Numbering Consistency**: When content is removed or reorganized, exercise numbering MUST be updated consistently across all related materials including lab instructions, solutions, exercise slides, and assessment content. Sequential numbering SHALL be maintained without gaps to ensure educational flow and prevent learner confusion.

**Deliverable Organization**: When an exercise solution includes deliverable artifacts (complete projects, code repositories, generated files), the solution text MUST indicate the specific location of these deliverables within the `lab-XX-{topic}-solution/resources/exercise-{X}-complete-project/` subdirectory structure, where X corresponds to the exercise number. Deliverable subdirectories SHALL only be created when required by the exercise's deliverable requirements.

### IV. Asset Management Protocol
Store all visual assets in `docs/assets/images/` using descriptive file names and organized subdirectories by module. Reference assets using relative paths from `docs/` directory in all markdown files. Include slides, diagrams, code screenshots, and supporting visuals while maintaining consistent SFEIR branding standards.

**Visual Format Preference**: When generating or creating visual assets to illustrate concepts in slides, prefer SVG (Scalable Vector Graphics) format whenever technically feasible. SVG format provides resolution-independent scaling, smaller file sizes for diagrams, easier maintenance through text-based editing, and consistent rendering across all devices and screen resolutions. Raster formats (PNG, JPG, WebP) SHALL only be used when SVG is not technically feasible, such as for photographs, complex photo-realistic images, or graphics with intricate gradients that would result in excessive SVG complexity. For diagrams, flowcharts, architecture illustrations, icons, and technical schematics, SVG MUST be the default choice.

**Visual Presentation Standards**: Illustrative visuals MUST be presented on a dedicated separate slide immediately following the concept slide they illustrate. The visual slide SHALL be created using the slide separator `##--##` after the Notes section of the original concept slide. Visual slides MUST display images at full width while preserving aspect ratio using this exact format:

```markdown
##--##

<img src="{path/to/visual}" alt="{veryShortDescription}" style="width:100%; height:auto; display:block;">
```

When the original concept slide includes a Notes section, that Notes section MUST be updated to reference the visual that follows on the next slide. This ensures clear educational flow where concepts are introduced on one slide and reinforced visually on the dedicated subsequent slide. Visual slides SHALL NOT include additional text, headers, or content beyond the image itself to maintain focus on the illustration.

### V. Quality Assurance Standards
Validate all content against defined educational objectives with focus on practical utility and learner confidence building. Maintain professional code quality standards in all examples and exercises. Prioritize clarity, real-world application, and progressive skill development across all training materials.

**Constitution Compliance Verification**: When making changes to training materials, ALL affected files MUST be systematically reviewed for constitutional compliance. This includes exercise slides, lab instructions, solutions, assessment content, and any cross-references. Changes to one component require verification of consistency across the entire educational package to prevent maintenance burden and ensure cohesive learning experience.

**Content Duplication Prevention**: Exercise slides SHALL NOT duplicate detailed content from lab README files. Slides MUST follow the prescribed format pointing to lab instructions and solutions. This eliminates maintenance overhead and ensures single-source-of-truth for educational content while maintaining proper educational flow.

### VI. Content Accuracy and Currency Requirements
All training materials (slides, labs, exercises, and visual aids) MUST reflect accurate and current information about AI technologies, tools, and best practices as of the constitution's last amendment date. When generating or updating content, verify that all technical information, tool capabilities, API references, and industry practices are current and factually correct. Outdated information MUST be updated or clearly marked with deprecation notices. Content creators SHALL validate all AI tool references, feature availability, and technical specifications against official documentation and current releases before publication.

### VII. Data Sourcing and Citation Requirements
When including metrics, statistics, performance data, or quantitative claims in training materials (slides, labs, exercises), ALL such information MUST be accompanied by a direct link to the original source where that data was obtained. Unsourced data claims SHALL NOT be included in any educational materials. The citation format MUST follow this pattern: `[metric value]([source-link])` to provide immediate access to verification. For example: "**Time to First Working Code**: [30-50% reduction](https://example.com/source)" rather than unsourced claims. This requirement ensures educational integrity, allows learners to verify information independently, and maintains professional standards for factual content. When no verifiable source can be provided, the information MUST be excluded from the training materials entirely.

### VIII. Sequential Numbering and Consistency Standards
All training content MUST maintain strict sequential numbering without gaps to ensure clear educational progression and prevent learner confusion. Sequential numbering SHALL be enforced at three hierarchical levels with MODULE-SCOPED NUMBERING for labs and exercises:

**Module-Level Numbering**: Training modules MUST use sequential numbering (Module 1, Module 2, Module 3, etc.) with no gaps in the sequence. When modules are added, removed, or reorganized, ALL subsequent module numbering MUST be updated to maintain sequential integrity.

**Lab-Level Numbering (Module-Scoped)**: Within each module, laboratories MUST use module-scoped numbering that clearly identifies both the parent module and the sequential position within that module. Lab folder names MUST follow the pattern `lab-[MODULE_NUMBER][SEQUENCE]-{topic}/` where:
- `MODULE_NUMBER` is a single digit (1-7) identifying the parent module
- `SEQUENCE` is a single digit (1, 2, 3...) identifying the sequential position within that module
- Lab numbering RESETS to 1 for each new module
- Examples: Module 1 labs are `lab-11-{topic}`, `lab-12-{topic}`, `lab-13-{topic}`; Module 2 labs are `lab-21-{topic}`, `lab-22-{topic}`, etc.
- This ensures labs are CLEARLY ASSOCIATED with their parent module and prevents ambiguity about which module a lab belongs to.

**Exercise-Level Numbering (Lab-Scoped)**: Within each lab, exercises MUST use sequential numbering (Exercise 1, Exercise 2, Exercise 3, etc.) starting from 1 for the first exercise in each lab. Exercise numbering RESETS to 1 for each new lab. Exercise slides MUST reference labs using the module-scoped format "Lab [MODULE_NUMBER][SEQUENCE]" matching the lab folder name pattern.

**Cross-Reference Consistency**: When content is modified, ALL related materials MUST be updated simultaneously including lab instructions, solutions, exercise slides, assessment content, and navigation references. No orphaned references or broken sequential chains SHALL be permitted. Changes to numbering in one component require immediate verification and update of all dependent references to maintain educational coherence. The module-scoped numbering system ensures clear module boundaries and prevents confusion when working across multiple modules simultaneously.

### IX. Research Information Currency Requirements
During any research phase of content development, training material creation, or educational resource preparation, ALL information gathering activities MUST actively seek and validate the most current and accurate information available. Research SHALL NOT rely solely on static knowledge bases or pre-existing documentation without verification. When conducting research for AI technologies, tools, frameworks, APIs, or industry practices, content creators MUST:

- **Active Information Retrieval**: Actively fetch current information from authoritative online sources, official documentation, and up-to-date repositories rather than relying on potentially outdated cached knowledge
- **Currency Validation**: Verify that all technical information, version numbers, feature availability, and capabilities reflect the current state of the technology as of the research date
- **Source Authority Verification**: Prioritize official documentation, primary sources, and authoritative references over secondary or potentially outdated information sources
- **Real-Time Validation**: When possible, validate information against live APIs, current tool capabilities, and available features rather than assuming functionality based on historical knowledge

**Rationale**: The rapidly evolving nature of AI technologies, tools, and best practices requires that educational content reflect the most current state of the field. Outdated information in training materials can lead to learner confusion, ineffective practices, and reduced educational value. Active research ensures that learners receive accurate, applicable, and professionally relevant instruction that prepares them for current industry practices.

## Training Module Overview

This 7-day training provides a comprehensive journey from AI fundamentals to advanced agentic development workflows, with a strong focus on practical application and enterprise readiness.

### Module 1: AI Fundamentals, Prompt Engineering, and Safety (1 day)
- **AI Fundamentals:** Core concepts, LLMs, embeddings, Retrieval-Augmented Generation (RAG), and context windows
- **Prompt Engineering Theory:** Effective communication patterns with AI systems (e.g., role-playing, constraints, few-shot examples)
- **Safety and Ethics:** AI tool implications for code security, data privacy, and ethical use
  - **Code Security:** Vulnerabilities in AI-generated code (injection attacks, insecure dependencies); best practices for review, testing, and validation
  - **Data Privacy:** Sensitive data exposure risks; compliance with regulations (GDPR, HIPAA); authorization protocols for external services
  - **Ethical Use:** Bias and fairness considerations; transparency in AI assistance disclosure; developer accountability for AI-generated code
  - **Prerequisite for Tool Introduction:** Awareness of safety and ethical considerations essential before integrating AI tools into development workflows; organizational policy establishment for responsible AI tool usage
- **Practical Exercises:** Hands-on prompt writing and iterative refinement

### Module 2: Modern AI Coding Tools and Deep Dive (1.5 days)
- **Agentic Tools Landscape:** Overview of practical tools across categories (CLI, IDEs, Extensions, Online)
  - **CLI-Based Agents:** GitHub Copilot CLI, Codex CLI, Gemini CLI, Claude Code, Opencode, Warp, Aider
  - **Standalone IDEs:** Cursor, Windsurf, Kiro, Zed
  - **IDE Extensions (VS Code/JetBrains):** GitHub Copilot, Roo Code, Kilo Code, Continue,  Codex, Cline (formerly Claude Dev), Amazon Q Developer
  - **Online Tools:** Mention-only (Bolt.new, Firebase Studio, Lovable, v0 by Vercel, Replit AI)
- Focus on GitHub Copilot (VS Code) for hands-on labs and exercises
  - Install the VS Code extension, then add the custom agent “GPT 4.1 - Beast Mode” via this direct link badge: [![Install in VS Code](https://img.shields.io/badge/VS_Code-Install-0098FF?style=flat-square&logo=visualstudiocode&logoColor=white)](https://aka.ms/awesome-copilot/install/chatmode?url=vscode%3Achat-mode%2Finstall%3Furl%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2Fgithub%2Fawesome-copilot%2Fmain%2Fchatmodes%2F4.1-Beast.chatmode.md)
  - Showcase and practice the three modes — Ask (chat), Edit (inline/apply changes), Agent (autonomous task execution with oversight)
  - Showcase custom agent mode
  - Showcase restore points in Github CopilotChat
- **Models Comparison:** Detailed comparison on main coding models and when to use what (e.g., GPT-5 for reasoning, Claude for long context, Gemini for API/multimodal, Deepseek, etc.)

### Module 3: AI-Powered Debugging, Refactoring, and Verification (1 day)
- **AI Debugging:** Systematic problem-solving with AI assistance (focusing on root cause analysis)
- **Refactoring with AI:** Code improvement, modernization, and using AI to maintain backward compatibility
- **Verifying AI Code:** A critical segment on the **Human-in-the-Loop** model and techniques for spotting and fixing AI **hallucinations** and security flaws
- **Debugging Exercises:** Practical troubleshooting scenarios, including finding intentionally introduced AI-generated flaws

### Module 4: Test Automation and Quality Assurance with AI (1 day)
- **Test Automation:** AI-assisted generation of unit, integration, and end-to-end tests
- **Test-Driven Development (TDD) with AI:** Using agents to co-create tests *before* writing implementation code
- **Quality Assurance:** Maintaining coding standards and enforcing best practices using AI-powered static analysis
- **Testing Exercises:** Automated test creation, validation, and increasing test coverage

### Module 5: Code Review, Security Governance, and DevOps (1 day)
- **Code Review with AI:** Using AI assistants to evaluate pull requests, suggest performance improvements, and assess compliance
- **Governance and Policy:** Enterprise AI adoption strategies, policy setting, and controlling tool usage across teams
- **AI in DevOps/LLMOps:** Introduction to integrating AI agents into CI/CD pipelines (e.g., auto-documentation, automated reviews)
- **Review Exercises:** Practical code review scenarios focusing on security and compliance checks

### Module 6: Agentic Development Workflows and Spec-Driven Coding (1.5 days)
- **Agentic Workflows:** Systematic approaches to AI-driven development methodologies
- **Vibe Coding:** Intuitive AI collaboration patterns and advanced agent prompting
- **Spec-Driven Coding (Spec-Kit Deep Dive):** Specification-based development methodology
- **Hands-on Lab:** Dedicated lab on **Spec-Kit** to plan, scaffold, and execute an application module using a documented specification
- **Workflow Exercises:** Building a multi-step agentic process for a defined engineering task

### Module 7: Practical Project - Website Development and Multimodality (1 day)
- **Project Planning:** AI-assisted project architecture and component-level planning
- **Multimodal Prototyping:** Using an AI model (e.g., Gemini Pro) to generate starter UI code from a simple **wireframe sketch or screenshot**
- **Project Execution:** Complete a well-scoped website component/feature using the **workflows and tools from Modules 6 and 2**
- **Project Showcase:** Presentation and evaluation of results, emphasizing the **efficiency gained** through AI-assisted processes

## Technical Stack Requirements

### Framework and Build System
- **Framework**: SFEIR School Theme (RevealJS-based presentation framework)
- **Build Tool**: Nx Workspace with Vite for modern development workflow
- **Package Manager**: NPM for dependency management
- **Deployment**: GitHub Pages for slide hosting and distribution

### Development Environment
- **Languages**: TypeScript for type safety, Markdown for content creation
- **IDE Requirements**: VS Code or Cursor IDE with AI extensions
- **Version Control**: Git for source management
- **Container Support**: DevContainer configuration for consistent development environment

### AI Tools Integration
- **Primary Tool for Labs**: GitHub Copilot in VS Code (with optional custom agent: “GPT 4.1 - Beast Mode”)
- **Secondary/Optional Tools**: Gemini, Claude, Codex, Cursor, Amazon Q Developer (demonstrated live by trainer; not required for labs)
- **Enterprise Platforms**: Support for professional AI development environments
- **Tool Access**: GitHub account required for Copilot access
- **Multi-Platform**: Cross-platform compatibility for diverse development setups; online tools are mention-only in Module 2 and not used in labs

## Project Structure Standards

### Documentation Organization
```
docs/
├── markdown/          # Training slide content
│   ├── 00_intro.md    # Introduction and welcome
├── 01_speaker.md      # Speaker information
├── 02_agenda.md       # Training agenda
├── 10_module_1_ai_fundamentals/     # Module 1: AI Fundamentals
│   ├── 10_module1_intro.md
│   ├── 11_ai_fundamentals.md
│   ├── 12_prompt_engineering.md
│   ├── 13_exercise_prompts.md
│   ├── 14_tools_and_agents.md
│   └── 15_assessment_and_recap.md
├── 20_module_2_ai_tools/            # Module 2: AI Tools
│   ├── 20_module2_intro.md
│   ├── 21_agentic_tools_landscape.md
│   ├── 22_copilot_setup_and_modes.md
│   ├── 23_copilot_agent_workflows.md
│   └── 24_exercise_copilot_tools.md
├── 30_module_3_debugging/           # Module 3: Debugging
│   ├── 30_module3_intro.md
│   ├── 31_ai_debugging.md
│   ├── 32_refactoring_ai.md
│   ├── 33_code_analysis.md
│   └── 34_exercise_debugging.md
├── 40_module_4_testing/             # Module 4: Testing
│   ├── 40_module4_intro.md
│   ├── 41_test_automation.md
│   ├── 42_quality_assurance.md
│   └── 43_exercise_testing.md
├── 50_module_5_review_security/     # Module 5: Review & Security
│   ├── 50_module5_intro.md
│   ├── 51_code_review_ai.md
│   ├── 52_security_basics.md
│   ├── 53_governance.md
│   └── 54_exercise_review.md
├── 60_module_6_workflows/           # Module 6: Workflows
│   ├── 60_module6_intro.md
│   ├── 61_agentic_workflows.md
│   ├── 62_vibe_coding.md
│   ├── 63_spec_driven_coding.md
│   └── 64_exercise_workflows.md
├── 70_module_7_capstone/            # Module 7: Capstone Project
│   ├── 70_module7_intro.md
│   ├── 71_project_planning.md
│   ├── 72_project_execution.md
│   └── 73_project_showcase.md
└── assets/
    └── images/        # Generated visual assets and diagrams
```

### Laboratory Structure (Module-Scoped Numbering)
```
labs/
├── lab-11-prompt-basics/         # Module 1, Lab 1: Prompt engineering fundamentals
│   └── README.md
├── lab-11-prompt-basics-solution/
│   ├── README.md
│   └── resources/                # Optional: Lab outputs and deliverables
├── lab-12-ai-fundamentals/       # Module 1, Lab 2: AI concepts and LLM understanding
│   └── README.md
├── lab-12-ai-fundamentals-solution/
│   ├── README.md
│   └── resources/                # Optional: Lab outputs and deliverables
├── lab-21-copilot-cli/           # Module 2, Lab 1: CLI agent hands-on (GitHub Copilot CLI)
│   └── README.md
├── lab-21-copilot-cli-solution/
│   ├── README.md
│   └── resources/
├── lab-22-copilot-vscode/        # Module 2, Lab 2: Deep dive on Copilot in VS Code (modes, custom agents)
│   └── README.md
├── lab-22-copilot-vscode-solution/
│   ├── README.md
│   └── resources/
├── lab-23-model-comparison/      # Module 2, Lab 3: Coding model comparison (GPT-5, Claude, Gemini, etc.)
│   └── README.md
├── lab-23-model-comparison-solution/
│   ├── README.md
│   └── resources/
├── lab-31-ai-debugging/          # Module 3, Lab 1: AI-powered debugging and verification (Human-in-the-Loop)
│   └── README.md
├── lab-31-ai-debugging-solution/
│   ├── README.md
│   └── resources/
├── lab-41-test-automation/       # Module 4, Lab 1: Test automation and TDD with AI
│   └── README.md
├── lab-41-test-automation-solution/
│   ├── README.md
│   └── resources/
├── lab-51-code-review/           # Module 5, Lab 1: AI-assisted code review and DevOps integration
│   └── README.md
├── lab-51-code-review-solution/
│   ├── README.md
│   └── resources/
├── lab-61-agentic-workflows/     # Module 6, Lab 1: Agentic development workflows
│   └── README.md
├── lab-61-agentic-workflows-solution/
│   ├── README.md
│   └── resources/
├── lab-62-spec-kit/              # Module 6, Lab 2: Spec-Kit deep dive and hands-on
│   └── README.md
├── lab-62-spec-kit-solution/
│   ├── README.md
│   └── resources/
├── lab-71-multimodal-project/    # Module 7, Lab 1: Multimodal website prototyping and project execution
│   └── README.md
├── lab-71-multimodal-project-solution/
│   ├── README.md
│   └── resources/
```

### Content Creation Guidelines
- **Slide Numbering**: Sequential numbering system (00-09: intro, 10-19: module 1, 20-29: module 2, etc.)
- **Slide Class Usage**: `first-slide` class reserved exclusively for `00_intro.md`; module introductions use `transition` class
- **Module Organization**: Each module includes intro slide, content slides, exercise slides, and assessment slide
- **Exercise Integration**: Each module includes hands-on exercises with clear objectives and success criteria
- **Asset Management**: All images referenced with relative paths from `docs/` directory
- **Markdown Standards**: SFEIR School Theme syntax for consistent presentation formatting

## Governance

This constitution supersedes all other development practices for the SFEIR School Coding with AI training program. All content creation, lab development, and documentation MUST verify compliance with these standards. Educational effectiveness and practical utility MUST be maintained throughout the training development process.

**Version**: 1.13.3 | **Ratified**: 2025-09-18 | **Last Amended**: 2025-10-30