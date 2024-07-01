---
title: Trigger
description: A Trigger class is a utility class to trigger events when any Entity enters an Area
sidebar_position: 0
tags: [class]
---

<HeaderDeclaration type="Class" name="Trigger" image="/img/docs/trigger.webp" />


## Examples

```lua
local sphere_trigger = Trigger(Vector(-200, 100, 500), Rotator(), Vector(100), TriggerType.Sphere, true, Color(1, 0, 0))

sphere_trigger:Subscribe("BeginOverlap", function(trigger, actor_triggering)
    Console.Log("Something entered my Sphere Trigger")
end)

local box_trigger = Trigger(Vector(300, 200, 500), Rotator(0, 45, 0), Vector(150, 150, 150), TriggerType.Box, true, Color(0, 1, 0))

box_trigger:Subscribe("BeginOverlap", function(trigger, actor_triggering)
    Console.Log("Something entered my Box Trigger")
end)

box_trigger:Subscribe("EndOverlap", function(trigger, actor_triggering)
    Console.Log("Something left my Box Trigger")
end)
```


## Constructors

<ConstructorDeclaration type="Class" name="Trigger" />


## Static Functions

<StaticFunctionsDeclaration type="Class" name="Trigger" />


## Functions

<FunctionsDeclaration type="Class" name="Trigger" />


## Events

<EventsDeclaration type="Class" name="Trigger" />
