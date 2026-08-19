# 🚓 qb-policejob
Put your hands where I can see them!

## Introduction

The law enforcement job. Provides everything an on-duty officer needs to police the city:

- Duty toggle, police garage and personal/evidence stashes at the station
- Grade-gated police vehicles and helicopters spawned with a `PD` plate
- Suspect interactions via [qb-target](qb-target.md) on other players: jail, view info, search, escort, handcuff, put in vehicle and check status
- A `handcuffs` useable item that cuffs the nearest player
- Fingerprint scanner (WebUI), evidence drawers and a status/injury check system
- Configurable speed/security camera coordinates and ammo labels

/// warning
The CCTV/security-camera viewer (`Client/cctv.lua`) and the chat commands (`Server/commands.lua` — `/cam`, `/911p`, `/tracker`) are fully commented out in this port. The camera coordinates remain in `config.lua`, but there is no working in-game way to view them yet.
///

## Configuration
All configurable options listed below are found in the `config.lua`

### Items & Ranks
The handcuff item that officers use, and the minimum grade required to run/manage licenses.

```lua title="Example"
Config.HandCuffItem = 'handcuffs',
Config.LicenseRank = 2,
```

The `handcuffs` item is registered as a useable item that triggers the cuffing logic, and the cuffed state is exposed through the `IsHandcuffed` export (see [Functions](#functions)).

### Ammo Labels
Maps ammo type identifiers to human-readable labels, used when logging/displaying recovered ammunition during evidence work.

```lua title="Example"
Config.AmmoLabels = {
    AMMO_PISTOL  = '9x19mm parabellum bullet',
    AMMO_SMG     = '9x19mm parabellum bullet',
    AMMO_RIFLE   = '7.62x39mm bullet',
    AMMO_MG      = '7.92x57mm mauser bullet',
    AMMO_SHOTGUN = '12-gauge bullet',
    AMMO_SNIPER  = 'Large caliber bullet',
}
```

### Objects
Placeable scene objects (cones, barriers, road signs, tents, lights). Each entry takes a mesh `model` and a `freeze` flag.

```lua title="Example"
Config.Objects = {
    cone     = { model = '', freeze = true },
    barrier  = { model = '', freeze = true },
    roadsign = { model = '', freeze = true },
    tent     = { model = '', freeze = true },
    light    = { model = '', freeze = true },
}
```

### Locations
Defines the station interaction points. `duty`, `vehicle`, `stash`, `fingerprint`, `evidence` and `stations` drive the in-world targets, while `impound`, `helicopter` and `trash` are placeholders shipped as `Vector(0, 0, 0)` to be set per-map.

- coords: `Vector`
- <mark style="color:yellow;">rotation</mark>: `Rotator`
- <mark style="color:yellow;">heading</mark>: `number`
- <mark style="color:yellow;">spawn</mark>: `table` (vehicle spawn `coords` + `rotation`)
- <mark style="color:yellow;">label</mark>: `string` (stations)

```lua title="Example"
Config.Locations = {
    duty = {
        { coords = Vector(-340320.0, -147790.0, -2840.0), rotation = Rotator(0, 90, 90) },
    },
    vehicle = {
        {
            coords = Vector(-339350.0, -145760.0, -2970.0),
            rotation = Rotator(0, 0, 0),
            spawn = { coords = Vector(-339358.10, -144656.62, -2980.06), rotation = Rotator(0, 90, 0) },
        },
    },
    stash = {
        { coords = Vector(-339520.0, -148650.0, -2930.0), rotation = Rotator(0, 90, 0) },
    },
    fingerprint = {
        { coords = Vector(-339884.98, -148380.16, -2889.0), rotation = Rotator(0, 90, 0) },
    },
    evidence = {
        { coords = Vector(-339641.0, -149006.58, -2912.50), heading = 0 },
    },
    stations = {
        { label = 'Police Station', coords = Vector(-340540.36, -147839.66, -2884.60) },
    },
    impound    = { Vector(0, 0, 0) }, -- placeholder, set per-map
    helicopter = { Vector(0, 0, 0) }, -- placeholder, set per-map
    trash      = { Vector(0, 0, 0) }, -- placeholder, set per-map
}
```

### Authorized Vehicles & Helicopters
Grade-gated spawn lists. The grade is the table key and acts as a minimum — higher ranks can also spawn anything available to lower grades. Spawned vehicles receive a `PD` plate followed by four random digits.

```lua title="Example"
Config.AuthorizedVehicles = {
    [0] = {
        ['bp_police'] = 'Police Car'
    },
}

Config.AuthorizedHelicopters = {
    [0] = {
        ['bp_pheli'] = 'Police Heli'
    }
}
```

### Cameras
Speed-camera and security-camera coordinates.

/// warning
These coordinates are read by the (currently disabled) CCTV code only. Editing them has no in-game effect until the camera viewer is enabled.
///

```lua title="Example"
Config.SpeedCamera = {
    Vector(13438.7, -46440.2, 209.7)
}

Config.SecurityCameras = {
    cameras = {
        { label = 'Hansons',         coords = Vector(16386.9, -46857.0, 400),  rotation = Rotator(0.0, 48.991352081299, 0.0),  canRotate = false, isOnline = true },
        { label = 'Eastside Market', coords = Vector(-54437.3, -41350.1, 400), rotation = Rotator(0.0, -139.79696655273, 0.0), canRotate = false, isOnline = true },
    },
}
```

## Functions

### IsHandcuffed
Returns whether a player is currently handcuffed. Exported on both the server and the client.

- CitizenId: `string` — _(server only)_ the citizen ID to check

```lua title="Example"
-- Server: check a specific player by citizen ID
local cuffed = exports['qb-policejob']:IsHandcuffed(citizenid)

-- Client: check the local player
local cuffed = exports['qb-policejob']:IsHandcuffed()
```
