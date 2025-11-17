---
title: Input
description: Input is used to listen to key events
sidebar_position: 0
tags: [class]
---

The `Input` class provides a way to listen for key events such as presses or releases. You can bind custom functions to specific keys, allowing for flexible input handling.

/// tip
- When using a key to set input mode, the key "released" event will automatically trigger!
- For example, binding a pressed key to open a WebUI, it's "released" counterpart will trigger when you use `SetInputMode(1)`
///

## Functions
<FunctionsDeclaration type="Class" name="Input" />

### `BindKey`
Binds a function to event listener type for a specific key.

- Key: `string`
- Callback: `function`
- ListenerType (Optional): `string` = 'Pressed'

```lua
Input.BindKey('Tab', function()
    print('Tab Pressed')
end, 'Pressed')

Input.BindKey('Tab', function()
    print('Tab Released')
end, 'Released')
```