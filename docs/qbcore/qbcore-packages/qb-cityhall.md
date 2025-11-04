# 🏢 qb-cityhall
Need a new job or identification card?

## Introduction
Players can manage what job they have and retrieve licenses like weapon licenses, driver's license and identification cards

## Configuration
All configurable options listed below are found in the `config.lua`

### Available Jobs
This options allows you to define which jobs are available in the list at city hall for players to choose.
On job selection, it gives them the lowest available rank of that job!

```lua title="Example"
Config.AvailableJobs = {
    'trucker',
    'taxi',
    'tow',
    'reporter',
    'garbage',
    'bus',
    'hotdog',
    'police',
    'ambulance',
    'realestate',
    'cardealer',
    'mechanic'
}
```

### Locations
This options allows you to create as many city hall locations as you'd like
It also lets you define which items can be purchased, along with the cost!

```lua title="Example"
Config.Cityhalls = {
    {
        coords = Vector(-6532.901346, 3573.678064, -299.849361),
        licenses = {
            id_card = {
                label = 'ID Card',
                cost = 50,
            },
            driver_license = {
                label = 'Driver License',
                cost = 50,
                metadata = 'driver'
            },
            weaponlicense = {
                label = 'Weapon License',
                cost = 50,
                metadata = 'weapon'
            },
        }
    },
}
```