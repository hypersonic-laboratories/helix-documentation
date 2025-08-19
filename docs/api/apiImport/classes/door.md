---
title: Door
description: Creates usable, and interactable doors at specified locations using types in the given enum
tags: [class]
---
<HeaderDeclaration type="Class" name="Door" />
The Door class creates functional, interactable doors at specified locations in the world. There are various door types, which also allow for custom static meshes. This class provides methos to allow for runtime customisation of doors.

## Constructor
<ConstructorDeclaration type="Class" name="Door" />

```lua title="Example"
local SpawnTransform = Transform()
SpawnTransform.Translation = Vector(0, 0, 151.0)
local myDoor = Door(DoorType.Classic, SpawnTransform, '/Path/To/StaticMesh.StaticMesh')
```

| Name           | Type        | Default      | Description                                                             |
|----------------|-------------|--------------|-------------------------------------------------------------------------|
| `DoorType`      | [DoorType](../global-variables/enums#doortype)    | `EDoorType.Classic`    | Type of door to be spawned |
| `Transform`   | `Transform`    | **Required** | Spawn transform to spawn the door actor at |
| `StaticMesh`          | `string`  | **Optional**  | The static mesh to use on the door, if any. (Door types have their own default mesh) |

## Properties

### `OnDoorLockStateChanged` (Multicast Delegate)
Broadcasted when the locked state of the door changes.
```lua title="Example"
myDoor.OnDoorLockStateChanged:Add(HWorld, function(Door, bIsLocked)
    print('Door', Door, 'isLocked: ' .. tostring(bIsLocked))
end)
```

---
### `OnDoorOpenStateChanged` (Multicast Delegate)
Broadcasted when doors reach their opened or closed state parameters.
```lua title="Example"
myDoor.OnDoorOpenStateChanged:Add(HWorld, function(Door, bIsOpen)
    print('Door', Door, 'isOpen: ' .. tostring(bIsOpen))
end)
```

---
### `OnDoorActorProximityStateChanged` (Multicast Delegate)
Broadcasted when one of the proximity tracked actor classes enter or exit the proximity sphere.
```lua title="Example"
myDoor.OnDoorActorProximityStateChanges:Add(HWorld, function(Door, Actor, bInProximity)
    print('Door', Door, 'Actor', Actor, 'inProximity:' .. tostring(bInProximity))
end)
```

## Functions
<FunctionsDeclaration type="Class" name="Door" />

### `SetStaticMesh`
Change the static mesh of the door actor.
```lua title="Example"
myDoor:SetStaticMesh('/Path/To/NewStaticMesh.NewStaticMesh')
```

---
### `ApplyDoorProperties`
Apply parameter changes to the door instance. Call on server after making changes to the door.
```lua title="Example"
myDoor.DoorDamping = 50.0
myDoor:ApplyDoorProperties()
```

---
### `IsOpened`
Gets whether the door is opened or not.
```lua title="Example"
local bDoorOpen = myDoor:IsOpened()
```

---
### `IsLocked`
Gets whether the door is locked or not.
```lua title="Example"
local bDoorLocked = myDoor:IsLocked()
```

---
### `IsActorInFrontSideOfDoor`
Gets whether the specified actor is on the front side of the door or not.
```lua title="Example"
local bIsInFront = myDoor:IsActorInFrontSideOfDoor(TargetActor)
```

---
### `GetDoorOpenAlpha`
Gets the open alpha of the door. Either rotation amount compared to max allowed rotation, or sideways amount compared to the max offset for sliding doors.
```lua title="Example"
local doorAlpha = myDoor:GetDoorOpenAlpha()
```

---
### `GetAngleDifferenceBetweenDoorAndCharacter`
Gets the angle difference between the characters forward vector, and the door collision forward vector.
```lua title="Example"
myDoor:GetAngleDifferenceBetweenDoorAndCharacter(HPlayer:GetControlledCharacter())
```