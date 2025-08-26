---
title: Creating Web User Interface
tags: [scripting]
---
# Creating Web User Interface
This page explains how to use `WebUI`, a browser-based UI widget class for rendering HTML and JavaScript interfaces in your game.
`WebUI` provides full control over layout, input handling, JS calls, and event communication between Lua and the browser.

```lua title="Displaying Web Page"
-- Loads a live website and resizes to fit the screen
local ui = WebUI("MainMenu", "https://example.com")
```

---

```lua title="Displaying Local File"
-- Loads a packaged HTML file with a fixed size
-- size is optional, preferred to use css for sizing
local shopUI = WebUI("Shop", "UI/shop.html", nil, true, false, 800, 600)
```

```lua title="Displaying Local File"
-- Destroys the widget when the package is unloaded to support hot-reloading
function onShutdown()
    if shopUI then shopUI:Destroy() end
end
```

```js title="Listen for Lua"
// Register JavaScript function as usual
function setUser(name, id, active) {
  console.log("User from Lua:", name, id, active)
}
```

```lua title="Send to JavaScript"
-- Call the JavaScript function named `setUser` with 3 arguments
shopUI:CallFunction("setUser", "Joshua", 42, true)
```

```lua title="Listen for JavaScript"
-- Register an event in Lua attached to the UI
shopUI:RegisterEventHandler("submitForm", function(data)
    print("Form submitted by:", data.email)
end)
```

```js title="Send to Lua"
// Call the registered lua event from JavaScript
fetch('http://127.0.0.1:8091/MainMenu/submitForm', {
  method: 'POST',
  mode: 'no-cors',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: 'user@example.com'
  })
})
```

---

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
