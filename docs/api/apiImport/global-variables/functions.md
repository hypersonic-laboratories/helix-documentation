---
title: Functions
description: List of globally available functions
tags: [globals]
---

HELIX provides a library of global functions that can be used in Lua packages!
Consider these to be "shortcut" functions making your scripting experience better!

## 🌎 World Functions

### `SetHUDVisibility`
Sets the visibility of each HUD aspect.

- **Aspects**: `table<string, boolean>` - String indexed table of HUD aspects, and their values to update.
    - **Healthbar**: `boolean` - (Optional)
    - **Inventory**: `boolean` - (Optional)
    - **Speedometer**: `boolean` - (Optional)
    - **WeaponState**: `boolean` - (Optional)
    - **Shortcuts**: `boolean` - (Optional)

- <mark style="color:yellow;">returns</mark>: nil

---

## 🎮 Player Functions

### `GetAllPlayers`
Get all player controllers currently in the world.

- <mark style="color:yellow;">returns</mark>: [APlayerController[]](../classes/controller.md) - A table of all player controllers

---

### `GetPlayerPawn`
Get the pawn controlled by a player controller. If no player is specified, returns the local player's pawn.

- **Player**: [APlayerController](../classes/controller.md) - The player controller to get the pawn for (default `nil`)

- <mark style="color:yellow;">returns</mark>: `APawn` - The pawn controlled by the player, or nil if none exists

---

### `GetLocalPlayer`
Get the local player controller.

- <mark style="color:yellow;">returns</mark>: [APlayerController](../classes/controller.md) - The local player controller

---

### `GetPlayersInArea`
Get all players within a specified radius of the given coordinates.

- **Coords**: [Vector](./structs.md#vector) - The center point to search from
- **Radius**: `number` - The radius to search within (default `nil` - searches entire world)

- <mark style="color:yellow;">returns</mark>: [APlayerController[]](../classes/controller.md) - A table of player controllers within the area

---

### `GetClosestPlayer`
Find the nearest player to the specified coordinates, optionally within a maximum radius.

- **Coords**: [Vector](./structs.md#vector) - The center point to search from
- **Radius**: `number` - The maximum radius to search within (default `nil` - searches entire world)

- <mark style="color:yellow;">returns</mark>: `APlayerController, number` - The closest player controller and the distance to them, or nil if none found

---

## 🚶 Pawn Functions

### `GetAllPawns`
Get all character pawns currently in the world.

- <mark style="color:yellow;">returns</mark>: `table` - An array of all character pawns

---

### `GetPawnsInArea`
Get all pawns within a specified radius of the given coordinates.

- **Coords**: [Vector](./structs.md#vector) - The center point to search from
- **Radius**: `number` - The radius to search within (default `nil`)

- <mark style="color:yellow;">returns</mark>: `table` - An array of pawns within the area

---

### `GetClosestPawn`
Find the nearest pawn to the specified coordinates, optionally within a maximum radius.

- **Coords**: [Vector](./structs.md#vector) - The center point to search from
- **Radius**: `number` - The maximum radius to search within (default `nil`)

- <mark style="color:yellow;">returns</mark>: `APawn | nil, number | nil` - The closest pawn and the distance to them, or nil, nil if none found

---

### `IsPedInAnyVehicle`
Check if a pawn is currently inside a vehicle.

- **Pawn**: `APawn` - The pawn to check

- <mark style="color:yellow;">returns</mark>: `boolean` - True if the pawn is in a vehicle, false otherwise

---

### `GetVehiclePedIsIn`
Get the vehicle that a pawn is currently inside.

- **Pawn**: `APawn` - The pawn to check

- <mark style="color:yellow;">returns</mark>: `AVehicle | nil` - The vehicle the pawn is in, or nil if not in a vehicle

---

## 🚗 Vehicle Functions

### `GetAllVehicles`
Get all vehicles currently in the world.

- <mark style="color:yellow;">returns</mark>: [HVehicle[]](../classes/hvehicle.md) - An array of all vehicles

---

### `GetVehiclesInArea`
Get all vehicles within a specified radius of the given coordinates.

- **Coords**: [Vector](./structs.md#vector) - The center point to search from
- **Radius**: `number` - The radius to search within (default `nil`)

- <mark style="color:yellow;">returns</mark>: [HVehicle[]](../classes/hvehicle.md) - An array of vehicles within the area

---

### `GetClosestVehicle`
Find the nearest vehicle to the specified coordinates, optionally within a maximum radius.

- **Coords**: [Vector](./structs.md#vector) - The center point to search from
- **Radius**: `number` - The maximum radius to search within (default `nil`)

- <mark style="color:yellow;">returns</mark>: [HVehicle](../classes/hvehicle.md) `| nil, number | nil` - The closest vehicle and the distance to it, or nil, nil if none found

---

### `ClearAreaOfVehicles`
Destroy all vehicles within a specified radius of the given coordinates.

- **Coords**: [Vector](./structs.md#vector) - The center point of the area to clear
- **Radius**: `number` - The radius of the area to clear (default `nil`)

---

### `IsAreaClearOfVehicles`
Check if an area has no vehicles within a specified radius of the given coordinates.

- **Coords**: [Vector](./structs.md#vector) - The center point of the area to check
- **Radius**: `number` - The radius of the area to check (default `nil`)

- <mark style="color:yellow;">returns</mark>: `boolean` - True if no vehicles are in the area, false otherwise

---

### `DeleteVehicle`
Destroy a specific vehicle, removing it from the world.

- **Vehicle**: [HVehicle](../classes/hvehicle.md) - The vehicle to destroy

- <mark style="color:yellow;">returns</mark>: `boolean` - True if the vehicle was successfully destroyed, false otherwise

---

## 📍 Entity Functions

### `GetEntityCoords`
Get the world location of an entity.

- **Entity**: [AActor](../classes/actor.md) - The entity to get the location of

- <mark style="color:yellow;">returns</mark>: [Vector](./structs.md#vector) - The world location of the entity

---

### `GetEntityRotation`
Get the world rotation of an entity.

- **Entity**: [AActor](../classes/actor.md) - The entity to get the rotation of

- <mark style="color:yellow;">returns</mark>: [Rotator](./structs.md#rotator) - The world rotation of the entity

---

### `GetEntityHeading`
Get the yaw rotation (heading) of an entity.

- **Entity**: [AActor](../classes/actor.md) - The entity to get the heading of

- <mark style="color:yellow;">returns</mark>: `number` - The yaw rotation in degrees

---

### `SetEntityCoords`
Teleport an entity to the specified world location.

- **Entity**: [AActor](../classes/actor.md) - The entity to teleport
- **Coords**: [Vector](./structs.md#vector) - The world location to teleport to

---

### `SetEntityRotation`
Set the world rotation of an entity.

- **Entity**: [AActor](../classes/actor.md) - The entity to rotate
- **Rotation**: [Rotator](./structs.md#rotator) - The world rotation to set

---

### `SetEntityHeading`
Set the yaw rotation (heading) of an entity.

- **Entity**: [AActor](../classes/actor.md) - The entity to rotate
- **Heading**: `number` - The yaw rotation in degrees to set

---

### `DeleteEntity`
Destroy an entity, removing it from the world.

- **Entity**: [AActor](../classes/actor.md) - The entity to destroy

---

### `DoesEntityExist`
Check if an entity is valid and exists in the world.

- **Entity**: [AActor](../classes/actor.md) - The entity to check

- <mark style="color:yellow;">returns</mark>: `boolean` - True if the entity exists and is valid, false otherwise

---

### `AttachActorToActor`
Attaches the RootComponent of this Actor to the supplied actor, optionally at a named socket.

- **Actor**: [AActor](../classes/actor.md) - The Actor to attach
- **TargetActor**: [AActor](../classes/actor.md) - The Actor to attach to, becoming the parent Actor
- **Location**: [Vector](./structs.md#vector) - The relative location to use after attachment. (default [Vector(0, 0, 0)](./structs.md#vector))
- **Rotation**: [Rotator](./structs.md#rotator) - The relative rotation to use after attachment. (default [Rotator(0, 0, 0)](./structs.md#rotator))
- **Socket**: `string` - The socket/bone name to attach to. (default `''`)
- **AttachmentRules**: `table<string, AttachmentRule>` - A table of attachment behaviour for each rule type. (default [AttachmentRule.KeepRelative](./enums.md#attachmentrule:~:text=AttachmentRule.KeepRelative))
    - **Location**: [AttachmentRule](./enums.md#attachmentrule)
    - **Rotation**: [AttachmentRule](./enums.md#attachmentrule)
    - **Scale**: [AttachmentRule](./enums.md#attachmentrule)
- **bDisableCollision**: `boolean` - (default `true`)

- <mark style="color:yellow;">returns</mark>: `boolean`

---

### `AttachActorToComponent`
Attaches the RootComponent of this Actor to the supplied component, optionally at a named socket.

- **Actor**: [AActor](../classes/actor.md) - The Actor to attach
- **TargetComponent**: `USceneComponent` - The component to attach to
- **Location**: [Vector](./structs.md#vector) - The relative location to use after attachment. (default [Vector(0, 0, 0)](./structs.md#vector))
- **Rotation**: [Rotator](./structs.md#rotator) - The relative rotation to use after attachment. (default [Rotator(0, 0, 0)](./structs.md#rotator))
- **Socket**: `string` - The socket/bone name to attach to on the target component. (default `''`)
- **AttachmentRules**: `table<string, AttachmentRule>` - A table of attachment behaviour for each rule type. (default [AttachmentRule.KeepRelative](./enums.md#attachmentrule:~:text=AttachmentRule.KeepRelative))
    - **Location**: [AttachmentRule](./enums.md#attachmentrule)
    - **Rotation**: [AttachmentRule](./enums.md#attachmentrule)
    - **Scale**: [AttachmentRule](./enums.md#attachmentrule)
- **bDisableCollision**: `boolean` - (default `true`)

- <mark style="color:yellow;">returns</mark>: `boolean`

---

### `DetachActor`
Detaches the RootComponent of this Actor from any SceneComponent it is currently attached to.

- **Actor**: [AActor](../classes/actor.md) - The Actor to detach
- **DetachmentRules**: `table<string, DetachmentRule>` - A table of detachment behaviour for each rule type. (default [DetachmentRule.KeepRelative](./enums.md#detachmentrule:~:text=DetachmentRule.KeepRelative))
    - **Location**: [DetachmentRule](./enums.md#detachmentrule)
    - **Rotation**: [DetachmentRule](./enums.md#detachmentrule)
    - **Scale**: [DetachmentRule](./enums.md#detachmentrule)

---

## 📏 Distance Functions

### `GetDistanceBetweenCoords`
Calculate the distance between two world positions.

- **Coords1**: [Vector](./structs.md#vector) - The first position
- **Coords2**: [Vector](./structs.md#vector) - The second position

- <mark style="color:yellow;">returns</mark>: `number` - The distance between the two positions

---

### `GetDistanceBetweenActors`
Calculate the distance between two actors.

- **Actor1**: [AActor](../classes/actor.md) - The first actor
- **Actor2**: [AActor](../classes/actor.md) - The second actor

- <mark style="color:yellow;">returns</mark>: `number | nil` - The distance between the two actors, or nil if either actor is invalid