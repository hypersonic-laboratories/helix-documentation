---
title: HPawn
description: ''
tags: [class]
---
<HeaderDeclaration type="Class" name="HPawn" />
HPawn spawns a customizable NPC character into the world with support for animation, mesh overrides, ragdoll physics, and attachments. This class is ideal for spawning passive, aggressive or custom non controlled characters.

/// tip
`HPawn` is an `Actor` so it inherits all functions from [Actor](#actor)
///

## Constructor
<ConstructorDeclaration type="Class" name="HCharacter" />

```lua title="Example"
local npc = HPawn(Vector(0,0,100), Rotator(0,0,0))
```

| Name            | Type       | Default    | Description                                                     |
|-----------------|------------|------------|-----------------------------------------------------------------|
| `location`       | `Vector`   | `(0,100,100)` | Spawn position                                                  |
| `rotation`       | `Quat`     | `(0,0,0,1)`   | Spawn orientation                                               |

## Functions

### `PlayAnimation`
Plays a montage animation on the character.
```lua
npc:PlayAnimation(MyMontage, 1.0, "StartSection")
```
---

### `StopAnimation`
Stops an active montage with an optional blend-out.
```lua
npc:StopAnimation(0.25, MyMontage)
```
---

### `AddStaticMeshAttached`
Attaches a static mesh to a bone/socket on the character.
```lua
npc:AddStaticMeshAttached("bag", BagMesh, "spine_03")
```
---

### `RemoveStaticMeshAttached`
Removes a previously attached mesh by ID.
```lua
npc:RemoveStaticMeshAttached("bag")
```
---

### `RemoveAllStaticMeshesAttached`
Removes all attached meshes from the character.
```lua
npc:RemoveAllStaticMeshesAttached()
```
---

---

### `SetRagdollMode`
Toggles ragdoll physics on or off.
```lua
npc:SetRagdollMode(true)
```
---

### `SetMesh`
Overrides the character’s skeletal mesh.
```lua
npc:SetMesh(UE.UObject.Load("/Game/MyMeshes/MyCustomMesh.MyCustomMesh"))
```
---

### `GetPawn`
Returns the underlying `ACharacter` actor.
```lua
local pawn = npc:GetPawn()
```
---

### `GetMesh`
Returns the name of the currently assigned skeletal mesh.
```lua
print(npc:GetMesh())
```
---

### `GetBoneTransform`
Returns a `FTransform` for a bone name (e.g., `"hand_r"`).
```lua
local transform = npc:GetBoneTransform("spine_03")
```
---

### `IsInRagdollMode`
Returns true if ragdoll physics are currently active.
```lua
if npc:IsInRagdollMode() then ...
```
---