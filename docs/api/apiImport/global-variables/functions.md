---
title: Functions
description: List of globally available functions
tags: [globals]
---

HELIX provides a library of global functions that can be used in Lua packages!
Consider these to be "shortcut" functions making your scripting experience better!

## 🌎 World Functions

| Function | Description | Returns |
|----------|-------------|---------|
| `SetHUDVisibility` | Sets the visibility of each HUD aspect | None |

```lua title="SetHUDVisibility"
-- Disable all HUD aspects
SetHUDVisibility({
    Healthbar = false,
    Inventory = false,
    Speedometer = false,
    WeaponState = false,
    Shortcuts = false,
})
```

## 🎮 Player Functions

| Function | Description | Returns |
|----------|-------------|---------|
| `GetAllPlayers()` | Get all player controllers in the world | Table of player controllers |
| `GetPlayerPawn(player)` | Get the pawn for a player controller (or local if player is nil) | Pawn object |
| `GetLocalPlayer()` | Get the local player controller | Player controller |
| `GetPlayersInArea(coords, radius)` | Get all players within radius of coords (radius optional) | Table of players |
| `GetClosestPlayer(coords, radius)` | Find nearest player to coords (radius optional) | player, distance |

## 🚶 Pawn Functions

| Function | Description | Returns |
|----------|-------------|---------|
| `GetAllPawns()` | Get all character pawns in the world | Table of pawns |
| `GetPawnsInArea(coords, radius)` | Get all pawns within radius of coords (radius optional) | Table of pawns |
| `GetClosestPawn(coords, radius)` | Find nearest pawn to coords (radius optional) | pawn, distance |
| `IsPedInAnyVehicle(pawn)` | Check if pawn is inside a vehicle | Boolean |
| `GetVehiclePedIsIn(pawn)` | Get the vehicle a pawn is currently in | Vehicle or nil |

## 🚗 Vehicle Functions

| Function | Description | Returns |
|----------|-------------|---------|
| `GetAllVehicles()` | Get all vehicles in the world | Table of vehicles |
| `GetVehiclesInArea(coords, radius)` | Get all vehicles within radius of coords (radius optional) | Table of vehicles |
| `GetClosestVehicle(coords, radius)` | Find nearest vehicle to coords (radius optional) | vehicle, distance |
| `ClearAreaOfVehicles(coords, radius)` | Destroy all vehicles in area (radius optional) | None |
| `IsAreaClearOfVehicles(coords, radius)` | Check if area has no vehicles (radius optional) | Boolean |
| `DeleteVehicle(vehicle)` | Destroy a specific vehicle | Boolean (success) |

## 📍 Entity Functions

| Function | Description | Returns |
|----------|-------------|---------|
| `GetEntityCoords(entity)` | Get entity's location | FVector |
| `GetEntityRotation(entity)` | Get entity's rotation | FRotator |
| `GetEntityHeading(entity)` | Get entity's yaw rotation | Number |
| `SetEntityCoords(entity, coords)` | Teleport entity to coords | None |
| `SetEntityRotation(entity, rotation)` | Set entity's rotation | None |
| `SetEntityHeading(entity, heading)` | Set entity's yaw rotation | None |
| `DeleteEntity(entity)` | Destroy any entity | None |
| `DoesEntityExist(entity)` | Check if entity is valid | Boolean |

## 📏 Distance Functions

| Function | Description | Returns |
|----------|-------------|---------|
| `GetDistanceBetweenCoords(coords1, coords2)` | Calculate distance between two positions | Number |
| `GetDistanceBetweenActors(actor1, actor2)` | Calculate distance between two actors | Number or nil |