# 📦 qb-deliveryjob
Sign here, please.

## Introduction
A courier job where players run packages along a randomly generated multi-stop route:

- Talk to the depot NPC to start delivering; a delivery truck spawns for you.
- Target the truck to pick up a box. Your character carries the box and a guidance cone appears, rotating to point toward the next drop-off.
- Drive to the highlighted location and press `[E]` to deliver the package, then return for the next box.
- After the final stop, return the truck to the depot to collect payment. Payout scales with how much of the route you finished.

## Configuration
All configurable options listed below are found in the `config.lua`

### Job, Stops and Payout
Top-level options control the required job name, how many stops a route has, and the random pay range. The number of stops is rolled between `Stops.Minimum` and `Stops.Maximum`; the payout is rolled between `Payout.Minimum` and `Payout.Maximum`.

```lua title="Example"
Config = {
    Job = 'delivery',
    Stops  = { Minimum = 3, Maximum = 5 },
    Payout = { Minimum = 500, Maximum = 1000 },
}
```

/// info
Payout is reduced for incomplete routes: you receive nothing if you delivered no packages, and roughly 30% of the rolled amount if you returned the truck before finishing every stop.
///

### Depots
Each depot defines the NPC location (`pedSpawn`) and where the delivery truck spawns (`vehicleSpawn`). The NPC offers start-delivering and finish-delivering target options.

```lua title="Example"
Config.Depots = {
    {
        label = 'Test',
        pedSpawn = { coords = Vector(-355239.42, -132407.13, -2882.44), heading = 176, },
        vehicleSpawn = { coords = Vector(-355929.31, -132383.51, -2897.84), heading = 180, },
    }
}
```

### Vehicles
A list of vehicle keys from the qb-core Shared `Vehicles` table. One is picked at random per job (falling back to `bp_deliverytruck`).

```lua title="Example"
Config.Vehicles = {
    'bp_deliverytruck'
}
```

### Locations
The pool of possible drop-off points. Each route is drawn randomly from this list, sorted by proximity from the closest starting point. If too few locations are selected for the rolled stop count, the route is regenerated.

```lua title="Example"
Config.Locations = {
    Vector(-316430.68, -130243.49, -3391.50),
    Vector(-314462.63, -120730.97, -3358.08),
    Vector(-314610.22, -119405.93, -3356.28),
    Vector(-315755.85, -112270.68, -3346.73),
    Vector(-343143.34, -145299.86, -2882.38)
}
```

### Prop
The carried package mesh and the holding animation used while a courier is carrying a box.

```lua title="Example"
Config.Prop = {
    Mesh = '/Engine/BasicShapes/Cube.Cube',
    HoldingAnimation = '/Game/Characters/Heroes/Unified/Animations/Package_Deliveryman/Carrying/A_Carrying_BothArms_LargeBox_Holding_Idle.A_Carrying_BothArms_LargeBox_Holding_Idle'
}
```

/// info
The navigation cone is an `SM_Cone` mesh attached to the player. A timer continuously re-aims it toward the current drop-off using `FindLookAtRotation`, giving the courier a live pointer to the next stop.
///
