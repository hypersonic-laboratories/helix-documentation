---
title: Door
description: Creates usable, and interactable doors at specified locations using types in the given enum
tags: [class]
---
The Door class creates functional, interactable doors at specified locations in the world. There are various door types, which also allow for custom static meshes. This class provides methos to allow for runtime customisation of doors.

## Constructor

```lua title="Example"
local SpawnTransform = Transform()
SpawnTransform.Translation = Vector(0, 0, 151.0)
local myDoor = Door(DoorType.Classic, SpawnTransform, '/Path/To/StaticMesh.StaticMesh', {
    bSupportsLocking = true,
})
```

| Name           | Type        | Default      | Description                                                             |
|----------------|-------------|--------------|-------------------------------------------------------------------------|
| `DoorType`      | [DoorType](../global-variables/enums.md#doortype)    | `DoorType.Classic`    | Type of door to be spawned |
| `Transform`   | `Transform`    | **Required** | Spawn transform to spawn the door actor at |
| `StaticMesh`          | `string`  | **Optional**  | The static mesh to use on the door, if any. (Door types have their own default mesh) |
| `DoorProperties`   | `table` | **Optional**   |  Properties to set on the door, used for spawning and replication  |

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

### Other Properties

```lua title="Shared Door Properties"
-- Size of door collision box
DoorCollisionSize = FVector(5.0, 40.0, 100.0)
-- Range for proximity detection
DoorProximityRadius = 100.0
-- Actor types to detect (default: Characters)
ProximityDetectionActorClasses = {}
-- Current actors in proximity (read-only)
ProximityActorCount = 0
```

```lua title="Hinged Door Specific Properties"
-- Locking system
bSupportsLocking = false -- Enable lock/unlock functionality
bStartLocked = false -- Start in locked state
LockInteractOption = {} -- Interaction settings for locking
UnlockInteractOption = {} -- Interaction settings for unlocking

-- Physics properties
DoorMass = 500.0 -- Affects mass of door. Makes the door harder to push
DoorDamping = 10.0 -- Damping for door collider. High values makes the door harder to push and prevents swinging. Lower values makes the door easier to push and allows it to swing while closing
DoorHingePullStrength = 10.0 -- Strength of pulling force the hinge applies to door while it's opened. Makes door harder to open, and affects speed of door to get into closed state back.
DoorHingeOffsetRatio = 0.88 -- Door hinge should be pushed towards center of the door a little to prevent physics collision with consecutive walls during rotation. This ratio value controls amount of inner push for hinge location.
DoorHingeAngleRange = 90.0 -- Max swing rotation (degrees). The angle covers both sides, so it should be around 90 degrees in normal conditions.
DoorInteractionRange = 25.0 -- Range of interaction area in front & backside of the door collider. Keep on small values for more realistic behavior with physics doors

-- Hand reach system
bAllowReachHandToHandles = false -- If true, character will try to reach towards handles while passing through
ReachingHandPairType = EHelixHandReachHandPairType.ClosestHand -- Which hand to reach towards handle, if bReachHandToHandles is true
ReachingHandPoseType = EHelixHandReachPoseType.Grip -- Which pose to use on hands while reaching towards handle, if bReachHandToHandles is true
ReachingHandStretchLimit = 65.0 --  We can reach to handle only if we're closer than provided value
ReachingHandMaxAllowedRotation = 55.0 -- If rotation difference is bigger than this value between character & door mesh, we will stop reaching towards the handle

-- Door handles
DoorHandleRightOffset = -40.0 -- Offset for door handles on Y axis from center of door
DoorHandleUpOffset = 0.0 -- Offset for door handles on Z axis from center of door

-- Special abilities
bAllowCharacterShoulderCharge = true -- If true, character will trigger a shoulder charge towards door after getting into proximity
```

```lua title="Sliding Door Specific Properties"
-- Movement settings
DoorSlideTargetRelativeLocOffset = FVector(0, 0, 0) -- Target position offset
DoorSlideTargetRelativeRotOffset = FRotator(0, 0, 0) -- Target rotation offset
DoorSlideSpeed = 1.0 -- Movement speed multiplier

-- Behavior
bDoorSlideBasedOnProximity = false -- Auto-open on proximity
bTetherWithNearbyDoors = true -- Sync with nearby sliding doors
bDoorCurrentlyMoving = false -- Currently animating (read-only)

-- Interaction (disabled if proximity-based)
OpenInteractOption = {} -- Interaction for opening
CloseInteractOption = {} -- Interaction for closing
```

## Functions

### `SetStaticMesh`
Change the static mesh of the door actor.

```lua title="Example"
myDoor:SetStaticMesh('/Path/To/NewStaticMesh.NewStaticMesh')
```

---

### `IsOpened`
Gets whether the door is opened or not.

- <mark style="color:yellow;">returns</mark>: `boolean`

```lua title="Example"
local bDoorOpen = myDoor:IsOpened()
```

---

### `IsLocked`
Gets whether the door is locked or not.

- <mark style="color:yellow;">returns</mark>: `boolean`

```lua title="Example"
local bDoorLocked = myDoor:IsLocked()
```

---

### `IsActorInFrontSideOfDoor`
Gets whether the specified actor is on the front side of the door or not.

- <mark style="color:yellow;">returns</mark>: `boolean`

```lua title="Example"
local bIsInFront = myDoor:IsActorInFrontSideOfDoor(TargetActor)
```

---

### `GetDoorOpenAlpha`
Gets the open alpha of the door.
Either rotation amount compared to max allowed rotation, or sideways amount compared to the max offset for sliding doors.

- <mark style="color:yellow;">returns</mark>: `number`

```lua title="Example"
local doorAlpha = myDoor:GetDoorOpenAlpha()
print(doorAlpha) -- e.g. 0.67
```

---

### `GetAngleDifferenceBetweenDoorAndCharacter`
Gets the angle difference between the characters forward vector, and the door collision forward vector.

- <mark style="color:yellow;">returns</mark>: `number`

```lua title="Example"
local angle = myDoor:GetAngleDifferenceBetweenDoorAndCharacter(GetPlayerPawn())
print(angle) -- e.g. 45.2
```
