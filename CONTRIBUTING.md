# Thank You For Helping!

## Architecture
- The docs are built on [MkDocs](https://www.mkdocs.org/) with the [material theme](https://squidfunk.github.io/mkdocs-material/)
    - They both, unsuprisingly, have good documentation. Reference this often if stuck, starting with Material.
        - [Material](https://squidfunk.github.io/mkdocs-material/getting-started/)
        - [Mkdocs](https://www.mkdocs.org/getting-started/)

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

Currently hosting via Cloudflare Pages - [private link](https://dash.cloudflare.com/d6a088d02c11f99940fa2e342f1893d8/pages/view/helixdocs)

### TODO
- [ ] Make repo public (when closer to closed alpha)

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

### TODO
- [ ] Implement linters like [Vale](https://docs.errata.ai/) and [Lexi](https://github.com/Rebilly/lexi/tree/main)

## Styling

Done via theme overrides 
- Essentially this means we use `html` files in _overrides and `css/js` files in docs/_extras.
    - Documentation: [[mkdocs basics](https://www.mkdocs.org/user-guide/customizing-your-theme/) | [material specifics](https://squidfunk.github.io/mkdocs-material/customization/)
    - Currently trying to avoid larger changes if possible, but we can fork/bundle a custom variant of the theme if need be.

### Goals
- **Consistent with HELIX branding** with typeface, palette, etc.
- **Clean UX** emphasizing clarity and ease of use

### TODO 
- [x] Update all headers to be bold by default
- [x] Update headers in side/top nav to be more visible (e.g. bold/underline/higher contrast)
- [x] Always show underline for currently selected header nav tab
- [x] Remove GitHub link in header (can hide via css, or remove html segment via partials)
- [ ] General styling pass to better match something like: https://docs.coregames.com/getting_started/installing_core/ (open source/mit: https://github.com/ManticoreGamesInc/platform-documentation/tree/development)
    - [ ] Emulate higher contrast bg/text color/coloring matching company theme
    - [ ] Add key buttons in header
- [ ] Advanced code formatting (better syntax coloring, line highlights, wrapping - see this to start: https://squidfunk.github.io/mkdocs-material/reference/code-blocks/)