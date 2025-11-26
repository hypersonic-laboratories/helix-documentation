---
title: HVehicle
description: HELIX vehicle!
tags: [class]
---
HVehicle constructor and functions. This allows you to spawn a vehicle actor in the world and perform logical actions through class methods. This class also provides getter methods, allowing you to obtain data relating to specific vehicle actors.


```lua title="Example"
local vehicle = HVehicle(
    UE.FVector(-7940, 3400, 150),
    UE.FRotator(0, 180, 0),
    '/abcca-dax-veh/PongaseraGt/Blueprint/BP_PongaseraGtVehicle.BP_PongaseraGtVehicle_C',
    'QueryAndPhysics',
    true
)

vehicle:SetFuel(1.0)
```

## Constructor

- <mark style="color:yellow;">returns</mark>: `table` — HVehicle wrapper with `.Object` (vehicle actor) and `.Movement` (`UModularMovementComponent`)

```lua
local vehicle = HVehicle(
    Vector(0, 0, 0),
    Rotator(0, 0, 0),
    '/abcca-dax-veh/PongaseraGt/Blueprint/BP_PongaseraGtVehicle.BP_PongaseraGtVehicle_C',
    'QueryAndPhysics',
    true
)
```

| Type              |       Name        | Default | Description                                                              |
| ---------------  | :----------------- | ----- | ----------------------------------------------------------------------  |
| [Vector](../global-variables/structs.md/#vector) | `Location`   |  | The location to spawn the vehicle at.  |
| [Rotator](../global-variables/structs.md/#rotator) | `Rotation`  |   | The orentiation of the vehicle. |
| string | `BlueprintAsset`  |    |  Long package name for the vehicle BP, e.g. "/Game/Vehicles/BP_MyCar.BP_MyCar_C" |
| string | `CollisionType` | `QueryAndPhysics` | One of "NoCollision", "QueryOnly", "PhysicsOnly", "QueryAndPhysics" |
| boolean | `GravityEnabled` | `true` | Whether physics gravity is enabled |

## Functions

### `SetThrottleInput`
Sets the throttle input for the vehicle.

- value: `number` — throttle value, typically `0.0` or `1.0` (on/off)

```lua title="Example"
vehicle:SetThrottleInput(1.0) -- full throttle
```

---

### `SetSteeringInput`
Sets the steering input for the vehicle.

- value: `number` — steering input in range `-1.0` (full left) to `1.0` (full right)

```lua title="Example"
vehicle:SetSteeringInput(-0.5) -- steer left
```

---

### `SetBrakeInput`
Sets the brake input for the vehicle.

- value: `number` — brake input in range `0.0` (no brake) to `1.0` (full brake)

```lua title="Example"
vehicle:SetBrakeInput(1.0) -- hard brake
```

---

### `SetHandBrakeInput`
Sets the handbrake state for the vehicle.

- enabled: `boolean` — `true` to enable handbrake, `false` to release

```lua title="Example"
vehicle:SetHandBrakeInput(true)
```

---


#### `Horn`
Sets the horn state for the vehicle.

- state: `boolean` — `true` to honk, `false` to stop

```lua title="Example"
vehicle:Horn(true)
```

---

### Engine Control

#### `HoldStarter`
Holds the engine starter for a specified duration.

- startTime: `number` — time to hold the starter in seconds (default `0.0`)

```lua title="Example"
vehicle:HoldStarter(0.5)
```

---

#### `ReleaseStarter`
Releases the engine starter.

```lua title="Example"
vehicle:ReleaseStarter()
```

---

#### `StopEngine`
Stops the engine.

```lua title="Example"
vehicle:StopEngine()
```


---

#### `SetEngineHealth`
Sets the engine health.

- `health: number` — engine health value in range `0.0` (destroyed) to `1.0` (full)

```lua title="Example"
vehicle:SetEngineHealth(0.75)
```

---

#### `GetEngineHealth`
Gets the engine/vehicle health.

- <mark style="color:yellow;">returns</mark>: `number|nil` — health in range `0.0` to `1.0`, or `nil` if movement is missing

```lua title="Example"
local health = vehicle:GetEngineHealth() or 0.0
```

---

### Fuel System

#### `AddFuel`
Adds fuel to the vehicle’s current fuel level.

- `amount: number` — amount of fuel to add (use `0.0`–`1.0` scale)

```lua title="Example"
vehicle:AddFuel(0.1)
```

---

#### `SetFuel`
Sets the fuel level of the vehicle.

- `amount: number` — new fuel level in range `0.0` to `1.0`

```lua title="Example"
vehicle:SetFuel(0.5)
```

---

#### `GetFuelRatio`
Gets the current fuel ratio of the vehicle.

- <mark style="color:yellow;">returns</mark>: `number` — fuel level in range `0.0` to `1.0` (defaults to `0.0` if missing)

```lua title="Example"
local fuel = vehicle:GetFuelRatio()
```

---

### State Queries

#### `IsInReverse`
Returns if the vehicle is currently in reverse gear.

- <mark style="color:yellow;">returns</mark>: `boolean` — `true` if in reverse, otherwise `false`

```lua title="Example"
if vehicle:IsInReverse() then
    -- show reverse icon
end
```

---

#### `GetRPMRatio`
Gets the normalized engine RPM.

- <mark style="color:yellow;">returns</mark>: `number` — RPM ratio between `0.0` and `1.0`

```lua title="Example"
local rpm = vehicle:GetRPMRatio()
```

---

#### `GetNumberOfWheels`
Returns the total number of wheels on the vehicle.

- <mark style="color:yellow;">returns</mark>: `integer` — wheel count

```lua title="Example"
print("Wheels:", vehicle:GetNumberOfWheels())
```

---

#### `GetNumberOfWheelsTouchingGround`
Returns how many wheels are currently touching the ground.

- <mark style="color:yellow;">returns</mark>: `integer` — number of wheels on ground

```lua title="Example"
local grounded = vehicle:GetNumberOfWheelsTouchingGround()
```

---

#### `GetNumberOfDriveWheelsTouchingGround`
Returns how many drive wheels are drive wheels and touching the ground.

- <mark style="color:yellow;">returns</mark>: `integer` — number of drive wheels on ground

```lua title="Example"
local drivenGrounded = vehicle:GetNumberOfDriveWheelsTouchingGround()
```

---

#### `GetMassPerWheel`
Returns the mass per wheel.

- <mark style="color:yellow;">returns</mark>: `number` — mass per wheel

```lua title="Example"
local massPerWheel = vehicle:GetMassPerWheel()
```

---

#### `IsBraking`
Returns whether the vehicle is currently braking.

- <mark style="color:yellow;">returns</mark>: `boolean` — `true` if braking, otherwise `false`

```lua title="Example"
if vehicle:IsBraking() then
    -- brake lights logic
end
```

---

### Sleep & Airborne

#### `SetCanSleep`
Controls whether the vehicle is allowed to go to sleep (physics idle).

- enabled: `boolean` — `true` to allow sleeping, `false` to prevent

```lua title="Example"
vehicle:SetCanSleep(false)
```

---

#### `SetSleeping`
Forces the vehicle into or out of sleeping state.

- enabled: `boolean` — `true` to force sleeping, `false` to wake

```lua title="Example"
vehicle:SetSleeping(true)
```

---

#### `ApplyAirbornePhysics`
Applies airborne physics behavior once (used when the vehicle is in the air).

```lua title="Example"
vehicle:ApplyAirbornePhysics()
```

### Setup & Data Access

#### `GetSetup`
Returns the vehicle’s setup data.

- <mark style="color:yellow;">returns</mark>: `UModularVehicleData | nil` — setup data or `nil`

```lua title="Example"
local setup = vehicle:GetSetup()
```

---

### Debugging & Utilities

#### `GetWheels`
Returns the wheels on the vehicle.

- <mark style="color:yellow;">returns</mark>: `table` — array-like table of `UModularWheel` objects

```lua title="Example"
local wheels = vehicle:GetWheels()
```

---

#### `UpdateComponents`
Updates vehicle components with additional wheels.

- additionalWheels: `table` — array-like table of `UModularWheel` objects to add

```lua title="Example"
vehicle:UpdateComponents(extraWheels)
```

---

### AI & Navigation

#### `RequestDirectMove`
Requests a direct move towards a velocity (AI/navigation helper).

- moveVelocity: `Vector` — desired movement velocity
- forceMaxSpeed: `boolean` — `true` to force max speed, `false` to respect limits (default `false`)

```lua title="Example"
vehicle:RequestDirectMove(Vector(1000, 0, 0), false)
```

---

#### `RequestPathMove`
Requests movement through a new move input vector (AI/navigation helper).

- inputVector: `Vector` — movement input direction/magnitude

```lua title="Example"
vehicle:RequestPathMove(Vector(1, 0, 0))
```

---

#### `StopActiveMovement`
Stops applying further movement (usually zeroes acceleration).

```lua title="Example"
vehicle:StopActiveMovement()
```

---

#### `StopMovementKeepPathing`
Stops movement immediately but continues following the current navigation path.

```lua title="Example"
vehicle:StopMovementKeepPathing()
```

---

### Replication & Cosmetic Sync

#### `SetCosmeticDataOnServer`
Sets replicated cosmetic data on the server.

- data: `FRepCosmeticData` — cosmetic data struct

```lua title="Example"
vehicle:SetCosmeticDataOnServer(cosmeticData)
```

---

### Extra Nav Movement Helpers

#### `IsFlying`
Whether the vehicle is considered flying.

- <mark style="color:yellow;">returns</mark>: `boolean` — `true` if flying

```lua title="Example"
if vehicle:IsFlying() then
    -- airborne logic
end
```

---

#### `IsFalling`
Whether the vehicle is falling.

- <mark style="color:yellow;">returns</mark>: `boolean` — `true` if falling

```lua title="Example"
if vehicle:IsFalling() then
    -- falling logic
end
```

---

#### `IsMovingOnGround`
Whether the vehicle is moving on the ground.

- <mark style="color:yellow;">returns</mark>: `boolean` — `true` if moving on ground

```lua title="Example"
if vehicle:IsMovingOnGround() then
    -- traction logic
end
```

---

#### `IsSwimming`
Whether the vehicle is swimming (moving through fluid).

- <mark style="color:yellow;">returns</mark>: `boolean` — `true` if swimming

```lua title="Example"
if vehicle:IsSwimming() then
    -- water logic
end
```

---

#### `IsCrouching`
Whether the nav movement considers the vehicle “crouching” (rare for vehicles, but exposed).

- <mark style="color:yellow;">returns</mark>: `boolean` — `true` if crouching

```lua title="Example"
if vehicle:IsCrouching() then
    -- low-profile logic
end
```

---

#### `GetVelocityForNavMovement`
Gets the current velocity used by nav movement.

- <mark style="color:yellow;">returns</mark>: `Vector` — current nav velocity (defaults to `Vector(0,0,0)`)

```lua title="Example"
local vel = vehicle:GetVelocityForNavMovement()
```

---

#### `GetMaxSpeedForNavMovement`
Gets the maximum speed used for navigation.

- <mark style="color:yellow;">returns</mark>: `number` — max nav speed

```lua title="Example"
local maxSpeed = vehicle:GetMaxSpeedForNavMovement()
```

---

### Lights & Sirens

### `SetRightIndicator`
Sets the right indicator/blinker state.

- `NewState: boolean` — `true` to enable, `false` to disable

```lua title="Example"
vehicle:SetRightIndicator(true)
```

---

### `SetLeftIndicator`
Sets the left indicator/blinker state.

- `NewState: boolean` — `true` to enable, `false` to disable

```lua title="Example"
vehicle:SetLeftIndicator(true)
```

---

#### `SetReverseLight`
Sets the reverse light state.

- `NewState: boolean` — `true` to enable, `false` to disable

```lua title="Example"
vehicle:SetReverseLight(true)
```

---

#### `SetRedLightIntensity`
Sets the red light intensity (e.g. emergency light).

- Value: `number` — red light intensity

```lua title="Example"
vehicle:SetRedLightIntensity(5.0)
```

---

#### `SetLightsEmissiveStrength`
Sets overall light emissive strength.

- Value: `number` — emissive strength

```lua title="Example"
vehicle:SetLightsEmissiveStrength(3.0)
```

---

#### `SetIndicatorLightsIntensity`
Sets indicator light intensity.

- Value: `number` — indicator light intensity

```lua title="Example"
vehicle:SetIndicatorLightsIntensity(4.0)
```

---

#### `SetIndicatorAnimationSpeed`
Sets indicator blink animation speed.

- Value: `number` — animation speed

```lua title="Example"
vehicle:SetIndicatorAnimationSpeed(1.5)
```

---

#### `SetHazardLight`
Sets the hazard lights state.

- NewState: `boolean` — `true` to enable hazards, `false` to disable

```lua title="Example"
vehicle:SetHazardLight(true)
```

---

#### `SetBrakeLight`
Sets the brake light state manually.

- `NewState: boolean` — `true` to enable, `false` to disable

```lua title="Example"
vehicle:SetBrakeLight(true)
```

---

#### `SetSirenState`
Toggles the siren state if a siren component is present.

- `state: boolean` — `true` to enable siren, `false` to disable

```lua title="Example"
vehicle:SetSirenState(true)
```

---

#### `SetSirenEmissionStrength`
Sets siren light emission strength.

- `Amount: number` — emission strength

```lua title="Example"
vehicle:SetSirenEmissionStrength(2.0)
```

---

#### `SetSirenRedColor`
Sets the siren red color.

- NewColor: `LinearColor` — new red color

```lua title="Example"
vehicle:SetSirenRedColor(LinearColor(1, 0, 0, 1))
```

---

#### `SetSirenBlueColor`
Sets the siren blue color.

- NewColor: `LinearColor` — new blue color

```lua title="Example"
vehicle:SetSirenBlueColor(LinearColor(0, 0, 1, 1))
```

---

#### `SetSirenBaseColor`
Sets the siren base color.

- NewColor: `LinearColor` — new base color

```lua title="Example"
vehicle:SetSirenBaseColor(LinearColor(1, 1, 1, 1))
```

---

#### `SetSirenAnimationSpeed`
Sets the siren animation speed.

- Speed: `number` — animation speed multiplier

```lua title="Example"
vehicle:SetSirenAnimationSpeed(1.2)
```