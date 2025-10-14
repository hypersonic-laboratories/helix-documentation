# 👁️ qb-target
Just look at it

## Introduction
qb-target is a targeting system that enables interaction with entities, players, and zones.
It replaces traditional markers and distance checks with an intuitive targeting interface, improving player experience and performance

## Configuration
All configurable options listed below are found in the `config.lua`

### Activation Key
This option allows you to change the key which activates the targeting system

```lua title="Example"
Config.OpenKey = 'F'
```

### Interaction Key
This option allows you to change the key needed to be pressed to gain mouse control to choose a target option

```lua title="Example"
Config.MenuControlKey = 'RightMouseButton'
```

### Raycast Distance
This options allows you to define the maximum length of the raycast target uses

```lua title="Example"
Config.MaxDistance = 1000
```

## Functions

### AddBoxZone
Creates a 3D rectangular interaction zone at a specified location.
This zone can be targeted by players to trigger custom interactions, replacing the need for traditional markers and distance checks

/// tip
- If both minZ and maxZ are provided → calculate height from those
- Otherwise → use height from zoneOptions (defaults to 200.0 if neither is provided)
///

- name `string`
- center `Vector`
- length `number`
- width `number`
- zoneOptions `table`
    - heading `number`
    - minZ `number`
    - maxZ `number`
    - height `number`
    - debug `boolean`
    - distance `number`
- targetOptions `table`
    - type: `string`
    - event: `string`
    - icon: `string`
    - label: `string`
    - targeticon: `string` _(optional)_
    - item: `string` _(optional)_
    - job: `string` or `table` _(optional)_
    - gang: `string` or `table` _(optional)_
    - citizenid: `string` or `table` _(optional)_

```lua title="Example"
exports['qb-target']:AddBoxZone("bank_vault", Vector(255.0, 225.0, 101.0), 5.0, 5.0, {
    heading = 340.0,
    minZ = 100.0, -- or replace these with height = 3.0
    maxZ = 103.0, --^
    debug = false,
    distance = 1000
}, {
    {
        label = "Open Vault",
        icon = "fas fa-lock-open",
        event = 'bank:client:openVault'
    }
})
```

### AddSphereZone
Creates a spherical interaction zone at a specified location.
This zone can be targeted by players to trigger custom interactions, replacing the need for traditional markers and distance checks.
Sphere zones are ideal for circular areas or when rotation isn't needed

- name `string`
- center `Vector`
- radius `number`
- zoneOptions `table`
    - debug `boolean`
    - distance `number`
- targetOptions `table`
    - type: `string`
    - event: `string`
    - icon: `string`
    - label: `string`
    - targeticon: `string` _(optional)_
    - item: `string` _(optional)_
    - job: `string` or `table` _(optional)_
    - gang: `string` or `table` _(optional)_
    - citizenid: `string` or `table` _(optional)_

```lua title="Example"
exports['qb-target']:AddSphereZone("atm_interaction", Vector(147.5, -1035.8, 30), 100, {
    debug = false,
    distance = 1000
}, {
    {
        icon = "fas fa-credit-card",
        label = "Use ATM",
        event = "atm:client:openMenu"
    }
})
```

### AddTargetEntity
Adds targeting options to an existing entity (ped, vehicle, object, etc.).
This allows players to interact with the entity when looking at it.

- entity `entity` - The entity to add targeting to
- parameters `table` - Configuration table containing distance and options
    - distance `number` - Maximum interaction distance (defaults to Config.MaxDistance)
    - options `table` - Array of interaction options (required, must not be empty)
        - type: `string`
        - event: `string`
        - icon: `string`
        - label: `string`
        - targeticon: `string` _(optional)_
        - item: `string` _(optional)_
        - job: `string` or `table` _(optional)_
        - gang: `string` or `table` _(optional)_
        - citizenid: `string` or `table` _(optional)_

```lua title="Example"
exports['qb-target']:AddTargetEntity(ped, {
    distance = 1000,
    options = {
        {
            label = "Talk to NPC",
            icon = "fas fa-comments",
            event = "npc:client:talk"
        },
        {
            label = "Give Item",
            icon = "fas fa-hand-holding",
            event = "npc:client:giveItem",
            item = "water"
        }
    }
})
```

### RemoveTargetEntity
Removes all targeting options from an entity

```lua title="Example"
exports['qb-target']:RemoveTargetEntity(ped)
```

### RemoveZone
Removes a zone that was created with AddBoxZone or AddSphereZone.
This also destroys the zone actor and cleans up all associated data

```lua title="Example"
exports['qb-target']:RemoveZone("bank_vault")
```