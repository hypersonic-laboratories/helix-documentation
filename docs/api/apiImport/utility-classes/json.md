---
title: JSON
description: JSON library, useful for sending data from Client's Package to WebUI environment
tags: [utility-class]
---
<HeaderDeclaration type="UtilityClass" name="JSON" is_static />

///note
Note that custom classes (e.g. **Vehicle**, **Character**, **Prop**... etc) or **functions** are not supported to be stringified and will be nulified.
Structs (e.g. **Vector**, **Rotator**, **Color**... etc) are supported and will be parsed/stringified properly!
///

## Static Functions

`JSON.stringify`

Converts a Lua table into a JSON-formatted string.
Useful for sending structured data from Lua scripts to external interfaces such as WebUI environments or server communications.

```lua title="Example"
local playerData = {
    id = 42,
    name = "Alex",
    scores = { 100, 250, 300 },
    position = Vector(1.0, 2.0, 3.0)
}

local jsonString = JSON.stringify(playerData)

-- Returns '{"id":42,"name":"Alex","scores":[100,250,300],"position":{"x":1.0,"y":2.0,"z":3.0}}'
```

`JSON.parse`

Converts a JSON-formatted string into a Lua table, enabling easy manipulation and access within Lua scripts.
Useful for parsing data received from external services, configuration files, or WebUI inputs.

```lua title="Example"
local jsonString = '{"id":42,"name":"Alex","scores":[100,250,300],"position":{"x":1.0,"y":2.0,"z":3.0}}'

local playerData = JSON.parse(jsonString)

-- Returns Lua table:
-- {
--     id = 42,
--     name = "Alex",
--     scores = {100, 250, 300},
--     position = { x = 1.0, y = 2.0, z = 3.0 }
-- }
```