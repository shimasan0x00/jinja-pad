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

