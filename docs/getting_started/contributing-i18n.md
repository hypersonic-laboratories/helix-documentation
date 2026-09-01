# Contributing Translations

This guide explains how to contribute translations to the HELIX documentation.

## Overview

We use [mkdocs-static-i18n](https://ultrabug.github.io/mkdocs-static-i18n/) with a suffix-based file structure. This means translations live next to the original English files with a locale suffix.

### Supported Languages

| Language | Locale Code | Example File |
|----------|-------------|--------------|
| English (default) | `en` | `install.md` |
| Portuguese (BR) | `pt-BR` | `install.pt-BR.md` |
| Spanish | `es` | `install.es.md` |
| German | `de` | `install.de.md` |
| French | `fr` | `install.fr.md` |

## File Naming Convention

Add the locale code before the `.md` extension:

```
original_file.md        → English (default, no suffix)
original_file.pt-BR.md  → Portuguese (BR)
original_file.es.md     → Spanish
original_file.de.md     → German
original_file.fr.md     → French
```

**Examples:**

| Original | Portuguese Translation |
|----------|----------------------|
| `docs/getting_started/install.md` | `docs/getting_started/install.pt-BR.md` |
| `docs/tutorials/custom_maps.md` | `docs/tutorials/custom_maps.pt-BR.md` |
| `docs/api/index.md` | `docs/api/index.pt-BR.md` |

## Creating a Translation

### Step 1: Fork and Clone

1. Fork the [helix-documentation repository](https://github.com/hypersonic-laboratories/helix-documentation)
2. Clone your fork locally
3. Create a branch for your translation: `git switch -c translate/pt-BR`

### Step 2: Create the Translation File

1. Find the file you want to translate (e.g., `docs/getting_started/install.md`)
2. Copy it to the same directory with the locale suffix (e.g., `docs/getting_started/install.pt-BR.md`)
3. Translate the content

### Step 3: Test Locally

1. Install dependencies: `pip install -r requirements.txt`
2. Run the dev server: `mkdocs serve`
3. Open `http://127.0.0.1:8000/pt-BR/` (replace `pt-BR` with your locale)
4. Verify the language switcher appears in the header
5. Check that your translated page renders correctly

### Step 4: Submit a Pull Request

1. Commit your changes
2. Push to your fork
3. Open a PR to the `development` branch
4. Use a clear title like: `[i18n] Add Portuguese translation for install.md`

## Translation Guidelines

### What to Translate

- Page titles and headings
- Body text and paragraphs
- Image alt text
- Admonition titles (note, warning, tip, etc.)
- Link text (but not the URLs themselves)

### What NOT to Translate

Keep these in English:

- **Code blocks and inline code**: All code examples stay in English
- **API names**: Class names, function names, property names
- **Technical terms**: Package, World, Server, Workspace, Build Mode, Assets, Blueprints, Vault, Dedicated Server, etc.
- **File paths**: `docs/tutorials/`, `mkdocs.yml`, etc.
- **URLs**: Links should point to the same destinations
- **YAML front matter keys**: Only translate values if appropriate
- **Brand names**: HELIX, Unreal Engine, FiveM, QBCore, etc.
- **UI labels**: Keep button/menu names as they appear in the software (e.g., "Create World", "Publish")

### Example

**Original (English):**

```markdown
# Creating Your First World

A **Package** is a modular bundle of assets (Lua scripts, Blueprints, UIs, meshes, textures, etc.) that can be combined with other Packages to form a playable **World**.

/// note
Make sure to publish your packages to the Vault before publishing your World.
///

Click **Create World** in the Client to get started.
```

**Translated (Portuguese):**

```markdown
# Criando Seu Primeiro World

Um **Package** é um conjunto modular de assets (scripts Lua, Blueprints, UIs, meshes, textures, etc.) que pode ser combinado com outros Packages para formar um **World** jogável.

/// note
Publique seus packages no Vault antes de publicar seu World.
///

Clique em **Create World** no Client para começar.
```


Notice that:

- Headings and text are translated naturally (not literally)
- Technical terms stay in English: Package, World, assets, Blueprints, meshes, textures, Vault, Client
- UI labels stay in English: "Create World"
- The admonition keyword (`note`) stays in English
- Code and commands stay exactly the same

### Internal Links

Keep relative links unchanged. The i18n plugin handles routing automatically.

```markdown
<!-- This works for all languages -->
[Installation Guide](install.md)
```

### Images

In most cases, keep the same images. Only create localized versions if the image contains significant text that would confuse readers (like UI screenshots with English labels).

For localized images, use the same naming pattern:

```
img/screenshot.png         → English
img/screenshot.pt-BR.png   → Portuguese
```

## Partial Translations

You don't need to translate everything at once. The plugin automatically falls back to English for missing pages.

## Testing Translations

When running `mkdocs serve --livereload`:

1. The language switcher appears in the header
2. Navigate to `/{locale}/` to see translated pages
3. Pages without translations show the English version
4. Search works per-language when using the language-specific site

## Common Issues

**Language switcher not appearing?**
- Make sure you have at least one translated file
- Clear your browser cache
- Restart `mkdocs serve`

**Translation not showing up?**
- Check the file name has the correct locale suffix
- Verify the file is in the correct directory
- Run `mkdocs build` to see any errors

**Build errors?**
- Ensure your markdown syntax is valid
- Check that all links point to existing files

## Questions?

If you have questions about translating, open an issue on GitHub or ask in our [Discord](https://discord.gg/helixgame).
