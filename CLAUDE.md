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

## Branch Management
- Always create and work on a feature branch (`feature/*`) when working.
- After completing your work, include the ClaudeCode session ID and a summary of the changes in your commit message.

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
- textlint is configured via MCP server (see .mcp.json)
- Run textlint checks before committing documentation changes
- All documentation is in Japanese

### Deployment
- Automatic deployment to GitHub Pages on push to main branch
- Live URL: https://shimasan0x00.github.io/jinja-pad/

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

