---
title: HELIXTable
description: Utility class for working with Lua tables in a functional style
tags: [utility-class]
---
<HeaderDeclaration type="UtilityClass" name="HELIXTable" is_static />

## Overview

The `HELIXTable` class provides helper functions for table operations such as mapping, filtering, merging, slicing, and more. These are inspired by functional programming concepts and common Lua table patterns.

---

## Static Functions
<StaticFunctionsDeclaration type="UtilityClass" name="HELIXTable" />

### `HELIXTable.dump(tbl, indent?)`
Pretty-prints the structure of a Lua table, helpful for debugging nested data

```lua title="Example"
HELIXTable.dump({ a = 1, b = { c = 2 } })
-- Output:
-- {
--     "a" = 1
--     "b" = {
--         "c" = 2
--     }
-- }
```

---

### `HELIXTable.find(table, value, recursive?, path?)`
Searches a table for a specific value. If recursive is true, it will search nested tables and return the path to the value

```lua title="Example"
local path = HELIXTable.find({ a = { b = { c = 5 } } }, 5, true)
-- Returns: { "a", "b", "c" }
```

---

### `HELIXTable.filter(tbl, predicate)`
Filters a table using a predicate function, returning a new table with only the matching entries

```lua title="Example"
local even = HELIXTable.filter({1, 2, 3, 4}, function(v) return v % 2 == 0 end)
-- Returns: { [2] = 2, [4] = 4 }
```

---

### `HELIXTable.map(tbl, mapper)`
Applies a transformation function to every value in a table and returns the resulting table

```lua title="Example"
local doubled = HELIXTable.map({1, 2, 3}, function(v) return v * 2 end)
-- Returns: { [1] = 2, [2] = 4, [3] = 6 }
```

---

### `HELIXTable.merge(...)`
Combines multiple tables into one. Later values overwrite earlier ones for conflicting keys

```lua title="Example"
local result = HELIXTable.merge({ a = 1 }, { b = 2, a = 3 })
-- Returns: { a = 3, b = 2 }
```

---

### `HELIXTable.deepMerge(...)`
Recursively merges multiple tables. Nested tables are merged rather than replaced

```lua title="Example"
local result = HELIXTable.deepMerge({ config = { a = 1 } }, { config = { b = 2 } })
-- Returns: { config = { a = 1, b = 2 } }
```

---

### `HELIXTable.reduce(tbl, reducer, initialValue)`
Reduces a table into a single result using a reducer function

```lua title="Example"
local sum = HELIXTable.reduce({1, 2, 3}, function(acc, v) return acc + v end, 0)
-- Returns: 6
```

---

### `HELIXTable.slice(tbl, start?, stop?, step?)`
Returns a sub-section of an array-like table

```lua title="Example"
local sub = HELIXTable.slice({1, 2, 3, 4, 5}, 2, 4)
-- Returns: {2, 3, 4}
```

---

### `HELIXTable.size(tbl)`
Returns the number of entries in the table (works for key-value pairs too)

```lua title="Example"
local count = HELIXTable.size({ a = 1, b = 2 })
-- Returns: 2
```

---

### `HELIXTable.shuffle(tbl)`
Randomizes the order of values in an array-like table

```lua title="Example"
local shuffled = HELIXTable.shuffle({ "apple", "banana", "cherry" })
-- Returns: A randomized array
```