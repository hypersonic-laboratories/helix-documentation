---
title: WebUI
description: Class for spawning a web browser in the screen
sidebar_position: 0
tags: [scripting, ui]
---


///tip

Our WebUI implementation is built using the last versions of [Chromium Embedded Framework](https://bitbucket.org/chromiumembedded/cef).

///

///note Proprietary Codecs

Proprietary Codecs like **MP3** and **AAC** are not supported on public CEF builds. We recommend converting your media files to **WEBM** or **OGG**.

///


## Examples

```lua title="Client/Index.lua"
-- Loading a local file
local my_ui = WebUI(
    "Awesome UI",            -- Name
    "file://UI/index.html",  -- Path relative to this package (Client/)
    WebUIVisibility.Visible  -- Is Visible on Screen
)

-- Loading a Web URL
local my_browser = WebUI(
    "Awesome Site",          -- Name
    "https://helix.world",   -- Web's URL
    WebUIVisibility.Visible  -- Is Visible on Screen
)

-- Loading a local file from other package
local my_ui = WebUI(
    "Awesome Other UI",      -- Name
    "file://other-package/Client/UI/index.html",
    WebUIVisibility.Visible  -- Is Visible on Screen
)
```


#### Using a WebUI as Mesh Material

```lua title="Client/Index.lua"
-- Spawns a WebUI with is_visible = false, is_transparent = false, auto_resize = false and size of 500x500
local my_ui = WebUI("Awesome Site", "https://helix.world", false, false, false, 500, 500)

-- Spawns a StaticMesh (can be any mesh)
local static_mesh = StaticMesh(Vector(0, 0, 100), Rotator(), "helix::SM_Cube")

-- Sets the mesh material to use the WebUI
static_mesh:SetMaterialFromWebUI(my_ui)
```


#### Communicating between Lua and JS (WebUI)

```lua title="Client/Index.lua"
local my_ui = WebUI("Awesome UI", "file://UI/index.html")

local param1 = 123
local param2 = "hello"

-- Calls a JS event
my_ui:CallEvent("MyEvent", param1, param2)

-- Subscribes to receive JS events
my_ui:Subscribe("MyAnswer", function(param1)
    Console.Log("Received back! %s", param1)
    -- Will output 'Received back! Hey there!'
end)
```

```javascript title="script.js"
// Register for "MyEvent" from Lua
Events.Subscribe("MyEvent", function(param1, param2) {
    console.log("Triggered! " + param1 + " " + param2);
    // Will output 'Triggered! 123 hello'

    // Triggers "MyAnswer" on Lua
    Events.Call("MyAnswer", "Hey there!");
})
```


#### Pretty Scroll Bar

Since we migrated from Webkit to CEF, some scrollbars got ugly. Here's a small CSS snippet to make them almost like the Webkit ones:

```css
::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #494949;
}

body {
    scrollbar-gutter: stable both-edges;
}
```

More related examples:

<ReferenceLink href="core-concepts/scripting/user-interface">User Interface</ReferenceLink>
<ReferenceLink href="getting-started/code-examples/basic-hud-html">Basic HUD (HTML)</ReferenceLink>

///tip

You can use the output Texture from a Canvas with [:SetMaterialFromWebUI()](/scripting-reference/classes/base-classes/paintable.mdx#setmaterialfromwebui) method!

///


## Constructors

<ConstructorDeclaration type="Class" name="WebUI" />


## 🔍 HTML Path Searchers

Loading a .html file supports the following searchers, which are looked in the following order:

1. Relative to `current-file-path/`
2. Relative to `current-package/Client/`
3. Relative to `current-package/`
4. Relative to `Packages/`


## Static Functions

<StaticFunctionsDeclaration type="Class" name="WebUI" />


## Functions

<FunctionsDeclaration type="Class" name="WebUI" />


## Events

<EventsDeclaration type="Class" name="WebUI" />