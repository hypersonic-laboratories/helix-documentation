---
title: HPlayer
description: ''
tags: [class]
---
<HeaderDeclaration type="Class" name="HPlayer" />
`HPlayer` is a high-level wrapper for the local or remote player controller
It extends the core functionality of `Controller` class, providing utility methods and accessors commonly used in gameplay scripting
Unlike actors or components, HPlayer is not spawned manually, instead it represents an already-existing controller instance, typically associated with a connected player
Each connected player (local or remote) can be accessed and controlled through this class, and a global Players table keeps track of all active instances

/// tip
`HPlayer` is a `Controller` so it inherits all functions from [Controller](controller.md)
///

## Functions
<FunctionsDeclaration type="Class" name="HPlayer" />

### `GetControlledCharacter`
Retrieves the character currently controlled by this player

- <span style="color: #facc15;">returns:</span> `APawn`

```lua title="Example"
local character = HPlayer:GetControlledCharacter()
```

---

### `GetCameraLocation`
Returns the camera's world location

- <span style="color: #facc15;">returns:</span> `Vector`

```lua title="Example"
local cameraLocation = HPlayer:GetCameraLocation()
```

---

### `GetCameraRotation`
Returns the camera's world rotation

- <span style="color: #facc15;">returns:</span> `FRotator`

```lua title="Example"
local cameraRotation = HPlayer:GetCameraRotation()
```

---

### `GetCameraArmLength`
Returns the spring arm length, if any

- <span style="color: #facc15;">returns:</span> `number` | `nil`

```lua title="Example"
local cameraArmLength = HPlayer:GetCameraArmLength()
```

---

### `StartCameraFade`
Starts a fade effect on the camera

- FromAlpha `number`
- ToAlpha `number`
- Duration `number`
- Color `LinearColor`
- bShouldFadeAudio `boolean`
- bHoldWhenFinished `boolean`

```lua title="Example"
HPlayer:StartCameraFade()
```

---

### `SetManualCameraFade`
Applies a constant fade at a given opacity

- InFadeAmount `number`
- Color `LinearColor`
- bInFadeAudio `boolean`

```lua title="Example"
HPlayer:SetManualCameraFade()
```

---

### `StopCameraFade`
Stops any active fade effect on the camera

```lua title="Example"
HPlayer:StopCameraFade()
```

---

### `SetCameraLocation`
Moves the spring arm to a new location

- NewLocation `Vector`
- bSweep `boolean`
- bTeleport `boolean`

```lua title="Example"
HPlayer:SetCameraLocation()
```

---

### `SetCameraRotation`
Rotates the spring arm in world space

- NewRotation `Rotator`
- bSweep `boolean`
- bTeleport `boolean`

```lua title="Example"
HPlayer:SetCameraRotation()
```

---

### `TranslateCameraTo`
Interpolates the camera's location

- Target `Vector`
- DeltaTime `number`
- InterpSpeed `number`

```lua title="Example"
HPlayer:TranslateCameraTo()
```

---

### `SetCameraSocketOffset`
Sets the camera's socket offset (end of spring arm)

- Offset `Vector`

```lua title="Example"
HPlayer:SetCameraSocketOffset()
```

---

### `SetCameraArmLength`
Sets the arm length for the spring arm

- Length `number`
- bSkipLerp `boolean`

```lua title="Example"
HPlayer:SetCameraArmLength()
```

---

### `AttachCameraTo`
Attaches the camera to another scene component

- InParent `USceneComponent`
- SocketOffset `Vector`
- BlendSpeed `number`
- <span style="color: #facc15;">returns:</span> `boolean`

```lua title="Example"
local wasAttached = HPlayer:AttachCameraTo()
```

---

### `ResetCamera`
Resets the camera to its default state

```lua title="Example"
HPlayer:ResetCamera()
```

---

### `RotateCameraTo`
Smoothly rotates the player’s view

- Rotation `Rotator`
- Time `number`
- BlendSpeed `number`

```lua title="Example"
HPlayer:RotateCameraTo()
```

---

### `SetValue`
Stores a custom value

- key `any`
- value `any`
- <span style="color: #facc15;">returns:</span> `boolean`

```lua title="Example"
local value = HPlayer:SetValue()
```

---

### `GetValue`
Retrieves a stored custom value

- key `any`
- <span style="color: #facc15;">returns:</span> any

```lua title="Example"
local value = HPlayer:GetValue()
```

---

### `GetName`
Returns the player's name

- <span style="color: #facc15;">returns:</span> `string`

```lua title="Example"
local name = HPlayer:GetName()
```

---

### `GetPing`
Returns the player’s ping

- <span style="color: #facc15;">returns:</span> `number`

```lua title="Example"
local ping = HPlayer:GetPing()
```

---

### `IsLocalPlayer`
Checks if this is the local player

- <span style="color: #facc15;">returns:</span> `boolean`

```lua title="Example"
local isLocal = HPlayer:IsLocalPlayer()
```

---

### `GiveItemByKey`
Grants an item to the player

- key `string`: Registered item key
- <span style="color: #facc15;">returns:</span> `ULyraInventoryItemInstance` | `nil`

```lua title="Example"
local giveItem = HPlayer:GiveItemByKey()
```

---

### `RemoveItemByKey`
Removes an item by key

- key `string`: Registered item key
- <span style="color: #facc15;">returns:</span> `boolean`

```lua title="Example"
local removeItem = HPlayer:RemoveItemByKey()
```

---

### `ClearInventory`
Clears the player’s inventory

```lua title="Example"
HPlayer:ClearInventory()
```

---

### `GetAll`
Returns all active players

- <span style="color: #facc15;">returns:</span> `table`

```lua title="Example"
local players = HPlayer:GetAll()
```

---

### `GetByIndex`
Gets a player by controller reference

- Controller `APlayerController`
- <span style="color: #facc15;">returns:</span> `HPlayer`

```lua title="Example"
local player = HPlayer:GetByIndex()
```

---

### `GetCount`
Returns the `number` of tracked players

- <span style="color: #facc15;">returns:</span> `number`

```lua title="Example"
local playerCount = HPlayer:GetCount()
```