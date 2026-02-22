---
title: Helix.Input
description: Keyboard input handling
---

## Description

`Helix.Input` binds callbacks to key presses. Use the key name and a callback; the callback runs when the key is pressed.

## Methods

### Input (key, callback)

Bind key press handler. Use as `Helix.Input(key, callback)`.

```javascript
Helix.Input('E', () => {
  console.log('E key pressed')
})

Helix.Input('J', () => {
  const id = Helix.Player.helixId()
  if (isAdmin(id)) {
    ui.BringToFront()
    ui.SendEvent('show', {})
    ui.SetInputMode(1)
  }
})

Helix.Input('F1', () => {
  console.log('F1 pressed - Help menu')
})
```
