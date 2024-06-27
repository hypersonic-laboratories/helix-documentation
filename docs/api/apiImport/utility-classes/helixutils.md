---
title: HELIXUtils
description: A table containing useful and aux functions
tags: [utility-class]
slug: helixutils
---

<HeaderDeclaration type="UtilityClass" name="NanosUtils" is_static is_open_source />


## Examples

```lua
local table = {
	"my_key" = 123,
	[2] = "my_value"
}

local dump_text = HELIXUtils.Dump(table)

Console.Log(dump_text)

-- Outputs Text
--[[
{
	"my_key": 123,
	2 = "my_value"
}
--]]
```

```lua
local arg1 = math.random()
local arg2 = math.random()

HELIXUtils.Benchmark("My Heavy Operation", 1000, function(param1, param2)
    -- Do some heavy operations here
    local result = param1 * param2
end, arg1, arg2)

-- Outputs Text: 'Benchmark 'My Heavy Operation' (x1000) took 1.5ms.'
```


## Static Functions

<StaticFunctionsDeclaration type="UtilityClass" name="NanosUtils" />
