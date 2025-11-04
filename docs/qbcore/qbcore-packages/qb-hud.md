# ℹ️ qb-hud
Keep track of your vitals in style

## Introduction
Player heads-up display that tracks vital information such as health, armor, food level, thirst level, etc.

## Configuration
All configurable options listed below are found in the `config.lua`

## Disabling Stress
This options allows you to enable/disable the stress system entirely on your server

```lua title="Example"
Config.DisableStress = false
```

## Whitelisted Jobs
This option allows you to define jobs that stress does not effect even if you have stress enabled on your server

```lua title="Example"
Config.WhitelistedJobs = {
    ['police'] = true,
    ['ambulance'] = true
}
```

## Speed Measurement
/// tip
Coming Soon!
///

## Events

### Adding Stress
This event allows you to add a stress amount to a player

```lua title="Example"
TriggerServerEvent('qb-hud:server:GainStress', 25)
```

### Removing Stress
This event allows you to remove a stress amount from a player

```lua title="Example"
TriggerServerEvent('qb-hud:server:RelieveStress', 50)
```

### Displaying Money
This event allows you to trigger showing the player's current balance on their hud temporarily

```lua title="Example"
local Player = exports['qb-core']:GetPlayer(source)
local cash = Player.PlayerData.money.cash
local bank = Player.PlayerData.money.bank

TriggerClientEvent(source, 'qb-hud:client:ShowAccounts', 'cash', cash)

-- or

TriggerClientEvent(source, 'qb-hud:client:ShowAccounts', 'bank', bank)
```

### Adding Money
This event allows you to display an increase in money on the player's hud, it does not actually add money to the player

```lua title="Example"
TriggerClientEvent(source, 'qb-hud:client:OnMoneyChange', 'cash', 500, false)
```

### Removing Money
This event allows you to display a decrease in money on the player's hud, it does not actually remove money from the player

```lua title="Example"
TriggerClientEvent(source, 'qb-hud:client:OnMoneyChange', 'bank', 500, true)
```