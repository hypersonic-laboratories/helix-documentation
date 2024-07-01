---
title: HELIXTable
description: A table containing useful and aux table functions
tags: [utility-class]
---

<HeaderDeclaration type="UtilityClass" name="NanosTable" open_source_url="NanosTable.lua" is_static />


## Examples

```lua
local table = {
	"my_key" = 123,
	[2] = "my_value"
}

local dump_text = HELIXTable.Dump(table)

Console.Log(dump_text)

-- Outputs Text
--[[
{
   "my_key": 123,
	2 = "my_value"
}
--]]
```

## Static Functions

<StaticFunctionsDeclaration type="UtilityClass" name="NanosTable" />
