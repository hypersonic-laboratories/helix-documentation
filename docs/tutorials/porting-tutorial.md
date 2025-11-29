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
8. [Weapon Management](#weapon-management)
9. [World Objects & Entities](#world-objects--entities)
10. [Notifications & HUD](#notifications--hud)
11. [Complete Example: Porting a Simple Script](#complete-example-porting-a-simple-script)
12. [Common Pitfalls & Best Practices](#common-pitfalls--best-practices)

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

**FiveM:**

```lua
-- FiveM
local QBCore = exports['qb-core']:GetCoreObject()
```

**HELIX:**

```lua
-- HELIX
local QBCore = exports['qb-core']:GetCoreObject() -- Same!
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

### Getting Local Player

**FiveM:**

```lua
-- FiveM
local ped = PlayerPedId()
local coords = GetEntityCoords(ped)
```

**HELIX:**

```lua
-- HELIX - Uses HPlayer and HCharacter classes
local player = Client.GetLocalPlayer()
local character = player:GetControlledCharacter()

-- Check if character exists 
if not character then return end

local coords = character:GetLocation()  -- Returns Vector object
```

### Getting Player Position

**FiveM:**

```lua
-- FiveM
local coords = GetEntityCoords(PlayerPedId())
local x, y, z = coords.x, coords.y, coords.z
```

**HELIX:**

```lua
-- HELIX
local player = Client.GetLocalPlayer()
local character = player:GetControlledCharacter()
if not character then return end

local location = character:GetLocation()  -- Vector object
-- Access components: location.X, location.Y, location.Z
```

### Getting Closest Player (Client)

**FiveM:**

```lua
-- FiveM
function GetClosestPlayer()
    local players = GetActivePlayers()
    local ped = PlayerPedId()
    local coords = GetEntityCoords(ped)
    local closestDistance = -1
    local closestPlayer = -1
    
    for _, player in pairs(players) do
        local targetPed = GetPlayerPed(player)
        if targetPed ~= ped then
            local targetCoords = GetEntityCoords(targetPed)
            local distance = #(coords - targetCoords)
            if closestDistance == -1 or distance < closestDistance then
                closestPlayer = player
                closestDistance = distance
            end
        end
    end
    
    return closestPlayer, closestDistance
end
```

**HELIX:**

```lua
-- HELIX - Built into QBCore.Functions
local closestPlayer, closestDistance = QBCore.Functions.GetClosestPlayer()

-- Or get the HCharacter directly
local closestCharacter, closestDistance = QBCore.Functions.GetClosestHCharacter()
```

### Getting Closest Player (Server)

**FiveM:**

```lua
-- FiveM - You'd need to write this yourself
function GetClosestPlayer(source, coords)
    -- Custom implementation needed
end
```

**HELIX:**

```lua
-- HELIX - Built-in server function
local closestPlayer, closestDistance = QBCore.Functions.GetClosestPlayer(source, coords)

-- Or get HCharacter
local closestChar, distance = QBCore.Functions.GetClosestHCharacter(source, coords)
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
local result = [Database.Select](http://Database.Select)('SELECT * FROM players WHERE citizenid = ?', { citizenid })

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
        name = [excluded.name](http://excluded.name),
        money = [excluded.money](http://excluded.money)
]], { citizenid, name, JSON.stringify(money) })
```

### JSON Handling in Database

**FiveM:**

```lua
-- FiveM
local moneyJson = json.encode([PlayerData.money](http://PlayerData.money))
local moneyData = json.decode([result.money](http://result.money))
```

**HELIX:**

```lua
-- HELIX - Uses JSON global (capital J)
local moneyJson = JSON.stringify([PlayerData.money](http://PlayerData.money))
local moneyData = JSON.parse([result.money](http://result.money))
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
-- NO NATIVE SOLUTION, MUST USE QBCORE

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
local myWebUI = WebUI('UniqueID', 'resource-name/path/to/index.html', true)

-- Wait for browser to load
myWebUI.Browser.OnLoadCompleted:Add(myWebUI.Browser, function()
    -- Now safe to call functions
    myWebUI:CallFunction('functionName', param1, param2)
end)

-- Calling JS functions from Lua
myWebUI:CallFunction('updateData', { cash = 1000, bank = 5000 })
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
-- HELIX - Direct function calls
myWebUI:CallFunction('updateBalances', { cash = cash, bank = bank })
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
        
        -- Wait for browser to load
        bankingUI.Browser.OnLoadCompleted:Add(bankingUI.Browser, function()
            -- Get player data
            local PlayerData = QBCore.Functions.GetPlayerData()
            
            -- Send initial data
            bankingUI:CallFunction('initData', {
                cash = [PlayerData.money.cash](http://PlayerData.money.cash),
                bank = [PlayerData.money.bank](http://PlayerData.money.bank),
                playerData = {
                    name = PlayerData.charinfo.firstname .. ' ' .. PlayerData.charinfo.lastname,
                    job = PlayerData.job
                }
            })
        end)
        
        -- Register event handlers
        bankingUI:Subscribe('deposit', function(data)
            TriggerServerEvent('qb-banking:server:deposit', data.amount)
        end)
        
        bankingUI:Subscribe('withdraw', function(data)
            TriggerServerEvent('qb-banking:server:withdraw', data.amount)
        end)
        
        bankingUI:Subscribe('close', function()
            bankingUI:Destroy()
            bankingUI = nil
        end)
    end
end
```

**JavaScript (index.html):**

```jsx
// HELIX - Global function to send events to Lua
function hEvent(eventName, data) {
    // This is provided by HELIX WebUI system
}

// Called from Lua via CallFunction
window.initData = function(data) {
    document.getElementById('cash').textContent = '$' + [data.cash](http://data.cash)
    document.getElementById('bank').textContent = '$' + [data.bank](http://data.bank)
}

window.updateBalances = function(data) {
    document.getElementById('cash').textContent = '$' + [data.cash](http://data.cash)
    document.getElementById('bank').textContent = '$' + [data.bank](http://data.bank)
}

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

**HELIX:**

```lua
-- HELIX - Client side
local player = Client.GetLocalPlayer()
local character = player:GetControlledCharacter()
if not character then return end

local location = character:GetLocation()
local rotation = character:GetRotation()
local forward = rotation:GetForwardVector()
local spawnLocation = location + forward * 500  -- 500cm in front

-- Create vehicle using QBCore helper (or directly with HSimpleVehicle)
local vehicle = QBCore.Functions.CreateVehicle(source, 'vehicle_name', spawnLocation, rotation)
```

**HELIX - Server Side (Better approach):**

```lua
-- Server/functions.lua shows the implementation
function QBCore.Functions.CreateVehicle(source, vehicle_name, coords, rotation, plate, fuel)
    local vehicle_data = QBShared.Vehicles[vehicle_name]
    if not vehicle_data then return false end
    
    local ped = source:K2_GetPawn()
    if not ped then return false end
    
    -- Get spawn location if not provided
    local location = coords or ped:GetLocation()
    local rot = rotation or ped:GetRotation()
    
    -- Create the vehicle
    local vehicle = HSimpleVehicle(
        location, 
        rot, 
        vehicle_data.asset_name,
        vehicle_data.collision_type,
        vehicle_data.gravity_enabled
    )
    
    if not vehicle then return false end
    
    -- Set plate and fuel
    local plate_number = plate or QBCore.Functions.GeneratePlate(vehicle)
    vehicle:SetValue('plate', plate_number, true)
    
    local fuel_value = fuel or 100
    vehicle:SetValue('fuel', fuel_value, true)
    
    return vehicle
end
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
-- HELIX - Built into QBCore
local closestVehicle, closestDistance = QBCore.Functions.GetClosestVehicle()

-- Or get HSimpleVehicle
local closestHVehicle, distance = QBCore.Functions.GetClosestHVehicle()
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
vehicle:Destroy()
```

---

## Weapon Management

### Creating a Weapon

**FiveM:**

```lua
-- FiveM
GiveWeaponToPed(ped, GetHashKey('WEAPON_PISTOL'), 100, false, true)
```

**HELIX:**

```lua
-- HELIX - More complex, uses Weapon class
local weapon = QBCore.Functions.CreateWeapon(source, 'weapon_gaston', coords, rotation, itemInfo)

-- Then give to player
if weapon then
    local ped = source:GetControlledCharacter()
    if ped then
        ped:PickUp(weapon)
    end
end
```

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
-- HELIX - Uses class-specific GetAll()
local vehicles = HSimpleVehicle.GetAll()
local characters = HCharacter.GetAll()
local props = Prop.GetAll()
local weapons = Weapon.GetAll()
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
-- HELIX - Using Vector:Distance()
local location1 = entity1:GetLocation()
local location2 = entity2:GetLocation()
local distance = location1:Distance(location2)
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
-- HELIX Client (Same!)
exports['qb-core']:Notify('Text here', 'success', 5000)

-- HELIX Server (Same!)
TriggerClientEvent(source, 'QBCore:Notify', 'Text here', 'error')

-- Or using export
exports['qb-core']:Player(source, 'Notify', 'Text here', 'success', 5000)
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
local QBCore = exports['qb-core']:GetCoreObject()

RegisterNetEvent('atm:client:openATM', function()
    local PlayerData = QBCore.Functions.GetPlayerData()
    
    SendNUIMessage({
        action = 'open',
        cash = [PlayerData.money.cash](http://PlayerData.money.cash),
        bank = [PlayerData.money.bank](http://PlayerData.money.bank)
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
local QBCore = exports['qb-core']:GetCoreObject()

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

### HELIX Version

```lua
-- HELIX - Client/Index.lua
local QBCore = exports('qb-core', 'GetCoreObject')()
local atmUI = nil

RegisterClientEvent('atm:client:openATM', function()
    local PlayerData = QBCore.Functions.GetPlayerData()
    
    if not atmUI then
        -- Create WebUI instance
        atmUI = WebUI('ATM', 'atm-resource/Client/html/index.html', 3)
        
        -- Wait for browser load
        atmUI.Browser.OnLoadCompleted:Add(atmUI.Browser, function()
            -- Send initial data via function call
            atmUI:CallFunction('openATM', {
                cash = [PlayerData.money.cash](http://PlayerData.money.cash),
                bank = [PlayerData.money.bank](http://PlayerData.money.bank)
            })
        end)
        
        -- Register event handlers
        atmUI:Subscribe('deposit', function(data)
            TriggerServerEvent('atm:server:deposit', data.amount)
        end)
        
        atmUI:Subscribe('withdraw', function(data)
            TriggerServerEvent('atm:server:withdraw', data.amount)
        end)
        
        atmUI:Subscribe('close', function()
            atmUI:Destroy()
            atmUI = nil
        end)
    else
        -- UI already exists, just update data
        atmUI:CallFunction('openATM', {
            cash = [PlayerData.money.cash](http://PlayerData.money.cash),
            bank = [PlayerData.money.bank](http://PlayerData.money.bank)
        })
    end
end)

-- Update balances when money changes
RegisterClientEvent('atm:client:updateBalances', function(cash, bank)
    if atmUI then
        atmUI:CallFunction('updateBalances', { cash = cash, bank = bank })
    end
end)

-- HELIX - Server/Index.lua
local QBCore = exports('qb-core', 'GetCoreObject')()

RegisterServerEvent('atm:server:deposit', function(source, amount)
    local Player = QBCore.Functions.GetPlayer(source)
    if not Player then return end
    
    amount = math.floor(tonumber(amount) or 0)
    if amount <= 0 then return end
    
    if Player.Functions.RemoveMoney('cash', amount, 'atm-deposit') then
        Player.Functions.AddMoney('bank', amount, 'atm-deposit')
        Player.Functions.Notify('Deposited $' .. amount, 'success')
        
        -- Update UI
        TriggerClientEvent('atm:client:updateBalances', source, 
            [Player.PlayerData.money.cash](http://Player.PlayerData.money.cash), 
            [Player.PlayerData.money.bank](http://Player.PlayerData.money.bank)
        )
    else
        Player.Functions.Notify('Not enough cash', 'error')
    end
end)

RegisterServerEvent('atm:server:withdraw', function(source, amount)
    local Player = QBCore.Functions.GetPlayer(source)
    if not Player then return end
    
    amount = math.floor(tonumber(amount) or 0)
    if amount <= 0 then return end
    
    if Player.Functions.RemoveMoney('bank', amount, 'atm-withdraw') then
        Player.Functions.AddMoney('cash', amount, 'atm-withdraw')
        Player.Functions.Notify('Withdrew $' .. amount, 'success')
        
        -- Update UI
        TriggerClientEvent('atm:client:updateBalances', source,
            [Player.PlayerData.money.cash](http://Player.PlayerData.money.cash),
            [Player.PlayerData.money.bank](http://Player.PlayerData.money.bank)
        )
    else
        Player.Functions.Notify('Not enough bank balance', 'error')
    end
end)
```

### JavaScript Changes

```jsx
// FiveM - script.js
window.addEventListener('message', function(event) {
    if ([event.data](http://event.data).action === 'open') {
        $('#atm-container').show()
        $('#cash-amount').text('$' + [event.data.cash](http://event.data.cash))
        $('#bank-amount').text('$' + [event.data.bank](http://event.data.bank))
    }
})

$('#deposit-btn').click(function() {
    $.post('[https://atm-resource/deposit](https://atm-resource/deposit)', JSON.stringify({
        amount: parseInt($('#amount').val())
    }))
})

// HELIX - script.js
window.openATM = function(data) {
    document.getElementById('atm-container').style.display = 'block'
    document.getElementById('cash-amount').textContent = '$' + [data.cash](http://data.cash)
    document.getElementById('bank-amount').textContent = '$' + [data.bank](http://data.bank)
}

window.updateBalances = function(data) {
    document.getElementById('cash-amount').textContent = '$' + [data.cash](http://data.cash)
    document.getElementById('bank-amount').textContent = '$' + [data.bank](http://data.bank)
}

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

**✅ Correct:**

```lua
-- HELIX - Will crash if no character
local player = Client.GetLocalPlayer()
local coords = player:GetControlledCharacter():GetLocation()
```

```lua
-- HELIX
local player = Client.GetLocalPlayer()
local character = player:GetControlledCharacter()
if not character then return end
local coords = character:GetLocation()
```

### 2. Database Result Handling

**❌ Wrong:**

```lua
-- HELIX - Direct access won't work
local result = [Database.Select](http://Database.Select)('SELECT * FROM players', {})
local data = result[1]  -- This is TArray, not Lua table!
```

**✅ Correct:**

```lua
-- HELIX - Convert to Lua table
local result = [Database.Select](http://Database.Select)('SELECT * FROM players', {})
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
    ui:CallFunction('update', data)  -- Called before load!
end
```

**✅ Correct:**

```lua
-- HELIX - Proper lifecycle
local myUI = nil

function OpenUI()
    if not myUI then
        myUI = WebUI('MyUI', 'path/to/ui.html', 3)
        
        myUI.Browser.OnLoadCompleted:Add(myUI.Browser, function()
            -- Now safe to call
            myUI:CallFunction('update', data)
        end)
    end
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
-- HELIX - Use class GetAll()
local vehicles = HSimpleVehicle.GetAll()
for _, vehicle in ipairs(vehicles) do
    vehicle:Destroy()
end
```

### 8. Player State Management

**Best Practice:**

```lua
-- HELIX Server - Always validate player exists
local Player = QBCore.Functions.GetPlayer(source)
if not Player then return end

-- Now safe to use Player.Functions
```

### 9. Exports Syntax

**FiveM:**

```lua
-- FiveM
local result = exports['resource-name']:ExportName(args)
```

**HELIX:**

```lua
-- HELIX - Different syntax
local result = exports('resource-name', 'ExportName', args)
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

## Summary: Key Differences

| Feature | FiveM | HELIX |
| --- | --- | --- |
| **Engine** | GTA V (RAGE) | Unreal Engine 5 |
| **Player Ped** | `PlayerPedId()` | `Client.GetLocalPlayer():GetControlledCharacter()` |
| **Coordinates** | Meters (vector3) | Centimeters (Vector) |
| **Database** | MySQL (async) | SQLite (sync) |
| **JSON** | `json.encode/decode` | `JSON.stringify/parse` |
| **UI System** | NUI (SendNUIMessage) | WebUI (CallFunction) |
| **Entities** | `GetGamePool()` | `ClassName.GetAll()` |
| **Distance** | `#(v1 - v2)` | `v1:Distance(v2)` |
| **Delete Entity** | `DeleteEntity()` | `entity:Destroy()` |
| **Exports** | `exports['name']:Func()` | `exports('name', 'Func', args)` |

---

## Final Tips

1. **Start Simple**: Port basic scripts first (like the ATM example)
2. **Test Frequently**: Test after each major change
3. **Use Built-in Functions**: QBCore provides many helper functions
4. **Check Character/Player**: Always validate before accessing methods
5. **Read Existing Code**: Study working HELIX resources for patterns
6. **Mind the Scale**: Remember 1 meter = 100cm in HELIX

Good luck porting your FiveM scripts to HELIX!!
