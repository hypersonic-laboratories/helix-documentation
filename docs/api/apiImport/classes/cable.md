---
title: Cable
description: A Cable represents a Physics Constraint which joins two Actors with a rope-like visual representation between them
sidebar_position: 0
tags: [class]
---

<HeaderDeclaration type="Class" name="Cable" image="/img/docs/cable.jpg" />


HELIX **Cables** are composed primarily of two Unreal Engine components: a [Cable](https://docs.unrealengine.com/en-US/API/Plugins/CableComponent/UCableComponent/index.html) and a [PhysicsConstraint](https://docs.unrealengine.com/en-US/InteractiveExperiences/Physics/Constraints/ConstraintsBlueprints/index.html). The first is used for visual purposes only and the second one gives the effective physical effects that are applied to each end of the Cable.

///info

Cable **visuals** can be tweaked with `:SetForces()`, `:SetCableSettings()` and `:SetRenderingSettings()` methods. Those methods don’t have effect on the physics being applied and only have effects on the visual representation.

Cable **physics** can be tweaked with `:SetAngularLimits()` and `:SetLinearLimits()`.

///

After attaching the two sides of your cable, the physics can be tweaked to affect how the constraint will affect the objects.

## Examples

```lua title="Server/Index.lua"
local CableActor = Cable(Vector(0.0, 0.0, 60.0), true)

local Cube1 = StaticMesh(Vector(300, 300, 60), Quat(180, 0, 0, 1), 'helix::SM_Cube', true)
local Cube2 = StaticMesh(Vector(0, 0, 60), Quat(0, 180, 0, 1), 'helix::SM_Cube', true)
CableActor:AttachStartTo(Cube1, Vector(0, 0, 0), '')
CableActor:AttachEndTo(Cube2, Vector(0, 0, 0), '')
```

```lua title="Server/Index.lua"
local CableActor = Cable(Vector(0.0, 0.0, 60.0), true)
print(CableActor.Object) -- AActor
print(CableActor.CableComponent) -- UCableComponent
print(CableActor.PhysicsComponent) -- UPhysicsConstraintComponent
```

## Variables


| Name              |       Type             |
| ----------------  | ------------------- |
| CableComponent    | [UCableComponent](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Plugins/CableComponent/UCableComponent?application_version=5.5) |
| PhysicsComponent  | [UPhysicsConstraintComponent](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/PhysicsEngine/UPhysicsConstraintComponent?application_version=5.5) |

## Constructors

<ConstructorDeclaration type="Class" name="Cable" />

```lua
local CableActor = Cable(Vector(0.0, 0.0, 60.0), true)
```

| Type              |       Name        | Default | Description                                                              |
| ---------------  | :----------------- | ----- | ----------------------------------------------------------------------  |
| [Vector](../../structs/vector) | `StartLocation`   |         | The start location of the cable, this gets overridden upon attachment.   |
| boolean?           | `bEnableVisuals`  | `true`  | Whether the cable actor is visible                                       |

### Returns
```lua
table: {
    Object: AActor,
    CableComponent: UCableComponent,
    PhysicsComponent: UPhysicsConstraintComponent,
}
```

## Functions

<FunctionsDeclaration type="Class" name="Cable" />

### AttachStartTo
Attaches the start of a cable to another actor
```lua
Cable:AttachStartTo(TargetActor, RelativeLocation, Socket)
```

| Type | Name | Default | Description |
| ------------------ | ------------------ | ----------------- | ----------------------------------------------------------------------------- |
| [Actor](../base-classes/actor)             | `TargetActor`      |                   | The target actor you want to attach the start of the cable to.                |
| [Vector?](../../structs/vector) | `RelativeLocation` | `Vector(0, 0, 0)` | The offset for the start of the cable to be attached by.                      |
| string?             | `Socket`           |                   | The named socket you want to attach the root component of the cable actor to. | 

#### Returns
`boolean`: Whether the cable attached to the other actor successfully.

---
### AttachEndTo
Attaches the end of a cable to another actor
```lua
Cable:AttachEndTo(TargetActor, RelativeLocation, Socket)
```

| Type | Name | Default | Description |
| ---- | ----- | ----- | ------ |
| [Actor](../base-classes/actor)             | `TargetActor`      |                   | The target actor you want to attach the start of the cable to.                |
| [Vector?](../../structs/vector) | `RelativeLocation` | `Vector(0, 0, 0)` | The offset for the start of the cable to be attached by.                      |
| string?             | `Socket`           |                   | The named socket you want to attach the root component of the cable actor to. |

---
### DetachEnd
Detaches the end of the cable from the actor
```lua
Cable:DetachEnd()
```

---
### DetachStart
Detaches the start of the cable from the actor
```lua
Cable:DetachStart()
```

---
### SetCableSettings
Sets the cable settings, like length
```lua
Cable:SetCableSettings(Length, Segments, SolverIterations)
```

| Type | Name | Default | Description |
| ---- | ---- | ----- | ----- |
| number? | `CableLength` | 100.0 | The length of the Cable Component. |
| number? | `Segments` | 10 | The number of segments that the Cable Component is split into. |
| number? | `SolverIterations` | 0 | The number of solver iterations. |

---
### SetForces
Sets the vector of force to be applied to all particles in the cable
```lua
Cable:SetForces(Force, GravityScale)
```

| Type | Name | Default | Description |
| ---- | ---- | ------- | ----------- |
| [Vector](../../structs/vector) | `Force` | `Vector(0, 0, 0)` | The force vector to apply to the cable particles. |
| number? | `GravityScale` | `1.0` | The gravity scale to apply to the cable particles. |

---
### SetAngularLimits
Sets the angular limits for the cable
```lua
Cable:SetAngularLimits(Swing1Motion, Swing2Motion, TwistMotion, Swing1LimitAngle, Swing2LimitAngle, TwistLimitAngle)
```

| Type | Name | Default | Description |
| ---- | ---- | ------- | ----------- |
| [ConstraintMotion](../../enums/constraintmotion) | `Swing1Motion` | `Free` | Motion type for Swing1. |
| [ConstraintMotion](../../enums/constraintmotion) | `Swing2Motion` | `Free` | Motion type for Swing2. |
| [ConstraintMotion](../../enums/constraintmotion) | `TwistMotion` | `Free` | Motion type for Twist. |
| number? | `Swing1LimitAngle` | `0` | Limit angle for Swing1. |
| number? | `Swing2LimitAngle` | `0` | Limit angle for Swing2. |
| number? | `TwistLimitAngle` | `0` | Limit angle for Twist. |

---
### SetLinearLimits
Sets the linear limits for the cable
```lua
Cable:SetLinearLimits(XMotion, YMotion, ZMotion, Limit, Restitution, bUseSoftConstraint, Stiffness, Damping)
```

| Type | Name | Default | Description |
| ---- | ---- | ------- | ----------- |
| [ConstraintMotion](../../enums/constraintmotion) | `XMotion` | `Free` | Motion type for X axis. |
| [ConstraintMotion](../../enums/constraintmotion) | `YMotion` | `Free` | Motion type for Y axis. |
| [ConstraintMotion](../../enums/constraintmotion) | `ZMotion` | `Free` | Motion type for Z axis. |
| number? | `Limit` | `0` | Limit distance for motion. |
| number? | `Restitution` | `0` | Restitution factor. |
| boolean? | `bUseSoftConstraint` | `false` | Whether to use soft constraint. |
| number? | `Stiffness` | `0` | Stiffness of the constraint. |
| number? | `Damping` | `0` | Damping of the constraint. |

---
### SetRenderingSettings
Sets the rendering settings for the cable
```lua
Cable:SetRenderingSettings(Width, NumberOfSides, TileMaterial)
```

| Type | Name | Default | Description |
| ---- | ---- | ------- | ----------- |
| number? | `Width` | `6.0` | Width of the cable. |
| number? | `NumberOfSides` | `4` | Number of sides used to render the cable. |
| number? | `TileMaterial` | `1.0` | Tiling value for the material. |

---
### GetAttachedStartTo
Gets the actor that the start of the cable is attached to
```lua
Cable:GetAttachedStartTo()
```
#### Returns
[Actor](../base-classes/actor): The actor that the start of the cable is attached to

---
### GetAttachedEndTo
Gets the component referenced that the end of the cable is attached to
```lua
Cable:GetAttachedEndTo()
```
#### Returns
`ComponentReference`: [FComponentReference](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Engine/FComponentReference?application_version=5.5)

## Events

<EventsDeclaration type="Class" name="Cable" />
