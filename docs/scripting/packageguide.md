---
title: Package Guide
tags: [scripting]
---
<HeaderDeclaration type="scripting" name="package" />

# Introduction to Lua Packages
Your project runs using a modular Lua package system.
A Lua package is a self-contained set of Lua scripts and related assets that can be loaded and initialized dynamically based on configuration files.
This structure allows for flexible, organized scripting and content loading.

## 📁 Package Directory Structure
All Lua packages are located under the `Content/Script/` directory.
Each subfolder inside this directory represents a single Lua package. Every package must include a `package.json` file to define its structure, including which files to load.

```title="Example"
Content
└── Script
    ├── MyPackage
    │   ├── client.lua
    │   ├── server.lua
    │   └── package.json
    ├── MyPackage2
    │   ├── client.lua
    │   └── package.json
    └── config.json
```

## 📜 Defining Which Packages to Load

The `config.json` file located in `Content/Script/` acts as the entry point for loading Lua packages.
It contains a simple JSON structure with a `packages` key, which is a list of package folder names you want to load in order.

```json title="Example"
{
  "packages": [
    "MyPackage",
    "MyPackage2"
  ]
}
```

When the server starts, it reads this list and loads each specified package, resolving their internal file structure through their respective `package.json`.

## 📦 Declaring Package Files
Each Lua package must include a `package.json` file. This manifest defines which files the system should load and in what order.

```json title="Example"
{
  "shared": ["config.lua", "shared/main.lua"],
  "server": ["server/*.lua"],
  "client": ["client/main.lua"]
}
```

### Supported Fields
- `client`: Lua scripts to run on the client side
- `server`: Lua scripts to run on the server side
- `shared`: Scripts loaded on both client and server (optional)

### Wildcard Support
You can use wildcard patterns such as `server/*.lua` to include all `.lua` files in a directory.
This makes it easier to manage large packages without listing every file individually.