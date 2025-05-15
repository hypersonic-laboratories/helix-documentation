---
title: HCharacter
description: HCharacter spawns and wraps a Helix player pawn. 
tags: [class]
---

<HeaderDeclaration type="Class" name="HCharacter" />

`HCharacter`: Spawns a Helix Character and returns a Lua table whose methods let you:

* Possess or release the pawn with any `APlayerController`.
* Add or remove Static‑Mesh props to bones or sockets at runtime.
* Play or stop montages, switch to rag‑doll, lock player input.
* Query—or swap—the underlying Skeletal Mesh.
* Read convenience getters such as `GetPawn()` or `IsInputEnabled()`.

---

## Examples

```lua title="Server/GameMode.lua"
-- One character for every player that joins
self.OnPostLogin:Add(function(GM, PC)
    local char = HCharacter(Vector(0,0,300), Rotator(), PC)
    PC:Possess(char.pawn)
end)
```

```lua title="Client/Index.lua"
-- Add a book to the left hand and play an emote
local mesh = UStaticMesh.Load("/MyProject/MyBook.MyBook") -- reference to your book Static Mesh
myChar:AddStaticMeshAttached("book", mesh, "hand_l")
```

---

## Constructors


```lua
HCharacter(location, rotation, player, collision_type, gravity_enabled, max_health)
```

<ConstructorDeclaration type="Class" name="HCharacter" />

| Type | Parameter | Default | Description |
|------|-----------|---------|-------------|
| [Vector](#vector) | `location` |  | World‑space spawn point. |
| [Rotator](#rotator) | `rotation` |  | Initial orientation. |
| [PlayerController](#playercontroller) | `player` |  | Controller that will possess the pawn; `nil` for AI. |
| [CollisionType](#collisiontype) | `collision_type` | `"Pawn"` | Capsule preset. |
| `boolean` | `gravity_enabled` | `true` | Spawn with gravity if `true`. |
| `number` | `max_health` | `100` | Starting health. |

---

## Functions

<FunctionsDeclaration type="Class" name="HCharacter" />

### AddStaticMeshAttached

Adds a Static Mesh to a bone or socket.
```lua
HCharacter:AddStaticMeshAttached(id, mesh, socket?)
```

| Type | Parameter | Default | Description |
|------|-----------|---------|-------------|
| `string` | `id` |  | Unique key. |
| `UStaticMesh` | `mesh` |  | Mesh to spawn and attach. |
| `string` | `socket` | `"hand_l"` | Bone / socket; root if `nil`. |

### RemoveStaticMeshAttached

Removes a specific Static Mesh from a bone or socket.
```lua
HCharacter:RemoveStaticMeshAttached(id)
```

| Type | Parameter | Default | Description |
|------|-----------|---------|-------------|
| `string` | `id` |  | Unique key. |

### RemoveAllStaticMeshesAttached

Removes all Static Meshes from the character.
```lua
HCharacter:RemoveAllStaticMeshesAttached()
```

### PlayAnimation 

Plays an animation on the character.
```lua
HCharacter:PlayAnimation(montage, rate?, section?)
```

| Type | Parameter | Default | Description |
|------|-----------|---------|-------------|
| `UAnimMontage` | `montage` |  | Animation to play. |
| `number` | `rate` | `1.0` | Playback speed. |
| `string` | `section` | `"Default"` | Section to play. |

### StopAnimation

Stops an animation on the character.
```lua
HCharacter:StopAnimation(blendOut?, montage?)
```

| Type | Parameter | Default | Description |
|------|-----------|---------|-------------|
| `boolean` | `blendOut` | `false` | Blend out the animation if `true`. |
| `UAnimMontage` | `montage` |  | Animation to stop. |



### SetRagdollMode

Enables or disables RagdollMode on the character.
```lua
HCharacter:SetRagdollMode(is_ragdoll)
```

| Type | Parameter | Default | Description |
|------|-----------|---------|-------------|
| `boolean` | `is_ragdoll` | `false` | Whether to enable RagdollMode or not. |



### SetInputEnabled

Locks or unlocks movement, look and clicks on the local client.
```lua
HCharacter:SetInputEnabled(is_enabled)
```

| Type | Parameter | Default | Description |
|------|-----------|---------|-------------|
| `boolean` | `is_enabled` | `true` | Whether to enable input or not. |


### SetMesh

Swaps the Skeletal Mesh at runtime.
```lua
HCharacter:SetMesh(skeletalMesh)
```

| Type | Parameter | Default | Description |
|------|-----------|---------|-------------|
| `USkeletalMesh` | `skeletalMesh` |  | The new Skeletal Mesh to set. |


### Utility getters

| Function | Returns |
|----------|---------|
| `GetPawn()` | The underlying `APawn`. |
| `GetPlayer()` | The owning `PlayerController` (or `nil`). |
| `GetMesh()` | Name of the current `USkeletalMesh`. |
| `GetBoneTransform(bone)` | `FTransform` of a bone/socket. |
| `IsInputEnabled()` | `boolean`. |
| `IsInRagdollMode()` | `boolean`. |
<!-- | `GetTeam()` | Team ID (when implemented). | -->

---

<EventsDeclaration type="Class" name="HCharacter" />
