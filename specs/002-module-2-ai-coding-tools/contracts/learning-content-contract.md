# Learning Content Contract: Module 2 - Modern AI Coding Tools

**Version**: 1.0  
**Date**: October 15, 2025  
**Type**: Educational Content API Contract

## Content Delivery Endpoints

### GET /module-2/tools-landscape
**Purpose**: Retrieve comprehensive AI coding tools categorization

**Request Parameters**:
- `category`: optional enum (CLI_AGENT, STANDALONE_IDE, IDE_EXTENSION, ONLINE_TOOL)
- `includeDeprecated`: optional boolean (default: false)

**Response Schema**:
```json
{
  "tools": [
    {
      "toolName": "string",
      "category": "enum",
      "capabilities": ["string"],
      "platformCompatibility": ["string"],
      "accessModel": "enum",
      "primaryUseCase": "string",
      "isActive": "boolean"
    }
  ],
  "categories": {
    "CLI_AGENT": "number",
    "STANDALONE_IDE": "number",
    "IDE_EXTENSION": "number",
    "ONLINE_TOOL": "number"
  },
  "lastUpdated": "date"
}
```

**Success Criteria**:
- Returns 15-20 current AI coding tools
- All active tools verified within 30 days
- Categories balanced with 3-6 tools each

### GET /module-2/lab/{labId}
**Purpose**: Retrieve lab exercise content and requirements

**Path Parameters**:
- `labId`: string (lab-21, lab-22, lab-23)

**Response Schema**:
```json
{
  "exerciseId": "string",
  "title": "string",
  "objectives": ["string"],
  "prerequisites": ["string"],
  "estimatedDuration": "integer",
  "difficultyLevel": "enum",
  "instructions": "string",
  "successCriteria": ["string"],
  "targetTools": [
    {
      "toolName": "string",
      "requiredFeatures": ["string"],
      "fallbackOptions": ["string"]
    }
  ],
  "resources": {
    "hasExerciseFiles": "boolean",
    "hasSolutionFiles": "boolean",
    "resourcesDirectory": "string"
  }
}
```

**Success Criteria**:
- Lab content aligns with slide presentations
- Instructions are actionable and sequential
- Success criteria are measurable

### POST /module-2/assessment/evaluate
**Purpose**: Evaluate learner performance against success criteria

**Request Schema**:
```json
{
  "learnerId": "string",
  "exerciseId": "string",
  "submissions": [
    {
      "criteriaId": "string",
      "evidence": "string",
      "completionStatus": "boolean"
    }
  ],
  "rubricEvaluations": [
    {
      "criteriaId": "string",
      "score": "integer",
      "feedback": "string"
    }
  ]
}
```

**Response Schema**:
```json
{
  "evaluationId": "string",
  "overallScore": "number",
  "passStatus": "boolean",
  "criteriaResults": [
    {
      "criteriaId": "string",
      "score": "integer",
      "threshold": "string",
      "passed": "boolean"
    }
  ],
  "feedback": "string",
  "nextSteps": ["string"]
}
```

**Success Criteria**:
- 80% of evaluations meet success thresholds
- Rubric scores consistently applied
- Feedback actionable and specific

### GET /module-2/agent-instruction-templates
**Purpose**: Retrieve templates for creating agent instruction files

**Request Parameters**:
- `agentType`: enum (COPILOT, CLAUDE, GEMINI, UNIFIED)
- `projectType`: optional string (monorepo, microservices, etc.)

**Response Schema**:
```json
{
  "templates": [
    {
      "fileName": "string",
      "targetAgent": "enum",
      "templateContent": "string",
      "requiredSections": ["string"],
      "exampleContent": "string",
      "qualityRubric": {
        "completeness": "string",
        "specificity": "string", 
        "actionability": "string",
        "technicalAccuracy": "string",
        "organization": "string"
      }
    }
  ],
  "bestPractices": ["string"],
  "commonMistakes": ["string"]
}
```

**Success Criteria**:
- Templates cover all major agent platforms
- Examples demonstrate project-specific context
- Quality rubric enables consistent evaluation

## Content Quality Contracts

### Slide Content Contract
**Requirements**:
- All slides follow SFEIR School Theme syntax
- Module 2 slides numbered 20-25 in `docs/markdown/20_module_2_ai_tools/`
- Visual assets in SVG format stored in `docs/assets/images/module-2/`
- Exercise slides point to corresponding lab README files

**Validation**:
- Slides load successfully in development server
- Navigation flows correctly between slides
- All image references resolve properly
- Exercise slide format matches constitutional requirements

### Lab Content Contract
**Requirements**:
- Lab directories follow module-scoped numbering: lab-21, lab-22, lab-23
- Each lab has corresponding solution directory with README.md
- Instructions written in GitHub-flavored markdown
- Success criteria measurable and specific

**Validation**:
- All lab exercises completable within estimated duration
- Solution files correspond exactly to exercise requirements
- Prerequisites clearly stated and achievable
- Objectives align with module learning goals

### Assessment Contract
**Requirements**:
- Success criteria threshold ≥80% for core skills
- Rubric evaluations use 5-point scale consistently
- Quantitative measures have specific numeric thresholds
- Qualitative measures use structured rubrics

**Validation**:
- Assessment methods match clarified approach (trainer rubric evaluation)
- Success thresholds realistic and achievable
- Evaluation criteria directly tied to learning objectives
- Feedback mechanisms support learner improvement

## Integration Points

### SFEIR Theme Integration
- Slides registered in `docs/scripts/slides.js`
- Theme assets copied during build process
- Hot-reload functionality for content development
- Consistent branding and navigation

### Lab Exercise Integration
- Exercise slides reference lab directories via relative paths
- Solution slides point to solution README files
- Lab content reinforces slide concepts
- Progressive skill building across lab sequence

### Assessment Integration
- Success criteria embedded in lab instructions
- Rubric evaluations integrated into trainer workflow
- Quantitative measures trackable during exercises
- Feedback loops support iterative improvement

## Error Handling

### Content Delivery Errors
- **404 Not Found**: Missing slide or lab content
- **400 Bad Request**: Invalid lab ID or assessment criteria
- **500 Internal Error**: Build system or theme integration failure

### Validation Errors
- **Content Mismatch**: Lab content doesn't align with slides
- **Broken References**: Missing images, files, or links
- **Assessment Gaps**: Success criteria not measurable or missing

### Recovery Strategies
- Fallback content for missing assets
- Alternative tools for access failures (Google Gemini)
- Simplified exercises for time constraints
- Manual evaluation for automated assessment failures