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
    - **Respawn**: `boolean` - (Optional)
    - **Minimap**: `boolean` - (Optional)

- <mark style="color:yellow;">returns</mark>: nil

---

### `IsServer`

Check if the current execution context is running on the server.

- <mark style="color:yellow;">returns</mark>: `boolean | nil` - True if running on the server, nil if world is unavailable

---

### `IsClient`

Check if the current execution context is running on the client.

- <mark style="color:yellow;">returns</mark>: `boolean | nil` - True if running on the client, nil if world is unavailable

---

### `GetLanguage`

Get the current language set in the engine.

- <mark style="color:yellow;">returns</mark>: `string | nil` - The current language string, or nil if unavailable

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

### `GetPlayerName`

Get the display name of a player.

- **Source**: [APlayerController](../classes/controller.md) - The player to get the name of (default `nil` - local player)

- <mark style="color:yellow;">returns</mark>: `string` - The player's display name

---

### `GetPlayerPing`

Get the ping of a player in milliseconds.

- **Source**: [APlayerController](../classes/controller.md) - The player to get the ping of (default `nil` - local player)

- <mark style="color:yellow;">returns</mark>: `number` - The player's ping in milliseconds

---

### `GetPlayerById`

Find a player controller by their numeric player ID.

- **PlayerId**: `number` - The player ID to search for

- <mark style="color:yellow;">returns</mark>: [APlayerController](../classes/controller.md) `| nil` - The player controller with the given ID, or nil if not found

---

### `GetPlayerId`

Get the numeric ID of a player.

- **Player**: [APlayerController](../classes/controller.md) - The player to get the ID of (default `nil` - local player)

- <mark style="color:yellow;">returns</mark>: `number | nil` - The player's numeric ID, or nil if unavailable

---

### `GetPlayerIdentifier`

Get the Helix user ID (unique identifier) of a player.

- **Player**: [APlayerController](../classes/controller.md) - The player to get the identifier of (default `nil` - local player)

- <mark style="color:yellow;">returns</mark>: `string | nil` - The player's Helix user ID, or nil if unavailable

---

### `GetPlayerWallet`

Get the wallet object of the local player.

- <mark style="color:yellow;">returns</mark>: `table | nil` - The local player's wallet, or nil if unavailable

---

### `GetPlayerEmail`

Get the email address of the local player.

- <mark style="color:yellow;">returns</mark>: `string | nil` - The local player's email address, or nil if unavailable

---

### `GetPlayerAvatar`

Get the avatar URL of the local player.

- <mark style="color:yellow;">returns</mark>: `string | nil` - The URL of the local player's avatar image, or nil if unavailable

---

### `OpenCharacterEditor`

Open the character customization UI for a player.

- **Source**: [APlayerController](../classes/controller.md) - The player to open the editor for (default `nil` - local player)

---

### `CloseCharacterEditor`

Close the character customization UI for a player.

- **Source**: [APlayerController](../classes/controller.md) - The player to close the editor for (default `nil` - local player)

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

### `SetEntityInvincible`

Toggle damage immunity on an entity using gameplay tags.

- **Entity**: [AActor](../classes/actor.md) - The entity to set invincibility for
- **Toggle**: `boolean` - True to enable invincibility, false to disable

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

---

## ❤️ Health Functions

### `GetHealth`

Get the current health of an actor.

- **Actor**: [AActor](../classes/actor.md) - The actor to get the health of

- <mark style="color:yellow;">returns</mark>: `number | nil` - The actor's current health, or nil if no health component found

---

### `GetMaxHealth`

Get the maximum health of an actor.

- **Actor**: [AActor](../classes/actor.md) - The actor to get the max health of

- <mark style="color:yellow;">returns</mark>: `number | nil` - The actor's maximum health, or nil if no health component found

---

### `GetHealthNormalized`

Get the normalized health of an actor (0.0 to 1.0).

- **Actor**: [AActor](../classes/actor.md) - The actor to get the normalized health of

- <mark style="color:yellow;">returns</mark>: `number | nil` - The actor's health as a value between 0 and 1, or nil if no health component found

---

### `GetArmor`

Get the current armor of an actor.

- **Actor**: [AActor](../classes/actor.md) - The actor to get the armor of

- <mark style="color:yellow;">returns</mark>: `number | nil` - The actor's current armor, or nil if no health component found

---

### `GetMaxArmor`

Get the maximum armor of an actor.

- **Actor**: [AActor](../classes/actor.md) - The actor to get the max armor of

- <mark style="color:yellow;">returns</mark>: `number | nil` - The actor's maximum armor, or nil if no health component found

---

### `GetArmorNormalized`

Get the normalized armor of an actor (0.0 to 1.0).

- **Actor**: [AActor](../classes/actor.md) - The actor to get the normalized armor of

- <mark style="color:yellow;">returns</mark>: `number | nil` - The actor's armor as a value between 0 and 1, or nil if no health component found

---

### `GetDeathState`

Get the death state of an actor.

- **Actor**: [AActor](../classes/actor.md) - The actor to get the death state of

- <mark style="color:yellow;">returns</mark>: `table | nil` - The actor's death state, or nil if no health component found

---

### `IsDeadOrDying`

Check if an actor is dead or in the process of dying.

- **Actor**: [AActor](../classes/actor.md) - The actor to check

- <mark style="color:yellow;">returns</mark>: `boolean` - True if the actor is dead or dying, false otherwise

---

### `GetDownedState`

Get the downed state of a character.

- **Actor**: [AActor](../classes/actor.md) - The character actor to check

- <mark style="color:yellow;">returns</mark>: `table | nil` - The character's downed state, or nil if no character health component found

---

### `IsDowned`

Check if a character is currently downed.

- **Actor**: [AActor](../classes/actor.md) - The character actor to check

- <mark style="color:yellow;">returns</mark>: `boolean` - True if the character is downed, false otherwise

---

### `ReviveFromDownedState`

Revive a character from a downed state.

- **Actor**: [AActor](../classes/actor.md) - The character actor to revive

- <mark style="color:yellow;">returns</mark>: `boolean` - True if the revive was successful, false otherwise

---

### `HealTarget`

Heal an actor by a specified amount.

- **TargetActor**: [AActor](../classes/actor.md) - The actor to heal
- **HealAmount**: `number` - The amount of health to restore

- <mark style="color:yellow;">returns</mark>: `boolean` - True if the heal was applied successfully, false otherwise

---

### `GiveArmorToTarget`

Give armor to an actor by a specified amount.

- **TargetActor**: [AActor](../classes/actor.md) - The actor to give armor to
- **ArmorAmount**: `number` - The amount of armor to give

- <mark style="color:yellow;">returns</mark>: `boolean` - True if the armor was applied successfully, false otherwise

---

### `DamageTarget`

Apply damage to an actor.

- **TargetActor**: [AActor](../classes/actor.md) - The actor to damage
- **DamageInstigator**: [AActor](../classes/actor.md) - The actor responsible for the damage
- **Params**: `table` - A table of damage parameters

- <mark style="color:yellow;">returns</mark>: `boolean` - True if the damage was applied successfully, false otherwise

---

### `HealTargetLimb`

Heal a specific limb on an actor.

- **TargetActor**: [AActor](../classes/actor.md) - The actor whose limb to heal
- **LimbTag**: `string` - The gameplay tag identifying the limb
- **HealAmount**: `number` - The amount of health to restore to the limb

- <mark style="color:yellow;">returns</mark>: `boolean` - True if the heal was applied successfully, false otherwise

---

### `GetTargetActorLimbHealthState`

Get the health state of a specific limb on an actor.

- **TargetActor**: [AActor](../classes/actor.md) - The actor to check
- **LimbTag**: `string` - The gameplay tag identifying the limb
- **OutLimbState**: `table` - Output table to receive the limb health state

- <mark style="color:yellow;">returns</mark>: `boolean` - True if the state was retrieved successfully, false otherwise

---

### `GetTargetActorAllLimbHealthStates`

Get the health states of all limbs on an actor.

- **TargetActor**: [AActor](../classes/actor.md) - The actor to check
- **OutLimbStates**: `table` - Output table to receive all limb health states

- <mark style="color:yellow;">returns</mark>: `boolean` - True if the states were retrieved successfully, false otherwise

---

### `FindHealthComponent`

Find the health component on an actor.

- **Actor**: [AActor](../classes/actor.md) - The actor to search for a health component

- <mark style="color:yellow;">returns</mark>: `UHActorHealthComponent | nil` - The health component, or nil if none found

---

### `FindCharacterHealthComponent`

Find the character-specific health component on an actor, which includes downed-state functionality.

- **Actor**: [AActor](../classes/actor.md) - The actor to search for a character health component

- <mark style="color:yellow;">returns</mark>: `UHCharacterHealthComponent | nil` - The character health component, or nil if none found

---

## 📷 Camera Functions

### `FadeCamera`

Fade the player's camera to black over a specified duration.

- **Duration**: `number` - The duration of the fade in seconds

---

### `GetPlayerCamera`

Get the local player's camera manager.

- <mark style="color:yellow;">returns</mark>: `APlayerCameraManager | nil` - The player camera manager, or nil if unavailable

---

### `GetPlayerCameraCoords`

Get the world location of the local player's camera.

- <mark style="color:yellow;">returns</mark>: [Vector](./structs.md#vector) `| nil` - The camera's world location, or nil if unavailable

---

### `GetPlayerCameraRotation`

Get the world rotation of the local player's camera.

- <mark style="color:yellow;">returns</mark>: [Rotator](./structs.md#rotator) `| nil` - The camera's world rotation, or nil if unavailable

---

### `GetPlayerCameraFOV`

Get the field of view angle of the local player's camera.

- <mark style="color:yellow;">returns</mark>: `number | nil` - The camera's field of view in degrees, or nil if unavailable

---

## 📦 Value Functions

### `SetValue`

Set a replicated value on an actor, keyed by a string. Only callable on the server.

- **Actor**: [AActor](../classes/actor.md) - The actor to set the value on
- **Key**: `string` - The key to store the value under
- **Value**: `boolean | number | string` - The value to store
- **ValueType**: `string` - The explicit type of the value: `"bool"`, `"int"`, `"float"`, `"string"`, or `"name"` (default `nil` - inferred from value)

- <mark style="color:yellow;">returns</mark>: `boolean` - True if the value was set successfully, false otherwise

---

### `GetValue`

Get a replicated value from an actor by key. Only callable on the client.

- **Actor**: [AActor](../classes/actor.md) - The actor to get the value from
- **Key**: `string` - The key to retrieve

- <mark style="color:yellow;">returns</mark>: `boolean | number | string | nil` - The stored value, or nil if not found

---

### `OnValueChanged`

Register a callback that fires whenever a replicated value changes on an actor. Only callable on the client.

- **Actor**: [AActor](../classes/actor.md) - The actor to watch for value changes
- **Callback**: `function` - The function to call when a value changes, receives `key`, `oldValue`, and `newValue` as arguments

- <mark style="color:yellow;">returns</mark>: `boolean` - True if the callback was registered successfully, false otherwise

---

## 🔧 Utility Functions

### `SpawnActor`

Spawn an actor in the world at the specified transform.

- **Class**: `UClass | string` - The class to spawn, or an asset path string
- **Transform**: [Vector](./structs.md#vector) `| FTransform` - The world location or full transform to spawn at (default identity transform)
- **Rotator**: [Rotator](./structs.md#rotator) - The rotation to spawn with, used when Transform is a Vector (default `Rotator(0, 0, 0)`)
- **Scale**: [Vector](./structs.md#vector) - The scale to spawn with, used when Transform is a Vector (default `Vector(1, 1, 1)`)

- <mark style="color:yellow;">returns</mark>: [AActor](../classes/actor.md) `| nil` - The spawned actor, or nil if spawning failed

---

### `DestroyActor`

Destroy an actor and release its managed reference.

- **Actor**: [AActor](../classes/actor.md) - The actor to destroy

---

### `GetRootComponent`

Get the root scene component of an actor.

- **Actor**: [AActor](../classes/actor.md) - The actor to get the root component of

- <mark style="color:yellow;">returns</mark>: `USceneComponent | nil` - The root component, or nil if the actor is invalid

---

### `GetComponentsByClass`

Get all components of a specified class attached to an actor.

- **Actor**: [AActor](../classes/actor.md) - The actor to search
- **Class**: `UClass` - The component class to search for

- <mark style="color:yellow;">returns</mark>: `table | nil` - An array of matching components, or nil if the actor is invalid

---

### `GetActorByTag`

Find the first actor in the world with the specified tag.

- **Tag**: `string` - The tag to search for

- <mark style="color:yellow;">returns</mark>: [AActor](../classes/actor.md) `| nil` - The first actor with the given tag, or nil if none found

---

### `GetActorsByTag`

Find all actors in the world with the specified tag.

- **Tag**: `string` - The tag to search for

- <mark style="color:yellow;">returns</mark>: [AActor[]](../classes/actor.md) - An array of all actors with the given tag

---

### `LoadClass`

Load a UE class from its asset path, caching the result for future calls.

- **Path**: `string` - The asset path of the class to load

- <mark style="color:yellow;">returns</mark>: `UClass | nil` - The loaded class, or nil if loading failed

---

### `LoadObject`

Load a UE object from its asset path.

- **Path**: `string` - The asset path of the object to load

- <mark style="color:yellow;">returns</mark>: `UObject | nil` - The loaded object, or nil if loading failed

---

### `NewObject`

Create a new UE object of the specified class.

- **Class**: `UClass` - The class to instantiate
- **Outer**: `UObject` - The outer object to own the new object (default `nil`)

- <mark style="color:yellow;">returns</mark>: `UObject | nil` - The new object, or nil if creation failed

---

### `GenerateId`

Generate a random alphanumeric ID string.

- **Length**: `number` - The length of the ID to generate (default `32`)
- **ValueType**: `string` - The character set to use: `"string"` (letters only), `"number"` (digits only), or `"mixed"` (letters and digits) (default `"mixed"`)

- <mark style="color:yellow;">returns</mark>: `string` - The generated ID

---

### `CopyToClipboard`

Copy text to the system clipboard.

- **Text**: `string` - The text to copy to the clipboard
