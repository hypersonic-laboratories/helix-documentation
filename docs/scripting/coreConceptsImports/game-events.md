---
title: Game Events
description: Internally broadcasted events
tags: [ scripting ]
---

HELIX automatically triggers events in the background when certain actions happen to make it easier for you to respond to those actions!

---

## `HEvent:PlayerLoggedIn`
Event that can be listened to for when the player has logged in

/// Note
This event is fired early in the player login flow.
///

```lua title="Server"
RegisterServerEvent('HEvent:PlayerLoggedIn', function(Player)
    print('Player is logged in', Player)
end)
```

```lua title="Client"
RegisterClientEvent('HEvent:PlayerLoggedIn', function()
    print('My Player is logged in', HPlayer)
end)
```

---

## `HEvent:PlayerUnloaded`
Event that can be listened to for when a player has unloaded

```lua title="Server"
RegisterServerEvent('HEvent:PlayerUnloaded', function(Player)
    print('Player unloaded', Player)
end)
```

---

## `HEvent:PlayerReady`
Event that can be listened to for when the player is in play. This may fire before possession.

```lua title="Server"
RegisterServerEvent('HEvent:PlayerReady', function(Player)
    print('Player is ready:', Player)
end)
```

```lua title="Client"
RegisterClientEvent('HEvent:PlayerReady', function(Player)
    print('My Player is ready:', Player, Player == HPlayer)
end)
```

---

## `HEvent:PlayerPossessed`
Event that can be listened to for when the player has possessed a new pawn

```lua title="Server"
RegisterServerEvent('HEvent:PlayerPossessed', function(Player, Pawn)
    print('Player:', Player, 'Possessed:', Pawn)
end)
```

```lua title="Client"
RegisterClientEvent('HEvent:PlayerPossessed', function(Pawn)
    print('My Player:', HPlayer, 'Possessed:', Pawn)
end)
```

---

## `HEvent:PlayerUnPossessed`
Event that can be listened to for when the player has unpossessed their pawn

```lua title="Server"
RegisterServerEvent('HEvent:PlayerUnPossessed', function(Player, Pawn)
    print('Player:', Player, 'UnPossessed:', Pawn)
end)
```

```lua title="Client"
RegisterClientEvent('HEvent:PlayerUnPossessed', function(Pawn)
    print('My Player:', HPlayer, 'UnPossessed:', Pawn)
end)
```

---

## `HEvent:PawnReady`
Event that can be listened to for when a character pawn has been created. This event will fire for all Clients that can see the pawn

```lua title="Server"
RegisterServerEvent('HEvent:PawnReady', function(Pawn)
    print('Pawn created:', Pawn)
end)
```

```lua title="Client"
RegisterClientEvent('HEvent:PawnReady', function(Pawn)
    print('Pawn created:', Pawn)
end)
```

---

## `HEvent:HealthChanged`
Event that can be listened to for any health changes on the character

```lua title="Client"
RegisterClientEvent('HEvent:HealthChanged', function(oldHealth, newHealth)
    print('Health changed from ' .. oldHealth .. ' to ' .. newHealth)
end)
```

---

## `HEvent:Death`
Event that can be listened to for character death

```lua title="Client"
RegisterClientEvent('HEvent:Death', function()
    print('Player has died')
end)
```

---

## `HEvent:WeaponEquipped`
Event that can be listened to for player equipping a weapon

```lua title="Client"
RegisterClientEvent('HEvent:WeaponEquipped', function(displayName, weaponName)
    print('Equipped weapon: ' .. displayName .. ' (' .. weaponName .. ')')
end)
```

---

## `HEvent:WeaponUnequipped`
Event that can be listened to for when a character unequips a weapon

```lua title="Client"
RegisterClientEvent('HEvent:WeaponUnequipped', function()
    print('Unequipped weapon')
end)
```

---

## `HEvent:EnteredVehicle`
Event that can be listened to for character entering a vehicle

```lua title="Client"
RegisterClientEvent('HEvent:EnteredVehicle', function(seat)
    print('Entered vehicle, seat: ' .. seat)
end)
```

---

## `HEvent:ExitedVehicle`
Event that can be listened to for character leaving a vehicle

```lua title="Client"
RegisterClientEvent('HEvent:ExitedVehicle', function(seat)
    print('Exited vehicle, seat: ' .. seat)
end)
```

---

## `HEvent:VoiceStateChanged`
Event that can be listened to for when the user is talking

```lua title="Client"
RegisterClientEvent('HEvent:VoiceStateChanged', function(isTalking)
    print('Is User Talking: ' .. tostring(isTalking))
end)
```