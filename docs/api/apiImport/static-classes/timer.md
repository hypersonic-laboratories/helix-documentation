---
title: Timer
description: Execute of code at specified time intervals.
tags: [static-class]
---

<HeaderDeclaration type="StaticClass" name="Timer" is_static image={"/img/docs/stopwatch.webp"} />

///info

The shortest interval possible is equal to the local Tick Rate - usually at 33ms. On the Server this can vary depending on the Config.toml setting.

///


## Examples

```lua
-- creates a Interval to call a function at every 2 seconds
local my_interval = Timer.SetInterval(function(param1, param2)
    Console.Log("Triggered each 2 seconds! Param1: " .. param1 .. ". Param2: " .. param2)
end, 2000, "awesome param 1", 456)

-- cancels the Interval
Timer.ClearInterval(my_interval)

-- creates a Timeout to call my_function in 5 seconds, once - passing a parameter
Timer.SetTimeout(function(my_param)
    Console.Log("HELIX " .. my_param)
end, 5000, "world")
```

```lua
local character = Character(...)

local my_timer = Timer.SetTimeout(function(_character)
    -- Do something with _character
    -- Ex: Destroy the character after 10 seconds
    _character:Destroy()
end, 10000, character)

-- Binds the Timer to the Character
-- This will ensure it will never trigger if the character is destroyed before it
-- With this you don't need to validate if the '_character' parameter is valid
Timer.Bind(my_timer, character)
```


## Static Functions

<StaticFunctionsDeclaration type="StaticClass" name="Timer" />


## Events

<EventsDeclaration type="StaticClass" name="Timer" />
