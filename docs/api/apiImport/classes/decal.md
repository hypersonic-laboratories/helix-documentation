---
title: Decal
description: Decals are Materials that are projected onto meshes in your level, including Static Meshes and Skeletal Meshes.
sidebar_position: 0
tags: [class, client]
---

<HeaderDeclaration type="Class" name="Decal" image="/img/docs/decals.webp" />


## Examples

```lua title=Client/Index.lua
local my_decal = Decal(
    Vector(100, 200, 0), -- location
    Rotator(0, 90, 90), -- rotation
    "helix::M_Default_Translucent_Lit_Decal", -- material
    Vector(128, 256, 256), -- size
    60, -- lifespan
    0.01 -- fade screen size
)

my_decal:SetMaterialTextureParameter("Texture", "package://my_package/Client/image.jpg")
```


## Constructors

<ConstructorDeclaration type="Class" name="Decal" />


## Static Functions

<StaticFunctionsDeclaration type="Class" name="Decal" />


## Functions

<FunctionsDeclaration type="Class" name="Decal" />


## Events

<EventsDeclaration type="Class" name="Decal" />
