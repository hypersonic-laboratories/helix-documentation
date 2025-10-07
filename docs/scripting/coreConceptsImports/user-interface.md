---
title: User Interface
tags: [scripting, ui]
---

## WebUI
With WebUI you can load HTML pages which integrate with your Packages in Lua using Events

///info
**Note:** All WebUI code runs on Client side!
///

```lua title="index.lua"
-- Spawns a WebUI with the HTML file you just created
UI = WebUI("My-UI", "PackageName/UI/index.html")

UI:RegisterEventHandler('Ready', function(data)
    print(data.arg)

    UI:CallFunction('changeColour', 'red')
end)
```

```html title="UI/index.html"
<html>
    <head>
        <title>WebUI Test</title>
        <script src='./index.js'>
    </head>
    <body>
        <h1 id='text' style='color: black; display: flex; align-content: center; align-items: center;'>This is a test WebUI Document!</h1>
    </body>
</html>
```

```javascript title="UI/index.js"
// Register for "changeColour" from Lua
function changeColour(colour) {
    console.log('Event Triggered!');
    let text = document.getElementById('text');
    text.style.color = colour;
}

// Triggers "Ready" on Lua
hEvent('Ready', {arg: 'This is an argument', boolArg: true})
```

---

///info 
Note: You can open the Developer Tools by pressing Ctrl+Shift+I. 
///

WebUI is still under development and has some known issues. As a temporary measure, we recommend following this template if you want the widget to support hot-reloading:

```lua title="main.lua"
local UI = WebUI('My-UI', 'PackageName/index.html')

-- Destroy the widget when the package is unloaded to support hot-reloading
function onShutdown()
    if UI then UI:Destroy() end
end
```
