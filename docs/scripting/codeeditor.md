---
title: Code Editor
tags: [scripting]
---
<HeaderDeclaration type="scripting" name="code-editor" />

# Getting Started with Lua in Visual Studio Code
This guide will help you set up Visual Studio Code to write and edit Lua code for your project

## 🧰 Prerequisites
Before starting, make sure you have:

- Visual Studio Code installed: https://code.visualstudio.com/
- Your project folder open in VS Code (with access to the Content/Script directory)

## Step 1: Install Lua Extensions
To make VS Code Lua-friendly, install a Lua language extension.

✅ Recommended: Lua Language Server

- Open VS Code.
- Go to the Extensions panel (click the square icon on the sidebar or press Ctrl+Shift+X).
- Search for: Lua
- Install the one called Lua by sumneko or Lua Language Server.
- Reload VS Code if prompted.

This extension provides syntax highlighting, autocomplete, error checking, and IntelliSense

## ⚙️ Step 2: Configure the Lua Runtime (Optional)
If the Lua Language Server shows unwanted diagnostics or doesn't recognize your folder structure, you can configure it.

Press `Ctrl+Shift+P` and choose Preferences: Open Settings (JSON).

Add or update the following settings:

```json
"Lua.workspace.checkThirdParty": false,
"Lua.runtime.version": "Lua 5.4",
"Lua.workspace.library": [
  "${workspaceFolder}/Content/Script"
],
"Lua.diagnostics.globals": ["require"]
```

Adjust the path if your Lua code is located elsewhere

## 🧪 Step 3: Verify It’s Working
Open or create a file named main.lua.

Type this example:

```lua
print("Hello from VS Code!")
```

You should see syntax highlighting and auto-complete suggestions

## 🎨 Optional: Customize Your Environment
Use themes like One Dark Pro or Monokai for better visuals

Install fonts like Fira Code or JetBrains Mono with ligatures

Enable line numbers, minimap, and breadcrumbs from the settings panel

## 🚀 You're Ready to Code
You’re all set to write Lua code for your platform using Visual Studio Code.

From here, you can:

- Open and edit any `.lua` file inside `Content/Script`
- Work on `client`, `server`, or `shared` logic as defined in your `package.json`

Happy Coding!