# Module 1 Data Model: Introduction to AI and Prompt Engineering

## Content Entities

### Slide Sections
```yaml
SlideSection:
  id: string (e.g., "10_module1_intro")
  title: string
  learning_objectives: string[]
  duration_minutes: number
  slide_type: enum [intro, content, exercise, assessment, transition]
  prerequisites: string[]
  key_concepts: string[]
  
Sections:
  - id: "10_module1_intro"
    title: "Module 1 Introduction"
    learning_objectives:
      - "Understand module goals and structure"
      - "Set expectations for AI learning journey"
    duration_minutes: 10
    slide_type: intro
    prerequisites: []
    key_concepts: ["AI overview", "course structure", "learning objectives"]
    
  - id: "11_ai_fundamentals" 
    title: "AI Fundamentals"
    learning_objectives:
      - "Define LLMs and their capabilities"
      - "Understand embeddings and vector representations"
      - "Explain RAG (Retrieval Augmented Generation)"
    duration_minutes: 25
    slide_type: content
    prerequisites: ["basic programming knowledge"]
    key_concepts: ["LLMs", "embeddings", "RAG", "tokens", "context windows"]
    
  - id: "12_prompt_engineering"
    title: "Prompt Engineering Techniques"
    learning_objectives:
      - "Write clear and specific prompts"
      - "Apply prompt engineering patterns"
      - "Iterate and improve prompt effectiveness"
    duration_minutes: 30
    slide_type: content  
    prerequisites: ["11_ai_fundamentals"]
    key_concepts: ["prompt clarity", "context setting", "few-shot learning", "chain of thought"]
    
  - id: "13_exercise_prompts"
    title: "Hands-on Prompt Exercises"
    learning_objectives:
      - "Practice prompt writing techniques"
      - "Experience iterative prompt improvement"
      - "Apply learned patterns to real scenarios"
    duration_minutes: 20
    slide_type: exercise
    prerequisites: ["12_prompt_engineering"]
    key_concepts: ["practical application", "iteration", "feedback loops"]
    
  - id: "14_tools_and_agents"
    title: "AI Tools and Agents Introduction"  
    learning_objectives:
      - "Survey available AI coding tools"
      - "Understand autonomous agent concepts"
      - "Recognize tool capabilities and limitations"
    duration_minutes: 15
    slide_type: content
    prerequisites: ["13_exercise_prompts"]
    key_concepts: ["GitHub Copilot", "autonomous agents", "tool selection", "safety practices"]
    
  - id: "15_assessment_and_recap"
    title: "Assessment and Module Recap"
    learning_objectives:
      - "Validate understanding of key concepts"
      - "Identify areas for further learning"
      - "Prepare for next module"
    duration_minutes: 10
    slide_type: assessment
    prerequisites: ["14_tools_and_agents"]
    key_concepts: ["knowledge validation", "learning reflection", "progress tracking"]
```

### Lab Exercises
```yaml
LabExercise:
  id: string
  title: string
  difficulty: enum [beginner, intermediate, advanced]
  estimated_time_minutes: number
  learning_outcomes: string[]
  skills_practiced: string[]
  success_criteria: string[]
  
Exercises:
  - id: "lab-11-prompt-basics"
    title: "Introduction to Effective Prompting"
    difficulty: beginner
    estimated_time_minutes: 30
    learning_outcomes:
      - "Write clear, specific prompts"
      - "Understand prompt structure and components"
      - "Practice basic prompt engineering techniques"
    skills_practiced:
      - "Prompt clarity and specificity"
      - "Context setting and formatting"
      - "Iterative prompt improvement"
    success_criteria:
      - "Complete 5 prompt writing exercises"
      - "Demonstrate prompt improvement through iteration"
      - "Achieve satisfactory AI responses for given tasks"
      
  - id: "lab-12-ai-fundamentals"
    title: "Exploring AI Concepts Hands-on"
    difficulty: beginner
    estimated_time_minutes: 45
    learning_outcomes:
      - "Experience AI limitations and capabilities"
      - "Understand context windows and token limits"
      - "Explore different AI model behaviors"
    skills_practiced:
      - "AI model interaction"
      - "Understanding model responses"
      - "Recognizing AI limitations"
    success_criteria:
      - "Successfully interact with AI models"
      - "Identify context window limitations"
      - "Document observations about AI behavior"
```

### Assessment Criteria
```yaml
AssessmentCriterion:
  id: string
  category: enum [knowledge, comprehension, application, analysis]
  description: string
  evaluation_method: string
  success_threshold: string
  
Criteria:
  - id: "ai_concepts_knowledge"
    category: knowledge
    description: "Demonstrate understanding of core AI concepts (LLMs, embeddings, RAG)"
    evaluation_method: "Multiple choice quiz and concept explanation"
    success_threshold: "80% correct answers and clear explanations"
    
  - id: "prompt_writing_application"
    category: application
    description: "Apply prompt engineering techniques to solve practical problems"
    evaluation_method: "Prompt writing exercises with effectiveness measurement"
    success_threshold: "Prompts achieve desired outcomes with minimal iteration"
    
  - id: "tool_awareness_comprehension"
    category: comprehension
    description: "Understand capabilities and limitations of AI coding tools"
    evaluation_method: "Tool comparison exercise and safety consideration discussion"
    success_threshold: "Accurate tool capability assessment and safety awareness"
```

## Content Relationships

### Learning Dependencies
```
10_module1_intro → 11_ai_fundamentals → 12_prompt_engineering → 13_exercise_prompts → 14_tools_and_agents → 15_assessment_and_recap
                                     ↘
                                      lab-11-prompt-basics → lab-12-ai-fundamentals
```

### Skill Progression
```yaml
SkillProgression:
  foundation_skills:
    - "Basic AI awareness"
    - "Understanding of prompts as communication"
  
  developing_skills:
    - "Prompt structure and clarity"
    - "Context setting techniques"
    - "Iterative improvement process"
  
  practiced_skills:
    - "Effective prompt engineering"
    - "Tool selection awareness"
    - "Safety-conscious AI usage"
  
  assessment_skills:
    - "Independent prompt creation"
    - "Critical evaluation of AI responses"
    - "Application to real-world scenarios"
```

## Content Quality Metrics

### Engagement Metrics
```yaml
EngagementMetric:
  slide_completion_rate: target >= 95%
  exercise_participation_rate: target >= 90%
  question_response_rate: target >= 80%
  lab_completion_rate: target >= 85%
```

### Learning Effectiveness
```yaml
LearningMetric:
  concept_retention_rate: target >= 80%
  practical_application_success: target >= 75%
  confidence_improvement: target >= 70%
  progression_readiness: target >= 85%
```

### Content Quality Standards
```yaml
QualityStandard:
  clarity_score: target >= 4.0/5.0
  relevance_score: target >= 4.5/5.0
  practical_utility: target >= 4.0/5.0
  constitutional_compliance: target = 100%
```

---
*Data model defined: 2025-09-18*