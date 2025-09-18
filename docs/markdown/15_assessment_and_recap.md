```markdown
<!-- .slide -->

# Knowledge Check (Quiz)

1) Which part of a prompt most improves reliability?
- a) Creativity cues
- b) Constraints and success criteria
- c) Emojis
- d) Asking politely

2) What does RAG add to LLMs?
- a) Faster tokenization
- b) External context retrieval
- c) Bigger models
- d) Determinism

3) Safe tool usage includes:
- a) Unlimited iterations
- b) Allowing all shell commands
- c) Parameter allowlists and timeouts
- d) Disabling logs

Notes:
Discuss answers: 1-b, 2-b, 3-c.

##--##

<!-- .slide: class="with-code" -->

# Prompt Debugging Checklist

- Reproduce: capture exact prompt, model, parameters
- Minimize: isolate failing subset of context
- Add constraints: inputs/outputs, schemas
- Instrument: log tool calls and deltas
- Evals: add 2–3 test cases per change

```
Contract:
- Inputs: code snippet + requirement
- Output: unified diff + summary
- Errors: invalid diff, failing tests, no-op
- Success: tests pass, diff minimal
```

##--##

<!-- .slide -->

# Key Takeaways

- Specific prompts with constraints outperform vague requests
- Iteration + small evals = steady quality
- Tools and agents multiply capability—use guardrails
- Safety and privacy are non-negotiable

## Next Steps
- Practice: Lab 01 → Lab 02 → Lab 03
- Explore: 21_ai_tools_landscape.md, 22_copilot_setup.md, 23_autonomous_agents.md
- Team up: define shared prompt patterns and evals

## Resources
- OpenAI, Anthropic, Google model docs
- Prompting guides by providers
- Awesome-LLM, LangChain, Guidance

```