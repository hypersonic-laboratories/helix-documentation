---
title: Canvas
description: Canvas is an entity which you can draw onto it
tags: [class]
---
<HeaderDeclaration type="Class" name="Canvas" />

/// danger | Unfinished Section
- The API for this class is currently under construction!
///

## Variables
<VariableDeclaration type="Class" name="Canvas" />

| Name              |       Type             |
| ----------------  | -------------------------------------- |
| ScreenPosition          | [Vector2D](../global-variables/structs.md#vector2d) |
| is_visible        |    `boolean`      |


## Constructor
<ConstructorDeclaration type="Class" name="Canvas" />

```lua
local CanvasActor = Canvas(
    true, 
    Color.TRANSPARENT, 
    -1,
    true, 
    true, 
    100, 
    100, 
    Vector2D(0, 0)
)
```

| Type              |       Name        | Default | Description                                                              |
| ---------------  | :----------------- | ----- | ----------------------------------------------------------------------  |
| boolean      | `is_visible`               | `true`                | Whether the canvas is visible.                        |
| [Color](../global-variables/structs.md#color) | `clear_color`        | `Color.TRANSPARENT`     | The color used to clear the canvas.                   |
| number       | `auto_repaint_rate`        | `-1`                  | The frequency at which the canvas automatically repaints. `-1` disables auto repaint. |
| boolean      | `should_clear_before_update` | `true`                | Whether the canvas should be cleared before each update. |
| boolean      | `auto_resize`              | `true`                | Whether the canvas should automatically resize.        |
| number      | `width`                    | `0`                   | The width of the canvas in pixels.                    |
| number      | `height`                   | `0`                   | The height of the canvas in pixels.                   |
| [Vector2D](../global-variables/structs.md#vector2d) | `screen_position` | `(0, 0)`               | The screen position of the canvas.                    |

## Functions
<FunctionsDeclaration type="Class" name="Canvas" />

### DrawBox
Adds a draw box instruction in to the draw command queue

```lua
Canvas:DrawBox(Vector2D(500, 500), Vector2D(100, 200), 5, Color.WHITE)
```

---

### DrawLine
Adds a draw line instruction in to the draw command queue
```lua
Canvas:DrawLine(Vector2D(300, 500), Vector2D(800, 300), 5, Color.WHITE)
```

### DrawMaterial
Adds a draw material instruction in to the draw command queue for drawing material instances onto the canvas
```lua
Canvas:DrawMaterial('', Vector2D(500, 500), Vector2D(800, 400), Vector2D(0, 0), Vector2D(100, 100), 45, Vector2D(0, 0))
```

### DrawMaterialFromWebUI
```lua
Canvas:DrawMaterialFromWebUI()
```

### DrawMaterialFromSceneCapture
```lua
Canvas:DrawMaterialFromSceneCapture()
```

### DrawText
Adds a draw text instruction in to the draw command queue
```lua
Canvas:DrawText('Hello, this is text!', Vector2D(1000, 500), FontType.Roboto, 24, Color.WHITE, 0, false, false, Color.TRANSPARENT, Vector2D(1, 1), false, Color.BLACK)
```

### DrawTexture
```lua
Canvas:DrawTexture(UE.UObject.Load(''), Vector2D(1000, 500), Vector2D(500, 500), Vector2D(0, 0), Vector2D(1, 1), Color.WHITE, 0, 0, Vector2D(0.5, 0.5))
```

### DrawPolygon
Adds a draw polygon instruction to the draw command queue. Draws a regular polygon with the specified number of sides, position, radius, and color. Optionally accepts a texture and blend mode.
```lua
Canvas:DrawPolygon(texture, Vector2D(500, 500), 100, 6, Color.WHITE, 0)
```

### DrawRect
Adds a filled rectangle instruction to the draw command queue. Draws a rectangle at the given position and size, with an optional texture, color, and blend mode.
```lua
Canvas:DrawRect(texture, Vector2D(500, 500), Vector2D(200, 100), Color.WHITE, 0)
```

### SetAutoRepaintRate
Sets the automatic repaint rate for the canvas. Use `-1` to disable auto repaint, or `0` to repaint every frame.
```lua
Canvas:SetAutoRepaintRate(0.1) -- Repaints every 0.1 seconds
```

### GetSize
Returns the current size of the canvas as a `Vector2D`.
```lua
local size = Canvas:GetSize()
```

### Resize
Resizes the canvas to the specified width and height if auto-resize is disabled.
```lua
Canvas:Resize(800, 600)
```

### SetScreenPosition
Sets the screen position (offset) of the canvas.
```lua
Canvas:SetScreenPosition(Vector2D(100, 100))
```

### SetAutoResize
Enables or disables automatic resizing of the canvas.
```lua
Canvas:SetAutoResize(true)
```

### SetVisibility
Sets whether the canvas is visible.
```lua
Canvas:SetVisibility(false)
```

### Repaint
Forces the canvas to repaint immediately.
```lua
Canvas:Repaint()
```

### Clear
Clears the canvas with the specified color and repaints.
```lua
Canvas:Clear(Color.BLACK)
```