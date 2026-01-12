---
title: Decal
description: Decal places a world-aligned material projection onto surfaces
tags: [class]
---
Decal spawns a 3D projected material onto surfaces in the world.
This is useful for things like graffiti, blood splatters, burn marks, ground targets, or bullet impacts.
Decals can fade based on screen size and automatically destroy themselves after a set lifespan.

/// tip
`Decal` is an `Actor`, so you can call any [Actor](actor.md) functions
///

## Constructor

```lua title="Example"
local myDecal = Decal(
	Vector(100, 200, 0),
	Rotator(0, 90, 90),
	"/Engine/EngineMaterials/DefaultDecalMaterial.DefaultDecalMaterial",
	Vector(128, 256, 256),
	60,
	0.01
)
```

| Name             | Type      | Default              | Description                                                       |
|------------------|-----------|----------------------|-------------------------------------------------------------------|
| `Location`        | `Vector`  | **Required**         | World position for the center of the decal projection             |
| `Rotation`        | `Rotator` | **Required**         | Orientation of the decal in world space                           |
| `MaterialAsset`   | `string`  | **Required**         | Path to a decal-compatible material                               |
| `Size`            | `Vector`  | `(128, 256, 256)`    | Size of the decal (depth, height, width)                          |
| `Lifespan`        | `number`  | `60`                 | Seconds to live before destroying (0 = infinite)                  |
| `FadeScreenSize`  | `number`  | `0.01`               | Screen size threshold below which the decal fades out             |

## Functions

### `SetDecalMaterial`
Changes the decal’s material at runtime.

- material: `UMaterialInterface` — the material to project

```lua
myDecal:SetDecalMaterial(UE.UObject.Load("/Engine/EngineMaterials/M_DecalGeneric.M_DecalGeneric"))
```

---

### `GetDecalMaterial`
Returns the currently assigned material.

- <mark style="color:yellow;">returns</mark>: `UMaterialInterface`

```lua
local mat = myDecal:GetDecalMaterial()
```

---

### `CreateDynamicMaterialInstance`
Creates a dynamic material instance for modifying parameters.

- <mark style="color:yellow;">returns</mark>: `UMaterialInstanceDynamic`

```lua
local dyn = myDecal:CreateDynamicMaterialInstance()
dyn:SetScalarParameterValue("Opacity", 0.5)
```

---

### `GetDecalMaterialInstance`
Returns the dynamic material instance (if previously created).

- <mark style="color:yellow;">returns</mark>: `UMaterialInstanceDynamic | nil`

```lua
local inst = myDecal:GetDecalMaterialInstance()
```

---

### `SetDecalColor`
Tints the decal color (if supported by the material).

- color: `Color` — RGBA tint

```lua
myDecal:SetDecalColor(Color(1, 0.2, 0.2, 1)) -- light red
```

---

### `GetDecalColor`
Gets the current color tint.

- <mark style="color:yellow;">returns</mark>: `Color`

```lua
local color = myDecal:GetDecalColor()
```

---

### `SetFadeScreenSize`
Controls how small the decal appears before fading out.

- value: `number` — fade threshold

```lua
myDecal:SetFadeScreenSize(0.005)
```

---

### `GetFadeScreenSize`
Returns the current fade screen size threshold.

- <mark style="color:yellow;">returns</mark>: `number`

```lua
print(myDecal:GetFadeScreenSize())
```

---

### `SetFadeOut`
Begins fade-out after a delay, with optional destruction

- startDelay: `number` — seconds to wait before starting the fade
- duration: `number` — seconds for the fade‑out to complete
- bDestroyOwnerAfterFade: `boolean` — if `true`, destroys the actor after fade completes

```lua
myDecal:SetFadeOut(1.5, 2.0, true)
```

---

### `SetFadeIn`
Fades the decal in over time

- startDelay: `number` — seconds to wait before starting the fade‑in
- duration: `number` — seconds for the fade‑in to complete

```lua
myDecal:SetFadeIn(0.0, 1.25)
```

---

### `SetSortOrder`
Controls which decals are rendered in front (higher draws later).

- sortOrder: `integer` — render sort priority

```lua
myDecal:SetSortOrder(5)
```

---

### `GetSortOrder`
Gets the current sort order value.

- <mark style="color:yellow;">returns</mark>: `integer`

```lua
print(myDecal:GetSortOrder())
```
