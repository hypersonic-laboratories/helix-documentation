---
title: Database
tags: [base-class]
---
The `Database` module makes it easy to use an SQLite database in your Lua scripts. You can store and load data like player info, settings, or anything else — and you don’t need to worry about opening or closing the database yourself. Just set it up once and run your queries.

## Functions

### `Initialize`
Sets the file path for your database. This only needs to be called once.

- path: `string` — where to store the .db file

```lua title="Example"
Database.Initialize('Saved/Database/lua.db')
```

---

### `Execute`
Runs a SQL command like `CREATE TABLE`, `INSERT`, or `UPDATE`.

- query: `string`
- params: `table`
- <mark style="color:yellow;">returns</mark>: `boolean`

```lua title="Example"
Database.Execute('CREATE TABLE IF NOT EXISTS PlayerData (PlayerID TEXT PRIMARY KEY, PlayerName TEXT, Score INTEGER)')
```

---

### `ExecuteAsync`
Same as `Execute`, but runs in the background so it won’t freeze the game.

- query: `string`
- params: `table`
- callback: `function`(success: boolean)

```lua title="Example"
Database.ExecuteAsync('DELETE FROM PlayerData WHERE PlayerID = ?',{ 'p01' },function(success)
    print("Deleted:", success)
end)
```

---

### `Select`
Runs a SQL `SELECT` query and returns a list of rows.

- query: `string`
- params: `table`
- <mark style="color:yellow;">returns</mark>: `table` — each row has .Columns

```lua title="Example"
local results = Database.Select('SELECT PlayerName, Score FROM PlayerData WHERE PlayerID = ?',{ 'p01' })

for _, row in ipairs(results) do
    print(row.Columns.PlayerName, row.Columns.Score)
end
```

---

### `SelectAsync`
Same as `Select`, but runs in the background

- query: `string`
- params: `table`
- callback: `function`

```lua title="Example"
Database.SelectAsync('SELECT * FROM PlayerData', {}, function(rows)
    for _, row in ipairs(rows) do
        print("Player:", row.Columns.PlayerName)
    end
end)
```