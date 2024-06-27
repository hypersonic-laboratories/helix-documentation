---
title: CharacterSimple
description: CharacterSimple is a simpler Character implementation with basic Movement implementation. Aimed for custom NPCs or basic Pawns
sidebar_position: 0
tags: [class]
---

<HeaderDeclaration type="Class" name="CharacterSimple" />


## Examples

```lua title="Server/Index.lua"
-- Spawns a Stack-O-Bot Character
local stack_o_bot = CharacterSimple(Vector(100, 0, 100), Rotator(0, 0, 0), "helix::SK_StackOBot", "helix::ABP_StackOBot")
stack_o_bot:SetSpeedSettings(275, 150)
```


## Constructors

<ConstructorDeclaration type="Class" name="CharacterSimple" />


## Static Functions

<StaticFunctionsDeclaration type="Class" name="CharacterSimple" />


## Functions

<FunctionsDeclaration type="Class" name="CharacterSimple" />


## Events

<EventsDeclaration type="Class" name="CharacterSimple" />
