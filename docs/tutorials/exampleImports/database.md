---
title: Database Communication
tags: [scripting]
---
# Database Communication
This page provides real-world examples of how to use the shared SQLite database from Lua using the `Database` module

/// tip
The database connection only needs to be initialized once, stays open for the entire runtime and is reused across queries for optimal performance
///

```lua title="Open Database Connection"
-- Provide a single file name searched/created for/in the saved directory
Database.Initialize("MyServerDB.sqlite")

-- OR

-- Provide a full path to your desired location
Database.Initialize("D:/UnrealServers/MyServerDB.sqlite")
```

```lua title="Create a Database Table"
local ok = Database.Execute([[
    CREATE TABLE IF NOT EXISTS Players (
        ID TEXT PRIMARY KEY,
        Name TEXT NOT NULL,
        Cash INTEGER DEFAULT 0,
        CreatedAt INTEGER NOT NULL
    )
]])

if not ok then
    error("Failed to create Players table")
end
```

```lua title="Insert/Update/Delete Data"
-- INSERT

local ok = Database.Execute("INSERT INTO Players (ID, Name, Cash, CreatedAt) VALUES (?, ?, ?, ?)",
    { "player_123", "Joshua", 500, tostring(os.time()) }
)

if not ok then
    print("Failed to insert player.")
end

-- UPDATE

local ok = Database.Execute("UPDATE Players SET Cash = ? WHERE ID = ?", { 750, "player_123" })

if not ok then
    print("Failed to update player cash.")
end

-- DELETE

local ok = Database.Execute("DELETE FROM Players WHERE ID = ?", { "player_123" })

if not ok then
    print("Failed to delete player.")
end
```

```lua title="Fetching Data"
local rows = Database.Select("SELECT Name, Cash FROM Players WHERE ID = ?",{ "player_123" })

if #rows > 0 then
    local player = rows[1]
    print("Player:", player.Name, "Cash:", player.Cash)
else
    print("Player not found.")
end

local rows = Database.Select("SELECT Name, Cash FROM Players ORDER BY Cash DESC LIMIT 5")

for i, player in ipairs(rows) do
    print(i .. ".", player.Name, "-", player.Cash)
end
```

```lua title="Asynchronous Execution"
Database.ExecuteAsync("INSERT INTO Players (ID, Name, Cash, CreatedAt) VALUES (?, ?, ?, ?)",
    { "player_async", "AsyncJoe", 300, os.time() },
    function(success)
        if not success then
            print("Failed to insert async player")
        end
    end
)

Database.SelectAsync("SELECT Name, Cash FROM Players ORDER BY Cash DESC LIMIT 5", {},
    function(rows)
        for i, player in ipairs(rows) do
            print(i .. ".", player.Name, "-", player.Cash)
        end
    end
)
```

```lua title="Database Closure"
Database.Close()
```