# 🌐 HELIX Documentation - Internationalization (i18n) & Contribution Guide

Welcome to the HELIX developer community! This project uses the **mkdocs-static-i18n** plugin with a **suffix-based (suffix) scheme** to support multiple languages.

To make it as quick and simple as possible for future developers and community contributors to add new languages (such as Japanese, Simplified Chinese, Spanish, etc.), we have designed a fully decoupled **Global Translation Dictionary** architecture.

You **do not need to write or modify any HTML DOM structures or JS rendering logic**. Simply follow the **3 easy steps** below to add a brand new language to the entire documentation site!

---

## 🚀 Quick Start: Add a New Language in 3 Steps

We will use **Japanese (locale key: `ja`)** as an example to guide you through the process:

### Step 1: Register the New Language in `mkdocs.yml`
Open the root `mkdocs.yml` file, find the `plugins` section, locate the `i18n` settings, and add your target language to the list.

**Example: Adding "Japanese (`ja`)"**

1. **Add to `extra.alternate` (Controls the header dropdown menu displays)**:
   ```yaml
   extra:
     alternate:
       - name: English
         link: ""
         lang: en
       - name: 繁體中文
         link: zh-TW/
         lang: zh-TW
       # 👇 Add your new language here
       - name: 日本語
         link: ja/
         lang: ja
   ```

2. **Add to `plugins.i18n.languages` (Controls build outputs and sidebar navigation translations)**:
   ```yaml
   plugins:
     - i18n:
         docs_structure: suffix
         languages:
           - locale: en
             name: English
             default: true
             build: true
           - locale: zh-TW
             name: 繁體中文
             build: true
             nav_translations:
               About: 關於
               Start Here: 從這裡開始
           # 👇 Add your new language configuration here
           - locale: ja
             name: 日本語
             build: true
             nav_translations:
               About: について
               Start Here: ここからスタート
               Concepts: 概念
               # Translate other English sidebar navigation titles here...
   ```

---

### Step 2: Add UI Text Translations (Optional)
Our custom templates and scripts are highly decoupled. The **header language dropdown menu is 100% dynamic and auto-renders** by directly reading the `extra.alternate` configuration from `mkdocs.yml` — **you do not need to touch the `header.html` template at all**!

If there are some specific non-Markdown static UI texts you wish to localize, you only need to add your language key to the following two files (if omitted, they will safely fallback to English):

#### ① Page Feedback Button Text
Open the file: [_overrides/partials/actions.html](file:///g:/code/Program/web/helix-documentation/_overrides/partials/actions.html)  
Add your locale key to the `translation_dict` object at the top:
```html
{% set translation_dict = {
  "en": { ... },
  "zh-TW": { ... },
  "ja": {
    "btn_feedback": "フィードバックを送る"
  }
} %}
```

#### ② First-Time Visit Warning Modal (JS)
Open the file: [docs/_extra/javascript/extra.js](file:///g:/code/Program/web/helix-documentation/docs/_extra/javascript/extra.js)  
Add your locale key to the `translations` object inside the popup function:
```javascript
    const translations = {
      "en": { ... },
      "zh-TW": { ... },
      "ja": {
        wip: "このドキュメントはまだ作成中です...",
        close: "閉じる"
      }
    };
```

---

### Step 3: Create and Translate Markdown Files
We use the `filename.<locale>.md` naming convention. Create your translated files in the **same directory** as the English original files.

**Example: Translating `install.md` into Japanese:**
1. Create a new file in `docs/getting_started/` named: `install.ja.md`
2. Copy the entire contents of the original `install.md` into `install.ja.md`.
3. Translate all the English content, including page frontmatter titles, into Japanese.

> 💡 **Graceful Fallback Mechanism**:
> You do not have to translate all pages at once. 
> For any pages that have **not yet been translated**, the build system will **automatically and safely display the English original page**. This ensures the site compiles flawlessly and prevents 404 navigation errors, allowing team members to translate pages progressively.

---

## 🔍 Local Verification

Before submitting your Pull Request, verify the changes locally to ensure there are no compilation warnings or errors:

1. Install multi-language requirements:
   ```bash
   pip install -r requirements.txt
   ```
2. Start the local MkDocs dev server:
   ```bash
   mkdocs serve
   ```
3. Open your browser and navigate to `http://127.0.0.1:8000/`. Hover over the header dropdown menu, switch to your new language, and verify that the UI text, sidebar navigation translations, and translated Markdown documents render perfectly!
