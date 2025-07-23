# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Important Notes

- [MANDATORY] Use English for thinking and communication, and use Japanese only for last output.
  - **Sentence ending**: When outputting in Japanese, use "なのだ" as the sentence ending.
  - **Note**: If "なのだ" is unnatural in the Japanese response, you may change it to a more natural expression.
- When updating CLAUDE.md, also create or update "CLAUDE-ja.md" and write the Japanese translation of CLAUDE.md in it.
- After creating or updating CLAUDE.md or CLAUDE-ja.md, please run textlint to check and fix the files.

## File Organization

When working with Claude Code:

- Long prompts should be stored as separate files under `/your_workspace/.claude/prompts` directory and referenced from there
- All unused intermediate files created during thinking or processing should be placed in `/your_workspace/.claude/tmp` directory

### File Creation and Editing Rules

- All newly created files must be placed only within the project folder.
- When temporary storage is needed for work, use a "/your_workspace/.claude/tmp" folder.
- Do not create files outside of the project folder
- Do not edit files located outside of the project folder

## Branch Management [CRITICAL - MUST FOLLOW]

⚠️ **MANDATORY WORKFLOW - NO EXCEPTIONS**

Before making ANY changes to code files, you MUST:

1. **FIRST ACTION**: Check current branch with `git branch`
2. **IF ON MAIN**: Immediately create a feature branch:
   ```bash
   git checkout -b feature/descriptive-name
   ```
3. **NEVER WORK ON MAIN**: Direct work on main branch is strictly prohibited

### Required Workflow Steps:
1. **Start**: `git checkout -b feature/your-task-name` 
2. **Work**: Make all changes on the feature branch
3. **Commit**: Include ClaudeCode session ID in commit messages
4. **Push**: `git push origin feature/your-task-name`
5. **PR**: Create pull request to merge into main

### Git Hooks Setup:
**REQUIRED FOR ALL DEVELOPERS**: Run `./setup-hooks.sh` to install git hooks that enforce this workflow automatically and prevent commits to main branch.

### Branch Naming Convention:
- ✅ `feature/jinja-pad-implementation`
- ✅ `feature/add-new-templates`  
- ✅ `feature/fix-responsive-design`
- ❌ `main` (never work here directly)
- ❌ `dev`, `develop` (use feature/* pattern)

## Project Architecture

Jinja Pad is a static HTML/CSS/JavaScript application for learning Jinja template syntax. No build process or package manager is required.

### Key Files Structure
- `index.html` - Main application with left-right split layout
- `script.js` - Application logic using Nunjucks (Jinja2-compatible) template engine
- `style.css` - Styling with main color #337d37 and responsive design
- `test-templates.md` - Collection of sample templates for testing various Jinja features
- `.github/workflows/pages.yml` - GitHub Pages auto-deployment configuration

### Technology Stack
- **Frontend**: Pure HTML5/CSS3/JavaScript (ES6+), no frameworks
- **Template Engine**: Nunjucks loaded via CDN (jsdelivr)
- **Deployment**: GitHub Pages with automated workflow
- **Documentation**: Japanese-focused with textlint for quality control

## Development Commands

### Local Development
```bash
# Start local server (no Node.js required)
python -m http.server 8000
# Access at http://localhost:8000
```

### Documentation Quality
```bash
# Check documentation with textlint (via MCP server)
# textlint is configured via .mcp.json and .textlintrc.json
mcp textlint CLAUDE.md CLAUDE-ja.md

# Auto-fix textlint issues
mcp textlint --fix CLAUDE.md CLAUDE-ja.md
```
- textlint is configured via MCP server (see .mcp.json)
- Run textlint checks before committing documentation changes
- All documentation is in Japanese

### Deployment
- **Trigger**: Automatic deployment on push to main branch (after PR merge)
- **Restrictions**: Only main branch can deploy due to environment protection rules
- **Manual**: Can be triggered manually from Actions tab
- **Live URL**: https://shimasan0x00.github.io/jinja-pad/
- **Setup**: First-time setup requires GitHub Pages to be enabled (see GITHUB_PAGES_SETUP.md)

## Application Features

### Core Functionality
- Left panel: Template input with JSON data input
- Right panel: Rendered output with error display
- Real-time rendering with Ctrl+Enter shortcut
- Sample templates auto-load on first visit
- Mobile-responsive design

### Supported Jinja Features
- Variable expansion: `{{ variable }}`
- Loops: `{% for item in items %}`
- Conditionals: `{% if condition %}`
- Filters: `{{ variable | filter }}`
- Nested objects: `{{ object.property }}`
- Custom filters: length, first, last, join, replace

## Development Notes

- This is a pure static site with no build process
- Dependencies are loaded via CDN, no package management needed
- Focus on educational use cases for Jinja template learning
- Maintain Japanese language support throughout UI and documentation

## Important Files Reference

- **WORKFLOW.md**: Detailed workflow checklist and troubleshooting for branch management
- **GITHUB_PAGES_SETUP.md**: GitHub Pages initial setup guide and deployment troubleshooting
- **setup-hooks.sh**: Git hooks installation script (run once per developer)
- **.githooks/pre-commit**: Pre-commit hook that prevents commits to main branch

## Common Issues and Solutions

### Git Workflow Issues
- **Problem**: Working on main branch accidentally
- **Solution**: Use git hooks (`./setup-hooks.sh`) or see WORKFLOW.md for recovery steps

### Deployment Issues  
- **Problem**: "Pages site not found" errors
- **Solution**: Follow GITHUB_PAGES_SETUP.md to enable GitHub Pages first
- **Problem**: Feature branch deployment rejected
- **Solution**: Expected behavior - only main branch can deploy due to environment protection

