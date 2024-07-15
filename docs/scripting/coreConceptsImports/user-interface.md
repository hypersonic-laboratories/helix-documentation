---
title: User Interface
description: How to display information in the Screen for the Player
sidebar_position: 5
tags: [scripting, ui]
status: old
---

--8<-- "old.md"


import { ReferenceLink } from '@site/docs/components/_nanos.mdx';

How to display information in the Screen for the Player.

In HELIX there are 2 official ways of plotting screen data: **WebUI** and **Canvas**.

/// warning

We highly recommend using **WebUI** instead of **Canvas** to create your UIs 😉.

///


## WebUI

With WebUI you can load HTML pages which integrate with your Packages in Lua using Events.

### Basic WebUI Setup

This sample code shows how to add a basic page using HTML+JavaScript with the WebUI class.

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

<ReferenceLink href="getting-started/code-examples/basic-hud-html">Basic HUD (HTML)</ReferenceLink>

## Canvas

<ReferenceLink href="getting-started/code-examples/basic-hud-canvas">Basic HUD (Canvas)</ReferenceLink>

