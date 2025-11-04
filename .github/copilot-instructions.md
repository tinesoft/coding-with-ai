# GitHub Copilot Instructions for SFEIR School Coding with AI

## Project Context

You are working on **SFEIR School Coding with AI**, a comprehensive 7-day training program for developers learning AI-enhanced coding workflows. This educational project follows strict constitutional guidelines and targets beginner to intermediate developers.

### Current Module: Module 1 - Introduction to AI and Prompt Engineering

**Learning Objectives:**
- AI Fundamentals: LLMs, embeddings, RAG concepts
- Prompt Engineering: Effective AI communication techniques  
- Practical Application: Hands-on prompt writing and iteration
- Tool Awareness: Introduction to AI coding assistants

**Target Audience:** Beginner to intermediate developers with basic programming knowledge

## Content Creation Guidelines

### SFEIR School Theme Markdown Syntax
When creating slide content, use these patterns:

```markdown
<!-- .slide: class="first-slide" sfeir-level="2" sfeir-techno="AI" -->
# **Welcome to SFEIR School**
## **Module Title**

##--##

<!-- .slide: class="transition" -->
# Module X: {sectionTitle}
## {subTitle}

##--##

```markdown
<!-- .slide: class="exercice" -->  
<!-- .slide: class="exercice" --> 
# Exercise X: {short text}
## Lab XX

<br>

### 👉🏾 Follow **instructions** in

### `labs/lab-XX-{topic}/README.md`

Notes:
- Follow the instructions in the lab README.md for detailed steps.

##--##

<!-- .slide: class="exercice" --> 
# Exercise X: {short text}
## Lab XX

<br>

### 💡 Read **solution** at

### `labs/lab-XX-{topic}-solution/README.md`

Notes:
- Read the lab README.md for example of solutions.
```

**Exercise Wording Convention:**
- CSS class attribute uses lowercase "exercice" (French): `<!-- .slide: class="exercice" -->`
- All visible content uses "Exercise" (English): `# Exercise 1: AI-Powered Debugging`
- This maintains SFEIR School Theme compatibility while ensuring linguistic consistency
```

**Key Syntax Rules:**
- Use `##--##` to separate slides (single separator only - no duplicates)
- Include `<!-- .slide -->` directives for special styling
- Use SFEIR theme classes: `first-slide`, `transition`, `exercice`, `speaker-slide`, `with-code`
- Reference images with relative paths: `./assets/images/filename.png`

**Slide Separator Standards:**
- ✅ REQUIRED: Single `##--##` between slides with content following
- ❌ PROHIBITED: Duplicate separators (`##--##\n\n##--##`) creating empty slides
- **Rationale**: Empty slides disrupt presentation flow and serve no educational purpose

**Code Slide Formatting:**
Content slides containing multi-line code blocks MUST use `class="with-code"` for proper formatting:
```markdown
<!-- .slide: class="with-code" -->
# **Code Example Title**

## **Description**
<br>

```typescript
import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Example');
});
```
```
- ✅ REQUIRED: Use `class="with-code"` for slides with multi-line code blocks
- ❌ PROHIBITED: Code-heavy slides without proper CSS class (causes formatting issues)
- **Rationale**: The "with-code" class ensures proper spacing and prevents content overlap

**Exercise Slide Formatting:**
Exercise slide files MUST begin directly with the `<!-- .slide: class="exercice" -->` directive. NO headers, titles, or other content before the first exercise slide:
- ❌ PROHIBITED: `# Hands-on Practice` or similar H1 headers before exercise
- ❌ PROHIBITED: Section separators (`##--##`) before first exercise
- ❌ PROHIBITED: ANY introductory content before exercise declaration
- ✅ REQUIRED: File starts immediately with `<!-- .slide: class="exercice" -->`

**Exercise Placement and Integration:**
Exercise slides MUST immediately follow related content within the same markdown file:
- ✅ REQUIRED: Append exercise slides to END of related content file (e.g., Lab 41 exercises → `41_test_automation.md`)
- ✅ REQUIRED: Both instruction and solution slides follow content slides
- ❌ PROHIBITED: Separate standalone exercise-only markdown files (e.g., `46_exercise_testing.md`)
- **Rationale**: Just-in-time learning—practice immediately after concept introduction improves retention and contextual understanding

**Transition Slide Formatting:**
ALL transition slides within modules MUST follow this format:
```markdown
<!-- .slide: class="transition" -->
# Module X: {sectionTitle}
## {subTitle}
```
- **Module prefix required**: Always include "Module X:" before the section title
- **Subtitle required**: Provide descriptive subtitle for context
- **No standalone titles**: Never place H1 title before transition slide separator
- This ensures learners always understand which module context they are in

### Lab Structure (GitHub Flavored Markdown)
For lab exercises, create:

```
labs/lab-XX-topic/
├── README.md           # Main instructions
├── exercises/          # Practice files  
└── resources/          # Reference materials

labs/lab-XX-topic-solution/
├── README.md           # Solution explanations
├── completed/          # Finished exercises
└── resources/          # Optional: Lab outputs and deliverables
```

**Lab README.md Format:**
```markdown
# Lab X: Topic Title

## Learning Objectives
- Objective 1
- Objective 2

## Prerequisites
- Required knowledge
- Setup requirements

## Instructions

### Exercise 1: Title
**Objective:** What you'll accomplish

**Steps:**
1. Clear, actionable step
2. Next step with expected outcome
3. Validation step

### Exercise 2: Title
[Same pattern]
```

**Lab Content Restrictions:**
- **NO "Success Criteria Checklist"**: Do not include end-of-document administrative checklist sections
- **Exercise Success Criteria Allowed**: Individual exercises may include success criteria defining expected outcomes
- **Rationale**: Learners validate understanding through doing exercises, not through self-assessment checklists

**Lab Solution Deliverable Completeness:**
- **REQUIRED**: When lab exercises create files or projects, solution `resources/` folder MUST contain those actual files/projects
- **Example 1**: If exercise creates `CLAUDE.md`, solution must include `resources/CLAUDE.md` with complete content
- **Example 2**: If exercise creates a project, solution must include `resources/project-name/` with all project files
- **Rationale**: Complete solution artifacts provide concrete reference implementations learners can examine and learn from

## Constitutional Compliance Requirements

### File Organization
- **Slides:** Place in `docs/markdown/10_module_1_ai_fundamentals/`
- **Numbering:** Use 10-19 for Module 1 (10_intro, 11_fundamentals, etc.)
- **Labs:** Module-scoped numbering `lab-11-prompt-basics`, `lab-12-ai-fundamentals` (format: `lab-[MODULE][SEQUENCE]-{topic}`)
- **Assets:** Store in `docs/assets/images/` with relative path references

### Quality Standards
- **Educational Excellence:** Focus on practical AI coding skills
- **Progressive Learning:** Each section builds on previous knowledge
- **Hands-on Practice:** Include exercises and real-world applications
- **Safety Awareness:** Address AI limitations and best practices
- **Accessibility:** Clear language appropriate for skill level

### Content Requirements
- **Learning Objectives:** Specific, measurable, achievable
- **Real-world Relevance:** Professional development focus
- **Interactive Elements:** Exercises, discussions, practice opportunities
- **Assessment Integration:** Knowledge checks and skill validation

## Technical Implementation

### Slide Configuration
Update `docs/scripts/slides.js` to include new Module 1 slides:

```javascript
function schoolSlides() {
  return [
    "00_intro.md",
    "01_speaker.md", 
    "02_agenda.md",
    "10_module_1_ai_fundamentals/10_module1_intro.md",
    "10_module_1_ai_fundamentals/11_ai_fundamentals.md",
    "10_module_1_ai_fundamentals/12_prompt_engineering.md",
    "10_module_1_ai_fundamentals/13_exercise_prompts.md",
    "10_module_1_ai_fundamentals/14_tools_and_agents.md",
    "10_module_1_ai_fundamentals/15_assessment_and_recap.md",
  ];
}
```

### Development Workflow
```bash
# Start development server
npm run start

# View slides at http://localhost:4200
# Verify content loads properly
# Test slide navigation and styling
```

## Content Creation Priorities

### Module 1 Implementation Order
1. **10_module1_intro.md** - Welcome and objectives
2. **11_ai_fundamentals.md** - Core AI concepts
3. **12_prompt_engineering.md** - Practical techniques
4. **13_exercise_prompts.md** - Hands-on practice
5. **14_tools_and_agents.md** - Tool introduction
6. **15_assessment_and_recap.md** - Validation and summary

### Lab Development Order  
1. **lab-11-prompt-basics** - Foundation skills (Module 1, Lab 1)
2. **lab-12-ai-fundamentals** - Concept application (Module 1, Lab 2)

## Recent Changes and Context

**Latest Updates:**
- Module 1 specification completed (001-module-1-introduction)
- Research phase completed with SFEIR theme syntax analysis
- Data model defined for content structure and learning progression
- Quality contracts established for slides and labs
- Constitutional compliance verified for educational standards

**Current Focus:**
- Creating slide content following SFEIR School Theme syntax
- Developing hands-on lab exercises with clear instructions
- Ensuring progressive skill building from basics to application
- Maintaining constitutional compliance throughout implementation

## Quality Checklist

When creating content, verify:
- [ ] Follows SFEIR School Theme markdown syntax
- [ ] Uses proper slide separators (##--##)
- [ ] Includes clear learning objectives
- [ ] Provides hands-on practice opportunities
- [ ] Uses relative image paths from docs/
- [ ] Follows sequential numbering (10-19 for Module 1)
- [ ] Targets appropriate skill level (beginner-intermediate)
- [ ] Addresses AI safety and limitations
- [ ] Includes assessment and validation elements
- [ ] Maintains professional educational standards
- [ ] Assessment slides use learner-focused structure (Learning Objectives Review, Knowledge Check)
- [ ] NO administrative slides in assessments (Assessment Overview, Success Metrics, Rubrics)
- [ ] Module introduction slides follow three-slide structure (Transition → Learning Objectives → Prerequisites)
- [ ] NO extra slides in module intros (Module Structure, What You'll Learn, Why This Matters)

## Module Introduction Slide Structure

Module introduction slides MUST contain EXACTLY three slides and NO additional content. This strict three-slide limit is mandatory:

**1. Transition Slide:**
```markdown
<!-- .slide: class="transition" -->
# Module X Overview
## {Descriptive Subtitle}
```
- Title format: "Module X Overview" (where X is module number 1-7)
- Subtitle: Brief description of module focus (e.g., "Modern AI Coding Tools Mastery")

**2. Learning Objectives Slide:**
```markdown
<!-- .slide: -->
# Learning Objectives

By the end of this module, you will be able to:

<br>

- **Action Verb** specific learning outcome
- **Action Verb** specific learning outcome
- **Action Verb** specific learning outcome
```
- Use bold action verbs: **Categorize**, **Master**, **Configure**, **Compare**, **Create**, **Implement**, **Evaluate**
- Focus on measurable, specific outcomes
- 4-6 objectives per module

**3. Prerequisites Slide:**
```markdown
<!-- .slide: -->
# Prerequisites

## What You Need to Know

<br>

### **From Module X**
- Previous module concepts required
- Relevant techniques from earlier training

### **Technical Requirements**
- Software/tools needed
- Programming experience required
```

**STRICT PROHIBITION - No Additional Slides Allowed:**
Module introduction files SHALL contain ONLY the three slides listed above. ANY additional slides are PROHIBITED, including:
- ❌ "Module Structure" slides - duration/scheduling belongs in spec docs
- ❌ "What You'll Learn" slides - duplicates Learning Objectives
- ❌ "Why This Matters" slides - motivational content belongs in module body
- ❌ "Learning Approach" slides - pedagogical details belong in trainer materials
- ❌ "Success Criteria" slides - assessment information belongs in spec docs
- ❌ "Let's Get Started" slides - unnecessary transitional content
- ❌ Timeline or duration information - belongs in course syllabi
- ❌ ANY other slides beyond the three required slides

**Rationale**: The EXACTLY-three-slide structure provides essential educational framing (context, goals, preparation) while eliminating ALL redundant content. This strict limit prevents scope creep, ensures consistency across all modules, and maintains exclusive focus on actionable learning outcomes.

## Assessment Slide Structure

Module assessment and recap slides MUST follow this streamlined four-slide structure:

1. **Transition slide**: `# Module X: Assessment and Recap`
2. **Learning Objectives Review**: What learners should now know and skills developed
3. **Knowledge Check**: Interactive quiz questions with answers and explanations
4. **Resources**: Documentation links and practice materials

**Prohibited Content in Assessment Slides:**
- ❌ "Module Recap" - duplicates Learning Objectives Review content
- ❌ "Assessment Overview" - success criteria codes belong in spec docs
- ❌ "Assessment Methods" - evaluation procedures belong in spec docs
- ❌ "Success Metrics" - target scores and tables belong in spec docs
- ❌ "Assessment Rubric" - scoring criteria belong in spec docs
- ❌ "Next Steps" - forward-looking content belongs in course syllabi/trainer materials
- ❌ "Thank You" slides - concluding gratitude or open questions belong in trainer facilitation

**Rationale**: Assessment slides focus on three essential functions: reviewing what was learned (Learning Objectives Review), validating understanding (Knowledge Check), and providing continued learning resources (Resources). "Module Recap" slides create redundancy with Learning Objectives Review. Administrative evaluation frameworks, forward-looking navigation, and ceremonial concluding slides belong in specification documents and trainer materials, not learner-facing presentations.

### Knowledge Check Slide Format

**REQUIRED FORMAT**: Each Knowledge Check question MUST present both question and answer on a SINGLE slide using `<details>` tags:

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
**{Correct Option}** - {Detailed explanation of why this is correct and/or why other options are incorrect.}
</details>

Notes:
{Brief explanation of the educational purpose or key learning point.}
```

**Key Requirements**:
- Each question on separate slide with inline answer using `<details>` disclosure element
- Question format: "Question X: {Topic}" as H2, question text as H3
- Bold answer options (**A)**, **B)**, etc.) with two spaces between
- Answer explanation starts with bolded correct option letter
- Notes section provides educational context

**Prohibited**:
- ❌ Separating questions and answers into different slides
- ❌ Creating separate "Answers" slides
- ❌ Any format other than `<details>` for answers

### Resources Slide Format

**REQUIRED FORMAT**: Resources slides in module assessments MUST follow this standardized template:

```markdown
<!-- .slide: -->
# **Resources**

## **Further Learning**
<br>

### **Documentation**
- [{Link Title}]({URL}) - {Brief description}
- [{Link Title}]({URL}) - {Brief description}

### **Lab Solutions**
- Review `labs/lab-XX-{topic}-solution/`
- Review `labs/lab-YY-{topic}-solution/`

Notes:
{Brief guidance about using resources for continued learning.}
```

**Key Requirements**:
- Bold H1 title: `# **Resources**`
- Bold H2 subtitle: `## **Further Learning**`
- Single `<br>` tag between H2 and first H3
- Bold H3 sections: `### **Documentation**` and `### **Lab Solutions**`
- Documentation links format: `[Title](URL) - Description`
- Lab paths in backticks with module-scoped numbering
- Notes section with resource usage guidance

**Content Requirements**:
- Documentation section MUST include relevant official docs for module tools/technologies
- Lab Solutions section MUST reference all module lab solution folders
- Prioritize official documentation and authoritative sources
- Keep descriptions concise (under 15 words)

**Link Validation Requirements**:
- ALL external documentation links MUST be verified as accessible before inclusion
- Test links using HTTP requests (curl) or browser to ensure they return 200 OK status
- Links returning 404 (Not Found), 403 (Forbidden), or error codes SHALL NOT be included
- If no valid link available for a topic, omit that topic from the Resources slide
- Never fabricate or assume links work - always verify before adding
- Update or remove links when they become broken

**Example** (Module 3):
```markdown
### **Documentation**
- [GitHub Copilot Documentation](https://docs.github.com/copilot) - Official docs for AI-assisted development

### **Lab Solutions**
- Review `labs/lab-31-ai-debugging-solution/`
- Review `labs/lab-32-ai-refactoring-solution/`
- Review `labs/lab-33-code-verification-solution/`
```

**Prohibited**:
- ❌ Using non-bold headers
- ❌ Inconsistent subtitle text (must be "Further Learning")
- ❌ Omitting `<br>` spacing tag
- ❌ Using non-module-scoped lab numbering
- ❌ Including broken, unverified, or fabricated links

---
*Instructions updated: 2025-10-30*
*Module focus: All modules*
*Constitutional compliance: Required for all content creation*

## Active Technologies
- Markdown for slide content, various programming languages for lab exercises (Python, JavaScript/TypeScript for practical examples) (003-module-3-ai-debug-refactor-verify)
- Git repository for version control, file-based markdown for content (003-module-3-ai-debug-refactor-verify)
- TypeScript (ES2022+) for lab exercises and code examples (004-module-4-testing)
- File-based (markdown slides, lab code, solution examples) - No database required (004-module-4-testing)
