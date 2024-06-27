---
title: Matchmaking
description: Start matchmaking for any world.
tags: [static-class]
---

<HeaderDeclaration type="StaticClass" name="Matchmaking" is_static/>

## Examples

```lua title="Server/Index.lua"
print("Matchmaking example")

local matchmaking_id

function EnterMatchmaking(player)
    Matchmaking.LeaveAllMatchmaking(player, function (success)
        if success then
            Matchmaking.JoinMatchmaking("helix-casino-games", player, 5, function(sucess, match_id, current_players, min_players)
                matchmaking_id = match_id
                print(sucess)
                print("Matchmaking ID = " .. match_id)
                print("Current players =" .. current_players)
                print("Min players to start = " .. min_players)
            end)
        end
    end)
end

-- Check matchmaking status every second
Timer.SetInterval(function ()
    if (matchmaking_id ~= nil) then
        Matchmaking.CheckMatchmakingStatus(matchmaking_id, function(sucess, match_id, current_players, min_players, status, ip)
            print("Matchmaking Status:")
            print(sucess)
            print(match_id)
            print(current_players)
            print(min_players)
            print(status)
            print(ip)

            if (ip ~= '') then
                -- connect
            end
        end)
    end
end, 1000)
```

## Static Functions

<StaticFunctionsDeclaration type="StaticClass" name="Matchmaking" />


## Events

<EventsDeclaration type="StaticClass" name="Matchmaking" />