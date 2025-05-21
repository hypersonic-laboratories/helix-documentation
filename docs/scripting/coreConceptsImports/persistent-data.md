---
title: Persistent Data
tags: [scripting]
---

# Persistent Data
HELIX provides a built-in system for saving and loading data to disk using a persistent storage layer. This is ideal for tracking progress, saving custom settings, or keeping game state across sessions.
Behind the scenes, HELIX uses **SQLite**, but you interact with it using simple and intuitive Lua functions.

---

## 📥 Saving Data
To save data, use:

```lua title="Example"
Package.SetPersistentData(key, value)
```

- `key` is a string (e.g. `"player_data"`)
- `value` can be any Lua type (table, string, number, etc.)

```lua title="Example"
local my_data = {
    level = 12,
    xp = 3200,
    name = "Nova"
}

Package.SetPersistentData("player_stats", my_data)
```

This will write:

```lua title="Example"
player_stats = {level = 12, xp = 3200, name = "Nova"}
```

---

## 📤 Loading Data
To retrieve previously saved data, use:

```lua title="Example"
local all_data = Package.GetPersistentData()
```

You can then access your key like this:

```lua title="Example"
local stats = Package.GetPersistentData().player_stats
print(stats.level) -- Output: 12
```

---

## 🔐 Best Practices

- Use simple keys to organize your data (e.g. `"settings"`, `"profile_data"`, `"last_used_weapon"`)
- Keep client-only data lightweight
- Always check for `nil` before accessing keys that might not exist yet

```lua title="Example"
local settings = Package.GetPersistentData().user_settings
if settings then
    ApplySettings(settings)
end
```

---

## Summary

- `SetPersistentData(key, value)` saves a value
- `GetPersistentData()` retrieves the full table
- Data persists across sessions and is stored per server

Persistent data gives you a powerful way to build long-term features like player progression, saved preferences, or persistent world states.