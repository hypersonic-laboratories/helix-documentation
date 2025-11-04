---
title: HVehicle
description: HELIX vehicle!
sidebar_position: 0
tags: [class]
---
<HeaderDeclaration type="Class" name="HVehicle" />
HVehicle constructor and functions. This allows you to spawn a vehicle actor in the world and perform logical actions through class methods. This class also provides getter methods, allowing you to obtain data relating to specific vehicle actors.

## Examples

```lua
local VehicleActor = HVehicle(
    UE.FVector(-7940, 3400, 150),
    UE.FRotator(0, 180, 0),
    '/abcca-dax-veh/PongaseraGt/Blueprint/BP_PongaseraGtVehicle.BP_PongaseraGtVehicle_C',
    'QueryAndPhysics',
    true
)

VehicleActor:SetFuel(1.0)
```

```lua
local VehicleActor = HVehicle(
    UE.FVector(-7940, 3400, 150),
    UE.FRotator(0, 180, 0),
    '/abcca-dax-veh/PongaseraGt/Blueprint/BP_PongaseraGtVehicle.BP_PongaseraGtVehicle_C',
    'QueryAndPhysics',
    true
)

print(VehicleActor.Object) -- AActor
print(VehicleActor.Movement) -- UModularMovementComponent
```

## Variables

| Name              |       Type             |
| ----------------  | ------------------- |
| Movement          | UModularMovementComponent   |


## Constructors

<ConstructorDeclaration type="Class" name="HVehicle" />

```lua
local VehicleActor = HVehicle(Vector(0, 0, 0), Rotator(0, 0, 0), '/abcca-dax-veh/PongaseraGt/Blueprint/BP_PongaseraGtVehicle.BP_PongaseraGtVehicle_C', 'QueryAndPhysics', true)
```

| Type              |       Name        | Default | Description                                                              |
| ---------------  | :----------------- | ----- | ----------------------------------------------------------------------  |
| [Vector](../global-variables/structs.md/#vector) | `Location`   |  | The location to spawn the vehicle at.  |
| [Rotator](../global-variables/structs.md/#rotator) | `Rotation`  |   | The orentiation of the vehicle. |
| string | `BlueprintAsset`  |    |  Long package name for the vehicle BP, e.g. "/Game/Vehicles/BP_MyCar.BP_MyCar_C" |
| string | `CollisionType` | `QueryAndPhysics` | One of "NoCollision", "QueryOnly", "PhysicsOnly", "QueryAndPhysics" |
| boolean | `GravityEnabled` | `true` | Whether physics gravity is enabled |

### Returns
```lua
table: {
    Object: AActor,
    Movement: UModularMovementComponent,
}
```

## Functions

<FunctionsDeclaration type="Class" name="HVehicle" />

#### SetThrottleInput
Sets the throttle input for the vehicle.
```lua
HVehicle:SetThrottleInput(value)
```

| Type | Name  | Description |
|------|-------|-------------|
| number | `value` | The throttle input value (`0.0` or `1.0`, like bool). |

---
#### SetSteeringInput
Sets the steering input for the vehicle.
```lua
HVehicle:SetSteeringInput(value)
```

| Type | Name  | Description |
|------|-------|-------------|
| number | `value` | The steering input value (`-1.0` to `1.0`). |

---
#### SetBrakeInput
Sets the brake input for the vehicle.
```lua
HVehicle:SetBrakeInput(value)
```

| Type | Name  | Description |
|------|-------|-------------|
| number | `value` | The brake input value (`0.0` to `1.0`). |

---
#### SetHandBrakeInput
Sets the handbrake input for the vehicle.
```lua
HVehicle:SetHandBrakeInput(enabled)
```

| Type    | Name     | Description                      |
|---------|----------|----------------------------------|
| boolean | `enabled`  | Whether to enable or disable the handbrake. |

---


#### Horn
Sets the horn state for the vehicle.
```lua
HVehicle:Horn(state)
```

- state: `boolean` - Horn state

---

### Engine Control

#### HoldStarter
Holds the engine starter for a specified duration.
```lua
HVehicle:HoldStarter(startTime)
```

| Type   | Name      | Default | Description                   |
|--------|-----------|---------|-------------------------------|
| number | `startTime` | `0.0`   | The time to hold the starter. |

---
#### ReleaseStarter
Releases the engine starter.
```lua
HVehicle:ReleaseStarter()
```
---
#### StopEngine
Stops the engine.
```lua
HVehicle:StopEngine()
```
---
#### SetEngineHealth
Sets the health of the engine.
```lua
HVehicle:SetEngineHealth(health)
```

| Type   | Name    | Description                        |
|--------|---------|------------------------------------|
| number | `health`  | The engine health value (`0.0` to `1.0`). |

---

### Fuel System

#### AddFuel
Adds fuel to the vehicle's current fuel level (`0.0` to `1.0`).
```lua
HVehicle:AddFuel(amount)
```

| Type   | Name   | Description                    |
|--------|--------|--------------------------------|
| number | `amount` | The amount of fuel to add.     |

---
#### SetFuel
Sets the fuel level of the vehicle (`0.0` to `1.0`).
```lua
HVehicle:SetFuel(amount)
```

| Type   | Name   | Description                   |
|--------|--------|-------------------------------|
| number | `amount` | The fuel level to set.        |

---
#### GetFuelRatio
Gets the fuel level of the vehicle (`0.0` to `1.0`).
```lua
HVehicle:GetFuelRatio(number)
```
##### Returns
`number`: The current fuel level.

---

### State Queries

#### IsInReverse
Returns if the vehicle is in reverse.
```lua
HVehicle:IsInReverse()
```
##### Returns
`boolean`: True if the vehicle is in reverse, false otherwise.

---
#### GetRPMRatio
Returns the current RPM of the vehicle (`0.0` to `1.0`).
```lua
HVehicle:GetRPMRatio()
```

##### Returns
`number`: The current RPM of the vehicle.

---
#### GetNumberOfWheels
Returns the number of wheels on the vehicle.
```lua
HVehicle:GetNumberOfWheels()
```
##### Returns
`number`: The number of wheels on the vehicle.

---
#### GetNumberOfWheelsTouchingGround
Returns the number of wheels touching the ground.
```lua
HVehicle:GetNumberOfWheelsTouchingGround()
```
##### Returns
`number`: The number of wheels touching the ground.

---
#### GetNumberOfDriveWheelsTouchingGround
Returns the number of drive wheels touching the ground.
```lua
HVehicle:GetNumberOfDriveWheelsTouchingGround()
```
##### Returns
`number`: The number of drive wheels touching the ground.

---
#### GetMassPerWheel
Returns the mass per wheel of the vehicle.
```lua
HVehicle:GetMassPerWheel()
```
##### Returns
`number`: The mass per wheel of the vehicle.

---
#### IsBraking
Returns whether the vehicle is braking.
```lua
HVehicle:IsBraking()
```
##### Returns
`boolean`: True if the vehicle is braking, false otherwise.

---

#### GetEngineHealth
Returns the health of the engine.
```lua
HVehicle:GetEngineHealth()
```
#### Returns
`number`: The engine health in the range of 0-1.

---

### Sleep & Airborne

#### SetCanSleep
Sets whether the vehicle can sleep.
```lua
HVehicle:SetCanSleep(enabled)
```

| Type    | Name     | Description                     |
|---------|----------|---------------------------------|
| boolean | `enabled`  | Whether to enable or disable sleeping. |

---
#### SetSleeping
Sets whether the vehicle is sleeping.
```lua
HVehicle:SetSleeping(enabled)
```

| Type    | Name     | Description                     |
|---------|----------|---------------------------------|
| boolean | `enabled`  | Whether to enable or disable sleeping. |

---
#### ApplyAirbornePhysics
Sets whether to apply airborne physics.
```lua
HVehicle:ApplyAirbornePhysics(enabled)
```

| Type    | Name     | Description                            |
|---------|----------|----------------------------------------|
| boolean | `enabled`  | Whether to enable or disable airborne physics. |

### Setup & Data Access

#### GetSetup
Returns the vehicle's setup data.
```lua
HVehicle:GetSetup()
```
##### Returns
`UModularVehicleData`: The vehicle's setup data.

---

### Debugging & Utilities

#### GetWheels
Returns an array of wheels on the vehicle.
```lua
HVehicle:GetWheels()
```
##### Returns
`TArray_UModularWheel_`: An array of wheels on the vehicle.

---
#### UpdateComponents
Adds wheels onto the vehicle.
```lua
HVehicle:UpdateComponents()
```

| Type              | Name             | Description                          |
|-------------------|------------------|--------------------------------------|
| TArray_UModularWheel_ | additionalWheels | An array of additional wheels to add. |

---

### AI & Navigation

#### RequestDirectMove
Requests a direct move to a specified velocity.
```lua
HVehicle:RequestDirectMove(moveVelocity, forceMaxSpeed)
```

| Type     | Name         | Default | Description                         |
|----------|--------------|---------|-------------------------------------|
| [Vector](../global-variables/structs.md/#vector)  | moveVelocity |         | The target velocity for the vehicle. |
| boolean?  | forceMaxSpeed| `false` | Whether to force the maximum speed.  |

---
#### RequestPathMove
Requests movement through a new move input.
```lua
HVehicle:RequestPathMove(inputVector)
```

| Type     | Name       | Description                       |
|----------|------------|-----------------------------------|
| [Vector](../global-variables/structs.md/#vector)  | inputVector | The target input vector for the vehicle. |

---
#### StopActiveMovement
Stops applying further movement (usually zeros acceleration).
```lua
HVehicle:StopActiveMovement()
```

---
#### StopMovementKeepPathing
Stops movement immediately (reset velocity) but keeps following current path.
```lua
HVehicle:StopMovementKeepPathing()
```

---

### Replication & Cosmetic Sync

#### SetCosmeticDataOnServer
Sets the cosmetic data on the server.
```lua
HVehicle:SetCosmeticDataOnServer(data)
```

| Type            | Name | Description                |
|-----------------|------|----------------------------|
| FRepCosmeticData | `data` | The cosmetic data to set.  |

---

### Extra Nav Movement Helpers

#### IsFlying
Returns whether the vehicle is on the ground.
```lua
HVehicle:IsFlying()
```
##### Returns
`boolean`: true if the vehicle is on the ground, false otherwise.

---
#### IsFalling
Returns whether the vehicle is falling.
```lua
HVehicle:IsFalling()
```
##### Returns
`boolean`: true if the vehicle is falling, false otherwise.

---
#### IsMovingOnGround
Returns whether the vehicle is moving on the ground.
```lua
HVehicle:IsMovingOnGround()
```
##### Returns
`boolean`: true if the vehicle is moving on the ground, false otherwise.

---
#### IsSwimming
Returns whether the vehicle is swimming (moving through fluid volume).
```lua
HVehicle:IsSwimming()
```
##### Returns
`boolean`: true if the vehicle is swimming, false otherwise.

---
#### IsCrouching
Returns if the vehicle is crouching.
```lua
HVehicle:IsCrouching()
```
##### Returns
`boolean`: true if the vehicle is crouching, false otherwise.

---
#### GetVelocityForNavMovement
Gets the current velocity of the nav agent.
```lua
HVehicle:GetVelocityForNavMovement()
```
##### Returns
`FVector`: The current velocity of the nav agent.

---
#### GetMaxSpeedForNavMovement
Gets the maximum speed of the nav agent.
```lua
HVehicle:GetMaxSpeedForNavMovement()
```
##### Returns
`number`: The maximum speed for nav movement.

---

### Lights & Sirens
#### SetRightIndicator
Sets the right indicator state.
```lua
HVehicle:SetRightIndicator(NewState)
```

- NewState: `boolean` - New right indicator state

---

#### SetReverseLight
Sets the reverse light state.
```lua
HVehicle:SetReverseLight(NewState)
```

- NewState: `boolean` - New reverse light state

---

#### SetRedLightIntensity
Sets the red light intensity.
```lua
HVehicle:SetRedLightIntensity(Value)
```

- Value: `number` - Red light intensity value

---

#### SetLightsEmissiveStrength
Sets the lights emissive strength.
```lua
HVehicle:SetLightsEmissiveStrength(Value)
```

- Value: `number` - Emissive strength value

---

#### SetLeftIndicator
Sets the left indicator state.
```lua
HVehicle:SetLeftIndicator(NewState)
```

- NewState: `boolean` - New left indicator state

---

#### SetIndicatorLightsIntensity
Sets the indicator lights intensity.
```lua
HVehicle:SetIndicatorLightsIntensity(Value)
```

- Value: `number` - Indicator lights intensity value

---

#### SetIndicatorAnimationSpeed
Sets the indicator animation speed.
```lua
HVehicle:SetIndicatorAnimationSpeed(Value)
```

- Value: `number` - Animation speed value

---

#### SetHazardLight
Sets the hazard light state.
```lua
HVehicle:SetHazardLight(NewState)
```

- NewState: `boolean` - New hazard light state

---

#### SetBrakeLight
Sets the brake light state.
```lua
HVehicle:SetBrakeLight(NewState)
```

- NewState: `boolean` - New brake light state

---

#### SetSirenState
Sets the siren state.
```lua
HVehicle:SetSirenState(state)
```

- state: `boolean` - New siren state, if a siren is present

---

#### SetSirenEmissionStrength
Sets the siren light emission strength.
```lua
HVehicle:SetSirenEmissionStrength(Amount)
```

- Amount: `number` - Emission strength value

---

#### SetSirenRedColor
Sets the siren light red color.
```lua
HVehicle:SetSirenRedColor(NewColor)
```

- NewColor: [LinearColor](../global-variables/structs.md#linearcolor) - New red color for the siren light

---

#### SetSirenBlueColor
Sets the siren light blue color.
```lua
HVehicle:SetSirenBlueColor(NewColor)
```

- NewColor: [LinearColor](../global-variables/structs.md#linearcolor) - New blue color for the siren light

---

#### SetSirenBaseColor
Sets the siren light base color.
```lua
HVehicle:SetSirenBaseColor(NewColor)
```

- NewColor: [LinearColor](../global-variables/structs.md#linearcolor) - New base color for the siren light

---

#### SetSirenAnimationSpeed
Sets the siren light animation speed.
```lua
HVehicle:SetSirenAnimationSpeed(Speed)
```

- Speed: `number` - Animation speed value

---