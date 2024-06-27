---
title: JSON
description: JSON library, useful for sending data from Client's Package to WebUI environment
tags: [utility-class]
---

<HeaderDeclaration type="UtilityClass" name="JSON" is_static />


## Examples

```lua
local encoded_value = JSON.stringify({ 1, 2, 3, { x = 10, y = Vector(1, 2, 3) }, "he" })
-- Returns '[1,2,3,{"x":10},"he"]'

local decoded_value = JSON.parse('[1,2,3,{"x":10},"he"]')
-- Returns { 1, 2, 3, { x = 10 }, "he" }
```


///note

Note that custom classes (e.g. **Vehicle**, **Character**, **Prop**... etc) or **functions** are not supported to be stringified and will be nulified.

Structs (e.g. **Vector**, **Rotator**, **Color**... etc) are supported and will be parsed/stringified properly!

///


## Static Functions

<StaticFunctionsDeclaration type="UtilityClass" name="JSON" />
