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
local shopUI = WebUI("Shop", "blui://UI/shop.html", nil, true, false, 800, 600)
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