# Quickstart Guide: Module 2 - Modern AI Coding Tools

**Target**: Content creators, trainers, and developers implementing Module 2  
**Duration**: 15-30 minutes to get started  
**Updated**: October 15, 2025

## Prerequisites

Before implementing Module 2 content, ensure:

- [ ] **Module 1 Complete**: Learners have completed AI fundamentals and prompt engineering training
- [ ] **Development Environment**: Nx workspace with SFEIR School Theme configured
- [ ] **Tool Access**: GitHub accounts available for Copilot access, Google Gemini as fallback
- [ ] **Content Structure**: Understanding of module-scoped numbering (20-29 for Module 2)

## Quick Setup (5 minutes)

### 1. Create Module Directory Structure
```bash
# From repository root
mkdir -p docs/markdown/20_module_2_ai_tools
mkdir -p docs/assets/images/module-2
mkdir -p labs/lab-21-copilot-cli
mkdir -p labs/lab-21-copilot-cli-solution
mkdir -p labs/lab-22-copilot-vscode
mkdir -p labs/lab-22-copilot-vscode-solution
mkdir -p labs/lab-23-agent-instruction-files
mkdir -p labs/lab-23-agent-instruction-files-solution
```

### 2. Register Slides in Configuration
Update `docs/scripts/slides.js`:
```javascript
function schoolSlides() {
  return [
    "00_intro.md",
    "01_speaker.md", 
    "02_agenda.md",
    // Module 1 slides...
    "10_module_1_ai_fundamentals/10_module1_intro.md",
    // ... existing Module 1 slides
    
    // Module 2: Modern AI Coding Tools
    "20_module_2_ai_tools/20_module2_intro.md",
    "20_module_2_ai_tools/21_tools_landscape.md",
    "20_module_2_ai_tools/22_copilot_deep_dive.md",
    "20_module_2_ai_tools/23_model_comparison.md",
    "20_module_2_ai_tools/24_agent_instruction_files.md",
    "20_module_2_ai_tools/25_assessment_and_recap.md",
    // add more slides as needed
  ];
}
```

### 3. Verify Development Environment
```bash
# Start development server
npm run start

# Visit http://localhost:4200 to confirm setup
# Verify slide navigation works correctly
```

## Content Creation Workflow (10 minutes)

### Phase 1: Slide Creation
**Priority Order** (based on user story priorities):

1. **20_module2_intro.md** - Module overview and learning objectives
2. **21_tools_landscape.md** - AI coding tools categorization (P1 user story)
3. **22_copilot_deep_dive.md** - GitHub Copilot hands-on content (P2 user story)
4. **24_agent_instruction_files.md** - Agent instruction files (P3 user story)
5. **23_model_comparison.md** - AI model comparison (P3 user story)
6. **25_assessment_and_recap.md** - Module summary and assessment

### Phase 2: Lab Development
**Sequential Implementation**:

1. **lab-21-copilot-cli**: GitHub Copilot CLI installation and main commands
   - Focus: CLI installation, basic commands, workflow integration
   - Duration: 30-45 minutes
   - Success criteria: Successful CLI usage and command execution

2. **lab-22-copilot-vscode**: GitHub Copilot VS Code extension exploration
   - Focus: Extension installation, three modes (Ask, Edit, Agent), custom agents
   - Duration: 30-45 minutes  
   - Success criteria: Proficiency with all three Copilot modes

3. **lab-23-agent-instruction-files**: Agent instruction file creation
   - Focus: Creating project-specific instruction files for CLI and VS Code
   - Duration: 30-45 minutes
   - Success criteria: Quality instruction files meeting rubric standards

### Phase 3: Asset Creation
**Visual Assets** (SVG preferred):
- `tools-landscape-diagram.svg` - AI tools categorization overview
- `copilot-modes-workflow.svg` - Three modes workflow illustration
- `model-comparison-matrix.svg` - AI model capabilities comparison
- `agent-files-structure.svg` - Instruction file architecture

## Key Implementation Guidelines

### Content Standards
- **Mixed Delivery Format**: 40% presentations, 30% live demos, 30% guided practice
- **Tool Focus**: GitHub Copilot primary, Google Gemini fallback
- **Assessment**: Trainer rubric evaluation for agent instruction files
- **Duration**: 1.5 days total, flexible pacing within sections

### SFEIR Theme Requirements
```markdown
<!-- Module intro slide -->
<!-- .slide: class="transition" -->
# Module 2: Modern AI Coding Tools
## Building Your AI Development Toolkit

<!-- Regular content slide -->
<!-- .slide: -->
# **AI Tools Landscape**

## **Four Categories of AI Coding Tools**
<br>

### **CLI-Based Agents**
Command-line tools for terminal-based AI assistance

<!-- Exercise slide -->
<!-- .slide: class="exercice" --> 
# Exercice 1: GitHub Copilot CLI
## Lab 21

<br>

### 👉🏾 Follow **instructions** in

### `labs/lab-21-copilot-cli/README.md`
```

### Lab Structure Requirements
Each lab must include:
- **README.md**: Main instructions with objectives, prerequisites, steps
- **exercises/**: Practice files and starter code (if needed)
- **Corresponding solution folder**: Complete solutions and explanations

## Quick Validation Checklist

### Slides
- [ ] All Module 2 slides numbered 20-25
- [ ] Slides registered in `slides.js`
- [ ] Visual assets in SVG format
- [ ] Exercise slides follow constitutional format
- [ ] Navigation flows correctly in dev server

### Labs
- [ ] Module-scoped numbering: lab-21, lab-22, lab-23
- [ ] Each lab has solution counterpart
- [ ] Instructions in GitHub-flavored markdown
- [ ] Success criteria measurable and specific
- [ ] Estimated durations realistic (30-45 minutes)

### Integration
- [ ] Content aligns with clarified requirements
- [ ] Assessment methods match trainer rubric approach
- [ ] Fallback strategies documented for tool access issues
- [ ] Progressive skill building across lab sequence

## Common Issues & Solutions

### **Issue**: Slides not appearing in navigation
**Solution**: Verify paths in `slides.js` and restart dev server

### **Issue**: Images not loading
**Solution**: Check relative paths from `docs/` and ensure SVG format

### **Issue**: Lab exercises too complex
**Solution**: Break into smaller steps, add checkpoints, provide scaffolding

### **Issue**: Tool access failures during training
**Solution**: Implement Google Gemini fallback, prepare offline demonstrations

## Next Steps

After quickstart setup:

1. **Research Phase**: Validate current AI tool information per Constitution IX
2. **Content Creation**: Start with highest priority slides (tools landscape)
3. **Lab Development**: Begin with lab-21 (CLI foundation)
4. **Testing**: Validate content with development server
5. **Integration**: Ensure alignment with Module 1 completion and Module 3 prerequisites

## Support Resources

- **SFEIR Theme Documentation**: Reference for slide syntax and styling
- **Constitution**: `/workspaces/sfeir-school-coding-with-ai/.specify/memory/constitution.md`
- **Module 1 Example**: `/workspaces/sfeir-school-coding-with-ai/docs/markdown/10_module_1_ai_fundamentals/`
- **Development Server**: `npm run start` → `http://localhost:4200`

---
**Ready to start?** Begin with creating the module intro slide and tools landscape overview to establish foundation content.