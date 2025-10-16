# Lab 21: GitHub Copilot CLI Mastery

## Learning Objectives
By the end of this lab, you will be able to:
- Install and configure GitHub Copilot CLI with current methods
- Use primary CLI commands for code generation and explanation
- Integrate CLI workflows with your terminal environment
- Troubleshoot common installation and usage issues

## Prerequisites
- GitHub account with Copilot subscription (Pro, Pro+, Business, or Enterprise)
- Node.js version 22 or later
- npm version 10 or later
- Terminal access (bash, zsh, or PowerShell)
- Basic command line familiarity

## Duration: 45 minutes

---

## Exercise 1: Installation and Setup (15 minutes)

### Step 1: Install GitHub Copilot CLI
**Objective:** Install the current GitHub Copilot CLI using the official method

**Current Installation Method (October 2025):**
```bash
# Install via npm (official method)
npm install -g @github/copilot

# Verify installation
copilot --version
```

**Expected Output:**
```
@github/copilot x.x.x
```

### Step 2: First Launch and Authentication
```bash
# Navigate to a project directory
cd /path/to/your/project

# Start Copilot CLI
copilot
```

**First-time Setup:**
1. You'll be asked to confirm you trust the files in the current directory
2. If not authenticated, use `/login` command and follow instructions
3. Copilot CLI will start in interactive mode

**Troubleshooting:**
- Ensure Node.js 22+ and npm 10+ are installed
- If you get permission errors, ensure your GitHub account has Copilot access
- For organizations, check that Copilot CLI policy is enabled in organization settings

---

## Exercise 2: Basic Code Generation (15 minutes)

### Step 3: Interactive Code Generation
**Objective:** Use Copilot CLI in interactive mode to generate code

**Starting Interactive Session:**
```bash
# Navigate to your project directory
cd /path/to/your/project

# Start interactive session
copilot
```

**Example Prompts in Interactive Mode:**
1. `Create a Python function to calculate fibonacci numbers recursively`
2. `Write a JavaScript async function to fetch user data from REST API with error handling`
3. `Generate a Bash script to backup a directory with timestamp`
4. `Create a SQL query to find top customers by order volume`

**Interactive Features:**
- Type your request in natural language
- Copilot will ask for permission to use tools when needed
- You can reference files with `@filename` syntax
- Use `/help` for available commands

**Tasks to Complete:**
1. Generate a Python function for data validation
2. Create a TypeScript interface for a user profile  
3. Generate a SQL query for complex data analysis
4. Create a Docker command for container deployment

**Success Criteria:** ✅ Successfully generate 4 different code snippets using interactive mode

---

## Exercise 3: Code Explanation and Analysis (10 minutes)

### Step 4: Code Analysis and Explanation
**Objective:** Use Copilot CLI to understand and document existing code

**Sample Code to Analyze:**
Create a file `quicksort.py` with this content:
```python
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)
```

**Using Interactive Mode for Code Analysis:**
```bash
# Start Copilot CLI in the directory containing your code
copilot

# In the interactive session, use @ to reference files:
Explain @quicksort.py

# Or ask specific questions:
What algorithm does @quicksort.py implement and how does it work?

# Analyze specific aspects:
What are the time and space complexities of @quicksort.py?
```

**Advanced Analysis Prompts:**
- `Review @config.json for potential security issues`
- `Explain the database schema in @models/user.py`
- `Document the purpose and usage of @scripts/deploy.sh`

**Tasks to Complete:**
1. Explain the provided quicksort algorithm
2. Analyze a configuration file in your project
3. Document a complex function or class
4. Review code for potential improvements

---

## Exercise 4: Advanced Usage and Integration (5 minutes)

### Step 5: Advanced Usage and Workflow Integration
**Objective:** Learn advanced Copilot CLI features and integrate into workflow

**Programmatic Mode Usage:**
```bash
# Use -p flag for single prompts (programmatic mode)
copilot -p "Create a Python function for email validation"

# Allow tools without manual approval for automation
copilot -p "Create a backup script" --allow-all-tools

# Combine with shell operations
copilot -p "Generate a Docker compose file for MEAN stack" > docker-compose.yml
```

**Interactive Mode Features:**
```bash
# Start interactive session
copilot

# Useful slash commands:
/help          # Show all available commands
/model         # Change AI model
/usage         # View token usage statistics
/resume        # Resume previous session
/login         # Authenticate with GitHub
/feedback      # Send feedback to GitHub
```

**Shell Integration:**
```bash
# Direct shell commands with !
!git status
!npm install

# Reference specific files
Optimize @package.json for production builds

# Change working directory within session
/cwd /path/to/other/project
```

**Tasks to Complete:**
1. Use programmatic mode to generate and save a file
2. Try different slash commands in interactive mode
3. Use file referencing with @ syntax
4. Resume a previous session

---

## Success Criteria Checklist

### Installation & Setup
- [ ] Successfully installed `@github/copilot` via npm
- [ ] Completed first-time setup and authentication
- [ ] Can start interactive sessions with `copilot` command

### Code Generation
- [ ] Generated at least 4 different types of code snippets in interactive mode
- [ ] Used natural language prompts effectively
- [ ] Successfully created and saved generated code to files

### Code Analysis
- [ ] Explained complex algorithms using @ file references
- [ ] Analyzed existing code files in projects
- [ ] Used Copilot to understand unfamiliar code patterns

### Advanced Usage
- [ ] Used programmatic mode with -p flag
- [ ] Explored slash commands (/help, /model, /usage)
- [ ] Integrated CLI into development workflow
- [ ] Used file referencing and directory navigation features

## Common Issues and Solutions

### Issue: "copilot: command not found"
**Solution:** Ensure proper installation:
```bash
# Check Node.js version (must be 22+)
node --version

# Check npm version (must be 10+)  
npm --version

# Reinstall if needed
npm install -g @github/copilot
```

### Issue: "Directory trust required"
**Solution:** 
1. Only run Copilot CLI in directories you trust
2. Choose "Yes, proceed" for current session only
3. Use "Yes, and remember" only for trusted project directories
4. Never run from home directory or system folders

### Issue: "Copilot access denied" or authentication issues
**Solution:**
1. Use `/login` command in interactive mode
2. Verify your GitHub Copilot subscription (Pro, Pro+, Business, Enterprise)
3. For organizations, ensure Copilot CLI policy is enabled
4. Check organization settings if receiving Copilot through work

### Issue: Poor or irrelevant responses
**Solution:**
1. Be more specific in your prompts
2. Use @ syntax to reference specific files for context
3. Include programming language and framework details
4. Try different AI models using `/model` command

## Next Steps
- Practice integrating CLI commands into your daily workflow
- Experiment with different prompt styles for better results
- Explore combining CLI output with other development tools
- Move on to Lab 22 for VS Code integration

## Alternative CLI Tools to Explore
Now that you've mastered GitHub Copilot CLI, consider exploring these popular alternatives:

### **Claude Code**
- Anthropic's terminal-first agent that plans, edits files, runs commands, and can commit changes
- Switch models on demand (`sonnet`, `opus`, `haiku`, `opusplan`, `sonnet[1m]`) with the `/model` command
- Install with `npm install -g @anthropic-ai/claude-code`; usage bills through Claude Console/Claude.ai

### **Codex**
- OpenAI's open-source Rust CLI that reads, edits, and runs code with approval modes
- Default GPT-5 model with optional `gpt-5-codex` and reasoning levels; supports non-interactive `codex exec`
- Install with `npm install -g @openai/codex` or `brew install codex`; works with ChatGPT plans or API keys

### **Aider**
- Open-source CLI agent with direct file editing
- `pip install aider-chat`
- Supports multiple models (GPT-4, Claude, local models)

---

*Lab completed! You now have practical experience with GitHub Copilot CLI and awareness of the broader CLI agent ecosystem.*