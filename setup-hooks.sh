#!/bin/bash

# Setup git hooks for branch management enforcement
# Run this script to install the git hooks

echo "Setting up git hooks for branch management..."

# Create hooks directory if it doesn't exist
mkdir -p .git/hooks

# Copy pre-commit hook
cp .githooks/pre-commit .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit

echo "✅ Git hooks installed successfully!"
echo ""
echo "The following rules are now enforced:"
echo "- Direct commits to main branch are blocked"
echo "- Branch names should follow 'feature/*' pattern"
echo ""
echo "To work on a new feature:"
echo "1. git checkout -b feature/your-feature-name"
echo "2. Make your changes and commit"
echo "3. git push origin feature/your-feature-name"