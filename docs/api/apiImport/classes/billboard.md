---
title: Billboard
description: Billboard displays a flat 2D sprite that always faces the camera
tags: [class]
---
Billboard spawns a 2D sprite in 3D space that always faces the camera.
This is commonly used for markers, indicators, floating icons, or simple world labels.
The billboard can be screen-size scaled or world-size scaled and can be textured using any valid sprite or texture asset

/// tip
`Billboard` is an `Actor` so it inherits all functions from [Actor](actor.md)
///

## Constructor

```lua title="Example"
local my_billboard = Billboard(
    Vector(0, 0, 200),
    '/Engine/EngineResources/DefaultTexture',
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

### `SetUV`
Change which part of the texture (image) the sprite displays.

- X: `number` — how far to move right from the left edge of the texture (start position on the X axis)
- Y: `number` — how far to move down from the top edge of the texture (start position on the Y axis)
- Width: `number` — how wide the visible part of the texture should be
- Height: `number` — how tall the visible part of the texture should be

In simple terms, this function lets you crop the sprite to show only a specific rectangular area of the texture.

```lua title="Example"
my_billboard:SetUV(100, 100, 100, 100) -- shows a 100x100 section starting 100px right and 100px down
```

---

### `SetSpriteAndUV`
Change the sprite’s texture and which part of that texture (UVs) is displayed.

- TexturePath: `Texture2D` — the texture (image) you want to display on the sprite
- X: `number` — how far to move right from the left edge of the texture (start position on the X axis)
- Y: `number` — how far to move down from the top edge of the texture (start position on the Y axis)
- Width: `number` — how wide the visible part of the texture should be
- Height: `number` — how tall the visible part of the texture should be

In simple terms, this sets a new image for the sprite and tells it which rectangular section of that image to show.

```lua title="Example"
local texture = UE.UObject.Load(TexturePath)
my_billboard:SetSpriteAndUV(texture, 100, 100, 100, 100) -- loads a new texture and shows a 100x100 area starting 100px right and 100px down
```

---

### `SetSprite`
Change the texture (image) used by this sprite component.

- TexturePath: `Texture2D` — the texture you want the sprite to display

In simple terms, this replaces the sprite’s current image with a new one.

```lua title="Example"
local texture = UE.UObject.Load(TexturePath)
my_billboard:SetSprite(texture) -- changes the sprite’s image to the loaded texture
```

---

### `SetOpacityMaskRefVal`
Change how transparent or solid parts of the sprite are, based on an opacity mask value.

- Typical values: `0.3` to `0.5`
- Range: `0.0` (fully transparent) to `1.0` (fully opaque)

- RefVal: `number` — the reference value that controls how much of the texture is visible

In simple terms, this controls the cutoff point for transparency.
Lower values make more of the texture see-through, while higher values make it appear more solid.

```lua title="Example"
my_billboard:SetOpacityMaskRefVal(0.5)
```