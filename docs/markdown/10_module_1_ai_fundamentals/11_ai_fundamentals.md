<!-- .slide: class="transition" -->
# Module 1: AI Fundamentals
## Core Concepts and Technologies

Notes:
Let's start our journey by understanding the fundamental building blocks of modern AI systems. These concepts will provide the foundation for everything we do with AI in software development.

*Note: All AI model capabilities and tool references are current as of October 16, 2025.*

##--##

<!-- .slide -->
# **What is Artificial Intelligence?**

## **AI in the Context of Software Development**
- **Machine Learning**: Systems that learn patterns from data
- **Natural Language Processing**: Understanding and generating human language
- **Large Language Models**: AI systems trained on vast amounts of text
- **Generative AI**: Creating new content, code, and solutions

## **AI vs. Traditional Programming**
```
Traditional: Rules + Data → Results
AI: Data + Results → Rules (learned patterns)
```

Notes:
AI represents a fundamental shift in how we approach problem-solving. Instead of explicitly programming every rule, we train systems to recognize patterns and generate solutions.

##--##

<!-- .slide -->
# **Large Language Models (LLMs)**

## **What are LLMs?**
- **Neural Networks**: Trained on massive text datasets
- **Pattern Recognition**: Understanding language, code, and context
- **Text Generation**: Producing human-like responses
- **Multimodal Capabilities**: Some models handle text, code, and images

## **Popular LLMs for Developers**
- **GPT-5 / GPT-4.5** (OpenAI) - State-of-the-art reasoning and multimodal capabilities
- **Claude 4.x** (Anthropic) - Safety-focused family with strong long-form reasoning
- **Gemini 2.5** (Google) - Large-context and multimodal family optimized for code-assist
- **GitHub Copilot** (Microsoft/OpenAI) - Integrated code assistant leveraging multiple model backends

Notes:
LLMs are the engines behind most AI coding tools. Understanding their capabilities and limitations helps you use them more effectively.

##--##

<!-- .slide -->
# **Key LLM Concepts**

## **Tokens and Context**
```
Input: "Write a Python function to sort a list"
Tokens: ["Write", "a", "Python", "function", "to", "sort", "a", "list"]
Context Window: 4K, 8K, 32K, 128K+ tokens
```

## **Important Limitations**
- **Training Cutoff**: Knowledge limited to training data
- **Context Window**: Maximum conversation length
- **Hallucination**: May generate plausible but incorrect information
- **Determinism**: Outputs can vary between runs

Notes:
Understanding these technical constraints helps you work within LLM capabilities and recognize when outputs might need verification. The next slide illustrates how LLMs process input tokens through neural networks to generate responses.

##--##

<img src="./assets/images/module-1/llm-architecture.svg" alt="LLM Architecture" style="width:100%; height:auto; display:block;">

##--##

<!-- .slide -->
# **Embeddings and Vector Representations**

## **What are Embeddings?**
- **Numerical Representations**: Converting text to numbers
- **Semantic Similarity**: Similar concepts have similar vectors
- **Multi-dimensional**: Typically 512, 1024, or 1536 dimensions
- **Foundation for Search**: Enabling semantic understanding

## **Practical Applications**
```javascript
// Code similarity example
const function1 = "def sort_list(items): return sorted(items)"
const function2 = "function sortArray(arr) { return arr.sort(); }"
// Embeddings would show these are semantically similar
```

Notes:
Embeddings are crucial for many AI applications. They allow systems to understand that "sort a list" and "arrange items in order" are conceptually similar. The next slide visualizes how similar concepts cluster together in vector space.

##--##

<img src="./assets/images/module-1/embeddings-visualization.svg" alt="Embeddings Visualization" style="width:100%; height:auto; display:block;">

##--##

<!-- .slide -->
# **Retrieval Augmented Generation (RAG)**

## **The RAG Approach**
```
1. User Query → 2. Retrieve Relevant Info → 3. Generate Response
   "How to debug React?"     Search documentation     Combined answer
```

## **Why RAG Matters for Developers**
- **Current Information**: Access to up-to-date documentation
- **Specialized Knowledge**: Domain-specific expertise
- **Source Attribution**: Traceable information sources
- **Reduced Hallucination**: Grounded in real data

## **RAG in Action**
- **GitHub Copilot**: Uses repository context and chat history
- **Documentation Bots**: Query specific docs with current information
- **Code Search**: Find relevant examples from updated codebases
- **Knowledge Bases**: Company-specific information with real-time updates

Notes:
RAG solves the "knowledge cutoff" problem by combining LLM capabilities with real-time information retrieval. This is how many AI coding tools stay current. The next slide shows the complete RAG process from query to response.

##--##

<img src="./assets/images/module-1/rag-workflow.svg" alt="RAG Workflow" style="width:100%; height:auto; display:block;">

##--##

<!-- .slide -->
# **AI Model Types and Capabilities**

## **Text Generation Models**
- **Use Cases**: Documentation, explanations, brainstorming
- **Examples**: GPT-4, Claude, Gemini
- **Strengths**: Natural language, reasoning, analysis

## **Code-Specialized Models**
- **Use Cases**: Code completion, generation, review
- **Examples**: GitHub Copilot, CodeT5, StarCoder
- **Strengths**: Programming patterns, syntax, best practices

## **Multimodal Models**
- **Use Cases**: Image analysis, diagram creation, UI generation
- **Examples**: GPT-4V, Gemini Pro Vision
- **Strengths**: Visual understanding, cross-modal reasoning

Notes:
Different AI models excel at different tasks. Understanding these specializations helps you choose the right tool for each job.

##--##

<!-- .slide -->
# **Understanding AI Behavior**

## **How AI "Thinks"**
- **Pattern Matching**: Recognizing similar situations from training
- **Probabilistic Output**: Choosing most likely next words/tokens
- **Context Dependency**: Responses influenced by conversation history
- **No True Understanding**: Sophisticated pattern recognition, not consciousness

## **Implications for Developers**
- **Consistency**: Similar inputs may produce different outputs
- **Context Matters**: Previous conversation affects responses
- **Verification Needed**: Always validate AI-generated code
- **Iterative Process**: Refine inputs to improve outputs

Notes:
This understanding helps set appropriate expectations and develop effective strategies for working with AI systems.

##--##

<!-- .slide -->
# **AI Safety and Limitations**

## **Common Issues to Watch For**
- **Hallucination**: Confident but incorrect information
- **Bias**: Reflecting training data biases
- **Security Risks**: Potential code vulnerabilities
- **Over-reliance**: Reduced learning and critical thinking

## **Best Practices**
- **Verify Outputs**: Test and review AI-generated code
- **Understand Context**: Know what the AI knows and doesn't know
- **Maintain Skepticism**: Question responses that seem unusual
- **Keep Learning**: Use AI to enhance, not replace, your skills

Notes:
Responsible AI use requires understanding both capabilities and limitations. The goal is to enhance your development process, not replace your judgment.

##--##

<!-- .slide -->
# **The AI Development Ecosystem**

## **Categories of AI Tools**
- **Code Assistants**: GitHub Copilot, Cursor, Codeium
- **Chat Interfaces**: ChatGPT, Claude, Gemini
- **Specialized Tools**: Devin (autonomous), Replit AI
- **Integrated Platforms**: AI-powered IDEs and workflows

## **Choosing the Right Tool**
- **Task Complexity**: Simple completion vs. complex problem-solving
- **Context Needs**: File-level vs. repository-wide understanding
- **Integration Requirements**: IDE plugins vs. standalone tools
- **Team Collaboration**: Shared vs. individual workflows

Notes:
With these fundamental concepts of RAG systems, you have a comprehensive understanding of how modern AI applications work. These technologies form the foundation for the AI tools and techniques you'll use throughout your development career.
##--##

<!-- .slide: class="exercice" --> 
# Exercice 2: AI Fundamentals in Practice
## Lab 12

<br>

### 👉🏾 Follow **instructions** in

### `labs/lab-12-ai-fundamentals/README.md`

Notes:
- Lab 12 (Module 1, Lab 2) contains 5 progressive exercises (1-5) for AI fundamentals exploration.
- Follow the instructions in the lab README.md for detailed steps.

##--##

<!-- .slide: class="exercice" --> 
# Exercice 2: AI Fundamentals in Practice
## Lab 12

<br>

### 💡 Read **solution** at

### `labs/lab-12-ai-fundamentals-solution/README.md`

Notes:
- Contains complete solutions and explanations for all 5 exercises.
- Read the lab README.md for example of solutions.
