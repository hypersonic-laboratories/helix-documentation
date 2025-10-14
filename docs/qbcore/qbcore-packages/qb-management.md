# 👔 qb-management
Become a CEO, manage your company, make millions

## Introduction

- Manage employees online or offline!
- Access a personal boss level stash!
- Allows for multiple boss menu locations!

## Configuration
All configurable options listed below are found in the `config.lua`

### Job Locations
This option allows you to set the locations where the boss rank of the specified job can manage their company

```lua title="Example"
Config.BossMenus = {
    police = {
        Vector(-4117.481799, 2874.994460, -299.875906),
    },
    ambulance = {
        Vector(0, 0, 0),
    },
    cardealer = {
        Vector(0, 0, 0),
    },
    mechanic = {
        Vector(0, 0, 0),
    }
}
```

### Gang Locations
This option allows you to set the locations where the boss rank of the specified gang can manager their group

```lua title="Example"
Config.GangMenus = {
    lostmc = {
        Vector(-4113.607536, 3416.397127, -299.875906),
    },
    ballas = {
        Vector(0, 0, 0),
    },
    vagos = {
        Vector(0, 0, 0),
    },
    cartel = {
        Vector(0, 0, 0),
    },
    families = {
        Vector(0, 0, 0),
    }
}
```