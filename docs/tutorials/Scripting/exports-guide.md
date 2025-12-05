---
title: Exports
description: Complete guide to using exports for inter-package communication in Lua
tags: [ scripting ]
---

Exports provide a clean way for developers to expose functions from one Lua package and call them from another.
This enables modular code organization and seamless communication between different packages in your project.

---

## Functions

### `Register Export`

Registers a function that can be called by other packages.

- packageName `string`
- exportName `string`
- callback `function`

```lua title="Example"
exports('myPackage', 'GetPlayerCount', function()
    return 32
end)

exports('myPackage', 'SendNotification', function(controller, message)
    TriggerClientEvent(controller, 'showNotification', message)
    return true
end)

exports('myPackage', 'GetPlayerData', function()
    return {
        name = 'John Doe',
        ping = 45,
    }
end)
```

---

### `Call Export`

Calls a function registered by another package. Supports parameters and return values.

- packageName `string`
- exportName `string`
- return `any`

```lua title="Example"
local playerCount = exports['myPackage']:GetPlayerCount()
print('Current players:', playerCount)

local success = exports['myPackage']:SendNotification(controller, 'Hello World!')

local playerData = exports['myPackage']:GetPlayerData()
print('Player name:', playerData.name)
print('Player ping:', playerData.ping)
```