---
title: Persistent Data
tags: [scripting]
---
# Persistent Data
HELIX provides a built-in SQLite database system for persistent data storage. This is ideal for tracking progress, saving custom settings, or keeping game state across sessions.
The Database class provides both synchronous and asynchronous operations for maximum flexibility.

---

## 🔧 Initialization
Before using the database, you must initialize it with a file path:

- The database file will be created in the project's saved directory if it doesn't exist
- You only need to call this once on the server, typically at startup

```lua title="Example"
Database.Initialize("my_game_data.db")
```

---

## 📝 Executing Commands
For non-SELECT operations (INSERT, UPDATE, DELETE, CREATE TABLE), use:

```lua title="Example"
Database.Execute(query, params)
```

- `query` is your SQL statement as a string
- `params` is an optional array of parameters for prepared statements
- Returns `true` on success, `false` on failure

```lua title="Example"
-- Create a table
Database.Execute("CREATE TABLE IF NOT EXISTS players (id INTEGER PRIMARY KEY, name TEXT, level INTEGER)")

-- Insert data
Database.Execute("INSERT INTO players (name, level) VALUES (?, ?)", {"Nova", 12})

-- Update data
Database.Execute("UPDATE players SET level = ? WHERE name = ?", {15, "Nova"})
```

---

## 📥 Querying Data
To retrieve data with SELECT queries, use:

```lua title="Example"
local results = Database.Select(query, params)
```

This returns an array of rows, where each row has a .Columns property:

```lua title="Example"
local players = Database.Select("SELECT name, level FROM players WHERE level > ?", {10})

for _, row in ipairs(players) do
    print("Player:", row.Columns.name, "Level:", row.Columns.level)
end
```

---

## ⚡ Async Operations
For better performance, especially with large operations, use the async versions:

```lua title="Example"
-- Async execute
Database.ExecuteAsync("INSERT INTO players (name, level) VALUES (?, ?)", {"Storm", 8}, function(success)
    if success then
        print("Player added successfully")
    else
        print("Failed to add player")
    end
end)

-- Async select
Database.SelectAsync("SELECT * FROM players", {}, function(results)
    print("Found", #results, "players")
    for _, row in ipairs(results) do
        print(row.Columns.name)
    end
end)
```

---

## 🔐 Best Practices

- Always initialize the database before use
- Use prepared statements with parameters to prevent SQL injection
- Handle potential failures by checking return values or callback parameters
- Consider using async operations for large datasets to avoid blocking the main thread
- Always check if results exist before accessing them

---

## Summary

- `Database.Initialize(path)` sets up the database file
- `Database.Execute(query, params)` runs non-SELECT commands synchronously
- `Database.Select(query, params)` retrieves data synchronously
- `Database.ExecuteAsync()` and `Database.SelectAsync()` provide non-blocking alternatives
- All operations support parameterized queries for security

The Database class gives you full SQL power for complex data relationships, queries, and persistent storage needs.