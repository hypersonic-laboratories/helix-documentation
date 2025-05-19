---
title: Decal
description: Decal places a world-aligned material projection onto surfaces
sidebar_position: 0
tags: [class]
---
<HeaderDeclaration type="Class" name="Decal"/>
Decal spawns a 3D projected material onto surfaces in the world.
This is useful for things like graffiti, blood splatters, burn marks, ground targets, or bullet impacts.
Decals can fade based on screen size and automatically destroy themselves after a set lifespan.

/// tip
`Decal` is an `Actor`, so you can call any [Actor](#actor) functions
///

## Constructor
<ConstructorDeclaration type="Class" name="Decal" />

```lua title="Example"
local myDecal = Decal(
	Vector(100, 200, 0),
	Rotator(0, 90, 90),
	"helix::M_Default_Translucent_Lit_Decal",
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
<AFunctionsDeclaration type="Class" name="Decal" />

### `SetDecalMaterial`
Changes the decal’s material at runtime.
```lua
decal:SetDecalMaterial(UE.UObject.Load("/Game/MyDecals/NewMat.NewMat"))
```
---

### `GetDecalMaterial`
Returns the currently assigned material.
```lua
local mat = decal:GetDecalMaterial()
```
---

### `CreateDynamicMaterialInstance`
Creates a dynamic material instance for modifying parameters.
```lua
local dyn = decal:CreateDynamicMaterialInstance()
dyn:SetScalarParameterValue("Opacity", 0.5)
```
---

### `GetDecalMaterialInstance`
Returns the dynamic material instance (if previously created).
```lua
local inst = decal:GetDecalMaterialInstance()
```
---

### `SetDecalColor`
Tints the decal color (if supported by the material).
```lua
decal:SetDecalColor(Color(1, 0.2, 0.2, 1)) -- light red
```
---

### `GetDecalColor`
Gets the current color tint.
```lua
local color = decal:GetDecalColor()
```
---

### `SetFadeScreenSize`
Controls how small the decal appears before fading out.
```lua
decal:SetFadeScreenSize(0.005)
```
---

### `GetFadeScreenSize`
Returns the current fade screen size threshold.
```lua
print(decal:GetFadeScreenSize())
```
---

### `SetFadeOut`
Begins fade-out after a delay, with optional destruction.
```lua
decal:SetFadeOut(1.5, 2.0, true)
```
---

### `SetFadeIn`
Fades the decal in over time (if needed).
```lua
decal:SetFadeIn(0.0, 1.25)
```
---

### `SetSortOrder`
Controls which decals are rendered in front.
```lua
decal:SetSortOrder(5)
```
---

### `GetSortOrder`
Gets the current sort order value.
```lua
print(decal:GetSortOrder())
```
