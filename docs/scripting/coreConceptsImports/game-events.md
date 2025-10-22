---
title: Game Events
description: Internally broadcasted events
tags: [ scripting ]
---

HELIX automatically triggers events in the background when certain actions happen to make it easier for you to respond to those actions!

---

## `HEvent:HealthChanged`
Client event that can be listened to for any health changes on the character

```lua title="Example"
RegisterClientEvent('HEvent:HealthChanged', function(oldHealth, newHealth)
    print('Health changed from ' .. oldHealth .. ' to ' .. newHealth)
end)
```

---

## `HEvent:Death`
Client event that can be listened to for character death

```lua title="Example"
RegisterClientEvent('HEvent:Death', function()
    print('Player has died')
end)
```

---

## `HEvent:WeaponEquipped`
Client event that can be listened to for player equipping a weapon

```lua title="Example"
RegisterClientEvent('HEvent:WeaponEquipped', function(displayName, weaponName)
    print('Equipped weapon: ' .. displayName .. ' (' .. weaponName .. ')')
end)
```

---

## `HEvent:WeaponUnequipped`
Client event that can be listened to for when a character unequips a weapon

```lua title="Example"
RegisterClientEvent('HEvent:WeaponUnequipped', function()
    print('Unequipped weapon')
end)
```

---

## `HEvent:EnteredVehicle`
Client event that can be listened to for character entering a vehicle

```lua title="Example"
RegisterClientEvent('HEvent:EnteredVehicle', function(seat)
    print('Entered vehicle, seat: ' .. seat)
end)
```

---

## `HEvent:ExitedVehicle`
Client event that can be listened to for character leaving a vehicle

```lua title="Example"
RegisterClientEvent('HEvent:ExitedVehicle', function(seat)
    print('Exited vehicle, seat: ' .. seat)
end)
```