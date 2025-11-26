---
title: TextRender
description: TextRender spawns floating 3D text in the world
sidebar_position: 0
tags: [class]
---
<HeaderDeclaration type="Class" name="TextRender" image="/img/docs/text-render.webp" />
TextRender creates 3D floating text in the world that always faces forward by default.
It’s useful for labeling objects, creating signs, markers, or displaying messages in the game environment.
The text can be customized with different fonts, colors, sizes, and rotations, making it suitable for both debug information and immersive in-world displays

/// tip
`TextRender` is an `Actor` so it inherits all functions from [Actor](actor.md)
///

## Constructor
<ConstructorDeclaration type="Class" name="TextRender" />

```lua title="Example"
local text = TextRender(
    Vector(0, 200, 100),
    Rotator(0, 0, 0),
    "Hello World",
    Vector(2, 2, 1),
    Color(255, 255, 255, 255),
    FontType.RobotoMono
)
```

| Name       | Type      | Default           | Description                                                        |
|------------|-----------|-------------------|--------------------------------------------------------------------|
| `Location` | `Vector`  | `(0,0,0)`         | World-space position to place the text                             |
| `Rotation` | `Rotator` | `(0,0,0)`         | World-space rotation of the text actor                             |
| `Text`     | `string`  | **Required**      | The text string to display                                         |
| `Scale`    | `Vector`  | `(1,1,1)`         | Scale of the text in X and Y directions                            |
| `Color`    | `Color`   | `(255,255,255,255)` | Text render color (RGB + Alpha)                                  |
| `FontParam`| `enum`    | `FontType.Roboto` | Engine font enum or asset path to a custom font                    |

## Functions
<FunctionsDeclaration type="Class" name="TextRender" />

### `SetText`
Updates the text content

- message: `string`

```lua title="Example"
text:SetText("Updated Message")
```

---

### `SetTextRenderColor`
Changes the text color

- Color: [Color](../global-variables/structs.md/#color)

```lua title="Example"
text:SetTextRenderColor(Color(255, 0, 0, 255)) -- red
```

---

### `SetFont`
Changes the font to an engine enum or a loaded asset

- Font: [FontType](../global-variables/enums.md/#fonttype)

```lua title="Example"
text:SetFont(FontType.RobotoMono)
```

---

### `SetXScale`
Sets horizontal scale (width)

- scale: `number`

```lua title="Example"
text:SetXScale(2.0)
```

---

### `SetYScale`
Sets vertical scale (depth)

- scale: `number`

```lua title="Example"
text:SetYScale(1.0)
```