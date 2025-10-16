<!-- .slide: class="transition" -->
# Module 2: AI Coding Tools Landscape
## Understanding the Modern Developer Toolkit

##--##

<!-- .slide: -->
# The Evolution of Development Tools

## From Text Editors to AI Assistants

<br>

### **Traditional Workflow**
```
IDE + Extensions + Documentation + Stack Overflow
```

### **AI-Enhanced Workflow**
```
IDE + AI Agent + Context-Aware Assistance + Real-time Code Generation
```

<br>

> **Key Insight**: AI coding tools don't replace your skills—they amplify them

Notes:
The landscape of development tools has rapidly evolved with AI integration, creating new categories of tools that enhance developer productivity.

##--##

<!-- .slide: -->
# AI Coding Tools Categories

## Four Distinct Approaches

<br>

### **1. CLI-Based Agents** 🖥️
Terminal-based AI assistants for command-line workflows

### **2. Standalone IDEs** 🚀
Complete development environments with built-in AI capabilities

### **3. IDE Extensions** 🔌
AI plugins that enhance existing editors like VS Code

### **4. Online Tools** 🌐
Web-based AI coding platforms and services

Notes:
Each category serves different use cases and developer preferences. Understanding these categories helps you choose the right tool for each scenario.

##--##

<!-- .slide: -->
# Category 1: CLI-Based Agents

## Terminal-Native AI Assistants

<br>

### **Key Characteristics**
- Command-line interface integration
- Git workflow optimization  
- Terminal-first user experience
- Scriptable and automatable

### **Best For**
- Developers who live in the terminal
- Git-heavy workflows
- Automation and scripting tasks
- Remote development environments

Notes:
CLI agents excel in environments where terminal efficiency is paramount and integrate seamlessly with existing shell workflows. See the visual overview on the next slide.

##--##

<img src="./assets/images/module-2/cli-agents-overview.svg" alt="CLI Agents Overview" style="width:100%; height:auto; display:block;">

##--##

<!-- .slide: -->
# CLI Tools Spotlight

## Detailed Tool Breakdown

<br>

### **GitHub Copilot CLI** (Industry Standard)
- **Installation**: `npm install -g @github/copilot`
- **Usage**: Interactive mode with `copilot` command or programmatic with `-p` flag
- Natural language conversational interface with repository context
- Integrated file analysis, code generation, and GitHub Actions support

### **Codex** (OpenAI)
- Open-source Rust CLI that reads, edits, and runs code with configurable approval modes
- Default GPT-5 model with optional `gpt-5-codex` and reasoning levels via `/model` or `--model`
- Supports image attachments, non-interactive `codex exec`, and MCP integrations
- Install via `npm install -g @openai/codex` or `brew install codex`; included with ChatGPT plans or API usage

### **Claude Code** (Anthropic)
- Terminal-native agent that plans, edits files, runs commands, and can create commits
- Supports Claude model aliases (`sonnet`, `opus`, `haiku`, `opusplan`, `sonnet[1m]`) with `/model` switching
- Integrates with Model Context Protocol to pull external docs and run automated workflows
- Install via `npm install -g @anthropic-ai/claude-code`; usage billed through Claude Console/Claude.ai plans

### **Gemini CLI** (Google)
- Command-line interface for Google's Gemini models
- Integrates with Google AI Studio and Vertex AI
- Supports multimodal inputs and long context windows
- Access via Google Cloud SDK or standalone CLI tools

### **Warp Terminal** (Enhanced Experience)
- AI-powered terminal with built-in command assistance
- Workflow automation and team collaboration features
- Available on macOS, Linux, and Windows (beta)
- Collaborative terminal sessions

### **Aider** (Open Source Leader)
- **Installation**: `pip install aider-chat`
- Direct repository editing with GPT-4, Claude-3.5-Sonnet support
- Context-aware file selection across 50+ languages
- **Free** and actively maintained open-source

Notes:
Each CLI tool targets different use cases: GitHub Copilot CLI for conversational Git workflows, Codex for open-source GPT-5-driven development, Claude Code for plan-and-execute terminal automation, Gemini CLI for Google's multimodal AI, Warp for enhanced terminal experience, and Aider for direct editing.

##--##

<!-- .slide: -->
# Category 2: Standalone IDEs

## Complete AI-Powered Development Environments

<br>

### **Key Characteristics**
- Built-in AI capabilities from the ground up
- Optimized user interface for AI interaction
- Integrated debugging and testing tools
- Custom AI model configurations

### **Best For**
- Developers starting new projects
- Teams wanting unified AI experience
- Projects requiring specialized AI features
- Developers willing to switch primary IDE

Notes:
Standalone IDEs offer the most integrated AI experience but require adapting to new development environments. See the visual overview on the next slide.

##--##

<img src="./assets/images/module-2/standalone-ides-overview.svg" alt="Standalone IDEs Overview" style="width:100%; height:auto; display:block;">

##--##

<!-- .slide: -->
# Standalone IDEs Spotlight

## Detailed Tool Breakdown

<br>

### **Cursor** ⭐ (Market Leader)
- **Users**: 100K+ active developers, fastest growing AI IDE
- **Latest**: Composer feature for autonomous development
- **Models**: Integrates multiple backends and can use GPT-5/GPT-4.5, Claude 4.x or Gemini 2.5 depending on plan
- **Pricing**: Free tier + $20/month Pro

### **Windsurf** (Enterprise Focus)
- **Formerly**: Codeium IDE, rebranded October 2025
- Multi-agent collaboration system with real-time pair programming
- Enterprise-grade security and custom model training
- **Pricing**: Free + Enterprise tiers

### **Zed** (Performance Leader)
- **Latest**: Built-in AI with multiple provider support
- Ultra-fast performance (Rust-based) with real-time collaboration
- vim/emacs keybinding support for power users
- **Availability**: macOS, Linux (Windows coming soon)

Notes:
Standalone IDEs balance familiar interfaces (like Cursor's VS Code base) with innovative AI-first features.

##--##

<!-- .slide: -->
# Category 3: IDE Extensions

## Enhancing Your Existing Workflow

<br>

### **Key Characteristics**
- Integrate with familiar development environments
- Preserve existing customizations and shortcuts
- Multiple AI models and providers supported
- Gradual adoption possible

### **Best For**
- Developers with established IDE preferences
- Teams with existing development setups
- Gradual AI adoption strategies
- Developers wanting AI without workflow disruption

Notes:
IDE extensions offer the lowest barrier to entry for AI-assisted development by building on existing tool preferences. See the visual overview on the next slide.

##--##

<img src="./assets/images/module-2/ide-extensions-overview.svg" alt="IDE Extensions Overview" style="width:100%; height:auto; display:block;">

##--##

<!-- .slide: -->
# IDE Extensions Spotlight

## Detailed Tool Breakdown

<br>

### **GitHub Copilot** ⭐
- **Copilot Chat**: Multi-turn conversations with context awareness
- **Copilot Edits**: Multi-file editing with natural language instructions  
- **Copilot Spaces**: Organize context and knowledge for specific projects
- **Custom Instructions**: Personalized coding style and preferences
- $10/month individual, $19/month business, free for students/OSS

### **Continue**
- Open-source alternative supporting multiple models (GPT-4, Claude, CodeLlama)
- Autocomplete, chat, and edit functionality
- Self-hosted or cloud deployment options
- Free and fully customizable

### **Cline (formerly Claude Dev)**
- Autonomous development agent with file system access
- Can create, edit, and execute code independently
- Advanced reasoning for complex multi-step tasks
- Free with your own API keys

##--##

<!-- .slide: -->
# Category 4: Online Tools

## Web-Based AI Development Platforms

<br>

### **Key Characteristics**
- No local installation required
- Cloud-based computation and AI processing
- Instant collaboration and sharing
- Browser-based development experience

### **Best For**
- Rapid prototyping and experimentation
- Educational and demonstration purposes
- Collaborative development sessions
- Developers with limited local resources

### **Limitations**
- Internet dependency
- Limited customization options
- Potential security concerns for sensitive code

Notes:
Online tools excel for quick experiments and collaboration but may not be suitable for production development workflows.

##--##

<!-- .slide: -->
# Online Tools Overview

## Web-Based Development Platforms

<br>

### **Popular Options**
- **Bolt.new**: Full-stack app development with configurable model backends (OpenAI, Anthropic, Google)
- **Firebase Studio**: Google's AI-powered app development platform with backend integration
- **Lovable**: AI-powered application builder for rapid prototyping and deployment
- **v0 by Vercel**: React component generation with iterative refinement
- **Replit AI**: Collaborative coding with Ghostwriter AI assistant

### **Common Features**
- Instant deployment and sharing
- Real-time collaboration
- AI-powered code generation
- Template and boilerplate creation

Notes:
We mention these tools for awareness, but our hands-on focus will be on CLI and IDE-based solutions that integrate with professional development workflows.

##--##

<!-- .slide: -->
# Tool Selection Decision Matrix

## Choosing the Right Tool for Your Context

<br>

| **Scenario** | **Recommended Category** | **Why** |
|--------------|-------------------------|---------|
| Terminal-heavy workflow | CLI Agents | Native terminal integration |
| New project, AI-first | Standalone IDE | Optimized AI experience |
| Existing VS Code setup | IDE Extension | Preserve workflow |
| Quick prototyping | Online Tools | Instant setup |
| Team collaboration | IDE Extension | Consistent across team |
| Enterprise deployment | IDE Extension | Security & compliance |

Notes:
Different scenarios call for different tool categories. Consider your team's workflow, security requirements, and adoption strategy when choosing.

##--##

<!-- .slide: -->
# Tool Evaluation Criteria

## What to Consider When Choosing

<br>

### **Technical Factors**
- **Model Quality**: Which AI models are supported?
- **Context Awareness**: How well does it understand your codebase?
- **Performance**: Response time and resource usage
- **Integration**: How well does it fit your existing tools?

### **Practical Factors**
- **Learning Curve**: Time to become proficient
- **Cost**: Subscription and usage-based pricing
- **Security**: Data handling and enterprise compliance
- **Support**: Documentation, community, and professional support

Notes:
Evaluate tools holistically, considering both technical capabilities and practical adoption factors for your specific context.

##--##

<!-- .slide: -->
# Assessment: Tool Categorization

## Validating Success Criteria SC-001

<br>

### **In-Class Exercise**
Trainer will provide 10 AI coding tools for categorization

### **Success Criteria**
- **90% accuracy**: Correctly categorize 8/10 tools within 5 minutes
- **Clear reasoning**: Justify choices using landscape knowledge
- **Scenario application**: Recommend tools for development contexts

### **Assessment Format**
This assessment validates your understanding of the AI coding tools landscape and prepares you for hands-on tool usage in subsequent labs.

Notes:
This in-class assessment (not a separate lab) validates Success Criteria SC-001 before proceeding to hands-on GitHub Copilot exercises.

##--##

<!-- .slide: -->
# Key Takeaways

## Tools Landscape Mastery

<br>

### **✅ Understanding Categories**
- CLI agents for terminal workflows
- Standalone IDEs for integrated AI experience
- IDE extensions for existing workflow enhancement
- Online tools for rapid prototyping

### **✅ Selection Criteria**
- Match tool category to your workflow
- Consider team adoption and security requirements
- Evaluate technical capabilities and practical factors

### **✅ Next Steps**
- Hands-on experience with GitHub Copilot
- Deep dive into CLI and VS Code approaches
- Advanced AI model comparison and selection

Notes:
You now have the foundation to make informed decisions about AI coding tool adoption and can proceed to hands-on GitHub Copilot mastery.