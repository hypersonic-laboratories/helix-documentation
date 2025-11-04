# 🏠 qb-interior
Which shell will it be?

## Introduction
Handles all the logic for spawning shell models by exporting functions that can be called in other client-side files

## Usage
You can find a list of all available exports in the `client.lua` file!

```lua title="Example"
local ped = HPlayer:K2_GetPawn()
local coords = ped:K2_GetActorLocation()
local data = exports['qb-interior']:CreateApartmentFurnished(coords)
print(data[1]) -- house object
print(data[2]) -- offsets (for exit, interaction points)
```