---
title: WebUI
description: ''
tags: [class]
---
WebUI is a class that creates and manages web-based user interfaces within an application. It allows developers to display web content (URLs or HTML) as interactive widgets with full browser functionality.

/// note
This class supports all JS frameworks available, such as Vue.JS, React.JS, etc. WebUI is powered by **Chromium (CEF)**.
///

## Constructor

```lua
local UI = WebUI('test', 'Package/UI/index.html')
```

| Type              |       Name        | Default | Description                                                              |
| ---------------  | :----------------- | ----- | ----------------------------------------------------------------------  |
| string | `Name`   |  | Unique identifier for logs.  |
| string | `Path`  |   | Web URL or HTML file path (e.g. "https://google.com" or "PackageName/Directory/index.html") |
| number | `InputMode` | `0` | Which input mode the UI is assigned |

## Functions

### BringToFront
Brings the interface to the top of the UI stack

```lua title="Example"
UI:BringToFront()
```

---

### SetStackOrder
Sets the Z-Index for the UI in the stack

- order: `number`

```lua title="Example"
UI:SetStackOrder(1)
```

---

### SetInputMode
Sets what type of input the UI receives

- 0 = Game Only (No Input)
- 1 = UI Only (Full Input)
- 2 = Game and UI (Mouse Focus)

```lua title="Example"
UI:SetInputMode(1)
```

---

### RegisterEventHandler
Registers a Lua event by name with args

- eventName: `string`
- function: `function`
- callback: `any?` - optional

```lua title="Example"
UI:RegisterEventHandler('Test', function(arg1, cb)
    print('Received from JS: '.. arg1)
    cb(arg1)
end)
```

---

### SendEvent
Sends an event by name to JS with args through message events

- eventName: `string`
- payload: `any`

```lua title="Example"
UI:SendEvent('Test', {test = true})
```

---

### Destroy
Deactivates and destroys the WebUI Instance

/// tip
Call this on the global onShutdown function
///

```lua title="Example"
UI:Destroy()
```