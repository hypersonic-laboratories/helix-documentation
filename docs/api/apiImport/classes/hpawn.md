---
title: HPawn
description: ''
tags: [class]
---
`HPawn` creates a non‑player character (NPC) actor with helper functions for playing animations, attaching meshes, toggling ragdoll, and querying state.
Ideal for passive/ambient NPCs, enemies, or scripted actors

/// tip
`HPawn` is an `Actor` so it inherits all functions from [Actor](actor.md)
///

## Constructor

```lua title="Example"
local npc = HPawn(
    Vector(0, 0, 100),           -- location
    Rotator(0, 0, 0),            -- rotation (Rotator or Quat accepted)
    function(SpawnedPawn)        -- optional callback when NPC is created
        print("Spawned:", SpawnedPawn)
    end
)
```

| Name            | Type       | Default    | Description              |
|-----------------|------------|------------|--------------------------|
| `location`       | `Vector`   | `(0,100,100)` | Spawn position       |
| `rotation`       | `Quat`     | `(0,0,0,1)`   | Spawn orientation    |

## Functions

### `PlayAnimation`
Plays a montage animation on the character

- montage: `UAnimMontage` — montage to play
- playRate: `number` — playback speed multiplier (e.g., `1.0`)
- startSection: `string | nil` — optional section name to start from

```lua title="Example"
npc:PlayAnimation(MyMontage, 1.0, "StartSection")
```

---

### `StopAnimation`
Stops an active montage with an optional blend-out

- blendOutTime: `number` — time to blend out (seconds)
- montage: `UAnimMontage | nil` — specific montage to stop (nil = any)

```lua title="Example"
npc:StopAnimation(0.25, MyMontage)
```

---

### `AddStaticMeshAttached`
Spawns a `AStaticMeshActor`, attaches it to a bone/socket, and tracks it by ID.
Replaces any prior attachment with the same ID. Default socket is `"hand_l"`

- id: `string` — unique attachment ID
- staticMesh: `UStaticMesh` — mesh to attach
- socketName: `string` — bone/socket (default `"hand_l"`)
- <mark style="color:yellow;">returns</mark>: `AStaticMeshActor | nil` — the spawned actor (nil on failure)

```lua title="Example"
local bagActor = npc:AddStaticMeshAttached("bag", BagMesh, "spine_03")
```

---

### `RemoveStaticMeshAttached`
Removes a previously attached mesh by ID

- id: `string` — the attachment ID passed to `AddStaticMeshAttached`
- <mark style="color:yellow;">returns</mark>: `boolean` — `true` if an attachment was removed

```lua title="Example"
local bRemoved = npc:RemoveStaticMeshAttached("bag")
```

---

### `RemoveAllStaticMeshesAttached`
Removes all attached meshes from the character

```lua title="Example"
npc:RemoveAllStaticMeshesAttached()
```

---

### `SetRagdollMode`
Toggles ragdoll physics on or off

- bEnable: `boolean` — `true` to enable ragdoll, `false` to disable

```lua title="Example"
npc:SetRagdollMode(true)
```

---

### `SetMesh`
Overrides the character’s skeletal mesh

- mesh: `USkeletalMesh` — the new skeletal mesh

```lua title="Example"
npc:SetMesh(UE.UObject.Load("/Game/MyMeshes/MyCustomMesh.MyCustomMesh"))
```

---

### `SetName`
Sets a display/name for the pawn (implementation placeholder calls into pawn)

- name: `string` — desired name

```lua title="Example"
npc:SetName("Guard A")
```

---

### `SetTeam`
Assigns a simple team tag on the wrapper

- team: `any` — team identifier

```lua title="Example"
npc:SetTeam("Hostile")
```

---

### `GetPawn`
Returns the underlying `ACharacter` actor. (may be `nil` until the async spawn finishes)

- <mark style="color:yellow;">returns</mark>: `ACharacter | nil`

```lua title="Example"
local pawn = npc:GetPawn()
```

---

### `GetMesh`
Returns the name of the currently assigned skeletal mesh

- <mark style="color:yellow;">returns</mark>: `string | nil`

```lua title="Example"
print("Mesh name:", npc:GetMesh() or "none")
```

---

### `GetBoneTransform`
Returns a `FTransform` for a bone name (e.g., `"hand_r"`)

- boneName: `string` — the bone/socket name
- <mark style="color:yellow;">returns</mark>: `Transform | nil`

```lua title="Example"
local transform = npc:GetBoneTransform("spine_03")
```

---

### `IsInRagdollMode`
Returns true if ragdoll physics are currently active

- <mark style="color:yellow;">returns</mark>: `boolean`

```lua title="Example"
if npc:IsInRagdollMode() then ...
```