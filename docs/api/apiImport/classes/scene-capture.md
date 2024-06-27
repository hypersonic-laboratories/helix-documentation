---
title: SceneCapture
description: Scene Capture is an Actor which captures a fully dynamic image of the scene into a Texture. It captures the scene from its view frustum, stores that view as an image, which is then used within a Material.
sidebar_position: 0
tags: [class]
---

<HeaderDeclaration type="Class" name="SceneCapture" image="/img/docs/scenecapture.webp" />


## Examples

```lua title="Client/Index.lua"
local scene_capture = SceneCapture(
  Vector(0, 0, 200),
  Rotator(-15, 0, 0),
  256,
  256,
  0,
  5000,
  100
)

-- Paints the Prop with the SceneCapture output
local my_prop = Prop(Vector(200, 200, 100), Rotator(), "helix::SM_Cube")
my_prop:SetMaterialFromSceneCapture(scene_capture)
```

```lua title="Client/Index.lua"
local scene_capture = SceneCapture(
  Vector(0, 0, 200),
  Rotator(-15, 0, 0),
  256,
  256,
  0,
  5000,
  100
)

-- Make a SceneCapture to only render a specific actor
local my_prop = Prop(Vector(200, 200, 100), Rotator(), "helix::SM_Cube")
scene_capture:AddRenderActor(my_prop)
scene_capture:SetShowFlag("Atmosphere", false)
```

///tip

You can use the output Texture from a SceneCapture with [:SetMaterialFromSceneCapture()](/scripting-reference/classes/base-classes/paintable.mdx#setmaterialfromscenecapture) method!

///


## Constructors

<ConstructorDeclaration type="Class" name="SceneCapture" />

///note

Scene Captures capture a scene in real time, this means every tick it will re-render the scene from scratch. Please consider reducing the `width`/`height` and even the `render_rate` to improve it's performance.

We've worked hard to make SceneCapture as performatic as possible! Some techniques were applied for optimization and reducing the `render_rate` automatically when you are far and when the generated texture is out of the screen.

///


## Static Functions

<StaticFunctionsDeclaration type="Class" name="SceneCapture" />


## Functions

<FunctionsDeclaration type="Class" name="SceneCapture" />


## Events

<EventsDeclaration type="Class" name="SceneCapture" />
