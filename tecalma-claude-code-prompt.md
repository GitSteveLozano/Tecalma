# Tecalma — Claude Code Prompt Guide

This document provides prompt templates and guidelines for using Claude Code effectively with the Tecalma project.

## Project Overview

Tecalma is the codebase for **Tecalma Tortilla's**. When working with Claude Code on this repository, use the prompts and conventions below to get consistent, high-quality results.

## Getting Started Prompts

### Explore the codebase

```
Explore the Tecalma repository structure and summarize the key directories, entry points, and technologies used.
```

### Understand a feature

```
Read through the code related to <feature> and explain how it works, including the data flow and any external dependencies.
```

## Development Prompts

### Add a new feature

```
Add <feature description> to the Tecalma project. Follow existing code style and conventions. Write tests if a test framework is already configured.
```

### Fix a bug

```
Investigate and fix the following issue: <description of bug or error message>. Explain the root cause and the fix.
```

### Refactor code

```
Refactor <file or module> to improve readability and maintainability without changing behavior. Keep changes minimal and focused.
```

## Code Quality Prompts

### Review changes

```
Review my staged changes and suggest improvements for correctness, readability, and security.
```

### Add tests

```
Write tests for <file or module> covering the main functionality and edge cases. Use the existing test framework and conventions.
```

## Conventions

- Keep prompts concise and specific to get the best results.
- Reference file paths or function names when asking about existing code.
- Let Claude Code read the relevant files before requesting changes.
- Prefer small, incremental changes over large rewrites.

## Tips

1. **Be specific** — Instead of "fix the app," say "fix the 500 error when submitting the order form in `src/orders/handler.js`."
2. **Provide context** — Share error messages, logs, or screenshots when reporting issues.
3. **Iterate** — Start with exploration prompts, then move to implementation.
4. **Review before committing** — Always review Claude Code's changes before pushing to shared branches.
