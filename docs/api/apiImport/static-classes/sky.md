---
title: Sky
description: Interact with built-in Sky & Weather system.
tags: [static-class]
---

<HeaderDeclaration type="StaticClass" name="Sky" is_static image={"/img/docs/sky.webp"} />

HELIX natively integrates [Ultra Dynamic Sky](https://www.unrealengine.com/marketplace/en-US/product/ultra-dynamic-sky/), one of best Unreal Marketplace Asset Packs, it provides a dynamic sky and weather solution for games!

Through the `Sky` class, we expose it's methods to allow customizing it's parameters in real time!


## Examples

```lua title="Client/Index.lua"
-- Spawns a new Ultra Dynamic Sky actor
Sky.Spawn()

-- Sets the time to 16:30
Sky.SetTimeOfDay(16, 30)
```


## Static Functions

<StaticFunctionsDeclaration type="StaticClass" name="Sky" />


## Events

<EventsDeclaration type="StaticClass" name="Sky" />