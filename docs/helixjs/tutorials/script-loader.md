---
title: Script loader and project layout
---

# Script loader and project layout

HelixJS runs one entry script from your workspace. That script loads the rest of your JavaScript. 

## Where to put files

In your Helix workspace:

- `scripts/helix.main.js`: entry point. This is the file Helix executes.
- `scripts/js/`: folder for your JS modules (or use another name; the loader only needs a path).

You can use any folder name instead of `js`. The loader receives `__dirname` as the scripts folder; you pass a `basePath` (e.g. `path.join(__dirname, "js")`) into `Utils.loadScripts`.

## Entry script: helix.main.js

Create `scripts/helix.main.js` with an array of script names (no `.js`) and the folder that contains them. `Utils.loadScripts(basePath, scripts)` loads each script in that order.

```javascript
const path = require('path');

const scripts = [
  "core",
  "menus",
  "gameplay"
];

const basePath = path.join(__dirname, "js");

Utils.loadScripts(basePath, scripts);
```

Each string in `scripts` is the name of a module under `basePath`. The loader resolves that to a file (e.g. `js/core.js` or `js/core/index.js` depending on the runtime). Add, remove, or reorder names to control what runs and when. Scripts that depend on others (e.g. a menu that uses shared DB helpers) should appear after their dependencies in the array.


## Load order

Load order follows the `scripts` array. Put code that others depend on first (e.g. DB connection, shared state or events), then modules that use them. There is no required order beyond what your own dependencies need.
