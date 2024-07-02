# Thank You For Helping!

## Architecture
- The docs are built on [MkDocs](https://www.mkdocs.org/) with the [material theme](https://squidfunk.github.io/mkdocs-material/), with a number of plugins/extensions
    - Their own docs: [Material](https://squidfunk.github.io/mkdocs-material/getting-started/) | [Mkdocs](https://www.mkdocs.org/getting-started/)

## Developer Setup

### Setup/Installation
1. Install [python 3](https://www.python.org/downloads/) (see 'runtime.txt' for exact version - currently 3.12.4)
- (Optional) Setup & activate [venv](https://realpython.com/what-is-pip/#using-pip-in-a-python-virtual-environment)
2. Run `pip install -r requirements.txt`

### Testing
1. `mkdocs serve` for local testing at `http://127.0.0.1:8000/`
2. `mkdocs build` for building manually

### Branches
- `development`, previews viewable at `development.helix-documentation.pages.dev`
- `production` for the main site at `helix-documentation.pages.dev`. Cannot be pushed to directly.

### Hosting

Currently built and hosted via Cloudflare Pages - [private link](https://dash.cloudflare.com/d6a088d02c11f99940fa2e342f1893d8/pages/view/helix-documentation)

# Contributing

## Writing

### Use Plain language
- Inspired by [Microsoft writing guidelines](https://learn.microsoft.com/en-us/style-guide/welcome/)
- Clearly explain each step of the process you are documenting.
- Use present tense, active voice, and "you"-form to address the readers.
- Keep your writing as concise as possible. [Hemingway](https://hemingwayapp.com/) is a free browser app to measure language complexity (the lower the better).

### Be Consistent
- Write zero to nine in letters, 10 and above in numerals. ([details](https://learn.microsoft.com/en-us/style-guide/numbers))
- Headings: sentence case ([details](https://learn.microsoft.com/en-us/style-guide/scannable-content/headings#formatting-headings))
- UI elements: bold ([details](https://learn.microsoft.com/en-us/style-guide/procedures-instructions/formatting-text-in-instructions)) 
- Use tabs, not spaces, for code. Use placeholders as hyphenated words in angle brackets (e.g. `<your-root-directory>`)
- File names, directory names, and paths: code formatted.
    - Make sure you match brand names precisely in text. For example: "HELIX", not "Helix".
- Links should include `{.external-link}` after the link if they link to a different site.

## Styling

Done via theme overrides 
- Essentially this means we use `html` files in `/_overrides` and `css/js` files in `/docs/_extras`.
    - Overrides documentation: [mkdocs basics](https://www.mkdocs.org/user-guide/customizing-your-theme/) | [material specifics](https://squidfunk.github.io/mkdocs-material/customization/)

### Goals
- **Consistent with HELIX branding** with typeface, palette, etc.
- **Clean UX** emphasizing clarity and ease of use

### Keep It Clean
- Use existing color variable for css, don't `!override` unless necessary, etc.