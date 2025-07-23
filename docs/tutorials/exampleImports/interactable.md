---
title: Creating Interactable Actors
tags: [scripting]
---
# Creating Interactable Actors
This page provides real-world examples of how to create interactive objects using the `Interactable` class. 
/// note
Interactables should only be created on the server due to them leveraging the **Gameplay Ability System (GAS)** for interactions. This means that action callbacks are executed on the server.
///
/// tip
Interactables are perfect for creating chests, NPCs, shop vendors, and any object players need to interact with in your game world. Interaction options can use Lua callbacks with the `Action` parameter or trigger gameplay abilities using the Gameplay Ability System (GAS) with the `Ability` parameter.
///

### Interaction Option
```lua
{
    Text =  "string", -- The text to be displayed on the interaction option
    SubText = "string", -- The SubText to be displayed below the interaction option
    Input = "string", -- The path to the InputAction data asset
    Action? = function() end, -- The function to be used when no ability is specified
    Ability? = "string", -- The ability to be used when no callback Action is specified
}
```

---

### Code Examples

```lua title="Basic Interaction with Lua Callback"
-- Simple interaction using a Lua function callback
local CoinPile = Interactable({
    {
        Text = 'Collect Coins',
        SubText = 'Press F to collect',
        Input = '/Game/Input/Actions/IA_Interact.IA_Interact',
        Action = function(CoinActor)
            print("Collected 25 gold coins!")
            -- Add coins to player inventory
        end,
    },
}, '/Engine/VREditor/BasicMeshes/SM_Cube_01.SM_Cube_01', Transform())
```

```lua title="Interaction with Gameplay Ability"
-- Using a gameplay ability instead of Lua callback
local HealingCrystal = Interactable({
    {
        Text = 'Absorb Energy',
        SubText = 'Press F to heal',
        Input = '/Game/Input/Actions/IA_Interact.IA_Interact',
        Ability = '/Game/Abilities/GA_Heal.GA_Heal_C', -- Triggers healing ability
    },
}, '/Engine/VREditor/BasicMeshes/SM_Cube_01.SM_Cube_01', Transform())
```

```lua title="Treasure Chest with Multiple Options"
-- Create a chest with multiple interaction options
local InteractionOptions = {
    {
        Text = 'Open Chest',
        SubText = 'Press F to loot',
        Input = '/Game/Input/Actions/IA_Interact.IA_Interact',
        Action = function(ChestActor)
            -- Give player random loot
            local lootAmount = math.random(10, 100)
            print("Found " .. lootAmount .. " gold coins!")
        end,
    },
    {
        Text = 'Examine Chest',
        SubText = 'Press E to examine',
        Input = '/Game/Input/Actions/IA_Examine.IA_Examine',
        Action = function(ChestActor)
            print("An old wooden chest with intricate carvings.")
        end,
    }
}

local ChestTransform = Transform()
ChestTransform.Translation = Vector(200, 200, 50) -- X, Y, Z
ChestTransform.Rotation = Rotator(0.0, 45.5, 0.0) -- Pitch, Yaw, Roll

local TreasureChest = Interactable(InteractionOptions, '/Engine/VREditor/BasicMeshes/SM_Cube_01.SM_Cube_01', ChestTransform)
```

```lua title="Attach Interactable to Existing Actor"
-- Make an existing actor interactable
local ExistingCube = StaticMesh(Vector(300, 0, 0), Rotator(), '/Engine/VREditor/BasicMeshes/SM_Cube_01.SM_Cube_01')

local CubeInteractable = Interactable({
    {
        Text = 'Push Cube',
        SubText = 'Press F to push',
        Input = '/Game/Input/Actions/IA_Interact.IA_Interact',
        Action = function(CubeActor)
            -- Apply physics impulse to push the cube
            local forwardVector = Vector(500, 0, 0)
            print("Cube pushed!")
        end,
    }
})

-- Attach the interactable to our existing cube
CubeInteractable:SetInteractableProp(ExistingCube)
```

```lua title="Customising Interaction Point"
-- Create an interactable with custom interaction point position
local BellTower = Interactable({
    {
        Text = 'Ring Bell',
        SubText = 'Press F to ring the bell',
        Input = '/Game/Input/Actions/IA_Interact.IA_Interact',
        Action = function(BellActor)
            Timer.CreateThread(function()
                local MeshComponent = BellActor:K2_GetComponentsByClass(UE.UStaticMeshComponent)[1]
                local InitialRotation = MeshComponent:K2_GetComponentRotation()
                
                -- Single loop with damping sine wave
                for i = 0, 300, 3 do
                    local time = i / 100.0
                    local damping = math.exp(-time * 0.8) -- Exponential decay
                    local SwingAngle = math.sin(time * 4) * 25 * damping
                    local NewRotation = Rotator(InitialRotation.Pitch, InitialRotation.Yaw, InitialRotation.Roll + SwingAngle)
                    MeshComponent:K2_SetRelativeRotation(NewRotation, false, nil, true) -- Works if Transform is replicated
                    Timer.Wait(0.03)
                end
                
                MeshComponent:K2_SetRelativeRotation(InitialRotation, false, nil, true) -- Works if Transform is replicated
            end)
        end,
    }
}, '/Engine/VREditor/BasicMeshes/SM_Cube_01.SM_Cube_01', Transform())

-- Move the interaction point to the top of the tower
BellTower:SetInteractionPointRelativeLocation(Vector(0, 0, 300))
```