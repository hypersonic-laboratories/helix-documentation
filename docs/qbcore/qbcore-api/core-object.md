# Core Object
Let's dive into the core object of the qb-core resource!

## Introduction
The Core Object is the backbone of the `qb-core` framework, providing essential functionality and utilities for managing your server's gameplay mechanics, player data, and overall resource interactions.
This page will guide you through the key features, methods, and best practices for using the Core Object effectively.

Almost every system in QBCore—jobs, inventories, permissions, events—talks to or through the Core Object.
Understanding how to access and use it is the first step to writing powerful, maintainable scripts.

## Accessing Core Functionality
Instead of `GetCoreObject()`, pull the specific export(s) you need:

```lua
-- Cache frequently used exports at the top of your script
local GetPlayer   = exports['qb-core']:GetPlayer
local AddItem     = exports['qb-core']:AddItem
local RemoveItem  = exports['qb-core']:RemoveItem

-- Use them anywhere in your code
RegisterServerEvent('qb-docs:server:giveTestItem', function(source, item, count)
    local Player = GetPlayer(source)
    if not Player then return end
    AddItem(source, item, count)
end)
```

You can also call exports inline if you prefer not to cache:

```lua
exports['qb-core']:AddItem(source, 'water', 1)
```

---

## Reference

- You can find a list of all available player functions [HERE](player-functions.md)
- You can find a list of all available client functions [HERE](client-functions.md)
- You can find a list of all available server functions [HERE](server-functions.md)