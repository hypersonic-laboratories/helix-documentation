---
title: HCharacter
tags: [class]
---
<HeaderDeclaration type="Class" name="HCharacter"/>
HCharacter spawns a fully featured player character with built-in support for attachments, skeletal mesh overrides, animation, input control, and ragdoll physics.
It uses a Lyra-based blueprint character and applies a default pawn data asset for abilities, movement, and mesh setup. Useful for creating custom player characters, test bots, or roleplay avatars.

/// tip
`HCharacter` is an `Actor` so it inherits all functions from [Actor](#actor)
///

## Constructor
<ConstructorDeclaration type="Class" name="HCharacter" />

```lua title="Example"
local char = HCharacter(Vector(0,0,100), Quat(0,0,0,1), player)
player:Possess(char:GetPawn())
```

| Name            | Type       | Default    | Description                                                     |
|-----------------|------------|------------|-----------------------------------------------------------------|
| `location`       | `Vector`   | `(0,100,100)` | Spawn position                                                  |
| `rotation`       | `Quat`     | `(0,0,0,1)`   | Spawn orientation                                               |
| `player`         | `APlayerController`        | **Required** | Player controller to possess the character       |
| `collision_type` | `string`   | `"Pawn"`      | Collision profile                                               |
| `gravity_enabled`| `boolean`  | `true`        | Whether gravity is applied to the pawn                          |
| `max_health`     | `number`   | `100`         | Character's starting health                                     |
| `death_sound`    | `SoundCue` | `nil`         | Optional death sound                                            |
| `pain_sound`     | `SoundCue` | `nil`         | Optional hurt sound                                             |

## Functions

### `PlayAnimation`
Plays a montage animation on the character.
```lua
char:PlayAnimation(MyMontage, 1.0, "StartSection")
```
---

### `StopAnimation`
Stops an active montage with an optional blend-out.
```lua
char:StopAnimation(0.25, MyMontage)
```
---

### `AddStaticMeshAttached`
Attaches a static mesh to a bone/socket on the character.
```lua
char:AddStaticMeshAttached("bag", BagMesh, "spine_03")
```
---

### `RemoveStaticMeshAttached`
Removes a previously attached mesh by ID.
```lua
char:RemoveStaticMeshAttached("bag")
```
---

### `RemoveAllStaticMeshesAttached`
Removes all attached meshes from the character.
```lua
char:RemoveAllStaticMeshesAttached()
```
---

### `SetInputEnabled`
Enables or disables player input for movement and look.
```lua
char:SetInputEnabled(false)
```
---

### `SetRagdollMode`
Toggles ragdoll physics on or off.
```lua
char:SetRagdollMode(true)
```
---

### `SetMesh`
Overrides the character’s skeletal mesh.
```lua
char:SetMesh(UE.UObject.Load("/Game/MyMeshes/MyCustomMesh.MyCustomMesh"))
```
---

### `GetPawn`
Returns the underlying `ACharacter` actor.
```lua
local pawn = char:GetPawn()
```
---

### `GetPlayer`
Returns the controlling `APlayerController`.
```lua
local pc = char:GetPlayer()
```
---

### `GetTeam`
Returns the team value assigned to the character.
```lua
local t = char:GetTeam()
```
---

### `GetMesh`
Returns the name of the currently assigned skeletal mesh.
```lua
print(char:GetMesh())
```
---

### `GetBoneTransform`
Returns a `FTransform` for a bone name (e.g., `"hand_r"`).
```lua
local transform = char:GetBoneTransform("spine_03")
```
---

### `IsInRagdollMode`
Returns true if ragdoll physics are currently active.
```lua
if char:IsInRagdollMode() then ...
```
---

### `IsInputEnabled`
Returns whether input is currently enabled.
```lua
print(char:IsInputEnabled())
```
