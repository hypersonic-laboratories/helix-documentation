---
title: Input
description: Input is used to listen to key events
sidebar_position: 0
tags: [class]
---

The `Input` class provides a way to listen for key events such as presses or releases. You can bind custom functions to specific keys, allowing for flexible input handling.

---

## Functions
<FunctionsDeclaration type="Class" name="Input" />

### `BindKey`
Binds a function to event listener type for a specific key.

- Key: `string`
- Callback: `function`
- ListenerType (Optional): `string` = 'Pressed'

```lua
Input.BindKey('Tab', function() 
    print('Tab Released') 
end, 'Released')
```

---