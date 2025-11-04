---
title: Trigger
description:
sidebar_position: 0
tags: [class]
---
<HeaderDeclaration type="Class" name="Trigger"/>
Trigger creates a shape-based volume in the world that detects when other actors overlap it.
These triggers are useful for gameplay logic like entering zones, starting scripted events, teleporting players, or detecting proximity.
Supported shapes include spheres, boxes, and capsules. You can assign a Lua callback to respond to overlaps and optionally restrict which classes are allowed to trigger them

/// tip
`Trigger` is an `Actor` so it inherits all functions from [Actor](actor.md)
///

## Constructor
<ConstructorDeclaration type="Class" name="Trigger" />

```lua title="Example"
local trig = Trigger(
	Vector(0, 0, 200),
	Rotator(),
	Vector(100),
	TriggerType.Sphere,
	true,
	function(self, other) print(other:GetName()) end,
	Color(1, 0, 0, 0.5)
)
```

| Name               | Type       | Default                   | Description                                                                 |
|--------------------|------------|---------------------------|-----------------------------------------------------------------------------|
| `Location`         | `Vector`   | `(0,0,0)`                 | World position for the trigger                                              |
| `Rotation`         | `Rotator`  | `(0,0,0)`                 | World rotation                                                              |
| `Extent`           | `Vector`   | `(100,100,100)`           | Shape extents (radius, box half-size, or capsule radius/height)            |
| `TriggerType`      | `enum`     | `TriggerType.Sphere`      | Shape of the volume — Sphere, Box, or Capsule                              |
| `bVisible`         | `boolean`  | `false`                   | If true, draws a semi-transparent debug shape                               |
| `CallbackFunction` | `function` | **Required**              | Function called on actor overlap                                            |
| `Color`            | `Color`    | `(0,1,0,0.5)`             | Debug color if visible                                                      |
| `OverlapOnlyClasses` | `table`  | `{}`                      | Optional array of UClass paths to restrict overlap (e.g. only `/Script/Engine.Pawn`) |