# Implementation Plan: Module 2 - Modern AI Coding Tools

**Branch**: `002-module-2-ai-coding-tools` | **Date**: October 15, 2025 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/002-module-2-ai-coding-tools/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Comprehensive 1.5-day training module covering modern AI coding tools landscape, hands-on GitHub Copilot mastery (CLI and VS Code extension), AI model comparison, and agent instruction file creation. Delivery uses mixed format with presentations, live demos, and guided practice sessions. Three structured labs: lab-21 (Copilot CLI), lab-22 (Copilot VS Code), lab-23 (Agent instruction files). Targets beginner-intermediate developers with fallback to Google Gemini for access issues.

## Technical Context

**Content Platform**: SFEIR School Theme with Vite + Markdown slides  
**Primary Dependencies**: Nx 21.4.1, sfeir-school-theme@latest, TypeScript 5.8+  
**Storage**: File-based content in `docs/markdown/` and `labs/` directories  
**Testing**: Manual validation via dev server at localhost:4200, learner assessment rubrics  
**Target Platform**: Web presentation system with cross-platform lab exercises  
**Project Type**: Educational content - slides + labs structure  
**Performance Goals**: Slide load time <2 seconds, lab completion 20-45 minutes per lab  
**Constraints**: 1.5 day duration, beginner-intermediate skill level, mixed delivery format  
**Scale/Scope**: Module 2 (20-29 numbering), 3 labs, GitHub Copilot focus with Gemini fallback

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Initial Check (Pre-Research)
✅ **Educational Excellence**: 1.5-day comprehensive training targets beginner-intermediate developers with practical focus  
✅ **Content Organization Standards**: Will use SFEIR School Theme in `docs/markdown/20_module_2_ai_tools/`  
✅ **Lab Structure Requirements**: Three labs (lab-21, lab-22, lab-23) with corresponding solution folders  
✅ **Asset Management Protocol**: SVG diagrams preferred, stored in `docs/assets/images/module-2/`  
✅ **Sequential Numbering**: Module-scoped lab numbering (lab-21, lab-22, lab-23) maintains consistency  
✅ **Research Information Currency**: Will actively fetch current AI tool information during research phase

### Post-Design Check (Phase 1 Complete)
✅ **Educational Excellence**: Data model supports progressive skill building with measurable outcomes  
✅ **Content Organization Standards**: Slide structure (20-25) follows SFEIR Theme requirements  
✅ **Lab Structure Requirements**: Lab content contract ensures alignment with slides and assessment  
✅ **Asset Management Protocol**: Visual assets planned in SVG format with module-specific organization  
✅ **Quality Assurance Standards**: 5-point rubric for agent instruction files ensures consistent evaluation  
✅ **Content Accuracy and Currency**: Research phase validates all AI tool information as of October 2025  
✅ **Sequential Numbering**: Module-scoped numbering consistently applied across all artifacts  
✅ **Research Information Currency**: All tool information actively verified against current sources

**FINAL GATE STATUS: PASS** - All constitutional requirements satisfied through design and contracts

## Project Structure

### Documentation (this feature)

```
specs/[###-feature]/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root - Educational Content Structure)

```
docs/
├── markdown/
│   └── 20_module_2_ai_tools/
│       ├── 20_module2_intro.md
│       ├── 21_tools_landscape.md
│       ├── 22_copilot_deep_dive.md
│       ├── 23_model_comparison.md
│       ├── 24_agent_instruction_files.md
│       └── 25_assessment_and_recap.md
├── assets/
│   └── images/
│       └── module-2/
│           ├── tools-landscape-diagram.svg
│           ├── copilot-modes-workflow.svg
│           ├── model-comparison-matrix.svg
│           └── agent-files-structure.svg
└── scripts/
    └── slides.js  # Updated to register Module 2 slides

labs/
├── lab-21-copilot-cli/
│   ├── README.md
│   └── exercises/
├── lab-21-copilot-cli-solution/
│   ├── README.md
│   └── resources/
├── lab-22-copilot-vscode/
│   ├── README.md
│   └── exercises/
├── lab-22-copilot-vscode-solution/
│   ├── README.md
│   └── resources/
├── lab-23-agent-instruction-files/
│   ├── README.md
│   └── exercises/
└── lab-23-agent-instruction-files-solution/
    ├── README.md
    └── resources/
```

**Structure Decision**: Educational content structure using SFEIR School Theme with Module 2 numbering (20-29). Slides in dedicated module directory, labs following module-scoped numbering pattern (lab-2X), assets organized by module with SVG preference for diagrams.

## Complexity Tracking

*Fill ONLY if Constitution Check has violations that must be justified*

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
