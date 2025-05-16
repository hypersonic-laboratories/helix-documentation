---
title: Billboard
description: Billboard displays a flat 2D sprite that always faces the camera
tags: [class]
---
<HeaderDeclaration type="Class" name="Billboard" image="/img/docs/billboard.webp" />
Billboard spawns a 2D sprite in 3D space that always faces the camera.
This is commonly used for markers, indicators, floating icons, or simple world labels.
The billboard can be screen-size scaled or world-size scaled and can be textured using any valid sprite or texture asset

/// tip
`Billboard` is an `Actor` so it inherits all functions from [Actor](#actor)
///

## Constructor
<ConstructorDeclaration type="Class" name="Billboard" />

```lua title="Example"
local marker = Billboard(
    Vector(0, 0, 200),
    "/Game/UI/Icons/Icon_Marker.Icon_Marker",
    Vector2D(64, 64),
    true
)
```

| Name           | Type        | Default      | Description                                                             |
|----------------|-------------|--------------|-------------------------------------------------------------------------|
| `Location`      | `Vector`    | `(0,0,0)`    | World position where the billboard is placed                            |
| `TexturePath`   | `string`    | **Required** | Asset path to the texture or sprite                                     |
| `Size`          | `Vector2D`  | `(64,64)`    | Desired screen size of the sprite (ignored if not in screen space mode) |
| `bScreenSpace`  | `boolean`   | `false`      | If true, sprite maintains size in screen space (UI-style)               |

## Functions
<FunctionsDeclaration type="Class" name="Billboard" />

### `SetUV`
Change the sprite's UVs
```lua title="Example"
my_billboard:SetUV(100, 100, 100, 100) -- X, Y, Width, Height
```
---

### `SetSpriteAndUV`
Change the sprite texture and the UV's used by this component
```lua title="Example"
local texture = UE.UObject.Load(TexturePath)
my_billboard:SetSpriteAndUV(texture, 100, 100, 100, 100)
```
---

### `SetSprite`
Change the sprite texture used by this component
```lua title="Example"
local texture = UE.UObject.Load(TexturePath)
my_billboard:SetSprite(texture)
```
---

### `SetOpacityMaskRefVal`
Changed the opacity masked used by this component
Typical values: `0.3` to `0.5`
Range: `0.0` to `1.0`
```lua title="Example"
my_billboard:SetOpacityMaskRefVal(0.5)
```