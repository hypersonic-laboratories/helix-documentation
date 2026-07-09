# Port Your FiveM Script to HELIX


**A Comprehensive Tutorial for FiveM Developers coming to HELIX**


---

## Table of Contents

1. [Introduction](#introduction)
2. [Core Concepts](#core-concepts)
3. [Player & Character Management](#player--character-management)
4. [Database Operations](#database-operations)
5. [Events & Callbacks](#events--callbacks)
6. [UI Systems (NUI vs WebUI)](#ui-systems-nui-vs-webui)
7. [Vehicle Management](#vehicle-management)
9. [World Objects & Entities](#world-objects--entities)
10. [Notifications & HUD](#notifications--hud)
11. [Complete Example: Porting a Simple Script](#complete-example-porting-a-simple-script)
12. [Common Pitfalls & Best Practices](#common-pitfalls--best-practices)
13. [Package.json Structure](#packagejson-structure)
14. [FiveM vs HELIX: How we script here](#fivem-vs-helix-how-we-script-here)
15. [Summary: Key Differences](#summary-key-differences)
16. [Final Tips](#final-tips)

---

## Introduction

HELIX is built on Unreal Engine 5, which means fundamental differences from FiveM's GTA V native system. This guide will help you understand how to translate your FiveM knowledge to HELIX development using the QBCore framework.

**Key Differences:**

- **Engine**: Unreal Engine 5 vs GTA V (RAGE Engine)
- **Natives**: HELIX uses custom classes instead of GTA natives
- **Coordinates**: HELIX uses Unreal's coordinate system (cm-based)
- **Objects**: Strongly-typed classes (HPlayer, HCharacter, etc.)

---

## Core Concepts

### Getting the Core Object

**FiveM (typical QBCore setup):**

```lua
local QBCore = exports['qb-core']:GetCoreObject()
```

**HELIX**

```lua
local QBCore = exports['qb-core']:GetShared() 
```

### Player Data Structure

Both systems use similar PlayerData structures through QBCore:

```lua
-- Both FiveM and HELIX
PlayerData = {
    citizenid = 'ABC12345',
    cid = 1,
    money = { cash = 500, bank = 5000, crypto = 0 },
    job = {
        name = 'police',
        label = 'Police',
        grade = { name = 'Officer', level = 1 },
        onduty = true
    },
    gang = { ... },
    metadata = {
        hunger = 100,
        thirst = 100,
        stress = 0,
        armor = 0
    },
    charinfo = {
        firstname = 'John',
        lastname = 'Doe',
        birthdate = '01-01-1990',
        phone = '1234567890'
    }
}
```

---

## Player & Character Management

### Getting Local Player / Pawn

**FiveM:**

```lua
local ped = PlayerPedId()
local coords = GetEntityCoords(ped)
```

**HELIX:**

```lua
local pawn = GetPlayerPawn()
if not pawn then return end

local coords = GetEntityCoords(pawn)
```

### Getting Player Position

**FiveM:**

```lua
local coords = GetEntityCoords(PlayerPedId())
local x, y, z = coords.x, coords.y, coords.z
```

**HELIX:**

```lua
local coords = GetEntityCoords(GetPlayerPawn())
local x, y, z = coords.X, coords.Y, coords.Z
```



---

## Database Operations

### Database Initialization

**FiveM:**

```lua
-- FiveM (using oxmysql or mysql-async)
MySQL.ready(function()
    print('Database ready')
end)
```

**HELIX:**

```lua
-- HELIX - Initialization in Server/database.lua
Database.Initialize('qbcore.db')
```

### Database Queries

**FiveM (SELECT):**

```lua
-- FiveM
MySQL.Async.fetchAll('SELECT * FROM players WHERE citizenid = ?', {citizenid}, function(result)
    if result[1] then
        local PlayerData = result[1]
        -- Process data
    end
end)
```

**HELIX (SELECT):**

```lua
-- HELIX - Synchronous approach
local result = Database.Select('SELECT * FROM players WHERE citizenid = ?', { citizenid })

-- Result is a TArray (Unreal Engine array)
if result[1] then
    local PlayerData = result[1].Columns:ToTable()
    -- PlayerData is now a Lua table
end
```

### Database Insert/Update

**FiveM:**

```lua
-- FiveM
MySQL.Async.execute('UPDATE players SET money = ? WHERE citizenid = ?', 
    {json.encode(money), citizenid})
```

**HELIX:**

```lua
-- HELIX - Using JSON.stringify for tables
local success = Database.Execute('UPDATE players SET money = ? WHERE citizenid = ?', 
    { JSON.stringify(money), citizenid })

-- success is boolean
```

### UPSERT Operations

**FiveM:**

```lua
-- FiveM (MySQL specific)
MySQL.Async.execute([[
    INSERT INTO players (citizenid, name, money) 
    VALUES (?, ?, ?)
    ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        money = VALUES(money)
]], {citizenid, name, json.encode(money)})
```

**HELIX:**

```lua
-- HELIX - SQLite UPSERT syntax
Database.Execute([[
    INSERT INTO players (citizenid, name, money)
    VALUES (?, ?, ?)
    ON CONFLICT(citizenid) DO UPDATE SET
        name = excluded.name,
        money = excluded.money
]], { citizenid, name, JSON.stringify(money) })
```

### JSON Handling in Database

**FiveM:**

```lua
-- FiveM
local moneyJson = json.encode(PlayerData.money)
local moneyData = json.decode(result.money)
```

**HELIX:**

```lua
-- HELIX - Uses JSON global (capital J)
local moneyJson = JSON.stringify(PlayerData.money)
local moneyData = JSON.parse(result.money)
```

---

## Events & Callbacks

### Client Events

**Both systems are similar:**

```lua
-- Both FiveM and HELIX
RegisterClientEvent('eventName', function(param1, param2)
    -- Handle event
end)

-- Triggering server event from client
TriggerServerEvent('serverEventName', data)
```

### Server Events

**FiveM:**

```lua
-- FiveM
RegisterServerEvent('eventName')
AddEventHandler('eventName', function(param1, param2)
    local src = source
    -- Handle event
end)
```

**HELIX:**

```lua
-- HELIX - Same pattern
RegisterServerEvent('eventName', function(source, param1, param2)
    -- Note: source is passed as first parameter
    -- Handle event
end)
```

### Callbacks

**FiveM:**

```lua
-- FiveM Client
QBCore.Functions.TriggerCallback('callbackName', function(result)
    print(result)
end, arg1, arg2)

-- FiveM Server
QBCore.Functions.CreateCallback('callbackName', function(source, cb, arg1, arg2)
    cb(returnValue)
end)
```

**HELIX:**

```lua
-- NATIVE SOLUTION TO HELIX

-- HELIX Client 
TriggerCallback('callbackName', function(result)
    print(result)
end, arg1, arg2)

-- HELIX Server
RegisterCallback('callbackName', function(source, arg1, arg2)
    return returnValue
end)
```

---

## UI Systems (NUI vs WebUI)

### Creating UI

**FiveM (NUI):**

```lua
-- FiveM
SendNUIMessage({
    action = 'openUI',
    data = someData
})

-- In HTML/JS
window.addEventListener('message', function(event) {
    if (event.data.action === 'openUI') {
        // Handle UI
    }
})
```

**HELIX (WebUI):**

```lua
-- HELIX - Creating WebUI instance
local myWebUI = WebUI('UniqueID', 'resource-name/path/to/index.html', 0)

-- Sending data into the UI
myWebUI:SendEvent('updateData', { cash = 1000, bank = 5000 })
```

### Sending Data to UI

**FiveM:**

```lua
-- FiveM
SendNUIMessage({
    type = 'updateBalance',
    cash = cash,
    bank = bank
})
```

**HELIX:**

```lua
-- HELIX - SendEvent from Lua into WebUI
myWebUI:SendEvent('updateBalances', { cash = cash, bank = bank })
```

### Receiving Data from UI

**FiveM:**

```lua
-- FiveM (Client-side)
RegisterNUICallback('buttonClicked', function(data, cb)
    print('Button clicked with data:', data)
    cb('ok')
end)

-- In JS
$.post('[https://resource-name/buttonClicked](https://resource-name/buttonClicked)', JSON.stringify({
    value: someValue
}))
```

**HELIX:**

```lua
-- HELIX - WebUI Subscribe
myWebUI:Subscribe('buttonClicked', function(data)
    print('Button clicked with data:', data)
end)

-- In JS - Using global hEvent function
hEvent('buttonClicked', { value: someValue })
```

### Complete WebUI Example

**HELIX:**

```lua
-- Client/Index.lua
local bankingUI = nil

function OpenBanking()
    if not bankingUI then
        bankingUI = WebUI('Banking', 'qb-banking/Client/html/index.html', 3)
        
        -- Get player data and send it into the UI
        local PlayerData = exports['qb-core']:GetPlayerData()
        
        bankingUI:SendEvent('initData', {
            cash = PlayerData.money.cash,
            bank = PlayerData.money.bank,
            playerData = {
                name = PlayerData.charinfo.firstname .. ' ' .. PlayerData.charinfo.lastname,
                job = PlayerData.job
            }
        })
        
        -- Register event handlers
        bankingUI:RegisterEventHandler('deposit', function(data)
            TriggerServerEvent('qb-banking:server:deposit', data.amount)
        end)
        
        bankingUI:RegisterEventHandler('withdraw', function(data)
            TriggerServerEvent('qb-banking:server:withdraw', data.amount)
        end)
        
        bankingUI:RegisterEventHandler('close', function()
            bankingUI:Destroy()
            bankingUI = nil
        end)
    end
end
```

**JavaScript (index.html):**

```jsx
// Listen for events sent from Lua via SendEvent
document.addEventListener('message', (event) => {
    if (event.data.name === 'initData') {
        const data = event.data.data
        document.getElementById('cash').textContent = '$' + data.cash
        document.getElementById('bank').textContent = '$' + data.bank
    }

    if (event.data.name === 'updateBalances') {
        const data = event.data.data
        document.getElementById('cash').textContent = '$' + data.cash
        document.getElementById('bank').textContent = '$' + data.bank
    }
})

// Send event to Lua
document.getElementById('depositBtn').addEventListener('click', function() {
    const amount = parseInt(document.getElementById('amount').value)
    hEvent('deposit', { amount: amount })
})
```

---

## Vehicle Management

### Spawning a Vehicle

**FiveM:**

```lua
-- FiveM
local model = GetHashKey('adder')
RequestModel(model)
while not HasModelLoaded(model) do
    Wait(0)
end

local coords = GetEntityCoords(PlayerPedId())
local vehicle = CreateVehicle(model, coords.x, coords.y, coords.z, heading, true, false)
SetPedIntoVehicle(PlayerPedId(), vehicle, -1)
```

**HELIX (QBCore):**

```lua
local pawn = GetPlayerPawn()
if not pawn then return end

local location = GetEntityCoords(pawn)
local rotation = GetEntityRotation(pawn)

local spawnLocation = location + Vector(500, 0, 0)
local vehicle = exports['qb-core']:CreateVehicle(source, 'vehicle_name', spawnLocation, rotation)
```

**HELIX (Native):**

```lua
local vehicle = HVehicle(
    Vector(-7940, 3400, 150),
    Rotator(0, 180, 0),
    '/abcca-dax-veh/PongaseraGt/Blueprint/BP_PongaseraGtVehicle.BP_PongaseraGtVehicle_C',
    'QueryAndPhysics',
    true
)

vehicle:SetFuel(1.0)
```


### Getting Closest Vehicle

**FiveM:**

```lua
-- FiveM
function GetClosestVehicle()
    local ped = PlayerPedId()
    local coords = GetEntityCoords(ped)
    local vehicles = GetGamePool('CVehicle')
    local closestDistance = -1
    local closestVehicle = -1
    
    for _, vehicle in pairs(vehicles) do
        local vehicleCoords = GetEntityCoords(vehicle)
        local distance = #(coords - vehicleCoords)
        if closestDistance == -1 or distance < closestDistance then
            closestVehicle = vehicle
            closestDistance = distance
        end
    end
    
    return closestVehicle, closestDistance
end
```

**HELIX:**

```lua
GetClosestVehicle(coords, radius)
```

### Deleting Vehicles

**FiveM:**

```lua
-- FiveM
DeleteEntity(vehicle)
```

**HELIX:**

```lua
-- HELIX
DeleteEntity(vehicle)
```

---

## Weapon Management


## World Objects & Entities

### Getting All Entities of Type

**FiveM:**

```lua
-- FiveM
local vehicles = GetGamePool('CVehicle')
local peds = GetGamePool('CPed')
local objects = GetGamePool('CObject')
```

**HELIX:**

```lua
-- HELIX 
local vehicles = GetAllVehicles()
local characters = GetAllPlayers()
```

### Distance Calculations

**FiveM:**

```lua
-- FiveM
local coords1 = GetEntityCoords(entity1)
local coords2 = GetEntityCoords(entity2)
local distance = #(coords1 - coords2)
```

**HELIX:**

```lua
-- HELIX 
local location1 = GetEntityCoords(entity1)
local location2 = GetEntityCoords(entity2)
local distance = GetDistanceBetweenCoords(location1, location2)
```

### Coordinate System

**Important: HELIX uses centimeters, not meters!**

```lua
-- FiveM (meters)
local coords = vector3(100.0, 200.0, 30.0)

-- HELIX (centimeters)
local location = Vector(10000, 20000, 3000)  -- Equivalent to above in cm

-- Converting: 1 meter = 100 cm
-- So multiply FiveM coords by 100 for HELIX
```

---

## Notifications & HUD

### Showing Notifications

**FiveM:**

```lua
-- FiveM Client
QBCore.Functions.Notify('Text here', 'success', 5000)

-- FiveM Server
TriggerClientEvent('QBCore:Notify', source, 'Text here', 'error')
```

**HELIX:**

```lua
-- HELIX
Notification("Welcome to HELIX!", NotificationType.Success, 1.5)
```

### Notification Types

Both systems support the same types

- `'primary'` - Blue/info
- `'success'` - Green
- `'error'` - Red
- `'warning'` - Orange/yellow

### Draw Text (Interaction prompts)

**FiveM:**

```lua
-- FiveM (varies by resource)
exports['qb-core']:DrawText('[E] - Interact', 'left')
exports['qb-core']:HideText()
```

**HELIX:**

```lua
-- HELIX (Same!)
exports['qb-core']:DrawText('[E] - Interact', 'left')
exports['qb-core']:HideText()
```

---

## Complete Example: Porting a Simple Script

Let's port a simple "ATM" script from FiveM to HELIX.

### FiveM Version

```lua
-- FiveM - client.lua
RegisterNetEvent('atm:client:openATM', function()
    local PlayerData = QBCore.Functions.GetPlayerData()
    
    SendNUIMessage({
        action = 'open',
        cash = PlayerData.money.cash,
        bank = PlayerData.money.bank
    })
    SetNuiFocus(true, true)
end)

RegisterNUICallback('deposit', function(data, cb)
    TriggerServerEvent('atm:server:deposit', data.amount)
    cb('ok')
end)

RegisterNUICallback('withdraw', function(data, cb)
    TriggerServerEvent('atm:server:withdraw', data.amount)
    cb('ok')
end)

RegisterNUICallback('close', function(_, cb)
    SetNuiFocus(false, false)
    cb('ok')
end)

-- FiveM - server.lua

RegisterNetEvent('atm:server:deposit', function(amount)
    local src = source
    local Player = QBCore.Functions.GetPlayer(src)
    
    amount = math.floor(tonumber(amount) or 0)
    if amount <= 0 then return end
    
    if Player.Functions.RemoveMoney('cash', amount, 'atm-deposit') then
        Player.Functions.AddMoney('bank', amount, 'atm-deposit')
        TriggerClientEvent('QBCore:Notify', src, 'Deposited $' .. amount, 'success')
    end
end)

RegisterNetEvent('atm:server:withdraw', function(amount)
    local src = source
    local Player = QBCore.Functions.GetPlayer(src)
    
    amount = math.floor(tonumber(amount) or 0)
    if amount <= 0 then return end
    
    if Player.Functions.RemoveMoney('bank', amount, 'atm-withdraw') then
        Player.Functions.AddMoney('cash', amount, 'atm-withdraw')
        TriggerClientEvent('QBCore:Notify', src, 'Withdrew $' .. amount, 'success')
    end
end)
```

### HELIX Version (based on `hx_banking`)

```lua
-- HELIX - Client/Index.lua
local Config = require('Shared/Index')

local BankingUI = WebUI('Banking', Config.UIPath)
local isBankOpen = false
local PlayerData = {}
local accountData = {}

RegisterClientEvent('QBCore:Client:OnPlayerLoaded', function()
    PlayerData = exports['qb-core']:GetPlayerData()
end)

RegisterClientEvent('QBCore:Player:SetPlayerData', function(val)
    PlayerData = val

    if BankingUI and isBankOpen then
        local playerCash = PlayerData.money and PlayerData.money.cash or 0
        local playerBank = PlayerData.money and PlayerData.money.bank or 0

        accountData.cash = playerCash
        accountData.balance = playerBank

        BankingUI:SendEvent('updateData', accountData)
    end
end)

RegisterClientEvent('hx-banking:client:updateBalances', function(cash, bank)
    if BankingUI and isBankOpen then
        accountData.cash = cash
        accountData.balance = bank

        BankingUI:SendEvent('updateData', accountData)
    end
end)

RegisterClientEvent('hx-banking:client:openATM', function()
    if not PlayerData or not PlayerData.money then
        return
    end

    isBankOpen = true

    local playerCash = PlayerData.money.cash or 0
    local playerBank = PlayerData.money.bank or 0
    local playerName = PlayerData.charinfo and (PlayerData.charinfo.firstname .. ' ' .. PlayerData.charinfo.lastname) or 'Unknown'

    accountData = {
        name = playerName,
        balance = playerBank,
        cash = playerCash,
        number = PlayerData.citizenid or '000000',
        iban = PlayerData.citizenid or 'UNKNOWN',
        stats = {
            {title = 'income', amount = 0},
            {title = 'outcome', amount = 0},
            {title = 'earnings', amount = 0}
        },
        transactions = {}
    }

    BankingUI:BringToFront()
    BankingUI:SetInputMode(1)
    BankingUI:SendEvent('OpenATM', accountData)
end)
```

### JavaScript Changes

```jsx
// FiveM - script.js
window.addEventListener('message', function(event) {
    if (event.data.action === 'open') {
        $('#atm-container').show()
        $('#cash-amount').text('$' + event.data.cash)
        $('#bank-amount').text('$' + event.data.bank)
    }
})

$('#deposit-btn').click(function() {
    $.post('[https://atm-resource/deposit](https://atm-resource/deposit)', JSON.stringify({
        amount: parseInt($('#amount').val())
    }))
})

// HELIX - script.js
document.addEventListener('message', (event) => {
    if (event.data.name === 'openATM') {
        const data = event.data.data
        document.getElementById('atm-container').style.display = 'block'
        document.getElementById('cash-amount').textContent = '$' + data.cash
        document.getElementById('bank-amount').textContent = '$' + data.bank
    }

    if (event.data.name === 'updateBalances') {
        const data = event.data.data
        document.getElementById('cash-amount').textContent = '$' + data.cash
        document.getElementById('bank-amount').textContent = '$' + data.bank
    }
})

document.getElementById('deposit-btn').addEventListener('click', function() {
    const amount = parseInt(document.getElementById('amount').value)
    hEvent('deposit', { amount: amount })
})

document.getElementById('withdraw-btn').addEventListener('click', function() {
    const amount = parseInt(document.getElementById('amount').value)
    hEvent('withdraw', { amount: amount })
})

document.getElementById('close-btn').addEventListener('click', function() {
    hEvent('close')
    document.getElementById('atm-container').style.display = 'none'
})
```

---

## Common Pitfalls & Best Practices

### 1. Always Check Character Exists

**❌ Wrong:**


```lua
-- HELIX - Will crash if no pawn
local pawn = GetPlayerPawn()
local coords = GetEntityCoords(pawn)
```

**✅ Correct:**

```lua
-- HELIX
local pawn = GetPlayerPawn()
if not pawn then return end
local coords = GetEntityCoords(pawn)
```

### 2. Database Result Handling

**❌ Wrong:**

```lua
-- HELIX - Direct access won't work
local result = Database.Select('SELECT * FROM players', {})
local data = result[1]  -- This is TArray, not Lua table!
```

**✅ Correct:**

```lua
-- HELIX - Convert to Lua table
local result = Database.Select('SELECT * FROM players', {})
if result[1] then
    local data = result[1].Columns:ToTable()
    -- Now data is usable
end
```

### 3. JSON Encoding/Decoding

**❌ Wrong:**

```lua
-- HELIX - These don't exist
json.encode(data)
json.decode(str)
```

**✅ Correct:**

```lua
-- HELIX - Use JSON (capital J)
JSON.stringify(data)
JSON.parse(str)
```

### 4. WebUI Lifecycle Management

**❌ Wrong:**

```lua
-- HELIX - Creating multiple instances
function OpenUI()
    local ui = WebUI('MyUI', 'path/to/ui.html', 3)
    ui:SendEvent('update', data)  -- Called before load!
end
```

**✅ Correct:**

```lua
-- HELIX - Proper lifecycle
local myUI = WebUI('MyUI', 'path/to/ui.html', 3)

function OpenUI()
    myUI:SendEvent('update', data)
end

function CloseUI()
    if myUI then
        myUI:Destroy()
        myUI = nil
    end
end
```

### 5. Server Event Source Parameter

**FiveM:**

```lua
-- FiveM - source is global
RegisterServerEvent('myEvent')
AddEventHandler('myEvent', function(param1)
    local src = source  -- Global variable
end)
```

**HELIX:**

```lua
-- HELIX - source is parameter
RegisterServerEvent('myEvent', function(source, param1)
    -- source is passed as first parameter
end)
```

### 6. Coordinate System Scale

**❌ Wrong:**

```lua
-- HELIX - Using FiveM meters directly
local offset = Vector(5, 0, 0)  -- Only 5cm!
```

**✅ Correct:**

```lua
-- HELIX - Remember: centimeters!
local offset = Vector(500, 0, 0)  -- 5 meters = 500cm
```

### 7. Entity Iteration

**FiveM:**

```lua
-- FiveM
local vehicles = GetGamePool('CVehicle')
for _, veh in pairs(vehicles) do
    DeleteEntity(veh)
end
```

**HELIX:**

```lua
-- HELIX
local vehicles = GetAllVehicles()
for _, vehicle in ipairs(vehicles) do
    DeleteEntity(vehicle)
end
```

### 8. Player State Management

**Best Practice:**

```lua
-- HELIX Server - Always validate player exists
local Player = exports['qb-core']:GetPlayer(source)
if not Player then return end

-- Now safe to use Player.Functions
```

### 9. Exports Syntax

**FiveM:**

```lua
-- FiveM - Calling an export
local result = exports['resource-name']:ExportName(args)

-- FiveM - Defining an export (when not defined in manifest)
exports('ExportName', function(args)
    return something
end)
```

**HELIX:**

```lua
-- HELIX - Calling an export
local result = exports['resource-name']:ExportName(args)

-- HELIX - Defining an export
exports('ExportName', function(args)
    return something
end)
```

### 10. Timer/Wait Functions

**Both systems:**

```lua
-- Both FiveM and HELIX support
Timer.SetTimeout(function()
    -- Code here
end, 5000)  -- 5 seconds

Timer.SetInterval(function()
    -- Repeating code
end, 1000)  -- Every second
```

---

## Package.json Structure

Both FiveM and HELIX use similar package.json for resource organization:

```json
{
    "shared": [
        "Shared/Index.lua",
        "Shared/config.lua",
        "Shared/items.lua"
    ],
    "client": [
        "Client/Index.lua",
        "Client/functions.lua"
    ],
    "server": [
        "Server/Index.lua",
        "Server/database.lua"
    ]
}
```

---

## FiveM vs HELIX: How we script here

The daily scripting workflow is close to FiveM but with a few important differences.

### Resource structure

In FiveM you normally have one `fxmanifest.lua` per resource and keep files in flat `client`, `server`, and `shared` folders.
In HELIX we still separate code by side, but we lean on `package.json` to declare the shared, client, and server entry points and to keep structure consistent across resources.
New HELIX resources should follow the same pattern as the examples here: a `Shared` folder for data and configuration, a `Client` folder for gameplay and UI, and a `Server` folder for persistence, validation, and game rules.

### Server vs client responsibilities

On FiveM you often mix logic and validation on both sides because the engine makes it easy to do everything from the client.
In HELIX scripts we try to keep the client focused on presentation, input, and small quality-of-life helpers, while the server owns money changes, inventory, job logic, vehicle spawning, and any state that must be trusted.
If something would be an exploit in FiveM when run on the client, put it on the server in HELIX and expose it through events, callbacks, or exports.

### Data and persistence

On FiveM you typically talk to MySQL asynchronously and pass Lua tables through `json.encode` and `json.decode`.
In HELIX we use synchronous database calls, convert rows with `Columns:ToTable()`, and always use `JSON.stringify` and `JSON.parse` for structured data.
Ported scripts should avoid keeping long‑lived database state in globals and instead fetch fresh data when needed or cache it behind clear helper functions.

### Events, callbacks, and exports

FiveM scripts often rely on `RegisterNetEvent` and `TriggerServerEvent` directly, plus QBCore callbacks for request–response flows.
In HELIX we keep the same mental model, but we prefer the native callback helpers and a small set of well‑named exports per resource, so other scripts call into them instead of duplicating logic.
When you port a FiveM script, start by listing the events, callbacks, and exports it exposes, then mirror that surface area in HELIX using the patterns shown earlier in this tutorial.

---

## Summary: Key Differences

| Feature | FiveM | HELIX |
| --- | --- | --- |
| **Engine** | GTA V (RAGE) | Unreal Engine 5 |
| **Player Ped** | `PlayerPedId()` | `GetPlayerPawn()` |
| **Coordinates** | Meters (vector3) | Centimeters (Vector) |
| **Database** | MySQL (async) | SQLite (sync) |
| **JSON** | `json.encode/decode` | `JSON.stringify/parse` |
| **UI System** | NUI (SendNUIMessage) | WebUI (SendEvent) |
| **Entities** | `GetGamePool()` | `GetAllPlayers() GetAllPawns() GetAllVehicles() and more...` |
| **Distance** | `#(v1 - v2)` | `GetDistanceBetweenCoords(coords1, coords2)` |
| **Delete Entity** | `DeleteEntity()` | `DeleteEntity()` |
| **Exports** | `exports['name']:Func()` | `exports['name']:Func()` |

---

## Final Tips

1. **Start Simple**: Port basic scripts first (like the ATM example)
2. **Test Frequently**: Test after each major change
3. **Use Built-in Functions**: QBCore/Lua API provide many helper functions
4. **Check Character/Player**: Always validate before accessing methods
5. **Read Existing Code**: Study working HELIX resources for patterns
6. **Mind the Scale**: Remember 1 meter = 100cm in HELIX

Good luck porting your FiveM scripts to HELIX!!
