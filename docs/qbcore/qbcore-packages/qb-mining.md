# ⛏️ qb-mining
Rock and stone!

## Introduction
Spawns minable rocks across configured zones. Players use [qb-target](qb-target.md) to interact with a rock, complete a minigame, and receive a weighted ore reward delivered through [qb-inventory](qb-inventory.md).

The mining loop is:

1. Rocks are scattered randomly inside each `miningZone` (weighted by `rockTypes`).
2. The player targets a rock and selects **Mine Rock**, which is briefly given a jackhammer (`ID_Misc_Jackhammer`) and opens the mining minigame (a `WebUI` panel).
3. On a successful minigame the server adds the rock's ore item to the player's inventory and removes the rock.

## Configuration
All configurable options listed below are found in the `config.lua`

### Global Options
- NetworkedRocks: `boolean`
- miningTime: `number`

When `NetworkedRocks` is `true`, rocks are spawned once on the server and shared with every player (mined rocks are removed for everyone). When `false`, each client spawns its own local rocks. `miningTime` is the duration in milliseconds used by the minigame.

```lua title="Example"
Config = {
    NetworkedRocks = true,
    miningTime = 5000,
}
```

### Mining Zones
Each entry in `miningZones` defines a circular area that rocks are randomly placed inside.

- id: `number`
- name: `string`
- center: `vector`
- radius: `number`
- maxRocks: `number`
- minDistanceBetweenRocks: `number`
- rockTypes: `table`

`maxRocks` is the number of rocks the zone attempts to place, `radius` is how far from `center` they can spawn, and `minDistanceBetweenRocks` keeps them spaced apart.

### Rock Types
Each `rockTypes` entry is a possible ore the zone can spawn. Which rock type is picked for each rock is decided by `weight` (higher weight = more common).

- mesh: `string`
- item: `string`
- weight: `number`
- scale: `vector`

`mesh` is the UE static mesh path used for the rock, `item` is the inventory item awarded when it is mined, and `scale` sizes the spawned mesh.

```lua title="Example"
Config = {
    NetworkedRocks = true,
    miningTime = 5000,
    miningZones = {
        {
            id = 1,
            name = 'Main Mining Area',
            center = Vector(575778, 620372, 4440),
            radius = 1000,
            maxRocks = 25,
            minDistanceBetweenRocks = 200,
            rockTypes = {
                {
                    mesh = '/Game/Pacifica/Environment/Mesh/Rock/Tropical/SM_Beach_Rock_02A.SM_Beach_Rock_02A',
                    item = 'copper_ore',
                    weight = 40,
                    scale = Vector(2.0, 2.0, 2.0)
                },
                {
                    mesh = '/Game/Pacifica/Environment/Mesh/Rock/Tropical/SM_Beach_Rock_02A.SM_Beach_Rock_02A',
                    item = 'gold_ore',
                    weight = 35,
                    scale = Vector(2.0, 2.0, 2.0)
                },
                {
                    mesh = '/Game/Pacifica/Environment/Mesh/Rock/Tropical/SM_Beach_Rock_02A.SM_Beach_Rock_02A',
                    item = 'diamond',
                    weight = 25,
                    scale = Vector(2.0, 2.0, 2.0)
                },
                {
                    mesh = '/Game/Pacifica/Environment/Mesh/Rock/Tropical/SM_Beach_Rock_02A.SM_Beach_Rock_02A',
                    item = 'iron_ore',
                    weight = 45,
                    scale = Vector(2.0, 2.0, 2.0)
                },
            }
        }
    }
}
```

/// tip
Every `item` you list under `rockTypes` must also exist in the qb-core `Shared.Items` table, otherwise the reward cannot be added to the player's inventory.
///
