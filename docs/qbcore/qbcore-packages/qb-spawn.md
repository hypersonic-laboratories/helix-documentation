# 🗺️ qb-spawn
Instant transmission

## Introduction
Configure multiple spawn locations for players to choose from and auto populates their houses that they own

## Configuration
All configurable options listed below are found in the `config.lua`

### Spawn Locations
This option allows you to define different spawn locations on map that players can choose where to start playing

```lua title="Example"
Config = {
    Spawns = {
        gas = {
            coords = { -2431.417130, 14675.314118, -299.850009 },
            location = 'gas',
            label = 'Gas Station',
        }
    }
}
```