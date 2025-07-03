---
title: WebUI
description: ''
tags: [class]
---

WebUI is a class that creates and manages web-based user interfaces within an application. It allows developers to display web content (URLs or HTML) as interactive widgets with full browser functionality.

## Variables

<VariableDeclaration type="Class" name="WebUI" />

| Name              |       Type             |
| ----------------  | -------------------------------------- |
| BrushDelegate   |   `Delegate`   |
| DefaultURL      |   `string`  |
| bAutoResize    |    `boolean`  |
| Settings      | `FBluEyeSettings` |
| Eye           | `UBluEye`      |
| Brush         | [FSlateBrush](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/SlateCore/Styling/FSlateBrush?application_version=5.5) |

## Constructors

<ConstructorDeclaration type="Class" name="WebUI" />

```lua
local UI = WebUI('test', 'https://google.com', WidgetVisibility.Visible, true, true, 0, 0)
```

| Type              |       Name        | Default | Description                                                              |
| ---------------  | :----------------- | ----- | ----------------------------------------------------------------------  |
| string | `Name`   |  | Unique identifier for logs.  |
| string | `Path`  |   | Web URL or HTML file path (e.g. "https://google.com" or "file://path/to/index.html") |
| [WidgetVisibility]() | `Visibility`  |   `WidgetVisibilty[Visible]`   |  Visibility of WebUI Widget |
| boolean               | `IsTransparent` | `true` | Supports transparent background |
| boolean               | `AutoResize`   | `true`  | Auto-resize to full viewport |
| number            | `Width`           |     0         | Width if not auto-resizing  |
| number        |       `Height`        |     0         | Height if not auto-resizing |

## Functions

<FunctionsDeclaration type="Class" name="WebUI" />

### BringToFront
Brings this WebUI to front of all widgets
```lua
UI:BringToFront()
```

---

### RegisterEventHandler
Registers a Lua event by name with args
```lua
UI:RegisterEventHandler('Test', function(arg1) print(arg1) end)
```

---

### CallEvent
Call a JS event by name with args
```lua
UI:CallEvent('Test', 'This is a test event!')
```

---

### LoadURL
Loads a new URL
```lua
UI:LoadURL('https://youtube.com/')
```

---

### LoadHTML
Loads a raw HTML string
```lua
UI:LoadHTML([[
<html>
    <body>
        <h1 style='color: red'>Test</h1>
    </body>
</html>
]])
```

---

### GetName
Gets the name of this WebUI instance
```lua
UI:GetName()
```

---

### ExecuteJS
Executes arbitrary JavaScript
```lua
UI:ExecuteJS('alert("This is a test alert!");')
```

---

### SetFocus
Gives keyboard focus to the browser
```lua
UI:SetFocus()
```

---

### RemoveFocus
Removes keyboard focus from the browser
```lua
UI:RemoveFocus()
```

---

### SetLayout
Sets the layout of the WebUI widget
```lua
local Position = Vector2D(0, 0)
local Size = Vector2D(0, 0)
local AnchorsMinimum = Vector2D(0, 0)
local AnchorsMaximum = Vector2D(1, 1)
local Alignment = Vector2D(0.5, 0.5)
UI:SetLayout(Position, Size, AnchorsMinimum, AnchorsMaximum, Alignment)
```

---

### SetFreeze
Freezes or unfreezes rendering (Toggles Visibility)
```lua
UI:SetFreeze(false)
```

---

### SetVisibility
Overrides visibility
```lua
UI:SetVisibility(WidgetVisibility)
```

---

### EnableAudio
Enables the audio of the WebUI Widget
```lua
local SoundWave = UI:EnableAudio()
```

---

### SendMouseWheelEvent
Sends mouse wheel event to browser
```lua
local MouseWheelDelta = 1.0
local Position = Vector2D(0, 100)
local Scale = 1.0
UI:SendMouseWheelEvent(MouseWheelDelta, Position, Scale)
```

---

### SendKeyEvent
Sends key event to browser
```lua
local Key = UE.EKeys['Tab']
local Modifiers = UE.FModifierKeysState(false, false, false, false, false, false, false, false, false)
local KeyEvent = UE.FKeyEvent(
    Key,
    Modifiers,
    0,
    false,
    0,
    0
)
UI:SendKeyEvent(KeyEvent)
```

---

### SendMouseMoveEvent
Sends a mouse move event to browser
```lua
UI:SendMouseMoveEvent(Vector2D(100, 50), 1.0)
```

### TriggerLeftClick
Sends a left click mouse event to browser
```lua
UI:TriggerLeftClick(Vector2D(100, 50), 1.0)
```

---

### TriggerRightClick
Sends a right click mouse event to browser
```lua
UI:TriggerRightClick(Vector2D(100, 50), 1.0)
```

---

### GetSize
Gets the current size of WebUI widget
```lua
UI:GetSize()
```

---

### GetVisibility
Gets the current visibility state of widget
```lua
UI:GetVisbility()
```

---

### IsFrozen
Gets the current frozen state of the widget
```lua
UI:IsFrozen()
```
