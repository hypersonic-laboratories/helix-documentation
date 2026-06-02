# 🅿️ qb-garages
Park it, then go find it again.

## Introduction
qb-garages lets players store and retrieve their owned vehicles. Walking into a garage zone and pressing **E** on foot opens the garage menu to take a vehicle out; pressing **E** while sitting in a vehicle deposits it. Garages can be public, locked to a job or gang, tied to a house, or act as a depot/impound that charges a release fee.

Vehicle metadata comes from the shared vehicle list (`exports['qb-core']:GetShared('Vehicles')`); vehicle ownership and state live in the `player_vehicles` database table.

## Configuration
All configurable options listed below are found in the `config.lua`

### Global Options
Top-level toggles controlling how garages behave.

- AutoRespawn: `boolean` — `true` stores all out vehicles back into their garage on restart; `false` leaves vehicle states untouched
- VisuallyDamageCars: `boolean` — `true` applies stored damage to a vehicle on spawn; `false` spawns it clean
- SharedGarages: `boolean` — `true` lets a player take any of their vehicles from any garage; `false` restricts retrieval to the garage the vehicle was stored in
- ClassSystem: `boolean` — `true` restricts vehicles by class; `false` allows any class in any garage
- Warp: `boolean` — `true` warps the player into the vehicle on spawn; `false` spawns it without warping

```lua title="Example"
Config.AutoRespawn = true
Config.VisuallyDamageCars = true
Config.SharedGarages = false
Config.ClassSystem = false
Config.Warp = true

Config.VehicleClass = UE.EHelixVehicleType
```

### Garages
`Config.Garages` is a table indexed by a unique garage id. Each garage defines where the access zone is, where vehicles spawn, who may use it, and which vehicle category it accepts.

- label: `string` — display name shown in menus
- takeVehicle: `Vector` — center of the access zone (where the player stands to open the garage)
- spawnPoint: `table` — one or more `{ coords = Vector, heading = number }` entries where retrieved vehicles spawn
- type: `string` — `'public'`, `'job'`, `'gang'`, `'depot'`, or `'house'`
- category: `Config.VehicleClass.*` — accepted vehicle type (e.g. `Config.VehicleClass.Car`)
- <mark style="color:yellow;">job</mark>: `string` — required job name (for `type = 'job'`)
- <mark style="color:yellow;">jobType</mark>: `string` — required job type, e.g. `'leo'` or `'ems'` (for `type = 'job'`)

/// info
A `job`-type garage opens when the player's job name matches `job` **or** their job type matches `jobType`. A `gang`-type garage matches the player's gang against the garage's `job` field. `public` garages are open to everyone, and `depot` garages list impounded vehicles for paid release.
///

```lua title="Example"
Config.Garages = {
    apartment1 = {
        label = 'Brightside Motel',
        takeVehicle = Vector(576131, 597559, 4553),
        spawnPoint = {
            {
                coords = Vector(576031, 596919, 4553),
                heading = 177,
            }
        },
        type = 'public', -- public, gang, job, depot
        category = Config.VehicleClass.Car
    },
    police = {
        label = 'Police',
        takeVehicle = Vector(-340755, -145572, -2885),
        spawnPoint = {
            coords = Vector(-340842, -145021, -2885),
            heading = 180,
        },
        type = 'job',
        category = Config.VehicleClass['car'], -- car, air, sea, rig
        job = 'police',
        jobType = 'leo'
    },
}
```

/// tip
Several blip fields (`showBlip`, `blipName`, `blipNumber`, `blipColor`) appear in the config but are currently unused — blip creation is commented out in the client.
///

### Depot / Impound
A garage with `type = 'depot'` lists vehicles that have an impound fee (`depotprice > 0` in `player_vehicles`). Taking a vehicle out triggers `qb-garages:server:PayDepotPrice`, which charges the stored `depotprice` from the player's `cash` (or `bank` if cash is short) before spawning it. Vehicles with no fee are released for free. When `Config.AutoRespawn` runs on restart, vehicles left out are reset and assigned a depot price.

## Functions

### getAllGarages
Returns a flat list of all configured garages, intended for other resources (for example a phone app) to enumerate available garages. Each entry contains `name`, `label`, `type`, `takeVehicle`, `putVehicle`, `spawnPoint`, `showBlip`, `blipName`, `blipNumber`, `blipColor`, and `vehicle`.

```lua title="Example"
local garages = exports['qb-garages']:getAllGarages()
for i = 1, #garages do
    print(garages[i].name, garages[i].label, garages[i].type)
end
```
