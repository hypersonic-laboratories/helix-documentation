---
title: Helix.WebUI
description: User interface widgets and event handling
---

## Description

`Helix.WebUI` is a constructor for web-based UI widgets. Use a name, path to HTML (e.g. under `js/`), and optional input mode. Send events to the UI and register handlers for events from the UI.

## Constructor

Create a new WebUI instance with `new Helix.WebUI(name, path, inputMode)`.

- **name**: `string`: Unique identifier for the UI (e.g. for logs).
- **path**: `string`:  HTML file path (e.g. `"js/your-module/web/index.html"`).
- **inputMode**: `number`: Optional. 0 = no input, 1 = UI only, 2 = game and UI.

```javascript
const ui = new Helix.WebUI(
  'helix_hud',
  'js/helix-hud/web/index.html',
  0
)
```

## Methods

### SendEvent (name, payload)

Send event to the UI.

```javascript
ui.SendEvent('updateStats', {
  health: 100,
  hunger: 75,
  thirst: 50
})
```

### RegisterEventHandler (name, handler)

Handle events from the UI.

```javascript
ui.RegisterEventHandler('closeMenu', () => {
  ui.SetInputMode(0)
  console.log('Menu closed')
})

ui.RegisterEventHandler('selectCharacter', async (data) => {
  const result = await Helix.call('selectCharacter', data)
  ui.SendEvent('updateData', result)
})
```

### BringToFront ()

Bring UI to front of stack.

```javascript
ui.BringToFront()
ui.SendEvent('show', { name: 'John Doe' })
```

### SetInputMode (mode)

Set input mode: 0 = game only, 1 = UI only, 2 = game and UI.

```javascript
ui.SetInputMode(1)

ui.SetInputMode(0)
```

### Destroy ()

Destroy the UI instance.

```javascript
if (ui) {
  ui.Destroy()
  ui = null
}
```
