# 🚕 qb-taxijob
Where to, boss?

## Introduction
A taxi job where players clock in at a depot, grab a cab, and run a pickup/dropoff fare loop:

- Talk to the Taxi Depot NPC to go on duty and take a taxi out.
- An NPC passenger spawns at a random bus-stop bench. Drive to the highlighted pickup zone and press `[E]` to load them in.
- A second bench is picked as the drop-off. Drive there and press `[E]` to let the passenger out.
- The NUI fare meter tracks distance traveled and bills the rider per mile; the fare is paid into your bank, capped so the meter can't run wild.

## Configuration
All configurable options listed below are found in the `config.lua`

### Vehicle, Rate and Fare Padding
The top-level options set which vehicle the depot hands out, the fare charged per mile, and the multiplier used to cap the final payout against the straight-line distance between the pickup and drop-off benches.

- Rate: `number` — price charged per mile traveled.
- MaxFarePadding: `number` — multiplier applied to the base pickup-to-dropoff fare to set the maximum payout, accounting for turns and detours.

```lua title="Example"
Config = {
    Vehicle = '/abcca-qbcore-veh/QBCoreVehicles/BP_Taxi.BP_Taxi_C',
    Rate = 125.0,       -- price per mile
    MaxFarePadding = 2, -- adjust this as needed to account for turns, etc.
}
```

### Depots
Each depot defines where the duty NPC stands (`pedSpawn`) and where the taxi spawns when you take a vehicle (`vehicleSpawn`). The NPC offers toggle-duty, take-vehicle, and finish-work target options.

```lua title="Example"
Config.Locations = {
    Depots = {
        {
            label = 'Taxi Depot',
            pedSpawn = { coords = Vector(-355290, -131250, -2880), heading = 165 },
            vehicleSpawn = { coords = Vector(-355917, -130990, -2977), heading = 180 },
        },
    },
}
```

### Benches
Bus-stop benches double as both passenger pickup and drop-off points. Each is spawned as an `SM_BusStop` mesh. A random bench is chosen for the pickup and a different random bench for the drop-off on each fare.

```lua title="Example"
Config.Locations = {
    Benches = {
        { coords = Vector(-357440, -132210, -2970), heading = -90, npc = nil },
        { coords = Vector(-357440, -122370, -2970), heading = -90, npc = nil },
        { coords = Vector(-357440, -111940, -2970), heading = -90, npc = nil },
    },
}
```

/// info
The fare meter is a `WebUI` panel (`qb-taxijob/html/index.html`). It tracks live distance from the vehicle position, multiplies miles by `Config.Rate`, and the drop-off payout is the lesser of the metered fare and the padded pickup-to-dropoff fare. Payouts are added to the player's `bank` balance.
///
