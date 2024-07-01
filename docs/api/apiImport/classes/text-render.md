---
title: TextRender
description: A Text Render class is useful for spawning Texts in 3D world, you can even attach it to other entities
sidebar_position: 0
tags: [class]
---

<HeaderDeclaration type="Class" name="TextRender" image="/img/docs/text-render.webp" />


## Examples

```lua
local my_text_render = TextRender(
    Vector(-100, 200, 300),
    Rotator(),
    "My Awesome Text",
    Vector(1, 1, 1), -- Scale
    Color(1, 0, 0), -- Red Color
    FontType.OpenSans,
    TextRenderAlignCamera.FaceCamera
)
```

///info

If you desire your **TextRender** to be visible through walls, replace it's material with the Default TranslucentDepth one!

`SetMaterial("helix::M_Default_Translucent_Lit_Depth")`.

You can also tweak it's color and other properties using the Material methods.

///

<ReferenceLink href="getting-started/code-examples/name-tags">Nametags</ReferenceLink>


## Constructors

<ConstructorDeclaration type="Class" name="TextRender" />


## Static Functions

<StaticFunctionsDeclaration type="Class" name="TextRender" />


## Functions

<FunctionsDeclaration type="Class" name="TextRender" />


## Events

<EventsDeclaration type="Class" name="TextRender" />
