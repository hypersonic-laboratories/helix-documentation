# 🎣 qb-fishing
Just keep casting

## Introduction
Places fishing spots around the map using [qb-target](qb-target.md) sphere zones. Players interact with a spot, complete a minigame, and receive a fish through [qb-inventory](qb-inventory.md).

The fishing loop is:

1. Each configured zone spawns a marker and a `qb-target` sphere zone with a **Start Fishing** option.
2. Selecting it briefly gives the player a fishing rod (`ID_Misc_FishingRod`) and opens the fishing minigame (a `WebUI` panel).
3. On a successful minigame the server adds that water type's `reward` item to the player's inventory.

## Configuration
All configurable options listed below are found in the `config.lua`

### Global Options
- fishingTime: `number`

`fishingTime` is the duration in milliseconds used by the minigame.

```lua title="Example"
Config = {
    fishingTime = 10000,
}
```

### Water Types
`waterTypes` is a table keyed by a unique identifier. Each water type defines a label, the reward item caught there, and a list of `zones` (each a `coords` point that becomes a fishing sphere zone).

- id: `string`
- label: `string`
- reward: `string`
- zones: `table`

Each entry in `zones` is a `{ coords = Vector(x, y, z) }` point. A 100-unit `qb-target` sphere zone is created at each one.

```lua title="Example"
Config = {
    fishingTime = 10000,
    waterTypes = {
        ocean = {
            id = "ocean",
            label = "Ocean",
            reward = "fish",
            zones = {
                { coords = Vector(606302, 628637, 4703) },
                { coords = Vector(606019, 628637, 4703) },
                { coords = Vector(605737, 628637, 4703) },
            },
        },
        lake = {
            id = "lake",
            label = "Lake",
            reward = "fish",
            zones = {
                { coords = Vector(526826, 513713, 4570) },
                { coords = Vector(526984, 516069, 4570) },
            },
        },
        river = {
            id = "river",
            label = "River",
            reward = "fish",
            zones = {
                { coords = Vector(526857, 502417, 4594) },
                { coords = Vector(527152, 502330, 4594) },
            },
        },
        swamp = {
            id = "swamp",
            label = "Swamp",
            reward = "fish",
            zones = {
                { coords = Vector(526212, 505121, 4570) },
                { coords = Vector(526211, 505321, 4570) },
            },
        },
        deep_sea = {
            id = "deep_sea",
            label = "Deep Sea",
            reward = "fish",
            zones = {
                { coords = Vector(624520, 627591, 4394) },
                { coords = Vector(625256, 627634, 4392) },
            },
        },
    },
}
```

/// tip
The `reward` item for each water type must also exist in the qb-core `Shared.Items` table, otherwise it cannot be added to the player's inventory. In the shipped config every water type rewards `fish`.
///
