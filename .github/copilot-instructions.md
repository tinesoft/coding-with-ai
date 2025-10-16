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

<!-- .slide: class="exercice" -->  
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

**Key Syntax Rules:**
- Use `##--##` to separate slides
- Include `<!-- .slide -->` directives for special styling
- Use SFEIR theme classes: `first-slide`, `transition`, `exercice`, `speaker-slide`
- Reference images with relative paths: `./assets/images/filename.png`

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

## Success Criteria
- [ ] Checkboxes for completion validation
- [ ] Measurable outcomes
```

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

---
*Instructions updated: 2025-09-18*
*Module focus: Module 1 - Introduction to AI and Prompt Engineering*
*Constitutional compliance: Required for all content creation*
