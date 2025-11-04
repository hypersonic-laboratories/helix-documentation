---
title: Spawning an Actor
tags: [scripting]
---
# Spawning an Actor
This page explains how to create entities directly using `SpawnActor`, the low-level Unreal Engine method for spawning actors into the world.

/// info
If you want to use simplified constructors like `HVehicle()` or `Billboard()`, refer to the [API Reference](../../api/index.md) instead.
///

/// tip
This constructor will produce an `Actor` so it inherits all functions from [Actor](../../api/apiImport/classes/actor.md)
///

## Parameters

- class: `UClass` — The actor class to spawn (usually a Blueprint class)
- transform: `FTransform` — Location, rotation, and scale for the new actor
- collisionHandling: `ESpawnActorCollisionHandlingMethod` — Optional (default: AlwaysSpawn)
- owner: `AActor` — Optional actor that owns the new entity
- instigator: `APawn` — Optional instigator (e.g., the pawn that created the entity)
- tag: `string` — Optional gameplay tag (used internally for classification or filtering)

/// warning
When loading Blueprint classes with `LoadClass()`, **always include the `_C` suffix** at the end of the asset path.
This refers to the generated **class** object, not the Blueprint asset itself.
///

```lua title="Spawn a Vehicle"
-- Blueprint Class
local ProjClass = LoadClass("/Game/Vehicles/BP_Car.BP_Car_C")

-- Location
local Transform = Transform()
Transform.Translation = Vector(1540, 6852, 1000) -- X, Y, Z
Transform.Rotation = Rotator(0, 90, 0):ToQuat() -- Pitch, Yaw, Roll (degrees, not radians)
Transform.Scale3D = Vector(2, 2, 2) -- Uniform scale (x2 size)

-- Constructor (HWorld globally available)
local Car = HWorld:SpawnActor(
    ProjClass,
    Transform,
    ESpawnActorCollisionHandlingMethod.AlwaysSpawn, -- (Optional)
    self, -- Owner (Optional)
    self.Instigator, -- Instigator (Optional)
    "Vehicle.BP_Car_C" -- Spawn tag (Optional)
)

if not Car then
    print("Failed to spawn vehicle!")
    return
end
```