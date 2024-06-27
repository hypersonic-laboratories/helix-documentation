---
title: Billboard
description: A Billboard is a 2D Material that will be rendered always facing the camera.
image: /img/docs/billboard.webp
sidebar_position: 0
tags: [class, client]
---

<HeaderDeclaration type="Class" name="Billboard" image="/img/docs/billboard.webp" />


## Examples

```lua title=Client/Index.lua
local my_billboard = Billboard(
    Vector(200, 200, 200), -- location
    "helix::M_Default_Masked_Lit", -- material
    Vector2D(32, 32), -- size
    true
)

my_billboard:SetMaterialTextureParameter("Texture", "package://my_package/Client/image.jpg")
```


## Constructors

<ConstructorDeclaration type="Class" name="Billboard" />


## Static Functions

<StaticFunctionsDeclaration type="Class" name="Billboard" />


## Functions

<FunctionsDeclaration type="Class" name="Billboard" />


## Events

<EventsDeclaration type="Class" name="Billboard" />
