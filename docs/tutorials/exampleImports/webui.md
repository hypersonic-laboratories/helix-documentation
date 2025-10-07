---
title: Creating Web User Interface
tags: [scripting]
---
# Creating Web User Interface
This page explains how to use `WebUI`, a browser-based UI widget class for rendering HTML and JavaScript interfaces in your game.
`WebUI` provides full control over layout, input handling, JS calls, and event communication between Lua and the browser.

## Creating WebUI

```lua title="Displaying Web Page"
-- Loads a live website and resizes to fit the screen
local ui = WebUI("MainMenu", "https://example.com")
```

---

```lua title="Displaying Local File"
-- Loads a packaged HTML file with a fixed size
-- size is optional, preferred to use css for sizing
local shopUI = WebUI("Shop", "PackageName/UI/shop.html")
```

---

```lua title="Displaying Local File"
-- Destroys the widget when the package is unloaded to support hot-reloading
function onShutdown()
    if shopUI then shopUI:Destroy() end
end
```

---

## Communicating between JS & Lua with WebUI

### Lua Events

```js title="Listen for Lua"
// Register JavaScript function as usual
function setUser(name, id, active) {
  console.log("User from Lua:", name, id, active)
}
```

---

```lua title="Send to JavaScript"
-- Call the JavaScript function named `setUser` with 3 arguments
shopUI:CallFunction("setUser", "Joshua", 42, true)
```

---

```lua title="Listen for JavaScript"
-- Register an event in Lua attached to the UI
shopUI:RegisterEventHandler("submitForm", function(data)
    print("Form submitted by:", data.email)
end)
```

---

```js title="Send to Lua"
// Call the registered lua event from JavaScript
hEvent('EventName', {user: 'qwerty'});
```

---

### JS Events & Callbacks

```js title="Send to Lua with Callback"
hEvent('EventName', {user: 'qwerty'}, (isAdmin) => {
    // Response from Lua:
    console.log(`Admin: ${isAdmin}`);
})
```

---

```lua title="Respond to JS Callback from Lua"
shopUI:RegisterEventHandler('EventName', function(data, cb)
    if data.user == 'qwerty' then
        cb(true)
        return
    end

    cb(false)
end)
```

---

```lua title="Bind to delegate for when Browser is ready"
shopUI.Browser.OnLoadCompleted:Add(my_webui.Browser, function()
    shopUI:CallFunction('setUser', 'qwerty', true)
end)
```

---

WebUI is still under development and has some known issues. As a temporary measure, we recommend following this template if you want the widget to support hot-reloading:

```lua title="main.lua"
local UI = WebUI('MyUI', 'PackageName/index.html')

-- Destroy the widget when the package is unloaded to support hot-reloading
function onShutdown()
    if UI then UI:Destroy() end
end
```
