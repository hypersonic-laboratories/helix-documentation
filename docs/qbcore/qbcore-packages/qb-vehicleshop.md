# 🚗 qb-vehicleshop
Test drive it before you wreck it.

## Introduction
qb-vehicleshop runs the in-world car dealership. It spawns showroom vehicles on pedestals, lets players browse the catalog, swap which vehicle is on display, take it for a timed test drive, and buy it outright with cash or bank. Purchased vehicles are written to the `player_vehicles` database and become retrievable through [qb-garages](qb-garages.md).

Vehicles come from the shared vehicle list (`exports['qb-core']:GetShared('Vehicles')`), so each entry's `label`, `price`, and `asset_name` are sourced from qb-core rather than configured here.

/// warning
Vehicle **financing is not implemented**. The config (`Config.FinanceCommission`, `Config.PaymentWarning`, `Config.PaymentInterval`, `Config.MinimumDown`, `Config.MaximumPayments`, `Config.PreventFinanceSelling`) and the locale strings exist as scaffolding, and a "Manage Financed Vehicles" target zone is registered, but there is no working finance/payment/repossession logic. Only **test drive**, **swap vehicle**, and **cash/bank purchase** actually work.
///

## Configuration
All configurable options listed below are found in the `config.lua`

### Commission & General
Commission percentages and sale-behavior toggles.

- Commission: `number` — fraction of a full cash sale paid to a salesperson (`0.10` = 10%)
- <mark style="color:yellow;">FinanceCommission</mark>: `number` — scaffolded, finance is not implemented
- <mark style="color:yellow;">PaymentWarning</mark>: `number` — scaffolded (minutes before repo)
- <mark style="color:yellow;">PaymentInterval</mark>: `number` — scaffolded (hours between payments)
- <mark style="color:yellow;">MinimumDown</mark>: `number` — scaffolded (minimum down-payment percent)
- <mark style="color:yellow;">MaximumPayments</mark>: `number` — scaffolded (max number of payments)
- <mark style="color:yellow;">PreventFinanceSelling</mark>: `boolean` — scaffolded
- FilterByMake: `boolean` — show a make list before the category menu
- SortAlphabetically: `boolean` — sort make/category/vehicle menus alphabetically
- HideCategorySelectForOne: `boolean` — hide the category menu when only one category is sold

```lua title="Example"
Config.Commission = 0.10
Config.FinanceCommission = 0.05
Config.PaymentWarning = 10
Config.PaymentInterval = 24
Config.MinimumDown = 10
Config.MaximumPayments = 24
Config.PreventFinanceSelling = false
Config.FilterByMake = false
Config.SortAlphabetically = true
Config.HideCategorySelectForOne = true
```

### Shops
`Config.Shops` is a table indexed by a unique shop id (the stock dealership id is `'pdm'`). Each shop defines its type, the zones used for spawning and test-driving, and the showroom display vehicles.

- Type: `string` — sale model (`'free-use'`)
- Job: `string` — required job, or `'none'` for open access
- TestDriveTimeLimit: `number` — test-drive duration in minutes
- ReturnLocation: `Vector` — where a finished test drive returns to
- VehicleSpawn: `table` — where a purchased vehicle spawns (`location` `Vector`, `rotation` `Rotator`)
- TestDriveSpawn: `table` — where a test-drive vehicle spawns (`location` `Vector`, `rotation` `Rotator`)
- <mark style="color:yellow;">FinanceZone</mark>: `Vector` — registers a "Manage Financed Vehicles" target (finance is not implemented)
- ShowroomVehicles: `table` — the display pedestals (see below)

```lua title="Example"
Config.Shops = {
    ['pdm'] = {
        ['Type'] = 'free-use',
        ['Job'] = 'none',
        ['TestDriveTimeLimit'] = 0.5,
        ['ReturnLocation'] = Vector(566599, 543296, 4564),
        ['VehicleSpawn'] = {
            location = Vector(566528, 542426, 4467),
            rotation = Rotator(0, -90, 0)
        },
        ['TestDriveSpawn'] = {
            location = Vector(566528, 542426, 4467),
            rotation = Rotator(0, -90, 0)
        },
        ['FinanceZone'] = Vector(567958, 543877, 4564),
        ['ShowroomVehicles'] = {
            -- see below
        },
    },
}
```

### Showroom Vehicles
Each entry in a shop's `ShowroomVehicles` is a display pedestal. A static vehicle is spawned at `coords` on resource start, and a [qb-target](qb-target.md) box zone is attached offering **Test Drive**, **Swap Vehicle**, and **Purchase Vehicle**. Swapping replaces `chosenVehicle` (the one that gets test-driven or bought) without changing `defaultVehicle`.

- coords: `table` — display position (`location` `Vector`, `rotation` `Rotator`)
- defaultVehicle: `string` — vehicle spawned on the pedestal at start, keyed into the shared `Vehicles` list
- chosenVehicle: `string` — the currently selected vehicle (updated by Swap)

```lua title="Example"
['ShowroomVehicles'] = {
    {
        coords = {
            location = Vector(567561, 545062, 4470),
            rotation = Rotator(0, 0, 0)
        },
        defaultVehicle = 'bp_merc',
        chosenVehicle = 'bp_merc',
    },
},
```

/// tip
Purchase uses the `price` from the shared `Vehicles` entry. The server pays from `cash` if the player can afford it, otherwise `bank`; if neither covers the price the sale is rejected. On success a plate is generated, the vehicle is inserted into `player_vehicles` (garage `'apartments'`), and a fueled vehicle spawns at the shop's `VehicleSpawn`.
///
