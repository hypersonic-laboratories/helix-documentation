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
// Create JavaScript function to handle message
function setUser(data) {
  console.log("User from Lua:", data.name, data.id, data.active)
}

window.addEventHandler('message', (event) => {
    switch(event.data.name) {
        case "setUser":
            setUser(event.data.args[0]);
            break;
    }
})
```

---

```lua title="Send to JavaScript"
-- Send Event named `setUser` to JavaScript with arguments
shopUI:SendEvent("setUser", {name = "Joshua", id = 42, active = true})
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

WebUI is still under development and has some known issues. As a temporary measure, we recommend following this template if you want the widget to support hot-reloading:

```lua title="main.lua"
local UI = WebUI('MyUI', 'PackageName/index.html')

-- Destroy the widget when the package is unloaded to support hot-reloading
function onShutdown()
    if UI then UI:Destroy() end
end
```
