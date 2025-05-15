---
title: Controller
description: Base class for all Controller entities
tags: [base-class]
---
<HeaderDeclaration type="Class" name="Damageable" />
`PlayerController` is the class responsible for handling player input and possessing pawns.
It acts as the bridge between the player's inputs (keyboard, mouse, gamepad) and the game world, processing input events, managing the HUD, camera control, and interacting with possessed pawns or characters.
Controllers exist independently of pawns and can be reassigned dynamically.

/// info
A `PlayerController` is automatically created for each player that joins the game.
It serves as the player's presence in the world, handling input and controlling a pawn when one is possessed.
///

/// tip
`PlayerController` is an `Actor` so it inherits all functions from [Actor](#actor)
///

```lua title="Example"
local Controller = UE.UGameplayStatics.GetPlayerController(HWorld, 0)
```

## Functions
<FunctionsDeclaration type="Class" name="Damageable" />

### `Possess`
Handles attaching this controller to the specified pawn
Only runs on the network authority (where HasAuthority() returns true)
```lua title="Example"
Controller:Possess(pawn)
```

---

### `UnPossess`
Called to unpossess our pawn for any reason that is not the pawn being destroyed
```lua title="Example"
Controller:UnPossess()
```

---

### `K2_GetPawn`
Return the Pawn that is currently 'controlled' by this PlayerController
```lua title="Example"
Controller:K2_GetPawn()
```

---

### `StopMovement`
Aborts the move the controller is currently performing
```lua title="Example"
Controller:StopMovement()
```

---

### `SetIgnoreMoveInput`
Locks or unlocks movement input
```lua title="Example"
Controller:SetIgnoreMoveInput(true)
```

---

### `SetIgnoreLookInput`
Locks or unlocks look input
```lua title="Example"
Controller:SetIgnoreLookInput(true)
```

---

### `IsMoveInputIgnored`
Returns true if movement input is ignored
```lua title="Example"
Controller:IsMoveInputIgnored()
```

---

### `IsLookInputIgnored`
Returns true if look input is ignored
```lua title="Example"
Controller:IsLookInputIgnored()
```

---

### `ResetIgnoreMoveInput`
Stops ignoring move input by resetting the ignore move input state
```lua title="Example"
Controller:ResetIgnoreMoveInput()
```

---

### `ResetIgnoreLookInput`
Stops ignoring look input by resetting the ignore look input state
```lua title="Example"
Controller:ResetIgnoreLookInput()
```

---

### `GetViewTarget`
Get the actor the controller is looking at
```lua title="Example"
Controller:GetViewTarget()
```

---

### `WasInputKeyJustReleased`
Returns true if the given key/button was down last frame and up this frame
```lua title="Example"
local key = UE.FKey("E")
Controller:WasInputKeyJustReleased(key)
```

---

### `WasInputKeyJustPressed`
Returns true if the given key/button was up last frame and down this frame
```lua title="Example"
local key = UE.FKey("E")
Controller:WasInputKeyJustPressed(key)
```

---

### `SetName`
Tries to set the player's name to the given name
```lua title="Example"
local name = 'Kakarot'
Controller:SetName(name)
```

---

### `SetMouseLocation`
Positions the mouse cursor in screen space, in pixels
```lua title="Example"
local x, y = 100, 100
Controller:SetMouseLocation(x, y)
```

---

### `GetMousePosition`
Retrieves the current X and Y screen coordinates of the mouse cursor.
Returns `false` if no mouse is available (e.g. on gamepad or touchscreen).
```lua title="Example"
local X = UE.NewFloat(0)
local Y = UE.NewFloat(0)
Controller:GetMousePosition(X, Y)
print("Mouse is at:", X:Value(), Y:Value())
```

---

### `IsInputKeyDown`
Returns true if the given key/button is pressed on the input of the controller (if present)
```lua title="Example"
local key = UE.FKey("E")
Controller:IsInputKeyDown(key)
```

---

### `GetInputKeyTimeDown`
Returns how long the given key/button has been down.
Returns 0 if it's up or it just went down this frame
```lua title="Example"
local key = UE.FKey("E")
Controller:IsInputKeyDown(key)
```

---

### `GetViewportSize`
Returns the current size of the viewport (screen resolution in pixels) for this player controller
```lua title="Example"
local SizeX = UE.NewInteger(0)
local SizeY = UE.NewInteger(0)
Controller:GetViewportSize(SizeX, SizeY)
print("Viewport size:", SizeX:Value(), SizeY:Value())
```

---

### `GetInputMouseDelta`
Retrieves how far the mouse moved this frame on the X and Y axes
```lua title="Example"
local DeltaX = UE.NewFloat(0)
local DeltaY = UE.NewFloat(0)
Controller:GetInputMouseDelta(DeltaX, DeltaY)
print("Mouse moved:", DeltaX:Value(), DeltaY:Value())
```

---

### `FOV`
Set the field of view
```lua title="Example"
Controller:FOV(100)
```

---

### `ProjectWorldLocationToScreen`
Convert a World Space 3D position into a 2D Screen Space position
```lua title="Example"
local worldPos = Vector(100, 200, 300)
local screenPos = Vector2D()
Controller:ProjectWorldLocationToScreen(worldPos, screenPos, false)
print("Screen position:", screenPos.X, screenPos.Y)
```

---

### `DeprojectScreenPositionToWorld`
Convert 2D screen position to World Space 3D position and direction
Returns false if unable to determine value
```lua title="Example"
local ScreenPos = Vector2D(960, 540)
local WorldLoc = Vector(0, 0, 0)
local WorldDir = Vector(0, 0, 0)

Controller:DeprojectScreenPositionToWorld(
    ScreenPos.X,
    ScreenPos.Y,
    WorldLoc,
    WorldDir
)

print("World location:", WorldLoc)
print("World direction:", WorldDir)
```

---

### `DeprojectMousePositionToWorld`
Converts the current mouse 2D position into a 3D world location and direction
Returns `false` if unable to deproject (e.g., no mouse available)
```lua title="Example"
local WorldLocation = Vector(0, 0, 0)
local WorldDirection = Vector(0, 0, 0)
Controller:DeprojectMousePositionToWorld(WorldLocation, WorldDirection)
print("Ray origin:", WorldLocation)
print("Ray direction:", WorldDirection)
```

---

### `ClientSetViewTarget`
Sets the view target (camera focus) of the player to the specified actor
You can use this to smoothly switch to another camera, focus on a cinematic actor, or temporarily follow another pawn.
To make an instant switch, set BlendTime to 0
```lua title="Example"
local target = MyCameraActor -- any AActor, e.g., ACameraActor, Pawn, etc.
local params = UE.FViewTargetTransitionParams()
params.BlendTime = 1.5
params.BlendFunction = UE.EViewTargetBlendFunction.VTBlend_Cubic
Controller:ClientSetViewTarget(target, params)
```

---

### `ClientPlaySound`
Plays a sound locally on the client (only this player will hear it)
```lua title="Example"
local sound = UE.UObject.Load("/Game/Sounds/Click.Click")
Controller:ClientPlaySound(sound, 1.0, 1.0)
```

---

### `AddYawInput`
Adds horizontal rotation input (turning left/right).
This value is scaled by the controller's `InputYawScale`
```lua title="Example"
Controller:AddYawInput(2.0)    -- Turn right slightly
```

---

### `AddRollInput`
Adds roll rotation input (tilting the camera left/right).
This value is scaled by the controller's InputRollScale
```lua title="Example"
Controller:AddRollInput(1.0) -- Tilt right slightly
```

---

### `AddPitchInput`
Adds vertical rotation input (looking up/down).
This value is scaled by the controller's InputPitchScale
```lua title="Example"
Controller:AddPitchInput(-1.0) -- Look down slightly
```