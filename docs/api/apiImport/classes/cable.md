---
title: Cable
description: A Cable represents a Physics Constraint which joins two Actors with a rope-like visual representation between them
sidebar_position: 0
tags: [class]
---

HELIX **Cables** are composed primarily of two Unreal Engine components: a [Cable](https://docs.unrealengine.com/en-US/API/Plugins/CableComponent/UCableComponent/index.html) and a [PhysicsConstraint](https://docs.unrealengine.com/en-US/InteractiveExperiences/Physics/Constraints/ConstraintsBlueprints/index.html). The first is used for visual purposes only and the second one gives the effective physical effects that are applied to each end of the Cable.

///info

Cable **visuals** can be tweaked with `:SetForces()`, `:SetCableSettings()` and `:SetRenderingSettings()` methods. Those methods don’t have effect on the physics being applied and only have effects on the visual representation.

Cable **physics** can be tweaked with `:SetAngularLimits()` and `:SetLinearLimits()`.

///

## Example

```lua title="Example"
local CableActor = Cable(Vector(0.0, 0.0, 60.0), true)
local Cube1 = StaticMesh(Vector(52.684121, -37.863267, 92.023095), Quat(180, 0, 0, 1), '/Engine/BasicShapes/Cube.Cube', true)
local Cube2 = StaticMesh(Vector(44.109754, -534.058274, 91.712091), Quat(0, 180, 0, 1), '/Engine/BasicShapes/Cube.Cube', true)
CableActor:AttachStartTo(Cube1, Vector(0, 0, 0), '')
CableActor:AttachEndTo(Cube2, Vector(0, 0, 0), '')
```

## Variables


| Name              |       Type             |
| ----------------  | ------------------- |
| CableComponent    | [UCableComponent](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Plugins/CableComponent/UCableComponent?application_version=5.5) |
| PhysicsComponent  | [UPhysicsConstraintComponent](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/PhysicsEngine/UPhysicsConstraintComponent?application_version=5.5) |

## Constructor

- <mark style="color:yellow;">returns</mark>: `table`

```lua
local CableActor = Cable(Vector(0.0, 0.0, 60.0), true)
print(CableActor.Object) -- AActor
print(CableActor.CableComponent) -- UCableComponent
print(CableActor.PhysicsComponent) -- UPhysicsConstraintComponent
```

| Type              |       Name        | Default | Description                                                              |
| ---------------  | :----------------- | ----- | ----------------------------------------------------------------------  |
| [Vector](../global-variables/structs.md/#vector) | `StartLocation`   |         | The start location of the cable, this gets overridden upon attachment.   |
| boolean?           | `bEnableVisuals`  | `true`  | Whether the cable actor is visible                                       |

## Functions

### AttachStartTo
Attaches the start of a cable to another actor

- TargetActor `Actor`: The actor to attach to.
- RelativeLocation `Vector`: Local offset from the attach point.
- Socket `string`: Optional socket name.
- <mark style="color:yellow;">returns</mark>: `boolean`

```lua
local success = CableActor:AttachStartTo(TargetActor, RelativeLocation, Socket)
```

---

### AttachEndTo
Attaches the end of a cable to another actor

- TargetActor: `Actor` — the actor to attach the end to
- RelativeLocation: `Vector` — local offset from the attach point
- Socket: `string` — optional socket name on the target

```lua
CableActor:AttachEndTo(TargetActor, RelativeLocation, Socket)
```

---

### DetachEnd
Detaches the end of the cable from the actor

```lua
CableActor:DetachEnd()
```

---

### DetachStart
Detaches the start of the cable from the actor

```lua
CableActor:DetachStart()
```

---

### SetCableSettings
Sets the cable settings, like length

- Length: `number` — rope length in Unreal units
- Segments: `number` — visual segment count (smoothness vs. cost)
- SolverIterations: `number` — extra solver passes for stability/quality

```lua
CableActor:SetCableSettings(Length, Segments, SolverIterations)
```

---

### SetForces
Sets the vector of force to be applied to all particles in the cable

- Force: `Vector` — constant world-space force per particle
- GravityScale: `number` — multiplier for rope gravity (e.g., `0.5` is lighter)

```lua
CableActor:SetForces(Force, GravityScale)
```

---

### SetAngularLimits
Sets the angular limits for the cable

- Swing1Motion: `ConstraintMotion` — `Free`, `Limited`, or `Locked`
- Swing2Motion: `ConstraintMotion` — `Free`, `Limited`, or `Locked`
- TwistMotion: `ConstraintMotion` — `Free`, `Limited`, or `Locked`
- Swing1LimitAngle: `number` — degrees, only used when motion is `Limited`
- Swing2LimitAngle: `number` — degrees, only used when motion is `Limited`
- TwistLimitAngle: `number` — degrees, only used when motion is `Limited`

```lua
CableActor:SetAngularLimits(Swing1Motion, Swing2Motion, TwistMotion, Swing1LimitAngle, Swing2LimitAngle, TwistLimitAngle)
```

---

### SetLinearLimits
Sets the linear limits for the cable

- XMotion: `ConstraintMotion` — `Free`, `Limited`, or `Locked`
- YMotion: `ConstraintMotion` — `Free`, `Limited`, or `Locked`
- ZMotion: `ConstraintMotion` — `Free`, `Limited`, or `Locked`
- Limit: `number` — distance limit used when motion is `Limited`
- Restitution: `number` — bounciness when hitting the limit
- bUseSoftConstraint: `boolean` — enables spring-like behavior
- Stiffness: `number` — spring stiffness when soft constraint is enabled
- Damping: `number` — spring damping when soft constraint is enabled

```lua
CableActor:SetLinearLimits(XMotion, YMotion, ZMotion, Limit, Restitution, bUseSoftConstraint, Stiffness, Damping)
```

---

### SetRenderingSettings
Sets the rendering settings for the cable

- Width: `number` — rope thickness in Unreal units
- NumberOfSides: `number` — cylinder sides (visual smoothness)
- TileMaterial: `number` — material tiling along the rope

```lua
CableActor:SetRenderingSettings(Width, NumberOfSides, TileMaterial)
```

---

### GetAttachedStartTo
Gets the actor that the start of the cable is attached to

- <mark style="color:yellow;">returns</mark>: [Actor](./actor.md)

```lua
CableActor:GetAttachedStartTo()
```

---

### GetAttachedEndTo
Gets the component referenced that the end of the cable is attached to

- <mark style="color:yellow;">returns</mark>: [FComponentReference](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Engine/FComponentReference?application_version=5.5)

```lua
CableActor:GetAttachedEndTo()
```