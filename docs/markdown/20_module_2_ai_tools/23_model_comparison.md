<!-- .slide: class="transition" -->
# Module 2: AI Model Comparison
## Choosing the Right Model for Your Task

##--##

<!-- .slide: -->
# AI Models Overview

## Major Coding Models (October 2025)

<br>

### **OpenAI GPT-5 / GPT-4.5**
- **Strengths**: Complex reasoning, broad knowledge, code generation
- **Best For**: General-purpose coding, architecture decisions, complex algorithms
- **Context**: 128k tokens (GPT-4.5), extended context in GPT-5

### **Anthropic Claude 4.x (Sonnet, Opus)**
- **Strengths**: Long context (200k tokens), nuanced understanding, safety
- **Best For**: Large codebase analysis, refactoring, documentation
- **Context**: 200k tokens, excellent instruction following

### **Google Gemini 2.5 Pro**
- **Strengths**: Multimodal (code + images), 2M token context, fast
- **Best For**: API integration, vision-related tasks, massive context needs
- **Context**: 2M tokens, multimodal capabilities
##--##

<!-- .slide: -->
# AI Models Overview

## Major Coding Models (October 2025)

<br>

### **DeepSeek Coder V2.5**
- **Strengths**: Code-specialized, fast inference, cost-effective
- **Best For**: Code completion, code review, performance-critical tasks
- **Context**: 128k tokens, optimized for coding

Notes:
Model landscape as of October 2025. See research documentation in `specs/002-module-2-ai-coding-tools/research-update-october-2025.md` for current versions and capabilities.

##--##

<!-- .slide: -->
# Model Selection Matrix

## Matching Models to Tasks

<br>

| **Task Type** | **Recommended Model** | **Why** |
|---------------|----------------------|---------|
| Complex Architecture | GPT-5 / Claude Opus | Deep reasoning capabilities |
| Large Codebase Analysis | Claude 4.x Sonnet | 200k context window |
| API Integration | Gemini 2.5 Pro | Multimodal + API expertise |
| Code Completion | DeepSeek Coder | Speed + code specialization |
| Documentation | Claude 4.x | Nuanced understanding |
| Visual/UI Tasks | Gemini 2.5 Pro | Multimodal capabilities |
| Cost-Sensitive | DeepSeek Coder | Performance per dollar |

Notes:
Choose models based on task requirements, not just popularity. Different models excel at different coding scenarios.

##--##

<!-- .slide: -->
# Model Capabilities Comparison

## Technical Specifications

<br>

### **Context Windows**
- **Gemini 2.5 Pro**: 2M tokens (massive context)
- **Claude 4.x**: 200k tokens (large context)
- **GPT-5 / GPT-4.5**: 128k tokens (standard)
- **DeepSeek Coder**: 128k tokens (optimized)

### **Specializations**
- **GPT-5**: General reasoning, broad knowledge
- **Claude 4.x**: Long context, safety, instruction following
- **Gemini 2.5**: Multimodal, API integration, speed
- **DeepSeek**: Code-specific, inference speed, cost efficiency
##--##

<!-- .slide: -->
# Model Capabilities Comparison

## Technical Specifications

<br>

### **Availability in Tools**
- Most tools support GPT-4/GPT-5 and Claude models
- Gemini integration growing (GitHub Copilot, Cursor, Continue)
- DeepSeek often available in open-source tools

Notes:
Context window size directly impacts ability to work with large codebases. Specializations matter for specific task types.

##--##

<!-- .slide: -->
# Model Performance Trade-offs

## Speed vs. Quality vs. Cost

<br>

### **High Reasoning Tasks** (Architecture, Algorithms)
- ✅ **Best**: GPT-5, Claude Opus (slower, more expensive, higher quality)
- ⚠️ **Acceptable**: GPT-4.5, Claude Sonnet (balanced)
- ❌ **Avoid**: Fast models may oversimplify

### **High Volume Tasks** (Completion, Review)
- ✅ **Best**: DeepSeek Coder, GPT-4.5 (fast, cost-effective)
- ⚠️ **Acceptable**: Claude Sonnet (balanced)
- ❌ **Avoid**: Expensive slow models for routine tasks

### **Large Context Tasks** (Refactoring, Analysis)
- ✅ **Best**: Claude 4.x, Gemini 2.5 Pro (large context windows)
- ⚠️ **Acceptable**: GPT-5 with chunking strategies
- ❌ **Avoid**: Models with insufficient context

Notes:
Match model characteristics to task requirements and constraints. Don't use expensive models for simple tasks or fast models for complex reasoning.

##--##

<!-- .slide: class="exercice" --> 
# Exercice 3: Model Comparison
## Lab 23

<br>

### 👉🏾 Follow **instructions** in

### `labs/lab-23-model-comparison/README.md`

Notes:
- Follow the instructions in the lab README.md for detailed steps.

##--##

<!-- .slide: class="exercice" --> 
# Exercice 3: Model Comparison
## Lab 23

<br>

### 💡 Read **solution** at

### `labs/lab-23-model-comparison-solution/README.md`

Notes:
- Read the lab README.md for example of solutions.

##--##

<!-- .slide: -->
# Model Selection Best Practices

## Strategic AI Model Usage

<br>

### **✅ Do's**
- **Match model to task complexity** - use appropriate reasoning power
- **Consider context needs** - choose models with sufficient context windows
- **Test multiple models** - different models excel at different tasks
- **Monitor costs** - expensive models for critical tasks only
- **Stay updated** - model capabilities evolve rapidly

### **❌ Don'ts**
- **Don't use one model for everything** - leverage specialized strengths
- **Don't ignore context limits** - large codebases need large context
- **Don't chase benchmarks blindly** - real-world performance varies
- **Don't ignore speed** - developer experience matters
- **Don't lock into one vendor** - maintain flexibility

Notes:
Strategic model selection improves both code quality and development velocity while managing costs effectively.

##--##

<!-- .slide: -->
# Key Takeaways

## Model Comparison Mastery

<br>

### **✅ Model Characteristics**
- GPT-5: General reasoning and broad knowledge
- Claude 4.x: Long context and nuanced understanding
- Gemini 2.5: Multimodal and massive context
- DeepSeek: Code-specialized and cost-effective

### **✅ Selection Criteria**
- Task complexity determines reasoning requirements
- Codebase size drives context window needs
- Performance criticality affects speed vs. quality trade-offs
- Budget constraints guide cost optimization

Notes:
You now understand how to strategically select AI models for different coding scenarios and can make informed decisions about model usage.
