# Data Model: Module 2 - Modern AI Coding Tools

**Date**: October 15, 2025  
**Feature**: Module 2 - Modern AI Coding Tools  
**Status**: Phase 1 Design

## Core Entities

### AI Coding Tool
**Purpose**: Represents different categories of AI-powered development tools

**Attributes**:
- `toolName`: string (primary identifier)
- `category`: enum (CLI_AGENT, STANDALONE_IDE, IDE_EXTENSION, ONLINE_TOOL)
- `capabilities`: array of strings (code_generation, debugging, refactoring, etc.)
- `platformCompatibility`: array of strings (windows, macos, linux, web)
- `accessModel`: enum (FREE, FREEMIUM, PAID, ENTERPRISE)
- `installationMethod`: string (npm, extension_store, download, web_access)
- `primaryUseCase`: string (description of optimal scenarios)
- `modelBackend`: string (GPT-4, Claude, Gemini, etc.)
- `lastUpdated`: date
- `isActive`: boolean (currently maintained/supported)

**Validation Rules**:
- toolName must be unique within category
- category must be one of defined enum values
- isActive tools must have recent lastUpdated (within 6 months)

**State Transitions**:
- New → Active (upon verification and inclusion)
- Active → Deprecated (when tool discontinued)
- Deprecated → Archived (after grace period)

### Learning Exercise
**Purpose**: Structured hands-on activities for skill development

**Attributes**:
- `exerciseId`: string (lab-2X format)
- `moduleNumber`: integer (2 for this module)
- `sequenceNumber`: integer (1, 2, 3 for lab-21, lab-22, lab-23)
- `title`: string
- `objectives`: array of strings
- `prerequisites`: array of strings
- `estimatedDuration`: integer (minutes)
- `difficultyLevel`: enum (BEGINNER, INTERMEDIATE, ADVANCED)
- `targetTools`: array of AI Coding Tool references
- `successCriteria`: array of strings
- `hasResources`: boolean (indicates if resources/ directory exists)

**Validation Rules**:
- exerciseId must follow pattern lab-[module][sequence]-{topic}
- estimatedDuration must be 15-60 minutes
- objectives must align with module learning goals

**Relationships**:
- One-to-One: Exercise → Solution (lab-XX vs lab-XX-solution)
- Many-to-Many: Exercise → AI Coding Tool (exercises can use multiple tools)

### Tool Configuration
**Purpose**: Setup instructions and configuration settings

**Attributes**:
- `configId`: string (unique identifier)
- `toolName`: string (references AI Coding Tool)
- `platform`: string (windows, macos, linux)
- `installationSteps`: array of strings
- `configurationOptions`: object (key-value settings)
- `troubleshootingTips`: array of strings
- `fallbackOptions`: array of strings
- `verificationMethod`: string (how to confirm successful setup)

**Validation Rules**:
- Must reference valid AI Coding Tool
- installationSteps must be sequential and actionable
- verificationMethod must be testable

### Agent Instruction File
**Purpose**: Project-specific guidance documents for AI agents

**Attributes**:
- `fileName`: string (.github/copilot-instructions.md, CLAUDE.md, etc.)
- `targetAgent`: enum (COPILOT, CLAUDE, GEMINI, UNIFIED)
- `projectContext`: object (architecture, patterns, conventions)
- `buildSystemInfo`: object (commands, dependencies, workflows)
- `codebasePatterns`: array of strings (important patterns to document)
- `restrictionsAndGuidelines`: array of strings
- `exampleInteractions`: array of strings
- `lastUpdated`: date
- `qualityScore`: integer (1-5 based on rubric)

**Validation Rules**:
- fileName must match target agent conventions
- projectContext must include architecture overview
- qualityScore based on 5-point rubric criteria

**State Transitions**:
- Draft → Review (initial creation)
- Review → Approved (meets quality rubric)
- Approved → Archived (when project changes significantly)

### Assessment Criteria
**Purpose**: Measurable learning outcomes and validation methods

**Attributes**:
- `criteriaId`: string
- `learningObjective`: string (references module objectives)
- `measurementMethod`: enum (PERFORMANCE_TEST, RUBRIC_EVALUATION, COMPLETION_CHECK)
- `successThreshold`: string (e.g., "80% of learners", "5-point rubric ≥4")
- `validationSteps`: array of strings
- `isQuantitative`: boolean
- `assessmentRubric`: object (for rubric-based evaluations)

**Validation Rules**:
- successThreshold must be measurable
- quantitative criteria must have numeric thresholds
- rubric evaluations must reference structured rubric

## Entity Relationships

### Primary Relationships
- **Module → Learning Exercise**: One-to-Many (Module 2 has 3 exercises)
- **Learning Exercise → AI Coding Tool**: Many-to-Many (exercises use multiple tools)
- **AI Coding Tool → Tool Configuration**: One-to-Many (tool has configs per platform)
- **Learning Exercise → Assessment Criteria**: One-to-Many (exercise has multiple success measures)

### Supporting Relationships  
- **Agent Instruction File → AI Coding Tool**: Many-to-Many (file may cover multiple tools)
- **Tool Configuration → Assessment Criteria**: Many-to-Many (setup success measured by criteria)

## Data Volume Estimates

- **AI Coding Tools**: ~15-20 tools across all categories
- **Learning Exercises**: 3 exercises (lab-21, lab-22, lab-23)
- **Tool Configurations**: ~30-40 configurations (tools × platforms)
- **Agent Instruction Files**: 4-5 file types (platform-specific + unified)
- **Assessment Criteria**: ~10-12 measurable outcomes

## Usage Patterns

### Content Creation Flow
1. Research AI Coding Tools → validate and catalog current tools
2. Design Learning Exercises → align with tool capabilities and learning objectives
3. Create Tool Configurations → ensure learner setup success
4. Develop Assessment Criteria → measure learning outcomes
5. Generate Agent Instruction Files → demonstrate practical application

### Learner Interaction Flow
1. Review AI Coding Tools landscape → understand categories and options
2. Complete Learning Exercises → hands-on practice with specific tools
3. Apply Tool Configurations → successful setup in learning environment
4. Validate via Assessment Criteria → confirm skill acquisition
5. Create Agent Instruction Files → practical application of learning