---
title: Timers
tags: [scripting]
---
# Using Timers for Cooldown Functionality
This page provides useful real-world examples of how to use the `Timer` class to create cooldowns, delays, and scheduled functionality.

---

### Code Examples

```lua title="Basic Ability Cooldown"
-- Simple cooldown system for player abilities
local playerCooldowns = {}

function CastFireball(playerID)
    if playerCooldowns[playerID] then
        print("Fireball is on cooldown!")
        return
    end

    -- Cast the spell
    print("Fireball cast!")

    -- Start cooldown
    playerCooldowns[playerID] = true
    Timer.SetTimeout(function()
        playerCooldowns[playerID] = nil
        print("Fireball ready!")
    end, 5000) -- 5 second cooldown
end
```

```lua title="Player Respawn with Countdown"
-- Player respawn with countdown timer
function RespawnPlayer(playerID)
    print("You died! Respawning in 10 seconds...")

    -- Creating coroutine to not halt game and allow yielding
    Timer.CreateThread(function()
        for i = 10, 1, -1 do
            print("Respawning in " .. i .. " seconds...")
            Timer.Wait(1000)
        end

        print("Respawning now!")
        -- Respawn player logic here
    end)
end
```

```lua title="Auto-Save System"
-- Automatic game saving every 5 minutes
local autoSaveTimer = Timer.SetInterval(function()
    print("Auto-saving game...")
    local PlayerData = { firstName = 'qwerty1', lastName = 'Verified' }
    -- Save all player data to database
    Database.ExecuteAsync("UPDATE Players SET Data = ?, LastSaved = ?", {PlayerData, os.time()}, function(success)
        if success then
            print("PlayerData saved successfully!")
        else
            print("Save failed!")
        end
    end)
end, 300000) -- 5 minutes
```

```lua title="Clearing the Auto-Save interval"
-- Stop auto-save when needed
function StopAutoSave()
    Timer.ClearInterval(autoSaveTimer)
    print("Auto-save stopped.")
end
```