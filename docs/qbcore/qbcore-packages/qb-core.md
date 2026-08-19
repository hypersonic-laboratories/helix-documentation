# ⚙️ qb-core
The engine room of the whole framework

## Introduction
qb-core is the foundation every other resource depends on. It loads and exposes the shared catalogs (jobs, gangs, items, vehicles, weapons, locations), manages player data and persistence, handles money/job/gang/metadata, and exposes a wide export surface so other resources never have to touch the database directly.

The global `QBCore` object lives on the server with three core tables:

- `QBCore.Functions` — server-side helper functions (player lookups, useable items, ID generators).
- `QBCore.Player` — the player class plus login/logout/save logic.
- `QBCore.Shared` — the loaded catalogs (`Jobs`, `Gangs`, `Items`, `Vehicles`, `Weapons`, `Locations`, `StarterItems`).

Most other resources reach this functionality through `exports['qb-core']`.

## Configuration
All configurable options listed below are found in the `config.lua`

### Default Spawn
The world location new and returning characters are placed at when no saved position exists.

```lua title="Example"
QBCore.Config.DefaultSpawn = Vector(-1035.71, -2731.87, 12.86)
```

### Max Players
The maximum number of concurrent players.

```lua title="Example"
QBCore.Config.MaxPlayers = 48
```

### Update & Status Intervals
How often player data is saved, and how often hunger/thirst status is recalculated.

```lua title="Example"
QBCore.Config.UpdateInterval = 5    -- minutes between player data saves
QBCore.Config.StatusInterval = 5000 -- milliseconds between hunger/thirst checks
```

### Money
Defines the money types available on the server and their starting balances. Each key is a money type and its value is the amount new characters start with. `DontAllowMinus` lists types that can never go negative, and `MinusLimit` caps how far any other type may go.

```lua title="Example"
QBCore.Config.Money = {}
QBCore.Config.Money.MoneyTypes = { cash = 500, bank = 5000, crypto = 0 }
QBCore.Config.Money.DontAllowMinus = { 'cash', 'crypto' }
QBCore.Config.Money.MinusLimit = -5000
QBCore.Config.Money.PayCheckTimeOut = 10    -- minutes between paychecks
QBCore.Config.Money.PayCheckSociety = false -- pull paycheck from society account (requires qb-management)
```

/// info
Once a money type is added it is written to the database and will not be removed even if you delete it from the config.
///

### Player Vitals
Controls how fast hunger and thirst decay, and the list of blood types randomly assigned to new characters.

```lua title="Example"
QBCore.Config.Player.HungerRate = 4.2 -- rate at which hunger goes down
QBCore.Config.Player.ThirstRate = 3.8 -- rate at which thirst goes down
QBCore.Config.Player.Bloodtypes = {
    'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-',
}
```

### Player Defaults
The template applied to every new character. It defines starting money, charinfo, default job (`unemployed` / Civilian), default gang (`none`), and the full metadata block (hunger, thirst, stress, licences, callsign, fingerprint, and so on). Values defined as functions (e.g. `citizenid`, `phone`, `fingerprint`) are generated per character.

```lua title="Example"
QBCore.Config.Player.PlayerDefaults = {
    citizenid = function() return QBCore.Functions.CreateCitizenId() end,
    cid = 1,
    money = function()
        local moneyDefaults = {}
        for moneytype, startamount in pairs(QBCore.Config.Money.MoneyTypes) do
            moneyDefaults[moneytype] = startamount
        end
        return moneyDefaults
    end,
    job = {
        name = 'unemployed',
        label = 'Civilian',
        payment = 10,
        type = 'none',
        onduty = false,
        isboss = false,
        grade = { name = 'Freelancer', level = 0 }
    },
    gang = {
        name = 'none',
        label = 'No Gang Affiliation',
        isboss = false,
        grade = { name = 'none', level = 0 }
    },
    metadata = {
        hunger = 100,
        thirst = 100,
        stress = 0,
        isdead = false,
        armor = 0,
        ishandcuffed = false,
        -- ...callsign, fingerprint, licences, phonedata, etc.
    },
    position = QBCore.Config.DefaultSpawn,
    items = {},
}
```

### Starter Items
The items every new character receives. Defined in `Shared/functions.lua`.

```lua title="Example"
QBCore.Shared.StarterItems = {
    ['phone'] = { amount = 1, item = 'phone' },
    ['id_card'] = { amount = 1, item = 'id_card' },
    ['driver_license'] = { amount = 1, item = 'driver_license' },
}
```

### Server
General server-level settings such as whitelist, PVP, and the permission groups recognized by the framework.

```lua title="Example"
QBCore.Config.Server.Closed = false
QBCore.Config.Server.Whitelist = false
QBCore.Config.Server.PVP = true
QBCore.Config.Server.Permissions = { 'god', 'admin', 'mod' }
```

/// note
The legacy chat commands in `Server/commands.lua` (`id`, `addpermission`, `car`, `weapon`, etc.) are fully commented out in this port and do not register. Treat that file as inactive.
///

## Functions

These are the most commonly used exports other resources call. Every function on `QBCore.Functions` and `QBCore.Player` is bridged to `exports['qb-core']` automatically, so the names below match their Lua definitions exactly.

### GetPlayer
Returns the player object for a connected player. Accepts either a numeric source id or the player handle.

- source `number` or `player` - The player source

```lua title="Example"
local Player = exports['qb-core']:GetPlayer(source)
if Player then
    print(Player.PlayerData.citizenid)
end
```

### GetPlayerByCitizenId
Returns the online player object matching a citizen id, or `nil` if they are not connected.

- citizenid `string`

```lua title="Example"
local Player = exports['qb-core']:GetPlayerByCitizenId('ABC12345')
```

### GetPlayers
Returns an array of the sources of all currently connected players.

```lua title="Example"
local players = exports['qb-core']:GetPlayers()
for i = 1, #players do
    local Player = exports['qb-core']:GetPlayer(players[i])
end
```

### CreateUseableItem
Registers a callback that runs when a player uses the named item from their inventory.

- item `string` - The item name
- data `function` - Handler invoked when the item is used

```lua title="Example"
exports['qb-core']:CreateUseableItem('water', function(source, item)
    local Player = exports['qb-core']:GetPlayer(source)
    Player.Functions.SetMetaData('thirst', 100)
end)
```

### GetShared
Returns a loaded shared catalog, or a single entry within it.

- namespace `string` - One of `Vehicles`, `VehicleHashes`, `Items`, `Gangs`, `Jobs`, `Locations`, `Weapons`, `StarterItems`
- item `string` _(optional)_ - A specific key inside the namespace

```lua title="Example"
local allJobs = exports['qb-core']:GetShared('Jobs')
local water   = exports['qb-core']:GetShared('Items', 'water')
```

### GetCoreObject
Returns the full `QBCore` table, or a filtered subset when given a list of keys.

- filters `table` _(optional)_ - List of top-level keys to return (e.g. `Functions`, `Players`, `Shared`)

```lua title="Example"
local QBCore = exports['qb-core']:GetCoreObject()
```

### Catalog Management
The shared catalogs can be extended at runtime. Each call updates the in-memory catalog and broadcasts the change to connected clients. All return `success` as the first value.

- `AddJob(jobName, job)` / `AddJobs(jobs)` / `UpdateJob(jobName, job)` / `RemoveJob(jobName)`
- `AddItem(itemName, item)` / `AddItems(items)` / `UpdateItem(itemName, item)` / `RemoveItem(itemName)`
- `AddGang(gangName, gang)` / `AddGangs(gangs)` / `UpdateGang(gangName, gang)` / `RemoveGang(gangName)`
- `SetMethod(methodName, handler)` / `SetField(fieldName, data)` - extend the `QBCore` table itself

```lua title="Example"
exports['qb-core']:AddItem('lockpick', {
    name = 'lockpick',
    label = 'Lockpick',
    weight = 100,
    type = 'item',
    unique = false,
    useable = true,
})
```

## Player Object Methods

A player object returned by `GetPlayer` exposes `PlayerData` (the raw character data) and `Functions` (the methods below). These run server-side and automatically sync the relevant data to the client.

### AddMoney
Adds money of the given type. Logs the transaction and notifies the client.

- moneytype `string` - `cash`, `bank`, `crypto`, etc.
- amount `number`
- reason `string` _(optional)_ - Logged reason, defaults to `'unknown'`

```lua title="Example"
Player.Functions.AddMoney('bank', 2500, 'paycheck')
```

### RemoveMoney
Removes money of the given type. Respects `DontAllowMinus` and `MinusLimit`; returns `false` if the player cannot afford it.

- moneytype `string`
- amount `number`
- reason `string` _(optional)_

```lua title="Example"
if Player.Functions.RemoveMoney('cash', 100, 'shop-purchase') then
    -- payment succeeded
end
```

### SetJob
Sets the player's job to the given name and grade. Returns `false` if the job does not exist in the shared catalog.

- job `string` - Job name
- grade `number` _(optional)_ - Grade level, defaults to `1`

```lua title="Example"
Player.Functions.SetJob('police', 2)
```

### SetGang
Sets the player's gang and grade. Returns `false` if the gang does not exist.

- gang `string` - Gang name
- grade `number` _(optional)_ - Grade level, defaults to `1`

```lua title="Example"
Player.Functions.SetGang('ballas', 1)
```

### SetMetaData
Sets a metadata field on the character. `hunger`, `thirst`, `stress`, and `armor` are automatically clamped to `0`–`100`.

- meta `string` - Metadata key
- val `any` - New value

```lua title="Example"
Player.Functions.SetMetaData('hunger', 100)
Player.Functions.SetMetaData('ishandcuffed', true)
```

### AddMethod
Adds (or overrides) a method on this specific player object at runtime.

- methodName `string`
- handler `function`

```lua title="Example"
Player.Functions.AddMethod('GreetPlayer', function()
    print('Hello ' .. Player.PlayerData.charinfo.firstname)
end)
```

/// tip
Other useful player methods include `SetMoney`, `GetMoney`, `CanAfford`, `GetJob`, `GetGang`, `SetJobDuty`, `IsOnDuty`, `GetMetaData`, `HasItem`, `HasLicence`, `SetLicence`, `AddRep` / `RemoveRep` / `GetRep`, and `Save`.
///
