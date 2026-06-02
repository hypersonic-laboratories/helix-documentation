# 🍔 qb-consumables
Snack attack

## Introduction
Registers food and drink items as usable through [qb-core](qb-core.md). When a player uses a consumable, its configured hunger or thirst value is added to the player's metadata and one of the item is removed from their [qb-inventory](qb-inventory.md).

## Configuration
The consumables are defined inline in the `server.lua` `Consumables` table rather than in a `config.lua`. Each entry maps an item name to the `hunger` or `thirst` amount it restores. On startup the package loops over this table and calls `exports['qb-core']:CreateUseableItem` for every item.

```lua title="Consumables"
local Consumables = {
    -- Food
    tosti         = { hunger = 40 },
    sandwich      = { hunger = 35 },
    fish          = { hunger = 30 },
    grape         = { hunger = 15 },
    twerks_candy  = { hunger = 10 },
    snikkel_candy = { hunger = 10 },
    -- Drinks
    water_bottle  = { thirst = 40 },
    grapejuice    = { thirst = 25 },
    kurkakola     = { thirst = 25 },
    coffee        = { thirst = 20 },
    beer          = { thirst = 20 },
    wine          = { thirst = 20 },
    whiskey       = { thirst = 15 },
    vodka         = { thirst = 15 },
}
```

### Adding a Consumable
Add a new line to the `Consumables` table with the item name as the key and the effect as the value. Use `hunger` for food and `thirst` for drinks.

```lua title="Example"
local Consumables = {
    -- ...existing entries...
    burger = { hunger = 50 },
    soda   = { thirst = 30 },
}
```

/// warning
Any item you add here must also exist in the qb-core `Shared.Items` table. If the item is not defined there it cannot be created as a usable item and will not work.
///
