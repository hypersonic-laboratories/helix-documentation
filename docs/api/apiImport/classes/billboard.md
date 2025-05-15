---
title: Billboard
description: A Billboard is a 2D Material that will be rendered always facing the camera.
image: /img/docs/billboard.webp
sidebar_position: 0
tags: [class, client]
---
<HeaderDeclaration type="Class" name="Billboard" image="/img/docs/billboard.webp" />
A Billboard is a 2D Material that will be rendered always facing the camera.

## Constructors
<ConstructorDeclaration type="Class" name="Billboard" />

```lua title="Client/Index.lua"
local my_billboard = Billboard(
    Vector(200, 200, 200), -- location
    '/Decals/MySprite.MySprite', -- Texture path (relative to /Game/)
    Vector2D(32, 32), -- size
    true -- screen-space scaling
)
```

| Type                                                | Name                   |Default                | Description                        |
|-----------------------------------------------------|------------------------|-----------------------|------------------------------------|
| [Vector](#vector)                                   | `location`             | `Vector(0, 0, 0)`     |                                    |
| [Material Reference](#material-reference)           | `material_asset`       |                       |                                    |
| [Vector2D](#size)                                   | `size`                 | `Vector2D(32, 32)`    |                                    |
| [boolean](#boolean)                                 | `size_in_screen_space` | `false`               |  `Size is in Screen or World Space`|

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