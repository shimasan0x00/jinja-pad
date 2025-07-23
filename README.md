# Jinja Pad

A web application for learning and testing Jinja templates.

![Jinja Pad](https://img.shields.io/badge/Jinja-Template%20Engine-337d37)
![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-blue)

## Overview

Jinja Pad is a web application that allows you to write Jinja templates directly in your browser and see the rendered output in real-time. It's perfect for learning Jinja template engine syntax and testing template behavior.

## Features

- Split-screen layout with template input area and result display area side by side
- Real-time rendering with a single button click for templates and data
- Variable data input in JSON format
- Clear and user-friendly display of template and JSON syntax errors
- Auto-loaded sample templates for learning on first visit
- Responsive design for comfortable use on mobile devices

## Usage

1. Write your Jinja template in the "Template Input" area on the left
2. Enter variables for your template in JSON format in the "Variable Data (JSON)" area
3. Click the "Render" button
4. View the processed result in the "Rendered Output" area on the right

### Keyboard Shortcuts

- `Ctrl + Enter`: Render template

## Supported Jinja Features

*Powered by Nunjucks 3.2.4 - a rich, powerful templating engine for JavaScript with full Jinja2 compatibility*

### Core Template Syntax
- **Variables**: `{{ variable }}`, `{{ object.property }}`, `{{ object["key"] }}`
- **Loops**: `{% for item in items %}` with `loop.index`, `loop.first`, `loop.last`
- **Conditionals**: `{% if %}`, `{% elif %}`, `{% else %}` with logical operators (`and`, `or`, `not`)
- **Comments**: `{# This is a comment #}`
- **Whitespace control**: `{%- if condition -%}` to strip whitespace
- **Inline expressions**: `{{ "true" if condition else "false" }}`

### Built-in Filters (40+ available)
- **String operations**: `upper`, `lower`, `capitalize`, `title`, `trim`, `reverse`
- **Array/List**: `first`, `last`, `length`, `sort`, `reverse`, `random`, `sum`
- **Conversion**: `int`, `float`, `string`, `list`, `dump` (JSON)
- **Text formatting**: `truncate`, `wordcount`, `center`, `indent`
- **HTML/URL**: `escape`, `safe`, `striptags`, `urlencode`, `urlize`, `nl2br`
- **Advanced**: `batch`, `slice`, `groupby`, `dictsort`, `default`
- **Custom filters**: `join`, `replace` (enhanced versions)

### Advanced Features
- **Mathematical expressions**: `{{ (numbers | sum) / (numbers | length) }}`
- **Filter chaining**: `{{ text | upper | truncate(50) | trim }}`
- **Complex data structures**: Nested loops, conditions, and object manipulation
- **Template inheritance**: `{% extends %}`, `{% block %}`, `{{ super() }}`
- **Macros**: Reusable template functions `{% macro %}...{% endmacro %}`
- **Imports**: `{% import %}`, `{% from %}` for modular templates

## Deployment

This application is hosted on GitHub Pages and can be accessed at:

- [Jinja Pad](https://shimasan0x00.github.io/jinja-pad/)

## Development

```bash
# Clone the repository
git clone https://github.com/shimasan0x00/jinja-pad.git
cd jinja-pad

# Run with local server (example: Python)
python -m http.server 9999

# Access in browser
open http://localhost:9999
```

## Technology Stack

- Responsive UI with HTML5/CSS3
- Frontend functionality with JavaScript (ES6+)
- Jinja2-compatible template engine with Nunjucks
- Static site hosting with GitHub Pages

## License

MIT License

## Contributing

Pull requests and issue reports are welcome.