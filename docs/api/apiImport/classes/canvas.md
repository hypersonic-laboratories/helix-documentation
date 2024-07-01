---
title: Canvas
description: Canvas is an entity which you can draw onto it.
sidebar_position: 0
tags: [class]
---

<HeaderDeclaration type="Class" name="Canvas" />


## Examples

```lua title=Client/Index.lua
-- Spawns a Canvas
local my_canvas = Canvas(
  true,
  Color.TRANSPARENT,
  0,
  true
)

-- Subscribes for Update, we can only Draw inside this event
my_canvas:Subscribe("Update", function(self, width, height)
  -- Draws a Text in the middle of the screen
  self:DrawText("Hello World!", Vector2D(width / 2, height / 2))

  -- Draws a red line Horizontally
  self:DrawLine(Vector2D(0, height / 2), Vector2D(width, height / 2), 10, Color.RED)
end)

-- Forces the canvas to repaint, this will make it trigger the Update event
my_canvas:Repaint()

-- Applies the Canvas material into a Prop
any_prop:SetMaterialFromCanvas(my_canvas)
```

///tip

You can use the output Texture from a Canvas with [:SetMaterialFromCanvas()](/scripting-reference/classes/base-classes/paintable.mdx#setmaterialfromcanvas) method!

///


## Constructors

<ConstructorDeclaration type="Class" name="Canvas" />


## Static Functions

<StaticFunctionsDeclaration type="Class" name="Canvas" />


## Functions

<FunctionsDeclaration type="Class" name="Canvas" />


## Events

<EventsDeclaration type="Class" name="Canvas" />
