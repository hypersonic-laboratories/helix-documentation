---
title: User Interface
tags: [scripting, ui]
---

## WebUI
With WebUI you can load HTML pages which integrate with your Packages in Lua using Events

///info
**Note:** All WebUI code runs on Client side!
///

```lua title="Client/Index.lua"
-- Spawns a WebUI with the HTML file you just created
MyUI = WebUI("My UI", "file://UI/index.html")

-- When the HTML is ready, triggers an Event in there
MyUI:Subscribe("Ready", function()
    MyUI:CallEvent("MyAwesomeEvent", "Hello! You are ready!")
end)

MyUI:Subscribe("MyAwesomeAnswer", function(param1)
    Console.Log("Received an answer! Message: " .. param1)
end)
```

```html title="Client/UI/index.html"
<html>
    <head>
        <script src="index.js"></script>
    </head>
    <body>
        Hello World!
    </body>
</html>
```

```javascript title="Client/UI/index.js"
// Register for "MyAwesomeEvent" from Lua
Events.Subscribe("MyAwesomeEvent", function(param1) {
    console.log("Triggered! " + param1);

    // Triggers "MyAwesomeAnswer" on Lua
    Events.Call("MyAwesomeAnswer", "Hey there!");
})
```

![WebUI results](/img/docs/01_UserInterface.png)

This will output:

```text
[WebUI]  Triggered! Hello! You are ready!
[Script] Received an answer! Message: Hey there!
```