# 🗑️ qb-garbagejob
One man's trash...

## Introduction
A sanitation job built around a collect-deposit-repeat route loop:

- Talk to the Garbage Depot NPC to go on duty and start a job; a garbage truck spawns and you're assigned a random number of stops.
- Target a dumpster (`SM_Dumpster`) to collect a trash bag — your character is handed an `ID_Misc_TrashBag` item to carry.
- Target the garbage truck to deposit the bag. Each deposit completes a stop and pays out a random per-bag amount.
- Once every stop is done, return the truck to the depot and complete the route to collect your earnings.

## Configuration
All configurable options listed below are found in the `config.lua`

### Stops and Bag Worth
Top-level options control how many stops a route has and the per-bag pay range. The stop count is rolled between `MinStops` and `MaxStops`; each deposited bag pays a random amount between `BagLowerWorth` and `BagUpperWorth`, accumulated into the route total.

- MinStops / MaxStops: `number` — bounds for the random number of stops per route.
- BagLowerWorth / BagUpperWorth: `number` — bounds for the random pay added per deposited bag.

```lua title="Example"
Config = {
    Vehicle = '/abcca-qbcore-veh/QBCoreVehicles/BP_Garbage_Truck.BP_Garbage_Truck_C',
    MinStops = 3,
    MaxStops = 10,
    BagLowerWorth = 300,
    BagUpperWorth = 1000,
}
```

### Depots
Each depot defines the duty NPC location (`pedSpawn`) and where the garbage truck spawns (`vehicleSpawn`). The NPC offers toggle-duty, start-job, and complete-route target options.

```lua title="Example"
Config.Locations = {
    Depots = {
        {
            label = 'West Garbage Depot',
            pedSpawn = { coords = Vector(-355218, -133170, -2882), heading = 176 },
            vehicleSpawn = { coords = Vector(-356090, -133100, -2981), heading = 180 },
        },
    },
}
```

### Dumpsters
Each entry spawns an `SM_Dumpster` mesh that can be targeted to grab a trash bag. A dumpster can only be collected once per route, and you can only carry one bag at a time.

```lua title="Example"
Config.Locations = {
    Dumpsters = {
        { coords = Vector(-360370, -132920, -2980), heading = 180 },
        { coords = Vector(-360650, -130620, -2980), heading = 0 },
        { coords = Vector(-358560, -129890, -2980), heading = 180 },
        -- ...additional dumpsters...
    },
}
```

/// info
Collecting gives the player an `ID_Misc_TrashBag` item via the inventory; depositing it at the truck removes the item, increments the stop counter, and adds a random `BagLowerWorth`–`BagUpperWorth` payout to the route. The full accumulated total is paid to the player's `bank` balance when the route is completed.
///
