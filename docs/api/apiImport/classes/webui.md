---
title: WebUI
description: ''
tags: [class]
---

WebUI is a class that creates and manages web-based user interfaces within an application. It allows developers to display web content (URLs or HTML) as interactive widgets with full browser functionality.

/// note
This class supports all JS frameworks available, such as Vue.JS, React.JS, etc. WebUI is powered by **Chromium (CEF)**.
///

## Constructors

<ConstructorDeclaration type="Class" name="WebUI" />

```lua
local UI = WebUI('test', 'Package/UI/index.html')
```

| Type              |       Name        | Default | Description                                                              |
| ---------------  | :----------------- | ----- | ----------------------------------------------------------------------  |
| string | `Name`   |  | Unique identifier for logs.  |
| string | `Path`  |   | Web URL or HTML file path (e.g. "https://google.com" or "PackageName/Directory/index.html") |

## Functions

<FunctionsDeclaration type="Class" name="WebUI" />

### RegisterEventHandler
Registers a Lua event by name with args
```lua
UI:RegisterEventHandler('Test', function(arg1) print(arg1) end)
```

---

### CallFunction
Call a JS function by name with args, used to trigger logic, like an event
```lua
UI:CallFunction('Test', 'This is a test event!')
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