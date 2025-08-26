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
UI = WebUI("My-UI", "index.html")

UI:RegisterEventHandler('Ready', function(data)
    print(data.arg)

    UI:CallFunction('changeColour', 'red')
end)
```

```html title="index.html"
<html>
    <head>
        <title>WebUI Test</title>
        <script src='./index.js'>
    </head>
    <body>
        <h1 id='text' style='color: black;'>This is a test WebUI Document!</h1>
    </body>
</html>
```

```javascript title="index.js"
// Register for "changeColour" from Lua
function changeColour(colour) {
    console.log('Event Triggered!');
    let text = document.getElementById('text');
    text.style.color = colour;
}

// Triggers "Ready" on Lua
fetch('http://127.0.0.1:8091/My-UI/Ready', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({arg: 'This is an argument'})
});
```

![WebUI results](/img/docs/01_UserInterface.png)

This will output:

```text
[Script] This is an argument
[WebUI] Event Triggered!
```

WebUI is still under development and has some known issues. As a temporary measure, we recommend following this template if you want the widget to be displayed at the start of the game and to support hot-reloading:

```lua title="main.lua"
local UI = nil

-- Delay loading to work around the race condition that steals inputs from the widget at the beginning of the game
Timer.Delay(HWorld, 2.5, function()
    UI = WebUI('MyUI', 'index.html')
    -- ...
end)

-- Destroy the widget when the package is unloaded to support hot-reloading
function onShutdown()
    if UI then UI:Destroy() end
end
```
