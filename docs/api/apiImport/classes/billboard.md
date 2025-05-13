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

```lua title="Client/Index.lua"
local my_billboard = Billboard(
    Vector(200, 200, 200), -- location
    '/Decals/MySprite.MySprite', -- Texture path (relative to /Game/)
    Vector2D(32, 32), -- size
    true -- screen-space scaling
)
```

<ConstructorDeclaration type="Class" name="Billboard" />

| Type                                                | Name                   |Default                | Description                        |
|-----------------------------------------------------|------------------------|-----------------------|------------------------------------|
| [Vector](#vector)                                   | `location`             | `Vector(0, 0, 0)`     |                                    |   
| [Material Reference](#material-reference)   | `material_asset`       |                       |                                    |
| [Vector2D](#size)                                   | `size`                 | `Vector2D(32, 32)`    |                                    |        
| [boolean](#boolean)                           | `size_in_screen_space` | `false`               |  `Size is in Screen or World Space`|   


<!-- ## Static Functions

<StaticFunctionsDeclaration type="Class" name="Billboard" />


## Functions

<FunctionsDeclaration type="Class" name="Billboard" />


## Events

<EventsDeclaration type="Class" name="Billboard" /> -->
